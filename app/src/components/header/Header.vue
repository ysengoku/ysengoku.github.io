<template>
  <header ref="headerRef" id="header" class="relative w-full p-8">
    <div ref="vantaRef" class="absolute inset-0 z-0"></div>
    <div class="relative z-10 m-8 flex flex-col items-center justify-center h-full text-center text-white">
      <div class="text-3xl mb-4">Full-stack Developer</div>
      <h2 class="text-5xl font-bold mb-16">Yuko SENGOKU</h2>
      <a class="btn" href="https://github.com/ysengoku">My GitHub</a>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue'
  import * as THREE from 'three'

  const vantaRef = ref<HTMLElement | null>(null)
  const headerRef = ref<HTMLElement | null>(null)
  let vantaEffect: any = null

  onMounted(() => {
    const { clientHeight, clientWidth } = headerRef.value;
    if (vantaRef.value && window.VANTA) {
      vantaEffect = (window as any).VANTA.NET({
        el: vantaRef.value,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: clientHeight,
        minWidth: clientWidth,
        scale: 1,
        scaleMobile: 1,
        color: "#8C3047",
        backgroundColor: "#07293D",
        points: 20,
        maxDistance: 20,
        spacing: 16
      })
    }
  })

  onUnmounted(() => {
    if (vantaEffect) vantaEffect.destroy()
  })
</script>

<style scoped>
  #header {
    padding-top: 10.5rem;
    padding-bottom: 6rem;
  }

  @media (min-width: 768px) {
      #header {
        padding-top: 17rem;
        padding-bottom: 12.5rem;
    }
  }
</style>
