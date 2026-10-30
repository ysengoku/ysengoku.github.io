<script setup lang="ts">
  import ProjectStackTag from './ProjectStackTag.vue';
  import type { ProjectItem } from '@models/project';

  defineProps<{ item: ProjectItem }>();
</script>

<template>
  <div class="project-detail-content flex flex-col justify-center items-center mx-8 gap-4">
    <h3 class="text-2xl md:text-3xl font-bold uppercase mt-8">
      {{ item.title }}
    </h3>

    <p class="item-intro text-muted md:px-8 text-start md:text-center">
      {{ $t(item.introKey) }}
    </p>
    <a
      :href="item.links?.[0]?.url"
      target="_blank"
      rel="noopener"
      class="flex w-full justify-center"
    >
      <img class="project-image" :src="item.image" :alt="item.title" />
    </a>
    <ul class="text-start mt-3">
      <li>
        <ProjectStackTag v-for="lang in item.languages" :key="lang" :value="lang" type="language" />
      </li>
      <li>
        <ProjectStackTag v-for="lang in item.tools" :key="lang" :value="lang" type="tool" />
      </li>
    </ul>
    <p class="project-detail mt-4 text-start">
      {{ $t(item.descriptionKey) }}
    </p>
    <div class="flex flex-col justify-center items-center gap-6 my-8">
      <a
        v-for="repo in item.repos"
        :key="repo.url"
        class="btn text-uppercase"
        :href="repo.url"
        target="_blank"
        rel="noopener"
      >
        {{ $t('seeGitHub') }}
        <template v-if="item.repos.length > 1"> · {{ repo.label }}</template>
      </a>
      <a
        v-for="link in item.links"
        :key="link.url"
        class="btn text-uppercase"
        :href="link.url"
        target="_blank"
        rel="noopener"
      >
        {{ $t('seeWebsite') }}
        <template v-if="item.links && item.links.length > 1"> · {{ link.label }}</template>
      </a>
    </div>
  </div>
</template>

<style scoped>
  .project-detail-content {
    padding: 0 1.5rem;
    border-radius: 0.5rem;

    h3 {
      color: var(--ys-primary-500);
    }
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

  @media (max-width: 768px) {
    .project-detail-content {
      padding: 0;
      border-radius: 0.5rem;
    }
    .project-image,
    .project-detail,
    ul {
      width: 100%;
    }
  }
</style>
