  <template>
    <div
      class="project-preview-wrapper flex-col flex-wrap text-wrap lg:w-104 md:w-96 w-72 flex-shrink-0">
      <div class="project-preview-hover md:h-72 h-48">
        <div class="text-2xl">Show detail</div>
      </div>
      <img :src="item.image" class="md:h-72 h-48"  />

      <h4 class="text-xl font-semibold my-3">
        {{ item.title }}
      </h4>

      <p class="text-sm mx-4 mb-6">
        {{ item.subtitle }}
      </p>
    </div>
  </template>

  <script setup lang="ts">
  import type { ProjectItem } from 'src/models/project';

  defineProps<{
    item: ProjectItem;
  }>();
  </script>

  <style>
  .project-preview-wrapper {
    position: relative;
    background-color: rgba(var(--ys-grey-600-rgb), 0.1);
    border-radius: 0.5rem;
    transform-origin: center;
    transition:
      transform 0.25s ease,
      opacity 0.25s ease;
  }

  .project-preview-wrapper img {
    width: 100%;
    object-fit: cover;
    border-radius: 0.5rem 0.5rem 0 0;
    padding: 0 0.1rem;
  }

  .project-preview-hover {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    background-color: var(--ys-primary-500);
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
  }

  .project-preview-hover:hover {
    opacity: 85%;
  }
  </style>
