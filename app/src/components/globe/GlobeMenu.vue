<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import GlobeSpotButton from './GlobeSpotButton.vue';
  import { globeSpots } from '@data/globeData';
  import { GlobeRenderer } from '@globe/GlobeRenderer';
  import { useGlobeStore } from '@store/globe';
  import type { SpotPlacement } from '@models/globe';

  const canvas = ref<HTMLCanvasElement | null>(null);
  const spotPlacements = ref<Array<SpotPlacement>>([]);
  const globeStore = useGlobeStore();
  let renderer: GlobeRenderer | null = null;

  const handleResize = () => {
    renderer?.resize();
    renderer?.draw(globeStore.currentSpotId);
    if (renderer) {
      spotPlacements.value = renderer.getSpotPlacements();
    }
  };

  onMounted(() => {
    const stage = document.getElementById('stage');
    if (!canvas.value || !stage) return;

    renderer = new GlobeRenderer(canvas.value, stage);
    renderer.draw(globeStore.currentSpotId);
    spotPlacements.value = renderer.getSpotPlacements();

    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });
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
