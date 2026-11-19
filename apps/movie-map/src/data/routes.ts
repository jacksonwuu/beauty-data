import { movies, type Movie } from "./movies";

export interface MovieRoute {
  id: string;
  title: string;
  subtitle: string;
  blurb: string;
  /** How many stops the route shows; the rest stay on the globe. */
  limit: number;
  match: (movie: Movie) => boolean;
}

const inCountries = (codes: string[]) => (movie: Movie) => codes.includes(movie.countryCode);

const between = (from: number, to: number) => (movie: Movie) => movie.year >= from && movie.year <= to;

const hasGenre = (genre: string) => (movie: Movie) => movie.genres.includes(genre);

const anyGenre = (genres: string[]) => (movie: Movie) =>
  genres.some((genre) => movie.genres.includes(genre));

const fromRegion = (region: string) => (movie: Movie) =>
  movie.originalRegions.some((entry) => entry.includes(region));

const withVotes = (minimum: number) => (movie: Movie) => movie.votes >= minimum;

const allOf =
  (...checks: Array<(movie: Movie) => boolean>) =>
  (movie: Movie) =>
    checks.every((check) => check(movie));

// One film per year keeps a route moving instead of parking on a single festival year.
function spreadByYear(candidates: Movie[], limit: number) {
  const sorted = [...candidates].sort(
    (first, second) =>
      first.year - second.year || second.votes - first.votes || first.title.localeCompare(second.title)
  );
  const picked: Movie[] = [];
  const usedYears = new Set<number>();
  const overflow: Movie[] = [];

  for (const movie of sorted) {
    if (usedYears.has(movie.year)) {
      overflow.push(movie);
      continue;
    }

    usedYears.add(movie.year);
    picked.push(movie);
  }

  for (const movie of overflow) {
    if (picked.length >= limit) {
      break;
    }

    picked.push(movie);
  }

  return picked.sort((first, second) => first.year - second.year).slice(0, limit);
}

export const movieRoutes: MovieRoute[] = [
  {
    id: "french-new-wave",
    title: "法国新浪潮",
    subtitle: "French New Wave · 1958–1970",
    blurb: "跳切、实景、年轻人和电影手册。战后电影第一次把摄影机搬上街头。",
    limit: 12,
    match: allOf(
      inCountries(["FR"]),
      between(1958, 1970),
      anyGenre(["Drama", "Crime", "Romance", "Thriller"]),
      withVotes(300)
    )
  },
  {
    id: "japanese-classics",
    title: "日本黄金时代",
    subtitle: "Golden Age of Japanese Cinema · 1949–1965",
    blurb: "小津、黑泽明、沟口健二：家庭剧与武士片同时抵达顶点。",
    limit: 12,
    match: allOf(inCountries(["JP"]), between(1949, 1965), withVotes(500))
  },
  {
    id: "new-hollywood",
    title: "新好莱坞",
    subtitle: "New Hollywood · 1966–1982",
    blurb: "导演制、公路、暴力与幻灭。大厂制度松动后的十年。",
    limit: 14,
    match: allOf(inCountries(["US"]), between(1966, 1982), withVotes(2000))
  },
  {
    id: "italian-neorealism",
    title: "意大利新现实主义",
    subtitle: "Italian Neorealism · 1944–1964",
    blurb: "废墟、自行车、失业者。摄影机走到街上，也走进了普通人的日常。",
    limit: 10,
    match: allOf(inCountries(["IT"]), between(1944, 1964))
  },
  {
    id: "hong-kong-action",
    title: "香港武侠与功夫",
    subtitle: "Hong Kong Action · 1966–1996",
    blurb: "从邵氏的刀剑到吴宇森的枪火，香港把动作片变成一门语法。",
    limit: 12,
    match: allOf(fromRegion("香港"), between(1966, 1996), anyGenre(["Action", "Wuxia", "Crime"]))
  },
  {
    id: "korean-new-wave",
    title: "韩国新浪潮",
    subtitle: "Korean New Wave · 1997–2019",
    blurb: "类型片的工业化与作者表达同时爆发，二十年冲上世界舞台。",
    limit: 12,
    match: allOf(inCountries(["KR"]), between(1997, 2019), withVotes(1000))
  },
  {
    id: "noir",
    title: "黑色电影",
    subtitle: "Film Noir · 1935–1962",
    blurb: "夜雨、霓虹、注定失败的男人。黑色电影是光影写成的宿命论。",
    limit: 12,
    match: allOf(
      inCountries(["US", "GB", "FR"]),
      between(1935, 1962),
      anyGenre(["Noir", "Crime", "Mystery", "Thriller"])
    )
  },
  {
    id: "animation-century",
    title: "动画百年",
    subtitle: "A Century of Animation",
    blurb: "手绘、定格、赛璐珞与像素：动画一直是电影最自由的那一半。",
    limit: 14,
    match: allOf(hasGenre("Animation"), withVotes(2000))
  },
  {
    id: "eastern-bloc",
    title: "东欧与苏联",
    subtitle: "Eastern Bloc Cinema · 1954–1990",
    blurb: "审查制度下的隐喻、诗电影与荒诞派，另一种现代主义。",
    limit: 12,
    match: allOf(inCountries(["RU", "PL", "CZ", "HU", "RS", "SK", "RO", "BG", "UA"]), between(1954, 1990))
  },
  {
    id: "iranian-new-wave",
    title: "伊朗新电影",
    subtitle: "Iranian New Wave",
    blurb: "在限制中生长的诗意现实主义：阿巴斯、帕纳希、法哈蒂。",
    limit: 10,
    match: allOf(inCountries(["IR"]))
  },
  {
    id: "western-frontier",
    title: "西部片",
    subtitle: "The Western",
    blurb: "边疆、铁路、决斗。一个类型如何用一百年讲述同一个国家。",
    limit: 12,
    match: allOf(hasGenre("Western"), withVotes(200))
  },
  {
    id: "midnight-cities",
    title: "城市夜行",
    subtitle: "Cities After Dark · 1985–2019",
    blurb: "霓虹、出租车、天台与便利店：世纪末之后的城市夜景。",
    limit: 12,
    match: allOf(
      between(1985, 2019),
      anyGenre(["Crime", "Thriller", "Mystery", "Drama"]),
      withVotes(3000)
    )
  }
];

export function routeStops(route: MovieRoute) {
  return spreadByYear(
    movies.filter((movie) => route.match(movie)),
    route.limit
  );
}

export function routeById(id: string | null | undefined) {
  if (!id) {
    return null;
  }

  return movieRoutes.find((route) => route.id === id) ?? null;
}
