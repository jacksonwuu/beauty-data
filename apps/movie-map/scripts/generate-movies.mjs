import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, "..");
const csvPath = path.join(appRoot, "data/movies.csv");
const moviesPath = path.join(appRoot, "src/data/movies.ts");
const manifestPath = path.join(appRoot, "src/data/posterManifest.json");
const detailsDir = path.join(appRoot, "public/movie-details");

const currentYear = 2026;
const minimumVotes = 100;
const minimumRating = 6;
const topRankCount = 250;
// Bayesian prior so that a 9.2 with 120 votes does not outrank a 9.1 with 900k.
const priorMean = 7.4;
const priorWeight = 3000;
// Films per country. Quotas are what keeps the globe legible: without them the
// United States alone would take a third of every card on screen.
const defaultQuota = 6;
const SHARD_COUNT = 16;
const countryQuotas = {
  US: 420,
  CN: 340,
  JP: 300,
  GB: 160,
  FR: 150,
  KR: 95,
  IT: 60,
  DE: 60,
  IN: 30,
  ES: 30,
  CA: 30,
  RU: 25,
  AU: 20,
  SE: 18,
  DK: 18,
  TH: 18,
  IR: 16,
  IE: 14,
  BR: 12,
  AR: 10,
  MX: 10,
  BE: 10,
  PL: 9,
  AT: 9,
  TR: 8,
  NL: 8,
  FI: 8,
  PT: 8,
  NZ: 7,
  HU: 6,
  CZ: 6,
  NO: 6,
  GR: 6,
  SG: 5,
  SK: 5,
  RS: 5,
  HR: 5,
  IL: 5,
  CH: 5,
  ID: 5,
  CO: 5,
  VN: 5,
  ZA: 5,
  UA: 5,
  MY: 5,
  SI: 4,
  BG: 4,
  IS: 4,
  LU: 4,
  LT: 4,
  EE: 4,
  LV: 4,
  PH: 4,
  EG: 4,
  CU: 4,
  MA: 4,
  AE: 4,
  GE: 3,
  AM: 3,
  AZ: 3,
  KZ: 3,
  LK: 3,
  LB: 3,
  PE: 3,
  UY: 3,
  VE: 3,
  CY: 3,
  NG: 3,
  KE: 3,
  BD: 3,
  PK: 3,
  SA: 3,
  MN: 2,
  NP: 2,
  MM: 2,
  KH: 2,
  SY: 2,
  IQ: 2,
  JO: 2,
  KW: 2,
  QA: 2,
  TN: 2,
  DZ: 2,
  SN: 2,
  EC: 2,
  BO: 2,
  CR: 2,
  PA: 2,
  DO: 2,
  MT: 2,
  ET: 2
};

