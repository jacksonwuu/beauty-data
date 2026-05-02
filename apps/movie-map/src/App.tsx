import {
  InteractiveGlobe,
  WORLD_COUNTRIES,
  countryIdToAlpha2,
  type CountryFeature,
  type GlobeBillboardItem,
  type GlobeBillboardLayoutMode,
  type GlobeBillboardPlacementMode
} from "@beauty-data/globe-core";
import { ChevronDown, Dice5, MapPinned, Search, X } from "lucide-react";
import { useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { MovieDetail } from "./components/MovieDetail";
import { countryEmoji } from "./data/countryFlags";
import { movies, type Movie } from "./data/movies";

const minYear = Math.min(...movies.map((movie) => movie.year));
const maxYear = Math.max(...movies.map((movie) => movie.year));
const yearWindowSize = 10;
const latestYearWindowStart = Math.max(minYear, maxYear - yearWindowSize);
const allGenres = [...new Set(movies.flatMap((movie) => movie.genres))].sort((first, second) =>
  first.localeCompare(second)
);

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const kickerClass = "m-0 text-[0.76rem] font-extrabold uppercase tracking-[0.14em] text-[#62d7c8]";
const iconButtonClass =
  "grid h-[34px] w-[34px] cursor-pointer place-items-center border border-[rgba(246,240,223,0.25)] bg-[#080c0d] text-[#fff8df]";
const dockLabelClass = "text-[0.64rem] font-extrabold text-[rgba(246,240,223,0.54)]";
const toggleButtonClass = "min-w-0 cursor-pointer border-0 px-1.5 py-1 text-[0.66rem] font-black";
const activeToggleButtonClass = "bg-[#d9ad46] text-[#081011]";
const inactiveToggleButtonClass =
  "bg-transparent text-[rgba(246,240,223,0.68)] hover:bg-[rgba(246,240,223,0.08)] hover:text-[#fff8df]";

function App() {
  const [selectedYearStart, setSelectedYearStart] = useState(latestYearWindowStart);
  const [selectedYearEnd, setSelectedYearEnd] = useState(maxYear);
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
  const [movieSearch, setMovieSearch] = useState("");
  const [hoveredMovieTooltip, setHoveredMovieTooltip] = useState<{
    movie: Movie;
    x: number;
    y: number;
  } | null>(null);
  const yearSliderRef = useRef<HTMLDivElement>(null);
  const yearDragRef = useRef<{
    mode: "start" | "end" | "range";
    pointerId: number;
    startX: number;
    initialStart: number;
    initialEnd: number;
  } | null>(null);
  const yearSpan = maxYear - minYear;
  const selectedYearStartPercent = ((selectedYearStart - minYear) / yearSpan) * 100;
  const selectedYearEndPercent = ((selectedYearEnd - minYear) / yearSpan) * 100;

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
      .filter(
        (movie) =>
          movie.countryCode === countryCode &&
          movie.year >= selectedYearStart &&
          movie.year <= selectedYearEnd &&
          (selectedGenre === "All" || movie.genres.includes(selectedGenre))
      )
      .sort((first, second) => second.year - first.year || first.title.localeCompare(second.title));
  }, [selectedCountry, selectedGenre, selectedYearEnd, selectedYearStart]);

  const visibleMovies = useMemo(
    () =>
      movies.filter(
        (movie) =>
          movie.year >= selectedYearStart &&
          movie.year <= selectedYearEnd &&
          (selectedGenre === "All" || movie.genres.includes(selectedGenre))
      ),
    [selectedGenre, selectedYearEnd, selectedYearStart]
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
  const searchedMoviePanelMovies = useMemo(() => {
    const query = movieSearch.trim().toLowerCase();

    if (!query) {
      return moviePanelMovies;
    }

    return moviePanelMovies.filter((movie) => {
      const searchableText = [
        movie.title,
        movie.countryName,
        String(movie.year),
        movie.rating.toFixed(1),
        ...movie.genres,
        ...movie.originalGenres
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [moviePanelMovies, movieSearch]);
  const moviePanelTitle =
    moviePanelMode === "country" && selectedCountry
      ? `${countryEmoji(selectedCountry.id)} ${selectedCountry.name}`
      : "Filtered movies";
  const moviePanelSubtitle =
    moviePanelMode === "country"
      ? `${searchedMoviePanelMovies.length}/${moviePanelMovies.length} movies · ${selectedYearStart}-${selectedYearEnd}`
      : `${searchedMoviePanelMovies.length}/${moviePanelMovies.length} ranked · ${selectedYearStart}-${selectedYearEnd}`;

  const showCountryMovies = (country: CountryFeature | null) => {
    setSelectedCountry(country);
    setMoviePanelMode(country ? "country" : null);
    setMovieSearch("");
  };

  const showMovieTooltip = (movie: Movie, x: number, y: number) => {
    setHoveredMovieTooltip({ movie, x, y });
  };

  const showRandomMovie = () => {
    if (searchedMoviePanelMovies.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * searchedMoviePanelMovies.length);
    setSelectedMovie(searchedMoviePanelMovies[randomIndex]);
    setHoveredMovieTooltip(null);
  };

  const yearFromClientX = (clientX: number) => {
    const rect = yearSliderRef.current?.getBoundingClientRect();

    if (!rect || rect.width === 0) {
      return selectedYearStart;
    }

    const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
    return Math.round(minYear + ratio * yearSpan);
  };

  const updateYearRangeDrag = (clientX: number) => {
    const drag = yearDragRef.current;

    if (!drag) {
      return;
    }

    if (drag.mode === "start") {
      setSelectedYearStart(clamp(yearFromClientX(clientX), minYear, selectedYearEnd));
      return;
    }

    if (drag.mode === "end") {
      setSelectedYearEnd(clamp(yearFromClientX(clientX), selectedYearStart, maxYear));
      return;
    }

    const rect = yearSliderRef.current?.getBoundingClientRect();

    if (!rect || rect.width === 0) {
      return;
    }

    const rangeWidth = drag.initialEnd - drag.initialStart;
    const deltaYears = Math.round(((clientX - drag.startX) / rect.width) * yearSpan);
    const nextStart = clamp(drag.initialStart + deltaYears, minYear, maxYear - rangeWidth);
    setSelectedYearStart(nextStart);
    setSelectedYearEnd(nextStart + rangeWidth);
  };

  const startYearDrag = (
    mode: "start" | "end" | "range",
    event: ReactPointerEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    yearDragRef.current = {
      mode,
      pointerId: event.pointerId,
      startX: event.clientX,
      initialStart: selectedYearStart,
      initialEnd: selectedYearEnd
    };
    event.currentTarget.setPointerCapture(event.pointerId);

    if (mode !== "range") {
      updateYearRangeDrag(event.clientX);
    }
  };

  const handleYearTrackPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const nextYear = yearFromClientX(event.clientX);
    const mode =
      Math.abs(nextYear - selectedYearStart) <= Math.abs(nextYear - selectedYearEnd)
        ? "start"
        : "end";

    startYearDrag(mode, event);
  };

  const handleYearDragMove = (event: ReactPointerEvent<HTMLButtonElement | HTMLDivElement>) => {
    if (yearDragRef.current?.pointerId !== event.pointerId) {
      return;
    }

    updateYearRangeDrag(event.clientX);
  };

  const handleYearDragEnd = (event: ReactPointerEvent<HTMLButtonElement | HTMLDivElement>) => {
    if (yearDragRef.current?.pointerId !== event.pointerId) {
      return;
    }

    yearDragRef.current = null;
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
          className="absolute top-[92px] right-5 z-[205] grid h-[min(600px,calc(100vh-206px))] w-[clamp(284px,24vw,324px)] grid-rows-[auto_auto_minmax(0,1fr)] gap-3 border border-[rgba(246,240,223,0.18)] bg-[#080c0d] p-3 shadow-[0_24px_56px_rgba(0,0,0,0.42)] max-[560px]:top-16 max-[560px]:right-4 max-[560px]:left-4 max-[560px]:h-[min(420px,calc(100vh-292px))] max-[560px]:w-auto"
          aria-label={moviePanelTitle}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className={cx(kickerClass, "mb-[5px]")}>{moviePanelTitle}</p>
              <h2 className="m-0 font-serif text-[1.55rem] leading-none tracking-normal text-[#fff8df]">
                {moviePanelSubtitle}
              </h2>
            </div>
            <div className="flex shrink-0 items-center gap-1.5">
              <button
                className={cx(
                  iconButtonClass,
                  "h-8 w-8 disabled:cursor-not-allowed disabled:border-[rgba(246,240,223,0.12)] disabled:text-[rgba(246,240,223,0.28)]"
                )}
                type="button"
                onClick={showRandomMovie}
                disabled={searchedMoviePanelMovies.length === 0}
                aria-label="Open a random movie from this list"
              >
                <Dice5 size={17} />
              </button>
              <button
                className={cx(iconButtonClass, "h-8 w-8")}
                type="button"
                onClick={() => {
                  setMoviePanelMode(null);
                  setMovieSearch("");
                  if (moviePanelMode === "country") {
                    setSelectedCountry(null);
                  }
                }}
                aria-label="Close movie list"
              >
                <X size={17} />
              </button>
            </div>
          </div>
          <label className="relative block min-w-0">
            <Search
              className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-[rgba(246,240,223,0.48)]"
              size={15}
            />
            <input
              className="h-9 w-full min-w-0 border border-[rgba(246,240,223,0.16)] bg-[#111719] pr-2.5 pl-8 text-[0.82rem] font-bold text-[#fff8df] outline-none placeholder:text-[rgba(246,240,223,0.38)] focus:border-[rgba(246,196,83,0.72)] focus:shadow-[0_0_0_3px_rgba(246,196,83,0.14)]"
              type="search"
              placeholder="Search movies"
              value={movieSearch}
              onChange={(event) => setMovieSearch(event.target.value)}
            />
          </label>
          <div className="grid min-h-0 [grid-auto-rows:136px] grid-cols-3 content-start gap-0.5 overflow-x-hidden overflow-y-auto max-[560px]:[grid-auto-rows:128px]">
            {searchedMoviePanelMovies.map((movie) => (
              <button
                key={movie.id}
                className={cx(
                  "relative block h-full w-full min-w-0 cursor-pointer appearance-none overflow-hidden rounded-md border-0 bg-[#050709] p-0 leading-none hover:shadow-[inset_0_0_0_1px_rgba(246,240,223,0.34)] focus-visible:shadow-[inset_0_0_0_2px_rgba(246,196,83,0.82)] focus-visible:outline-none",
                  selectedMovie?.id === movie.id && "shadow-[inset_0_0_0_2px_rgba(246,196,83,0.82)]"
                )}
                type="button"
                onClick={() => setSelectedMovie(movie)}
                onMouseEnter={(event) => showMovieTooltip(movie, event.clientX, event.clientY)}
                onMouseMove={(event) => showMovieTooltip(movie, event.clientX, event.clientY)}
                onMouseLeave={() => setHoveredMovieTooltip(null)}
                aria-label={`Open ${movie.title} details`}
              >
                <img
                  className="block h-full w-full cursor-pointer rounded-md object-cover"
                  src={movie.posterUrl}
                  alt={`${movie.title} movie artwork`}
                />
                <span
                  className="absolute top-1 right-1 rounded-[5px] border border-[rgba(246,240,223,0.28)] bg-[rgba(8,12,13,0.78)] px-1.5 py-[3px] text-[0.64rem] leading-none font-black text-[#fff8df] shadow-[0_6px_14px_rgba(0,0,0,0.34)] backdrop-blur-sm"
                  aria-label={`Rating ${movie.rating.toFixed(1)} out of 10`}
                >
                  {movie.rating.toFixed(1)}
                </span>
              </button>
            ))}
            {searchedMoviePanelMovies.length === 0 ? (
              <p className="col-span-3 m-0 border border-[rgba(246,240,223,0.12)] bg-[#0d1112] px-3 py-4 text-center text-[0.84rem] font-extrabold text-[rgba(246,240,223,0.58)]">
                No movies found
              </p>
            ) : null}
          </div>
        </aside>
      ) : null}

      <section
        className="absolute right-5 bottom-[18px] left-5 z-[200] mx-auto grid w-fit max-w-[calc(100vw-40px)] grid-cols-[minmax(112px,160px)_minmax(190px,268px)_auto_auto_minmax(118px,152px)_auto] items-center gap-2 border border-[rgba(246,240,223,0.12)] bg-[#060909] px-2 py-1.5 shadow-[0_10px_28px_rgba(0,0,0,0.26)] max-[560px]:right-4 max-[560px]:bottom-4 max-[560px]:left-4 max-[560px]:w-[calc(100vw-32px)] max-[560px]:grid-cols-[minmax(0,1fr)] max-[560px]:gap-[9px] max-[560px]:p-2.5"
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
            min={0.3}
            max={2.6}
            step={0.05}
            value={posterScale}
            onChange={(event) => setPosterScale(Number(event.target.value))}
          />
        </div>

        <div className="grid min-w-0 gap-[3px]">
          <div className="flex items-center justify-between gap-3">
            <span className={dockLabelClass}>Release year</span>
            <strong className="text-[0.64rem] font-extrabold text-[rgba(246,196,83,0.86)]">
              {selectedYearEnd - selectedYearStart}y span
            </strong>
          </div>
          <div className="grid grid-cols-[auto_minmax(110px,1fr)_auto] items-center gap-2">
            <span className={dockLabelClass}>{selectedYearStart}</span>
            <div
              ref={yearSliderRef}
              className="relative h-6 min-w-0 cursor-pointer touch-none"
              onPointerDown={handleYearTrackPointerDown}
              onPointerMove={handleYearDragMove}
              onPointerUp={handleYearDragEnd}
              onPointerCancel={handleYearDragEnd}
            >
              <div className="absolute top-1/2 right-0 left-0 h-1 -translate-y-1/2 bg-[rgba(246,240,223,0.18)]" />
              <div
                className="absolute top-1/2 h-1 -translate-y-1/2 cursor-grab bg-[#f6c453] active:cursor-grabbing"
                style={{
                  left: `${selectedYearStartPercent}%`,
                  right: `${100 - selectedYearEndPercent}%`
                }}
                onPointerDown={(event) => startYearDrag("range", event)}
                onPointerMove={handleYearDragMove}
                onPointerUp={handleYearDragEnd}
                onPointerCancel={handleYearDragEnd}
              />
              <button
                className="absolute top-1/2 h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 cursor-ew-resize rounded-full border border-[#081011] bg-[#f6c453] shadow-[0_4px_12px_rgba(0,0,0,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fff8df]"
                style={{ left: `${selectedYearStartPercent}%` }}
                type="button"
                onPointerDown={(event) => startYearDrag("start", event)}
                onPointerMove={handleYearDragMove}
                onPointerUp={handleYearDragEnd}
                onPointerCancel={handleYearDragEnd}
                aria-label={`Start year ${selectedYearStart}`}
              />
              <button
                className="absolute top-1/2 h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 cursor-ew-resize rounded-full border border-[#081011] bg-[#f6c453] shadow-[0_4px_12px_rgba(0,0,0,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fff8df]"
                style={{ left: `${selectedYearEndPercent}%` }}
                type="button"
                onPointerDown={(event) => startYearDrag("end", event)}
                onPointerMove={handleYearDragMove}
                onPointerUp={handleYearDragEnd}
                onPointerCancel={handleYearDragEnd}
                aria-label={`End year ${selectedYearEnd}`}
              />
            </div>
            <span className={dockLabelClass}>{selectedYearEnd}</span>
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
          onClick={() => {
            setMoviePanelMode("filtered");
            setMovieSearch("");
          }}
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
          setMovieSearch("");
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
