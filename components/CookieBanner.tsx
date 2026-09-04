"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { localeHref, type Locale } from "@/lib/i18n";
import type { CookieBannerDict } from "@/lib/content/types";

const STORAGE_KEY = "millecam-cookie-notice-seen";

const NL_DICT: CookieBannerDict = {
  title: "Deze site houdt het simpel",
  body: "Millecam gebruikt geen trackingcookies. Voor anonieme bezoekstatistieken gebruiken we Vercel Analytics, dat geen cookies plaatst en geen persoonsgegevens verzamelt.",
  accept: "Begrepen",
  moreInfo: "Meer info",
};

type CookieBannerProps = { locale?: Locale; dict?: CookieBannerDict };

/**
 * This is a notice, not a consent gate: the site only uses Vercel Analytics,
 * which is cookieless and processes no personal data (see /cookiebeleid).
 * There is nothing non-essential to opt into, so we show one "Begrepen" button
 * instead of a fake Accept/Reject choice. If real tracking cookies are added
 * later, turn this into an actual consent gate and update /cookiebeleid first.
 */
export default function CookieBanner({ locale = "nl", dict = NL_DICT }: CookieBannerProps) {
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
        "fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-6 sm:max-w-[380px]",
        "border border-line bg-white p-5 shadow-lg"
      )}
      role="dialog"
      aria-label="Cookiemelding"
    >
      <p className="font-serif text-sm font-semibold text-ink">{dict.title}</p>
      <p className="mt-2 text-xs leading-relaxed text-ink/70">{dict.body}</p>
      <div className="mt-4 flex items-center gap-4">
        <button
          onClick={dismiss}
          className="bg-terracotta px-4 py-2 text-xs font-medium text-paper transition-colors hover:bg-terracotta-light"
        >
          {dict.accept}
        </button>
        <Link href={localeHref(locale, "/cookiebeleid")} className="text-xs text-ink/60 hover:text-terracotta hover:underline">
          {dict.moreInfo}
        </Link>
      </div>
    </div>
  );
}
