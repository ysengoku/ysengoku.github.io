<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import { GlobeRenderer } from '@globe/GlobeRenderer';
  import { useGlobeStore } from '@store/globe';

  const canvas = ref<HTMLCanvasElement | null>(null);
  const globeStore = useGlobeStore();
  let renderer: GlobeRenderer | null = null;

  const handleResize = () => {
    renderer?.resize();
    renderer?.draw(globeStore.currentStopId);
  };

  onMounted(() => {
    const stage = document.getElementById('stage');
    if (!canvas.value || !stage) return;

    renderer = new GlobeRenderer(canvas.value, stage);
    renderer.draw(globeStore.currentStopId);

    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });
</script>

<template>
  <canvas id="globe" ref="canvas" aria-hidden="true"></canvas>
</template>

<style>
  canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
