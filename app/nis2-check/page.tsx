import type { Metadata } from "next";
import Section from "@/components/Section";
import Nis2Checker from "@/components/Nis2Checker";

export const metadata: Metadata = {
  title: "NIS2-check | Millecam",
  description: "Drie vragen om een eerste indicatie te krijgen of jouw organisatie onder NIS2 valt.",
};

export default function Nis2CheckPage() {
  return (
    <Section className="pb-24 pt-16">
      <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">Val ik onder NIS2?</h1>
      <p className="mt-4 max-w-xl text-ink/70">
        Drie korte vragen voor een eerste indicatie. Geen registratie, geen verplichtingen.
      </p>
      <div className="mt-12 max-w-2xl">
        <Nis2Checker />
      </div>
    </Section>
  );
}
