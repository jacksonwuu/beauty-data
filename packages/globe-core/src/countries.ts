import { feature } from "topojson-client";
import countries110 from "world-atlas/countries-110m.json";
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
      ? (coordinates as number[][][]).map((ring) => ring.map(([lon, lat]) => [lon, lat] as [number, number]))
      : (coordinates as number[][][][]).flatMap((polygon) =>
          polygon.map((ring) => ring.map(([lon, lat]) => [lon, lat] as [number, number]))
        );

  return { id, name, polygons };
}

const countriesGeoJson = feature(
  countries110 as never,
  (countries110 as { objects: { countries: unknown } }).objects.countries as never
) as unknown as { features: GeoFeature[] };

export const WORLD_COUNTRIES: CountryFeature[] = countriesGeoJson.features
  .map(toCountryFeature)
  .filter((country): country is CountryFeature => Boolean(country));

export const DEFAULT_COUNTRY_COORDINATES: CountryCoordinateMap = {
  AR: { lat: -34.6, lon: -64.4 },
  AU: { lat: -25.3, lon: 133.8 },
  BR: { lat: -10.8, lon: -53.1 },
  CA: { lat: 56.1, lon: -106.3 },
  CN: { lat: 35.8, lon: 104.2 },
  DE: { lat: 51.2, lon: 10.4 },
  EG: { lat: 26.8, lon: 30.8 },
  ES: { lat: 40.3, lon: -3.7 },
  FR: { lat: 46.2, lon: 2.2 },
  GB: { lat: 55.4, lon: -3.4 },
  IN: { lat: 22.9, lon: 79.6 },
  IT: { lat: 42.9, lon: 12.6 },
  JP: { lat: 36.2, lon: 138.3 },
  KR: { lat: 36.4, lon: 127.8 },
  MX: { lat: 23.6, lon: -102.5 },
  NG: { lat: 9.1, lon: 8.7 },
  RU: { lat: 61.5, lon: 105.3 },
  US: { lat: 39.8, lon: -98.6 },
  ZA: { lat: -30.6, lon: 22.9 }
};
