import * as THREE from "three";
import type { CountryFeature } from "./types";

export const GLOBE_RADIUS = 2;

export function latLonToVector3(lat: number, lon: number, radius = GLOBE_RADIUS): THREE.Vector3 {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lon + 180);

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

export function vector3ToLatLon(point: THREE.Vector3): { lat: number; lon: number } {
  const normalized = point.clone().normalize();
  const lat = 90 - THREE.MathUtils.radToDeg(Math.acos(normalized.y));
  const lon = THREE.MathUtils.radToDeg(Math.atan2(normalized.z, -normalized.x)) - 180;
  return { lat, lon: lon < -180 ? lon + 360 : lon };
}

function pointInRing(lon: number, lat: number, ring: Array<[number, number]>): boolean {
  let inside = false;

  for (let current = 0, previous = ring.length - 1; current < ring.length; previous = current++) {
    const [currentLon, currentLat] = ring[current];
    const [previousLon, previousLat] = ring[previous];
    const intersects =
      currentLat > lat !== previousLat > lat &&
      lon <
        ((previousLon - currentLon) * (lat - currentLat)) / (previousLat - currentLat) + currentLon;

    if (intersects) {
      inside = !inside;
    }
  }

  return inside;
}

export function findCountryAtLatLon(
  lat: number,
  lon: number,
  countries: CountryFeature[]
): CountryFeature | null {
  return (
    countries.find((country) =>
      country.polygons.some((polygon) => polygon.length > 2 && pointInRing(lon, lat, polygon))
    ) ?? null
  );
}

export function countryCenterVector(country: CountryFeature, radius = GLOBE_RADIUS): THREE.Vector3 {
  const center = new THREE.Vector3();
  let count = 0;

  country.polygons.forEach((ring) => {
    ring.forEach(([lon, lat]) => {
      center.add(latLonToVector3(lat, lon, 1));
      count += 1;
    });
  });

  if (count === 0 || center.lengthSq() === 0) {
    return new THREE.Vector3(0, 0, radius);
  }

  return center.normalize().multiplyScalar(radius);
}

export function makeCountryLinePoints(
  country: CountryFeature,
  radius = GLOBE_RADIUS + 0.012
): Float32Array {
  const points: number[] = [];

  country.polygons.forEach((ring) => {
    for (let index = 0; index < ring.length - 1; index += 1) {
      const start = latLonToVector3(ring[index][1], ring[index][0], radius);
      const end = latLonToVector3(ring[index + 1][1], ring[index + 1][0], radius);
      points.push(start.x, start.y, start.z, end.x, end.y, end.z);
    }
  });

  return new Float32Array(points);
}

export function makeCountryFillPoints(
  country: CountryFeature,
  radius = GLOBE_RADIUS + 0.006
): Float32Array {
  const points: number[] = [];

  country.polygons.forEach((ring) => {
    if (ring.length < 4) {
      return;
    }

    const anchor = latLonToVector3(ring[0][1], ring[0][0], radius);

    for (let index = 1; index < ring.length - 2; index += 1) {
      const current = latLonToVector3(ring[index][1], ring[index][0], radius);
      const next = latLonToVector3(ring[index + 1][1], ring[index + 1][0], radius);
      points.push(
        anchor.x,
        anchor.y,
        anchor.z,
        current.x,
        current.y,
        current.z,
        next.x,
        next.y,
        next.z
      );
    }
  });

  return new Float32Array(points);
}
