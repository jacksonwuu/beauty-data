import { Route, Shuffle, Play, Sparkles, Trophy } from "lucide-react";
import { chipClass, cx, labelClass, panelClass } from "../ui";

interface GuideCardProps {
  hidden: boolean;
  visibleFilms: number;
  onRandom: () => void;
  onTop250: () => void;
  onHighScore: () => void;
  onPlay: () => void;
  onRoutes: () => void;
}

/** First-run guidance. Without it the globe is beautiful but mute. */
export function GuideCard({
  hidden,
  visibleFilms,
  onRandom,
  onTop250,
  onHighScore,
  onPlay,
  onRoutes
}: GuideCardProps) {
  if (hidden) {
    return null;
  }

  return (
    <div
      className={cx(
        panelClass,
        "absolute bottom-[176px] left-4 z-[220] grid w-[min(322px,calc(100vw-32px))] gap-2.5 p-3.5 max-[1180px]:hidden"
      )}
    >
      <p className={labelClass}>Start here</p>
      <h2 className="m-0 font-serif text-[1.32rem] leading-[1.12] font-semibold text-[#fff8df]">
        A century of cinema, pinned to the map.
      </h2>
      <p className="m-0 text-[0.76rem] leading-[1.5] font-semibold text-[rgba(246,240,223,0.56)]">
        Drag the timeline to travel in time, click a country for its films, click a poster for the
        story. {visibleFilms.toLocaleString()} films in view.
      </p>
      <div className="flex flex-wrap gap-1.5 pt-0.5">
        <button className={chipClass} type="button" onClick={onRandom}>
          <Shuffle size={12} /> Surprise me
        </button>
        <button className={chipClass} type="button" onClick={onTop250}>
          <Trophy size={12} /> Top 250
        </button>
        <button className={chipClass} type="button" onClick={onHighScore}>
          <Sparkles size={12} /> 8.5+
        </button>
        <button
          className={cx(chipClass, "border-[rgba(98,215,200,0.36)] text-[#b8f4ea] hover:border-[rgba(98,215,200,0.6)] hover:bg-[rgba(98,215,200,0.14)]")}
          type="button"
          onClick={onPlay}
        >
          <Play size={12} /> Play the years
        </button>
        <button
          className={cx(chipClass, "border-[rgba(246,196,83,0.4)] text-[#ffe6a6] hover:border-[rgba(246,196,83,0.66)] hover:bg-[rgba(246,196,83,0.16)]")}
          type="button"
          onClick={onRoutes}
        >
          <Route size={12} /> 主题路线
        </button>
      </div>
    </div>
  );
}
