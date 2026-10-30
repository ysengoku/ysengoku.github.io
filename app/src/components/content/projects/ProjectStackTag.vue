<script setup lang="ts">
  defineProps<{ value: string; type: 'language' | 'tool' }>();
</script>

<template>
  <span
    class="stack-tag inline-block px-2 pt-0.5 pb-1.5 me-1 mb-1 text-sm font-medium"
    :class="`stack-${type}`"
  >
    {{ value }}
  </span>
</template>

<style scoped>
  .stack-tag {
    border-radius: 0.5rem;
    color: var(--ys-grey-100);
  }

  .stack-language {
    background: rgba(var(--ys-secondary-500-rgb), 0.6);
  }

  .stack-tool {
    background: rgba(var(--ys-grey-500-rgb), 0.4);
  }
</style>
