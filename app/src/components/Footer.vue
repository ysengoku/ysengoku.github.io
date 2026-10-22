<script setup lang="ts">
  import { contact } from '@data/contactData';

  const year = new Date().getFullYear();
</script>

<template>
  <footer class="sticky bottom-0 z-50 pt-8 pb-2">
    <div class="flex items-center justify-center gap-4">
      <div class="flex items-center gap-2">
        <a class="btn-social" :href="contact.linkedin" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in fa-xl"></i>
        </a>
        <a class="btn-social" :href="contact.github" aria-label="GitHub">
          <i class="fa-brands fa-github fa-xl"></i>
        </a>
      </div>
      <p class="copyright">
        Copyright &copy; {{ contact.name }} {{ year }}
      </p>
    </div>
  </footer>
</template>

<style scoped>
  .btn-social {
    background-color: var(--ys-primary-500);
    border-color: var(--ys-primary-500);
    height: 2.6rem;
    width: 2.6rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 100%;
  }

  .copyright {
    color: rgba(var(--ys-grey-100-rgb), 0.6);
    font-size: 0.9rem;
  }
</style>
