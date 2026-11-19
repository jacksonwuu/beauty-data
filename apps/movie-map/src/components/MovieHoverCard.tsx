import { PosterFallback } from "./PosterFallback";
import { useEffect, useRef } from "react";
import { alpha2ToFlag } from "../data/countryFlags";
import type { Movie } from "../data/movies";
import { isTop250, RankBadge } from "./badges";

interface MovieHoverCardProps {
  movie: Movie | null;
  x: number;
  y: number;
}

/**
 * Cursor-following preview. The globe cards can only sample a 72x108 atlas
 * cell, which is fine at a distance and blurry up close, so hovering swaps in
 * the real poster (a ~27 KB JPEG that is cached after the first hover).
 */
export function MovieHoverCard({ movie, x, y }: MovieHoverCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Position through the DOM: moving the card must not re-render the app.
  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.style.transform = `translate3d(${x + 16}px, ${y + 16}px, 0)`;
    }
  }, [x, y, movie]);

  if (!movie) {
    return null;
  }

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[260] flex max-w-[min(340px,calc(100vw-32px))] items-center gap-2.5 rounded-xl border border-[rgba(246,240,223,0.18)] bg-[rgba(8,12,13,0.94)] p-2 shadow-[0_18px_44px_rgba(0,0,0,0.5)] will-change-transform backdrop-blur-md"
    >
      {movie.posterUrl ? (
        <img
          className="h-[62px] w-[46px] shrink-0 rounded-md object-cover"
          src={movie.posterUrl}
          alt=""
          decoding="async"
        />
      ) : (
        <PosterFallback className="h-[62px] w-[46px] shrink-0 rounded-md" title={movie.title} />
      )}
      <div className="grid min-w-0 gap-1">
        <strong className="min-w-0 truncate text-[0.86rem] leading-tight font-extrabold text-[#fff8df]">
          {movie.title}
        </strong>
        <span className="flex min-w-0 items-center gap-1.5 text-[0.68rem] font-bold text-[rgba(246,240,223,0.56)]">
          <span aria-hidden="true">{alpha2ToFlag(movie.countryCode)}</span>
          <span className="truncate">
            {movie.year} · {movie.countryName}
          </span>
          <span className="text-[#f6c453]">★{movie.rating.toFixed(1)}</span>
        </span>
        {isTop250(movie) ? <RankBadge rank={movie.ratingRank as number} className="w-fit" /> : null}
      </div>
    </div>
  );
}
