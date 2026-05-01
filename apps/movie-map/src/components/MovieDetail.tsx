import { X } from "lucide-react";
import { useEffect } from "react";
import type { Movie } from "../data/movies";

interface MovieDetailProps {
  movie: Movie | null;
  onClose: () => void;
  onCountryClick?: (countryCode: string) => void;
  onGenreClick?: (genre: string) => void;
}

const iconButtonClass =
  "grid h-[34px] w-[34px] cursor-pointer place-items-center border border-[rgba(246,240,223,0.25)] bg-[#080c0d] text-[#fff8df]";
const detailKickerClass =
  "m-0 mb-[7px] text-left text-[0.76rem] font-extrabold tracking-[0.14em] text-[#62d7c8] uppercase";

export function MovieDetail({ movie, onClose, onCountryClick, onGenreClick }: MovieDetailProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!movie) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 z-[300] grid place-items-center bg-[rgba(5,7,9,0.5)] p-6"
      onClick={onClose}
    >
      <article
        className="relative grid max-h-[min(680px,calc(100vh-48px))] w-[min(720px,100%)] grid-cols-[minmax(160px,240px)_minmax(0,420px)] gap-[22px] border border-[rgba(246,240,223,0.22)] bg-[#0a0d0e] p-[18px] shadow-[0_28px_90px_rgba(0,0,0,0.58)] max-[560px]:max-h-[calc(100vh-48px)] max-[560px]:grid-cols-[minmax(0,1fr)] max-[560px]:overflow-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className={`${iconButtonClass} absolute top-3 right-3`}
          type="button"
          onClick={onClose}
          aria-label="Close details"
        >
          <X size={18} />
        </button>
        <img
          src={movie.posterUrl}
          alt={`${movie.title} movie artwork`}
          className="aspect-[320/460] w-full min-w-0 object-cover shadow-[0_18px_40px_rgba(0,0,0,0.42)] max-[560px]:max-h-[44vh] max-[560px]:object-contain"
        />
        <div className="grid min-h-0 min-w-0 content-start overflow-x-hidden overflow-y-auto pt-4 pr-[34px] pb-2 pl-0 max-[560px]:overflow-visible max-[560px]:p-0">
          <button
            className={`${detailKickerClass} inline-block cursor-pointer border border-[rgba(98,215,200,0.3)] bg-[#0d1718] px-[7px] py-[5px] hover:border-[rgba(246,196,83,0.7)] hover:bg-[#151615] hover:text-[#f6c453]`}
            type="button"
            onClick={() => onCountryClick?.(movie.countryCode)}
          >
            {movie.countryName}
          </button>
          <h2 className="m-0 mb-3 font-serif text-[clamp(1.45rem,3vw,2.55rem)] leading-[1.06] tracking-normal break-normal [overflow-wrap:anywhere] text-[#fff8df] max-[560px]:text-[clamp(1.35rem,8vw,2.15rem)]">
            {movie.title}
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="border border-[rgba(246,240,223,0.16)] bg-[#111719] px-2 py-1.5 text-[0.78rem] font-extrabold text-[rgba(246,240,223,0.86)]">
              {movie.year}
            </span>
            <span className="border border-[rgba(246,240,223,0.16)] bg-[#111719] px-2 py-1.5 text-[0.78rem] font-extrabold text-[rgba(246,240,223,0.86)]">
              {movie.runtime}
            </span>
            <span className="border border-[rgba(246,240,223,0.16)] bg-[#111719] px-2 py-1.5 text-[0.78rem] font-extrabold text-[rgba(246,240,223,0.86)]">
              {movie.rating.toFixed(1)} / 10
            </span>
          </div>
          <p className="my-[18px] text-base leading-[1.6] text-[rgba(246,240,223,0.82)]">
            {movie.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <button
                key={genre}
                className="cursor-pointer border border-[rgba(246,240,223,0.16)] bg-[#111719] px-2 py-1.5 text-[0.78rem] font-extrabold text-[rgba(246,240,223,0.86)] hover:border-[rgba(246,196,83,0.72)] hover:bg-[#151615] hover:text-[#f6c453]"
                type="button"
                onClick={() => onGenreClick?.(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
