import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationClock from "@/components/illustrations/IllustrationClock";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "Consultant GRC fractionné en Belgique | Millecam",
  description:
    "Capacité GRC externe au tarif journalier, en continu ou ponctuellement — un accompagnement conformité sans recruter.",
};

const VOORWIE = [
  {
    titel: "Entre deux phases",
    tekst: "Certification ou mise en œuvre tout juste obtenue, avec le besoin de quelqu'un pour maintenir le programme vivant jusqu'à l'étape suivante.",
  },
  {
    titel: "Pics ponctuels de besoin en capacité",
    tekst: "Le programme de conformité tourne, mais autour des audits, de nouveaux fournisseurs ou d'incidents, la charge de travail dépasse temporairement ce que l'équipe interne peut absorber.",
  },
  {
    titel: "Tester avant de recruter",
    tekst: "Doute sur la nécessité d'un rôle GRC interne, avec l'envie de le vérifier d'abord sans embaucher directement quelqu'un en interne.",
  },
];

const DELIVERABLES = [
  "Une disponibilité fixe et planifiée, au rythme qui vous convient",
  "Un suivi du programme de conformité entre des trajets plus importants",
  "Des conseils ponctuels sur les nouveaux traitements, fournisseurs ou incidents",
  "Un reporting périodique à la direction sur l'état d'avancement",
  "La flexibilité d'augmenter ou de réduire la capacité à mesure que les besoins évoluent",
];

const STAPPEN = [
  { naam: "Cadrage du besoin", tekst: "Quelles tâches, à quel rythme, sont nécessaires." },
  { naam: "Convenir d'un rythme fixe", tekst: "Un engagement concret et prévisible, pas une facturation ponctuelle au coup par coup." },
  { naam: "Engagement continu", tekst: "Avec la possibilité d'ajuster à mesure que la situation évolue." },
];

export default function GrcFractionnePage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">GRC fractionné</span> : de la capacité sans recrutement
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              Une capacité GRC externe au tarif journalier, déployée ponctuellement ou de façon
              structurelle — pour les organisations qui ont besoin d&apos;un accompagnement conformité sans
              le coût ni le risque d&apos;un recrutement permanent.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/fr/contact" variant="primary">Discuter de l&apos;accompagnement GRC fractionné</Button>
              <Button href="/fr/services" variant="secondary">Voir tous les services</Button>
            </div>
          </div>
          <IllustrationClock className="hidden h-28 w-28 shrink-0 md:block" />
        </div>
      </Section>

      <Section className="bg-white pt-10">
        <h2 className="font-serif text-3xl font-semibold text-ink">Pour qui est-ce pertinent ?</h2>
        <RevealGroup
          className="mt-10 grid gap-8 md:grid-cols-3 md:divide-x-2 md:divide-terracotta-light"
          itemClassName="md:pl-8 md:first:pl-0"
          items={VOORWIE.map((v) => (
            <Fragment key={v.titel}>
              <h3 className="font-serif text-lg font-semibold text-ink">{v.titel}</h3>
              <p className="mt-3 text-sm text-ink/70">{v.tekst}</p>
            </Fragment>
          ))}
        />
      </Section>

      <Section>
        <h2 className="font-serif text-3xl font-semibold text-ink">Ce que fait Millecam</h2>
        <p className="mt-4 max-w-2xl text-ink/70">
          Une disponibilité fixe et planifiée, au rythme qui vous convient — par exemple quelques jours par
          mois — mobilisable sur l&apos;ensemble du spectre : des politiques et de la préparation
          d&apos;audits aux questions ponctuelles qui se présentent entre-temps.
        </p>
      </Section>

      <Section dark>
        <h2 className="max-w-2xl font-serif text-3xl font-semibold">Ce que vous obtenez concrètement</h2>
        <RevealGroup
          as="ul"
          itemAs="li"
          className="mt-10 grid gap-4 md:grid-cols-2"
          itemClassName="flex items-start gap-3 text-sm text-paper/80"
          items={DELIVERABLES.map((d) => (
            <Fragment key={d}>
              <PillarGlyph className="mt-1 h-4 w-3 shrink-0" color="#D97A52" />
              <span>{d}</span>
            </Fragment>
          ))}
        />
      </Section>

      <Section className="bg-white pt-10">
        <h2 className="font-serif text-3xl font-semibold text-ink">Comment cela se déroule en pratique</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {STAPPEN.map((s, i) => (
            <div key={s.naam} className="border-l-2 border-terracotta bg-[#FBF9F4] py-5 pl-5 pr-4 shadow-[0_14px_34px_rgba(33,29,24,0.09)]">
              <p className="text-xs font-medium text-muted">Étape {i + 1}</p>
              <h3 className="mt-1 font-serif text-lg font-semibold text-ink">{s.naam}</h3>
              <p className="mt-2 text-sm text-ink/70">{s.tekst}</p>
            </div>
          ))}
        </div>
        <Link href="/fr/approche" className="mt-8 inline-block text-sm font-medium text-terracotta hover:underline">
          En savoir plus sur l&apos;approche
        </Link>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Résultat</h2>
            <p className="mt-4 text-ink/70">
              Une capacité de conformité qui s&apos;adapte à ce dont l&apos;organisation a réellement besoin
              à chaque instant, sans la rigidité d&apos;un recrutement permanent.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Pourquoi Millecam</h2>
            <p className="mt-4 text-ink/70">
              Un point de contact unique et fixe, pas d&apos;équipe changeante. Un contact direct avec la
              personne qui effectue le travail — pas de consultant junior, pas de chaîne d&apos;escalade.{" "}
              <Link href="/fr/a-propos#credentials" className="text-terracotta hover:underline">
                En savoir plus sur Robin
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <Reveal className="mx-auto max-w-md text-center">
          <PillarGlyph className="mx-auto h-6 w-5" />
          <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">Prêt à démarrer ?</h2>
          <p className="mt-3 text-sm text-ink/70">
            Un entretien sans engagement de trente minutes suffit pour déterminer si, et comment, Millecam
            peut vous aider.
          </p>
          <Button href="/fr/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Discuter de l&apos;accompagnement GRC fractionné
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
