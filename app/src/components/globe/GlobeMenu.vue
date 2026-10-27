<script setup lang="ts">
  import { ref, onMounted, onUnmounted, watch } from 'vue';
  import GlobeSpotButton from './GlobeSpotButton.vue';
  import { GlobeRenderer } from '@globe/GlobeRenderer';
  import { globeSpots } from '@data/globeData';
  import { navigateWithTransition, prefersReducedMotion } from '@utils/viewTransition';
  import { useGlobeStore } from '@store/globe';
  import type { SpotPlacement } from '@models/globe';

  const globeStore = useGlobeStore();
  let renderer: GlobeRenderer | null = null;
  let animationFrameId: number | null = null;
  const canvas = ref<HTMLCanvasElement | null>(null);
  const spotPlacements = ref<Array<SpotPlacement>>([]);

  const handleResize = () => {
    if (!renderer) return;
    renderer.resize();
    renderer.drawAt(renderer.rotationFor(globeStore.currentSpotId));
    spotPlacements.value = renderer.getSpotPlacements();
  };

  onMounted(() => {
    const stage = document.getElementById('stage');
    if (!canvas.value || !stage) return;

    renderer = new GlobeRenderer(canvas.value, stage);
    renderer.drawAt(renderer.rotationFor(globeStore.currentSpotId));
    spotPlacements.value = renderer.getSpotPlacements();

    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
  });

  watch(
    () => globeStore.currentSpotId,
    (newId) => {
      if (!renderer) return;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      const start = renderer.currentRotation();
      const end = renderer.rotationFor(newId);
      const startTime = performance.now();
      const duration = prefersReducedMotion() ? 0 : 600;
      let lambdaDiff = end[0] - start[0];
      if (lambdaDiff > 180) lambdaDiff -= 360;
      if (lambdaDiff < -180) lambdaDiff += 360;
      const phiDiff = end[1] - start[1];

      const frame = (now: number) => {
        if (!renderer) return;
        const time = duration ? Math.min(1, (now - startTime) / duration) : 1;
        renderer.drawAt([start[0] + lambdaDiff * time, start[1] + phiDiff * time, start[2]]);
        spotPlacements.value = renderer.getSpotPlacements();
        if (time < 1) {
          animationFrameId = requestAnimationFrame(frame);
        }
        if (time >= 1 && globeStore.pendingPage) {
          navigateWithTransition(`/${globeStore.pendingPage}`);
          globeStore.$patch({ pendingPage: null });
        }
      };
      animationFrameId = requestAnimationFrame(frame);
    }
  );
</script>

<template>
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
      :active="item.id === globeStore.currentSpotId"
    />
  </div>
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
