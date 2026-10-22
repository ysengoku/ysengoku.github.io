import type { GlobeStop } from '@models/globe';

const clamp = (v: number, min: number, max: number): number => Math.max(min, Math.min(max, v));

export function targetFor(stop: GlobeStop, w: number, alpha: number): [number, number, number] {
  const offset = (w < 640 && stop.viewNarrow) || stop.view || [0, 0];
  const phi = clamp(alpha - (stop.lat + offset[1]), alpha - 80, alpha - 5);
  return [-(stop.lon + offset[0]), phi, 0];
}
