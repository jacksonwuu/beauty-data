import { useEffect, useRef } from "react";

/**
 * Deep links.
 *
 * Every meaningful view of the atlas is addressable: a year window, a country,
 * a genre, the card layout and the open film. A URL is therefore shareable and
 * the browser back/forward buttons behave the way people expect.
 */
export interface UrlState {
  from: number | null;
  to: number | null;
  country: string | null;
  movie: string | null;
  genre: string | null;
  layout: string | null;
  placement: string | null;
  scale: number | null;
  panel: string | null;
  preset: string | null;
  route: string | null;
  stop: number | null;
}

function parseNumber(value: string | null) {
  if (!value) {
    return null;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

export function readUrlState(): UrlState {
  const params = new URLSearchParams(window.location.search);

  return {
    from: parseNumber(params.get("from")),
    to: parseNumber(params.get("to")),
    country: params.get("country"),
    movie: params.get("movie"),
    genre: params.get("genre"),
    layout: params.get("layout"),
    placement: params.get("placement"),
    scale: parseNumber(params.get("scale")),
    panel: params.get("panel"),
    preset: params.get("preset"),
    route: params.get("route"),
    stop: parseNumber(params.get("stop"))
  };
}

/** Mirrors the current view into the address bar, without adding history entries. */
export function useUrlStateSync(values: Record<string, string | number | null | undefined>) {
  const next = new URLSearchParams();

  Object.entries(values).forEach(([key, value]) => {
    if (value === null || value === undefined || value === "") {
      return;
    }

    next.set(key, String(value));
  });

  const search = next.toString();
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (timer.current) {
      window.clearTimeout(timer.current);
    }

    // Dragging the timeline produces a value per frame; write once it settles.
    timer.current = window.setTimeout(() => {
      const url = `${window.location.pathname}${search ? `?${search}` : ""}`;

      if (url !== `${window.location.pathname}${window.location.search}`) {
        window.history.replaceState(null, "", url);
      }
    }, 240);

    return () => {
      if (timer.current) {
        window.clearTimeout(timer.current);
      }
    };
  }, [search]);
}
