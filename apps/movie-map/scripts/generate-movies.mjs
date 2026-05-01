import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, "..");
const csvPath = path.join(appRoot, "data/movies.csv");
const moviesPath = path.join(appRoot, "src/data/movies.ts");
const targetMovieCount = 1200;
const topRankCount = 250;
const minimumVotes = 10000;
const currentYear = 2026;
const supplementalMovies = [
  {
    sourceId: "3793023",
    title: "三傻大闹宝莱坞",
    countryCode: "IN",
    countryName: "India",
    year: 2009,
    coverUrl: "",
    summary:
      "三个工程学院学生在高压教育制度里追问学习、友情和人生选择，也不断挑战只看分数和名次的成功标准。",
    originalGenres: ["剧情", "喜剧", "爱情", "歌舞"],
    originalRegions: ["印度"],
    rating: 9.2,
    votes: 2077067,
    runtime: "171 min",
    releaseDate: "2009-12-25",
    doubanTop250Rank: 15,
    imdbId: "tt1187043",
    id: "movie-3793023"
  }
];

function extractConstantBlock(source, name, nextName) {
  const start = source.indexOf(`const ${name}`);
  const end = source.indexOf(`;\n\nconst ${nextName}`, start);

  if (start === -1 || end === -1) {
    throw new Error(`Could not locate ${name} in movies.ts`);
  }

  return source.slice(start, end + 1);
}

