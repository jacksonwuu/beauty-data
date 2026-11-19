import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { makeCountryLinePoints } from "./geo";
import type { CountryFeature } from "./types";

interface CountryBoundaryLayerProps {
  countries: CountryFeature[];
  hoveredCountryId?: string | null;
  focusedCountryId?: string | null;
}

const FOCUS_PULSE_DURATION = 2.4;
const HOVER_FILL_RADIUS = 2.004;

/**
 * Solid fill for one country, built from its rings directly.
 *
 * The previous version rasterised the country into a 4096x2048 canvas on every
 * hover change, which allocated ~32 MB and re-uploaded a texture each time the
 * pointer crossed a border. A triangle mesh from the existing ring data costs a
 * few thousand vertices instead.
 */
function makeCountryFillGeometry(country: CountryFeature) {
  const positions: number[] = [];

  country.polygons.forEach((ring) => {
    if (ring.length < 4) {
      return;
    }

    const faces = THREE.ShapeUtils.triangulateShape(
      ring.slice(0, -1).map(([lon, lat]) => new THREE.Vector2(lon, lat)),
      []
    );
    const ringVertices = ring.map(([lon, lat]) => {
      const phi = THREE.MathUtils.degToRad(90 - lat);
      const theta = THREE.MathUtils.degToRad(lon + 180);
      return new THREE.Vector3(
        -HOVER_FILL_RADIUS * Math.sin(phi) * Math.cos(theta),
        HOVER_FILL_RADIUS * Math.cos(phi),
        HOVER_FILL_RADIUS * Math.sin(phi) * Math.sin(theta)
      );
    });

    faces.forEach(([a, b, c]) => {
      const first = ringVertices[a];
      const second = ringVertices[b];
      const third = ringVertices[c];

      if (!first || !second || !third) {
        return;
      }

      // Rings that cross the antimeridian produce degenerate slivers; skip them.
      if (Math.abs(second.x - first.x) + Math.abs(third.x - first.x) > HOVER_FILL_RADIUS) {
        return;
      }

      positions.push(first.x, first.y, first.z, second.x, second.y, second.z, third.x, third.y, third.z);
    });
  });

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(positions), 3));
  return geometry;
}

export function CountryBoundaryLayer({
  countries,
  hoveredCountryId,
  focusedCountryId
}: CountryBoundaryLayerProps) {
  const focusMaterialRef = useRef<THREE.LineBasicMaterial>(null);
  const focusPulseStartRef = useRef<number | null>(null);
  const [completedFocusPulseCountryId, setCompletedFocusPulseCountryId] = useState<string | null>(
    null
  );
  const focusPulseActive = Boolean(
    focusedCountryId && completedFocusPulseCountryId !== focusedCountryId
  );

  const allBoundaryGeometry = useMemo(() => {
    const positions = countries.flatMap((country) =>
      Array.from(makeCountryLinePoints(country, 2.006))
    );
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(positions), 3));
    return geometry;
  }, [countries]);

  const hoverFillGeometry = useMemo(() => {
    const country = countries.find((item) => item.id === hoveredCountryId);

    if (!country) {
      return null;
    }

    return makeCountryFillGeometry(country);
  }, [countries, hoveredCountryId]);

  useEffect(
    () => () => {
      hoverFillGeometry?.dispose();
    },
    [hoverFillGeometry]
  );

  const focusedGeometry = useMemo(() => {
    const country = countries.find((item) => item.id === focusedCountryId);

    if (!country) {
      return null;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(makeCountryLinePoints(country, 2.012), 3)
    );
    return geometry;
  }, [countries, focusedCountryId]);

  useEffect(() => {
    focusPulseStartRef.current = null;
  }, [focusedCountryId]);

  useFrame(({ clock }) => {
    if (!focusPulseActive || !focusMaterialRef.current) {
      return;
    }

    if (focusPulseStartRef.current === null) {
      focusPulseStartRef.current = clock.elapsedTime;
    }

    const elapsed = clock.elapsedTime - focusPulseStartRef.current;
    const progress = Math.min(elapsed / FOCUS_PULSE_DURATION, 1);
    const pulse = 0.5 + 0.5 * Math.sin(elapsed * 12);
    focusMaterialRef.current.opacity = (1 - progress) * (0.34 + pulse * 0.62);

    if (progress >= 1) {
      setCompletedFocusPulseCountryId(focusedCountryId ?? null);
      focusPulseStartRef.current = null;
    }
  });

  return (
    <>
      <lineSegments geometry={allBoundaryGeometry} renderOrder={2}>
        <lineBasicMaterial
          color="#a9d9ce"
          transparent
          opacity={0.92}
          depthTest
          depthWrite={false}
          toneMapped={false}
        />
      </lineSegments>
      {hoverFillGeometry ? (
        <mesh geometry={hoverFillGeometry} renderOrder={3}>
          <meshBasicMaterial
            color="#45f3c7"
            transparent
            opacity={0.22}
            side={THREE.DoubleSide}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      ) : null}
      {focusedGeometry && focusPulseActive ? (
        <lineSegments geometry={focusedGeometry}>
          <lineBasicMaterial
            ref={focusMaterialRef}
            color="#ffe58f"
            transparent
            opacity={0.96}
            linewidth={2}
          />
        </lineSegments>
      ) : null}
    </>
  );
}
