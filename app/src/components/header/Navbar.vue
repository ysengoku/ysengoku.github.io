<script setup>
  import { ref } from 'vue';
  import LanguageChoiceComponent from './LanguageChoiceComponent.vue';

  function scrollTop() {
    history.pushState(null, '', window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const open = ref(false);
</script>

<template>
  <nav class="fixed top-0 w-full z-50 text-white">
    <div class="flex items-center justify-between w-full px-8 py-4">
      <a href="#" class="flex items-center mt-2" @click.prevent="scrollTop">
        <img src="/img/navbar-logo.svg" alt="logo" class="lg:h-10 h-8" />
      </a>

      <div class="lg:hidden flex items-center space-x-2 cursor-pointer" @click="open = !open">
        <span>Menu</span>
        <i class="fas fa-bars"></i>
      </div>

      <ul class="hidden lg:flex lg:flex-row lg:space-x-10 lg:items-center text-sm">
        <li>
          <a href="#skills" class="block py-2 text-lg nav-link">{{ $t('skillsSection') }}</a>
        </li>
        <li>
          <a href="#projects" class="block py-2 text-lg nav-link">{{ $t('projectsSection') }}</a>
        </li>
        <li>
          <a href="#about" class="block py-2 text-lg nav-link">{{ $t('experiencesSection') }}</a>
        </li>
        <li>
          <LanguageChoiceComponent />
        </li>
      </ul>
    </div>

    <transition name="fade">
      <ul
        v-if="open"
        class="navbar-dropdown lg:hidden flex flex-col items-center space-y-2 px-8 py-4"
      >
        <li>
          <a href="#skills" class="block py-2 text-lg nav-link">{{ $t('skillsSection') }}</a>
        </li>
        <li>
          <a href="#projects" class="block py-2 text-lg nav-link">{{ $t('projectsSection') }}</a>
        </li>
        <li>
          <a href="#about" class="block pt-2 pb-4 text-lg nav-link">{{
            $t('experiencesSection')
          }}</a>
        </li>
        <li>
          <LanguageChoiceComponent />
        </li>
      </ul>
    </transition>
  </nav>
</template>

<style>
  nav {
    background-color: rgba(var(--ys-grey-700-rgb), 0.8);
  }
  .nav-link {
    color: var(--ys-grey-100);
  }
  .nav-link:hover {
    color: var(--ys-primary-500);
  }
  .navbar-dropdown {
    background-color: rgba(var(--ys-grey-700-rgb), 0.9);
  }
</style>
