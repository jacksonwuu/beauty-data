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
