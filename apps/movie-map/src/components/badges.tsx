import { cx } from "../ui";
import type { Movie } from "../data/movies";

/**
 * `ratingRank` is the rank inside the 1200-film collection's own rating board;
 * ranks 1-250 are the "Top 250" slice of the dataset, so that is the badge
 * worth surfacing. `doubanTop250Rank` exists in the source data but is null for
 * every film but one, so it is deliberately unused.
 */
export function isTop250(movie: Movie) {
  return Boolean(movie.ratingRank && movie.ratingRank <= 250);
}

export function RankBadge({ rank, className }: { rank: number; className?: string }) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1 rounded-full border border-[rgba(246,196,83,0.34)] bg-[rgba(246,196,83,0.14)] px-2 py-[3px] text-[0.62rem] leading-none font-black tracking-[0.06em] whitespace-nowrap text-[#ffe0a0]",
        className
      )}
      title={`Ranked #${rank} of the 250 highest rated films here`}
    >
      TOP 250
      <span className="text-[#f6c453]">#{rank}</span>
    </span>
  );
}

export function RatingBadge({ rating, className }: { rating: number; className?: string }) {
  return (
    <span
      className={cx(
        "inline-flex items-baseline gap-[3px] rounded-full border border-[rgba(246,240,223,0.2)] bg-[rgba(8,12,13,0.72)] px-2 py-[3px] text-[0.66rem] leading-none font-black text-[#fff8df] backdrop-blur-sm",
        className
      )}
    >
      <span className="text-[#f6c453]">★</span>
      {rating.toFixed(1)}
    </span>
  );
}

/** Corner ribbon used on small poster tiles. */
export function TopRibbon({ rank }: { rank: number }) {
  return (
    <span className="absolute top-1.5 left-1.5 rounded-full border border-[rgba(246,196,83,0.42)] bg-[rgba(8,12,13,0.82)] px-1.5 py-[3px] text-[0.56rem] leading-none font-black tracking-[0.04em] text-[#ffdf9b] backdrop-blur-sm">
      #{rank}
    </span>
  );
}
