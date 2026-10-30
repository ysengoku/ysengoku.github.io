// Drag: moving to the next spot needs this distance (px) or this speed (px/ms)
const DRAG_MIN_DISTANCE = 24;
const DRAG_MIN_SPEED = 0.4;

export class DragTracker {
  private x = 0;
  private t = 0;

  constructor(x: number, timestamp: number) {
    this.x = x;
    this.t = timestamp;
  }

  dx(x: number): number {
    return x - this.x;
  }

  direction(x: number, t: number): 1 | -1 | 0 {
    const dx = this.dx(x);
    const dt = t - this.t;

    // Neither far enough nor fast enough: settle back on the current spot
    if (Math.abs(dx) < DRAG_MIN_DISTANCE && Math.abs(dx) / dt < DRAG_MIN_SPEED) {
      return 0;
    }
    // Dragged left: the next spot (to the east) comes into view
    if (dx < 0) return 1;
    // Dragged right: the previous spot (to the west) comes into view
    return -1;
  }
}
