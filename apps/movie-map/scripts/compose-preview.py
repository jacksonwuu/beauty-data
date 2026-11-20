#!/usr/bin/env python3
"""Compose the social preview card (og:image) from a live screenshot.

The hero shot is captured with Chrome DevTools (`/tmp` scratch, not committed):

    Emulation.setDeviceMetricsOverride 1000x1000, deviceScaleFactor 2
    https://<site>/?country=JP

then this script puts the globe on the right and the title lockup on the left,
so a link on X / Slack shows something better than a raw screenshot.

Usage: python3 scripts/compose-preview.py <hero.png> [out.png]
"""

from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_OUT = ROOT / "public" / "preview.png"

W, H = 2400, 1260  # 1200x630 at 2x, the summary_large_image size
BG_TOP = (9, 14, 15)
BG_BOTTOM = (4, 6, 7)
INK = (246, 240, 223)
GOLD = (246, 196, 83)
MUTED = (154, 172, 167)
TEAL = (98, 215, 200)

SONGTI = "/System/Library/Fonts/Supplemental/Songti.ttc"
SANS = "/System/Library/Fonts/Hiragino Sans GB.ttc"


def font(path: str, size: int, index: int = 0) -> ImageFont.FreeTypeFont:
    try:
        return ImageFont.truetype(path, size, index=index)
    except OSError:
        return ImageFont.load_default()


def background() -> Image.Image:
    canvas = Image.new("RGB", (W, H), BG_BOTTOM)
    draw = ImageDraw.Draw(canvas)
    for y in range(H):
        ratio = y / (H - 1)
        draw.line(
            [(0, y), (W, y)],
            fill=(
                round(BG_TOP[0] + (BG_BOTTOM[0] - BG_TOP[0]) * ratio),
                round(BG_TOP[1] + (BG_BOTTOM[1] - BG_TOP[1]) * ratio),
                round(BG_TOP[2] + (BG_BOTTOM[2] - BG_TOP[2]) * ratio),
            ),
        )

    # Faint glow so the globe does not sit on a flat rectangle.
    glow = Image.new("L", (W, H), 0)
    ImageDraw.Draw(glow).ellipse(
        [(W * 0.46, H * 0.02), (W * 1.16, H * 1.05)], fill=70
    )
    glow = glow.filter(ImageFilter.GaussianBlur(180))
    canvas.paste(Image.new("RGB", (W, H), (14, 34, 33)), (0, 0), glow)
    return canvas


def globe(hero: Image.Image, size: int) -> Image.Image:
    """Crop the planet out of the screenshot and feather its rim."""
    side = int(min(hero.size) * 0.94)
    left = (hero.width - side) // 2
    top = (hero.height - side) // 2
    crop = hero.crop((left, top, left + side, top + side)).convert("RGB").resize((size, size), Image.LANCZOS)

    mask = Image.new("L", (size, size), 0)
    draw = ImageDraw.Draw(mask)
    inset = int(size * 0.012)
    draw.ellipse([inset, inset, size - inset, size - inset], fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(size * 0.035))

    # The WebGL frame is a little dim once it sits next to pure black; lift it
    # so the posters still read at 600 px wide on a phone timeline.
    crop = ImageEnhance.Brightness(crop).enhance(1.1)
    crop = ImageEnhance.Color(crop).enhance(1.12)
    crop = ImageEnhance.Contrast(crop).enhance(1.04)
    crop.putalpha(mask)
    return crop


def rounded(draw: ImageDraw.ImageDraw, box, radius: int, **kwargs) -> None:
    draw.rounded_rectangle(box, radius=radius, **kwargs)


def main() -> None:
    hero_path = Path(sys.argv[1])
    out_path = Path(sys.argv[2]) if len(sys.argv) > 2 else DEFAULT_OUT

    hero = Image.open(hero_path)
    canvas = background()

    globe_size = 1320
    planet = globe(hero, globe_size)
    canvas.paste(planet, (W - globe_size - 60, (H - globe_size) // 2), planet)

    draw = ImageDraw.Draw(canvas)

    # Left lockup ------------------------------------------------------------
    x = 150
    eyebrow_font = font(SANS, 34)
    title_font = font(SONGTI, 104, index=0)
    sub_font = font(SANS, 40)
    chip_font = font(SANS, 30)

    draw.text((x, 300), "MOVIE  MAP", font=eyebrow_font, fill=GOLD)
    draw.line([(x, 356), (x + 92, 356)], fill=GOLD, width=4)

    draw.text((x, 402), "一百年的电影", font=title_font, fill=INK)
    draw.text((x, 528), "钉在它出生的国家上", font=title_font, fill=INK)

    draw.text((x, 720), "1,921 部片  ·  70 个国家  ·  1926—2019", font=sub_font, fill=MUTED)

    chip_text = "jacksonwuu.github.io/beauty-data"
    text_w = draw.textlength(chip_text, font=chip_font)
    chip = (x, 800, x + text_w + 64, 872)
    rounded(draw, chip, radius=36, fill=(16, 26, 26), outline=(58, 74, 72), width=2)
    draw.text((x + 32, 818), chip_text, font=chip_font, fill=TEAL)

    # A quiet footer note keeps the card from feeling like a bare screenshot.
    draw.text((x, 990), "React 19 · three.js · 开源 MIT", font=font(SANS, 28), fill=(110, 128, 124))

    canvas.save(out_path, "PNG", optimize=True)
    print(f"wrote {out_path} ({canvas.size[0]}x{canvas.size[1]})")


if __name__ == "__main__":
    main()
