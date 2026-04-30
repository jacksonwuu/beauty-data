export interface Movie {
  id: string;
  title: string;
  countryCode: string;
  countryName: string;
  year: number;
  posterUrl: string;
  summary: string;
  genres: string[];
  rating: number;
  runtime: string;
}

const palette = [
  ["#f6c453", "#1c2530"],
  ["#62d7c8", "#142a2d"],
  ["#ec6f66", "#2b1718"],
  ["#9fc3ff", "#111f37"],
  ["#d5e86c", "#222817"],
  ["#f59cc7", "#2b1724"]
];

function poster(title: string, year: number, index: number) {
  const [accent, background] = palette[index % palette.length];
  const subtitle = String(year);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="460" viewBox="0 0 320 460">
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="${accent}"/>
        <stop offset="0.42" stop-color="${background}"/>
        <stop offset="1" stop-color="#050709"/>
      </linearGradient>
    </defs>
    <rect width="320" height="460" rx="18" fill="url(#g)"/>
    <rect x="22" y="24" width="276" height="412" rx="12" fill="none" stroke="${accent}" stroke-width="4" opacity="0.86"/>
    <circle cx="244" cy="86" r="42" fill="${accent}" opacity="0.75"/>
    <path d="M34 314 C90 254 128 354 188 292 S270 280 296 228 V436 H34 Z" fill="${accent}" opacity="0.34"/>
    <text x="34" y="76" fill="#fff8df" font-family="Georgia, serif" font-size="24" font-weight="700">${title}</text>
    <text x="34" y="404" fill="#fff8df" font-family="Verdana, sans-serif" font-size="18" letter-spacing="3">${subtitle}</text>
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const seedMovies = [
  ["After the Signal", "US", "United States", 1968, "Cold war paranoia bends into a neon road story across empty desert stations.", ["Mystery", "Drama"], 8.1, "112 min"],
  ["Harbor of Glass", "US", "United States", 1982, "A dockworker follows a missing singer through a city of reflected lights.", ["Noir", "Thriller"], 7.8, "105 min"],
  ["Golden Overpass", "US", "United States", 2007, "Three families collide over one summer beside a half-built freeway.", ["Drama"], 7.4, "121 min"],
  ["The Last Courtyard", "CN", "China", 1979, "A Beijing neighborhood changes block by block as old promises resurface.", ["Drama", "History"], 8.4, "128 min"],
  ["Snow Lion Radio", "CN", "China", 1994, "Two students build a pirate station that carries folk songs across the mountains.", ["Adventure"], 7.7, "116 min"],
  ["River Lanterns", "CN", "China", 2018, "A family reunion follows one lantern downstream through three generations.", ["Family", "Drama"], 8.0, "109 min"],
  ["Rain on Shinjuku", "JP", "Japan", 1963, "A detective loses his case notes and finds a city rewriting the crime.", ["Crime", "Noir"], 8.3, "97 min"],
  ["Moon Bento", "JP", "Japan", 1988, "A lunch shop owner starts cooking for astronauts she will never meet.", ["Comedy", "Romance"], 7.9, "102 min"],
  ["The Quiet Platform", "JP", "Japan", 2021, "Commuters stranded overnight reveal the private maps of their lives.", ["Drama"], 7.6, "118 min"],
  ["Monsoon Frame", "IN", "India", 1957, "A photographer waits for one storm that could save his failing studio.", ["Romance", "Musical"], 8.2, "137 min"],
  ["Tea Before Dawn", "IN", "India", 1999, "A railway tea seller becomes an accidental witness to a political secret.", ["Thriller"], 7.5, "124 min"],
  ["Red Fort Echo", "IN", "India", 2015, "A historian and a street magician chase a clue hidden in public memory.", ["Adventure"], 7.8, "131 min"],
  ["Cairo Mirage", "EG", "Egypt", 1971, "A projectionist searches for a vanished reel across rooftops and markets.", ["Mystery"], 7.9, "101 min"],
  ["Nile at Noon", "EG", "Egypt", 2003, "A river guide ferries five strangers to a wedding that may not exist.", ["Drama"], 7.2, "110 min"],
  ["Paris in Reverse", "FR", "France", 1966, "An editor cuts a film backwards and starts remembering a future romance.", ["Romance", "Fantasy"], 8.0, "96 min"],
  ["The Blue Receipt", "FR", "France", 1991, "A baker receives a receipt for a crime not yet committed.", ["Comedy", "Mystery"], 7.6, "99 min"],
  ["Paper Alps", "FR", "France", 2012, "Two cartographers forge a mountain and then have to climb it.", ["Adventure", "Drama"], 7.7, "115 min"],
  ["Thames Static", "GB", "United Kingdom", 1976, "An overnight radio host tracks coded calls through a city blackout.", ["Thriller"], 7.8, "108 min"],
  ["North Sea Room", "GB", "United Kingdom", 2009, "A hotel on the coast hosts guests who all claim the same childhood.", ["Drama", "Mystery"], 7.4, "104 min"],
  ["Berlin Aperture", "DE", "Germany", 1984, "A camera repairman discovers every lens shows a different border.", ["Drama", "Sci-Fi"], 8.1, "119 min"],
  ["Clockwork Orchard", "DE", "Germany", 2017, "A rural inventor automates a harvest and awakens a town's buried grief.", ["Drama"], 7.3, "106 min"],
  ["Samba Meridian", "BR", "Brazil", 1969, "A cartographer follows a carnival rhythm across a divided coastline.", ["Musical", "Drama"], 7.9, "113 min"],
  ["Amazon Signal", "BR", "Brazil", 2001, "An engineer hears a lost broadcast from a station swallowed by forest.", ["Adventure", "Mystery"], 7.5, "117 min"],
  ["Lagos Comet", "NG", "Nigeria", 1998, "A mechanic predicts the path of a comet and the future of his street.", ["Comedy", "Drama"], 7.6, "100 min"],
  ["Cape Town Noon", "ZA", "South Africa", 2005, "A courtroom translator finds the one word that changes a verdict.", ["Drama"], 8.0, "122 min"],
  ["Outback Cinema", "AU", "Australia", 1980, "A traveling projectionist hauls one film through a dust storm.", ["Adventure"], 7.4, "103 min"],
  ["Seoul Frequency", "KR", "South Korea", 2011, "A sound designer records an apartment building that answers back.", ["Horror", "Drama"], 7.7, "107 min"],
  ["Mexico City Violet", "MX", "Mexico", 1993, "A florist delivers flowers to people moments before they change their lives.", ["Romance", "Drama"], 7.5, "111 min"],
  ["Andes Negative", "AR", "Argentina", 2006, "A lost photo negative sends siblings along a railway that no longer runs.", ["Drama"], 7.8, "116 min"],
  ["Toronto Afterimage", "CA", "Canada", 2019, "A museum guard sees future visitors in the paintings after closing time.", ["Fantasy", "Drama"], 7.2, "101 min"]
] as const;

export const movies: Movie[] = seedMovies.map(
  ([title, countryCode, countryName, year, summary, genres, rating, runtime], index) => ({
    id: `movie-${index + 1}`,
    title,
    countryCode,
    countryName,
    year,
    posterUrl: poster(title, year, index),
    summary,
    genres: [...genres],
    rating,
    runtime
  })
);

const countryTargets: Record<string, { name: string; total: number }> = {
  AR: { name: "Argentina", total: 10 },
  AT: { name: "Austria", total: 5 },
  AU: { name: "Australia", total: 12 },
  BD: { name: "Bangladesh", total: 7 },
  BE: { name: "Belgium", total: 5 },
  BR: { name: "Brazil", total: 16 },
  CA: { name: "Canada", total: 12 },
  CH: { name: "Switzerland", total: 5 },
  CL: { name: "Chile", total: 8 },
  CN: { name: "China", total: 22 },
  CO: { name: "Colombia", total: 8 },
  CU: { name: "Cuba", total: 5 },
  DE: { name: "Germany", total: 12 },
  DK: { name: "Denmark", total: 5 },
  EG: { name: "Egypt", total: 8 },
  ES: { name: "Spain", total: 10 },
  ET: { name: "Ethiopia", total: 6 },
  FI: { name: "Finland", total: 5 },
  FR: { name: "France", total: 24 },
  GB: { name: "United Kingdom", total: 12 },
  GH: { name: "Ghana", total: 5 },
  GR: { name: "Greece", total: 7 },
  ID: { name: "Indonesia", total: 12 },
  IE: { name: "Ireland", total: 5 },
  IN: { name: "India", total: 22 },
  IR: { name: "Iran", total: 7 },
  IT: { name: "Italy", total: 10 },
  JP: { name: "Japan", total: 18 },
  KE: { name: "Kenya", total: 6 },
  KR: { name: "South Korea", total: 10 },
  MA: { name: "Morocco", total: 6 },
  MX: { name: "Mexico", total: 12 },
  MY: { name: "Malaysia", total: 7 },
  NG: { name: "Nigeria", total: 8 },
  NL: { name: "Netherlands", total: 6 },
  NO: { name: "Norway", total: 5 },
  NZ: { name: "New Zealand", total: 5 },
  PE: { name: "Peru", total: 7 },
  PH: { name: "Philippines", total: 8 },
  PK: { name: "Pakistan", total: 8 },
  PL: { name: "Poland", total: 8 },
  PT: { name: "Portugal", total: 6 },
  RU: { name: "Russia", total: 16 },
  SA: { name: "Saudi Arabia", total: 7 },
  SE: { name: "Sweden", total: 6 },
  TH: { name: "Thailand", total: 8 },
  TR: { name: "Turkey", total: 10 },
  UA: { name: "Ukraine", total: 7 },
  US: { name: "United States", total: 24 },
  VN: { name: "Vietnam", total: 8 },
  ZA: { name: "South Africa", total: 8 }
};

const titleParts = {
  prefix: [
    "Midnight",
    "Golden",
    "Silent",
    "Electric",
    "Paper",
    "Velvet",
    "Northern",
    "Crimson",
    "Hidden",
    "Last",
    "Little",
    "Blue",
    "Glass",
    "Summer",
    "Winter",
    "Borrowed"
  ],
  subject: [
    "Station",
    "Harbor",
    "Letters",
    "Courtyard",
    "Signal",
    "Orchard",
    "Avenue",
    "Reel",
    "Lantern",
    "Bridge",
    "Room",
    "Market",
    "Archive",
    "Rain",
    "Map",
    "Window"
  ]
};

const genreSets = [
  ["Drama"],
  ["Mystery", "Drama"],
  ["Romance"],
  ["Thriller"],
  ["Adventure", "Drama"],
  ["Comedy", "Drama"],
  ["Fantasy", "Drama"],
  ["Crime", "Noir"]
];

function generatedMovie(countryCode: string, countryName: string, localIndex: number, globalIndex: number): Movie {
  const prefix = titleParts.prefix[(localIndex + globalIndex) % titleParts.prefix.length];
  const subject = titleParts.subject[(localIndex * 3 + globalIndex) % titleParts.subject.length];
  const year = 1957 + ((localIndex * 7 + globalIndex * 3) % 68);
  const title = `${prefix} ${subject} ${String(localIndex + 1).padStart(2, "0")}`;
  const rating = Number((6.8 + ((localIndex * 13 + globalIndex) % 24) / 10).toFixed(1));
  const runtime = `${88 + ((localIndex * 5 + globalIndex) % 54)} min`;
  const genres = genreSets[(localIndex + globalIndex) % genreSets.length];

  return {
    id: `movie-${countryCode.toLowerCase()}-${String(localIndex + 1).padStart(3, "0")}`,
    title,
    countryCode,
    countryName,
    year,
    posterUrl: poster(title, year, globalIndex),
    summary: `A generated ${countryName} sample film used to stress test dense poster placement, stable ordering, and layout transitions on the globe.`,
    genres: [...genres],
    rating,
    runtime
  };
}

const generatedMovies = Object.entries(countryTargets).flatMap(([countryCode, target], countryIndex) => {
  const existingCount = movies.filter((movie) => movie.countryCode === countryCode).length;
  const missingCount = Math.max(0, target.total - existingCount);

  return Array.from({ length: missingCount }, (_, index) =>
    generatedMovie(countryCode, target.name, existingCount + index, 1000 + countryIndex * 100 + index)
  );
});

movies.push(...generatedMovies);
