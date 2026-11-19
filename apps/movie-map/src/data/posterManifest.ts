import posterManifestData from "./posterManifest.json";

// Set by the Vite config for public builds; absent on the dev server so local
// work still uses the downloaded artwork.
const PUBLIC_BUILD = import.meta.env.VITE_PUBLIC_DATA === true;

const manifest = posterManifestData as Record<string, string>;

/**
 * Poster file per movie id. The public build ships no scraped artwork, so the
 * whole manifest (and the import above) drops out of that bundle.
 */
export const posterManifest: Record<string, string> = PUBLIC_BUILD ? {} : manifest;
