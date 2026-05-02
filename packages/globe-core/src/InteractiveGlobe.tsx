import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import type { ComponentRef } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { BillboardLayer } from "./BillboardLayer";
import { CountryBoundaryLayer } from "./CountryBoundaryLayer";
import { DEFAULT_COUNTRY_COORDINATES, WORLD_COUNTRIES } from "./countries";
import { countryCenterVector, findCountryAtLatLon, GLOBE_RADIUS, vector3ToLatLon } from "./geo";
import { makeGlobeTexture } from "./globeTexture";
import type { CountryFeature, GlobeCoreProps } from "./types";

const atmosphereVertexShader = `
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;

  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const atmosphereFragmentShader = `
  uniform vec3 uInnerColor;
  uniform vec3 uOuterColor;
  uniform float uIntensity;
  uniform float uTime;

  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;

  void main() {
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    float facing = abs(dot(normalize(vWorldNormal), viewDirection));
    float rim = 1.0 - facing;
    float outerFade = 1.0 - smoothstep(0.34, 0.78, rim);
    float softHalo = pow(smoothstep(0.02, 0.28, rim) * outerFade, 0.9) * 0.82;
    float brightEdge = smoothstep(0.16, 0.32, rim) * (1.0 - smoothstep(0.4, 0.7, rim));
    float ionRipple = 0.95 + 0.05 * sin((vWorldPosition.y * 7.0) + uTime * 0.32);
    float alpha = clamp((softHalo + brightEdge * 0.46) * uIntensity * ionRipple, 0.0, 0.44);
    vec3 color = mix(uOuterColor, uInnerColor, brightEdge);

    if (alpha < 0.006) {
      discard;
    }

    gl_FragColor = vec4(color, alpha);
  }
