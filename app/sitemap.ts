import type { MetadataRoute } from "next";
import { locales, defaultLocale, pageKeys, pageHref, type Locale } from "@/lib/i18n";

const BASE_URL = "https://millecam.be";

function languageAlternates(key: Parameters<typeof pageHref>[1] | null) {
  const languages: Partial<Record<Locale | "x-default", string>> = {};
  for (const locale of locales) {
    const href = key ? pageHref(locale, key) : locale === defaultLocale ? "/" : `/${locale}`;
    languages[locale] = `${BASE_URL}${href}`;
  }
  languages["x-default"] = languages[defaultLocale];
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const homeHref = locale === defaultLocale ? "/" : `/${locale}`;
    entries.push({
      url: `${BASE_URL}${homeHref}`,
      alternates: { languages: languageAlternates(null) },
    });

    for (const key of pageKeys) {
      entries.push({
        url: `${BASE_URL}${pageHref(locale, key)}`,
        alternates: { languages: languageAlternates(key) },
      });
    }
  }

  return entries;
}
