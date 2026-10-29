<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { watch } from 'vue';
  import { globeSpots } from '@data/globeData';
  import { useGlobeStore } from '@store/globe';
  import Footer from '@components/Footer.vue';
  import GlobeMenu from '@components/globe/GlobeMenu.vue';
  import GlobePager from '@components/globe/GlobePager.vue';
  import Hero from '@components/Hero.vue';
  import Navbar from '@components/header/Navbar.vue';
  import PagePanel from '@components/content/PagePanel.vue';

  const globeStore = useGlobeStore();
  const route = useRoute();

  watch(
    () => route.path,
    (path) => {
      document.body.classList.toggle('page-open', path !== '/');
      const spot = globeSpots.find((s) => s.id === path.slice(1));
      if (spot) {
        globeStore.$patch({ currentSpotId: spot.id });
      }
    },
    { immediate: true }
  );
</script>

<template>
  <header class="sticky top-0 z-50">
    <Navbar />
  </header>

  <main class="block">
    <GlobeMenu>
      <Hero />
      <GlobePager />
      <Footer />
    </GlobeMenu>

    <PagePanel v-if="route.path !== '/'" />
  </main>
</template>
