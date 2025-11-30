<template>
  <Navbar />
  <Header />

  <Skills id="skills" />
  <About id="about" />

  <Footer />
</template>

<script setup lang="ts">
  import Navbar from './components/header/Navbar.vue';
  import Header from './components/header/Header.vue';
  import Skills from './components/content/skills/Skills.vue';
  import About from './components/content/about/About.vue';
  import Footer from './components/Footer.vue';
</script>

<style scoped>
</style>
