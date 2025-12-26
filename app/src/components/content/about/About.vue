<script setup lang="ts">
  import { onMounted, nextTick } from 'vue';
  import { timelineItems } from '@data/timelineData';
  import TimelineItemComponent from './TimelineItemComponent.vue';

  onMounted(async () => {
    await nextTick();

    const container = document.querySelector('#about ul') as HTMLElement;
    const firstLi = container?.querySelector('li') as HTMLElement;
    const firstImg = firstLi?.querySelector('.timeline-image') as HTMLElement;
    const lastLi = container?.lastElementChild as HTMLElement;
    const lastImg = lastLi?.querySelector('.timeline-image') as HTMLElement;

    const containerRect = container?.getBoundingClientRect();
    const firstImgRect = firstImg?.getBoundingClientRect();
    const lastImgRect = lastImg?.getBoundingClientRect();
    if (!containerRect || !firstImgRect || !lastImgRect) {
      return;
    }

    const relativeTop = firstImgRect.top - containerRect.top;
    const lineHeight = lastImgRect.bottom - firstImgRect.top;
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
    text-align: start;
    margin-left: calc(50% + 64px);
  }

  .timeline-panel-left {
    text-align: end;
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
      text-align: center;
      margin: 0 1rem;
    }
  }
</style>
