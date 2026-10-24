import type { GlobeSpot } from '@models/globe';

const clamp = (v: number, min: number, max: number): number => Math.max(min, Math.min(max, v));

export function targetFor(spot: GlobeSpot, w: number, alpha: number): [number, number, number] {
  const offset = (w < 640 && spot.viewNarrow) || spot.view || [0, 0];
  const phi = clamp(alpha - (spot.lat + offset[1]), alpha - 80, alpha - 5);
  return [-(spot.lon + offset[0]), phi, 0];
}
