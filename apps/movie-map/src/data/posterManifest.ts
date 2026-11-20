import posterManifestData from "./posterManifest.json";

/**
 * Poster file per movie id, e.g. `movie: "/posters/movie-1291546.jpg"`.
 *
 * Douban blocks hotlinking (its image hosts answer 418/403), so the public
 * deployment has to serve the artwork itself — that is why this manifest is
 * part of every build. Films without a downloaded poster (`""`) fall back to
 * typographic cards.
 */
export const posterManifest: Record<string, string> = posterManifestData as Record<string, string>;
