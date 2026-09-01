import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <Section className="pb-24 pt-24 text-center">
      <p className="font-serif text-6xl font-bold text-terracotta">404</p>
      <h1 className="mx-auto mt-4 max-w-md font-serif text-2xl font-semibold text-ink">
        Deze pagina bestaat niet, of niet meer.
      </h1>
      <p className="mx-auto mt-3 max-w-sm text-sm text-ink/70">
        Controleer de link, of ga terug naar de homepage.
      </p>
      <Button href="/" variant="primary" className="mx-auto mt-8 w-fit">
        Naar de homepage
      </Button>
      <p className="mt-6 text-xs text-muted">
        Op zoek naar een dienst?{" "}
        <Link href="/diensten" className="text-terracotta hover:underline">
          Bekijk het aanbod
        </Link>
        .
      </p>
    </Section>
  );
}
