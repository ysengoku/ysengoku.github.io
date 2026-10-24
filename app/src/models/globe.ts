export interface GlobeSpot {
  id: 'about' | 'background' | 'skills' | 'projects';
  labelKey: string;
  lon: number;
  lat: number;
  summaryKey: string;
  textKey: string;
  view?: [number, number];
  viewNarrow?: [number, number];
}

export interface SpotPlacement {
  x: number;
  y: number;
  visible: boolean;
}
