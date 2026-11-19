import { Calendar, Clock3, ExternalLink, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Movie } from "../data/movies";
import { useMovieDetail } from "../data/movieDetails";
import { isTop250, RankBadge } from "./badges";
import { PosterFallback } from "./PosterFallback";

interface MovieDetailProps {
  movie: Movie | null;
  onClose: () => void;
  onCountryClick?: (countryCode: string) => void;
  onGenreClick?: (genre: string) => void;
}

const iconButtonClass =
  "grid h-9 w-9 cursor-pointer place-items-center rounded-lg border border-[rgba(246,240,223,0.14)] bg-[rgba(246,240,223,0.08)] text-[#fff8df] backdrop-blur-md transition hover:bg-[rgba(246,240,223,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6c453]";

function countryCodeEmoji(countryCode: string) {
  if (!/^[A-Z]{2}$/.test(countryCode)) {
    return "🌐";
  }

  return String.fromCodePoint(
    ...countryCode.split("").map((letter) => 127397 + letter.charCodeAt(0))
  );
}

function formatVotes(votes: number) {
  return new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(
    votes
  );
}

export function MovieDetail({ movie, onClose, onCountryClick, onGenreClick }: MovieDetailProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const detail = useMovieDetail(movie?.id);

  useEffect(() => {
    if (!movie) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Move focus into the dialog so keyboard users land on the close button.
    closeButtonRef.current?.focus();

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [movie, onClose]);

  if (!movie) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 z-[300] grid place-items-center bg-[rgba(5,7,9,0.62)] p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <article
        className="relative grid max-h-[min(720px,calc(100vh-48px))] w-[min(800px,100%)] grid-cols-[minmax(168px,248px)_minmax(0,1fr)] gap-5 overflow-hidden rounded-2xl border border-[rgba(246,240,223,0.16)] bg-[rgba(12,16,17,0.94)] p-4 shadow-[0_32px_100px_rgba(0,0,0,0.62)] backdrop-blur-xl max-[640px]:max-h-[calc(100vh-48px)] max-[640px]:grid-cols-[minmax(0,1fr)] max-[640px]:overflow-auto"
        role="dialog"
        aria-modal="true"
        aria-label={`${movie.title} details`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          className={`${iconButtonClass} absolute top-3 right-3 z-10`}
          type="button"
          onClick={onClose}
          aria-label="Close details"
        >
          <X size={18} />
        </button>
        <div className="min-w-0 self-start rounded-lg bg-[rgba(246,240,223,0.06)] p-2 shadow-[inset_0_0_0_1px_rgba(246,240,223,0.08)]">
          {movie.posterUrl ? (
            <img
              src={movie.posterUrl}
              alt={`${movie.title} movie artwork`}
              className="aspect-[320/460] w-full min-w-0 rounded-md object-cover shadow-[0_18px_40px_rgba(0,0,0,0.42)] max-[640px]:max-h-[44vh] max-[640px]:object-contain"
            />
          ) : (
            <PosterFallback
              className="aspect-[320/460] w-full min-w-0 rounded-md shadow-[0_18px_40px_rgba(0,0,0,0.42)]"
              title={movie.title}
              year={movie.year}
              variant="card"
            />
          )}
        </div>
        <div className="grid min-h-0 min-w-0 content-start overflow-x-hidden overflow-y-auto pt-2 pr-11 pb-1 max-[640px]:overflow-visible max-[640px]:p-0">
          <button
            className="mb-3 inline-flex w-fit cursor-pointer items-center gap-2 rounded-lg border border-[rgba(98,215,200,0.24)] bg-[rgba(98,215,200,0.1)] px-2.5 py-2 text-left text-[0.82rem] font-extrabold text-[#d6fbf5] transition hover:border-[rgba(246,196,83,0.48)] hover:bg-[rgba(246,196,83,0.12)] hover:text-[#fff8df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6c453]"
            type="button"
            onClick={() => onCountryClick?.(movie.countryCode)}
          >
            <span className="text-base leading-none" aria-hidden="true">
              {countryCodeEmoji(movie.countryCode)}
            </span>
            <span>{movie.countryName}</span>
          </button>
          <h2 className="m-0 mb-3 font-serif text-[clamp(1.55rem,3.1vw,2.65rem)] leading-[1.04] tracking-normal break-normal [overflow-wrap:anywhere] text-[#fff8df] max-[640px]:text-[clamp(1.42rem,8vw,2.2rem)]">
            {movie.title}
          </h2>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {isTop250(movie) ? <RankBadge rank={movie.ratingRank as number} /> : null}
            {movie.imdbId ? (
              <a
                className="inline-flex items-center gap-1 rounded-full border border-[rgba(246,240,223,0.16)] bg-[rgba(246,240,223,0.05)] px-2.5 py-[4px] text-[0.66rem] font-extrabold text-[rgba(246,240,223,0.7)] transition hover:border-[rgba(246,196,83,0.5)] hover:text-[#fff8df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6c453]"
                href={`https://www.imdb.com/title/${movie.imdbId}/`}
                target="_blank"
                rel="noreferrer"
              >
                IMDb <ExternalLink size={11} />
              </a>
            ) : null}
            <span className="text-[0.66rem] font-bold text-[rgba(246,240,223,0.4)]">
              {movie.originalGenres.slice(0, 3).join(" · ")}
            </span>
          </div>
          <div className="mb-4 grid grid-cols-3 gap-2 max-[420px]:grid-cols-1">
            <div className="rounded-lg border border-[rgba(246,240,223,0.12)] bg-[rgba(246,240,223,0.06)] px-3 py-2">
              <div className="mb-1 flex items-center gap-1.5 text-[0.68rem] font-extrabold text-[rgba(246,240,223,0.48)]">
                <Calendar size={13} />
                Year
              </div>
              <strong className="text-[0.92rem] text-[#fff8df]">{movie.year}</strong>
            </div>
            <div className="rounded-lg border border-[rgba(246,240,223,0.12)] bg-[rgba(246,240,223,0.06)] px-3 py-2">
              <div className="mb-1 flex items-center gap-1.5 text-[0.68rem] font-extrabold text-[rgba(246,240,223,0.48)]">
                <Clock3 size={13} />
                Runtime
              </div>
              <strong className="text-[0.92rem] text-[#fff8df]">{movie.runtime || "N/A"}</strong>
            </div>
            <div className="rounded-lg border border-[rgba(246,196,83,0.2)] bg-[rgba(246,196,83,0.1)] px-3 py-2">
              <div className="mb-1 text-[0.68rem] font-extrabold text-[rgba(246,240,223,0.52)]">
                Rating
              </div>
              <strong className="text-[0.92rem] text-[#fff8df]">
                {movie.rating.toFixed(1)}
                <span className="text-[0.72rem] text-[rgba(246,240,223,0.48)]"> / 10</span>
              </strong>
            </div>
          </div>
          <p className="m-0 mb-4 max-w-[58ch] text-[0.98rem] leading-[1.62] text-[rgba(246,240,223,0.82)]">
            {detail ? (
              detail.summary || "No summary available."
            ) : (
              <span className="grid gap-2" aria-hidden="true">
                <span className="h-3 w-[92%] animate-pulse rounded-full bg-[rgba(246,240,223,0.12)]" />
                <span className="h-3 w-[86%] animate-pulse rounded-full bg-[rgba(246,240,223,0.1)]" />
                <span className="h-3 w-[64%] animate-pulse rounded-full bg-[rgba(246,240,223,0.08)]" />
              </span>
            )}
          </p>
          {detail?.cast.length ? (
            <div className="mb-3 text-[0.82rem] leading-[1.5] text-[rgba(246,240,223,0.72)]">
              <span className="mr-2 text-[0.62rem] font-extrabold tracking-[0.18em] text-[rgba(246,240,223,0.38)] uppercase">
                Cast
              </span>
              {detail.cast.join(" · ")}
            </div>
          ) : null}
          {movie.director ? (
            <div className="mb-4 text-[0.82rem] leading-[1.5] text-[rgba(246,240,223,0.72)]">
              <span className="mr-2 text-[0.62rem] font-extrabold tracking-[0.18em] text-[rgba(246,240,223,0.38)] uppercase">
                Director
              </span>
              {movie.director}
            </div>
          ) : null}
          <div className="mb-4 flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <button
                key={genre}
                className="cursor-pointer rounded-lg border border-[rgba(246,240,223,0.14)] bg-[rgba(246,240,223,0.07)] px-2.5 py-2 text-[0.78rem] font-extrabold text-[rgba(246,240,223,0.86)] transition hover:border-[rgba(246,196,83,0.5)] hover:bg-[rgba(246,196,83,0.1)] hover:text-[#fff8df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6c453]"
                type="button"
                onClick={() => onGenreClick?.(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
          {detail?.languages.length || detail?.tags.length ? (
            <div className="mb-4 flex flex-wrap gap-1.5">
              {detail?.languages.map((language) => (
                <span
                  key={language}
                  className="rounded-full border border-[rgba(98,215,200,0.22)] bg-[rgba(98,215,200,0.08)] px-2 py-[3px] text-[0.62rem] font-bold text-[rgba(214,251,245,0.78)]"
                >
                  {language}
                </span>
              ))}
              {detail?.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[rgba(246,240,223,0.12)] px-2 py-[3px] text-[0.62rem] font-bold text-[rgba(246,240,223,0.5)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
          <div className="text-[0.72rem] font-bold text-[rgba(246,240,223,0.46)]">
            {formatVotes(movie.votes)} votes
            {movie.releaseDate ? ` · Released ${movie.releaseDate}` : ""}
          </div>
        </div>
      </article>
    </div>
  );
}
