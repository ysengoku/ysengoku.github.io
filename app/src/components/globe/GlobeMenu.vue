<script setup lang="ts">
  import { ref, onMounted, onUnmounted, useTemplateRef, watch } from 'vue';
  import GlobeSpotButton from './GlobeSpotButton.vue';
  import { DragTracker } from '@globe/DragTracker';
  import { navigateWithTransition, prefersReducedMotion } from '@utils/viewTransition';
  import { globeSpots } from '@data/globeData';
  import { GlobeRenderer } from '@globe/GlobeRenderer';
  import { spotAhead } from '@globe/rotation';
  import { useGlobeStore } from '@store/globe';
  import { WheelTracker } from '@globe/WheelTracker';
  import type { GlobeSpot, SpotPlacement } from '@models/globe';

  // Rotation animation to a spot (ms)
  const ROTATE_DURATION_MS = 600;
  // Drag: degrees of longitude per pixel while dragging
  const DRAG_DEG_PER_PX = 0.2;

  const globeStore = useGlobeStore();
  let renderer: GlobeRenderer | null = null;
  let dragTracker: DragTracker | null = null;
  const wheelTracker = new WheelTracker();
  let animationFrameId: number | null = null;
  const canvas = ref<HTMLCanvasElement | null>(null);
  const stage = useTemplateRef<HTMLElement>('stage');
  const spotPlacements = ref<Array<SpotPlacement>>([]);
  // The spot the globe has settled on; its card is shown only once the globe stops there
  const arrivedSpotId = ref<GlobeSpot['id'] | null>(globeStore.currentSpotId);

  let startRotation = [0, 0, 0] as [number, number, number];

  const stopRotation = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  };

  const rotateTo = (spotId: GlobeSpot['id']) => {
    if (!renderer) return;
    stopRotation();
    const from = renderer.currentRotation();
    const to = renderer.rotationFor(spotId);
    const startTime = performance.now();
    const duration = prefersReducedMotion() ? 0 : ROTATE_DURATION_MS;
    // Difference in longitude (lambda)
    let lambdaDiff = to[0] - from[0];
    // Wrap into -180..180 so the globe always turns the shorter way round
    if (lambdaDiff > 180) lambdaDiff -= 360;
    if (lambdaDiff < -180) lambdaDiff += 360;
    // Difference in latitude (phi)
    const phiDiff = to[1] - from[1];

    // Already facing the spot (e.g. a click without dragging): no need to travel
    if (Math.abs(lambdaDiff) < 0.01 && Math.abs(phiDiff) < 0.01) {
      arrivedSpotId.value = spotId;
      return;
    }
    // Hide the card while travelling
    arrivedSpotId.value = null;

    const frame = (now: number) => {
      if (!renderer) return;
      // Progress from 0 to 1 (jumps straight to 1 when motion is reduced)
      const time = duration ? Math.min(1, (now - startTime) / duration) : 1;
      renderer.drawAt([from[0] + lambdaDiff * time, from[1] + phiDiff * time, from[2]]);
      spotPlacements.value = renderer.getSpotPlacements();
      if (time < 1) {
        animationFrameId = requestAnimationFrame(frame);
        return;
      }
      // Arrived: show the card
      arrivedSpotId.value = spotId;
      if (globeStore.pendingPage) {
        navigateWithTransition(`/${globeStore.pendingPage}`);
        globeStore.$patch({ pendingPage: null });
      }
    };
    animationFrameId = requestAnimationFrame(frame);
  };

  const startDrag = (e: PointerEvent) => {
    // Ignore right click, click footer and button
    if (
      !stage.value ||
      e.button !== 0 ||
      (e.target as Element).closest('footer') ||
      (e.target as Element).closest('button')
    ) {
      return;
    }

    stopRotation();
    stage.value.setPointerCapture(e.pointerId);
    dragTracker = new DragTracker(e.clientX, e.timeStamp);
    startRotation = renderer?.currentRotation() ?? [0, 0, 0];
  };

  const moveDrag = (e: PointerEvent) => {
    if (!dragTracker || !renderer) return;

    const dx = dragTracker.dx(e.clientX);
    const [lambda, phi, gamma] = startRotation;
    // Hide the card while the globe is being dragged
    if (dx !== 0 && arrivedSpotId.value) arrivedSpotId.value = null;
    // Only the longitude follows the pointer; latitude and tilt stay as they were
    renderer.drawAt([lambda + dx * DRAG_DEG_PER_PX, phi, gamma]);
    // Keep the pins on their spots while the globe turns
    spotPlacements.value = renderer.getSpotPlacements();
  };

  const endDrag = (e: PointerEvent) => {
    if (!dragTracker) return;

    const dir = dragTracker.direction(e.clientX, e.timeStamp);
    dragTracker = null;
    if (dir === 0) {
      rotateTo(globeStore.currentSpotId);
      return;
    }

    if (!renderer) return;
    const currentLambda = renderer.currentRotation()[0];
    const target = spotAhead(currentLambda, dir, globeStore.currentSpotId, (id) =>
      renderer!.rotationFor(id)
    );
    globeStore.updateCurrentSpot(target);
  };

  const onWheel = (e: WheelEvent) => {
    // Keep horizontal swipes from triggering the browser's back/forward gesture
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) e.preventDefault();

    switch (wheelTracker.track(e.deltaX, e.timeStamp)) {
      case 0:
        return;
      case 1:
        globeStore.goToNextSpot();
        return;
      case -1:
        globeStore.goToPreviousSpot();
    }
  };

  const handleResize = () => {
    if (!renderer) return;
    renderer.resize();
    renderer.drawAt(renderer.rotationFor(globeStore.currentSpotId));
    spotPlacements.value = renderer.getSpotPlacements();
  };

  onMounted(() => {
    if (!canvas.value || !stage.value) return;
    renderer = new GlobeRenderer(canvas.value, stage.value);
    renderer.drawAt(renderer.rotationFor(globeStore.currentSpotId));
    spotPlacements.value = renderer.getSpotPlacements();

    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    stopRotation();
  });

  watch(
    () => globeStore.currentSpotId,
    (newId) => {
      rotateTo(newId);
    }
  );
