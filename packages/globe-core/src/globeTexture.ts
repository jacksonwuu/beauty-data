import * as THREE from "three";
import type { CountryFeature } from "./types";

const TEXTURE_WIDTH = 2048;
const TEXTURE_HEIGHT = 1024;

function pointToTexture([lon, lat]: [number, number]) {
  return {
    x: ((lon + 180) / 360) * TEXTURE_WIDTH,
    y: THREE.MathUtils.clamp(((90 - lat) / 180) * TEXTURE_HEIGHT, 1, TEXTURE_HEIGHT - 2)
  };
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
    country.polygons.forEach((ring) => {
      if (ring.length < 3) {
        return;
      }

      const latitudes = ring.map(([, lat]) => lat);
      const minLat = Math.min(...latitudes);
      const maxLat = Math.max(...latitudes);

      if (maxLat > 84 || minLat < -84) {
        return;
      }

      const crossesAntimeridian = ring.some(([lon], index) => {
        if (index === 0) {
          return false;
        }

        return Math.abs(lon - ring[index - 1][0]) > 180;
      });

      if (crossesAntimeridian) {
        return;
      }

      context.beginPath();
      ring.forEach((point, index) => {
        const { x, y } = pointToTexture(point);

        if (index === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      });
      context.closePath();
      context.fill();
    });
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;

  return texture;
}
