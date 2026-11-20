import * as THREE from "three";

/**
 * Poster texture pages ("atlas") shared by every billboard card.
 *
 * A card is ~70 px tall on screen, so one 72x108 cell per poster is enough and
 * all of them fit in a single 2958x3298 page. That turns 1200 image requests
 * and 1200 GPU textures (~295 MB decoded) into one request and one texture
 * (~39 MB), and lets every card share a single material.
 */
export interface PosterAtlasCell {
  id: string;
  x: number;
  y: number;
}

export interface PosterAtlasPage {
  src: string;
  cells: PosterAtlasCell[];
}

export interface PosterAtlas {
  cell: { w: number; h: number };
  page: { w: number; h: number };
  pages: PosterAtlasPage[];
}

export interface PosterUvRect {
  src: string;
  u0: number;
  v0: number;
  u1: number;
  v1: number;
}

export type PosterAtlasLookup = (itemId: string) => PosterUvRect | undefined;

/**
 * Tiled atlas: the same cells at several times the resolution, cut into
 * GPU-sized tiles, plus one per-film image per cell for the zoomed-in view.
 */
export interface PosterAtlasTileCell {
  id: string;
  src: string;
  x: number;
  y: number;
}

export interface PosterAtlasTileAtlas {
  cell: { w: number; h: number };
  tile: { w: number; h: number };
  cells: PosterAtlasTileCell[];
}

/** `fine` is only requested once a card is big on screen. */
export interface PosterTierUrls {
  tile: PosterUvRect;
  fine?: string;
}

export type PosterTileLookup = (itemId: string) => PosterTierUrls | undefined;

/** Vite's base path: "/" in dev, "/beauty-data/" under GitHub Pages. */
function assetRoot(): string {
  const base = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? "/";

  return base.endsWith("/") ? base.slice(0, -1) : base;
}

/**
 * Relative asset paths in the atlas JSON ("posters/tile-0.webp") must resolve
 * against the base path, otherwise a sub-path deploy
 * (https://user.github.io/repo/) looks for the texture at the domain root.
 */
export function resolvePosterSrc(src: string) {
  return /^https?:|^\//.test(src) ? src : `${assetRoot()}/${src}`;
}

export function createPosterTileLookup(atlas: PosterAtlasTileAtlas): PosterTileLookup {
  const rects = new Map<string, PosterTierUrls>();
  const { w: tileWidth, h: tileHeight } = atlas.tile;
  const { w: cellWidth, h: cellHeight } = atlas.cell;

  atlas.cells.forEach((cell) => {
    rects.set(cell.id, {
      tile: {
        src: resolvePosterSrc(cell.src),
        u0: cell.x / tileWidth,
        v0: 1 - (cell.y + cellHeight) / tileHeight,
        u1: (cell.x + cellWidth) / tileWidth,
        v1: 1 - cell.y / tileHeight
      },
      fine: `${assetRoot()}/posters/${cell.id}.webp`
    });
  });

  return (itemId) => rects.get(itemId);
}

export function createPosterAtlasLookup(atlas: PosterAtlas): PosterAtlasLookup {
  const rects = new Map<string, PosterUvRect>();
  const { w: pageWidth, h: pageHeight } = atlas.page;
  const { w: cellWidth, h: cellHeight } = atlas.cell;

  atlas.pages.forEach((page) => {
    page.cells.forEach((cell) => {
      // Canvas textures are flipped, so v grows from the bottom of the page.
      rects.set(cell.id, {
        src: page.src,
        u0: cell.x / pageWidth,
        v0: 1 - (cell.y + cellHeight) / pageHeight,
        u1: (cell.x + cellWidth) / pageWidth,
        v1: 1 - cell.y / pageHeight
      });
    });
  });

  return (itemId) => rects.get(itemId);
}

export const FULL_POSTER_UV: PosterUvRect = { src: "", u0: 0, v0: 0, u1: 1, v1: 1 };

interface MaterialCacheEntry {
  material?: THREE.MeshBasicMaterial;
  promise?: Promise<THREE.MeshBasicMaterial>;
}

const materialCache = new Map<string, MaterialCacheEntry>();
/** Tiles are ~1.5 MB decoded each; cap the LRU so panning never unbounded-grows. */
const MATERIAL_CACHE_LIMIT = 96;
let placeholderMaterial: THREE.MeshBasicMaterial | null = null;

export function getPosterPlaceholderMaterial() {
  if (!placeholderMaterial) {
    placeholderMaterial = new THREE.MeshBasicMaterial({
      color: "#11161a",
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
      toneMapped: false
    });
  }

  return placeholderMaterial;
}

export function getCachedPosterMaterial(src: string) {
  return materialCache.get(src)?.material ?? null;
}

export function loadPosterMaterial(src: string, gl: THREE.WebGLRenderer) {
  const cached = materialCache.get(src);

  if (cached?.material) {
    return Promise.resolve(cached.material);
  }

  if (cached?.promise) {
    return cached.promise;
  }

  const entry: MaterialCacheEntry = {};
  const promise = new Promise<THREE.MeshBasicMaterial>((resolve, reject) => {
    new THREE.TextureLoader().load(
      src,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = Math.min(8, gl.capabilities.getMaxAnisotropy());
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;
        texture.needsUpdate = true;

        const material = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
          depthTest: false,
          depthWrite: false,
          toneMapped: false
        });

        entry.material = material;
        entry.promise = undefined;
        resolve(material);
      },
      undefined,
      (error) => {
        materialCache.delete(src);
        reject(error);
      }
    );
  });

  entry.promise = promise;
  materialCache.set(src, entry);

  if (materialCache.size > MATERIAL_CACHE_LIMIT) {
    for (const [key, value] of materialCache) {
      if (materialCache.size <= MATERIAL_CACHE_LIMIT) {
        break;
      }

      if (!value.material) {
        continue;
      }

      value.material.map?.dispose();
      value.material.dispose();
      materialCache.delete(key);
    }
  }

  return promise;
}

/** Drops page textures, e.g. when a new atlas build is deployed. */
export function clearPosterMaterialCache() {
  materialCache.forEach((entry) => {
    entry.material?.map?.dispose();
    entry.material?.dispose();
  });
  materialCache.clear();
}

