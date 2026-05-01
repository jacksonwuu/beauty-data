import {
  InteractiveGlobe,
  WORLD_COUNTRIES,
  countryIdToAlpha2,
  type CountryFeature,
  type GlobeBillboardItem,
  type GlobeBillboardLayoutMode,
  type GlobeBillboardPlacementMode
} from "@beauty-data/globe-core";
import { ChevronDown, MapPinned, X } from "lucide-react";
import { useMemo, useState } from "react";
import { MovieDetail } from "./components/MovieDetail";
import { countryEmoji } from "./data/countryFlags";
import { movies, type Movie } from "./data/movies";

const minYear = Math.min(...movies.map((movie) => movie.year));
const maxYear = Math.max(...movies.map((movie) => movie.year));
const allGenres = [...new Set(movies.flatMap((movie) => movie.genres))].sort((first, second) =>
  first.localeCompare(second)
);

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const kickerClass = "m-0 text-[0.76rem] font-extrabold uppercase tracking-[0.14em] text-[#62d7c8]";
const iconButtonClass =
  "grid h-[34px] w-[34px] cursor-pointer place-items-center border border-[rgba(246,240,223,0.25)] bg-[#080c0d] text-[#fff8df]";
const dockLabelClass = "text-[0.64rem] font-extrabold text-[rgba(246,240,223,0.54)]";
const toggleButtonClass = "min-w-0 cursor-pointer border-0 px-1.5 py-1 text-[0.66rem] font-black";
const activeToggleButtonClass = "bg-[#d9ad46] text-[#081011]";
const inactiveToggleButtonClass =
  "bg-transparent text-[rgba(246,240,223,0.68)] hover:bg-[rgba(246,240,223,0.08)] hover:text-[#fff8df]";

