<script setup lang="ts">
  import SkillItemComponent from './SkillItemComponent.vue';
  import { skillItems } from '@data/skillsData';
</script>

<template>
  <section id="skills" class="py-20">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="uppercase text-3xl font-bold tracking-wide">Skills</h2>
        <h3 class="mt-2">Discover my technical skills in full-stack development</h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <SkillItemComponent v-for="item in skillItems" :key="item.id" :item="item" />
      </div>
    </div>
  </section>
</template>
