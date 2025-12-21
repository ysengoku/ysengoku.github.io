import { defineStore } from 'pinia';

export const usePopupStore = defineStore('popup', {
  state: () => ({
    isOpen: false,
    type: 'project',
    contentId: 0 as number,
  }),
  actions: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    setType(type: string) {
      this.type = type;
    },
    setContentId(id: number) {
      this.contentId = id;
    },
  },
});