`;

function AtmosphereLayer() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const atmosphereMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uInnerColor: { value: new THREE.Color("#a8f7ff") },
          uOuterColor: { value: new THREE.Color("#2c9dff") },
          uIntensity: { value: 0.92 },
          uTime: { value: 0 }
        },
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.BackSide
      }),
    []
  );

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  return (
    <mesh scale={1.12} renderOrder={1}>
      <sphereGeometry args={[GLOBE_RADIUS, 112, 112]} />
      <primitive object={atmosphereMaterial} ref={materialRef} attach="material" />
    </mesh>
  );
}

function GlobeScene<TPayload>({
  items,
  countryCoordinates = DEFAULT_COUNTRY_COORDINATES,
  focusedCountryId,
  hoveredCountryId,
  selectedItemId,
  billboardScale = 1,
  billboardLayout = "flat",
  billboardPlacement = "rows",
  minCameraDistance = 2.18,
  maxCameraDistance = 7.2,
  zoomSpeed = 0.32,
  enableGlobeShading = false,
  enableAtmosphere = true,
  showBacksideBillboards = false,
  polarAngleLimit = 0.16,
  onCountryHover,
  onCountryClick,
  onItemHover,
  onItemClick
}: GlobeCoreProps<TPayload>) {
  const { camera } = useThree();
  const controlsRef = useRef<ComponentRef<typeof OrbitControls>>(null);
  const globeGroupRef = useRef<THREE.Group>(null);
  const targetCameraPositionRef = useRef<THREE.Vector3 | null>(null);
  const lastFocusedCountryIdRef = useRef<string | null>(null);
  const pointerDownPositionRef = useRef<{ x: number; y: number } | null>(null);
  const pointerDraggingRef = useRef(false);
  const [internalHoveredCountry, setInternalHoveredCountry] = useState<CountryFeature | null>(null);
  const effectiveHoveredCountryId = hoveredCountryId ?? internalHoveredCountry?.id ?? null;
  const countries = useMemo(() => WORLD_COUNTRIES, []);
  const globeTexture = useMemo(() => makeGlobeTexture(countries), [countries]);

  const setCanvasCursor = (cursor: string) => {
    const canvas = document.querySelector("canvas");

    if (canvas instanceof HTMLCanvasElement) {
      canvas.style.cursor = cursor;
    }
  };

  const findCountryFromPoint = (point: THREE.Vector3) => {
    const localPoint = point.clone();
    globeGroupRef.current?.worldToLocal(localPoint);
    const { lat, lon } = vector3ToLatLon(localPoint);
    return findCountryAtLatLon(lat, lon, countries);
  };

  useFrame(() => {
    const targetCameraPosition = targetCameraPositionRef.current;

    if (!targetCameraPosition) {
      return;
    }

    camera.position.lerp(targetCameraPosition, 0.08);
    camera.up.set(0, 1, 0);
    camera.lookAt(0, 0, 0);
    controlsRef.current?.update();

    if (camera.position.distanceTo(targetCameraPosition) < 0.01) {
      camera.position.copy(targetCameraPosition);
      camera.lookAt(0, 0, 0);
      controlsRef.current?.update();
      targetCameraPositionRef.current = null;
    }
  });

  const updateHoveredCountry = (event: ThreeEvent<PointerEvent>) => {
    const country = findCountryFromPoint(event.point);

    if (country?.id !== internalHoveredCountry?.id) {
      setInternalHoveredCountry(country);
      onCountryHover?.(country);
    }

    setCanvasCursor(country ? "pointer" : "grab");
  };

  const clearHoveredCountry = () => {
    setInternalHoveredCountry(null);
    onCountryHover?.(null);
    setCanvasCursor("grab");
  };

  const stopProgrammaticCameraMove = () => {
    targetCameraPositionRef.current = null;
  };

  const handleItemHover = (
    item: Parameters<NonNullable<typeof onItemHover>>[0],
    event?: Parameters<NonNullable<typeof onItemHover>>[1]
  ) => {
    onItemHover?.(item, event);
  };

  const focusCountry = useCallback(
    (country: CountryFeature | null, shouldNotify = true) => {
      if (!country) {
        return;
      }

      const currentDistance = camera.position.length();
      const distance = THREE.MathUtils.clamp(currentDistance, minCameraDistance, maxCameraDistance);
      const targetPosition = countryCenterVector(country, distance);
      const clampedSpherical = new THREE.Spherical().setFromVector3(targetPosition);
      clampedSpherical.phi = THREE.MathUtils.clamp(
        clampedSpherical.phi,
        polarAngleLimit,
        Math.PI - polarAngleLimit
      );
      targetCameraPositionRef.current = new THREE.Vector3().setFromSpherical(clampedSpherical);
      if (shouldNotify) {
        onCountryClick?.(country);
      }
    },
    [camera.position, maxCameraDistance, minCameraDistance, onCountryClick, polarAngleLimit]
  );

  useEffect(() => {
    if (!focusedCountryId) {
      lastFocusedCountryIdRef.current = null;
      return;
    }

    if (lastFocusedCountryIdRef.current === focusedCountryId) {
      return;
    }

    lastFocusedCountryIdRef.current = focusedCountryId;
    const country = countries.find((item) => item.id === focusedCountryId);
    focusCountry(country ?? null, false);
  }, [countries, focusCountry, focusedCountryId]);

  const handleGlobePointerDown = (event: ThreeEvent<PointerEvent>) => {
    pointerDownPositionRef.current = {
      x: event.nativeEvent.clientX,
      y: event.nativeEvent.clientY
    };
    pointerDraggingRef.current = false;
  };

  const updatePointerDragState = (event: ThreeEvent<PointerEvent>) => {
    const pointerDownPosition = pointerDownPositionRef.current;

    if (!pointerDownPosition || pointerDraggingRef.current) {
      return;
    }

    const deltaX = event.nativeEvent.clientX - pointerDownPosition.x;
    const deltaY = event.nativeEvent.clientY - pointerDownPosition.y;
    pointerDraggingRef.current = Math.hypot(deltaX, deltaY) > 4;
  };

  const handleCountryClick = (event: ThreeEvent<MouseEvent>) => {
    const pointerDownPosition = pointerDownPositionRef.current;
    const clickDistance = pointerDownPosition
      ? Math.hypot(
          event.nativeEvent.clientX - pointerDownPosition.x,
          event.nativeEvent.clientY - pointerDownPosition.y
        )
      : 0;
    const wasDragging = pointerDraggingRef.current || clickDistance > 4;

    pointerDownPositionRef.current = null;
    pointerDraggingRef.current = false;

    if (!wasDragging) {
      focusCountry(findCountryFromPoint(event.point));
    }
  };

  return (
    <>
      <ambientLight intensity={1.4} />
      <directionalLight position={[5, 4, 6]} intensity={1.8} color="#f7f3df" />
      <Stars
        radius={58}
        depth={22}
        count={1400}
        factor={1.85}
        saturation={0.18}
        fade
        speed={0.05}
      />

      <group ref={globeGroupRef}>
        <mesh
          onPointerDown={handleGlobePointerDown}
          onPointerMove={(event) => {
            updatePointerDragState(event);
            if (pointerDraggingRef.current) {
              setCanvasCursor("grabbing");
            } else {
              updateHoveredCountry(event);
            }
          }}
          onPointerOut={clearHoveredCountry}
          onClick={handleCountryClick}
        >
          <sphereGeometry args={[GLOBE_RADIUS, 112, 112]} />
          {enableGlobeShading ? (
            <meshStandardMaterial
              color="#ffffff"
              map={globeTexture}
              roughness={0.92}
              metalness={0.08}
              emissive="#03090b"
              emissiveIntensity={0.28}
            />
          ) : (
            <meshBasicMaterial color="#ffffff" map={globeTexture} />
          )}
        </mesh>

        {enableAtmosphere ? <AtmosphereLayer /> : null}

        <CountryBoundaryLayer
          countries={countries}
          hoveredCountryId={effectiveHoveredCountryId}
          focusedCountryId={focusedCountryId}
        />
        <BillboardLayer
          items={items}
          countries={countries}
          countryCoordinates={countryCoordinates}
          hoveredCountryId={effectiveHoveredCountryId}
          selectedItemId={selectedItemId}
          billboardScale={billboardScale}
          billboardLayout={billboardLayout}
          billboardPlacement={billboardPlacement}
          showBacksideBillboards={showBacksideBillboards}
          onItemHover={handleItemHover}
          onItemClick={onItemClick}
        />
      </group>
      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        minDistance={minCameraDistance}
        maxDistance={maxCameraDistance}
        zoomSpeed={zoomSpeed}
        minPolarAngle={polarAngleLimit}
        maxPolarAngle={Math.PI - polarAngleLimit}
        dampingFactor={0.08}
        enableDamping
        onStart={stopProgrammaticCameraMove}
      />
    </>
  );
}

export function InteractiveGlobe<TPayload>(props: GlobeCoreProps<TPayload>) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.8], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#050709"]} />
      <GlobeScene {...props} />
    </Canvas>
  );
}
