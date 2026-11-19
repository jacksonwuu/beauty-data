import {
  InteractiveGlobe,
  WORLD_COUNTRIES,
  countryIdToAlpha2,
  type CountryFeature,
  type GlobeBillboardItem,
  type GlobeBillboardLayoutMode,
  type GlobeBillboardPlacementMode
} from "@beauty-data/globe-core";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ControlBar } from "./components/ControlBar";
import { GlobalSearch } from "./components/GlobalSearch";
import { GuideCard } from "./components/GuideCard";
import { MovieDetail } from "./components/MovieDetail";
import { MovieHoverCard } from "./components/MovieHoverCard";
import { MoviePanel, type PanelPreset } from "./components/MoviePanel";
import { RoutePanel } from "./components/RoutePanel";
import { TopBar } from "./components/TopBar";
import { isTop250 } from "./components/badges";
import { countryEmoji } from "./data/countryFlags";
import { movies, searchMovies, type Movie } from "./data/movies";
import { prefetchMovieDetail } from "./data/movieDetails";
import { movieRoutes, routeById, routeStops, type MovieRoute } from "./data/routes";
import { lookupPosterCell, posterAtlas, publicPlaceholder } from "./data/posterAtlas";
import { readUrlState, useUrlStateSync } from "./hooks/useUrlState";
import { visuallyHiddenClass } from "./ui";

const minYear = Math.min(...movies.map((movie) => movie.year));
const maxYear = Math.max(...movies.map((movie) => movie.year));
const yearWindowSize = 10;
const latestYearWindowStart = Math.max(minYear, maxYear - yearWindowSize);
const allGenres = [...new Set(movies.flatMap((movie) => movie.genres))].sort((first, second) =>
  first.localeCompare(second)
);
const countryCodes = new Set(movies.map((movie) => movie.countryCode));

const HIGH_SCORE = 8.5;
const PLAY_STEP_MS = 720;
const ROUTE_STEP_MS = 4200;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

interface YearRange {
  start: number;
  end: number;
}

const initialUrl = readUrlState();

function urlYearRange(): YearRange {
  const start = clamp(initialUrl.from ?? latestYearWindowStart, minYear, maxYear);
  const end = clamp(initialUrl.to ?? maxYear, start, maxYear);

  return { start, end };
}

function matchesPreset(movie: Movie, preset: PanelPreset) {
  if (preset === "top250") {
    return isTop250(movie);
  }

  if (preset === "high") {
    return movie.rating >= HIGH_SCORE;
  }

  return true;
}