const REGION_TO_COUNTRY_CODE = {
  美国: "US",
  中国大陆: "CN",
  中国: "CN",
  中国香港: "CN",
  香港: "CN",
  中国台湾: "CN",
  台湾: "CN",
  中国澳门: "CN",
  澳门: "CN",
  日本: "JP",
  法国: "FR",
  英国: "GB",
  意大利: "IT",
  德国: "DE",
  西德: "DE",
  东德: "DE",
  韩国: "KR",
  加拿大: "CA",
  印度: "IN",
  西班牙: "ES",
  巴西: "BR",
  瑞典: "SE",
  澳大利亚: "AU",
  俄罗斯: "RU",
  苏联: "RU",
  丹麦: "DK",
  泰国: "TH",
  比利时: "BE",
  伊朗: "IR",
  爱尔兰: "IE",
  瑞士: "CH",
  阿根廷: "AR",
  墨西哥: "MX",
  奥地利: "AT",
  荷兰: "NL",
  葡萄牙: "PT",
  挪威: "NO",
  波兰: "PL",
  芬兰: "FI",
  匈牙利: "HU",
  捷克: "CZ",
  斯洛伐克: "SK",
  塞尔维亚: "RS",
  南斯拉夫: "RS",
  克罗地亚: "HR",
  斯洛文尼亚: "SI",
  保加利亚: "BG",
  罗马尼亚: "RO",
  希腊: "GR",
  阿尔巴尼亚: "AL",
  新加坡: "SG",
  马来西亚: "MY",
  印度尼西亚: "ID",
  越南: "VN",
  菲律宾: "PH",
  以色列: "IL",
  冰岛: "IS",
  卢森堡: "LU",
  立陶宛: "LT",
  爱沙尼亚: "EE",
  拉脱维亚: "LV",
  格鲁吉亚: "GE",
  亚美尼亚: "AM",
  阿塞拜疆: "AZ",
  哈萨克斯坦: "KZ",
  蒙古: "MN",
  尼泊尔: "NP",
  斯里兰卡: "LK",
  孟加拉国: "BD",
  巴基斯坦: "PK",
  缅甸: "MM",
  柬埔寨: "KH",
  叙利亚: "SY",
  伊拉克: "IQ",
  约旦: "JO",
  科威特: "KW",
  黎巴嫩: "LB",
  卡塔尔: "QA",
  阿联酋: "AE",
  沙特阿拉伯: "SA",
  埃及: "EG",
  摩洛哥: "MA",
  阿尔及利亚: "DZ",
  突尼斯: "TN",
  塞内加尔: "SN",
  尼日利亚: "NG",
  埃塞俄比亚: "ET",
  肯尼亚: "KE",
  南非: "ZA",
  新西兰: "NZ",
  墨西哥合众国: "MX",
  秘鲁: "PE",
  乌拉圭: "UY",
  委内瑞拉: "VE",
  厄瓜多尔: "EC",
  玻利维亚: "BO",
  哥斯达黎加: "CR",
  巴拿马: "PA",
  多米尼加: "DO",
  古巴: "CU",
  马耳他: "MT",
  塞浦路斯: "CY",
  土耳其: "TR",
  乌克兰: "UA",
  白俄罗斯: "BY",
  摩尔多瓦: "MD"
};

const COUNTRY_NAMES = {
  AR: "Argentina",
  AT: "Austria",
  AU: "Australia",
  BD: "Bangladesh",
  BE: "Belgium",
  BG: "Bulgaria",
  BO: "Bolivia",
  BR: "Brazil",
  BY: "Belarus",
  CA: "Canada",
  CH: "Switzerland",
  CL: "Chile",
  CN: "China",
  CO: "Colombia",
  CR: "Costa Rica",
  CU: "Cuba",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DE: "Germany",
  DK: "Denmark",
  DO: "Dominican Republic",
  DZ: "Algeria",
  EC: "Ecuador",
  EE: "Estonia",
  EG: "Egypt",
  ES: "Spain",
  ET: "Ethiopia",
  FI: "Finland",
  FR: "France",
  GB: "United Kingdom",
  GE: "Georgia",
  GR: "Greece",
  HR: "Croatia",
  HU: "Hungary",
  ID: "Indonesia",
  IE: "Ireland",
  IL: "Israel",
  IN: "India",
  IQ: "Iraq",
  IR: "Iran",
  IS: "Iceland",
  IT: "Italy",
  JO: "Jordan",
  JP: "Japan",
  KE: "Kenya",
  KH: "Cambodia",
  KR: "South Korea",
  KW: "Kuwait",
  KZ: "Kazakhstan",
  LB: "Lebanon",
  LK: "Sri Lanka",
  LT: "Lithuania",
  LU: "Luxembourg",
  LV: "Latvia",
  MA: "Morocco",
  MD: "Moldova",
  MM: "Myanmar",
  MN: "Mongolia",
  MT: "Malta",
  MX: "Mexico",
  MY: "Malaysia",
  NG: "Nigeria",
  NL: "Netherlands",
  NO: "Norway",
  NP: "Nepal",
  NZ: "New Zealand",
  PA: "Panama",
  PE: "Peru",
  PH: "Philippines",
  PK: "Pakistan",
  PL: "Poland",
  PT: "Portugal",
  QA: "Qatar",
  RO: "Romania",
  RS: "Serbia",
  RU: "Russia",
  SA: "Saudi Arabia",
  SE: "Sweden",
  SG: "Singapore",
  SI: "Slovenia",
  SK: "Slovakia",
  SN: "Senegal",
  SY: "Syria",
  TH: "Thailand",
  TN: "Tunisia",
  TR: "Turkey",
  UA: "Ukraine",
  US: "United States",
  UY: "Uruguay",
  VE: "Venezuela",
  VN: "Vietnam",
  ZA: "South Africa"
};

