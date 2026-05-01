import { feature } from "topojson-client";
import countries50 from "world-atlas/countries-50m.json";
import type { CountryCoordinateMap, CountryFeature } from "./types";

type GeoGeometry = {
  type: "Polygon" | "MultiPolygon";
  coordinates: number[][][] | number[][][][];
};

type GeoFeature = {
  id?: string | number;
  properties?: { name?: string };
  geometry?: GeoGeometry;
};

function toCountryFeature(geoFeature: GeoFeature, index: number): CountryFeature | null {
  if (!geoFeature.geometry) {
    return null;
  }

  const id = String(geoFeature.id ?? geoFeature.properties?.name ?? index);
  const name = geoFeature.properties?.name ?? id;
  const coordinates = geoFeature.geometry.coordinates;
  const polygons =
    geoFeature.geometry.type === "Polygon"
      ? (coordinates as number[][][]).map((ring) =>
          ring.map(([lon, lat]) => [lon, lat] as [number, number])
        )
      : (coordinates as number[][][][]).flatMap((polygon) =>
          polygon.map((ring) => ring.map(([lon, lat]) => [lon, lat] as [number, number]))
        );

  return { id, name, polygons };
}

const countriesGeoJson = feature(
  countries50 as never,
  (countries50 as { objects: { countries: unknown } }).objects.countries as never
) as unknown as { features: GeoFeature[] };

export const WORLD_COUNTRIES: CountryFeature[] = countriesGeoJson.features
  .map(toCountryFeature)
  .filter((country): country is CountryFeature => Boolean(country));

export const DEFAULT_COUNTRY_COORDINATES: CountryCoordinateMap = {
  AR: { lat: -34.6, lon: -64.4 },
  AT: { lat: 47.5, lon: 14.6 },
  AU: { lat: -25.3, lon: 133.8 },
  BD: { lat: 23.7, lon: 90.3 },
  BE: { lat: 50.5, lon: 4.5 },
  BR: { lat: -10.8, lon: -53.1 },
  CA: { lat: 56.1, lon: -106.3 },
  CH: { lat: 46.8, lon: 8.2 },
  CL: { lat: -35.7, lon: -71.5 },
  CN: { lat: 35.8, lon: 104.2 },
  CO: { lat: 4.6, lon: -74.1 },
  CU: { lat: 21.5, lon: -79.5 },
  DE: { lat: 51.2, lon: 10.4 },
  DK: { lat: 56.2, lon: 9.5 },
  EG: { lat: 26.8, lon: 30.8 },
  ES: { lat: 40.3, lon: -3.7 },
  ET: { lat: 9.1, lon: 40.5 },
  FI: { lat: 64, lon: 26 },
  FR: { lat: 46.2, lon: 2.2 },
  GB: { lat: 55.4, lon: -3.4 },
  GH: { lat: 7.9, lon: -1 },
  GR: { lat: 39.1, lon: 21.8 },
  ID: { lat: -2.5, lon: 118 },
  IE: { lat: 53.3, lon: -8.2 },
  IN: { lat: 22.9, lon: 79.6 },
  IR: { lat: 32.4, lon: 53.7 },
  IT: { lat: 42.9, lon: 12.6 },
  JP: { lat: 36.2, lon: 138.3 },
  KE: { lat: 0.1, lon: 37.9 },
  KR: { lat: 36.4, lon: 127.8 },
  MA: { lat: 31.8, lon: -7.1 },
  MX: { lat: 23.6, lon: -102.5 },
  MY: { lat: 4.2, lon: 102 },
  NG: { lat: 9.1, lon: 8.7 },
  NL: { lat: 52.1, lon: 5.3 },
  NO: { lat: 61, lon: 8.5 },
  NZ: { lat: -41.3, lon: 174.8 },
  PE: { lat: -9.2, lon: -75 },
  PH: { lat: 12.9, lon: 121.8 },
  PK: { lat: 30.4, lon: 69.3 },
  PL: { lat: 52, lon: 19.1 },
  PT: { lat: 39.5, lon: -8 },
  RU: { lat: 61.5, lon: 105.3 },
  SA: { lat: 23.9, lon: 45.1 },
  SE: { lat: 62, lon: 15 },
  TH: { lat: 15.8, lon: 100.9 },
  TR: { lat: 39, lon: 35.2 },
  UA: { lat: 49, lon: 31.4 },
  US: { lat: 39.8, lon: -98.6 },
  VN: { lat: 16.2, lon: 107.8 },
  ZA: { lat: -30.6, lon: 22.9 }
};
