import { useEffect, useState } from "react";

export interface MovieDetail {
  summary: string;
  cast: string[];
  languages: string[];
  tags: string[];
}

// Keep in sync with SHARD_COUNT / shardIndexFor() in scripts/generate-movies.mjs.
const SHARD_COUNT = 16;
const detailCache = new Map<string, MovieDetail>();
const shardRequests = new Map<number, Promise<void>>();

export function shardIndexForMovieId(id: string) {
  let hash = 0;

  for (let index = 0; index < id.length; index += 1) {
    hash = (hash * 31 + id.charCodeAt(index)) % 100000;
  }

  return hash % SHARD_COUNT;
}

function loadShard(index: number) {
  let request = shardRequests.get(index);

  if (!request) {
    request = fetch(`${import.meta.env.BASE_URL}movie-details/shard-${index}.json`)
      .then((response) => (response.ok ? response.json() : {}))
      .then((payload: Record<string, MovieDetail>) => {
        for (const [id, detail] of Object.entries(payload)) {
          detailCache.set(id, detail);
        }
      })
      .catch(() => {
        // A missing shard only costs us the summary text.
      });

    shardRequests.set(index, request);
  }

  return request;
}

export async function loadMovieDetail(id: string) {
  if (!detailCache.has(id)) {
    await loadShard(shardIndexForMovieId(id));
  }

  return detailCache.get(id) ?? null;
}

export function prefetchMovieDetail(id: string) {
  if (!detailCache.has(id)) {
    void loadShard(shardIndexForMovieId(id));
  }
}

export function useMovieDetail(id: string | null | undefined) {
  const [detail, setDetail] = useState<MovieDetail | null>(() =>
    id ? (detailCache.get(id) ?? null) : null
  );

  useEffect(() => {
    if (!id) {
      setDetail(null);
      return;
    }

    const cached = detailCache.get(id);

    if (cached) {
      setDetail(cached);
      return;
    }

    let cancelled = false;
    setDetail(null);

    void loadMovieDetail(id).then((next) => {
      if (!cancelled) {
        setDetail(next);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [id]);

  return detail;
}
