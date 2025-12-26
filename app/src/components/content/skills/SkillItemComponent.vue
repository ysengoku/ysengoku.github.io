<script setup lang="ts">
  import type { SkillItem } from 'src/models/skill';

  defineProps<{
    item: SkillItem;
  }>();
</script>

<template>
  <div>
    <span class="inline-flex items-center justify-center w-24 h-24 rounded-full text-4xl mb-6">
      <i :class="item.icon"></i>
    </span>
    <h4 class="text-xl font-semibold mb-3">
      {{ $t(item.titleKey) }}
    </h4>
    <p class="text-start ms-4">
      {{ $t(item.descriptionKey) }}
    </p>
  </div>
</template>

<style scoped>
  span {
    color: var(--ys-grey-100);
    background-color: var(--ys-primary-500);
  }
</style>
