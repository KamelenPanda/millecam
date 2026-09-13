import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import FrameworkChecker from "@/components/FrameworkChecker";

export const metadata: Metadata = {
  title: "Welk kader is relevant? | Millecam",
  description: "Vier korte vragen voor een eerste indicatie welke van NIS2, ISO 27001, CyFun en GDPR voor jouw organisatie relevant zijn.",
};

export default function KaderCheckPage() {
  return (
    <Section className="pb-24 pt-16">
      <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">Welk kader is relevant voor jou?</h1>
      <p className="mt-4 max-w-xl text-ink/70">
        Vier korte vragen voor een eerste indicatie over NIS2, ISO 27001, CyFun en GDPR samen. Geen
        registratie, geen verplichtingen. Val je vooral onder NIS2 nieuwsgierig?{" "}
        <Link href="/nis2-check" className="text-terracotta hover:underline">
          Doe de gerichte NIS2-check
        </Link>
        .
      </p>
      <div className="mt-12 max-w-2xl">
        <FrameworkChecker />
      </div>
    </Section>
  );
}
