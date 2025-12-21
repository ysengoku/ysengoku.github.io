<script setup lang="ts">
import type { TimelineItem } from 'src/models/timeline';

defineProps<{
  data: TimelineItem;
}>();
</script>

<template>
  <li class="mb-4 flex flex-col md:flex-row-reverse md:items-center">
    <div class="timeline-image">
      <img 
        :src="data.image"
        class="rounded-full object-cover"
      />
    </div>

    <div :class="data.id % 2 === 1 ? 'timeline-panel-right' : 'timeline-panel-left'">
      <div class="p-6">
        <p class="text-sm">
          {{ data.period }}
        </p>
        <h4 class="text-xl font-semibold mt-2">
          {{ data.title }}
        </h4>
        <h5 class="font-medium mb-3">
          {{ data.subtitle }}
        </h5>
        <p>
          {{ data.description }}
        </p>
      </div>
    </div>
  </li>
</template>
