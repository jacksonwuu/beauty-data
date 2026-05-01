import { Billboard } from "@react-three/drei";
import { ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { countryIdToAlpha2 } from "./countryCodes";
import { latLonToVector3, vector3ToLatLon } from "./geo";
import type { CountryCoordinateMap, CountryFeature, GlobeBillboardItem, GlobeBillboardLayoutMode } from "./types";

interface BillboardLayerProps<TPayload> {
  items: Array<GlobeBillboardItem<TPayload>>;
  countries: CountryFeature[];
  countryCoordinates: CountryCoordinateMap;
  hoveredCountryId?: string | null;
  selectedItemId?: string | null;
  billboardScale?: number;
  billboardLayout?: GlobeBillboardLayoutMode;
  showBacksideBillboards?: boolean;
  onItemHover?: (item: GlobeBillboardItem<TPayload> | null, event?: { clientX: number; clientY: number }) => void;
  onItemClick?: (item: GlobeBillboardItem<TPayload>) => void;
}

interface BillboardItemProps<TPayload> {
  item: GlobeBillboardItem<TPayload>;
  position: THREE.Vector3;
  quaternion: THREE.Quaternion;
  layoutMode: GlobeBillboardLayoutMode;
  autoScale: number;
  stackIndex: number;
  countryActive: boolean;
  selected: boolean;
  billboardScale: number;
  showBacksideBillboards: boolean;
  onItemHover?: (item: GlobeBillboardItem<TPayload> | null, event?: { clientX: number; clientY: number }) => void;
  onItemClick?: (item: GlobeBillboardItem<TPayload>) => void;
}

interface PosterCardMeshProps<TPayload> {
  item: GlobeBillboardItem<TPayload>;
  imageUrl: string;
  autoScale: number;
  stackIndex: number;
  countryActive: boolean;
  selected: boolean;
  billboardScale: number;
  onItemHover?: (item: GlobeBillboardItem<TPayload> | null, event?: { clientX: number; clientY: number }) => void;
  onItemClick?: (item: GlobeBillboardItem<TPayload>) => void;
}

type LayoutRing = Array<[number, number]>;

interface LayoutSpan {
  startLon: number;
  endLon: number;
  width: number;
}

interface LayoutRow {
  rowIndex: number;
  lat: number;
  spans: LayoutSpan[];
  width: number;
}

interface LayoutRingRecord {
  ring: LayoutRing;
  area: number;
  center: { lat: number; lon: number };
  bounds: ReturnType<typeof boundsForRings>;
}

interface PositionedBillboard<TPayload> {
  item: GlobeBillboardItem<TPayload>;
  position: THREE.Vector3;
  quaternion: THREE.Quaternion;
  autoScale: number;
  stackIndex: number;
}

function fallbackColor(id: string) {
  const hue = Array.from(id).reduce((sum, character) => sum + character.charCodeAt(0), 0) % 360;
  return `hsl(${hue} 72% 58%)`;
}

function configurePosterTexture(texture: THREE.Texture, gl: THREE.WebGLRenderer) {
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(8, gl.capabilities.getMaxAnisotropy());
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;
  texture.needsUpdate = true;
}

function makePosterPlaceholderTexture(id: string) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = 64;
  canvas.height = 92;

  if (context) {
    context.fillStyle = fallbackColor(id);
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgba(5, 7, 9, 0.45)";
    context.fillRect(7, 7, canvas.width - 14, canvas.height - 14);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function setCanvasCursor(cursor: string) {
  const canvas = document.querySelector("canvas");

  if (canvas instanceof HTMLCanvasElement) {
    canvas.style.cursor = cursor;
  }
}

function pointerClientPosition(event: ThreeEvent<PointerEvent | MouseEvent>) {
  return {
    clientX: event.nativeEvent.clientX,
    clientY: event.nativeEvent.clientY
  };
}

function stableHash(value: string) {
  return Array.from(value).reduce((hash, character) => (hash * 31 + character.charCodeAt(0)) >>> 0, 7);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function wrapLongitude(lon: number) {
  const wrapped = ((((lon + 180) % 360) + 360) % 360) - 180;
  return wrapped === -180 ? 180 : wrapped;
}

function unwrapLongitude(lon: number, referenceLon: number) {
  let unwrapped = lon;

  while (unwrapped - referenceLon > 180) {
    unwrapped -= 360;
  }

  while (unwrapped - referenceLon < -180) {
    unwrapped += 360;
  }

  return unwrapped;
}

function makeLayoutRings(country: CountryFeature, reference: { lat: number; lon: number }) {
  const rings = country.polygons
    .filter((ring) => ring.length > 3)
    .map((ring) => ring.map(([lon, lat]) => [unwrapLongitude(lon, reference.lon), lat] as [number, number]))
    .map((ring) => ({
      ring,
      area: Math.abs(ringArea(ring)),
      center: ringCenter(ring),
      bounds: boundsForRings([ring])
    }))
    .filter(({ area }) => area > 0.0001);

  const largestArea = Math.max(...rings.map(({ area }) => area), 0);
  const minMeaningfulArea = largestArea * 0.004;
  const meaningfulRings = rings.filter(({ area }) => area >= minMeaningfulArea);
  const containingRings = meaningfulRings.filter(({ ring }) => pointInLayoutRing(reference.lon, reference.lat, ring));
  const anchorRing =
    [...containingRings].sort((first, second) => second.area - first.area)[0] ??
    [...meaningfulRings].sort(
      (first, second) =>
        distanceDegrees(first.center, reference) / Math.sqrt(first.area) -
        distanceDegrees(second.center, reference) / Math.sqrt(second.area)
    )[0];

  if (!anchorRing) {
    return [];
  }

  const anchorDiagonal = boundsDiagonal(anchorRing.bounds);
  const nearbyLimit = clamp(anchorDiagonal * 0.72 + 2.2, 4.8, 18);

  return meaningfulRings
    .filter((record) => record === anchorRing || ringBelongsToLayoutCluster(record, anchorRing, nearbyLimit))
    .sort((first, second) => second.area - first.area)
    .map(({ ring }) => ring);
}

function ringArea(ring: LayoutRing) {
  let area = 0;

  for (let index = 0; index < ring.length; index += 1) {
    const [currentLon, currentLat] = ring[index];
    const [nextLon, nextLat] = ring[(index + 1) % ring.length];
    area += currentLon * nextLat - nextLon * currentLat;
  }

  return area / 2;
}

function ringCenter(ring: LayoutRing) {
  const center = ring.reduce(
    (sum, [lon, lat]) => ({
      lon: sum.lon + lon,
      lat: sum.lat + lat
    }),
    { lon: 0, lat: 0 }
  );

  return {
    lon: center.lon / ring.length,
    lat: center.lat / ring.length
  };
}

function boundsForRings(rings: LayoutRing[]) {
  return rings.reduce(
    (bounds, ring) => {
      ring.forEach(([lon, lat]) => {
        bounds.minLat = Math.min(bounds.minLat, lat);
        bounds.maxLat = Math.max(bounds.maxLat, lat);
        bounds.minLon = Math.min(bounds.minLon, lon);
        bounds.maxLon = Math.max(bounds.maxLon, lon);
      });

      return bounds;
    },
    {
      minLat: Number.POSITIVE_INFINITY,
      maxLat: Number.NEGATIVE_INFINITY,
      minLon: Number.POSITIVE_INFINITY,
      maxLon: Number.NEGATIVE_INFINITY
    }
  );
}

function boundsCenter(bounds: ReturnType<typeof boundsForRings>) {
  return {
    lon: (bounds.minLon + bounds.maxLon) / 2,
    lat: (bounds.minLat + bounds.maxLat) / 2
  };
}

function boundsDiagonal(bounds: ReturnType<typeof boundsForRings>) {
  return distanceDegrees({ lat: bounds.minLat, lon: bounds.minLon }, { lat: bounds.maxLat, lon: bounds.maxLon });
}

function distanceDegrees(first: { lat: number; lon: number }, second: { lat: number; lon: number }) {
  const meanLat = THREE.MathUtils.degToRad((first.lat + second.lat) / 2);
  const eastWest = (first.lon - second.lon) * Math.max(0.18, Math.cos(meanLat));
  const northSouth = first.lat - second.lat;
  return Math.sqrt(eastWest * eastWest + northSouth * northSouth);
}

function pointInLayoutRing(lon: number, lat: number, ring: LayoutRing) {
  let inside = false;

  for (let current = 0, previous = ring.length - 1; current < ring.length; previous = current++) {
    const [currentLon, currentLat] = ring[current];
    const [previousLon, previousLat] = ring[previous];
    const intersects =
      currentLat > lat !== previousLat > lat &&
      lon < ((previousLon - currentLon) * (lat - currentLat)) / (previousLat - currentLat) + currentLon;

    if (intersects) {
      inside = !inside;
    }
  }

  return inside;
}

function ringBelongsToLayoutCluster(record: LayoutRingRecord, anchorRing: LayoutRingRecord, nearbyLimit: number) {
  const centerDistance = distanceDegrees(record.center, anchorRing.center);
  const boundsDistance = distanceDegrees(boundsCenter(record.bounds), boundsCenter(anchorRing.bounds));
  return Math.min(centerDistance, boundsDistance) <= nearbyLimit;
}

function spansForLat(rings: LayoutRing[], lat: number) {
  const spans = rings.flatMap((ring) => {
    const intersections: number[] = [];

    for (let current = 0, previous = ring.length - 1; current < ring.length; previous = current++) {
      const [currentLon, currentLat] = ring[current];
      const [previousLon, previousLat] = ring[previous];

      if ((currentLat > lat) !== (previousLat > lat)) {
        const lon =
          currentLon + ((previousLon - currentLon) * (lat - currentLat)) / (previousLat - currentLat);
        intersections.push(lon);
      }
    }

    intersections.sort((first, second) => first - second);

    const ringSpans: LayoutSpan[] = [];
    for (let index = 0; index < intersections.length - 1; index += 2) {
      const startLon = intersections[index];
      const endLon = intersections[index + 1];
      const width = endLon - startLon;

      if (width > 0.005) {
        ringSpans.push({ startLon, endLon, width });
      }
    }

    return ringSpans;
  });

  return mergeSpans(spans);
}

function mergeSpans(spans: LayoutSpan[]) {
  const sortedSpans = [...spans].sort((first, second) => first.startLon - second.startLon);
  const merged: LayoutSpan[] = [];

  sortedSpans.forEach((span) => {
    const previous = merged[merged.length - 1];

    if (previous && span.startLon <= previous.endLon) {
      previous.endLon = Math.max(previous.endLon, span.endLon);
      previous.width = previous.endLon - previous.startLon;
      return;
    }

    merged.push({ ...span });
  });

  return merged;
}

function totalSpanWidth(spans: LayoutSpan[]) {
  return spans.reduce((sum, span) => sum + span.width, 0);
}

function estimateRowCount(count: number, bounds: ReturnType<typeof boundsForRings>, layoutMode: GlobeBillboardLayoutMode) {
  const meanLat = (bounds.minLat + bounds.maxLat) / 2;
  const latSpan = Math.max(0.4, bounds.maxLat - bounds.minLat);
  const lonSpan = Math.max(0.4, (bounds.maxLon - bounds.minLon) * Math.cos(THREE.MathUtils.degToRad(meanLat)));
  const aspect = clamp(lonSpan / latSpan, 0.34, 3.6);
  const rowBias = layoutMode === "flat" ? 1.26 : 1.08;
  const densityRows = Math.ceil(Math.sqrt(count) * (layoutMode === "flat" ? 1.28 : 1.08));
  const rows = Math.max(Math.ceil(Math.sqrt(count / aspect) * rowBias), densityRows);

  return clamp(rows, 1, count);
}

function makeLayoutRows(rings: LayoutRing[], count: number, layoutMode: GlobeBillboardLayoutMode) {
  const bounds = boundsForRings(rings);

  if (!Number.isFinite(bounds.minLat) || count === 0) {
    return [];
  }

  const rowCount = estimateRowCount(count, bounds, layoutMode);
  const latSpan = bounds.maxLat - bounds.minLat;

  return Array.from({ length: rowCount }, (_, rowIndex) => {
    const baseLat = bounds.maxLat - ((rowIndex + 0.5) / rowCount) * latSpan;
    const retryStep = latSpan / Math.max(rowCount * 2, 1);
    const candidateLats = [
      baseLat,
      baseLat - retryStep * 0.45,
      baseLat + retryStep * 0.45,
      baseLat - retryStep * 0.9,
      baseLat + retryStep * 0.9
    ];

    for (const candidateLat of candidateLats) {
      if (candidateLat <= bounds.minLat || candidateLat >= bounds.maxLat) {
        continue;
      }

      const spans = spansForLat(rings, candidateLat);

      if (spans.length > 0) {
        const planarWidth = totalSpanWidth(spans) * Math.max(0.22, Math.cos(THREE.MathUtils.degToRad(candidateLat)));
        return { rowIndex, lat: candidateLat, spans, width: planarWidth };
      }
    }

    return null;
  }).filter((row): row is LayoutRow => Boolean(row));
}

function allocateItemsToRows(rows: LayoutRow[], count: number) {
  if (rows.length === 0 || count === 0) {
    return [];
  }

  const allocations = rows.map(() => 0);
  const guaranteedRows = Math.min(rows.length, count);

  for (let index = 0; index < guaranteedRows; index += 1) {
    allocations[index] = 1;
  }

  let remaining = count - guaranteedRows;

  if (remaining <= 0) {
    return allocations;
  }

  const weightedRows = rows.map((row, index) => ({
    index,
    weight: Math.pow(Math.max(row.width, 0.01), 0.92)
  }));
  const totalWeight = weightedRows.reduce((sum, row) => sum + row.weight, 0);
  const proportionalSlots = remaining;
  const fractional = weightedRows.map((row) => {
    const exact = (proportionalSlots * row.weight) / totalWeight;
    const whole = Math.floor(exact);
    allocations[row.index] += whole;
    return { index: row.index, remainder: exact - whole, whole };
  });

  remaining -= fractional.reduce((sum, row) => sum + row.whole, 0);
  fractional.sort((first, second) => second.remainder - first.remainder);

  for (let index = 0; index < remaining; index += 1) {
    allocations[fractional[index % fractional.length].index] += 1;
  }

  return allocations;
}

function pickLonInSpans(spans: LayoutSpan[], slotIndex: number, slotCount: number, stableId: string) {
  const totalWidth = totalSpanWidth(spans);

  if (totalWidth <= 0) {
    return spans[0]?.startLon ?? 0;
  }

  const slotWidth = totalWidth / Math.max(slotCount, 1);
  const phase = ((stableHash(stableId) % 100) / 100 - 0.5) * slotWidth * 0.18;
  let target = clamp((slotIndex + 0.5) * slotWidth + phase, slotWidth * 0.14, totalWidth - slotWidth * 0.14);

  for (const span of spans) {
    const spanPadding = Math.min(span.width * 0.18, slotWidth * 0.34);
    const usableStart = span.startLon + spanPadding;
    const usableEnd = span.endLon - spanPadding;
    const usableWidth = Math.max(0.001, usableEnd - usableStart);

    if (target <= span.width) {
      return clamp(span.startLon + target, usableStart, usableStart + usableWidth);
    }

    target -= span.width;
  }

  const lastSpan = spans[spans.length - 1];
  return (lastSpan.startLon + lastSpan.endLon) / 2;
}

function tangentBasis(lat: number, lon: number) {
  const normal = latLonToVector3(lat, lon, 1).normalize();
  let east = latLonToVector3(lat, lon + 0.1, 1).sub(normal).normalize();

  if (east.lengthSq() < 0.0001) {
    east = new THREE.Vector3(1, 0, 0);
  }

  let north = latLonToVector3(Math.min(lat + 0.1, 89.9), lon, 1).sub(normal).normalize();

  if (north.lengthSq() < 0.0001) {
    north = new THREE.Vector3(0, 1, 0);
  }

  return { normal, east, north };
}

function positionOnGlobe(
  coordinate: { lat: number; lon: number },
  eastOffset: number,
  northOffset: number,
  radius: number
) {
  const basis = tangentBasis(coordinate.lat, coordinate.lon);
  const position = basis.normal
    .clone()
    .multiplyScalar(radius)
    .add(basis.east.clone().multiplyScalar(eastOffset))
    .add(basis.north.clone().multiplyScalar(northOffset))
    .normalize()
    .multiplyScalar(radius);

  return { position, ...basis };
}

function standingQuaternion(normal: THREE.Vector3, east: THREE.Vector3, north: THREE.Vector3) {
  const tilt = THREE.MathUtils.degToRad(26);
  const xAxis = east.clone().normalize();
  const zAxis = normal
    .clone()
    .multiplyScalar(Math.cos(tilt))
    .sub(north.clone().multiplyScalar(Math.sin(tilt)))
    .normalize();
  const yAxis = zAxis.clone().cross(xAxis).normalize();
  const matrix = new THREE.Matrix4().makeBasis(xAxis, yAxis, zAxis);
  return new THREE.Quaternion().setFromRotationMatrix(matrix);
}

function PosterCardMesh<TPayload>({
  item,
  imageUrl,
  autoScale,
  stackIndex,
  countryActive,
  selected,
  billboardScale,
  onItemHover,
  onItemClick
}: PosterCardMeshProps<TPayload>) {
  const cardRef = useRef<THREE.Group>(null);
  const { gl } = useThree();
  const [texture, setTexture] = useState<THREE.Texture>(() => makePosterPlaceholderTexture(item.id));
  const worldPositionRef = useRef(new THREE.Vector3());
  const raised = selected;
  const renderOrder = raised ? 1200 : stackIndex;

  useEffect(() => {
    let active = true;
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");
    loader.load(
      imageUrl,
      (loadedTexture) => {
        configurePosterTexture(loadedTexture, gl);

        if (active) {
          setTexture(loadedTexture);
        } else {
          loadedTexture.dispose();
        }
      },
      undefined,
      () => {
        if (active) {
          setTexture(makePosterPlaceholderTexture(item.id));
        }
      }
    );

    return () => {
      active = false;
    };
  }, [gl, imageUrl, item.id]);

  useEffect(() => () => texture.dispose(), [texture]);

  useFrame(({ camera, size }) => {
    if (!cardRef.current) {
      return;
    }

    const worldPosition = worldPositionRef.current;
    cardRef.current.getWorldPosition(worldPosition);
    const cameraDistance = camera.position.distanceTo(worldPosition);
    const perspectiveCamera = camera as THREE.PerspectiveCamera;
    const baseHeightPixels = 52;
    const cardBoost = (countryActive ? 1.12 : 1) * (raised ? 1.18 : 1);
    const targetHeightPixels = baseHeightPixels * billboardScale * autoScale * cardBoost;
    const worldHeight = perspectiveCamera.isPerspectiveCamera
      ? (2 * Math.tan(THREE.MathUtils.degToRad(perspectiveCamera.fov) / 2) * cameraDistance * targetHeightPixels) /
        size.height
      : 0.12 * billboardScale * autoScale * cardBoost;

    cardRef.current.scale.set(worldHeight * (36 / 52), worldHeight, 1);
    cardRef.current.position.z = raised ? 0.018 : 0;
  });

  const handlePointerEnter = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setCanvasCursor("pointer");
    onItemHover?.(item, pointerClientPosition(event));
  };

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    onItemHover?.(item, pointerClientPosition(event));
  };

  const handlePointerLeave = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setCanvasCursor("grab");
    onItemHover?.(null);
  };

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    onItemClick?.(item);
  };

  return (
    <group ref={cardRef}>
      <mesh renderOrder={renderOrder * 2} scale={[1.06, 1.045, 1]} position={[0, 0, -0.003]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          color={selected ? "#f2b45d" : "#121719"}
          depthTest={false}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
      <mesh
        renderOrder={renderOrder * 2 + 1}
        onClick={handleClick}
        onPointerDown={(event) => event.stopPropagation()}
        onPointerEnter={handlePointerEnter}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          map={texture}
          side={THREE.DoubleSide}
          depthTest={false}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function layoutItemsForCountry<TPayload>(
  countryItems: Array<GlobeBillboardItem<TPayload>>,
  coordinate: { lat: number; lon: number },
  layoutMode: GlobeBillboardLayoutMode,
  country?: CountryFeature
) {
  const sortedItems = [...countryItems].sort((first, second) => first.id.localeCompare(second.id));
  const count = sortedItems.length;
  const autoScale = Math.max(0.7, Math.min(1, 1.04 - Math.max(0, count - 10) * 0.018));

  if (country) {
    const countryLayout = layoutItemsAcrossCountry(sortedItems, coordinate, layoutMode, country, autoScale);

    if (countryLayout.length > 0) {
      return countryLayout;
    }
  }

  const columns = Math.max(1, Math.ceil(Math.sqrt(count * (layoutMode === "flat" ? 1.45 : 1.15))));
  const rows = Math.max(1, Math.ceil(count / columns));
  const compactScale = Math.max(0.48, Math.min(1, Math.sqrt(8 / Math.max(count, 1))));
  const columnSpacing = (layoutMode === "flat" ? 0.092 : 0.072) * compactScale;
  const rowSpacing = (layoutMode === "flat" ? 0.072 : 0.058) * compactScale;
  const radius = layoutMode === "flat" ? 2.026 : 2.04;

  return sortedItems.map((item, index) => {
    const row = Math.floor(index / columns);
    const column = index % columns;
    const rowItemCount = row === rows - 1 ? count - row * columns : columns;
    const centerColumn = (rowItemCount - 1) / 2;
    const centerRow = (rows - 1) / 2;
    const stagger = (row % 2 === 0 ? -0.16 : 0.16) * columnSpacing;
    const jitter = (((stableHash(item.id) % 101) / 100 - 0.5) * columnSpacing * 0.18);
    const eastOffset = (column - centerColumn) * columnSpacing + stagger + jitter;
    const northOffset = (centerRow - row) * rowSpacing;
    const layout = positionOnGlobe(coordinate, eastOffset, northOffset, radius);
    const lat = vector3ToLatLon(layout.position).lat;

    return {
      item,
      position: layout.position,
      quaternion:
        layoutMode === "standing"
          ? standingQuaternion(layout.normal, layout.east, layout.north)
          : new THREE.Quaternion(),
      autoScale,
      stackIndex: 24 + row * 6 + Math.round((90 - lat) * 0.36)
    };
  });
}

function layoutItemsAcrossCountry<TPayload>(
  sortedItems: Array<GlobeBillboardItem<TPayload>>,
  coordinate: { lat: number; lon: number },
  layoutMode: GlobeBillboardLayoutMode,
  country: CountryFeature,
  autoScale: number
): Array<PositionedBillboard<TPayload>> {
  const rings = makeLayoutRings(country, coordinate);
  const rows = makeLayoutRows(rings, sortedItems.length, layoutMode);

  if (rows.length === 0) {
    return [];
  }

  const allocations = allocateItemsToRows(rows, sortedItems.length);
  const radius = layoutMode === "flat" ? 2.018 : 2.028;
  let itemIndex = 0;

  return rows.flatMap((row, visibleRowIndex) => {
    const rowItemCount = allocations[visibleRowIndex] ?? 0;

    return Array.from({ length: rowItemCount }, (_, slotIndex) => {
      const item = sortedItems[itemIndex];
      itemIndex += 1;

      const lon = wrapLongitude(pickLonInSpans(row.spans, slotIndex, rowItemCount, `${country.id}-${item.id}`));
      const lat = row.lat;
      const layout = positionOnGlobe({ lat, lon }, 0, 0, radius);
      const stackIndex = 24 + row.rowIndex * 8 + Math.round((90 - lat) * 0.32) + slotIndex;

      return {
        item,
        position: layout.position,
        quaternion:
          layoutMode === "standing"
            ? standingQuaternion(layout.normal, layout.east, layout.north)
            : new THREE.Quaternion(),
        autoScale,
        stackIndex
      };
    });
  });
}

function BillboardItem<TPayload>({
  item,
  position,
  quaternion,
  layoutMode,
  autoScale,
  stackIndex,
  countryActive,
  selected,
  billboardScale,
  showBacksideBillboards,
  onItemHover,
  onItemClick
}: BillboardItemProps<TPayload>) {
  const groupRef = useRef<THREE.Group>(null);
  const worldPositionRef = useRef(new THREE.Vector3());
  const cameraDirectionRef = useRef(new THREE.Vector3());
  const [frontFacing, setFrontFacing] = useState(true);
  const handleSelect = (event: ThreeEvent<MouseEvent | PointerEvent>) => {
    event.stopPropagation();
    onItemClick?.(item);
  };

  useLayoutEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.copy(position);
      groupRef.current.quaternion.copy(quaternion);
    }
  }, [position, quaternion]);

  useFrame(({ camera }) => {
    if (showBacksideBillboards) {
      if (!frontFacing) {
        setFrontFacing(true);
      }
      return;
    }

    if (!groupRef.current) {
      return;
    }

    const worldPosition = worldPositionRef.current;
    groupRef.current.getWorldPosition(worldPosition);
    const cameraDirection = cameraDirectionRef.current.copy(camera.position).normalize();
    const itemDirection = worldPosition.normalize();
    const facingScore = itemDirection.dot(cameraDirection);

    if (frontFacing && facingScore < -0.08) {
      setFrontFacing(false);
    } else if (!frontFacing && facingScore > 0.08) {
      setFrontFacing(true);
    }
  });

  const shouldShowContent = showBacksideBillboards || frontFacing;
  const card = shouldShowContent && item.imageUrl ? (
    <PosterCardMesh
      item={item}
      imageUrl={item.imageUrl}
      autoScale={autoScale}
      stackIndex={stackIndex}
      countryActive={countryActive}
      selected={selected}
      billboardScale={billboardScale}
      onItemHover={onItemHover}
      onItemClick={onItemClick}
    />
  ) : null;

  return (
    <group ref={groupRef}>
      {layoutMode === "flat" ? <Billboard follow lockX={false} lockY={false} lockZ={false}>{card}</Billboard> : card}
      {shouldShowContent && !item.imageUrl ? (
        <mesh onClick={handleSelect} onPointerDown={handleSelect} scale={selected ? [0.32, 0.44, 1] : [0.23, 0.32, 1]}>
          <planeGeometry />
          <meshBasicMaterial color={fallbackColor(item.id)} side={THREE.DoubleSide} />
        </mesh>
      ) : null}
    </group>
  );
}

