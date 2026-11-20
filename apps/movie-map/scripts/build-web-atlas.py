#!/usr/bin/env python3
"""Builds the web atlas: bigger cells, sliced into GPU-friendly tiles.

The globe used to sample 72x108 px cells, which is fine at the default zoom but
mush at the "standing + zoomed in" view. This writes the same atlas at 20x the
cell size (1440x2160) and cuts it into 2048x2048 tiles, so a card can be sampled
from three levels: the tile grid (cheap, one texture per tile), the shared
low-res page (far away) or nothing at all.

Also downloads any poster that is missing from public/posters, because the
public deployment needs the artwork itself: Douban blocks hotlinking (HTTP 418),
so the site has to serve the files.

Run: python3 scripts/build-web-atlas.py   (or pnpm --filter movie-map posters:web)
"""
from __future__ import annotations

import json
import sys
import urllib.request
from pathlib import Path

from PIL import Image

APP_ROOT = Path(__file__).resolve().parent.parent
PUBLIC_DIR = APP_ROOT / "public"
# Tiles and per-film art live in one ignored folder: the repo stays lean while a
# build of the site still ships everything it needs.
CELL_DIR = PUBLIC_DIR / "posters"
WEB_DIR = CELL_DIR
# Downloaded originals stay out of public/: the deploy only needs the tiles and
# the 480x720 webp of each film.
SOURCE_DIR = APP_ROOT / "data" / "poster-sources"
DATA_DIR = APP_ROOT / "src" / "data"

# Two tiers: every film gets its own 480x720 webp (sharp when zoomed in, and
# reused by the list panel and the detail modal), while the tiles that texture
# the far-away cards store the same art at 240x360 so a first visit pulls ~3 MB
# instead of ~19 MB.
CELL_W = 480
CELL_H = 720
TILE_CELL_W = 160
TILE_CELL_H = 240
GUTTER = 4
COLUMNS = 5
ROWS = 3
CELLS_PER_TILE = COLUMNS * ROWS
TILE_W = COLUMNS * (TILE_CELL_W + GUTTER) - GUTTER
TILE_H = ROWS * (TILE_CELL_H + GUTTER) - GUTTER
ACTIVE_YEARS = 10
# Tiles are only ever seen as small cards, so lean on the lossless-ish index.
TILE_QUALITY = 50
CELL_QUALITY = 72
BACKGROUND = (10, 13, 14)
REFERER = "https://movie.douban.com/"
UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"
)
DOWNLOAD = "--no-download" not in sys.argv

assert TILE_W <= 2048 and TILE_H <= 2048, "tile would exceed common GPU limits"


def load_movies() -> list[dict]:
    source = (DATA_DIR / "movies.ts").read_text(encoding="utf-8")
    start = source.index("const rawMovies = [") + len("const rawMovies = ")
    end = source.index("\n];", start) + len("\n]")
    return json.loads(source[start:end])


def load_manifest() -> dict[str, str]:
    return json.loads((DATA_DIR / "posterManifest.json").read_text(encoding="utf-8"))


def poster_path(movie: dict) -> Path | None:
    for suffix in (".jpg", ".png", ".jpeg", ".webp"):
        candidate = SOURCE_DIR / f"movie-{movie['sourceId']}{suffix}"
        if candidate.exists() and candidate.stat().st_size > 0:
            return candidate
    return None


def download_poster(movie: dict) -> bool:
    cover = (movie.get("coverUrl") or "").strip()
    if not cover:
        return False
    request = urllib.request.Request(cover, headers={"Referer": REFERER, "User-Agent": UA})
    try:
        with urllib.request.urlopen(request, timeout=25) as response:
            payload = response.read()
    except Exception as error:  # noqa: BLE001 - a dead image URL must not stop the build
        print(f"  ! {movie['title']}: {error}")
        return False
    if len(payload) < 2048:
        return False
    SOURCE_DIR.mkdir(parents=True, exist_ok=True)
    target = SOURCE_DIR / f"movie-{movie['sourceId']}.jpg"
    target.write_bytes(payload)
    return True


