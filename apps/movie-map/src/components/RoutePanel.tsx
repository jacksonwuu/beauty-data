import { ArrowLeft, ChevronLeft, ChevronRight, Pause, Play, X } from "lucide-react";
import type { Movie } from "../data/movies";
import type { MovieRoute } from "../data/routes";
import { cx, iconButtonClass, labelClass, menuClass } from "../ui";

interface RoutePanelProps {
  routes: MovieRoute[];
  activeRoute: MovieRoute | null;
  stops: Movie[];
  stopIndex: number;
  playing: boolean;
  onPickRoute: (routeId: string) => void;
  onBack: () => void;
  onClose: () => void;
  onSelectStop: (index: number) => void;
  onStep: (delta: number) => void;
  onTogglePlay: () => void;
  routeMoviesOf: (route: MovieRoute) => Movie[];
}

function countryEmoji(countryCode: string) {
  if (!/^[A-Z]{2}$/.test(countryCode)) {
    return "🌐";
  }

  return String.fromCodePoint(
    ...countryCode.split("").map((letter) => 127397 + letter.charCodeAt(0))
  );
}

export function RoutePanel({
  routes,
  activeRoute,
  stops,
  stopIndex,
  playing,
  onPickRoute,
  onBack,
  onClose,
  onSelectStop,
  onStep,
  onTogglePlay,
  routeMoviesOf
}: RoutePanelProps) {
  return (
    <aside
      className={cx(
        menuClass,
        "absolute top-[74px] right-4 z-[235] grid h-[min(620px,calc(100vh-210px))] w-[clamp(300px,26vw,352px)] grid-rows-[auto_minmax(0,1fr)_auto] gap-2.5 p-3 max-[640px]:top-[128px] max-[640px]:right-3 max-[640px]:left-3 max-[640px]:h-[min(440px,calc(100vh-260px))] max-[640px]:w-auto"
      )}
      aria-label={activeRoute ? `${activeRoute.title} route` : "Themed routes"}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="grid min-w-0 gap-1">
          <p className={labelClass}>{activeRoute ? "Route" : "Routes"}</p>
          <h2 className="m-0 font-serif text-[1.3rem] leading-[1.1] font-semibold text-[#fff8df]">
            {activeRoute ? activeRoute.title : "主题路线"}
          </h2>
          <p className="m-0 text-[0.66rem] font-bold tracking-[0.02em] text-[rgba(246,240,223,0.42)]">
            {activeRoute ? activeRoute.subtitle : "Curated ways to travel the map"}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          {activeRoute ? (
            <button
              className={cx(iconButtonClass, "h-8 w-8")}
              type="button"
              onClick={onBack}
              aria-label="All routes"
              title="All routes"
            >
              <ArrowLeft size={15} />
            </button>
          ) : null}
          <button
            className={cx(iconButtonClass, "h-8 w-8")}
            type="button"
            onClick={onClose}
            aria-label="Close routes"
            title="Close routes"
          >
            <X size={15} />
          </button>
        </div>
      </div>

      <div className="grid min-h-0 content-start gap-1.5 overflow-y-auto pr-0.5">
        {activeRoute ? (
          <>
            <p className="m-0 mb-1 text-[0.72rem] leading-[1.55] text-[rgba(246,240,223,0.62)]">
              {activeRoute.blurb}
            </p>
            {stops.map((movie, index) => {
              const active = index === stopIndex;

              return (
                <button
                  key={movie.id}
                  className={cx(
                    "grid cursor-pointer grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-lg border px-2 py-1.5 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6c453]",
                    active
                      ? "border-[rgba(246,196,83,0.55)] bg-[rgba(246,196,83,0.14)]"
                      : "border-transparent hover:border-[rgba(246,240,223,0.16)] hover:bg-[rgba(246,240,223,0.05)]"
                  )}
                  type="button"
                  onClick={() => onSelectStop(index)}
                  aria-current={active ? "true" : undefined}
                >
                  <span
                    className={cx(
                      "grid h-5 w-5 place-items-center rounded-full text-[0.6rem] font-black",
                      active
                        ? "bg-[#d9ad46] text-[#081011]"
                        : "bg-[rgba(246,240,223,0.1)] text-[rgba(246,240,223,0.6)]"
                    )}
                  >
                    {index + 1}
                  </span>
                  <span className="grid min-w-0 gap-0.5">
                    <span className="truncate text-[0.78rem] font-bold text-[#fff8df]">
                      {movie.title}
                    </span>
                    <span className="text-[0.6rem] font-bold text-[rgba(246,240,223,0.44)]">
                      {movie.year} · {countryEmoji(movie.countryCode)} {movie.countryName}
                    </span>
                  </span>
                  <span className="text-[0.72rem] font-black text-[#f6c453]">
                    {movie.rating.toFixed(1)}
                  </span>
                </button>
              );
            })}
            {stops.length === 0 ? (
              <p className="m-0 rounded-lg border border-dashed border-[rgba(246,240,223,0.16)] px-3 py-6 text-center text-[0.74rem] font-semibold text-[rgba(246,240,223,0.44)]">
                No films match this route in the current dataset.
              </p>
            ) : null}
          </>
        ) : (
          routes.map((route) => {
            const count = routeMoviesOf(route).length;

            return (
              <button
                key={route.id}
                className="grid cursor-pointer gap-0.5 rounded-lg border border-transparent px-2 py-2 text-left transition hover:border-[rgba(246,196,83,0.4)] hover:bg-[rgba(246,196,83,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6c453]"
                type="button"
                onClick={() => onPickRoute(route.id)}
              >
                <span className="flex items-baseline justify-between gap-2">
                  <span className="text-[0.86rem] font-bold text-[#fff8df]">{route.title}</span>
                  <span className="text-[0.6rem] font-black text-[rgba(246,196,83,0.75)]">
                    {count}
                  </span>
                </span>
                <span className="text-[0.6rem] font-bold text-[rgba(246,240,223,0.4)]">
                  {route.subtitle}
                </span>
              </button>
            );
          })
        )}
      </div>

      {activeRoute ? (
        <div className="flex items-center justify-between gap-2 border-t border-[rgba(246,240,223,0.1)] pt-2">
          <button
            className={cx(iconButtonClass, "h-8 w-8")}
            type="button"
            onClick={() => onStep(-1)}
            aria-label="Previous stop"
            title="Previous stop"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            className={cx(iconButtonClass, "h-8 w-auto flex-row gap-1.5 px-3")}
            type="button"
            onClick={onTogglePlay}
            aria-pressed={playing}
            aria-label={playing ? "Pause the route" : "Play the route"}
          >
            {playing ? <Pause size={13} /> : <Play size={13} />}
            <span className="text-[0.64rem] font-black tracking-[0.08em]">
              {playing ? "PAUSE" : "PLAY"}
            </span>
          </button>
          <span className="text-[0.64rem] font-black text-[rgba(246,240,223,0.5)]">
            {stops.length === 0 ? "0 / 0" : `${stopIndex + 1} / ${stops.length}`}
          </span>
          <button
            className={cx(iconButtonClass, "h-8 w-8")}
            type="button"
            onClick={() => onStep(1)}
            aria-label="Next stop"
            title="Next stop"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      ) : (
        <p className="m-0 border-t border-[rgba(246,240,223,0.1)] pt-2 text-[0.62rem] font-semibold text-[rgba(246,240,223,0.4)]">
          Pick a route to walk the map stop by stop.
        </p>
      )}
    </aside>
  );
}
