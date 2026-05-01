import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createReadStream, existsSync } from "node:fs";
import path from "node:path";
import readline from "node:readline";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, "..");
const moviesPath = path.join(appRoot, "src/data/movies.ts");
const csvPath = path.join(appRoot, "data/movies.csv");
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

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const nextChar = line[index + 1];

    if (char === '"' && inQuotes && nextChar === '"') {
      current += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      values.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  values.push(current);
  return values;
}

async function loadImdbIdsBySourceId(movies) {
  if (!existsSync(csvPath)) {
    return new Map();
  }

  const pendingSourceIds = new Set(movies.map((movie) => movie.sourceId));
  const imdbIdsBySourceId = new Map();
  const lines = readline.createInterface({
    input: createReadStream(csvPath, { encoding: "utf8" }),
    crlfDelay: Infinity
  });

  for await (const line of lines) {
    if (pendingSourceIds.size === 0) {
      lines.close();
      break;
    }

    const normalizedLine = line.replace(/^\uFEFF/, "");

    if (!normalizedLine || normalizedLine.startsWith('"MOVIE_ID"')) {
      continue;
    }

    const columns = parseCsvLine(normalizedLine);
    const sourceId = columns[0];
    const imdbId = columns[9];

    if (pendingSourceIds.has(sourceId)) {
      pendingSourceIds.delete(sourceId);

      if (imdbId?.startsWith("tt")) {
        imdbIdsBySourceId.set(sourceId, imdbId);
      }
    }
  }

  return imdbIdsBySourceId;
}

function proxiedPosterUrl(url) {
  const strippedProtocol = url.replace(/^https?:\/\//, "");
  return `https://images.weserv.nl/?url=${strippedProtocol}&w=320&h=460&fit=cover`;
}

function resizedImdbImageUrl(url) {
  return url.replace(/\._V1_.*\.jpg$/i, "._V1_QL75_UX320_.jpg");
}

async function fetchImdbPosterUrls(imdbId) {
  if (!imdbId) {
    return [];
  }

  try {
    const response = await fetch(`https://v3.sg.media-imdb.com/suggestion/t/${imdbId}.json`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
      }
    });
    const payload = await response.json();
    const match = payload.d?.find((item) => item.id === imdbId) ?? payload.d?.[0];
    const imageUrl = match?.i?.imageUrl;

    if (!imageUrl) {
      return [];
    }

    const resizedUrl = resizedImdbImageUrl(imageUrl);
    return resizedUrl === imageUrl ? [imageUrl] : [resizedUrl, imageUrl];
  } catch {
    return [];
  }
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

async function downloadImage(movie, imdbId) {
  const id = movie.id;
  const candidates = [
    movie.coverUrl,
    movie.coverUrl ? proxiedPosterUrl(movie.coverUrl) : "",
    ...(await fetchImdbPosterUrls(movie.imdbId || imdbId))
  ].filter((url) => typeof url === "string" && url.startsWith("http"));

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
  const imdbIdsBySourceId = await loadImdbIdsBySourceId(movies);
  let completed = 0;
  let success = 0;
  let downloaded = 0;
  let placeholders = 0;

  async function worker(workerIndex) {
    for (let index = workerIndex; index < movies.length; index += concurrency) {
      const movie = movies[index];
      const existingExtensions = ["jpg", "png", "webp"];
      const existing = existingExtensions
        .map((extension) => `/posters/${movie.id}.${extension}`)
        .find((posterPath) => existsSync(path.join(appRoot, "public", posterPath)));

      const existingPlaceholder = `/posters/${movie.id}.svg`;
      const downloadedPath = existing
        ? null
        : await downloadImage(movie, imdbIdsBySourceId.get(movie.sourceId));
      const posterPath =
        existing ??
        downloadedPath ??
        (existsSync(path.join(appRoot, "public", existingPlaceholder))
          ? existingPlaceholder
          : await writePlaceholder(movie));
      completed += 1;

      if (posterPath) {
        manifest[movie.id] = posterPath;
        success += 1;

        if (downloadedPath) {
          downloaded += 1;
        }

        if (posterPath.endsWith(".svg")) {
          placeholders += 1;
        }
      }

      if (completed % 25 === 0 || completed === movies.length) {
        console.log(
          `[posters] ${completed}/${movies.length} processed, ${success} saved, ${downloaded} downloaded, ${placeholders} placeholders`
        );
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
