<script setup lang="ts">
  import { ref } from 'vue';
  import { useGlobeStore } from '@store/globe';

  const globeStore = useGlobeStore();
  const used = ref(false);

  function goTo(delta: 1 | -1) {
    used.value = true;
    if (delta === 1) globeStore.goToNextSpot();
    if (delta === -1) globeStore.goToPreviousSpot();
  }
</script>

<template>
  <div class="flex justify-center mb-8 w-full z-999">
    <div
      id="pager"
      class="flex justify-center items-center p-2 w-fit gap-4"
      :class="{ 'nudge-off': used }"
      :aria-label="$t('a11y.pager')"
      role="group"
    >
      <button
        id="pager-prev"
        type="button"
        class="w-12 h-12 bg-transparent border-none cursor-pointer"
        :aria-label="$t('a11y.prev')"
        @click="goTo(-1)"
      >
        <FontAwesomeIcon icon="chevron-left" aria-hidden="true" />
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
        class="w-12 h-12 bg-transparent border-none cursor-pointer"
        :aria-label="$t('a11y.next')"
        @click="goTo(1)"
      >
        <FontAwesomeIcon icon="chevron-right" aria-hidden="true" />
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

  #pager.nudge-off button {
    animation: none;
  }

  @media (prefers-reduced-motion: reduce) {
    #pager button {
      animation: none;
    }
  }
</style>
