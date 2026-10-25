<script setup lang="ts">
  import { usePopupStore } from '@store/popup';
  import { useRoute, useRouter } from 'vue-router';
  import { onMounted, onUnmounted, watch } from 'vue';
  import Footer from '@components/Footer.vue';
  import GlobeMenu from '@components/globe/GlobeMenu.vue';
  import Hero from '@components/Hero.vue';
  import Navbar from '@components/header/Navbar.vue';
  import ProjectDetailComponent from '@components/content/projects/ProjectDetailComponent.vue';

  const popup = usePopupStore();
  const route = useRoute();
  const router = useRouter();

  function closePanel() {
    router.push('/');
  }

  function onKeydown(e: KeyboardEvent) {
    if (popup.isOpen) return;
    if (e.key === 'Escape' && route.path !== '/') {
      closePanel();
    }
  }

  onMounted(() => window.addEventListener('keydown', onKeydown));
  onUnmounted(() => window.addEventListener('keydown', onKeydown));

  watch(
    () => popup.isOpen,
    (isOpen) => {
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }
  );
</script>

<template>
  <header class="sticky top-0 z-50">
    <Navbar />
  </header>

  <main class="block">
    <section id="stage">
      <Hero />
      <GlobeMenu />
      <Footer />
    </section>

    <div v-if="route.path !== '/'" class="popover-backdrop" @click.self="closePanel">
      <div class="panel">
        <RouterLink to="/" aria-label="Close" class="block w-fit ml-auto pt-4">
          <i class="fa-solid fa-xmark"></i>
        </RouterLink>
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
  }
</style>
