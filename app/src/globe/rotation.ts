import { globeSpots } from '@data/globeData';
import type { GlobeSpot } from '@models/globe';

const clamp = (v: number, min: number, max: number): number => Math.max(min, Math.min(max, v));

// A spot passed by less than this (degrees) still counts as ahead
const OVERSHOOT_DEG = 15;

// Wraps an angle into -180..180
const wrap180 = (deg: number): number => ((((deg + 180) % 360) + 360) % 360) - 180;

export function targetFor(spot: GlobeSpot, w: number, alpha: number): [number, number, number] {
  const offset = (w < 640 && spot.viewNarrow) || spot.view || [0, 0];
  const phi = clamp(alpha - (spot.lat + offset[1]), alpha - 80, alpha - 5);
  return [-(spot.lon + offset[0]), phi, 0];
}

// The first spot ahead of the globe's current position in the drag direction (the start spot excluded).
// A spot passed by less than 15 degrees still counts, so an overshoot settles back instead of spinning on.
export function spotAhead(
  currentLambda: number,
  dir: 1 | -1,
  startId: GlobeSpot['id'],
  rotationFor: (id: GlobeSpot['id']) => [number, number, number]
): GlobeSpot['id'] {
  let bestId: GlobeSpot['id'] | null = null;
  let bestOff = Infinity;
  for (const spot of globeSpots) {
    if (startId === spot.id) continue;
    // How far the globe still has to turn in the drag direction to reach this spot (negative = already passed)
    const off = wrap180((currentLambda - rotationFor(spot.id)[0]) * dir);
    if (off > -OVERSHOOT_DEG && off < bestOff) {
      bestOff = off;
      bestId = spot.id;
    }
  }
  if (bestId) return bestId;

  // Nothing ahead: fall back to the start spot's neighbour in the drag direction
  const startIndex = globeSpots.findIndex((s) => s.id === startId);
  return globeSpots[(startIndex + dir + globeSpots.length) % globeSpots.length].id;
}
