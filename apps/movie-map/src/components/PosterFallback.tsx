interface PosterFallbackProps {
  title: string;
  year?: number;
  className?: string;
  /** `grid` centres the type (tiles); `card` fills a tall poster slot. */
  variant?: "grid" | "card";
}

/**
 * Faded typographic stand-in for a missing poster. The public build ships no
 * poster art, so every tile falls back to this instead of a broken image.
 */
export function PosterFallback({ title, year, className, variant = "grid" }: PosterFallbackProps) {
  const card = variant === "card";
  return (
    <span
      className={[
        "grid h-full w-full place-items-center overflow-hidden bg-[linear-gradient(160deg,rgba(22,30,31,1)_0%,rgba(9,13,14,1)_100%)] px-1 text-center",
        className ?? ""
      ].join(" ")}
    >
      <span className={card ? "grid max-w-[88%] gap-2.5" : "grid gap-1"}>
        <span
          className={
            card
              ? "font-serif text-[clamp(1.15rem,2.4vw,1.9rem)] leading-[1.2] font-semibold text-[rgba(255,248,223,0.9)]"
              : "font-serif text-[0.62rem] leading-[1.25] font-semibold text-[rgba(246,240,223,0.82)]"
          }
        >
          {title}
        </span>
        {year ? (
          <span
            className={
              card
                ? "text-[0.72rem] font-black tracking-[0.24em] text-[rgba(246,196,83,0.66)]"
                : "text-[0.5rem] font-black tracking-[0.1em] text-[rgba(246,196,83,0.6)]"
            }
          >
            {year}
          </span>
        ) : null}
      </span>
    </span>
  );
}
