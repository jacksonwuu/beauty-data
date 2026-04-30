import { useMemo } from "react";
import * as THREE from "three";
import { makeCountryLinePoints } from "./geo";
import type { CountryFeature } from "./types";

interface CountryBoundaryLayerProps {
  countries: CountryFeature[];
  hoveredCountryId?: string | null;
}

export function CountryBoundaryLayer({ countries, hoveredCountryId }: CountryBoundaryLayerProps) {
  const allBoundaryGeometry = useMemo(() => {
    const positions = countries.flatMap((country) => Array.from(makeCountryLinePoints(country, 2.014)));
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(positions), 3));
    return geometry;
  }, [countries]);

  const highlightedGeometry = useMemo(() => {
    const country = countries.find((item) => item.id === hoveredCountryId);

    if (!country) {
      return null;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(makeCountryLinePoints(country, 2.03), 3));
    return geometry;
  }, [countries, hoveredCountryId]);

  return (
    <>
      <lineSegments geometry={allBoundaryGeometry}>
        <lineBasicMaterial color="#2f6f5b" transparent opacity={0.42} />
      </lineSegments>
      <lineSegments geometry={allBoundaryGeometry}>
        <lineBasicMaterial color="#a6c8bd" transparent opacity={0.34} />
      </lineSegments>
      {highlightedGeometry ? (
        <lineSegments geometry={highlightedGeometry}>
          <lineBasicMaterial color="#fff27d" transparent opacity={0.95} linewidth={2} />
        </lineSegments>
      ) : null}
    </>
  );
}
