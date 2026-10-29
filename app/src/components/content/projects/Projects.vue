<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
<script setup lang="ts">
  import { computed, nextTick, watch, useTemplateRef } from 'vue';
  // @ts-ignore
  import 'swiper/css';
  // @ts-ignore
  import 'swiper/css/navigation';
  import { Navigation } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { useRoute, useRouter } from 'vue-router';
  import { projectItems } from '@data/projectsData';
  import ProjectPreviewComponent from './ProjectPreviewComponent.vue';
  import ProjectDetailComponent from './ProjectDetailComponent.vue';

  const route = useRoute();
  const router = useRouter();
  const breakpoints = {
    1440: { slidesPerView: 4 },
    1024: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    640: { slidesPerView: 1 },
  };
  const container = useTemplateRef<HTMLElement>('container');
  const detail = useTemplateRef<HTMLElement>('detail');

  function getSlideClass(index: number) {
    return `slide-${index}`;
  }

  function closeDetail() {
    const panel = container.value?.closest('.panel');
    let closed = false;
    const close = () => {
      if (closed) return;
      closed = true;
      router.replace({ query: {} });
    };
    panel?.addEventListener('scrollend', close, { once: true });
    setTimeout(close, 1000);
    container.value?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const item = computed(() => {
    const id = typeof route.query.p === 'string' ? route.query.p : null;
    return projectItems.find((p) => p.id === id) ?? null;
  });

  watch(
    () => route.query.p,
    async () => {
      await nextTick();
      detail.value?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    { immediate: true }
  );
</script>

<template>
  <section id="projects" ref="container" class="py-16">
    <div class="projects-container">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold uppercase tracking-wide">{{ $t('projects.label') }}</h2>
        <h3 class="mt-2">{{ $t('projects.summary') }}</h3>
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
            v-for="(project, index) in projectItems"
            :key="project.id"
            :class="getSlideClass(index)"
          >
            <ProjectPreviewComponent :item="project" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div v-if="item" id="project-detail" ref="detail" class="mt-8 pt-8">
        <button type="button" class="cursor-pointer" @click="closeDetail">
          <FontAwesomeIcon icon="chevron-up" /> {{ $t('projects.closeDetail') }}
        </button>
        <ProjectDetailComponent :item="item" />
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

  #project-detail {
    button {
      color: rgba(var(--ys-secondary-100-rgb), 0.7);
    }
  }
</style>
