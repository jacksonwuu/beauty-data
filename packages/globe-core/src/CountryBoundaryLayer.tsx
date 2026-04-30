import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { makeCountryLinePoints } from "./geo";
import { makeCountryHighlightTexture } from "./globeTexture";
import type { CountryFeature } from "./types";

interface CountryBoundaryLayerProps {
  countries: CountryFeature[];
  hoveredCountryId?: string | null;
  focusedCountryId?: string | null;
}

const FOCUS_PULSE_DURATION = 2.4;

export function CountryBoundaryLayer({ countries, hoveredCountryId, focusedCountryId }: CountryBoundaryLayerProps) {
  const focusMaterialRef = useRef<THREE.LineBasicMaterial>(null);
  const focusPulseStartRef = useRef<number | null>(null);
  const [focusPulseActive, setFocusPulseActive] = useState(false);

  const allBoundaryGeometry = useMemo(() => {
    const positions = countries.flatMap((country) => Array.from(makeCountryLinePoints(country, 2.006)));
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(positions), 3));
    return geometry;
  }, [countries]);

  const hoverTexture = useMemo(() => {
    const country = countries.find((item) => item.id === hoveredCountryId);

    if (!country) {
      return null;
    }

    return makeCountryHighlightTexture(country);
  }, [countries, hoveredCountryId]);

  const focusedGeometry = useMemo(() => {
    const country = countries.find((item) => item.id === focusedCountryId);

    if (!country) {
      return null;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(makeCountryLinePoints(country, 2.012), 3));
    return geometry;
  }, [countries, focusedCountryId]);

  useEffect(() => {
    if (!focusedCountryId) {
      setFocusPulseActive(false);
      focusPulseStartRef.current = null;
      return;
    }

    setFocusPulseActive(true);
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
      setFocusPulseActive(false);
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
      {hoverTexture ? (
        <mesh scale={1.0015}>
          <sphereGeometry args={[2, 96, 96]} />
          <meshBasicMaterial
            map={hoverTexture}
            transparent
            opacity={0.22}
            side={THREE.FrontSide}
            depthWrite={false}
          />
        </mesh>
      ) : null}
      {focusedGeometry && focusPulseActive ? (
        <lineSegments geometry={focusedGeometry}>
          <lineBasicMaterial ref={focusMaterialRef} color="#ffe58f" transparent opacity={0.96} linewidth={2} />
        </lineSegments>
      ) : null}
    </>
  );
}
