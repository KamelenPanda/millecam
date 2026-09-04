export type Locale = "nl" | "en" | "fr";

export const locales: Locale[] = ["nl", "en", "fr"];
export const defaultLocale: Locale = "nl";

/**
 * URL slugs stay identical across locales (e.g. /en/diensten, not
 * /en/services) — one nav/footer link list to maintain instead of a
 * per-locale slug map, at the cost of slightly less idiomatic EN/FR URLs.
 */
export function localeHref(locale: Locale, path: string): string {
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  return `${prefix}${path}` || "/";
}

/** Detects the locale from a pathname, e.g. "/en/diensten" -> "en". */
export function localeFromPath(pathname: string): Locale {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale;
    }
  }
  return defaultLocale;
}

/** Strips a leading /en or /fr segment, e.g. "/en/diensten" -> "/diensten". */
export function stripLocaleFromPath(pathname: string): string {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(`/${locale}`.length) || "/";
    }
  }
  return pathname;
}
