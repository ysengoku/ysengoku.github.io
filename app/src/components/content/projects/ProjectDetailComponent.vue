<script setup lang="ts">
  import { computed } from 'vue';
  import { projectItems } from '@data/projectsData';
  import { usePopupStore } from '@store/popup';

  const popup = usePopupStore();

  const item = computed(() => {
    const id = popup.contentId;
    if (!id == null) {
      return null;
    }
    return projectItems.find((p) => p.id === id) ?? null;
  });

  function closePopup() {
    popup.close();
  }
</script>

<template>
  <div
    v-if="popup.isOpen && item"
    role="dialog"
    aria-modal="true"
    :aria-labelledby="`popover-title-${popup.contentId}`"
  >
    <div class="project-detail-panel" @click.stop>
      <button aria-label="Close" class="close-btn" @click="closePopup">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="project-detail-content flex flex-col justify-center items-center mx-8 mt-8 gap-4">
        <h2
          :id="`popover-title-${popup.contentId}`"
          class="text-2xl md:text-3xl font-bold uppercase mt-8"
        >
          {{ item.title }}
        </h2>

        <p class="item-intro text-muted md:px-8 text-start md:text-center">
          {{ $t(item.introKey) }}
        </p>
        <a
          :href="$t(item.link ?? '')"
          target="_blank"
          rel="noopener"
          class="flex w-full justify-center"
        >
          <img class="project-image" :src="item.image" :alt="item.title" />
        </a>
        <p class="project-detail mt-4 text-start">
          {{ $t(item.descriptionKey) }}
        </p>
        <ul class="text-start mt-3">
          <li>
            <strong>{{ $t('languages') }}: </strong>
            {{ $t(item.techLanguage) }}
          </li>
          <li>
            <strong>{{ $t('technologies') }}: </strong>
            {{ $t(item.techTools) }}
          </li>
        </ul>
        <div class="flex flex-col justify-center items-center gap-6 my-8">
          <a class="btn-m-0 text-uppercase" :href="item.github" target="_blank" rel="noopener">
            {{ $t('seeGitHub') }}
          </a>
          <a
            v-if="item.link"
            class="btn-m-0 text-uppercase"
            :href="$t(item.link)"
            target="_blank"
            rel="noopener"
          >
            {{ $t('seeWebsite') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .project-detail-panel {
    width: 85vw;
    max-height: 90vh;
    overflow: auto;
    position: relative;
    background: rgba(var(--ys-grey-700-rgb), 0.9);
    border-radius: 0.5rem;
  }
  .project-detail-content {
    padding: 1.5rem;
    border-radius: 0.5rem;
  }
  .project-image {
    width: 75%;
    height: auto;
    border-radius: 0.375rem;
    margin-top: 0.75rem;
  }
  .project-detail,
  ul {
    width: 75%;
  }

  .close-btn {
    color: rgba(var(--ys-grey-100-rgb), 0.6);
    font-size: 2.5rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    margin: 1rem;
    cursor: pointer;
  }

  .project-detail-panel::-webkit-scrollbar {
    width: 8px;
    border-radius: 8px;
  }
  .project-detail-panel::-webkit-scrollbar-track {
    background-color: rgba(var(--ys-grey-600-rgb), 0.2);
    border-radius: 10px;
  }
  .project-detail-panel::-webkit-scrollbar-thumb {
    background-image: linear-gradient(
      to bottom,
      rgba(var(--ys-grey-600-rgb), 0.6),
      rgba(var(--ys-primary-500-rgb), 0.6),
      rgba(var(--ys-grey-600-rgb), 0.6)
    );
    border-radius: 8px;
  }
  /* For Firefox */
  .project-detail-panel {
    scrollbar-width: thin;
    scrollbar-color: rgba(var(--ys-primary-500-rgb), 0.6) rgba(var(--ys-grey-600-rgb), 0.2);
  }

  @media (max-width: 768px) {
    .project-detail-content {
      padding: 0;
      border-radius: 0.5rem;
    }
    .close-btn {
      color: rgba(var(--ys-grey-100-rgb), 0.6);
      font-size: 1.5rem;
    }
    .project-image,
    .project-detail,
    ul {
      width: 100%;
    }
  }
</style>
