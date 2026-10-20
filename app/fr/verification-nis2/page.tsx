import type { Metadata } from "next";
import Section from "@/components/Section";
import Nis2Checker from "@/components/Nis2Checker";
import { nis2Checker as nis2CheckerDict } from "@/lib/content/fr";

export const metadata: Metadata = {
  title: "Vérification NIS2 | Millecam",
  description: "Trois questions courtes pour une première indication de savoir si votre organisation relève de NIS2.",
};

export default function Nis2CheckPage() {
  return (
    <Section className="pb-24 pt-16">
      <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">Suis-je concerné(e) par NIS2 ?</h1>
      <p className="mt-4 max-w-xl text-ink/70">
        Trois questions courtes pour une première indication. Pas d&apos;inscription, pas d&apos;engagement.
      </p>
      <div className="mt-12 max-w-2xl">
        <Nis2Checker locale="fr" dict={nis2CheckerDict} />
      </div>
    </Section>
  );
}
