<template>
  <section id="about" class="py-16">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold uppercase tracking-wide">Background</h2>
        <h3 class="mt-2">
          My Experience and Education Overview
        </h3>
      </div>

      <ul class="relative">
        <!-- vertical line -->
        <div class="timeline-line"></div>

        <TimelineItemComponent
          v-for="item in timelineItems"
          :key="item.id"
          :data="item"
        />
      </ul>

    </div>
  </section>
</template>

<script setup lang="ts">
import { timelineItems } from '../../../data/timelineData';
import TimelineItemComponent from './TimelineItemComponent.vue';
</script>

<style>
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  width: 2px;
  height: 100%;
  background-color: var(--ys-crimson);
  transform: translateX(-50%);
}

.timeline-image {
  position: absolute;
  z-index: 100;
  left: 50%;
  width: 128px;
  height: 128px;
  margin-left: -64px;
  text-align: center;
  border: 4px solid #e9ecef;
  border-radius: 100%;
}

.timeline-image img {
  width: 120px;
  height: 120px;
  vertical-align: middle;
}

.timeline-panel-right {
  margin-left: calc(50% + 64px);
}

.timeline-panel-left {
  margin-right: calc(50% + 64px);
}

@media (width < 48rem) {
  .timeline-line {
    display: none;
  }

  .timeline-image {
    display: none;
  }

  .timeline-panel-right,
  .timeline-panel-left {
    margin: 0 1rem;
  }
}
</style>