import App from './App.vue';
import { createApp, watch } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import { messages } from './i18n';
import { useLocaleStore } from '@store/locale';
import { router } from './router';
import { setLangToUrl } from '@utils/url';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fontsource/zen-kaku-gothic-new/400.css';
import '@fontsource/zen-kaku-gothic-new/500.css';
import '@fontsource/zen-kaku-gothic-new/700.css';
import './style.css';
import type { Locale } from '@store/locale';

const app = createApp(App);
const pinia = createPinia();
const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages,
});
const localeStore = useLocaleStore(pinia);

app.use(pinia);
app.use(i18n);
app.use(router);

watch(
  () => localeStore.locale,
  (lang) => {
    i18n.global.locale.value = lang;
    document.documentElement.lang = lang;
  },
  { immediate: true }
);

app.mount('#app');

const url = new URL(window.location.href);
const lang = url.searchParams.get('lang') as Locale | null;
if (lang) localeStore.setLocale(lang);
else setLangToUrl(localeStore.locale);
