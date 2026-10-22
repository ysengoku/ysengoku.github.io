<script setup lang="ts">
  import { watch } from 'vue';
  import { usePopupStore } from '@store/popup';
  import About from '@components/content/about/About.vue';
  import Footer from '@components/Footer.vue';
  import GlobeMenu from '@components/globe/GlobeMenu.vue';
  import GlobePin from '@components/globe/GlobePin.vue';
  import Hero from '@components/Hero.vue';
  import Navbar from '@components/header/Navbar.vue';
  import ProjectDetailComponent from '@components/content/projects/ProjectDetailComponent.vue';
  import Projects from '@components/content/projects/Projects.vue';
  import Skills from '@components/content/skills/Skills.vue';

  const popup = usePopupStore();

  watch(
    () => popup.isOpen,
    (isOpen) => {
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }
  );
</script>

<template>
  <div v-if="popup.isOpen" class="popover-backdrop" @click="popup.close">
    <ProjectDetailComponent v-if="popup.type === 'project'" />
  </div>

  <header class="sticky top-0 z-50">
    <Navbar />
  </header>

  <main class="block">
    <section id="stage">
      <Hero />
      <GlobeMenu />
      <GlobePin />
    </section>

    <Skills />
    <Projects />
    <About />
  </main>

  <Footer />
</template>

<style>
  .popover-backdrop {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 0;
    background: rgba(var(--ys-grey-600-rgb), 0.7);
    backdrop-filter: blur(1px);
    z-index: 1000;
  }
</style>
