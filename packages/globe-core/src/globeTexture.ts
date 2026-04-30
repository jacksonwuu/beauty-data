import * as THREE from "three";
import type { CountryFeature } from "./types";

const TEXTURE_WIDTH = 4096;
const TEXTURE_HEIGHT = 2048;

function pointToTexture([lon, lat]: [number, number], offsetX = 0) {
  return {
    x: ((lon + 180) / 360) * TEXTURE_WIDTH + offsetX,
    y: THREE.MathUtils.clamp(((90 - lat) / 180) * TEXTURE_HEIGHT, 1, TEXTURE_HEIGHT - 2)
  };
}

function unwrapRing(ring: Array<[number, number]>) {
  let offset = 0;
  let previousLon = ring[0][0];

  return ring.map(([lon, lat], index) => {
    if (index > 0) {
      const candidateLon = lon + offset;
      const delta = candidateLon - previousLon;

      if (delta > 180) {
        offset -= 360;
      } else if (delta < -180) {
        offset += 360;
      }
    }

    const unwrappedLon = lon + offset;
    previousLon = unwrappedLon;
    return [unwrappedLon, lat] as [number, number];
  });
}

function traceRing(context: CanvasRenderingContext2D, ring: Array<[number, number]>, offsetX: number) {
  context.beginPath();
  ring.forEach((point, index) => {
    const { x, y } = pointToTexture(point, offsetX);

    if (index === 0) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }
  });
  context.closePath();
}

function drawRing(context: CanvasRenderingContext2D, ring: Array<[number, number]>, offsetX: number) {
  traceRing(context, ring, offsetX);
  context.fill();
}

function drawCountryRings(context: CanvasRenderingContext2D, country: CountryFeature) {
  country.polygons.forEach((ring) => {
    if (ring.length < 3) {
      return;
    }

    const unwrappedRing = unwrapRing(ring);
    drawRing(context, unwrappedRing, -TEXTURE_WIDTH);
    drawRing(context, unwrappedRing, 0);
    drawRing(context, unwrappedRing, TEXTURE_WIDTH);
  });
}

function fillSouthPolarCap(context: CanvasRenderingContext2D, countries: CountryFeature[]) {
  const hasAntarctica = countries.some((country) => country.id.padStart(3, "0") === "010");

  if (!hasAntarctica) {
    return;
  }

  context.fillRect(0, TEXTURE_HEIGHT - 16, TEXTURE_WIDTH, 16);
}

function makeCanvasTexture(canvas: HTMLCanvasElement) {
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

export function makeGlobeTexture(countries: CountryFeature[]) {
  const canvas = document.createElement("canvas");
  canvas.width = TEXTURE_WIDTH;
  canvas.height = TEXTURE_HEIGHT;

  const context = canvas.getContext("2d");

  if (!context) {
    return null;
  }

  context.fillStyle = "#0a2632";
  context.fillRect(0, 0, TEXTURE_WIDTH, TEXTURE_HEIGHT);
  context.fillStyle = "#020706";

  countries.forEach((country) => {
    drawCountryRings(context, country);
  });

  fillSouthPolarCap(context, countries);

  return makeCanvasTexture(canvas);
}

export function makeCountryHighlightTexture(country: CountryFeature) {
  const canvas = document.createElement("canvas");
  canvas.width = TEXTURE_WIDTH;
  canvas.height = TEXTURE_HEIGHT;

  const context = canvas.getContext("2d");

  if (!context) {
    return null;
  }

  context.clearRect(0, 0, TEXTURE_WIDTH, TEXTURE_HEIGHT);
  context.fillStyle = "#45f3c7";
  drawCountryRings(context, country);

  return makeCanvasTexture(canvas);
}