const GENRE_TRANSLATIONS = {
  剧情: "Drama",
  "劇情 Drama": "Drama",
  喜剧: "Comedy",
  爱情: "Romance",
  动作: "Action",
  惊悚: "Thriller",
  惊栗: "Thriller",
  恐怖: "Horror",
  犯罪: "Crime",
  悬疑: "Mystery",
  悬念: "Mystery",
  动画: "Animation",
  "動畫 Animation": "Animation",
  科幻: "Sci-Fi",
  冒险: "Adventure",
  奇幻: "Fantasy",
  歌舞: "Musical",
  家庭: "Family",
  音乐: "Music",
  战争: "War",
  传记: "Biography",
  历史: "History",
  西部: "Western",
  同性: "LGBTQ+",
  古装: "Costume",
  情色: "Erotic",
  运动: "Sports",
  儿童: "Children",
  武侠: "Wuxia",
  黑色电影: "Noir",
  戏曲: "Opera",
  灾难: "Disaster",
  纪录片: "Documentary",
  短片: "Short",
  舞台艺术: "Stage",
  Adult: "Adult"
};

const COLUMN = {
  sourceId: 0,
  title: 1,
  coverUrl: 4,
  director: 5,
  score: 6,
  votes: 7,
  genres: 8,
  imdbId: 9,
  languages: 10,
  runtime: 11,
  regions: 13,
  releaseDate: 14,
  summary: 16,
  tags: 17,
  actors: 3,
  year: 18
};

const prunePlaceholders = process.argv.includes("--prune");
const placeholderCountryFloor = 4;

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
  return (value ?? "")
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

function normalizeRegion(region) {
  return region.replace(/\s+[A-Za-z].*$/, "").trim();
}

function countryCodeForRegions(originalRegions) {
  for (const region of originalRegions) {
    const direct = REGION_TO_COUNTRY_CODE[region];
    if (direct) {
      return direct;
    }
    const normalized = REGION_TO_COUNTRY_CODE[normalizeRegion(region)];
    if (normalized) {
      return normalized;
    }
  }
  return null;
}

function bayesianScore(rating, votes) {
  return (votes * rating + priorWeight * priorMean) / (votes + priorWeight);
}

