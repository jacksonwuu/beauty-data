import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { Pause, Play, SlidersHorizontal } from "lucide-react";
import type {
  GlobeBillboardLayoutMode,
  GlobeBillboardPlacementMode
} from "@beauty-data/globe-core";
import {
  cx,
  iconButtonClass,
  labelClass,
  panelClass,
  segmentActiveClass,
  segmentClass,
  segmentIdleClass,
  segmentedClass
} from "../ui";

interface ControlBarProps {
  minYear: number;
  maxYear: number;
  yearStart: number;
  yearEnd: number;
  playing: boolean;
  visibleFilms: number;
  posterScale: number;
  layout: GlobeBillboardLayoutMode;
  placement: GlobeBillboardPlacementMode;
  genre: string;
  genres: string[];
  onPreviewRange: (start: number, end: number) => void;
  onCommitRange: (start: number, end: number) => void;
  onTogglePlay: () => void;
  onPosterScaleChange: (scale: number) => void;
  onLayoutChange: (layout: GlobeBillboardLayoutMode) => void;
  onPlacementChange: (placement: GlobeBillboardPlacementMode) => void;
  onGenreChange: (genre: string) => void;
  onOpenList: () => void;
  listActive: boolean;
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));


/**
 * Bottom console: the timeline is the primary control (a film atlas is about
 * time first), the layout knobs are secondary and fold away on small screens.
 */
