"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { locales, pageHref, type Locale, type PageKey } from "@/lib/i18n";

type MobileMenuProps = {
  links: { href: string; label: string }[];
  cta?: string;
  locale?: Locale;
  pageKey?: PageKey | null;
  menuOpenLabel?: string;
  menuCloseLabel?: string;
};

const LOCALE_LABEL: Record<Locale, string> = { nl: "NL", en: "EN", fr: "FR" };

export default function MobileMenu({
  links,
  cta = "Plan gesprek",
  locale = "nl",
  pageKey = null,
  menuOpenLabel = "Menu openen",
  menuCloseLabel = "Menu sluiten",
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? menuCloseLabel : menuOpenLabel}
        aria-expanded={open}
        className="relative z-10 flex h-9 w-9 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`h-0.5 w-6 bg-ink transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span className={`h-0.5 w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
        <span
          className={`h-0.5 w-6 bg-ink transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-50 border-b border-line bg-paper px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-ink hover:text-terracotta"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex items-center gap-3 text-sm text-ink/50">
            {locales.map((l, i) => (
              <span key={l} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true">/</span>}
                {l === locale ? (
                  <span className="font-semibold text-terracotta">{LOCALE_LABEL[l]}</span>
                ) : (
                  <Link href={pageKey ? pageHref(l, pageKey) : l === "nl" ? "/" : `/${l}`} onClick={() => setOpen(false)} className="hover:text-terracotta">
                    {LOCALE_LABEL[l]}
                  </Link>
                )}
              </span>
            ))}
          </div>
          <Button href={pageHref(locale, "contact")} variant="primary" className="mt-4 w-full">
            {cta}
          </Button>
        </div>
      )}
    </div>
  );
}