function App() {
  const [selectedYear, setSelectedYear] = useState(maxYear);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<CountryFeature | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryFeature | null>(null);
  const [moviePanelMode, setMoviePanelMode] = useState<"country" | "filtered" | null>(null);
  const [countryMenuOpen, setCountryMenuOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [posterScale, setPosterScale] = useState(1);
  const [posterLayout, setPosterLayout] = useState<GlobeBillboardLayoutMode>("flat");
  const [moviePlacement, setMoviePlacement] = useState<GlobeBillboardPlacementMode>("rows");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [hoveredMovieTooltip, setHoveredMovieTooltip] = useState<{
    movie: Movie;
    x: number;
    y: number;
  } | null>(null);

  const movieCountByCountry = useMemo(() => {
    const counts = new Map<string, number>();

    movies.forEach((movie) => {
      counts.set(movie.countryCode, (counts.get(movie.countryCode) ?? 0) + 1);
    });

    return counts;
  }, []);

  const countries = useMemo(
    () =>
      [...WORLD_COUNTRIES].sort((first, second) => {
        const firstCount = movieCountByCountry.get(countryIdToAlpha2(first.id) ?? "") ?? 0;
        const secondCount = movieCountByCountry.get(countryIdToAlpha2(second.id) ?? "") ?? 0;

        return secondCount - firstCount || first.name.localeCompare(second.name);
      }),
    [movieCountByCountry]
  );
  const countryByCode = useMemo(() => {
    const mappedCountries = new Map<string, CountryFeature>();

    countries.forEach((country) => {
      const countryCode = countryIdToAlpha2(country.id);

      if (countryCode) {
        mappedCountries.set(countryCode, country);
      }
    });

    return mappedCountries;
  }, [countries]);

  const filteredCountries = useMemo(() => {
    const query = countrySearch.trim().toLowerCase();

    if (!query) {
      return countries;
    }

    return countries.filter((country) => country.name.toLowerCase().includes(query));
  }, [countries, countrySearch]);

  const displayedCountry = hoveredCountry ?? selectedCountry;

  const selectedCountryMovies = useMemo(() => {
    const countryCode = countryIdToAlpha2(selectedCountry?.id);

    if (!countryCode) {
      return [];
    }

    return movies
      .filter((movie) => movie.countryCode === countryCode)
      .sort((first, second) => second.year - first.year || first.title.localeCompare(second.title));
  }, [selectedCountry]);

  const visibleMovies = useMemo(
    () =>
      movies.filter(
        (movie) =>
          movie.year <= selectedYear &&
          (selectedGenre === "All" || movie.genres.includes(selectedGenre))
      ),
    [selectedGenre, selectedYear]
  );

  const rankedVisibleMovies = useMemo(
    () =>
      [...visibleMovies].sort(
        (first, second) =>
          second.rating - first.rating ||
          second.year - first.year ||
          first.title.localeCompare(second.title)
      ),
    [visibleMovies]
  );

  const moviePanelMovies =
    moviePanelMode === "country" ? selectedCountryMovies : rankedVisibleMovies;
  const moviePanelTitle =
    moviePanelMode === "country" && selectedCountry
      ? `${countryEmoji(selectedCountry.id)} ${selectedCountry.name}`
      : "Filtered movies";
  const moviePanelSubtitle =
    moviePanelMode === "country"
      ? `${moviePanelMovies.length} movies`
      : `${moviePanelMovies.length} ranked by score`;

  const showCountryMovies = (country: CountryFeature | null) => {
    setSelectedCountry(country);
    setMoviePanelMode(country ? "country" : null);
  };

  const showMovieTooltip = (movie: Movie, x: number, y: number) => {
    setHoveredMovieTooltip({ movie, x, y });
  };

  const globeItems = useMemo<Array<GlobeBillboardItem<Movie>>>(
    () =>
      visibleMovies.map((movie) => ({
        id: movie.id,
        countryCode: movie.countryCode,
        year: movie.year,
        imageUrl: movie.posterUrl,
        payload: movie
      })),
    [visibleMovies]
  );

  return (
    <main className="relative h-full w-full overflow-hidden bg-[#050709]">
      <section className="absolute inset-0" aria-label="Interactive movie globe">
        <InteractiveGlobe
          items={globeItems}
          focusedCountryId={selectedCountry?.id}
          selectedItemId={selectedMovie?.id}
          billboardScale={posterScale}
          billboardLayout={posterLayout}
          billboardPlacement={moviePlacement}
          minCameraDistance={2.18}
          maxCameraDistance={7.8}
          zoomSpeed={0.28}
          onCountryHover={setHoveredCountry}
          onCountryClick={showCountryMovies}
          onItemHover={(item, event) => {
            if (!item || !event) {
              setHoveredMovieTooltip(null);
              return;
            }

            showMovieTooltip(item.payload, event.clientX, event.clientY);
          }}
          onItemClick={(item) => setSelectedMovie(item.payload)}
        />
      </section>

      <aside className="absolute top-6 left-1/2 z-[210] w-[min(300px,calc(100vw-48px))] -translate-x-1/2 max-[560px]:top-4 max-[560px]:right-auto max-[560px]:left-4 max-[560px]:w-auto max-[560px]:translate-x-0">
        <button
          className="flex w-full cursor-pointer items-center justify-between gap-2.5 border border-[rgba(124,156,176,0.28)] bg-[#080c0d] px-3 py-2.5 text-[#f6f0df]"
          type="button"
          aria-expanded={countryMenuOpen}
          onClick={() => setCountryMenuOpen((open) => !open)}
        >
          <MapPinned size={16} />
          <span className="min-w-0 flex-1 overflow-hidden text-left text-[0.9rem] font-bold text-ellipsis whitespace-nowrap">
            {displayedCountry
              ? `${countryEmoji(displayedCountry.id)} ${displayedCountry.name}`
              : "🌐 Select a country"}
          </span>
          <ChevronDown size={15} />
        </button>
        {countryMenuOpen ? (
          <div
            className="absolute top-[calc(100%+8px)] right-0 grid max-h-[min(460px,calc(100vh-116px))] w-full overflow-auto border border-[rgba(246,240,223,0.16)] bg-[#080c0d] p-1.5 shadow-[0_18px_48px_rgba(0,0,0,0.42)]"
            role="listbox"
          >
            <div className="sticky top-[-6px] z-[1] bg-[rgba(5,7,9,0.94)] pt-1.5 pb-2">
              <input
                className="w-full border border-[rgba(246,240,223,0.18)] bg-[#111719] px-2.5 py-2.5 text-[#fff8df] outline-none focus:border-[rgba(246,196,83,0.7)] focus:shadow-[0_0_0_3px_rgba(246,196,83,0.14)]"
                type="search"
                placeholder="Search countries"
                value={countrySearch}
                onChange={(event) => setCountrySearch(event.target.value)}
                autoFocus
              />
            </div>
            {filteredCountries.map((country) => (
              <button
                key={`${country.id}-${country.name}`}
                className={cx(
                  "grid w-full cursor-pointer grid-cols-[28px_minmax(0,1fr)_auto] items-center gap-2 border-0 bg-transparent px-2 py-[9px] text-[rgba(246,240,223,0.82)] hover:bg-[rgba(246,196,83,0.14)] hover:text-[#fff8df]",
                  selectedCountry?.id === country.id && "bg-[rgba(246,196,83,0.14)] text-[#fff8df]"
                )}
                type="button"
                onClick={() => {
                  showCountryMovies(country);
                  setCountryMenuOpen(false);
                  setCountrySearch("");
                }}
              >
                <span>{countryEmoji(country.id)}</span>
                <span className="min-w-0 overflow-hidden text-left text-[0.86rem] font-extrabold text-ellipsis whitespace-nowrap">
                  {country.name}
                </span>
                <span className="min-w-7 border border-[rgba(246,196,83,0.26)] bg-[#151615] px-[7px] py-[3px] text-center text-[0.68rem] leading-none font-black text-[#f6c453]">
                  {movieCountByCountry.get(countryIdToAlpha2(country.id) ?? "") ?? 0}
                </span>
              </button>
            ))}
            {filteredCountries.length === 0 ? (
              <p className="mx-2 mt-3 mb-2.5 text-[0.84rem] font-extrabold text-[rgba(246,240,223,0.62)]">
                No countries found
              </p>
            ) : null}
          </div>
        ) : null}
      </aside>

      {moviePanelMode ? (
        <aside
          className="absolute top-[92px] right-5 z-[205] grid h-[min(620px,calc(100vh-206px))] w-[min(344px,calc(100vw-40px))] grid-rows-[auto_minmax(0,1fr)] gap-3.5 border border-[rgba(246,240,223,0.18)] bg-[#080c0d] p-3.5 shadow-[0_24px_56px_rgba(0,0,0,0.42)] max-[560px]:top-16 max-[560px]:right-4 max-[560px]:left-4 max-[560px]:h-[min(420px,calc(100vh-292px))] max-[560px]:w-auto"
          aria-label={moviePanelTitle}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className={cx(kickerClass, "mb-[5px]")}>{moviePanelTitle}</p>
              <h2 className="m-0 font-serif text-[1.55rem] leading-none tracking-normal text-[#fff8df]">
                {moviePanelSubtitle}
              </h2>
            </div>
            <button
              className={cx(iconButtonClass, "h-8 w-8 shrink-0")}
              type="button"
              onClick={() => {
                setMoviePanelMode(null);
                if (moviePanelMode === "country") {
                  setSelectedCountry(null);
                }
              }}
              aria-label="Close movie list"
            >
              <X size={17} />
            </button>
          </div>
          <div className="grid min-h-0 [grid-auto-rows:148px] grid-cols-3 content-start gap-0.5 overflow-x-hidden overflow-y-auto max-[560px]:[grid-auto-rows:132px]">
            {moviePanelMovies.map((movie) => (
              <button
                key={movie.id}
                className={cx(
                  "relative block h-full w-full min-w-0 origin-center cursor-pointer appearance-none overflow-hidden border-0 bg-[#050709] p-0 leading-none will-change-transform hover:z-20 hover:-translate-y-2 hover:scale-[1.08] hover:shadow-[0_18px_28px_rgba(0,0,0,0.46),inset_0_0_0_3px_rgba(246,196,83,0.9)] focus-visible:z-20 focus-visible:-translate-y-2 focus-visible:scale-[1.08] focus-visible:shadow-[0_18px_28px_rgba(0,0,0,0.46),inset_0_0_0_3px_rgba(246,196,83,0.9)] focus-visible:outline-none",
                  selectedMovie?.id === movie.id &&
                    "z-20 -translate-y-2 scale-[1.08] shadow-[0_18px_28px_rgba(0,0,0,0.46),inset_0_0_0_3px_rgba(246,196,83,0.9)]"
                )}
                type="button"
                onClick={() => setSelectedMovie(movie)}
                onMouseEnter={(event) => showMovieTooltip(movie, event.clientX, event.clientY)}
                onMouseMove={(event) => showMovieTooltip(movie, event.clientX, event.clientY)}
                onMouseLeave={() => setHoveredMovieTooltip(null)}
                aria-label={`Open ${movie.title} details`}
              >
                <img
                  className="block h-full w-full cursor-pointer object-cover"
                  src={movie.posterUrl}
                  alt={`${movie.title} movie artwork`}
                />
              </button>
            ))}
          </div>
        </aside>
      ) : null}

      <section
        className="absolute right-5 bottom-[18px] left-5 z-[200] mx-auto grid w-fit max-w-[calc(100vw-40px)] grid-cols-[minmax(112px,160px)_minmax(170px,238px)_auto_auto_minmax(118px,152px)_auto] items-center gap-2 border border-[rgba(246,240,223,0.12)] bg-[#060909] px-2 py-1.5 shadow-[0_10px_28px_rgba(0,0,0,0.26)] max-[560px]:right-4 max-[560px]:bottom-4 max-[560px]:left-4 max-[560px]:w-[calc(100vw-32px)] max-[560px]:grid-cols-[minmax(0,1fr)] max-[560px]:gap-[9px] max-[560px]:p-2.5"
        aria-label="Map filters"
      >
        <div className="grid min-w-0 gap-[3px]">
          <div className="flex items-center justify-between gap-3">
            <span className={dockLabelClass}>Size</span>
            <strong className="min-w-[34px] text-right text-[0.64rem] font-extrabold text-[rgba(246,196,83,0.86)]">
              {Math.round(posterScale * 100)}%
            </strong>
          </div>
          <input
            className="m-0 h-3 w-full cursor-ew-resize accent-[#f6c453]"
            aria-label="Movie cover size"
            type="range"
            min={0.55}
            max={1.8}
            step={0.05}
            value={posterScale}
            onChange={(event) => setPosterScale(Number(event.target.value))}
          />
        </div>

        <div className="grid min-w-0 gap-[3px]">
          <div className="flex items-center justify-between gap-3">
            <span className={dockLabelClass}>Release year</span>
          </div>
          <div className="grid grid-cols-[auto_minmax(110px,1fr)_auto] items-center gap-1.5">
            <span className={dockLabelClass}>{minYear}</span>
            <input
              className="m-0 h-3 w-full cursor-ew-resize accent-[#f6c453]"
              aria-label="Filter movies by year"
              type="range"
              min={minYear}
              max={maxYear}
              step={1}
              value={selectedYear}
              onChange={(event) => setSelectedYear(Number(event.target.value))}
            />
            <span className={dockLabelClass}>{maxYear}</span>
          </div>
        </div>

        <div className="grid min-w-[122px] gap-[3px]">
          <div className="flex items-center justify-between gap-3">
            <span className={dockLabelClass}>Layout</span>
          </div>
          <div
            className="grid grid-cols-2 gap-px border border-[rgba(246,240,223,0.1)] bg-[#0d1112] p-px"
            role="group"
            aria-label="Movie layout"
          >
            {(["flat", "standing"] as const).map((layout) => (
              <button
                key={layout}
                className={cx(
                  toggleButtonClass,
                  posterLayout === layout ? activeToggleButtonClass : inactiveToggleButtonClass
                )}
                type="button"
                onClick={() => setPosterLayout(layout)}
              >
                {layout === "flat" ? "Flat" : "Standing"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid min-w-32 gap-[3px]">
          <div className="flex items-center justify-between gap-3">
            <span className={dockLabelClass}>Placement</span>
          </div>
          <div
            className="grid grid-cols-2 gap-px border border-[rgba(246,240,223,0.1)] bg-[#0d1112] p-px"
            role="group"
            aria-label="Movie placement"
          >
            {(["rows", "spread"] as const).map((placement) => (
              <button
                key={placement}
                className={cx(
                  toggleButtonClass,
                  moviePlacement === placement ? activeToggleButtonClass : inactiveToggleButtonClass
                )}
                type="button"
                onClick={() => setMoviePlacement(placement)}
              >
                {placement === "rows" ? "Rows" : "Spread"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid min-w-[118px] gap-[3px]">
          <div className="flex items-center justify-between gap-3">
            <span className={dockLabelClass}>Genre</span>
          </div>
          <select
            className="h-[23px] w-full min-w-0 cursor-pointer border border-[rgba(246,240,223,0.1)] bg-[#0d1112] py-0 pr-[22px] pl-[7px] text-[0.68rem] font-black text-[#fff8df] outline-none focus:border-[rgba(246,196,83,0.72)] focus:shadow-[0_0_0_3px_rgba(246,196,83,0.14)]"
            aria-label="Filter movies by genre"
            value={selectedGenre}
            onChange={(event) => setSelectedGenre(event.target.value)}
          >
            <option value="All">All genres</option>
            {allGenres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        <button
          className={cx(
            "grid min-w-12 cursor-pointer border-0 border-l border-l-[rgba(246,240,223,0.14)] bg-transparent py-0.5 pr-1 pl-2 text-left leading-[1.05] hover:bg-[#111719] max-[560px]:flex max-[560px]:min-w-0 max-[560px]:items-baseline max-[560px]:justify-center max-[560px]:gap-[5px] max-[560px]:border-0 max-[560px]:border-t max-[560px]:border-t-[rgba(246,240,223,0.12)] max-[560px]:pt-1 max-[560px]:pr-0 max-[560px]:pl-0",
            moviePanelMode === "filtered" && "bg-[#111719]"
          )}
          type="button"
          onClick={() => setMoviePanelMode("filtered")}
          aria-label="Show currently visible movies ranked by score"
        >
          <strong className="text-[0.86rem] font-black text-[#f6c453]">
            {visibleMovies.length}
          </strong>
          <span className={dockLabelClass}>movies</span>
        </button>
      </section>

      <MovieDetail
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        onCountryClick={(countryCode) => {
          const country = countryByCode.get(countryCode);

          if (!country) {
            return;
          }

          showCountryMovies(country);
          setSelectedMovie(null);
        }}
        onGenreClick={(genre) => {
          setSelectedGenre(genre);
          setMoviePanelMode("filtered");
          setSelectedMovie(null);
        }}
      />
      {hoveredMovieTooltip ? (
        <div
          className="pointer-events-none fixed z-[260] flex max-w-[min(460px,calc(100vw-32px))] items-center gap-2 border border-[rgba(246,240,223,0.18)] bg-[#080c0d] px-2.5 py-2 whitespace-nowrap text-[#fff8df] shadow-[0_12px_32px_rgba(0,0,0,0.36)]"
          style={{
            left: hoveredMovieTooltip.x + 14,
            top: hoveredMovieTooltip.y + 14
          }}
        >
          <strong className="min-w-0 overflow-hidden text-[0.86rem] leading-[1.2] text-ellipsis whitespace-nowrap">
            {hoveredMovieTooltip.movie.title}
          </strong>
          <span
            className="shrink-0 text-[0.78rem] font-black text-[#f6c453]"
            aria-label={`Rating ${hoveredMovieTooltip.movie.rating.toFixed(1)} out of 10`}
          >
            ★{hoveredMovieTooltip.movie.rating.toFixed(1)}
          </span>
        </div>
      ) : null}
    </main>
  );
}

export default App;
