import { createPosterAtlasLookup, resolvePosterSrc, type PosterAtlas } from "@beauty-data/globe-core";
import posterAtlasData from "./posterAtlas.json";

/**
 * Poster atlas built by `scripts/build-poster-atlas.py`.
 *
 * Every globe card samples its cell from a single shared page texture, so the
 * globe issues one image request instead of 1200 (and uses one GPU texture
 * instead of 1200).
 */
// The public build uses the high-resolution tiled atlas instead
// (`posterWeb.ts`), so this one drops out of that bundle.
const PUBLIC_BUILD = import.meta.env.VITE_PUBLIC_DATA === true;

const withBase = <T extends { src: string }>(entry: T): T => ({ ...entry, src: resolvePosterSrc(entry.src) });

export const posterAtlas = PUBLIC_BUILD
  ? null
  : { ...(posterAtlasData as unknown as PosterAtlas), pages: (posterAtlasData as unknown as PosterAtlas).pages.map(withBase) };

export const lookupPosterCell = posterAtlas ? createPosterAtlasLookup(posterAtlas) : null;

/**
 * Card art for films without a poster (a handful of obscure titles). Slugless
 * so it also resolves under a sub-path deployment such as GitHub project pages.
 */
export const publicPlaceholder = "placeholder.svg";
