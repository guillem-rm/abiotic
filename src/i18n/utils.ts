import { ui, defaultLocale, type Locale, type UIKey } from './translations';

/** Detect the current locale from a URL object. */
export function getLangFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split('/');
  if (segment === 'es' || segment === 'en' || segment === 'fr') return segment;
  return defaultLocale;
}

/** Return the pathname stripped of any locale prefix. */
export function stripLocale(pathname: string): string {
  return pathname.replace(/^\/(es|en|fr)(\/|$)/, '/');
}

/** Build a locale-prefixed URL for a given path. */
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  // path should start with '/'
  const clean = path === '/' ? '' : path;
  return `/${locale}${clean}`;
}

/** Build the equivalent URL for the same page in another locale. */
export function getLocaleUrl(targetLocale: Locale, currentPathname: string): string {
  const base = stripLocale(currentPathname);
  return localePath(targetLocale, base || '/');
}

/** Return a t() translation function bound to a locale. */
export function useTranslations(lang: Locale) {
  return function t(key: UIKey): string {
    const val = (ui[lang] as Record<string, string>)[key];
    if (val !== undefined) return val;
    // Fallback to default locale
    return (ui[defaultLocale] as Record<string, string>)[key] ?? key;
  };
}
