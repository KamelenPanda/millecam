"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Button from "./Button";
import MobileMenu from "./MobileMenu";
import { locales, localeHref, stripLocaleFromPath, type Locale } from "@/lib/i18n";
import type { NavDict } from "@/lib/content/types";

const NL_DICT: NavDict = {
  links: [
    { href: "/diensten", label: "Diensten" },
    { href: "/aanpak", label: "Aanpak" },
    { href: "/nis2-check", label: "NIS2-check" },
    { href: "/veelgestelde-vragen", label: "FAQ" },
    { href: "/over", label: "Over" },
    { href: "/contact", label: "Contact" },
  ],
  cta: "Plan gesprek",
  homeAriaLabel: "Millecam homepage",
  menuOpen: "Menu openen",
  menuClose: "Menu sluiten",
};

const LOCALE_LABEL: Record<Locale, string> = { nl: "NL", en: "EN", fr: "FR" };

type NavProps = { locale?: Locale; dict?: NavDict };

export default function Nav({ locale = "nl", dict = NL_DICT }: NavProps) {
  const pathname = usePathname();
  const basePath = stripLocaleFromPath(pathname);
  const homeHref = locale === "nl" ? "/" : `/${locale}`;

  return (
    <header className="relative border-b border-line bg-paper">
      <div className="mx-auto flex max-w-container items-center justify-between px-6 py-5">
        <Link href={homeHref} aria-label={dict.homeAriaLabel}>
          <Logo variant="ink" className="h-8 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {dict.links.map((l) => (
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
                  <span className="font-semibold text-terracotta">{LOCALE_LABEL[l]}</span>
                ) : (
                  <Link href={localeHref(l, basePath)} className="hover:text-terracotta">
                    {LOCALE_LABEL[l]}
                  </Link>
                )}
              </span>
            ))}
          </div>
          <Button href={localeHref(locale, "/contact")} variant="primary" className="inline-flex">
            {dict.cta}
          </Button>
        </div>
        <MobileMenu links={dict.links} cta={dict.cta} locale={locale} basePath={basePath} menuOpenLabel={dict.menuOpen} menuCloseLabel={dict.menuClose} />
      </div>
    </header>
  );
}
