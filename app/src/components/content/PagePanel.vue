<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue';
  import { navigateWithTransition } from '@utils/viewTransition';

  function closePanel() {
    navigateWithTransition('/');
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      closePanel();
    }
  }

  onMounted(() => window.addEventListener('keydown', onKeydown));
  onUnmounted(() => window.removeEventListener('keydown', onKeydown));
</script>

<template>
  <div class="popover-backdrop" @click.self="closePanel">
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
</template>

<style>
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
    scrollbar-gutter: stable;
  }

  ::view-transition-group(spotcard) {
    animation-duration: 0.45s;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  }
</style>
