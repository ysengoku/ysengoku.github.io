export interface GlobeStop {
  id: 'about' | 'experience' | 'skills' | 'projects';
  labelKey: string;
  lon: number;
  lat: number;
  summaryKey: string;
  textKey: string;
  view?: [number, number];
  viewNarrow?: [number, number];
}
