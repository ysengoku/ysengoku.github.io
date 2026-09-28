<script setup lang="ts">
  import { onMounted, nextTick } from 'vue';
  import { timelineItems } from '@data/timelineData';
  import TimelineItemComponent from './TimelineItemComponent.vue';

  onMounted(async () => {
    await nextTick();

    const container = document.querySelector('#about ul') as HTMLElement;
    const firstLi = container?.querySelector('li') as HTMLElement;
    const firstDot = firstLi?.querySelector('.timeline-dot') as HTMLElement;
    const lastLi = container?.lastElementChild as HTMLElement;
    const lastDot = lastLi?.querySelector('.timeline-dot') as HTMLElement;

    const containerRect = container?.getBoundingClientRect();
    const firstDotRect = firstDot?.getBoundingClientRect();
    const lastDotRect = lastDot?.getBoundingClientRect();
    if (!containerRect || !firstDotRect || !lastDotRect) {
      return;
    }

    // Line runs from the center of the first dot to the center of the last one
    const firstCenter = firstDotRect.top + firstDotRect.height / 2;
    const lastCenter = lastDotRect.top + lastDotRect.height / 2;
    const relativeTop = firstCenter - containerRect.top;
    const lineHeight = lastCenter - firstCenter;
    document.documentElement.style.setProperty('--timeline-start', `${relativeTop}px`);
    document.documentElement.style.setProperty('--timeline-height', `${lineHeight}px`);
  });
</script>

<template>
  <section id="about" class="py-16">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold uppercase tracking-wide">{{ $t('experiencesSection') }}</h2>
        <h3 class="mt-2">{{ $t('experienceSubtitle') }}</h3>
      </div>

      <ul class="relative">
        <!-- vertical line -->
        <div class="timeline-line"></div>

        <TimelineItemComponent v-for="(item, index) in timelineItems" :key="index" :data="item" />
      </ul>
    </div>
  </section>
</template>

<style>
  .timeline-line {
    position: absolute;
    left: 50%;
    top: var(--timeline-start, 0px);
    width: 2px;
    height: var(--timeline-height);
    background-color: var(--ys-primary-500);
    transform: translateX(-50%);
  }

  .timeline-dot {
    --timeline-dot-ring: var(--ys-grey-700);
    position: absolute;
    z-index: 100;
    /* No `top`: stays at the title's top; center on its first line (text-xl line-height is 1.4em) */
    margin-top: calc(0.7em - 9px);
    left: 50%;
    width: 18px;
    height: 18px;
    margin-left: -9px;
    border-radius: 100%;
    background-color: var(--ys-primary-500);
    box-shadow: 0 0 0 4px var(--timeline-dot-ring);
  }

  @media (prefers-color-scheme: light) {
    .timeline-dot {
      --timeline-dot-ring: var(--ys-grey-100);
    }
  }

  .timeline-panel-right,
  .timeline-panel-left {
    flex: 1;
  }

  .timeline-panel-right {
    text-align: start;
    margin-left: calc(50% + 1.5rem);
  }

  .timeline-panel-left {
    text-align: end;
    margin-right: calc(50% + 1.5rem);
  }

  @media (width < 48rem) {
    .timeline-line {
      display: none;
    }

    .timeline-dot {
      display: none;
    }

    .timeline-panel-right,
    .timeline-panel-left {
      text-align: center;
      margin: 0 1rem;
    }
  }
</style>
