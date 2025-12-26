export function getCurrentLang(): 'en' | 'fr' | 'ja' {
  const lang = new URLSearchParams(window.location.search).get('lang');
  if (lang === 'fr') return 'fr';
  // if (lang === 'ja') return 'ja';
  return 'en'; // Default
}

export function setLangToUrl(lang: 'en' | 'fr') {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url.toString());
}

export function buildHashLink(hash: string) {
  const lang = getCurrentLang();
  return `${window.location.pathname}?lang=${lang}#${hash}`;
}
