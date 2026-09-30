import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import FrameworkChecker from "@/components/FrameworkChecker";
import { frameworkChecker as dict } from "@/lib/content/fr";

export const metadata: Metadata = {
  title: "Quel cadre est pertinent ? | Millecam",
  description: "Quatre courtes questions pour une première indication sur la pertinence de NIS2, ISO 27001, CyFun et RGPD pour votre organisation.",
};

export default function VerificationCadresPage() {
  return (
    <Section className="pb-24 pt-16">
      <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">Quel cadre est pertinent pour vous ?</h1>
      <p className="mt-4 max-w-xl text-ink/70">
        Quatre courtes questions pour une première indication sur NIS2, ISO 27001, CyFun et RGPD à la
        fois. Pas d&apos;inscription, aucune obligation. Surtout curieux(se) à propos de NIS2 ?{" "}
        <Link href="/fr/verification-nis2" className="text-terracotta hover:underline">
          Faites la vérification NIS2 ciblée
        </Link>
        .
      </p>
      <div className="mt-12 max-w-2xl">
        <FrameworkChecker locale="fr" dict={dict} />
      </div>
    </Section>
  );
}
