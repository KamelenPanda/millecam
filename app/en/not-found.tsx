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
        This page doesn&apos;t exist, or no longer does.
      </h1>
      <p className="mx-auto mt-3 max-w-sm text-sm text-ink/70">
        Check the link, or head back to the homepage.
      </p>
      <Button href="/en" variant="primary" className="mx-auto mt-8 w-fit">
        Go to the homepage
      </Button>
      <p className="mt-6 text-xs text-muted">
        Looking for a service?{" "}
        <Link href="/en/services" className="text-terracotta hover:underline">
          View the offering
        </Link>
        .
      </p>
    </Section>
  );
}
