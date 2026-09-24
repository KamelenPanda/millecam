"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { localeFromPath } from "@/lib/i18n";

/**
 * Keeps <html lang> in sync with the current route. The root layout only
 * sets it once from request headers on the server; Next.js doesn't
 * re-render that layout on client-side navigation between locales (see
 * Nav.tsx), so without this the attribute would go stale after the first
 * navigation, same as the language switcher used to.
 */
export default function LocaleHtmlSync() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = localeFromPath(pathname);
  }, [pathname]);

  return null;
}