function evaluateConstantBlock(block) {
  const assignmentIndex = block.indexOf("=");
  return Function(`return (${block.slice(assignmentIndex + 1, -1)});`)();
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

function splitList(value) {
  return value
    .split("/")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseYear(value) {
  const year = Math.trunc(Number(value));
  return Number.isFinite(year) && year >= 1880 && year <= currentYear ? year : null;
}

function parseRuntime(value) {
  const minutes = Math.round(Number(value));
  return Number.isFinite(minutes) && minutes > 0 ? `${minutes} min` : "";
}

function buildMovie(columns, mappings) {
  const [
    sourceId,
    title,
    ,
    ,
    coverUrl,
    ,
    score,
    voteCount,
    genres,
    imdbId,
    ,
    runtime,
    ,
    regions,
    releaseDate,
    ,
    summary,
    ,
    yearValue
  ] = columns;
  const rating = Number(score);
  const votes = Number(voteCount);
  const year = parseYear(yearValue);
  const originalGenres = splitList(genres);
  const translatedGenres = originalGenres
    .map((genre) => mappings.genreTranslations[genre])
    .filter(Boolean);
  const originalRegions = splitList(regions);
  const countryCode = originalRegions
    .map((region) => mappings.regionToCountryCode[region])
    .find(Boolean);

  if (
    !sourceId ||
    !title ||
    !year ||
    !countryCode ||
    !mappings.countryNames[countryCode] ||
    translatedGenres.length === 0 ||
    !Number.isFinite(rating) ||
    rating <= 0 ||
    !Number.isFinite(votes) ||
    votes < minimumVotes
  ) {
    return null;
  }

  return {
    sourceId,
    title,
    countryCode,
    countryName: mappings.countryNames[countryCode],
    year,
    coverUrl: coverUrl?.startsWith("http") ? coverUrl : "",
    summary: summary || "暂无简介。",
    genres: translatedGenres,
    originalGenres,
    originalRegions,
    rating,
    votes,
    runtime: parseRuntime(runtime),
    releaseDate: releaseDate || `${year}-01-01`,
    ratingRank: null,
    doubanTop250Rank: null,
    imdbId: imdbId?.startsWith("tt") ? imdbId : "",
    id: `movie-${sourceId}`
  };
}

function serializeMoviesFile({ regionBlock, countryBlock, genreBlock, rawMovies }) {
  return `import posterManifest from "./posterManifest.json";

export interface Movie {
  id: string;
  sourceId: string;
  title: string;
  countryCode: string;
  countryName: string;
  year: number;
  posterUrl: string;
  summary: string;
  genres: string[];
  originalGenres: string[];
  originalRegions: string[];
  rating: number;
  ratingRank: number | null;
  doubanTop250Rank: number | null;
  votes: number;
  runtime: string;
  releaseDate: string;
}

${regionBlock}

${countryBlock}

${genreBlock}

const rawMovies = ${JSON.stringify(rawMovies, null, 2)};

export const movies: Movie[] = rawMovies.map((movie) => ({
  ...movie,
  genres: movie.originalGenres.map((genre) => GENRE_TRANSLATIONS[genre]).filter((genre): genre is string => Boolean(genre)),
  posterUrl: (posterManifest as Record<string, string>)[movie.id] ?? movie.coverUrl
}));

export const movieRegionCountryMap = REGION_TO_COUNTRY_CODE;
export const movieGenreMap = GENRE_TRANSLATIONS;
`;
}

async function main() {
  const existingMoviesSource = await readFile(moviesPath, "utf8");
  const regionBlock = extractConstantBlock(
    existingMoviesSource,
    "REGION_TO_COUNTRY_CODE",
    "COUNTRY_NAMES"
  );
  const countryBlock = extractConstantBlock(
    existingMoviesSource,
    "COUNTRY_NAMES",
    "GENRE_TRANSLATIONS"
  );
  const genreBlock = extractConstantBlock(existingMoviesSource, "GENRE_TRANSLATIONS", "rawMovies");
  const mappings = {
    regionToCountryCode: evaluateConstantBlock(regionBlock),
    countryNames: evaluateConstantBlock(countryBlock),
    genreTranslations: evaluateConstantBlock(genreBlock)
  };
  const csv = await readFile(csvPath, "utf8");
  const moviesById = new Map();

  for (const line of csv.split(/\r?\n/).slice(1)) {
    const normalizedLine = line.replace(/^\uFEFF/, "");

    if (!normalizedLine) {
      continue;
    }

    const movie = buildMovie(parseCsvLine(normalizedLine), mappings);

    if (movie && !moviesById.has(movie.sourceId)) {
      moviesById.set(movie.sourceId, movie);
    }
  }

  supplementalMovies.forEach((movie) => {
    const translatedGenres = movie.originalGenres
      .map((genre) => mappings.genreTranslations[genre])
      .filter(Boolean);

    if (
      translatedGenres.length > 0 &&
      mappings.countryNames[movie.countryCode] &&
      !moviesById.has(movie.sourceId)
    ) {
      moviesById.set(movie.sourceId, {
        ...movie,
        genres: translatedGenres,
        ratingRank: null
      });
    }
  });

  const selectedMovies = [...moviesById.values()]
    .sort(
      (first, second) =>
        second.rating - first.rating ||
        second.votes - first.votes ||
        (first.doubanTop250Rank ?? Number.POSITIVE_INFINITY) -
          (second.doubanTop250Rank ?? Number.POSITIVE_INFINITY) ||
        second.year - first.year ||
        first.title.localeCompare(second.title)
    )
    .slice(0, targetMovieCount)
    .map((movie, index) => ({
      ...movie,
      ratingRank: index < topRankCount ? index + 1 : null
    }));

  if (selectedMovies.length < targetMovieCount) {
    throw new Error(`Only found ${selectedMovies.length} movies for target ${targetMovieCount}`);
  }

  await writeFile(
    moviesPath,
    serializeMoviesFile({
      regionBlock,
      countryBlock,
      genreBlock,
      rawMovies: selectedMovies
    }),
    "utf8"
  );

  const lastMovie = selectedMovies.at(-1);
  console.log(
    `[movies] wrote ${selectedMovies.length} movies to ${moviesPath}; lowest selected score ${lastMovie.rating.toFixed(
      1
    )} with ${lastMovie.votes} votes`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
