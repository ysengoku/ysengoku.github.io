<template>
  <section class="py-16" id="projects">
    <div class="projects-container">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold uppercase tracking-wide">Latest works</h2>
        <h3 class="mt-2">Explore my most recent projects and achievements.</h3>
      </div>
      <div class="swiper-container-wrapper">
          <Carousel v-bind="carouselConfig">
            <Slide v-for="item in projectItems" :key="item.id">
              <ProjectPreviewComponent
                :item="item" class="project-slide"
              />
            </Slide>
            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import { ref } from 'vue'
import ProjectPreviewComponent from './ProjectPreviewComponent.vue';
import { projectItems } from '@data/projectsData';

const itemsToShowValue = ref(3.6)

const carouselConfig = ref({
  height: 400,
  itemsToShow: itemsToShowValue,
  wrapAround: true,
  breakpoints: {
    1600: {
      itemsToShow: 3.5,
      gap: 24,
    },
    1536: {
      itemsToShow: 3.3,
      gap: 24,
    },
    1440: {
      itemsToShow: 3.1,
      gap: 22,
    },
    1280: {
      itemsToShow: 2.7,
      gap: 22,
    },
    1124: {
      itemsToShow: 2.3,
      gap: 20,
    },
    1024: {
      itemsToShow: 2.1,
      gap: 20,
    },
    896: {
      itemsToShow: 1.9,
      gap: 18,
    },
    800: {
      itemsToShow: 1.7,
      gap: 16,
    },
    768: {
      itemsToShow: 1.5,
      gap: 16,
    },
    640: {
      itemsToShow: 1.1,
      gap: 12,
    },
    0: {
      itemsToShow: 1,
      gap: 12,
    },
  },
  gap: 20,
})
</script>

<style scoped>
.projects-container {
  margin: 0 4rem;
}

:root {
  --carousel-transition: 400ms;
  --carousel-opacity-inactive: 0.7;
  --carousel-opacity-active: 1;
  --carousel-opacity-near: 0.8;
}

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition:
    opacity var(--carousel-transition),
    transform var(--carousel-transition);
}

.carousel.is-dragging .carousel__slide {
  transition:
    opacity var(--carousel-transition),
    transform var(--carousel-transition);
}

.carousel__slide {
  opacity: var(--carousel-opacity-inactive);
  transform: translateX(10px) rotateY(-1deg) scale(0.85);
  margin: 0 2px;
}

.carousel__slide--prev {
  opacity: var(--carousel-opacity-near);
  transform: rotateY(-1deg) scale(0.85);
  margin: 0 0 0 -32px;
}

.carousel__slide--active {
  opacity: var(--carousel-opacity-active);
  transform: rotateY(0) scale(1.1);
}

.carousel__slide--next {
  opacity: var(--carousel-opacity-near);
      transform: rotateY(1deg) scale(0.85);
      margin: 0 -32px 0 0;
}

.carousel__slide--next ~ .carousel__slide {
  opacity: var(--carousel-opacity-inactive);
  transform: translateX(-1px) rotateY(1deg) scale(0.85);
}

:deep(.carousel__prev) {
  margin-left: 4px !important;
}
:deep(.carousel__next) {
  margin-right: 4px !important;
}

.carousel__pagination {
  bottom: -32px;
}
:deep(.carousel__pagination-item .carousel__pagination-button) {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: var(--ys-grey-100);
  opacity: 0.6;
  transition: background 0.2s, opacity 0.2s;
}
:deep(.carousel__pagination-item .carousel__pagination-button--active) {
  background-color: var(--ys-primary-500) !important;
  opacity: 1;
  box-shadow: 0 0 4px rgba(225,29,72,0.3);
}
</style>
