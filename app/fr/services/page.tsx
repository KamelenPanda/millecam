import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import PillarGlyph from "@/components/PillarGlyph";
import FrameworkGrid from "@/components/FrameworkGrid";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";
import IllustrationNis2 from "@/components/illustrations/IllustrationNis2";
import IllustrationIso27001 from "@/components/illustrations/IllustrationIso27001";
import IllustrationCyfun from "@/components/illustrations/IllustrationCyfun";
import IllustrationGdpr from "@/components/illustrations/IllustrationGdpr";

export const metadata: Metadata = {
  title: "Services | Millecam",
  description: "Analyse GAP, trajets de mise en œuvre, DPO-as-a-Service, tabletop exercises et accompagnement GRC fractionné.",
};

const DIENSTEN = [
  {
    naam: "Analyse GAP",
    vorm: "Prix fixe, trajet court",
    voorWie: "Les organisations qui veulent savoir où elles en sont par rapport à NIS2, ISO 27001 ou CyFun.",
    watJeKrijgt: "Un rapport avec un score par contrôle, des constats priorisés et un plan d'action concret.",
    href: "/fr/analyse-gap",
  },
  {
    naam: "Trajet de mise en œuvre",
    vorm: "Sur base de projet",
    voorWie: "Les organisations qui veulent transformer les constats en conformité démontrable.",
    watJeKrijgt: "Accompagnement sur les politiques, la documentation et les mesures techniques. Vous gardez la main.",
    href: "/fr/approche",
  },
  {
    naam: "DPO-as-a-Service",
    vorm: "Forfait mensuel",
    voorWie: "Les organisations qui ont besoin d'un DPO, pas d'un poste à temps plein.",
    watJeKrijgt: "Un point de contact externe reconnu pour les questions RGPD, les notifications de fuites et le suivi des traitements.",
    href: "/fr/dpo-externalise",
  },
  {
    naam: "Tabletop exercises & awareness",
    vorm: "Sur base de projet / événement",
    voorWie: "Les équipes qui veulent transformer la théorie en réflexe — avant un incident, pas après.",
    watJeKrijgt: "Des exercices de simulation interactifs sur mesure, avec un rapport concret des enseignements tirés.",
    href: "/fr/exercices-tabletop",
  },
  {
    naam: "Accompagnement GRC fractionné",
    vorm: "Tarif journalier, continu",
    voorWie: "Les organisations qui ont besoin de capacité de conformité ponctuellement (ou structurellement) sans recruter.",
    watJeKrijgt: "Une disponibilité fiable, au rythme qui vous convient.",
    href: "/fr/grc-fractionne",
  },
];

const FRAMEWORKS = [
  {
    naam: "NIS2",
    tekst: "Directive européenne sur la cybersécurité pour les entités essentielles et importantes, pertinente à partir d'une certaine taille ou d'un certain secteur.",
    glyph: <IllustrationNis2 className="h-14 w-14 shrink-0" />,
    href: "/fr/nis2",
  },
  {
    naam: "ISO 27001",
    tekst: "Norme internationale pour la sécurité de l'information. Souvent une exigence contractuelle des clients ou des appels d'offres.",
    glyph: <IllustrationIso27001 className="h-14 w-14 shrink-0" />,
    href: "/fr/iso-27001",
  },
  {
    naam: "CyFun",
    tekst: "Le référentiel belge CyberFundamentals du Centre pour la Cybersécurité Belgique : une alternative accessible pour démontrer la conformité NIS2.",
    glyph: <IllustrationCyfun className="h-14 w-14 shrink-0" />,
    href: "/fr/cyberfundamentals",
  },
  {
    naam: "RGPD",
    tekst: "Législation européenne sur la vie privée, applicable à pratiquement toute organisation qui traite des données à caractère personnel.",
    glyph: <IllustrationGdpr className="h-14 w-14 shrink-0" />,
    href: "/fr/rgpd",
  },
];

export default function DienstenPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <PillarGlyph className="mb-4 h-6 w-5" />
        <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
          Du premier <span className="text-terracotta">diagnostic GAP</span> à l&apos;accompagnement continu
        </h1>
        <p className="mt-4 max-w-xl text-ink/70">
          Une offre qui évolue avec vos besoins, pas avec ce qui se trouve dans un package.
        </p>
      </Section>

      <Section className="bg-white pt-10">
        <h2 className="font-serif text-3xl font-semibold text-ink">Nos services</h2>
        <RevealGroup
          className="mt-8 grid gap-6 md:grid-cols-2"
          itemClassName="h-full"
          items={DIENSTEN.map(({ href, ...d }) => (
            <Link key={d.naam} href={href} className="block h-full">
              <ServiceCard {...d} interactive />
            </Link>
          ))}
        />
      </Section>

      <Section>
        <h2 className="font-serif text-3xl font-semibold text-ink">Les spécialités de Millecam</h2>
        <div className="mt-8">
          <FrameworkGrid frameworks={FRAMEWORKS} />
        </div>
        <Link href="/fr/etudes-de-cas" className="mt-8 inline-block text-sm font-medium text-terracotta hover:underline">
          Voir les études de cas
        </Link>
      </Section>

      <Section className="bg-white">
        <Reveal className="mx-auto max-w-md text-center">
          <PillarGlyph className="mx-auto h-6 w-5" />
          <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">Vous ne savez pas quel service vous convient ?</h2>
          <p className="mt-3 text-sm text-ink/70">
            Planifiez un entretien sans engagement. En trente minutes, vous saurez quelle approche
            correspond à votre situation.
          </p>
          <Button href="/fr/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Planifier un entretien
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
