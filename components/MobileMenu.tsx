"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";

type MobileMenuProps = {
  links: { href: string; label: string }[];
};

export default function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Menu sluiten" : "Menu openen"}
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
          <Button href="/contact" variant="primary" className="mt-6 w-full">
            Plan gesprek
          </Button>
        </div>
      )}
    </div>
  );
}
