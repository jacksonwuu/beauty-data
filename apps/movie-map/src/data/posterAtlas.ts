import { createPosterAtlasLookup, type PosterAtlas } from "@beauty-data/globe-core";
import posterAtlasData from "./posterAtlas.json";

/**
 * Poster atlas built by `scripts/build-poster-atlas.py`.
 *
 * Every globe card samples its cell from a single shared page texture, so the
 * globe issues one image request instead of 1200 (and uses one GPU texture
 * instead of 1200).
 */
// `vite --mode public` (switched on by the Vite config) turns this into a
// literal `true` and the whole scraped atlas drops out of the bundle.
const PUBLIC_BUILD = import.meta.env.VITE_PUBLIC_DATA === true;

export const posterAtlas = PUBLIC_BUILD ? null : (posterAtlasData as unknown as PosterAtlas);

export const lookupPosterCell = posterAtlas ? createPosterAtlasLookup(posterAtlas) : null;

/**
 * Card art for films without a redistributable poster (always the case in the
 * public build, where every scraped image is stripped). Slugless so it also
 * resolves under a sub-path deployment such as GitHub project pages.
 */
export const publicPlaceholder = PUBLIC_BUILD ? "placeholder.svg" : "";
