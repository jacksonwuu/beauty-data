import { InteractiveGlobe, WORLD_COUNTRIES, type CountryFeature, type GlobeBillboardItem } from "@beauty-data/globe-core";
import { ChevronDown, MapPinned } from "lucide-react";
import { useMemo, useState } from "react";
import { MovieDetail } from "./components/MovieDetail";
import { countryEmoji } from "./data/countryFlags";
import { movies, type Movie } from "./data/movies";

const minYear = Math.min(...movies.map((movie) => movie.year));
const maxYear = Math.max(...movies.map((movie) => movie.year));

function App() {
  const [selectedYear, setSelectedYear] = useState(maxYear);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<CountryFeature | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryFeature | null>(null);
  const [countryMenuOpen, setCountryMenuOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [posterScale, setPosterScale] = useState(1);
  const [hoveredMovieTooltip, setHoveredMovieTooltip] = useState<{ movie: Movie; x: number; y: number } | null>(null);

  const countries = useMemo(
    () => [...WORLD_COUNTRIES].sort((first, second) => first.name.localeCompare(second.name)),
    []
  );

  const filteredCountries = useMemo(() => {
    const query = countrySearch.trim().toLowerCase();

    if (!query) {
      return countries;
    }

    return countries.filter((country) => country.name.toLowerCase().includes(query));
  }, [countries, countrySearch]);

  const displayedCountry = hoveredCountry ?? selectedCountry;

  const visibleMovies = useMemo(
    () => movies.filter((movie) => movie.year <= selectedYear),
    [selectedYear]
  );

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
      <section className="stage" aria-label="Interactive movie poster globe">
        <InteractiveGlobe
          items={globeItems}
          focusedCountryId={selectedCountry?.id}
          selectedItemId={selectedMovie?.id}
          billboardScale={posterScale}
          enableGlobeShading={false}
          showBacksideBillboards={false}
          onCountryHover={setHoveredCountry}
          onCountryClick={setSelectedCountry}
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
                  setSelectedCountry(country);
                  setCountryMenuOpen(false);
                  setCountrySearch("");
                }}
              >
                <span>{countryEmoji(country.id)}</span>
                <span>{country.name}</span>
              </button>
            ))}
            {filteredCountries.length === 0 ? <p className="country-empty">No countries found</p> : null}
          </div>
        ) : null}
      </aside>

      <section className="control-dock" aria-label="Map filters">
        <div className="dock-control">
          <div className="dock-control-header">
            <span>Poster size</span>
            <strong>{Math.round(posterScale * 100)}%</strong>
          </div>
          <input
            aria-label="Poster cover size"
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
            <strong>{selectedYear}</strong>
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

        <div className="dock-summary">
          <strong>{visibleMovies.length}</strong>
          <span>posters</span>
        </div>
      </section>

      <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
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
