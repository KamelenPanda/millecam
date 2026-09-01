import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const LINKS = [
  { href: "/diensten", label: "Diensten" },
  { href: "/aanpak", label: "Aanpak" },
  { href: "/over", label: "Over" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex max-w-container items-center justify-between px-6 py-5">
        <Link href="/" aria-label="Millecam homepage">
          <Logo variant="ink" className="h-8 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-ink hover:text-terracotta">
              {l.label}
            </Link>
          ))}
        </nav>
        <Button href="/contact" variant="primary" className="hidden md:inline-flex">
          Plan gesprek
        </Button>
      </div>
    </header>
  );
}
