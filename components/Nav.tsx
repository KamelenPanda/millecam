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
  servicesHeading: "Diensten",
  services: ["GAP-analyse", "Implementatietraject", "DPO-as-a-Service", "Tabletop exercises", "Fractional GRC"],
  cta: "Plan gesprek",
  homeAriaLabel: "Millecam homepage",
  menuOpen: "Menu openen",
  menuClose: "Menu sluiten",
};

const DICTS: Record<Locale, NavDict> = { nl: NL_DICT, en: enNav, fr: frNav };
const LOCALE_LABEL: Record<Locale, string> = { nl: "NL", en: "EN", fr: "FR" };

/** Fixed order matching each NavDict's `frameworks` label array. */
const FRAMEWORK_KEYS: PageKey[] = ["nis2", "iso27001", "cyfun", "gdpr"];
/** Fixed order matching each NavDict's `services` label array. */
const SERVICE_KEYS: PageKey[] = ["gapAnalysis", "approach", "dpoService", "tabletopExercises", "fractionalGrc"];

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

  // The Diensten dropdown is state-driven rather than pure CSS hover/focus:
  // a click on one of its links navigates without the mouse leaving the
  // panel, so a hover-only dropdown would stay stuck open on top of the new
  // page. Closing explicitly on click (and on navigation) fixes that;
  // hover/focus still open it for the pointer/keyboard case.
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    setDropdownOpen(false);
  }, [pathname]);

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
          {/* The first link (Diensten/Services) carries a two-column
              dropdown: the 5 actual services, and — since those otherwise
              live only in the footer, below the fold on every page — the 4
              frameworks Millecam works with. Kept as two separate labeled
              columns so the frameworks (regulations, not services) never
              read as if they were part of the service list. */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onFocus={() => setDropdownOpen(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setDropdownOpen(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") setDropdownOpen(false);
            }}
          >
            <Link
              href={dict.links[0].href}
              onClick={() => setDropdownOpen(false)}
              className="group relative text-sm text-ink hover:text-terracotta"
            >
              {dict.links[0].label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-terracotta transition-all duration-300 group-hover:w-full" />
            </Link>
            <div
              className={`absolute left-0 top-full z-50 mt-3 flex min-w-[360px] border border-line bg-paper shadow-[0_14px_34px_rgba(33,29,24,0.09)] transition-[opacity,visibility] duration-150 ${
                dropdownOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <div className="flex-1 py-2">
                <p className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink/40">
                  {dict.servicesHeading}
                </p>
                {SERVICE_KEYS.map((key, i) => (
                  <Link
                    key={key}
                    href={pageHref(locale, key)}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-ink hover:bg-[#FBF9F4] hover:text-terracotta"
                  >
                    {dict.services[i]}
                  </Link>
                ))}
              </div>
              <div className="flex-1 border-l border-line py-2">
                <p className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink/40">
                  {dict.frameworksHeading}
                </p>
                {FRAMEWORK_KEYS.map((key, i) => (
                  <Link
                    key={key}
                    href={pageHref(locale, key)}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-ink hover:bg-[#FBF9F4] hover:text-terracotta"
                  >
                    {dict.frameworks[i]}
                  </Link>
                ))}
              </div>
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
          servicesHeading={dict.servicesHeading}
          services={SERVICE_KEYS.map((key, i) => ({ label: dict.services[i], href: pageHref(locale, key) }))}
        />
      </div>
    </header>
  );
}