function App() {
  const [yearRange, setYearRange] = useState<YearRange>(() => urlYearRange());
  // The globe only re-lays-out when a drag settles (or the year player ticks);
  // the two values below are what actually drive the expensive work.
  const [committedRange, setCommittedRange] = useState<YearRange>(() => urlYearRange());
  const [playing, setPlaying] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<CountryFeature | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryFeature | null>(null);
  const [panelOpen, setPanelOpen] = useState(initialUrl.panel === "filtered");
  const [panelPreset, setPanelPreset] = useState<PanelPreset>(
    initialUrl.preset === "top250" || initialUrl.preset === "high" ? initialUrl.preset : "all"
  );
  const [panelSearch, setPanelSearch] = useState("");
  const [posterScale, setPosterScale] = useState(initialUrl.scale ?? 1);
  const [posterLayout, setPosterLayout] = useState<GlobeBillboardLayoutMode>(
    initialUrl.layout === "standing" ? "standing" : "flat"
  );
  const [moviePlacement, setMoviePlacement] = useState<GlobeBillboardPlacementMode>(
    initialUrl.placement === "spread" ? "spread" : "rows"
  );
  const [selectedGenre, setSelectedGenre] = useState(initialUrl.genre ?? "All");
  const [searchOpen, setSearchOpen] = useState(false);
  const [routesOpen, setRoutesOpen] = useState(Boolean(initialUrl.route));
  const [activeRouteId, setActiveRouteId] = useState<string | null>(initialUrl.route ?? null);
  const [routeStopIndex, setRouteStopIndex] = useState(initialUrl.stop ?? 0);
  const [routePlaying, setRoutePlaying] = useState(false);
  const [hoveredMovie, setHoveredMovie] = useState<{ movie: Movie; x: number; y: number } | null>(
    null
  );

  const movieCountByCountry = useMemo(() => {
    const counts = new Map<string, number>();

    movies.forEach((movie) => {
      counts.set(movie.countryCode, (counts.get(movie.countryCode) ?? 0) + 1);
    });

    return counts;
  }, []);

  const countries = useMemo(() => {
    const countOf = (country: CountryFeature) => {
      const code = countryIdToAlpha2(country.id);
      return code ? (movieCountByCountry.get(code) ?? 0) : 0;
    };

    return [...WORLD_COUNTRIES]
      .filter((country) => countOf(country) > 0)
      .sort((first, second) => countOf(second) - countOf(first) || first.name.localeCompare(second.name));
  }, [movieCountByCountry]);

  const countryByCode = useMemo(() => {
    const mapped = new Map<string, CountryFeature>();

    countries.forEach((country) => {
      const code = countryIdToAlpha2(country.id);

      if (code) {
        mapped.set(code, country);
      }
    });

    return mapped;
  }, [countries]);

  const countryCodeOf = useCallback(
    (country: CountryFeature) => countryIdToAlpha2(country.id),
    []
  );

  // Every route is resolved once: the stop lists are pure functions of the data.
  const routeStopsByRoute = useMemo(() => {
    const map = new Map<string, Movie[]>();

    movieRoutes.forEach((route) => {
      map.set(route.id, routeStops(route));
    });

    return map;
  }, []);

  const activeRoute = useMemo(() => routeById(activeRouteId), [activeRouteId]);
  const routeStopList = useMemo(
    () => (activeRoute ? (routeStopsByRoute.get(activeRoute.id) ?? []) : []),
    [activeRoute, routeStopsByRoute]
  );
  const routeMoviesOf = useCallback(
    (route: MovieRoute) => routeStopsByRoute.get(route.id) ?? [],
    [routeStopsByRoute]
  );

  const selectedCountryCode = countryIdToAlpha2(selectedCountry?.id) ?? null;
  const displayedCountry = hoveredCountry ?? selectedCountry;

  const selectedCountryMovies = useMemo(() => {
    if (!selectedCountryCode) {
      return [];
    }

    return movies
      .filter(
        (movie) =>
          movie.countryCode === selectedCountryCode &&
          movie.year >= committedRange.start &&
          movie.year <= committedRange.end &&
          (selectedGenre === "All" || movie.genres.includes(selectedGenre))
      )
      .sort((first, second) => second.rating - first.rating || second.year - first.year);
  }, [committedRange.end, committedRange.start, selectedCountryCode, selectedGenre]);

  const visibleMovies = useMemo(
    () =>
      movies.filter(
        (movie) =>
          movie.year >= committedRange.start &&
          movie.year <= committedRange.end &&
          (selectedGenre === "All" || movie.genres.includes(selectedGenre))
      ),
    [committedRange.end, committedRange.start, selectedGenre]
  );

  // Ranking is computed once per committed view; the panel only slices it.
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

  const panelSource = selectedCountry ? selectedCountryMovies : rankedVisibleMovies;
  const presetMovies = useMemo(
    () => panelSource.filter((movie) => matchesPreset(movie, panelPreset)),
    [panelSource, panelPreset]
  );
  const panelMovies = useMemo(
    () => searchMovies(presetMovies, panelSearch),
    [panelSearch, presetMovies]
  );

  const presetCounts = useMemo(
    () => ({
      all: panelSource.length,
      top250: panelSource.filter((movie) => isTop250(movie)).length,
      high: panelSource.filter((movie) => movie.rating >= HIGH_SCORE).length
    }),
    [panelSource]
  );

  // The year player steps the window forward one year at a time and loops.
  useEffect(() => {
    if (!playing) {
      return;
    }

    const id = window.setInterval(() => {
      setYearRange((current) => {
        const width = current.end - current.start;
        const nextStart = current.start + 1;
        const next =
          nextStart + width > maxYear
            ? { start: minYear, end: Math.min(maxYear, minYear + width) }
            : { start: nextStart, end: nextStart + width };

        setCommittedRange(next);
        return next;
      });
    }, PLAY_STEP_MS);

    return () => window.clearInterval(id);
  }, [playing]);

  // The route player walks stop to stop, same rhythm as the year player.
  useEffect(() => {
    if (!routePlaying) {
      return;
    }

    const id = window.setInterval(() => {
      setRouteStopIndex((current) => {
        if (routeStopList.length === 0) {
          return current;
        }

        const next = (current + 1) % routeStopList.length;
        const movie = routeStopList[next];
        setSelectedMovie(movie);
        setSelectedCountry(countryByCode.get(movie.countryCode) ?? null);
        setCommittedRange({
          start: clamp(movie.year - 6, minYear, maxYear),
          end: clamp(movie.year + 6, minYear, maxYear)
        });
        setYearRange({
          start: clamp(movie.year - 6, minYear, maxYear),
          end: clamp(movie.year + 6, minYear, maxYear)
        });
        return next;
      });
    }, ROUTE_STEP_MS);

    return () => window.clearInterval(id);
  }, [countryByCode, routePlaying, routeStopList]);

  // A film can arrive from a shared link; resolve it once the data is in hand.
  const bootRef = useRef(false);

  useEffect(() => {
    if (bootRef.current) {
      return;
    }

    bootRef.current = true;

    if (initialUrl.country) {
      const country = [...countryByCode.entries()].find(([code]) => code === initialUrl.country)?.[1];

      if (country) {
        setSelectedCountry(country);
        setPanelOpen(true);
      }
    }

    const bootStops = initialUrl.route ? routeStopsByRoute.get(initialUrl.route) : null;

    if (initialUrl.route && bootStops?.length) {
      const index = clamp(initialUrl.stop ?? 0, 0, bootStops.length - 1);
      const stop = bootStops[index];
      const range = {
        start: clamp(stop.year - 6, minYear, maxYear),
        end: clamp(stop.year + 6, minYear, maxYear)
      };

      setRoutesOpen(true);
      setActiveRouteId(initialUrl.route);
      setRouteStopIndex(index);
      setSelectedMovie(stop);
      setSelectedCountry(countryByCode.get(stop.countryCode) ?? null);
      setYearRange(range);
      setCommittedRange(range);
    }

    if (initialUrl.movie) {
      const movie = movies.find((entry) => entry.id === initialUrl.movie || entry.sourceId === initialUrl.movie);

      if (movie) {
        setSelectedMovie(movie);
      }
    }
  }, [countryByCode, routeStopsByRoute]);

  // Keyboard: ⌘K / Ctrl+K / "/" opens search, Escape closes whatever is on top.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing =
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" || target.tagName === "SELECT" || target.isContentEditable);

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
        return;
      }

      if (event.key === "/" && !typing) {
        event.preventDefault();
        setSearchOpen(true);
        return;
      }

      if (event.key === "Escape") {
        if (searchOpen) {
          setSearchOpen(false);
          return;
        }

        if (selectedMovie) {
          setSelectedMovie(null);
          return;
        }

        if (panelOpen) {
          setPanelOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [panelOpen, searchOpen, selectedMovie]);

  useUrlStateSync({
    from: committedRange.start,
    to: committedRange.end,
    country: selectedCountryCode,
    movie: selectedMovie?.id ?? null,
    genre: selectedGenre === "All" ? null : selectedGenre,
    layout: posterLayout === "flat" ? null : posterLayout,
    placement: moviePlacement === "rows" ? null : moviePlacement,
    scale: posterScale === 1 ? null : posterScale,
    panel: panelOpen && !routesOpen ? (selectedCountry ? "country" : "filtered") : null,
    preset: panelOpen && panelPreset !== "all" ? panelPreset : null,
    route: routesOpen ? activeRouteId : null,
    stop: routesOpen && activeRouteId && routeStopIndex > 0 ? routeStopIndex : null
  });

  const previewRange = useCallback((start: number, end: number) => {
    setPlaying(false);
    setYearRange({ start, end });
  }, []);

  const commitRange = useCallback((start: number, end: number) => {
    setYearRange({ start, end });
    setCommittedRange({ start, end });
  }, []);

  const openPanel = useCallback((preset?: PanelPreset) => {
    setPanelOpen(true);

    if (preset) {
      setPanelPreset(preset);
    }
  }, []);

  const showCountryMovies = useCallback((country: CountryFeature | null) => {
    setSelectedCountry(country);
    setPanelSearch("");

    if (country) {
      setPanelOpen(true);
    } else {
      setPanelPreset("all");
    }
  }, []);

  const closePanel = useCallback(() => {
    setPanelOpen(false);
    setPanelSearch("");
    setPanelPreset("all");
    setSelectedCountry(null);
  }, []);

  const globeItems = useMemo<Array<GlobeBillboardItem<Movie>>>(
    () =>
      visibleMovies.map((movie) => ({
        id: movie.id,
        countryCode: movie.countryCode,
        year: movie.year,
        imageUrl: movie.posterUrl || publicPlaceholder,
        payload: movie
      })),
    [visibleMovies]
  );

  const tooltipFrameRef = useRef(0);
  const pendingTooltipRef = useRef<{ movie: Movie; x: number; y: number } | null>(null);

  // Pointer moves and hover events fire far more often than the tooltip needs
  // to paint; coalesce them into one state update per animation frame.
  const showMovieTooltip = useCallback((movie: Movie, x: number, y: number) => {
    pendingTooltipRef.current = { movie, x, y };

    if (tooltipFrameRef.current) {
      return;
    }

    tooltipFrameRef.current = requestAnimationFrame(() => {
      tooltipFrameRef.current = 0;
      const pending = pendingTooltipRef.current;

      if (pending) {
        setHoveredMovie(pending);
      }
    });
  }, []);

  const clearMovieTooltip = useCallback(() => {
    pendingTooltipRef.current = null;

    if (tooltipFrameRef.current) {
      cancelAnimationFrame(tooltipFrameRef.current);
      tooltipFrameRef.current = 0;
    }

    setHoveredMovie(null);
  }, []);

  useEffect(
    () => () => {
      if (tooltipFrameRef.current) {
        cancelAnimationFrame(tooltipFrameRef.current);
      }
    },
    []
  );

  const handleItemHover = useCallback(
    (item: GlobeBillboardItem<Movie> | null, event?: { clientX: number; clientY: number }) => {
      if (!item || !event) {
        clearMovieTooltip();
        return;
      }

      showMovieTooltip(item.payload, event.clientX, event.clientY);
      prefetchMovieDetail(item.payload.id);
    },
    [clearMovieTooltip, showMovieTooltip]
  );

  const handleItemClick = useCallback((item: GlobeBillboardItem<Movie>) => {
    setSelectedMovie(item.payload);
    clearMovieTooltip();
  }, [clearMovieTooltip]);

  const showRandomMovie = useCallback(() => {
    const pool = panelMovies.length > 0 ? panelMovies : visibleMovies;

    if (pool.length === 0) {
      return;
    }

    setSelectedMovie(pool[Math.floor(Math.random() * pool.length)]);
    clearMovieTooltip();
  }, [clearMovieTooltip, panelMovies, visibleMovies]);

  const handleCountryClick = useCallback(
    (country: CountryFeature | null) => {
      showCountryMovies(country);
    },
    [showCountryMovies]
  );

  const openRoutes = useCallback(() => {
    setRoutesOpen(true);
    setPanelOpen(false);
  }, []);

  const closeRoutes = useCallback(() => {
    setRoutesOpen(false);
    setActiveRouteId(null);
    setRoutePlaying(false);
    setRouteStopIndex(0);
  }, []);

  const pickRoute = useCallback(
    (routeId: string) => {
      setActiveRouteId(routeId);
      setRouteStopIndex(0);
      setRoutePlaying(false);
      setRoutesOpen(true);
      setPanelOpen(false);
      setPanelSearch("");
      const stops = routeStopsByRoute.get(routeId) ?? [];
      const first = stops[0];

      if (first) {
        setSelectedCountry(countryByCode.get(first.countryCode) ?? null);
        commitRange(clamp(first.year - 6, minYear, maxYear), clamp(first.year + 6, minYear, maxYear));
      }
    },
    [commitRange, countryByCode, routeStopsByRoute]
  );

  // A stop is a jump: the year window, the camera country and the film all move.
  const selectRouteStop = useCallback(
    (index: number) => {
      if (routeStopList.length === 0) {
        return;
      }

      const next = ((index % routeStopList.length) + routeStopList.length) % routeStopList.length;
      const movie = routeStopList[next];
      setRouteStopIndex(next);
      setSelectedMovie(movie);
      setSelectedCountry(countryByCode.get(movie.countryCode) ?? null);
      commitRange(clamp(movie.year - 6, minYear, maxYear), clamp(movie.year + 6, minYear, maxYear));
    },
    [commitRange, countryByCode, routeStopList]
  );

  const stepRoute = useCallback(
    (delta: number) => {
      selectRouteStop(routeStopIndex + delta);
    },
    [routeStopIndex, selectRouteStop]
  );

  const summary = `${panelMovies.length}${panelMovies.length !== presetMovies.length ? `/${presetMovies.length}` : ""} · ${committedRange.start}–${committedRange.end}`;

  return (
    <main className="relative h-full w-full overflow-hidden bg-[#050709]">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-1/2 focus:z-[400] focus:-translate-x-1/2 focus:rounded-lg focus:bg-[#f6c453] focus:px-3 focus:py-2 focus:text-[0.78rem] focus:font-black focus:text-[#081011]"
        href="#film-list"
      >
        Skip to the film list
      </a>

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
          onCountryClick={handleCountryClick}
          onItemHover={handleItemHover}
          onItemClick={handleItemClick}
          posterAtlas={posterAtlas}
          posterLookup={lookupPosterCell}
        />
        <p className={visuallyHiddenClass}>
          The globe plots {movies.length} films from {countryCodes.size} countries. Every film is
          also reachable through the film list, which is keyboard and screen reader friendly.
        </p>
      </section>

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_45%,transparent_38%,rgba(3,5,6,0.72)_100%)]"
        aria-hidden="true"
      />

      {/* Keeps the top and bottom chrome readable where posters reach the edges. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[200] h-[168px] bg-[linear-gradient(to_bottom,rgba(5,7,9,0.97)_0%,rgba(5,7,9,0.82)_40%,rgba(5,7,9,0.35)_74%,transparent_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[200] h-[190px] bg-[linear-gradient(to_top,rgba(5,7,9,0.9)_0%,rgba(5,7,9,0.45)_55%,transparent_100%)]"
        aria-hidden="true"
      />

      <TopBar
        totalFilms={movies.length}
        totalCountries={countryCodes.size}
        visibleFilms={visibleMovies.length}
        displayedCountry={displayedCountry}
        selectedCountryId={selectedCountry?.id ?? null}
        countries={countries}
        movieCountByCountry={movieCountByCountry}
        countryCodeOf={countryCodeOf}
        onSelectCountry={handleCountryClick}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenList={() => (panelOpen ? closePanel() : openPanel())}
        listActive={panelOpen}
        onOpenRoutes={() => (routesOpen ? closeRoutes() : openRoutes())}
        routesActive={routesOpen}
      />

      <GuideCard
        hidden={panelOpen || routesOpen || Boolean(selectedMovie) || Boolean(selectedCountry)}
        visibleFilms={visibleMovies.length}
        onRandom={showRandomMovie}
        onTop250={() => openPanel("top250")}
        onHighScore={() => openPanel("high")}
        onPlay={() => setPlaying(true)}
        onRoutes={openRoutes}
      />

      {routesOpen ? (
        <RoutePanel
          routes={movieRoutes}
          activeRoute={activeRoute}
          stops={routeStopList}
          stopIndex={routeStopIndex}
          playing={routePlaying}
          onPickRoute={pickRoute}
          onBack={() => {
            setActiveRouteId(null);
            setRoutePlaying(false);
            setRouteStopIndex(0);
          }}
          onClose={closeRoutes}
          onSelectStop={selectRouteStop}
          onStep={stepRoute}
          onTogglePlay={() => setRoutePlaying((value) => !value)}
          routeMoviesOf={routeMoviesOf}
        />
      ) : null}

      {panelOpen && !routesOpen ? (
        <div id="film-list">
          <MoviePanel
            kicker={
              selectedCountry
                ? `${countryEmoji(selectedCountry.id)} ${selectedCountry.name}`
                : `All countries · ${selectedGenre === "All" ? "every genre" : selectedGenre}`
            }
            summary={summary}
            movies={panelMovies}
            total={presetMovies.length}
            search={panelSearch}
            preset={panelPreset}
            presetCounts={presetCounts}
            onSearchChange={setPanelSearch}
            onPresetChange={setPanelPreset}
            onRandom={showRandomMovie}
            onClose={closePanel}
            onOpenGlobalSearch={() => setSearchOpen(true)}
            onSelect={setSelectedMovie}
            selectedMovieId={selectedMovie?.id ?? null}
          />
        </div>
      ) : null}

      <ControlBar
        minYear={minYear}
        maxYear={maxYear}
        yearStart={yearRange.start}
        yearEnd={yearRange.end}
        playing={playing}
        visibleFilms={visibleMovies.length}
        posterScale={posterScale}
        layout={posterLayout}
        placement={moviePlacement}
        genre={selectedGenre}
        genres={allGenres}
        onPreviewRange={previewRange}
        onCommitRange={commitRange}
        onTogglePlay={() => setPlaying((value) => !value)}
        onPosterScaleChange={setPosterScale}
        onLayoutChange={setPosterLayout}
        onPlacementChange={setMoviePlacement}
        onGenreChange={(genre) => {
          setSelectedGenre(genre);
          setPanelSearch("");
        }}
        onOpenList={() => openPanel()}
        listActive={panelOpen && !selectedCountry}
      />

      <MovieDetail
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        onCountryClick={(countryCode) => {
          const country = countryByCode.get(countryCode);

          if (country) {
            showCountryMovies(country);
            setSelectedMovie(null);
          }
        }}
        onGenreClick={(genre) => {
          setSelectedGenre(genre);
          openPanel();
          setSelectedMovie(null);
        }}
      />

      <GlobalSearch
        open={searchOpen}
        movies={movies}
        currentCountryName={selectedCountry?.name ?? null}
        currentCountryCode={selectedCountryCode}
        onClose={() => setSearchOpen(false)}
        onSelect={(movie) => {
          setSelectedMovie(movie);
          setSearchOpen(false);
        }}
      />

      <MovieHoverCard
        movie={hoveredMovie?.movie ?? null}
        x={hoveredMovie?.x ?? 0}
        y={hoveredMovie?.y ?? 0}
      />

      {selectedCountry ? (
        <p className={visuallyHiddenClass} aria-live="polite">
          Showing {selectedCountry.name}: {selectedCountryMovies.length} films between{" "}
          {committedRange.start} and {committedRange.end}.
        </p>
      ) : null}
    </main>
  );
}

export default App;
