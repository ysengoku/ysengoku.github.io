<script setup lang="ts">
  import { navigateWithTransition } from '@utils/viewTransition';
  import { useGlobeStore } from '@store/globe';
  import type { GlobeSpot, SpotPlacement } from '@models/globe';

  const globeStore = useGlobeStore();

  defineProps<{
    spot: GlobeSpot;
    placement?: SpotPlacement;
    active: boolean;
  }>();
</script>

<template>
  <div
    class="pin"
    :class="{ off: !placement?.visible, active: active }"
    :style="placement && { transform: `translate(${placement.x}px, ${placement.y}px)` }"
    tabIndex="-1"
  >
    <button class="cursor-pointer" @click="globeStore.updateCurrentSpot(spot.id)">
      <span class="pin-dot"></span>
      <span class="pin-label">{{ $t(spot.labelKey) }}</span>
    </button>
    <span class="pin-card">
      <h2 class="uppercase text-2xl font-bold">
        {{ $t(spot.labelKey) }}
      </h2>
      <span class="text-sm">{{ $t(spot.summaryKey) }}</span>
      <button
        type="button"
        class="open cursor-pointer"
        @click="navigateWithTransition(`/${spot.id}`)"
      >
        {{ $t('explore') }} <FontAwesomeIcon icon="arrow-right" />
      </button>
    </span>
  </div>
</template>

<style scoped>
  .pin {
    position: absolute;
    left: 0;
    top: 0;
  }

  .pin.off {
    visibility: hidden;
  }

  .pin-dot {
    position: absolute;
    left: -8px;
    top: -8px;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border-radius: 50%;
    background: var(--ys-grey-700);
    border: 4px solid var(--route);
  }

  .pin-label {
    position: absolute;
    left: 0;
    bottom: 40px;
    transform: translateX(-50%);
    white-space: nowrap;
    font-size: 16px;
    padding: 8px 12px;
    border-radius: 999px;
    background: var(--card);
    border: 1px solid var(--line);
  }

  .pin-card {
    position: absolute;
    left: 0;
    bottom: 48px;
    width: min(16rem, 100vw - 2rem);
    box-sizing: border-box;
    transform: translateX(calc(-50% + var(--shift, 0px))) translateY(8px) scale(0.96);
    transform-origin: calc(50% - var(--shift, 0px)) 100%;
    opacity: 0;
    visibility: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px 32px;
    text-align: left;
    background: var(--card);
    border-radius: 0.5rem;
    box-shadow: 0 18px 40px -18px rgba(var(--ys-secondary-600-rgb), 0.35);
    transition:
      opacity 0.25s ease,
      transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1),
      visibility 0.25s;
  }

  .pin-card::after {
    content: '';
    position: absolute;
    left: calc(50% - var(--shift, 0px));
    bottom: -8px;
    width: 16px;
    height: 20px;
    background: var(--card);
    transform: translateX(-50%) rotate(45deg);
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
  }

  .pin.active .pin-card {
    opacity: 1;
    visibility: visible;
    transform: translateX(calc(-50% + var(--shift, 0px))) translateY(0) scale(1);
    view-transition-name: spotcard;
  }

  .pin.active .pin-label {
    opacity: 0;
  }

  body.page-open .pin.active .pin-card {
    view-transition-name: none;
  }

  .coords {
    font: 400 11px/1.2 var(--font-mono);
    letter-spacing: 0.04em;
    color: var(--muted);
    font-variant-numeric: tabular-nums;
  }

  .pin-card .place {
    font-size: 14px;
    color: var(--muted);
  }

  .pin-card .open {
    margin-top: 6px;
    display: inline-flex;
    justify-content: center;
    align-items: baseline;
    gap: 4px;
    font-weight: 700;
    color: var(--ys-grey-300);
  }
</style>
