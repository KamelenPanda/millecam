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
