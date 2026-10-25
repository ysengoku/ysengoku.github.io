import type { GeoPath } from 'd3-geo';
import type { GeometryObject, Topology } from 'topojson-specification';
import type { GlobeSpot, SpotPlacement } from '@models/globe';
import { geoOrthographic, geoPath, geoDistance } from 'd3-geo';
import { feature } from 'topojson-client';
import world from 'world-atlas/countries-110m.json';
import { globeSpots } from '@data/globeData';
import { targetFor } from './rotation';

const RAD_TO_DEG = 180 / Math.PI;
const COLOR_TOKENS = [
  'ocean',
  'ocean-deep',
  'land-n',
  'land-m',
  'land-s',
  'land-edge',
  'grid',
  'glow',
  'shade-hi',
  'shade-lo',
  'grain-a',
  'grain-b',
  'route',
] as const;
type ColorToken = (typeof COLOR_TOKENS)[number];
const topology = world as unknown as Topology<{ land: GeometryObject }>;
const land = feature(topology, topology.objects.land);

export class GlobeRenderer {
  private canvas: HTMLCanvasElement;
  private stage: HTMLElement;
  private ctx: CanvasRenderingContext2D;
  private path: GeoPath;
  private projection = geoOrthographic().clipAngle(90).precision(0.5);
  private colors = {} as Record<ColorToken, string>;
  private size = { W: 0, H: 0, R: 0, cx: 0, cy: 0, dpr: 1, alpha: 60 };
  private sphere = { type: 'Sphere' as const };

  // Route segments between consecutive points, closed back to the first so the trip goes all the way round.
  private route = {
    type: 'MultiLineString' as const,
    coordinates: globeSpots.map((s, i) => {
      const next = globeSpots[(i + 1) % globeSpots.length];
      return [
        [s.lon, s.lat],
        [next!.lon, next!.lat],
      ];
    }),
  };

  constructor(canvas: HTMLCanvasElement, stage: HTMLElement) {
    this.canvas = canvas;
    this.stage = stage;
    this.ctx = canvas.getContext('2d')!;
    this.path = geoPath(this.projection, this.ctx);
    this.layout();
    this.readColors();
  }

  resize(): void {
    this.layout();
  }

  rotationFor(spotId: GlobeSpot['id']): [number, number, number] {
    const stop = globeSpots.find((s) => s.id === spotId) ?? globeSpots[0];
    return targetFor(stop, this.size.W, this.size.alpha);
  }

  drawAt(rotation: [number, number, number]): void {
    this.projection.rotate(rotation);
    this.renderGlobe();
  }

  getSpotPlacements(): Array<SpotPlacement> {
    const placements: Array<SpotPlacement> = [];

    // Current rotation: lambda = horizontal (longitude), phi = vertical tilt (latitude)
    const [lambda, phi] = this.projection.rotate();
    // [lon, lat] of the point currently facing the viewer
    const center: [number, number] = [-lambda, -phi];

    globeSpots.forEach((s) => {
      const projectedPoint = this.projection([s.lon, s.lat]);
      if (!projectedPoint) {
        placements.push({ x: 0, y: 0, visible: false });
        return;
      }
      const [x, y] = projectedPoint;

      // On the visible half of the globe (less than 90° from the center), minus a small margin
      const onFrontSide = geoDistance([s.lon, s.lat], center) < Math.PI / 2 - 0.06;

      // Inside the screen: above the bottom edge, and at most 60px past the left/right edges
      const onScreen = y < this.size.H - 6 && x > -60 && x < this.size.W + 60;

      placements.push({ x: x, y: y, visible: onFrontSide && onScreen });
    });
    return placements;
  }

  private layout() {
    if (!this.stage) {
      return;
    }
    const r = this.stage.getBoundingClientRect();
    const narrow = r.width < 640;
    this.size.W = r.width;
    this.size.H = r.height;
    this.size.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.size.R = narrow
      ? Math.max(this.size.W * 0.9, this.size.H * 0.8)
      : Math.max(this.size.W * 0.58, this.size.H * 0.95);

    const capTop = this.size.H * (narrow ? 0.46 : 0.42); // y of the globe's apex
    this.size.cx = this.size.W / 2;
    this.size.cy = capTop + this.size.R;
    // Focus point, a bit below the apex: the active spot is placed there
    const focusY = capTop + Math.min(120, this.size.R * 0.13);
    this.size.alpha = Math.asin((this.size.cy - focusY) / this.size.R) * RAD_TO_DEG;

    this.canvas.width = Math.round(this.size.W * this.size.dpr);
    this.canvas.height = Math.round(this.size.H * this.size.dpr);
    this.projection.translate([this.size.cx, this.size.cy]).scale(this.size.R);
  }

  private readColors() {
    const style = getComputedStyle(document.documentElement);
    this.colors = Object.fromEntries(
      COLOR_TOKENS.map((k) => [k, style.getPropertyValue('--' + k).trim()])
    ) as Record<ColorToken, string>;
  }

  private renderGlobe() {
    const { W, H, dpr } = this.size;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.ctx.clearRect(0, 0, W, H);

    this.drawOcean();
    this.drawLand();
    this.drawShading();
    this.drawRoute();
  }

  private drawOcean() {
    const { R, cx, cy, dpr } = this.size;
    const gradient = this.ctx.createRadialGradient(cx - R * 0.25, cy - R * 0.7, R * 0.1, cx, cy, R);
    gradient.addColorStop(0, this.colors.ocean);
    gradient.addColorStop(1, this.colors['ocean-deep']);
    this.ctx.save();
    this.ctx.shadowColor = this.colors.glow; // atmosphere glow
    this.ctx.shadowBlur = 110 * dpr;
    this.ctx.beginPath();
    this.path(this.sphere);
    this.ctx.fillStyle = gradient;
    this.ctx.fill();
    this.ctx.restore();
  }

  private drawLand() {
    const { R, cy, dpr } = this.size;
    // north → south pastel gradient
    const gradient = this.ctx.createLinearGradient(0, cy - R, 0, cy - R * 0.1);
    gradient.addColorStop(0, this.colors['land-n']);
    gradient.addColorStop(0.5, this.colors['land-m']);
    gradient.addColorStop(1, this.colors['land-s']);
    this.ctx.save();
    this.ctx.shadowColor = this.colors['land-edge'];
    this.ctx.shadowBlur = 16 * dpr;
    if (typeof this.ctx.filter === 'string') {
      this.ctx.filter = 'blur(0.8px)';
    } // skipped where unsupported
    this.ctx.beginPath();
    this.path(land);
    this.ctx.fillStyle = gradient;
    this.ctx.fill();
    this.ctx.restore();
  }

  private drawShading() {
    const { R, cx, cy } = this.size;
    const gradient = this.ctx.createRadialGradient(
      cx - R * 0.35,
      cy - R * 0.8,
      R * 0.05,
      cx,
      cy,
      R
    );
    gradient.addColorStop(0, this.colors['shade-hi']);
    gradient.addColorStop(0.6, 'rgba(0,0,0,0)');
    gradient.addColorStop(1, this.colors['shade-lo']);
    this.ctx.beginPath();
    this.path(this.sphere);
    this.ctx.fillStyle = gradient;
    this.ctx.fill();
  }

  private drawRoute() {
    this.ctx.save();
    this.ctx.setLineDash([0.1, 9]); // round dots
    this.ctx.lineCap = 'round';
    this.ctx.beginPath();
    this.path(this.route);
    this.ctx.strokeStyle = this.colors.route;
    this.ctx.lineWidth = 4;
    this.ctx.stroke();
    this.ctx.restore();
  }
}