export function ControlBar({
  minYear,
  maxYear,
  yearStart,
  yearEnd,
  playing,
  visibleFilms,
  posterScale,
  layout,
  placement,
  genre,
  genres,
  onPreviewRange,
  onCommitRange,
  onTogglePlay,
  onPosterScaleChange,
  onLayoutChange,
  onPlacementChange,
  onGenreChange,
  onOpenList,
  listActive
}: ControlBarProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    mode: "start" | "end" | "range";
    pointerId: number;
    startX: number;
    initialStart: number;
    initialEnd: number;
  } | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const span = maxYear - minYear || 1;
  const startPercent = ((yearStart - minYear) / span) * 100;
  const endPercent = ((yearEnd - minYear) / span) * 100;

  const yearFromClientX = (clientX: number) => {
    const rect = trackRef.current?.getBoundingClientRect();

    if (!rect || rect.width === 0) {
      return yearStart;
    }

    return Math.round(minYear + clamp((clientX - rect.left) / rect.width, 0, 1) * span);
  };

  const updateDrag = (clientX: number) => {
    const drag = dragRef.current;

    if (!drag) {
      return;
    }

    if (drag.mode === "start") {
      onPreviewRange(clamp(yearFromClientX(clientX), minYear, yearEnd), yearEnd);
      return;
    }

    if (drag.mode === "end") {
      onPreviewRange(yearStart, clamp(yearFromClientX(clientX), yearStart, maxYear));
      return;
    }

    const rect = trackRef.current?.getBoundingClientRect();

    if (!rect || rect.width === 0) {
      return;
    }

    const width = drag.initialEnd - drag.initialStart;
    const delta = Math.round(((clientX - drag.startX) / rect.width) * span);
    const nextStart = clamp(drag.initialStart + delta, minYear, maxYear - width);
    onPreviewRange(nextStart, nextStart + width);
  };

  const startDrag = (
    mode: "start" | "end" | "range",
    event: ReactPointerEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    dragRef.current = {
      mode,
      pointerId: event.pointerId,
      startX: event.clientX,
      initialStart: yearStart,
      initialEnd: yearEnd
    };
    event.currentTarget.setPointerCapture(event.pointerId);

    if (mode !== "range") {
      updateDrag(event.clientX);
    }
  };

  const handleTrackPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const nextYear = yearFromClientX(event.clientX);
    startDrag(
      Math.abs(nextYear - yearStart) <= Math.abs(nextYear - yearEnd) ? "start" : "end",
      event
    );
  };

  const handleDragMove = (event: ReactPointerEvent<HTMLButtonElement | HTMLDivElement>) => {
    if (dragRef.current?.pointerId !== event.pointerId) {
      return;
    }

    updateDrag(event.clientX);
  };

  const handleDragEnd = (event: ReactPointerEvent<HTMLButtonElement | HTMLDivElement>) => {
    if (dragRef.current?.pointerId !== event.pointerId) {
      return;
    }

    dragRef.current = null;
    onCommitRange(yearStart, yearEnd);
  };

  const thumbClass =
    "absolute top-1/2 z-[2] h-4 w-4 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize rounded-full border-2 border-[#081011] bg-[#f6c453] shadow-[0_2px_10px_rgba(0,0,0,0.5)] transition hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fff8df]";

  return (
    <section
      className={cx(
        panelClass,
        "absolute bottom-4 left-1/2 z-[230] grid w-[min(940px,calc(100vw-32px))] -translate-x-1/2 gap-2.5 p-3 max-[640px]:bottom-3 max-[640px]:gap-2 max-[640px]:p-2.5"
      )}
      aria-label="Timeline and map filters"
    >
      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 max-[640px]:gap-2">
        <button
          className={cx(iconButtonClass, "h-10 w-10 rounded-full")}
          type="button"
          onClick={onTogglePlay}
          aria-pressed={playing}
          aria-label={playing ? "Pause the year timeline" : "Play the year timeline"}
          title={playing ? "Pause" : "Play through the years"}
        >
          {playing ? <Pause size={16} /> : <Play className="ml-[2px]" size={16} />}
        </button>

        <div className="grid min-w-0 gap-1">
          <div className="flex items-baseline justify-between gap-3">
            <span className="font-serif text-[0.95rem] leading-none font-semibold text-[#fff8df] tabular-nums">
              {yearStart}
              <span className="mx-1 text-[rgba(246,240,223,0.34)]">–</span>
              {yearEnd}
            </span>
            <span className={cx(labelClass, "hidden min-[420px]:inline")}>
              {yearEnd - yearStart}y window
            </span>
          </div>
          <div
            ref={trackRef}
            className="relative h-7 min-w-0 cursor-pointer touch-none"
            onPointerDown={handleTrackPointerDown}
            onPointerMove={handleDragMove}
            onPointerUp={handleDragEnd}
            onPointerCancel={handleDragEnd}
            role="group"
            aria-label="Year range"
          >
            <div className="absolute top-1/2 right-0 left-0 h-[3px] -translate-y-1/2 rounded-full bg-[rgba(246,240,223,0.16)]" />
            <div
              className="absolute top-1/2 h-[3px] -translate-y-1/2 cursor-grab rounded-full bg-[linear-gradient(90deg,#f6c453,#ffe6a6)] active:cursor-grabbing"
              style={{ left: `${startPercent}%`, right: `${100 - endPercent}%` }}
              onPointerDown={(event) => startDrag("range", event)}
              onPointerMove={handleDragMove}
              onPointerUp={handleDragEnd}
              onPointerCancel={handleDragEnd}
            >
              <span className="absolute inset-x-0 -top-2 h-7" />
            </div>
            <button
              className={thumbClass}
              style={{ left: `${startPercent}%` }}
              type="button"
              onPointerDown={(event) => startDrag("start", event)}
              onPointerMove={handleDragMove}
              onPointerUp={handleDragEnd}
              onPointerCancel={handleDragEnd}
              aria-label={`Start year ${yearStart}`}
            />
            <button
              className={thumbClass}
              style={{ left: `${endPercent}%` }}
              type="button"
              onPointerDown={(event) => startDrag("end", event)}
              onPointerMove={handleDragMove}
              onPointerUp={handleDragEnd}
              onPointerCancel={handleDragEnd}
              aria-label={`End year ${yearEnd}`}
            />
          </div>
        </div>

        <button
          className={cx(
            "group flex shrink-0 cursor-pointer items-baseline gap-1.5 rounded-full border border-[rgba(246,240,223,0.14)] bg-[rgba(246,240,223,0.04)] px-3 py-1.5 transition hover:border-[rgba(246,196,83,0.45)] hover:bg-[rgba(246,196,83,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6c453]",
            listActive && "border-[rgba(246,196,83,0.5)] bg-[rgba(246,196,83,0.12)]"
          )}
          type="button"
          onClick={onOpenList}
          aria-label={`Show ${visibleFilms} films in view as a ranked list`}
        >
          <strong className="text-[0.92rem] leading-none font-black text-[#f6c453] tabular-nums">
            {visibleFilms.toLocaleString()}
          </strong>
          <span className={cx(labelClass, "leading-none")}>films ›</span>
        </button>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-[rgba(246,240,223,0.08)] pt-2 max-[640px]:justify-center max-[640px]:pt-1.5">
        <div
          className={cx(
            "grid min-w-0 flex-1 grid-cols-[minmax(96px,132px)_auto_auto_minmax(96px,124px)] items-center gap-3",
            showFilters
              ? "max-[640px]:grid max-[640px]:grid-cols-2 max-[640px]:gap-2"
              : "max-[640px]:hidden"
          )}
        >
          <label className="grid min-w-0 gap-1">
            <span className="flex items-center justify-between gap-2">
              <span className={labelClass}>Size</span>
              <span className="text-[0.6rem] font-black text-[rgba(246,196,83,0.8)] tabular-nums">
                {Math.round(posterScale * 100)}%
              </span>
            </span>
            <input
              className="h-1.5 w-full cursor-ew-resize accent-[#f6c453]"
              type="range"
              min={0.3}
              max={2.6}
              step={0.05}
              value={posterScale}
              onChange={(event) => onPosterScaleChange(Number(event.target.value))}
              aria-label="Movie cover size"
            />
          </label>

          <div className="grid gap-1">
            <span className={labelClass}>Layout</span>
            <div className={cx(segmentedClass, "grid-cols-2")} role="group" aria-label="Movie layout">
              {(["flat", "standing"] as const).map((mode) => (
                <button
                  key={mode}
                  className={cx(
                    segmentClass,
                    layout === mode ? segmentActiveClass : segmentIdleClass
                  )}
                  type="button"
                  onClick={() => onLayoutChange(mode)}
                  aria-pressed={layout === mode}
                >
                  {mode === "flat" ? "Flat" : "Standing"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-1">
            <span className={labelClass}>Placement</span>
            <div className={cx(segmentedClass, "grid-cols-2")} role="group" aria-label="Movie placement">
              {(["rows", "spread"] as const).map((mode) => (
                <button
                  key={mode}
                  className={cx(
                    segmentClass,
                    placement === mode ? segmentActiveClass : segmentIdleClass
                  )}
                  type="button"
                  onClick={() => onPlacementChange(mode)}
                  aria-pressed={placement === mode}
                >
                  {mode === "rows" ? "Rows" : "Spread"}
                </button>
              ))}
            </div>
          </div>

          <label className="grid min-w-0 gap-1">
            <span className={labelClass}>Genre</span>
            <select
              className="h-[26px] w-full min-w-0 cursor-pointer appearance-none rounded-[5px] border border-[rgba(246,240,223,0.12)] bg-[rgba(246,240,223,0.04)] px-2 text-[0.66rem] font-black text-[#fff8df] outline-none focus:border-[rgba(246,196,83,0.6)]"
              value={genre}
              onChange={(event) => onGenreChange(event.target.value)}
              aria-label="Filter films by genre"
            >
              <option value="All">All genres</option>
              {genres.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button
          className={cx(
            "ml-auto hidden cursor-pointer items-center gap-1.5 rounded-lg border border-[rgba(246,240,223,0.14)] bg-[rgba(246,240,223,0.04)] px-2.5 py-1.5 text-[0.68rem] font-extrabold text-[rgba(246,240,223,0.7)] max-[640px]:ml-0 max-[640px]:flex",
            showFilters && "border-[rgba(246,196,83,0.5)] text-[#ffe6a6]"
          )}
          type="button"
          onClick={() => setShowFilters((value) => !value)}
          aria-expanded={showFilters}
        >
          <SlidersHorizontal size={13} />
          Filters
        </button>

        <p className="m-0 hidden text-[0.6rem] font-bold text-[rgba(246,240,223,0.3)] min-[641px]:block">
          {playing ? "Playing…" : "Drag the range to travel in time"}
        </p>
      </div>
    </section>
  );
}
