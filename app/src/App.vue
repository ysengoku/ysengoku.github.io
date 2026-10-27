<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { onMounted, onUnmounted, watch } from 'vue';
  import { globeSpots } from '@data/globeData';
  import { navigateWithTransition } from '@utils/viewTransition';
  import { useGlobeStore } from '@store/globe';
  import { usePopupStore } from '@store/popup';
  import Footer from '@components/Footer.vue';
  import GlobeMenu from '@components/globe/GlobeMenu.vue';
  import GlobePager from '@components/globe/GlobePager.vue';
  import Hero from '@components/Hero.vue';
  import Navbar from '@components/header/Navbar.vue';
  import ProjectDetailComponent from '@components/content/projects/ProjectDetailComponent.vue';

  const popup = usePopupStore();
  const globeStore = useGlobeStore();
  const route = useRoute();

  function closePanel() {
    navigateWithTransition('/');
  }

  function onKeydown(e: KeyboardEvent) {
    if (popup.isOpen) return;
    if (e.key === 'Escape' && route.path !== '/') {
      closePanel();
    }
  }

  onMounted(() => window.addEventListener('keydown', onKeydown));
  onUnmounted(() => window.removeEventListener('keydown', onKeydown));

  watch(
    () => popup.isOpen,
    (isOpen) => {
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }
  );

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
    <section id="stage" class="flex flex-col">
      <GlobeMenu />
      <Hero />
      <GlobePager />
      <Footer />
    </section>

    <div v-if="route.path !== '/'" class="popover-backdrop" @click.self="closePanel">
      <div class="panel">
        <button
          type="button"
          class="block w-fit ml-auto pt-4 cursor-pointer"
          :aria-label="$t('a11y.close')"
          @click="closePanel"
        >
          <FontAwesomeIcon icon="xmark" />
        </button>
        <RouterView />
      </div>
    </div>

    <div v-if="popup.isOpen" class="popover-backdrop" @click="popup.close">
      <ProjectDetailComponent v-if="popup.type === 'project'" />
    </div>
  </main>
</template>

<style>
  .popover-backdrop {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 0;
    background: rgba(var(--ys-grey-600-rgb), 0.4);
    backdrop-filter: blur(1px);
    z-index: 1000;
  }

  .panel {
    position: fixed;
    top: calc(var(--nav-h) + 1vh);
    left: 5vw;
    right: 5vw;
    padding: 0 24px;
    max-height: 90vh;
    overflow-y: auto;
    background: var(--ys-grey-700);
    border-radius: 0.5rem;
    view-transition-name: spotcard;
  }

  ::view-transition-group(spotcard) {
    animation-duration: 0.45s;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  }
</style>
