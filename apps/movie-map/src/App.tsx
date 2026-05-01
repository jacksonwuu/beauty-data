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
  const [hoveredMovieTooltip, setHoveredMovieTooltip] = useState<{ movie: Movie; x: number; y: number } | null>(null);

  const countries = useMemo(
    () => [...WORLD_COUNTRIES].sort((first, second) => first.name.localeCompare(second.name)),
    []
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
  const movieCountByCountry = useMemo(() => {
    const counts = new Map<string, number>();

    movies.forEach((movie) => {
      counts.set(movie.countryCode, (counts.get(movie.countryCode) ?? 0) + 1);
    });

    return counts;
  }, []);

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
        (movie) => movie.year <= selectedYear && (selectedGenre === "All" || movie.genres.includes(selectedGenre))
      ),
    [selectedGenre, selectedYear]
  );

  const rankedVisibleMovies = useMemo(
    () =>
      [...visibleMovies].sort(
        (first, second) =>
          second.rating - first.rating || second.year - first.year || first.title.localeCompare(second.title)
      ),
    [visibleMovies]
  );

  const moviePanelMovies = moviePanelMode === "country" ? selectedCountryMovies : rankedVisibleMovies;
  const moviePanelTitle =
    moviePanelMode === "country" && selectedCountry ? `${countryEmoji(selectedCountry.id)} ${selectedCountry.name}` : "Filtered movies";
  const moviePanelSubtitle =
    moviePanelMode === "country" ? `${moviePanelMovies.length} movies` : `${moviePanelMovies.length} ranked by score`;

  const showCountryMovies = (country: CountryFeature | null) => {
    setSelectedCountry(country);
    setMoviePanelMode(country ? "country" : null);
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
    <main className="app-shell">
      <section className="stage" aria-label="Interactive movie globe">
        <InteractiveGlobe
          items={globeItems}
          focusedCountryId={selectedCountry?.id}
          selectedItemId={selectedMovie?.id}
          billboardScale={posterScale}
          billboardLayout={posterLayout}
          billboardPlacement={moviePlacement}
          minCameraDistance={2.18}
          maxCameraDistance={7.8}
          onCountryHover={setHoveredCountry}
          onCountryClick={showCountryMovies}
          onItemHover={(item, event) => {
            if (!item || !event) {
              setHoveredMovieTooltip(null);
              return;
            }

            setHoveredMovieTooltip({ movie: item.payload, x: event.clientX, y: event.clientY });
          }}
          onItemClick={(item) => setSelectedMovie(item.payload)}
        />
      </section>

      <aside className="country-select">
        <button
          className="country-select-button"
          type="button"
          aria-expanded={countryMenuOpen}
          onClick={() => setCountryMenuOpen((open) => !open)}
        >
          <MapPinned size={16} />
          <span>{displayedCountry ? `${countryEmoji(displayedCountry.id)} ${displayedCountry.name}` : "🌐 Select a country"}</span>
          <ChevronDown size={15} />
        </button>
        {countryMenuOpen ? (
          <div className="country-menu" role="listbox">
            <div className="country-search-wrap">
              <input
                className="country-search"
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
                className={selectedCountry?.id === country.id ? "country-option country-option--active" : "country-option"}
                type="button"
                onClick={() => {
                  showCountryMovies(country);
                  setCountryMenuOpen(false);
                  setCountrySearch("");
                }}
              >
                <span>{countryEmoji(country.id)}</span>
                <span>{country.name}</span>
                <span className="country-count-badge">{movieCountByCountry.get(countryIdToAlpha2(country.id) ?? "") ?? 0}</span>
              </button>
            ))}
            {filteredCountries.length === 0 ? <p className="country-empty">No countries found</p> : null}
          </div>
        ) : null}
      </aside>

      {moviePanelMode ? (
        <aside className="movie-panel" aria-label={moviePanelTitle}>
          <div className="movie-panel-header">
            <div>
              <p className="detail-kicker">{moviePanelTitle}</p>
              <h2>{moviePanelSubtitle}</h2>
            </div>
            <button
              className="icon-button movie-panel-close"
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
          <div className="movie-grid">
            {moviePanelMovies.map((movie) => (
              <button
                key={movie.id}
                className={selectedMovie?.id === movie.id ? "movie-grid-card movie-grid-card--active" : "movie-grid-card"}
                type="button"
                onClick={() => setSelectedMovie(movie)}
                aria-label={`Open ${movie.title} details`}
              >
                <img src={movie.posterUrl} alt={`${movie.title} movie artwork`} />
                <span>{movie.year}</span>
              </button>
            ))}
          </div>
        </aside>
      ) : null}

      <section className="control-dock" aria-label="Map filters">
        <div className="dock-control">
          <div className="dock-control-header">
            <span>Size</span>
            <strong>{Math.round(posterScale * 100)}%</strong>
          </div>
          <input
            aria-label="Movie cover size"
            type="range"
            min={0.55}
            max={1.8}
            step={0.05}
            value={posterScale}
            onChange={(event) => setPosterScale(Number(event.target.value))}
          />
        </div>

        <div className="dock-control">
          <div className="dock-control-header">
            <span>Release year</span>
          </div>
          <div className="range-with-endpoints">
            <span>{minYear}</span>
            <input
              aria-label="Filter movies by year"
              type="range"
              min={minYear}
              max={maxYear}
              step={1}
              value={selectedYear}
              onChange={(event) => setSelectedYear(Number(event.target.value))}
            />
            <span>{maxYear}</span>
          </div>
        </div>

        <div className="dock-control dock-control--layout">
          <div className="dock-control-header">
            <span>Layout</span>
          </div>
          <div className="layout-toggle" role="group" aria-label="Movie layout">
            {(["flat", "standing"] as const).map((layout) => (
              <button
                key={layout}
                className={posterLayout === layout ? "layout-toggle-button layout-toggle-button--active" : "layout-toggle-button"}
                type="button"
                onClick={() => setPosterLayout(layout)}
              >
                {layout === "flat" ? "Flat" : "Standing"}
              </button>
            ))}
          </div>
        </div>

        <div className="dock-control dock-control--placement">
          <div className="dock-control-header">
            <span>Placement</span>
          </div>
          <div className="layout-toggle" role="group" aria-label="Movie placement">
            {(["rows", "spread"] as const).map((placement) => (
              <button
                key={placement}
                className={moviePlacement === placement ? "layout-toggle-button layout-toggle-button--active" : "layout-toggle-button"}
                type="button"
                onClick={() => setMoviePlacement(placement)}
              >
                {placement === "rows" ? "Rows" : "Spread"}
              </button>
            ))}
          </div>
        </div>

        <div className="dock-control dock-control--genre">
          <div className="dock-control-header">
            <span>Genre</span>
          </div>
          <select
            className="genre-select"
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
          className={moviePanelMode === "filtered" ? "dock-summary dock-summary--active" : "dock-summary"}
          type="button"
          onClick={() => setMoviePanelMode("filtered")}
          aria-label="Show currently visible movies ranked by score"
        >
          <strong>{visibleMovies.length}</strong>
          <span>movies</span>
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
        <div className="movie-tooltip" style={{ left: hoveredMovieTooltip.x + 14, top: hoveredMovieTooltip.y + 14 }}>
          <strong>{hoveredMovieTooltip.movie.title}</strong>
          <span>{hoveredMovieTooltip.movie.rating.toFixed(1)} / 10</span>
        </div>
      ) : null}
    </main>
  );
}

export default App;
