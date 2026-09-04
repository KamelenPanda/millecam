import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";

export default function NotFound() {
  return (
    <Section className="pb-24 pt-24 text-center">
      <PillarGlyph className="mx-auto h-8 w-6" />
      <p className="mt-4 font-serif text-6xl font-bold text-terracotta">404</p>
      <h1 className="mx-auto mt-4 max-w-md font-serif text-2xl font-semibold text-ink">
        Cette page n&apos;existe pas, ou plus.
      </h1>
      <p className="mx-auto mt-3 max-w-sm text-sm text-ink/70">
        Vérifiez le lien, ou retournez à la page d&apos;accueil.
      </p>
      <Button href="/fr" variant="primary" className="mx-auto mt-8 w-fit">
        Aller à la page d&apos;accueil
      </Button>
      <p className="mt-6 text-xs text-muted">
        Vous cherchez un service ?{" "}
        <Link href="/fr/diensten" className="text-terracotta hover:underline">
          Découvrez l&apos;offre
        </Link>
        .
      </p>
    </Section>
  );
}
