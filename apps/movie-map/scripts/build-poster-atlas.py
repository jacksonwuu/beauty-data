#!/usr/bin/env python3
"""Builds the globe poster atlas: one texture page for every poster.

Before: the globe created one THREE.Texture per movie (1200 textures, ~295 MB
of decoded GPU memory at source size) and issued 1200 image requests at startup.

After: every poster is cropped to a 72x108 cell and packed into pages. At the
sizes a card actually renders (<= ~70 px tall) the difference is invisible, and
the globe binds 1 texture instead of 1200.

Detail/panel views keep using the original files in public/posters.

Posters that only have the generated "LOCAL PLACEHOLDER" SVG get a plain dark
cell: at cell size the text in those SVGs would be unreadable noise.

Run: python3 scripts/build-poster-atlas.py  (or pnpm --filter movie-map posters:atlas)
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

APP_ROOT = Path(__file__).resolve().parent.parent
PUBLIC_DIR = APP_ROOT / "public"
ATLAS_DIR = PUBLIC_DIR / "posters-atlas"
DATA_DIR = APP_ROOT / "src" / "data"

CELL_W = 72
CELL_H = 108
GUTTER = 2
COLUMNS = 40
CELLS_PER_PAGE = 1200
ACTIVE_YEARS = 10
WEBP_QUALITY = 80
AVIF_QUALITY = 55
# AVIF is ~45% smaller but not universally supported; opt in with --avif.
WRITE_AVIF = "--avif" in sys.argv
BACKGROUND = (10, 13, 14)


def load_movies() -> list[dict]:
    """Reads the raw literal out of movies.ts (it is a plain JSON array)."""
    source = (DATA_DIR / "movies.ts").read_text(encoding="utf-8")
    start = source.index("const rawMovies = [") + len("const rawMovies = ")
    end = source.index("\n];", start) + len("\n]")
    return json.loads(source[start:end])


def load_manifest() -> dict[str, str]:
    return json.loads((DATA_DIR / "posterManifest.json").read_text(encoding="utf-8"))


def placeholder_cell() -> Image.Image:
    cell = Image.new("RGB", (CELL_W, CELL_H), BACKGROUND)
    draw = ImageDraw.Draw(cell)
    draw.rectangle(
        [2, 2, CELL_W - 3, CELL_H - 3],
        outline=(70, 60, 34),
        width=1,
    )
    return cell


def film_cell(movie: dict) -> Image.Image:
    cell = Image.new("RGB", (CELL_W, CELL_H), (17, 23, 25))
    draw = ImageDraw.Draw(cell)
    title = str(movie.get("title") or "")
    font = ImageFont.load_default()
    lines = []
    while title and len(lines) < 4:
        lines.append(title[:7])
        title = title[7:]
    top = CELL_H // 2 - len(lines) * 6
    for index, line in enumerate(lines):
        draw.text((6, top + index * 11), line, font=font, fill=(246, 240, 223))
    draw.text((6, CELL_H - 16), str(movie.get("year") or ""), font=font, fill=(246, 196, 83))
    draw.rectangle([0, 0, CELL_W - 1, CELL_H - 1], outline=(70, 60, 34), width=1)
    return cell


def crop_to_cell(image: Image.Image) -> Image.Image:
    image = image.convert("RGB")
    scale = max(CELL_W / image.width, CELL_H / image.height)
    resized = image.resize(
        (max(CELL_W, round(image.width * scale)), max(CELL_H, round(image.height * scale))),
        Image.LANCZOS,
    )
    left = (resized.width - CELL_W) // 2
    top = (resized.height - CELL_H) // 2
    return resized.crop((left, top, left + CELL_W, top + CELL_H))


def main() -> int:
    movies = load_movies()
    manifest = load_manifest()
    latest_year = max(movie["year"] for movie in movies)

    # Recent, well rated films first so the opening view needs only the top rows.
    ordered = sorted(
        movies,
        key=lambda movie: (
            0 if movie["year"] > latest_year - ACTIVE_YEARS else 1,
            -(movie.get("rating") or 0),
            -movie["year"],
            movie["id"],
        ),
    )

    ATLAS_DIR.mkdir(parents=True, exist_ok=True)
    page_rows = CELLS_PER_PAGE // COLUMNS
    page_w = COLUMNS * (CELL_W + GUTTER) - GUTTER
    page_h = page_rows * (CELL_H + GUTTER) - GUTTER

    pages: list[dict] = []
    missing = 0
    page_count = (len(ordered) + CELLS_PER_PAGE - 1) // CELLS_PER_PAGE

    for page_index in range(page_count):
        chunk = ordered[page_index * CELLS_PER_PAGE : (page_index + 1) * CELLS_PER_PAGE]
        page = Image.new("RGB", (page_w, page_h), BACKGROUND)
        cells: list[dict] = []

        for index, movie in enumerate(chunk):
            column = index % COLUMNS
            row = index // COLUMNS
            x = column * (CELL_W + GUTTER)
            y = row * (CELL_H + GUTTER)

            relative = manifest.get(movie["id"])
            source = PUBLIC_DIR / relative.lstrip("/") if relative else None

            if source is None or not source.exists() or source.suffix.lower() == ".svg":
                # The public build ships no artwork; a neutral card keeps the
                # globe readable without redistributing posters.
                cell = film_cell(movie)
                missing += 1
            else:
                with Image.open(source) as image:
                    cell = crop_to_cell(image)

            page.paste(cell, (x, y))
            cells.append({"id": movie["id"], "x": x, "y": y})

        base = ATLAS_DIR / f"page-{page_index}"
        page.save(f"{base}.webp", "WEBP", quality=WEBP_QUALITY, method=6)

        if WRITE_AVIF:
            page.save(f"{base}.avif", "AVIF", quality=AVIF_QUALITY)

        # The extension matters: an extensionless URL is answered by the dev
        # server's HTML fallback and the texture never loads.
        pages.append({"src": f"/posters-atlas/page-{page_index}.webp", "cells": cells})
        print(f"page {page_index + 1}/{page_count}: {len(chunk)} cells")

    extensions = ("webp", "avif") if WRITE_AVIF else ("webp",)
    keep = {f"page-{index}.{ext}" for index in range(page_count) for ext in extensions}
    for entry in ATLAS_DIR.iterdir():
        if entry.name not in keep:
            entry.unlink()

    (DATA_DIR / "posterAtlas.json").write_text(
        json.dumps(
            {
                "cell": {"w": CELL_W, "h": CELL_H},
                "page": {"w": page_w, "h": page_h},
                "pages": pages,
            },
            ensure_ascii=False,
            separators=(",", ":"),
        )
        + "\n",
        encoding="utf-8",
    )

    total = sum(entry.stat().st_size for entry in ATLAS_DIR.iterdir())
    print(
        f"\n{len(pages)} page(s) {page_w}x{page_h}px, {len(ordered)} posters, "
        f"{missing} placeholder, {total / 1024 / 1024:.1f} MB on disk"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
