import { X } from "lucide-react";
import { useEffect } from "react";
import type { Movie } from "../data/movies";

interface MovieDetailProps {
  movie: Movie | null;
  onClose: () => void;
  onCountryClick?: (countryCode: string) => void;
}

export function MovieDetail({ movie, onClose, onCountryClick }: MovieDetailProps) {
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
    <div className="detail-backdrop" onClick={onClose}>
      <article className="movie-detail" onClick={(event) => event.stopPropagation()}>
        <button className="icon-button detail-close" type="button" onClick={onClose} aria-label="Close details">
          <X size={18} />
        </button>
        <img src={movie.posterUrl} alt={`${movie.title} movie artwork`} className="detail-poster" />
        <div className="detail-copy">
          <button
            className="detail-kicker detail-country-button"
            type="button"
            onClick={() => onCountryClick?.(movie.countryCode)}
          >
            {movie.countryName}
          </button>
          <h2>{movie.title}</h2>
          <div className="detail-meta">
            <span>{movie.year}</span>
            <span>{movie.runtime}</span>
            <span>{movie.rating.toFixed(1)} / 10</span>
          </div>
          <p className="detail-summary">{movie.summary}</p>
          <div className="genre-row">
            {movie.genres.map((genre) => (
              <span key={genre}>{genre}</span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
