export type Locale = "nl" | "en" | "fr";

export const locales: Locale[] = ["nl", "en", "fr"];
export const defaultLocale: Locale = "nl";

export type PageKey =
  | "services"
  | "approach"
  | "about"
  | "contact"
  | "nis2check"
  | "faq"
  | "privacy"
  | "cookies"
  | "terms";

/** Per-locale URL slugs for every non-home page, so EN/FR get idiomatic URLs
 * instead of carrying the Dutch slug (e.g. /fr/approche, not /fr/aanpak). */
const SLUGS: Record<Locale, Record<PageKey, string>> = {
  nl: {
    services: "diensten",
    approach: "aanpak",
    about: "over",
    contact: "contact",
    nis2check: "nis2-check",
    faq: "veelgestelde-vragen",
    privacy: "privacybeleid",
    cookies: "cookiebeleid",
    terms: "algemene-voorwaarden",
  },
  en: {
    services: "services",
    approach: "approach",
    about: "about",
    contact: "contact",
    nis2check: "nis2-check",
    faq: "faq",
    privacy: "privacy-policy",
    cookies: "cookie-policy",
    terms: "terms-and-conditions",
  },
  fr: {
    services: "services",
    approach: "approche",
    about: "a-propos",
    contact: "contact",
    nis2check: "verification-nis2",
    faq: "faq",
    privacy: "politique-de-confidentialite",
    cookies: "politique-de-cookies",
    terms: "conditions-generales",
  },
};

/** Builds the localized URL for a canonical page, e.g. pageHref("fr", "approach") -> "/fr/approche". */
export function pageHref(locale: Locale, key: PageKey): string {
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  return `${prefix}/${SLUGS[locale][key]}`;
}

/**
 * Identifies which canonical page a pathname points to, so the language
 * switcher can jump to the equivalent page in another locale rather than
 * just swapping the prefix (which would break now that slugs differ per
 * locale). Returns null for the homepage or an unrecognized path.
 */
export function pageKeyFromPath(pathname: string): PageKey | null {
  const locale = localeFromPath(pathname);
  const rest = stripLocaleFromPath(pathname);
  if (rest === "/" || rest === "") return null;
  const slug = rest.replace(/^\//, "").split("/")[0];
  const entry = (Object.entries(SLUGS[locale]) as [PageKey, string][]).find(
    ([, s]) => s === slug
  );
  return entry?.[0] ?? null;
}

/** Detects the locale from a pathname, e.g. "/en/services" -> "en". */
export function localeFromPath(pathname: string): Locale {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale;
    }
  }
  return defaultLocale;
}

/** Strips a leading /en or /fr segment, e.g. "/en/services" -> "/services". */
export function stripLocaleFromPath(pathname: string): string {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(`/${locale}`.length) || "/";
    }
  }
  return pathname;
}
