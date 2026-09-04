"use client";

import { usePathname } from "next/navigation";
import Logo from "./Logo";
import FrameworkList from "./FrameworkList";
import { localeHref, localeFromPath, type Locale } from "@/lib/i18n";
import type { FooterDict } from "@/lib/content/types";
import { footer as enFooter } from "@/lib/content/en";
import { footer as frFooter } from "@/lib/content/fr";

const NL_DICT: FooterDict = {
  servicesHeading: "Diensten",
  frameworks: ["NIS2", "ISO 27001", "CyFun", "GDPR"],
  faqLink: "Veelgestelde vragen",
  nis2CheckLink: "NIS2-check",
  contactHeading: "Contact",
  rights: "Millecam",
  linkedinPerson: "LinkedIn: Robin Millecam",
  linkedinCompany: "LinkedIn: Millecam",
  privacy: "Privacybeleid",
  cookies: "Cookiebeleid",
  terms: "Algemene voorwaarden",
  vatLabel: "BTW",
};

const DICTS: Record<Locale, FooterDict> = { nl: NL_DICT, en: enFooter, fr: frFooter };

/** Locale is derived from the live pathname — see Nav.tsx for why. */
export default function Footer() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const dict = DICTS[locale];
  const href = (path: string) => localeHref(locale, path);

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-container px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo variant="paper" className="h-7 w-auto" />
            <p className="mt-4 text-sm text-paper/60">info@millecam.be · millecam.be</p>
            <p className="mt-1 text-sm text-paper/60">
              <a href="tel:+32472338990" className="hover:text-paper">0472 33 89 90</a>
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">{dict.servicesHeading}</p>
            <FrameworkList items={dict.frameworks} tone="paper" className="mt-3" />
            <a href={href("/veelgestelde-vragen")} className="mt-4 block text-sm text-paper/60 hover:text-paper hover:underline">
              {dict.faqLink}
            </a>
            <a href={href("/nis2-check")} className="mt-1 block text-sm text-paper/60 hover:text-paper hover:underline">
              {dict.nis2CheckLink}
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold">{dict.contactHeading}</p>
            <p className="mt-3 text-sm text-paper/60">© {new Date().getFullYear()} {dict.rights}</p>
            <div className="mt-3 flex flex-col gap-1 text-sm text-paper/60">
              <a href="https://www.linkedin.com/in/robin-millecam-909156b2/" target="_blank" rel="noreferrer" className="hover:text-paper hover:underline">{dict.linkedinPerson}</a>
              <a href="https://www.linkedin.com/company/108526083" target="_blank" rel="noreferrer" className="hover:text-paper hover:underline">{dict.linkedinCompany}</a>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-paper/50">
              <a href={href("/privacybeleid")} className="hover:text-paper hover:underline">{dict.privacy}</a>
              <a href={href("/cookiebeleid")} className="hover:text-paper hover:underline">{dict.cookies}</a>
              <a href={href("/algemene-voorwaarden")} className="hover:text-paper hover:underline">{dict.terms}</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-paper/10 pt-6 text-xs text-paper/40">
          Millecam · Robin Millecam · Sinte Annalaan 34, 9300 Aalst · {dict.vatLabel}{" "}
          <a
            href="https://kbopub.economie.fgov.be/kbopub/toonondernemingps.html?ondernemingsnummer=1026876048"
            target="_blank"
            rel="noreferrer"
            className="hover:text-paper/70 hover:underline"
          >
            BE 1026.876.048
          </a>
        </div>
      </div>
    </footer>
  );
}
