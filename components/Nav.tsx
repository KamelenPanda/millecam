import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

const LINKS = [
  { href: "/diensten", label: "Diensten" },
  { href: "/aanpak", label: "Aanpak" },
  { href: "/nis2-check", label: "NIS2-check" },
  { href: "/veelgestelde-vragen", label: "FAQ" },
  { href: "/over", label: "Over" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="relative border-b border-line bg-paper">
      <div className="mx-auto flex max-w-container items-center justify-between px-6 py-5">
        <Link href="/" aria-label="Millecam homepage">
          <Logo variant="ink" className="h-8 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="group relative text-sm text-ink hover:text-terracotta">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-terracotta transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <Button href="/contact" variant="primary" className="hidden md:inline-flex">
          Plan gesprek
        </Button>
        <MobileMenu links={LINKS} />
      </div>
    </header>
  );
}
