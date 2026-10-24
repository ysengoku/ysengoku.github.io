<script setup lang="ts">
  import { contact } from '@data/contactData';

  const year = new Date().getFullYear();
</script>

<template>
  <div class="sticky bottom-0 flex items-center justify-center gap-4 pb-2 z-50">
    <div class="flex items-center gap-2">
      <a class="btn-social" :href="contact.linkedin" aria-label="LinkedIn">
        <i class="fab fa-linkedin-in fa-xl"></i>
      </a>
      <a class="btn-social" :href="contact.github" aria-label="GitHub">
        <i class="fa-brands fa-github fa-xl"></i>
      </a>
    </div>
    <p class="copyright">Copyright &copy; {{ contact.name }} {{ year }}</p>
  </div>
</template>

<style scoped>
  .btn-social {
    background-color: var(--ys-primary-500);
    border-color: var(--ys-primary-500);
    height: 3rem;
    width: 3rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 100%;
  }

  .copyright {
    font-size: 0.9rem;
  }
</style>
