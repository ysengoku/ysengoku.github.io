<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';

  interface VantaNetEffect {
    destroy: () => void;
    setOptions?: (options: any) => void;
    [key: string]: any;
  }

  const vantaRef = ref<HTMLElement | null>(null);
  const headerRef = ref<HTMLElement | null>(null);
  let vantaEffect: VantaNetEffect | null = null;

  onMounted(() => {
    const el = headerRef.value;
    if (el && vantaRef.value && (window as any).VANTA) {
      const { clientHeight, clientWidth } = el;
      vantaEffect = (window as any).VANTA.NET({
        el: vantaRef.value,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        height: '60vh',
        minHeight: clientHeight,
        minWidth: clientWidth,
        scale: 1,
        scaleMobile: 1,
        color: '#762338',
        backgroundColor: '#07293D',
        points: 20,
        maxDistance: 20,
        spacing: 16,
      });
    }
  });

  onUnmounted(() => {
    if (vantaEffect) vantaEffect.destroy();
  });
</script>

<template>
  <header id="header" ref="headerRef" class="relative w-full p-8">
    <div ref="vantaRef" class="absolute inset-0 z-0"></div>
    <div class="relative z-10 m-8 flex flex-col items-center justify-center h-full text-center">
      <div class="text-2xl md:text-3xl mb-4">Full-stack Developer</div>
      <h1 class="text-4xl md:text-6xl font-bold mb-16">Yuko SENGOKU</h1>
      <a class="btn" href="https://github.com/ysengoku">My GitHub</a>
    </div>
  </header>
</template>

<style scoped>
  #header {
    padding-top: 10.5rem;
    padding-bottom: 6rem;
    height: 70vh;
  }

  @media (min-width: 768px) {
    #header {
      padding-top: 17rem;
      padding-bottom: 12.5rem;
    }
  }
</style>
