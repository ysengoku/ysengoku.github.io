import App from './App.vue';
import { createApp, watch } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import { messages } from './i18n';
import { useLocaleStore } from '@store/locale';
import { setLangToUrl } from '@utils/url';
import '@fortawesome/fontawesome-free/css/all.css';
import './style.css';

const app = createApp(App);
const pinia = createPinia();
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});
const localeStore = useLocaleStore(pinia);

app.use(pinia);
app.use(i18n);

watch(
  () => localeStore.locale,
  (lang) => {
    i18n.global.locale.value = lang;
  },
  { immediate: true }
);

app.mount('#app');

const url = new URL(window.location.href);
const lang = url.searchParams.get('lang') as 'en' | 'fr' | null;
lang ? localeStore.setLocale(lang) : setLangToUrl(localeStore.locale);
