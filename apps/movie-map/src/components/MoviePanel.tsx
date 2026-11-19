import { PosterFallback } from "./PosterFallback";
import { Shuffle, X } from "lucide-react";
import type { Movie } from "../data/movies";
import { chipActiveClass, chipClass, cx, fieldClass, iconButtonClass, labelClass, menuClass } from "../ui";
import { isTop250, TopRibbon } from "./badges";

export type PanelPreset = "all" | "top250" | "high";

interface MoviePanelProps {
  kicker: string;
  summary: string;
  movies: Movie[];
  total: number;
  search: string;
  preset: PanelPreset;
  presetCounts: Record<PanelPreset, number>;
  onSearchChange: (value: string) => void;
  onPresetChange: (preset: PanelPreset) => void;
  onRandom: () => void;
  onClose: () => void;
  onOpenGlobalSearch: () => void;
  onSelect: (movie: Movie) => void;
  selectedMovieId: string | null;
}

const PRESETS: Array<{ id: PanelPreset; label: string }> = [
  { id: "all", label: "All" },
  { id: "top250", label: "Top 250" },
  { id: "high", label: "8.5+" }
];

export function MoviePanel({
  kicker,
  summary,
  movies,
  total,
  search,
  preset,
  presetCounts,
  onSearchChange,
  onPresetChange,
  onRandom,
  onClose,
  onOpenGlobalSearch,
  onSelect,
  selectedMovieId
}: MoviePanelProps) {
  const searching = search.trim().length > 0;

  return (
    <aside
      className={cx(
        menuClass,
        "absolute top-[74px] right-4 z-[235] grid h-[min(620px,calc(100vh-210px))] w-[clamp(286px,25vw,338px)] grid-rows-[auto_auto_auto_minmax(0,1fr)] gap-2.5 p-3 max-[640px]:top-[128px] max-[640px]:right-3 max-[640px]:left-3 max-[640px]:h-[min(440px,calc(100vh-260px))] max-[640px]:w-auto"
      )}
      aria-label={kicker}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="grid min-w-0 gap-0.5">
          <p className={labelClass}>{kicker}</p>
          <h2 className="m-0 font-serif text-[1.3rem] leading-none font-semibold text-[#fff8df]">
            {summary}
          </h2>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <button
            className={cx(iconButtonClass, "h-8 w-8")}
            type="button"
            onClick={onRandom}
            disabled={movies.length === 0}
            aria-label="Open a random film from this list"
            title="Surprise me"
          >
            <Shuffle size={15} />
          </button>
          <button
            className={cx(iconButtonClass, "h-8 w-8")}
            type="button"
            onClick={onClose}
            aria-label="Close film list"
          >
            <X size={15} />
          </button>
        </div>
      </div>

      <div className="relative">
        <input
          className={cx(fieldClass, "h-9 pr-2 pl-2.5 text-[0.8rem]")}
          type="search"
          placeholder="Filter by title, year, genre…"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          aria-label="Filter this list"
        />
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {PRESETS.map((option) => (
          <button
            key={option.id}
            className={cx(chipClass, "py-[3px]", preset === option.id && chipActiveClass)}
            type="button"
            onClick={() => onPresetChange(option.id)}
            aria-pressed={preset === option.id}
          >
            {option.label}
            <span className="text-[rgba(246,240,223,0.4)]">{presetCounts[option.id]}</span>
          </button>
        ))}
        <span className="ml-auto text-[0.6rem] font-bold text-[rgba(246,240,223,0.34)]">
          {movies.length}/{total}
        </span>
      </div>

      <div className="grid min-h-0 grid-cols-3 content-start gap-1 overflow-x-hidden overflow-y-auto [grid-auto-rows:126px] [mask-image:linear-gradient(to_bottom,#000_calc(100%-26px),transparent)] max-[640px]:grid-cols-3 max-[640px]:[grid-auto-rows:118px]">
        {movies.map((movie) => (
          <button
            key={movie.id}
            className={cx(
              "group relative block h-full w-full min-w-0 cursor-pointer overflow-hidden rounded-lg border-0 bg-[#050709] p-0 leading-none transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#f6c453]",
              selectedMovieId === movie.id
                ? "shadow-[inset_0_0_0_2px_rgba(246,196,83,0.9)]"
                : "hover:shadow-[inset_0_0_0_1px_rgba(246,240,223,0.4)]"
            )}
            type="button"
            onClick={() => onSelect(movie)}
            title={`${movie.title} (${movie.year})`}
            aria-label={`Open ${movie.title} details`}
          >
            {movie.posterUrl ? (
              <img
                className="block h-full w-full rounded-lg object-cover transition duration-300 group-hover:scale-[1.04]"
                src={movie.posterUrl}
                alt=""
                loading="lazy"
                decoding="async"
                width={270}
                height={380}
              />
            ) : (
              <PosterFallback title={movie.title} year={movie.year} />
            )}
            {isTop250(movie) ? <TopRibbon rank={movie.ratingRank as number} /> : null}
            <span className="absolute right-1 bottom-1 rounded-full bg-[rgba(8,12,13,0.82)] px-1.5 py-[2px] text-[0.6rem] leading-none font-black text-[#f6c453] backdrop-blur-sm">
              ★{movie.rating.toFixed(1)}
            </span>
          </button>
        ))}

        {movies.length === 0 ? (
          <div className="col-span-3 grid gap-2 rounded-lg border border-[rgba(246,240,223,0.1)] bg-[rgba(246,240,223,0.03)] px-3 py-4 text-center">
            <p className="m-0 text-[0.8rem] font-extrabold text-[rgba(246,240,223,0.6)]">
              {searching ? `Nothing here matches “${search.trim()}”` : "No films in this window"}
            </p>
            {searching ? (
              <button
                className="mx-auto cursor-pointer text-[0.72rem] font-extrabold text-[#62d7c8] underline decoration-[rgba(98,215,200,0.4)] underline-offset-2 hover:text-[#b8f4ea]"
                type="button"
                onClick={onOpenGlobalSearch}
              >
                Search all countries instead →
              </button>
            ) : null}
          </div>
        ) : null}
      </div>
    </aside>
  );
}
