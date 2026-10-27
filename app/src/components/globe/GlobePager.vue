<script setup lang="ts">
  import { useGlobeStore } from '@store/globe';

  const globeStore = useGlobeStore();
</script>

<template>
  <div class="flex justify-center mb-8 w-full z-999">
    <div
      id="pager"
      class="flex justify-center items-center p-2 w-fit gap-4"
      aria-label="Turn the globe"
    >
      <button
        id="pager-prev"
        type="button"
        class="w-12 h-12 cursor-pointer bg-transparent border-none"
        aria-label="Previous section"
        @click="globeStore.goToPreviousSpot()"
      >
        <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
      </button>
      <span
        id="pager-hint"
        class="hint whitespace-nowrap transition-opacity duration-400 opacity-75 max-sm:hidden"
      >
        {{ $t('pagerHint') }}
      </span>
      <button
        id="pager-next"
        type="button"
        class="w-12 h-12 cursor-pointer bg-transparent border-none"
        aria-label="Next section"
        @click="globeStore.goToNextSpot()"
      >
        <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
  #pager {
    background: rgba(var(--ys-secondary-600-rgb), 0.5);
    border-radius: 999px;

    button {
      border-radius: 50%;
    }

    button:hover {
      background: var(--ys-grey-500);
    }
  }

  #pager-prev {
    --nudge: -4px;
    animation: move 3s infinite;
  }

  #pager-next {
    --nudge: 4px;
    animation: move 3s infinite;
    animation-delay: 1.5s;
  }

  @keyframes move {
    0%,
    10%,
    20%,
    100% {
      transform: translateX(0);
    }
    5%,
    15% {
      transform: translateX(var(--nudge));
    }
  }
</style>
