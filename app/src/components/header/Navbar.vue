<template>
  <nav class="fixed top-0 w-full z-50 text-white">
    <div class="flex items-center justify-between w-full px-8 py-4">
      <a href="#page-top" class="flex items-center mt-2">
        <img src="/img/navbar-logo.svg" alt="logo" class="lg:h-10 h-8" />
      </a>

      <div
        @click="open = !open"
        class="lg:hidden flex items-center space-x-2 cursor-pointer"
      >
        <span>Menu</span>
        <i class="fas fa-bars"></i>
      </div>

      <ul class="hidden lg:flex lg:flex-row lg:space-x-10 text-sm">
        <li><a href="#skills" class="block py-2 text-lg nav-link">Skills</a></li>
        <li><a href="#projects" class="block py-2 text-lg nav-link">Latest works</a></li>
        <li><a href="#about" class="block py-2 text-lg nav-link">Background</a></li>
      </ul>
    </div>

    <transition name="fade">
      <ul
        v-if="open"
        class="lg:hidden flex flex-col space-y-2 px-8 py-4 bg-gray-900/95"
      >
        <li><a href="#skills" class="block py-2 text-lg nav-link">Skills</a></li>
        <li><a href="#projects" class="block py-2 text-lg nav-link">Latest works</a></li>
        <li><a href="#about" class="block py-2 text-lg nav-link">Background</a></li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue"
const open = ref(false)
</script>

<style>
</style>