def film_cell(movie: dict) -> Image.Image:
    """Fallback art for the ~160 films Douban has no artwork for.

    Reads as a designed film card rather than a broken image: a dusk gradient,
    the title set small, a thin gold rule and the year.
    """
    from PIL import ImageDraw, ImageFont

    cell = Image.new("RGB", (CELL_W, CELL_H), (12, 17, 19))
    draw = ImageDraw.Draw(cell)

    # Vertical dusk gradient, darkest at the bottom.
    top, bottom = (26, 42, 46), (9, 12, 14)
    for y in range(CELL_H):
        ratio = y / (CELL_H - 1)
        draw.line(
            [(0, y), (CELL_W, y)],
            fill=(
                round(top[0] + (bottom[0] - top[0]) * ratio),
                round(top[1] + (bottom[1] - top[1]) * ratio),
                round(top[2] + (bottom[2] - top[2]) * ratio),
            ),
        )

    def font(size: int):
        try:
            return ImageFont.truetype("/System/Library/Fonts/Supplemental/Songti.ttc", size)
        except OSError:
            return ImageFont.load_default()

    title_font = font(76)
    meta_font = font(56)
    label_font = font(34)

    draw.text((CELL_W // 12, CELL_H // 9), "NO COVER ART", font=label_font, fill=(246, 196, 83, 120))
    draw.line(
        [(CELL_W // 12, CELL_H // 9 + 64), (CELL_W // 12 + 160, CELL_H // 9 + 64)],
        fill=(246, 196, 83),
        width=4,
    )

    title = str(movie.get("title") or "")
    lines: list[str] = []
    while title and len(lines) < 5:
        lines.append(title[:4])
        title = title[4:]
    block = len(lines) * 96
    for index, line in enumerate(lines):
        width = draw.textlength(line, font=title_font)
        draw.text(
            ((CELL_W - width) / 2, CELL_H // 2 - block // 2 + index * 96),
            line,
            font=title_font,
            fill=(246, 240, 223),
        )

    meta = " · ".join(part for part in (str(movie.get("year") or ""), f"★{movie.get('rating') or ''}".rstrip("★")) if part)
    draw.text((CELL_W // 12, CELL_H - CELL_H // 7), meta, font=meta_font, fill=(178, 196, 190))
    draw.rectangle([0, 0, CELL_W - 1, CELL_H - 1], outline=(46, 58, 60), width=3)
    return cell


def crop_to_cell(image: Image.Image) -> Image.Image:
    image = image.convert("RGB")
    scale = max(CELL_W / image.width, CELL_H / image.height)
    resized = image.resize((round(image.width * scale), round(image.height * scale)), Image.LANCZOS)
    left = (resized.width - CELL_W) // 2
    top = (resized.height - CELL_H) // 2
    return resized.crop((left, top, left + CELL_W, top + CELL_H))


def main() -> int:
    movies = load_movies()
    manifest = load_manifest()
    latest_year = max(movie["year"] for movie in movies)

    # Everything the default view shows goes into the first tiles so the globe
    # can paint after two or three downloads.
    ordered = sorted(
        movies,
        key=lambda movie: (
            0 if movie["year"] > latest_year - ACTIVE_YEARS else 1,
            -(movie.get("rating") or 0),
            -movie["year"],
            movie["id"],
        ),
    )

    downloaded = 0
    if DOWNLOAD:
        for movie in ordered:
            if poster_path(movie) is None and download_poster(movie):
                downloaded += 1
        print(f"downloaded {downloaded} missing poster(s)")

    WEB_DIR.mkdir(parents=True, exist_ok=True)
    tiles: list[dict] = []
    cells: list[dict] = []
    missing = 0
    tile_count = (len(ordered) + CELLS_PER_TILE - 1) // CELLS_PER_TILE

    for tile_index in range(tile_count):
        chunk = ordered[tile_index * CELLS_PER_TILE : (tile_index + 1) * CELLS_PER_TILE]
        tile = Image.new("RGB", (TILE_W, TILE_H), BACKGROUND)
        src = f"posters/tile-{tile_index}.webp"
        tile_cells: list[dict] = []

        for index, movie in enumerate(chunk):
            column = index % COLUMNS
            row = index // COLUMNS
            x = column * (TILE_CELL_W + GUTTER)
            y = row * (TILE_CELL_H + GUTTER)
            source = poster_path(movie)

            if source is None:
                cell = film_cell(movie)
                cell.save(CELL_DIR / f"{movie['id']}.webp", "WEBP", quality=CELL_QUALITY, method=4)
                missing += 1
            else:
                with Image.open(source) as image:
                    cell = crop_to_cell(image)
                # One copy per film, shared by the list panel, the detail modal
                # and the zoomed-in globe, so every view uses the same art.
                cell.save(CELL_DIR / f"{movie['id']}.webp", "WEBP", quality=CELL_QUALITY, method=4)

            tile.paste(cell.resize((TILE_CELL_W, TILE_CELL_H), Image.LANCZOS), (x, y))
            tile_cells.append({"id": movie["id"], "x": x, "y": y})
            cells.append({"id": movie["id"], "src": src, "x": x, "y": y})

        # Tiles are seen small (~40 px cards); the zoomed-in view uses the per-film
        # webp instead, so this can stay cheap.
        tile.save(
            WEB_DIR / f"tile-{tile_index}.webp",
            "WEBP",
            quality=TILE_QUALITY,
            method=6,
            # No alpha anywhere; skipping it keeps the tiles ~35% smaller.
            exact=False,
        )
        tiles.append({"src": src, "cells": tile_cells})
        print(f"tile {tile_index + 1}/{tile_count}: {len(chunk)} cells")

    keep_tiles = {f"tile-{index}.webp" for index in range(tile_count)}
    for entry in WEB_DIR.iterdir():
        if entry.name not in keep_tiles and not entry.name.startswith("movie-"):
            entry.unlink()

    payload = {
        "cell": {"w": TILE_CELL_W, "h": TILE_CELL_H},
        "tile": {"w": TILE_W, "h": TILE_H},
        "tiles": tiles,
        "cells": cells,
    }
    text = json.dumps(payload, ensure_ascii=False, separators=(",", ":")) + "\n"
    (DATA_DIR / "posterAtlasWeb.json").write_text(text, encoding="utf-8")

    total = sum(entry.stat().st_size for entry in WEB_DIR.iterdir())
    cell_bytes = sum(
        (CELL_DIR / f"{movie['id']}.webp").stat().st_size
        for movie in ordered
        if (CELL_DIR / f"{movie['id']}.webp").exists()
    )
    print(
        f"\n{tile_count} tile(s) {TILE_W}x{TILE_H}px, {len(ordered)} cells {CELL_W}x{CELL_H}, "
        f"{missing} fallback cards, {total / 1024 / 1024:.2f} MB "
        f"(tiles {(total - cell_bytes) / 1024 / 1024:.2f} MB, per-film {cell_bytes / 1024 / 1024:.2f} MB)"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
