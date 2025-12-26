<script setup lang="ts">
  import { useLocaleStore } from '@store/locale';
  import { ref, computed } from 'vue';

  const localeStore = useLocaleStore();
  const open = ref(false);

  const languages = ['en', 'fr', 'ja'] as const;
  const filteredLanguages = computed(() => languages.filter((lang) => lang !== localeStore.locale));

  function toggleDropdown() {
    open.value = !open.value;
  }

  function selectLanguage(newLang: 'en' | 'fr' | 'ja') {
    localeStore.changeLanguage(newLang);
  }
</script>

<template>
  <div
    class="flex justify-start items-center space-x-2 cursor-pointer relative"
    @click="toggleDropdown"
  >
    <i class="fa-solid fa-globe"></i>
    <span>{{ localeStore.getCurrentLangName() }}</span>
    <i v-if="!open" class="fa-solid fa-caret-down ps-2"></i>
    <i v-else class="fa-solid fa-caret-left ps-2 me-0"></i>

    <ul v-if="open" class="absolute top-0 mt-8 right-0 rounded z-50 min-w-full">
      <li
        v-for="lang in filteredLanguages"
        :key="lang"
        class="px-4 py-2 cursor-pointer"
        @click="selectLanguage(lang)"
      >
        {{ localeStore.getLangName(lang) }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
  ul {
    background-color: var(--ys-grey-600);
  }
  ul li:hover {
    background-color: rgba(var(--ys-primary-500-rgb), 0.8);
  }
</style>
