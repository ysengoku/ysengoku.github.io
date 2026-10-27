<script setup lang="ts">
  import { useLocaleStore } from '@store/locale';
  import { contact } from '@data/contactData';

  const localeStore = useLocaleStore();
</script>

<template>
  <div
    id="hero"
    class="flex flex-col items-start justify-start w-full p-8 relative z-20 pointer-events-none flex-1"
  >
    <div v-if="localeStore.locale === 'ja'" class="text-lg md:text-2xl ps-4">
      {{ $t('jobTitle') }}
    </div>
    <div v-else class="text-lg sm:text-xl md:text-2xl ps-4 mb-0 sm:mb-2">
      {{ $t('jobTitle') }}
    </div>
    <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold ps-4 my-4">
      {{ contact.name }}
    </h1>
  </div>
</template>
