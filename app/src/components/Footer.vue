<template>
  <footer class="mt-10 py-2">
    <div class="row align-items-center g-0">
      <div class="col-lg-8 text-lg-start">
        <span class="text-lg me-1 cta">{{ $t('cta') }}: </span>
        <a
          class="btn-social mx-1"
          href="https://www.linkedin.com/in/yuko-sengoku/"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a class="btn-social mx-1" href="https://github.com/ysengoku" aria-label="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
      <div class="col-lg-4 me-3 my-3 my-lg-0 text-xs">Copyright &copy; Yuko SENGOKU 2025</div>
    </div>
  </footer>
</template>

<style scoped>
  .cta {
    color: var(--ys-primary-500);
    font-weight: bold;
  }

  .btn-social {
    background-color: var(--ys-primary-500);
    border-color: var(--ys-primary-500);
    height: 2.4rem;
    width: 2.4rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 100%;
  }
</style>
