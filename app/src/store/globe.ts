import { defineStore } from 'pinia';
import { globeSpots } from '@data/globeData';
import { navigateWithTransition } from '@utils/viewTransition';
import type { GlobeSpot } from '@models/globe';

export const useGlobeStore = defineStore('globe', {
  state: () => ({
    currentSpotId: 'about' as GlobeSpot['id'],
    pendingPage: null as GlobeSpot['id'] | null,
  }),
  actions: {
    updateCurrentSpot(spotId: GlobeSpot['id'], openPage: boolean = false) {
      if (this.currentSpotId === spotId) {
        if (openPage) navigateWithTransition(`/${spotId}`);
        return;
      }
      this.currentSpotId = spotId;
      this.pendingPage = openPage ? spotId : null;
    },
    step(delta: number) {
      const spotCount = globeSpots.length;
      const currentIndex = globeSpots.findIndex((s) => s.id === this.currentSpotId);
      const targetIndex = (currentIndex + delta + spotCount) % spotCount;
      this.currentSpotId = globeSpots[targetIndex].id;
      this.pendingPage = null;
    },
    goToNextSpot() {
      this.step(1);
    },
    goToPreviousSpot() {
      this.step(-1);
    },
  },
});
