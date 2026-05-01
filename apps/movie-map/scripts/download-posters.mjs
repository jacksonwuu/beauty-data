import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, "..");
const moviesPath = path.join(appRoot, "src/data/movies.ts");
const manifestPath = path.join(appRoot, "src/data/posterManifest.json");
const outputDir = path.join(appRoot, "public/posters");
const concurrency = 8;

function extractRawMovies(source) {
  const startMarker = "const rawMovies = ";
  const endMarker = ";\n\nexport const movies";
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker, start);

  if (start === -1 || end === -1) {
    throw new Error("Could not locate rawMovies in movies.ts");
  }

  return JSON.parse(source.slice(start + startMarker.length, end));
}

function proxiedPosterUrl(url) {
  const strippedProtocol = url.replace(/^https?:\/\//, "");
  return `https://images.weserv.nl/?url=${strippedProtocol}&w=320&h=460&fit=cover`;
}

function extensionForContentType(contentType) {
  if (contentType.includes("png")) {
    return "png";
  }

  if (contentType.includes("webp")) {
    return "webp";
  }

  return "jpg";
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

async function writePlaceholder(movie) {
  const fileName = `${movie.id}.svg`;
  const filePath = path.join(outputDir, fileName);
  const title = escapeXml(movie.title);
  const year = escapeXml(movie.year ?? "");
  const rating = escapeXml(movie.rating ? `${movie.rating.toFixed(1)} / 10` : "No rating");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="460" viewBox="0 0 320 460">
  <rect width="320" height="460" fill="#0a0d0e"/>
  <rect x="18" y="18" width="284" height="424" fill="none" stroke="#f6c453" stroke-width="4"/>
  <text x="28" y="64" fill="#f6c453" font-family="Arial, sans-serif" font-size="18" font-weight="700">LOCAL PLACEHOLDER</text>
  <foreignObject x="28" y="112" width="264" height="210">
    <div xmlns="http://www.w3.org/1999/xhtml" style="color:#fff8df;font-family:Arial,sans-serif;font-size:28px;font-weight:700;line-height:1.1;word-break:break-word;">${title}</div>
  </foreignObject>
  <text x="28" y="392" fill="#fff8df" font-family="Arial, sans-serif" font-size="22" font-weight="700">${year}</text>
  <text x="28" y="422" fill="#62d7c8" font-family="Arial, sans-serif" font-size="18" font-weight="700">${rating}</text>
</svg>`;
  await writeFile(filePath, svg, "utf8");
  return `/posters/${fileName}`;
}

async function downloadImage(movie) {
  const id = movie.id;
  const candidates = [movie.coverUrl, proxiedPosterUrl(movie.coverUrl)];

  for (const url of candidates) {
    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36",
          Referer: "https://movie.douban.com/"
        }
      });

      const contentType = response.headers.get("content-type") ?? "";

      if (!contentType.startsWith("image/")) {
        continue;
      }

      const buffer = Buffer.from(await response.arrayBuffer());

      if (buffer.length < 1024) {
        continue;
      }

      const extension = extensionForContentType(contentType);
      const fileName = `${id}.${extension}`;
      const filePath = path.join(outputDir, fileName);
      await writeFile(filePath, buffer);

      return `/posters/${fileName}`;
    } catch {
      // Try the next candidate URL.
    }
  }

  return null;
}

async function main() {
  await mkdir(outputDir, { recursive: true });

  const source = await readFile(moviesPath, "utf8");
  const movies = extractRawMovies(source);
  const manifest = {};
  let completed = 0;
  let success = 0;

  async function worker(workerIndex) {
    for (let index = workerIndex; index < movies.length; index += concurrency) {
      const movie = movies[index];
      const existingExtensions = ["jpg", "png", "webp", "svg"];
      const existing = existingExtensions
        .map((extension) => `/posters/${movie.id}.${extension}`)
        .find((posterPath) => existsSync(path.join(appRoot, "public", posterPath)));

      const posterPath = existing ?? (await downloadImage(movie)) ?? (await writePlaceholder(movie));
      completed += 1;

      if (posterPath) {
        manifest[movie.id] = posterPath;
        success += 1;
      }

      if (completed % 25 === 0 || completed === movies.length) {
        console.log(`[posters] ${completed}/${movies.length} processed, ${success} saved`);
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, (_, index) => worker(index)));
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  console.log(`[posters] wrote ${manifestPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
