// Trackpad: a pause this long (ms) ends a swipe
const WHEEL_GAP_MS = 200;
// Trackpad: total horizontal movement needed to move one spot
const WHEEL_MIN_DISTANCE = 50;
// Trackpad: after moving, a new swipe is accepted only after this time (ms),
// with an event stronger than WHEEL_NEW_SWIPE_MIN and WHEEL_NEW_SWIPE_RATIO times the fading inertia
const WHEEL_TAIL_MS = 450;
const WHEEL_NEW_SWIPE_MIN = 15;
const WHEEL_NEW_SWIPE_RATIO = 3;

export class WheelTracker {
  private sumX = 0; // total horizontal movement
  private lastTime = 0; // time of the last event
  private stepped = false; // already has moved
  private stepTime = 0; // when it moved
  private min = Infinity; // weakest event since then

  track(deltaX: number, timestamp: number): 1 | -1 | 0 {
    // How strong this single event is (inertia events get weaker and weaker)
    const strength = Math.abs(deltaX);
    // No event for a while: the previous swipe is over, start a new one
    if (timestamp - this.lastTime > WHEEL_GAP_MS) {
      this.startNewSwipe();
    }
    // Updated on every event, so a swipe lasts as long as events keep coming
    this.lastTime = timestamp;

    // Already moved during this swipe: the remaining events are usually inertia
    if (this.stepped) {
      // Remember the weakest inertia event so far
      this.min = Math.min(this.min, strength);
      // Still inertia: ignore it
      if (!this.isNewSwipe(strength, timestamp)) return 0;
      // New swipe: start counting again from this event
      this.startNewSwipe();
    }
    // Add up the movement so the hand's small wobbles cancel out
    this.sumX += deltaX;
    return this.step(strength, timestamp);
  }

  // After a while, an event much stronger than the fading inertia means a new swipe
  private isNewSwipe(strength: number, timestamp: number): boolean {
    return (
      timestamp - this.stepTime > WHEEL_TAIL_MS &&
      strength > WHEEL_NEW_SWIPE_MIN &&
      strength > this.min * WHEEL_NEW_SWIPE_RATIO
    );
  }

  private step(strength: number, timestamp: number): 1 | -1 | 0 {
    // Not far enough to move to another spot
    if (Math.abs(this.sumX) < WHEEL_MIN_DISTANCE) return 0;

    this.stepped = true;
    this.stepTime = timestamp;
    // Inertia starts from this strength
    this.min = strength;
    // Swiping left (positive deltaX) brings the next spot into view, like dragging left
    return this.sumX > 0 ? 1 : -1;
  }

  private startNewSwipe() {
    this.sumX = 0;
    this.stepped = false;
    this.stepTime = 0;
    this.min = Infinity;
  }
}
