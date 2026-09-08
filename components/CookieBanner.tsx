"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { pageHref, localeFromPath, type Locale } from "@/lib/i18n";
import type { CookieBannerDict } from "@/lib/content/types";
import { cookieBanner as enCookieBanner } from "@/lib/content/en";
import { cookieBanner as frCookieBanner } from "@/lib/content/fr";

const STORAGE_KEY = "millecam-cookie-notice-seen";

const NL_DICT: CookieBannerDict = {
  title: "Deze site houdt het simpel",
  body: "Millecam gebruikt geen trackingcookies. Voor anonieme bezoekstatistieken gebruiken we Vercel Analytics, dat geen cookies plaatst en geen persoonsgegevens verzamelt.",
  accept: "Begrepen",
  moreInfo: "Meer info",
};

const DICTS: Record<Locale, CookieBannerDict> = { nl: NL_DICT, en: enCookieBanner, fr: frCookieBanner };

/**
 * This is a notice, not a consent gate: the site only uses Vercel Analytics,
 * which is cookieless and processes no personal data (see /cookiebeleid).
 * There is nothing non-essential to opt into, so we show one "Begrepen" button
 * instead of a fake Accept/Reject choice. If real tracking cookies are added
 * later, turn this into an actual consent gate and update /cookiebeleid first.
 *
 * Locale is derived from the live pathname — see Nav.tsx for why.
 */
export default function CookieBanner() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const dict = DICTS[locale];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 sm:bottom-4 sm:left-auto sm:right-6 sm:max-w-[380px]",
        "border-t border-line bg-white p-3 shadow-lg sm:border sm:p-5"
      )}
      role="dialog"
      aria-label="Cookiemelding"
    >
      {/* Mobile: a slim single row — title plus actions, no body copy — so the
          notice never covers a form field or hero content on a short viewport.
          Full card (with body text) returns at sm and up, where it has room. */}
      <div className="flex items-center justify-between gap-3 sm:hidden">
        <p className="font-serif text-sm font-semibold text-ink">{dict.title}</p>
        <div className="flex shrink-0 items-center gap-3">
          <Link href={pageHref(locale, "cookies")} className="text-xs text-ink/60 hover:text-terracotta hover:underline">
            {dict.moreInfo}
          </Link>
          <button
            onClick={dismiss}
            className="bg-terracotta px-3 py-1.5 text-xs font-medium text-paper transition-colors hover:bg-terracotta-light"
          >
            {dict.accept}
          </button>
        </div>
      </div>

      <div className="hidden sm:block">
        <p className="font-serif text-sm font-semibold text-ink">{dict.title}</p>
        <p className="mt-2 text-xs leading-relaxed text-ink/70">{dict.body}</p>
        <div className="mt-4 flex items-center gap-4">
          <button
            onClick={dismiss}
            className="bg-terracotta px-4 py-2 text-xs font-medium text-paper transition-colors hover:bg-terracotta-light"
          >
            {dict.accept}
          </button>
          <Link href={pageHref(locale, "cookies")} className="text-xs text-ink/60 hover:text-terracotta hover:underline">
            {dict.moreInfo}
          </Link>
        </div>
      </div>
    </div>
  );
}
