import { defineStore } from 'pinia';
import type { GlobeStop } from '@models/globe';

export const useGlobeStore = defineStore('globe', {
  state: () => ({
    currentStopId: 'about' as GlobeStop['id'],
  }),
});
