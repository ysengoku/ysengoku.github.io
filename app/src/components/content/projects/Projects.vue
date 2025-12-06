<template>
  <section class="py-16" id="projects">
    <div class="projects-container">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold uppercase tracking-wide">Latest works</h2>
        <h3 class="mt-2">Explore my most recent projects and achievements.</h3>
      </div>
      <div class="swiper-container-wrapper">
        <swiper
          :slides-per-view="'auto'"
          :space-between="24"
          :centered-slides="true"
          :loop="true"
          :loopedSlides="projectItems.length"
          :navigation="true"
          :pagination="{
            clickable: true,
          }"
          :modules="[Navigation, Pagination]"
          class="projectsSwiper"
        >
          <swiper-slide v-for="item in projectItems" :key="item.id" class="project-slide">
            <ProjectPreviewComponent :item="item" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import ProjectsCarousel from './ProjectsCarousel.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectPreviewComponent from './ProjectPreviewComponent.vue';
import { projectItems } from '@data/projectsData';
</script>

<style scoped>
.projects-container {
  margin: 0 2rem;
}

.projectsSwiper {
  padding: 2rem 0;
}

.project-slide {
  width: 26rem !important;
}

@media (max-width: 768px) {
  .project-slide {
    width: 18rem !important;
  }
}

.projectsSwiper :deep(.swiper-button-prev),
.projectsSwiper :deep(.swiper-button-next) {
  color: var(--ys-grey-100) !important;
}

.projectsSwiper :deep(.swiper-pagination-bullet) {
  background-color: rgba(var(--ys-grey-100-rgb), 0.7) !important;
}

.projectsSwiper :deep(.swiper-pagination-bullet-active) {
  background-color: var(--ys-primary-500) !important;
  opacity: 1;
}

</style>
