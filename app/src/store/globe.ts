import { defineStore } from 'pinia';
import type { GlobeSpot } from '@models/globe';

export const useGlobeStore = defineStore('globe', {
  state: () => ({
    currentSpotId: 'about' as GlobeSpot['id'],
  }),
});
