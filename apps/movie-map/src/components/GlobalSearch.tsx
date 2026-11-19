import { useEffect, useMemo, useState } from "react";
import { ArrowRight, CornerDownLeft, Search, X } from "lucide-react";
import { alpha2ToFlag } from "../data/countryFlags";
import { searchMovies, type Movie } from "../data/movies";
import { isTop250 } from "../components/badges";
import { PosterFallback } from "./PosterFallback";
import { cx, fieldClass, iconButtonClass, labelClass, menuClass } from "../ui";

interface GlobalSearchProps {
  open: boolean;
  movies: Movie[];
  currentCountryName: string | null;
  currentCountryCode: string | null;
  onClose: () => void;
  onSelect: (movie: Movie) => void;
}

const RESULT_LIMIT = 60;

/**
 * Command-palette style search across the whole collection.
 *
 * The panel search only looks inside the country you already opened, so a film
 * living anywhere else is unreachable from there. This searches everything and
 * groups the hits by "the country you are looking at" vs "everywhere else".
 */
export function GlobalSearch({
  open,
  movies,
  currentCountryName,
  currentCountryCode,
  onClose,
  onSelect
}: GlobalSearchProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActiveIndex(0);
    }
  }, [open]);

  const results = useMemo<{ inCountry: Movie[]; elsewhere: Movie[] }>(() => {
    if (!query.trim()) {
      return { inCountry: [], elsewhere: [] };
    }

    const matches = searchMovies(movies, query)
      .slice()
      .sort(
        (first, second) =>
          second.rating - first.rating || second.year - first.year || first.title.localeCompare(second.title)
      )
      .slice(0, RESULT_LIMIT);

    if (!currentCountryCode) {
      return { inCountry: [], elsewhere: matches };
    }

    return {
      inCountry: matches.filter((movie) => movie.countryCode === currentCountryCode),
      elsewhere: matches.filter((movie) => movie.countryCode !== currentCountryCode)
    };
  }, [currentCountryCode, movies, query]);

  const flatResults = useMemo(
    () => [...results.inCountry, ...results.elsewhere],
    [results]
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  if (!open) {
    return null;
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, flatResults.length - 1));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
      return;
    }

    if (event.key === "Enter") {
      const movie = flatResults[activeIndex];

      if (movie) {
        event.preventDefault();
        onSelect(movie);
      }
    }
  };

  const renderRow = (movie: Movie, index: number) => (
    <button
      key={movie.id}
      className={cx(
        "grid w-full cursor-pointer grid-cols-[36px_minmax(0,1fr)_auto] items-center gap-3 rounded-xl border-0 bg-transparent px-2 py-1.5 text-left transition",
        index === activeIndex ? "bg-[rgba(246,196,83,0.14)]" : "hover:bg-[rgba(246,240,223,0.06)]"
      )}
      type="button"
      onMouseEnter={() => setActiveIndex(index)}
      onClick={() => onSelect(movie)}
      role="option"
      aria-selected={index === activeIndex}
    >
      {movie.posterUrl ? (
        <img
          className="h-[46px] w-[34px] rounded-md object-cover"
          src={movie.posterUrl}
          alt=""
          loading="lazy"
          decoding="async"
        />
      ) : (
        <PosterFallback className="h-[46px] w-[34px] rounded-md" title={movie.title} />
      )}
      <span className="grid min-w-0 gap-0.5">
        <span className="truncate text-[0.86rem] font-extrabold text-[#fff8df]">{movie.title}</span>
        <span className="flex min-w-0 items-center gap-1.5 text-[0.68rem] font-bold text-[rgba(246,240,223,0.52)]">
          <span aria-hidden="true">{alpha2ToFlag(movie.countryCode)}</span>
          <span className="truncate">
            {movie.year} · {movie.countryName}
          </span>
        </span>
      </span>
      <span className="flex items-center gap-1.5">
        {isTop250(movie) ? (
          <span className="hidden rounded-full border border-[rgba(246,196,83,0.3)] bg-[rgba(246,196,83,0.12)] px-1.5 py-[2px] text-[0.58rem] font-black text-[#ffdf9b] min-[520px]:inline">
            #{movie.ratingRank}
          </span>
        ) : null}
        <span className="text-[0.76rem] font-black text-[#f6c453]">★{movie.rating.toFixed(1)}</span>
      </span>
    </button>
  );

  return (
    <div
      className="absolute inset-0 z-[280] bg-[rgba(3,5,6,0.62)] px-4 pt-[11vh] backdrop-blur-[2px]"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="presentation"
    >
      <div
        className={cx(menuClass, "mx-auto grid w-full max-w-[620px] grid-rows-[auto_minmax(0,1fr)] p-3")}
        role="dialog"
        aria-modal="true"
        aria-label="Search all films"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-2">
          <Search className="ml-1 shrink-0 text-[rgba(246,240,223,0.42)]" size={17} />
          <input
            className={cx(fieldClass, "h-11 flex-1 bg-transparent")}
            type="text"
            placeholder="Search 1,200 films, countries, genres, years…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoFocus
            aria-label="Search all films"
            role="combobox"
            aria-expanded={Boolean(query)}
            aria-controls="global-search-results"
          />
          <button className={iconButtonClass} type="button" onClick={onClose} aria-label="Close search">
            <X size={16} />
          </button>
        </div>

        <div
          className="mt-3 grid max-h-[min(56vh,520px)] min-h-0 gap-1 overflow-y-auto pb-3 [mask-image:linear-gradient(to_bottom,#000_calc(100%-20px),transparent)]"
          id="global-search-results"
          role="listbox"
          aria-label="Search results"
        >
          {!query.trim() ? (
            <p className="px-2 py-6 text-center text-[0.8rem] font-bold text-[rgba(246,240,223,0.42)]">
              Type a title, a country, a genre or a year.
            </p>
          ) : null}

          {query.trim() && flatResults.length === 0 ? (
            <p className="px-2 py-6 text-center text-[0.8rem] font-bold text-[rgba(246,240,223,0.42)]">
              No films match “{query.trim()}”.
            </p>
          ) : null}

          {results.inCountry.length > 0 ? (
            <p className={cx(labelClass, "px-2 pt-1 pb-0.5")}>
              In {currentCountryName}
            </p>
          ) : null}
          {results.inCountry.map((movie, index) => renderRow(movie, index))}

          {results.elsewhere.length > 0 ? (
            <p className={cx(labelClass, "flex items-center gap-1.5 px-2 pt-2 pb-0.5")}>
              {results.inCountry.length > 0 ? (
                <>
                  <ArrowRight size={11} />
                  Elsewhere · {results.elsewhere.length}
                </>
              ) : (
                <>{currentCountryCode ? "Elsewhere" : "Results"} · {results.elsewhere.length}</>
              )}
            </p>
          ) : null}
          {results.elsewhere.map((movie, index) =>
            renderRow(movie, index + results.inCountry.length)
          )}
        </div>

        <div className="mt-2 flex items-center justify-between gap-2 border-t border-[rgba(246,240,223,0.1)] pt-2 text-[0.64rem] font-bold text-[rgba(246,240,223,0.38)]">
          <span className="flex items-center gap-1.5">
            <CornerDownLeft size={11} /> open
          </span>
          <span>↑ ↓ move · esc close</span>
        </div>
      </div>
    </div>
  );
}