function buildMovie(columns) {
  const sourceId = columns[COLUMN.sourceId];
  const title = columns[COLUMN.title];
  const rating = Number(columns[COLUMN.score]);
  const votes = Number(columns[COLUMN.votes]);
  const year = parseYear(columns[COLUMN.year]);
  const originalGenres = splitList(columns[COLUMN.genres]);
  const originalRegions = splitList(columns[COLUMN.regions]);
  const countryCode = countryCodeForRegions(originalRegions);
  const translatedGenres = originalGenres
    .map((genre) => GENRE_TRANSLATIONS[genre])
    .filter(Boolean);

  if (
    !sourceId ||
    !title ||
    !year ||
    !countryCode ||
    !COUNTRY_NAMES[countryCode] ||
    translatedGenres.length === 0 ||
    !Number.isFinite(rating) ||
    rating < minimumRating ||
    !Number.isFinite(votes) ||
    votes < minimumVotes
  ) {
    return null;
  }

  const coverUrl = columns[COLUMN.coverUrl];
  const imdbId = columns[COLUMN.imdbId];
  const releaseDate = columns[COLUMN.releaseDate];

  return {
    sourceId,
    title,
    countryCode,
    countryName: COUNTRY_NAMES[countryCode],
    year,
    coverUrl: coverUrl?.startsWith("http") ? coverUrl : "",
    summary: columns[COLUMN.summary] || "暂无简介。",
    genres: translatedGenres,
    originalGenres,
    originalRegions,
    rating,
    votes,
    runtime: parseRuntime(columns[COLUMN.runtime]),
    releaseDate: releaseDate || `${year}-01-01`,
    director: splitList(columns[COLUMN.director]).join(" / "),
    cast: splitList(columns[COLUMN.actors]).slice(0, 4),
    languages: splitList(columns[COLUMN.languages]).slice(0, 3),
    tags: splitList(columns[COLUMN.tags]).slice(0, 6),
    ratingRank: null,
    doubanTop250Rank: null,
    imdbId: imdbId?.startsWith("tt") ? imdbId : "",
    id: `movie-${sourceId}`
  };
}

function shardIndexFor(id) {
  let hash = 0;

  for (let index = 0; index < id.length; index += 1) {
    hash = (hash * 31 + id.charCodeAt(index)) % 100000;
  }

  return hash % SHARD_COUNT;
}

function byQuality(first, second) {
  return (
    bayesianScore(second.rating, second.votes) - bayesianScore(first.rating, first.votes) ||
    second.votes - first.votes ||
    second.year - first.year ||
    first.title.localeCompare(second.title)
  );
}

function selectByQuota(candidates) {
  const byCountry = new Map();

  for (const movie of candidates) {
    const bucket = byCountry.get(movie.countryCode) ?? [];
    bucket.push(movie);
    byCountry.set(movie.countryCode, bucket);
  }

  const selected = [];

  for (const [countryCode, bucket] of byCountry) {
    const quota = countryQuotas[countryCode] ?? defaultQuota;
    selected.push(...bucket.sort(byQuality).slice(0, quota));
  }

  return selected.sort(byQuality);
}

function serializeMoviesFile(rawMovies) {
  return `import posterManifest from "./posterManifest.json";

export interface Movie {
  id: string;
  sourceId: string;
  title: string;
  countryCode: string;
  countryName: string;
  year: number;
  posterUrl: string;
  genres: string[];
  originalGenres: string[];
  originalRegions: string[];
  rating: number;
  ratingRank: number | null;
  doubanTop250Rank: number | null;
  votes: number;
  runtime: string;
  releaseDate: string;
  director: string;
  imdbId: string;
}

const REGION_TO_COUNTRY_CODE: Record<string, string> = ${JSON.stringify(
    REGION_TO_COUNTRY_CODE,
    null,
    2
  )};

const COUNTRY_NAMES: Record<string, string> = ${JSON.stringify(COUNTRY_NAMES, null, 2)};

const GENRE_TRANSLATIONS: Record<string, string> = ${JSON.stringify(
    GENRE_TRANSLATIONS,
    null,
    2
  )};

const rawMovies = ${JSON.stringify(rawMovies, null, 2)};

export const movies: Movie[] = rawMovies.map((movie) => ({
  ...movie,
  genres: movie.originalGenres
    .map((genre) => GENRE_TRANSLATIONS[genre])
    .filter((genre): genre is string => Boolean(genre)),
  posterUrl: (posterManifest as Record<string, string>)[movie.id] ?? movie.coverUrl
}));

const movieSearchText = new Map<string, string>();

export function searchMovies(list: Movie[], query: string): Movie[] {
  const trimmed = query.trim().toLowerCase();

  if (!trimmed) {
    return list;
  }

  return list.filter((movie) => {
    let haystack = movieSearchText.get(movie.id);

    if (!haystack) {
      haystack = [
        movie.title,
        movie.countryName,
        String(movie.year),
        movie.rating.toFixed(1),
        movie.director,
        movie.genres.join(" "),
        movie.originalGenres.join(" ")
      ]
        .join(" ")
        .toLowerCase();
      movieSearchText.set(movie.id, haystack);
    }

    return haystack.includes(trimmed);
  });
}

export const movieRegionCountryMap = REGION_TO_COUNTRY_CODE;
export const movieGenreMap = GENRE_TRANSLATIONS;
`;
}

