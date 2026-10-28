<script setup lang="ts">
  import { ref } from 'vue';
  import LanguageChoiceComponent from './LanguageChoiceComponent.vue';
  import { globeSpots } from '@data/globeData';
  import { useGlobeStore } from '@store/globe';

  function scrollTop() {
    history.pushState(null, '', window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const open = ref(false);
  const globeStore = useGlobeStore();
</script>

<template>
  <nav class="w-full text-white">
    <div class="flex items-center justify-between w-full px-8 py-4">
      <a href="#" class="flex items-center mt-2" @click.prevent="scrollTop">
        <img src="/img/logo.svg" alt="logo" class="lg:h-10 h-8" />
      </a>

      <div class="lg:hidden flex items-center space-x-2 cursor-pointer" @click="open = !open">
        <span>Menu</span>
        <FontAwesomeIcon icon="bars" />
      </div>
      <ul class="hidden lg:flex lg:flex-row lg:space-x-10 lg:items-center text-sm">
        <li v-for="item in globeSpots" :key="item.id">
          <button
            class="block py-2 text-lg nav-link cursor-pointer"
            @click.prevent="globeStore.updateCurrentSpot(item.id, true)"
          >
            {{ $t(item.labelKey) }}
          </button>
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
        <li v-for="item in globeSpots" :key="item.id">
          <button
            class="block py-2 text-lg nav-link cursor-pointer"
            @click.prevent="
              globeStore.updateCurrentSpot(item.id, true);
              open = false;
            "
          >
            {{ $t(item.labelKey) }}
          </button>
        </li>
        <li>
          <LanguageChoiceComponent />
        </li>
      </ul>
    </transition>
  </nav>
</template>

<style>
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