export function BillboardLayer<TPayload>({
  items,
  countries,
  countryCoordinates,
  hoveredCountryId,
  selectedItemId,
  billboardScale = 1,
  billboardLayout = "flat",
  showBacksideBillboards = false,
  onItemHover,
  onItemClick
}: BillboardLayerProps<TPayload>) {
  const hoveredCountryCode = countryIdToAlpha2(hoveredCountryId);
  const positionedItems = useMemo(() => {
    const byCountry = new Map<string, Array<GlobeBillboardItem<TPayload>>>();
    const countriesByCode = new Map<string, CountryFeature>();

    countries.forEach((country) => {
      const countryCode = countryIdToAlpha2(country.id);

      if (countryCode) {
        countriesByCode.set(countryCode, country);
      }
    });

    items.forEach((item) => {
      const countryItems = byCountry.get(item.countryCode) ?? [];
      countryItems.push(item);
      byCountry.set(item.countryCode, countryItems);
    });

    return Array.from(byCountry.entries()).flatMap(([countryCode, countryItems]) => {
      const coordinate = countryCoordinates[countryCode];

      if (!coordinate) {
        return [];
      }

      return layoutItemsForCountry(countryItems, coordinate, billboardLayout, countriesByCode.get(countryCode));
    });
  }, [billboardLayout, countries, countryCoordinates, items]);

  return (
    <>
      {positionedItems.map(({ item, position, quaternion, autoScale, stackIndex }) => {
        const selected = item.id === selectedItemId;

        return (
          <BillboardItem
            key={item.id}
            item={item}
            position={position}
            quaternion={quaternion}
            layoutMode={billboardLayout}
            autoScale={autoScale}
            stackIndex={stackIndex}
            countryActive={Boolean(hoveredCountryCode && item.countryCode === hoveredCountryCode)}
            selected={selected}
            billboardScale={billboardScale}
            showBacksideBillboards={showBacksideBillboards}
            onItemHover={onItemHover}
            onItemClick={onItemClick}
          />
        );
      })}
    </>
  );
}
