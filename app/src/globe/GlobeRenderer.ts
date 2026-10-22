import type { GeoPath } from 'd3-geo';
import type { GeometryObject, Topology } from 'topojson-specification';
import type { GlobeStop } from '@models/globe';
import { geoOrthographic, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import world from 'world-atlas/countries-110m.json';
import { globeStops } from '@data/globeData';
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
    coordinates: globeStops.map((s, i) => {
      const next = globeStops[(i + 1) % globeStops.length];
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

  draw(currentStopId: GlobeStop['id']) {
    const stop =
      globeStops.find((s) => s.id === currentStopId) ?? globeStops.find((s) => s.id === 'about');
    if (!stop) return;
    const rotation = targetFor(stop, this.size.W, this.size.alpha);
    this.projection.rotate(rotation);
    this.renderGlobe();
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
    // Focus point, a bit below the apex: the active stop is placed there
    const focusY = capTop + Math.min(120, this.size.R * 0.13);
    this.size.alpha = Math.asin((this.size.cy - focusY) / this.size.R) * RAD_TO_DEG;

    this.canvas.width = Math.round(this.size.W * this.size.dpr);
    this.canvas.height = Math.round(this.size.H * this.size.dpr);
    this.projection.translate([this.size.cx, this.size.cy]).scale(this.size.R);
    console.log(this.size);
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
