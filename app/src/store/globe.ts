import { defineStore } from 'pinia';
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
  },
});