async function main() {
  const csv = await readFile(csvPath, "utf8");
  const candidates = [];
  const seen = new Set();

  for (const line of csv.split(/\r?\n/).slice(1)) {
    const normalizedLine = line.replace(/^\uFEFF/, "");

    if (!normalizedLine) {
      continue;
    }

    const movie = buildMovie(parseCsvLine(normalizedLine));

    if (movie && !seen.has(movie.sourceId)) {
      seen.add(movie.sourceId);
      candidates.push(movie);
    }
  }

  let selected = selectByQuota(candidates);

  if (prunePlaceholders) {
    const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
    const realPosterCount = new Map();

    for (const movie of selected) {
      const poster = manifest[movie.id];
      if (poster && !poster.endsWith(".svg")) {
        realPosterCount.set(movie.countryCode, (realPosterCount.get(movie.countryCode) ?? 0) + 1);
      }
    }

    const keptPlaceholders = new Map();

    selected = selected.filter((movie) => {
      const poster = manifest[movie.id];

      if (poster && !poster.endsWith(".svg")) {
        return true;
      }

      // A country with only a couple of films still deserves its cards on the
      // map; everywhere else an empty grey tile is just clutter.
      const real = realPosterCount.get(movie.countryCode) ?? 0;
      const used = keptPlaceholders.get(movie.countryCode) ?? 0;

      if (real < placeholderCountryFloor && used < placeholderCountryFloor - real) {
        keptPlaceholders.set(movie.countryCode, used + 1);
        return true;
      }

      return false;
    });

    console.log(
      `[movies] placeholder pruning kept ${selected.length} films, ${keptPlaceholders.size} placeholder slots`
    );
  }

  selected = selected.map((movie, index) => ({
    ...movie,
    ratingRank: index < topRankCount ? index + 1 : null
  }));

  // Summaries and cast lists are half the payload and only the detail modal
  // needs them, so they live in static JSON shards fetched on demand.
  const shards = Array.from({ length: SHARD_COUNT }, () => ({}));

  for (const movie of selected) {
    shards[shardIndexFor(movie.id)][movie.id] = {
      summary: movie.summary,
      cast: movie.cast,
      languages: movie.languages,
      tags: movie.tags
    };
  }

  await mkdir(detailsDir, { recursive: true });
  const staleShards = await readdir(detailsDir).catch(() => []);

  for (const file of staleShards) {
    if (file.startsWith("shard-")) {
      await rm(path.join(detailsDir, file), { force: true });
    }
  }

  for (const [index, shard] of shards.entries()) {
    await writeFile(path.join(detailsDir, `shard-${index}.json`), JSON.stringify(shard), "utf8");
  }

  const bundled = selected.map((movie) => {
    const { summary, cast, languages, tags, ...rest } = movie;
    return rest;
  });

  await writeFile(moviesPath, serializeMoviesFile(bundled), "utf8");

  const countryCount = new Set(selected.map((movie) => movie.countryCode)).size;
  const years = selected.map((movie) => movie.year).sort((a, b) => a - b);
  console.log(
    `[movies] wrote ${selected.length} movies (${countryCount} countries, ${years[0]}–${
      years.at(-1)
    }) to ${moviesPath}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
