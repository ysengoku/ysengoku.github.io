<template>
  <section id="about" class="pt-8 pb-16">
    <div class="max-w-4xl mx-auto px-8">
      <h2 class="text-center uppercase text-2xl font-bold mb-12 tracking-wide">
        {{ $t('about.label') }}
      </h2>

      <div v-for="(item, index) in $tm('about.content')" :key="item">
        <p class="text-start px-8 py-4">
          {{ item }}
        </p>
        <div v-if="index === 1" class="fade-plane">
          <span class="l"></span>
          <FontAwesomeIcon icon="plane" class="text-sm" />
          <span class="r"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .fade-plane {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin: 2rem auto;
    color: rgba(var(--ys-grey-100-rgb), 0.55);
    .l {
      width: 20%;
      height: 1px;
      background: linear-gradient(to right, transparent, rgba(var(--ys-grey-100-rgb), 0.6));
    }
    .r {
      width: 40%;
      height: 1px;
      background: linear-gradient(to left, transparent, rgba(var(--ys-grey-100-rgb), 0.6));
    }
  }
</style>
