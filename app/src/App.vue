<script setup lang="ts">
import { watch } from 'vue';
import { usePopupStore } from '@store/popup';
import Header from '@components/header/Header.vue';
import Navbar from '@components/header/Navbar.vue';
import Skills from '@components/content/skills/Skills.vue';
import Projects from '@components/content/projects/Projects.vue';
import ProjectDetailComponent from '@components/content/projects/ProjectDetailComponent.vue';
import About from '@components/content/about/About.vue';
import Footer from '@components/Footer.vue';

const popup = usePopupStore();

watch(
  () => popup.isOpen,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
);
</script>

<template>
  <div
    v-if="popup.isOpen"
    class="popover-backdrop"
    @click="popup.close"
  >
    <ProjectDetailComponent v-if="popup.type === 'project'" />
  </div>

  <Navbar />
  <Header />

  <Skills />
  <Projects />
  <About />

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
