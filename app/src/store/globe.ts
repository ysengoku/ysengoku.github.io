import { defineStore } from 'pinia';
import { globeSpots } from '@data/globeData';
import { router } from '@router';
import type { GlobeSpot } from '@models/globe';

export const useGlobeStore = defineStore('globe', {
  state: () => ({
    currentSpotId: 'about' as GlobeSpot['id'],
    pendingPage: null as GlobeSpot['id'] | null,
  }),
  actions: {
    updateCurrentSpot(spotId: GlobeSpot['id'], openPage: boolean = false) {
      if (this.currentSpotId === spotId) {
        if (openPage) router.push(`/${spotId}`);
        return;
      }
      this.currentSpotId = spotId;
      if (openPage) this.pendingPage = spotId;
    },
    step(delta: number) {
      const spotCount = globeSpots.length;
      const currentIndex = globeSpots.findIndex((s) => s.id === this.currentSpotId);
      const targetIndex = (currentIndex + delta + spotCount) % spotCount;
      this.currentSpotId = globeSpots[targetIndex].id;
    },
    goToNextSpot() {
      this.step(1);
    },
    goToPreviousSpot() {
      this.step(-1);
    },
  },
});
