export type CountryCoordinateMap = Record<string, { lat: number; lon: number }>;

export interface CountryFeature {
  id: string;
  name: string;
  polygons: Array<Array<[number, number]>>;
}

export interface GlobeBillboardItem<TPayload = unknown> {
  id: string;
  countryCode: string;
  year?: number;
  imageUrl?: string;
  positionOffset?: [number, number, number];
  payload: TPayload;
}

export interface GlobeCoreProps<TPayload = unknown> {
  items: Array<GlobeBillboardItem<TPayload>>;
  countryCoordinates?: CountryCoordinateMap;
  focusedCountryId?: string | null;
  hoveredCountryId?: string | null;
  selectedItemId?: string | null;
  billboardScale?: number;
  enableGlobeShading?: boolean;
  enableAtmosphere?: boolean;
  showBacksideBillboards?: boolean;
  polarAngleLimit?: number;
  onCountryHover?: (country: CountryFeature | null) => void;
  onCountryClick?: (country: CountryFeature | null) => void;
  onItemHover?: (item: GlobeBillboardItem<TPayload> | null, event?: { clientX: number; clientY: number }) => void;
  onItemClick?: (item: GlobeBillboardItem<TPayload>) => void;
}
