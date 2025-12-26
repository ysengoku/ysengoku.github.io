import { defineStore } from 'pinia';
import { setLangToUrl } from '@utils/url';

export type Locale = 'en' | 'fr';
export const useLocaleStore = defineStore('locale', {
  state: () => ({
    locale: 'fr' as Locale,
  }),
  actions: {
    setLocale(lang: Locale) {
      this.locale = lang;
    },
    getCurrentLangName() {
      const langNames = {
        en: 'English',
        fr: 'Français',
        // ja: '日本語',/
      };
      return langNames[this.locale];
    },
    getLangName(lang: Locale) {
      const langNames = {
        en: 'English',
        fr: 'Français',
        // ja: '日本語',/
      };
      return langNames[lang];
    },
    changeLanguage(lang: 'en' | 'fr') {
      this.locale = lang;
      setLangToUrl(lang);
    },
  },
});
