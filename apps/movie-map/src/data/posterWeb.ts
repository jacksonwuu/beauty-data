import type { PosterAtlasTileAtlas } from "@beauty-data/globe-core";
import posterAtlasWebData from "./posterAtlasWeb.json";

/**
 * High-resolution atlas used by the public build.
 *
 * The low-res atlas (`posterAtlas.ts`) samples 72x108 px cells, which looked
 * mushy on a retina display and outright blurry when a card grew. This one
 * carries the same cells at 480x720 in 1448x1444 tiles, plus one full-size
 * image per film that only loads once a card is big on screen.
 *
 * Built by `scripts/build-web-atlas.py`.
 */
export const posterTileAtlas = posterAtlasWebData as unknown as PosterAtlasTileAtlas;
