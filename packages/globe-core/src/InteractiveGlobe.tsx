import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import type { ComponentRef } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
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
    float softHalo = pow(smoothstep(0.16, 1.0, rim), 1.35) * 0.46;
    float brightEdge = pow(smoothstep(0.56, 1.0, rim), 1.95);
    float ionRipple = 0.95 + 0.05 * sin((vWorldPosition.y * 7.0) + uTime * 0.32);
    float alpha = clamp((softHalo + brightEdge * 0.88) * uIntensity * ionRipple, 0.0, 0.78);
    vec3 color = mix(uOuterColor, uInnerColor, brightEdge);

    if (alpha < 0.01) {
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
    <mesh scale={1.058} renderOrder={1}>
      <sphereGeometry args={[GLOBE_RADIUS, 160, 160]} />
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
    const localPoint = event.point.clone();
    globeGroupRef.current?.worldToLocal(localPoint);
    const { lat, lon } = vector3ToLatLon(localPoint);
    const country = findCountryAtLatLon(lat, lon, countries);

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

  const focusCountry = (country: CountryFeature | null, shouldNotify = true) => {
    if (!country) {
      return;
    }

    const distance = camera.position.length();
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
  };

  useEffect(() => {
    if (!focusedCountryId) {
      return;
    }

    const country = countries.find((item) => item.id === focusedCountryId);
    focusCountry(country ?? null, false);
  }, [countries, focusedCountryId]);

  return (
    <>
      <ambientLight intensity={1.4} />
      <directionalLight position={[5, 4, 6]} intensity={1.8} color="#f7f3df" />
      <Stars radius={58} depth={18} count={650} factor={1.25} saturation={0} fade speed={0.06} />

      <group ref={globeGroupRef}>
        <mesh
          onPointerMove={updateHoveredCountry}
          onPointerOut={clearHoveredCountry}
          onClick={() => focusCountry(internalHoveredCountry)}
        >
          <sphereGeometry args={[GLOBE_RADIUS, 160, 160]} />
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
          countryCoordinates={countryCoordinates}
          hoveredCountryId={effectiveHoveredCountryId}
          selectedItemId={selectedItemId}
          billboardScale={billboardScale}
          showBacksideBillboards={showBacksideBillboards}
          onItemHover={onItemHover}
          onItemClick={onItemClick}
        />
      </group>
      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        minDistance={3.1}
        maxDistance={7.2}
        minPolarAngle={polarAngleLimit}
        maxPolarAngle={Math.PI - polarAngleLimit}
        dampingFactor={0.08}
        enableDamping
        onStart={() => {
          targetCameraPositionRef.current = null;
        }}
      />
    </>
  );
}

export function InteractiveGlobe<TPayload>(props: GlobeCoreProps<TPayload>) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.8], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#050709"]} />
      <GlobeScene {...props} />
    </Canvas>
  );
}
