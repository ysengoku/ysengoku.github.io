export interface GlobeSpot {
  id: 'about' | 'background' | 'skills' | 'projects';
  labelKey: string;
  summaryKey: string;
  lon: number;
  lat: number;
  view?: [number, number];
  viewNarrow?: [number, number];
}

export interface SpotPlacement {
  x: number;
  y: number;
  visible: boolean;
}
