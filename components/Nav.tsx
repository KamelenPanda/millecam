"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import MobileMenu from "./MobileMenu";
import { locales, pageHref, localeFromPath, pageKeyFromPath, type Locale, type PageKey } from "@/lib/i18n";
import type { NavDict } from "@/lib/content/types";
import { nav as enNav } from "@/lib/content/en";
import { nav as frNav } from "@/lib/content/fr";

const NL_DICT: NavDict = {
  links: [
    { href: "/diensten", label: "Diensten" },
    { href: "/aanpak", label: "Aanpak" },
    { href: "/cases", label: "Cases" },
    { href: "/nis2-check", label: "NIS2-check" },
    { href: "/veelgestelde-vragen", label: "FAQ" },
    { href: "/over", label: "Over" },
    { href: "/contact", label: "Contact" },
  ],
  frameworksHeading: "Kaders",
  frameworks: ["NIS2", "ISO 27001", "CyFun", "GDPR"],
  cta: "Plan gesprek",
  homeAriaLabel: "Millecam homepage",
  menuOpen: "Menu openen",
  menuClose: "Menu sluiten",
};

const DICTS: Record<Locale, NavDict> = { nl: NL_DICT, en: enNav, fr: frNav };
const LOCALE_LABEL: Record<Locale, string> = { nl: "NL", en: "EN", fr: "FR" };

/** Fixed order matching each NavDict's `frameworks` label array. */
const FRAMEWORK_KEYS: PageKey[] = ["nis2", "iso27001", "cyfun", "gdpr"];

/**
 * Locale is derived from the live pathname rather than passed down from the
 * root layout: that layout is a Server Component that Next.js does not
 * re-render on client-side navigation between routes it already rendered
 * once (it's the same shared layout segment for every locale), so a
 * server-computed `locale` prop would go stale after the first navigation.
 * usePathname() stays reactive across navigations, so deriving here keeps
 * the language switcher (and everything else) in sync.
 */
export default function Nav() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const dict = DICTS[locale];
  const pageKey = pageKeyFromPath(pathname);
  const homeHref = locale === "nl" ? "/" : `/${locale}`;

  // Only paint-affecting properties (background, border, blur) change here,
  // never the header's box size, so this never causes layout shift.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80);
        ticking = false;
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-200 ease-out ${
        scrolled
          ? "border-line bg-paper/90 shadow-[0_1px_0_rgba(33,29,24,0.04)] backdrop-blur-md"
          : "border-transparent bg-paper"
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-6 py-5">
        <Link href={homeHref} aria-label={dict.homeAriaLabel}>
          <Logo variant="ink" className="h-8 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {/* The first link (Diensten/Services) always carries the frameworks
              dropdown — the four framework pages otherwise live only in the
              footer, below the fold on every page. */}
          <div className="group/frameworks relative">
            <Link
              href={dict.links[0].href}
              className="group relative text-sm text-ink hover:text-terracotta"
            >
              {dict.links[0].label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-terracotta transition-all duration-300 group-hover:w-full" />
            </Link>
            <div
              className="invisible absolute left-0 top-full z-50 mt-3 min-w-[170px] border border-line bg-paper opacity-0 shadow-[0_14px_34px_rgba(33,29,24,0.09)] transition-[opacity,visibility] duration-150 group-hover/frameworks:visible group-hover/frameworks:opacity-100 group-focus-within/frameworks:visible group-focus-within/frameworks:opacity-100"
            >
              <p className="border-b border-line px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink/40">
                {dict.frameworksHeading}
              </p>
              {FRAMEWORK_KEYS.map((key, i) => (
                <Link
                  key={key}
                  href={pageHref(locale, key)}
                  className="block px-4 py-2.5 text-sm text-ink hover:bg-[#FBF9F4] hover:text-terracotta"
                >
                  {dict.frameworks[i]}
                </Link>
              ))}
            </div>
          </div>
          {dict.links.slice(1).map((l) => (
            <Link key={l.href} href={l.href} className="group relative text-sm text-ink hover:text-terracotta">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-terracotta transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <div className="flex items-center gap-2 text-xs text-ink/50" aria-label="Taal / Language / Langue">
            {locales.map((l, i) => (
              <span key={l} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {l === locale ? (
                  <span className="font-semibold text-terracotta-darker">{LOCALE_LABEL[l]}</span>
                ) : (
                  <Link href={pageKey ? pageHref(l, pageKey) : l === "nl" ? "/" : `/${l}`} className="hover:text-terracotta">
                    {LOCALE_LABEL[l]}
                  </Link>
                )}
              </span>
            ))}
          </div>
          <Button href={pageHref(locale, "contact")} variant="primary" className="inline-flex">
            {dict.cta}
          </Button>
        </div>
        <MobileMenu
          links={dict.links}
          cta={dict.cta}
          locale={locale}
          pageKey={pageKey}
          menuOpenLabel={dict.menuOpen}
          menuCloseLabel={dict.menuClose}
          frameworksHeading={dict.frameworksHeading}
          frameworks={FRAMEWORK_KEYS.map((key, i) => ({ label: dict.frameworks[i], href: pageHref(locale, key) }))}
        />
      </div>
    </header>
  );
}