</script>

<template>
  <section
    id="stage"
    ref="stage"
    class="flex flex-col"
    @pointerdown="startDrag"
    @pointermove="moveDrag"
    @pointerup="endDrag"
    @pointercancel="endDrag"
    @wheel="onWheel"
  >
    <div class="sky" aria-hidden="true">
      <div class="sky-layer"></div>
      <div class="sky-layer"></div>
      <div class="sky-layer"></div>
    </div>
    <canvas id="globe" ref="canvas" aria-hidden="true"></canvas>
    <div id="pins" class="pins">
      <GlobeSpotButton
        v-for="(item, index) in globeSpots"
        :key="item.id"
        :spot="item"
        :placement="spotPlacements[index]"
        :active="item.id === arrivedSpotId"
      />
    </div>
    <slot />
  </section>
</template>

<style scoped>
  canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
  }

  .pins {
    position: absolute;
    inset: 0;
  }

  .sky {
    position: absolute;
    inset: 0;
    pointer-events: none;
    mask-image: linear-gradient(to bottom, #000 40%, transparent 80%);
  }

  .sky-layer {
    position: absolute;
    inset: 0;
    background-repeat: repeat;
    animation: twinkle 4s ease-in-out infinite alternate;
  }

  .sky-layer:nth-child(1) {
    background-size: 320px 320px;
    background-image:
      radial-gradient(1.4px 1.4px at 51px 295px, var(--star), transparent),
      radial-gradient(1.4px 1.4px at 252px 89px, var(--star), transparent),
      radial-gradient(1.4px 1.4px at 298px 260px, var(--star), transparent),
      radial-gradient(1.4px 1.4px at 207px 314px, var(--star), transparent),
      radial-gradient(1.4px 1.4px at 13px 140px, var(--star), transparent);
  }

  .sky-layer:nth-child(2) {
    animation-duration: 5.3s;
    animation-delay: -2s;
    background-size: 480px 480px;
    background-image:
      radial-gradient(1.8px 1.8px at 342px 186px, var(--star), transparent),
      radial-gradient(1.8px 1.8px at 127px 365px, var(--star), transparent),
      radial-gradient(1.8px 1.8px at 430px 61px, var(--star), transparent),
      radial-gradient(1.8px 1.8px at 68px 153px, var(--star), transparent);
  }

  .sky-layer:nth-child(3) {
    animation-duration: 6.7s;
    animation-delay: -4s;
    background-size: 680px 680px;
    background-image:
      radial-gradient(2.2px 2.2px at 527px 123px, var(--star), transparent),
      radial-gradient(2.2px 2.2px at 163px 475px, var(--star), transparent),
      radial-gradient(2.2px 2.2px at 370px 625px, var(--star), transparent);
  }

  @keyframes twinkle {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sky-layer {
      animation: none;
    }
  }
</style>
