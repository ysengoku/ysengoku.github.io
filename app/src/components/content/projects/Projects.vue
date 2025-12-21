<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
<script setup lang="ts">
  import ProjectPreviewComponent from './ProjectPreviewComponent.vue';
  import { projectItems } from '@data/projectsData';

  import { Swiper, SwiperSlide } from 'swiper/vue';
  // @ts-ignore
  import 'swiper/css';
  // @ts-ignore
  import 'swiper/css/navigation';
  import { Navigation } from 'swiper/modules';

  const breakpoints = {
    1440: { slidesPerView: 4 },
    1024: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    640: { slidesPerView: 1 },
  };

  function getSlideClass(index: number) {
    return `slide-${index}`;
  }
</script>

<template>
  <section id="projects" class="py-16">
    <div class="projects-container">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold uppercase tracking-wide">Latest works</h2>
        <h3 class="mt-2">Explore my most recent projects and achievements.</h3>
      </div>
      <div class="swiper-container-wrapper">
        <Swiper
          :modules="[Navigation]"
          navigation
          loop
          centered-slides
          :breakpoints="breakpoints"
          class="ui-carousel"
        >
          <SwiperSlide
            v-for="(item, index) in projectItems"
            :key="item.id"
            :class="getSlideClass(index)"
          >
            <ProjectPreviewComponent :item="item" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .projects-container {
    margin: 0 4rem;
  }

  .ui-carousel .swiper-slide {
    transition: transform 0.3s ease;
  }

  .ui-carousel .swiper-slide {
    transform: scale(0.8);
    opacity: 0.6;
  }

  .ui-carousel .swiper-slide-active {
    transform: scale(1);
    z-index: 10;
    opacity: 1;
  }

  .ui-carousel .swiper-slide-prev,
  .ui-carousel .swiper-slide-next {
    transform: scale(0.8);
    opacity: 0.6;
  }

  :deep(.ui-carousel .swiper-slide-active):hover .project-preview-hover {
    opacity: 0.8;
  }

  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    color: var(--ys-primary-500) !important;
    border-radius: 50%;
    background-color: var(--ys-grey-100);
    opacity: 0.6;
    transition:
      background 0.2s,
      opacity 0.2s;
  }
  :deep(.swiper-button-prev) {
    padding: 8px 8px 8px 4px;
  }
  :deep(.swiper-button-next) {
    padding: 8px 4px 8px 8px;
  }
</style>
