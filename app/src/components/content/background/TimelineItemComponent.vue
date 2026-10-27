<script setup lang="ts">
  import type { TimelineItem } from '@models/timeline';

  defineProps<{
    data: TimelineItem;
  }>();
</script>

<template>
  <li class="relative flex flex-col md:flex-row-reverse">
    <div :class="data.id % 2 === 1 ? 'timeline-panel-right' : 'timeline-panel-left'">
      <div class="px-6 py-2">
        <p class="text-sm">
          {{ $t(data.periodKey) }}
        </p>
        <h4 class="text-xl font-semibold mt-2">
          <!-- Placed in the title so it aligns with the title's first line in any language -->
          <span class="timeline-dot"></span>
          {{ $t(data.titleKey) }}
        </h4>
        <h5 class="font-medium mt-2 mb-3">
          {{ $t(data.subtitleKey) }}
        </h5>
        <p>
          {{ $t(data.descriptionKey) }}
        </p>
      </div>
    </div>
  </li>
</template>
