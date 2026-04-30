import { Billboard, Html } from "@react-three/drei";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import type { CSSProperties } from "react";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { latLonToVector3 } from "./geo";
import type { CountryCoordinateMap, GlobeBillboardItem } from "./types";

interface BillboardLayerProps<TPayload> {
  items: Array<GlobeBillboardItem<TPayload>>;
  countryCoordinates: CountryCoordinateMap;
  selectedItemId?: string | null;
  billboardScale?: number;
  showBacksideBillboards?: boolean;
  onItemClick?: (item: GlobeBillboardItem<TPayload>) => void;
}

interface BillboardItemProps<TPayload> {
  item: GlobeBillboardItem<TPayload>;
  position: THREE.Vector3;
  selected: boolean;
  billboardScale: number;
  showBacksideBillboards: boolean;
  onItemClick?: (item: GlobeBillboardItem<TPayload>) => void;
}

function fallbackColor(id: string) {
  const hue = Array.from(id).reduce((sum, character) => sum + character.charCodeAt(0), 0) % 360;
  return `hsl(${hue} 72% 58%)`;
}

function offsetForIndex(index: number): THREE.Vector3 {
  const ring = Math.floor(index / 7);
  const angle = index * 2.399963229728653;
  const distance = 0.055 + ring * 0.026;
  return new THREE.Vector3(Math.cos(angle) * distance, Math.sin(angle * 0.7) * distance, Math.sin(angle) * distance);
}

function BillboardItem<TPayload>({
  item,
  position,
  selected,
  billboardScale,
  showBacksideBillboards,
  onItemClick
}: BillboardItemProps<TPayload>) {
  const groupRef = useRef<THREE.Group>(null);
  const [frontFacing, setFrontFacing] = useState(true);
  const [hovered, setHovered] = useState(false);
  const handleSelect = (event: ThreeEvent<MouseEvent | PointerEvent>) => {
    event.stopPropagation();
    onItemClick?.(item);
  };

  useFrame(({ camera }) => {
    if (showBacksideBillboards) {
      if (!frontFacing) {
        setFrontFacing(true);
      }
      return;
    }

    const worldPosition = new THREE.Vector3();
    groupRef.current?.getWorldPosition(worldPosition);
    const cameraDirection = camera.position.clone().normalize();
    const itemDirection = worldPosition.normalize();
    const facingScore = itemDirection.dot(cameraDirection);

    if (frontFacing && facingScore < -0.08) {
      setFrontFacing(false);
    } else if (!frontFacing && facingScore > 0.08) {
      setFrontFacing(true);
    }
  });

  const shouldShowContent = showBacksideBillboards || frontFacing;
  const raised = hovered || selected;
  const posterZIndex = raised ? 180 : 20;

  return (
    <Billboard ref={groupRef} position={position} follow lockX={false} lockY={false} lockZ={false}>
      {shouldShowContent && item.imageUrl ? (
        <Html
          center
          zIndexRange={[posterZIndex, posterZIndex]}
          wrapperClass={raised ? "globe-poster-html globe-poster-html--raised" : "globe-poster-html"}
          style={{ pointerEvents: "auto", "--poster-scale": billboardScale } as CSSProperties}
        >
          <button
            className={[
              "globe-poster-button",
              selected ? "globe-poster-button--selected" : "",
              hovered ? "globe-poster-button--hovered" : ""
            ]
              .filter(Boolean)
              .join(" ")}
            type="button"
            onPointerEnter={() => setHovered(true)}
            onPointerOver={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            onPointerDown={(event) => {
              event.stopPropagation();
            }}
            onClick={(event) => {
              event.stopPropagation();
              onItemClick?.(item);
            }}
            aria-label={`Open item ${item.id}`}
          >
            <img src={item.imageUrl} alt="" draggable={false} />
          </button>
        </Html>
      ) : null}
      {shouldShowContent && !item.imageUrl ? (
        <mesh onClick={handleSelect} onPointerDown={handleSelect} scale={selected ? [0.32, 0.44, 1] : [0.23, 0.32, 1]}>
          <planeGeometry />
          <meshBasicMaterial color={fallbackColor(item.id)} side={THREE.DoubleSide} />
        </mesh>
      ) : null}
    </Billboard>
  );
}

export function BillboardLayer<TPayload>({
  items,
  countryCoordinates,
  selectedItemId,
  billboardScale = 1,
  showBacksideBillboards = false,
  onItemClick
}: BillboardLayerProps<TPayload>) {
  const positionedItems = useMemo(() => {
    const perCountryIndex = new Map<string, number>();

    return items
      .map((item) => {
        const coordinate = countryCoordinates[item.countryCode];

        if (!coordinate) {
          return null;
        }

        const index = perCountryIndex.get(item.countryCode) ?? 0;
        perCountryIndex.set(item.countryCode, index + 1);
        const base = latLonToVector3(coordinate.lat, coordinate.lon, 2.16 + (index % 4) * 0.012);
        const offset = item.positionOffset
          ? new THREE.Vector3(...item.positionOffset)
          : offsetForIndex(index);

        return { item, position: base.add(offset) };
      })
      .filter((item): item is { item: GlobeBillboardItem<TPayload>; position: THREE.Vector3 } => Boolean(item));
  }, [countryCoordinates, items]);

  return (
    <>
      {positionedItems.map(({ item, position }) => {
        const selected = item.id === selectedItemId;

        return (
          <BillboardItem
            key={item.id}
            item={item}
            position={position}
            selected={selected}
            billboardScale={billboardScale}
            showBacksideBillboards={showBacksideBillboards}
            onItemClick={onItemClick}
          />
        );
      })}
    </>
  );
}
