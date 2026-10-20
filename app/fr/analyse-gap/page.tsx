import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationGap from "@/components/illustrations/IllustrationGap";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "Analyse GAP conformité | NIS2, ISO 27001, CyFun | Millecam",
  description:
    "Une analyse GAP à prix fixe par rapport à NIS2, ISO 27001, CyberFundamentals ou au RGPD : une vision claire de votre situation, avant d'investir dans la mise en œuvre.",
};

const VOORWIE = [
  {
    titel: "D'abord la visibilité, ensuite l'investissement",
    tekst: "Vous voulez savoir quelle est l'ampleur de l'écart avant de démarrer un trajet de mise en œuvre.",
  },
  {
    titel: "Un doute sur le bon cadre",
    tekst: "NIS2, ISO 27001 ou CyberFundamentals : quel cadre convient, et à quel niveau, n'est pas encore clair.",
  },
  {
    titel: "Faire évaluer un programme existant",
    tekst: "Une démarche de conformité est déjà en cours, mais personne n'a fait vérifier objectivement si elle est suffisante.",
  },
];

const DELIVERABLES = [
  "Rapport GAP avec scoring par contrôle (documentation et mise en œuvre)",
  "Priorisation des constats : critique, important, et souhaitable",
  "Plan d'action concret avec une estimation réaliste de l'effort à fournir",
  "Un avis argumenté sur le cadre ou le niveau le plus adapté, si celui-ci n'est pas encore choisi",
  "Présentation des résultats à la direction ou à l'équipe responsable",
];

const STAPPEN = [
  { naam: "Prise de contact & choix du cadre", tekst: "Quel cadre (ou quel niveau) est pertinent pour cette organisation." },
  { naam: "Revue documentaire & entretiens", tekst: "C'est ici que se concentre l'essentiel du délai." },
  { naam: "Rapport & plan d'action", tekst: "Les constats, priorisés et concrets." },
];

export default function AnalyseGapPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">Analyse GAP</span> : savoir où vous en êtes, avant d&apos;investir
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              Un trajet court, à prix fixe, qui détermine où en est votre organisation aujourd&apos;hui
              par rapport à un référentiel choisi (NIS2, ISO 27001, CyberFundamentals ou le RGPD) avant
              d&apos;investir dans un trajet de mise en œuvre complet.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/fr/contact" variant="primary">Démarrer une analyse GAP</Button>
              <Button href="/fr/verification-nis2" variant="secondary">Vous ne savez pas quel cadre choisir ?</Button>
            </div>
          </div>
          <IllustrationGap className="hidden h-28 w-28 shrink-0 md:block" />
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
          Revue documentaire, entretiens avec les responsables, et un scoring à deux dimensions
          (documentation et mise en œuvre effective) par contrôle du cadre choisi. Le résultat est une
          image claire, pas un rapport truffé de jargon.
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
        <h2 className="font-serif text-3xl font-semibold text-ink">Comment se déroule une analyse GAP</h2>
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
              Une base solide pour décider : investir davantage, et dans quoi précisément, plutôt que de
              deviner.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Pourquoi Millecam</h2>
            <p className="mt-4 text-ink/70">
              Un point de contact fixe unique, pas d&apos;équipe qui change. Contact direct avec la
              personne qui exécute le travail : pas de consultant junior, pas de chaîne
              d&apos;escalade.{" "}
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
          <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">Prêt(e) à démarrer ?</h2>
          <p className="mt-3 text-sm text-ink/70">
            Un entretien sans engagement de trente minutes suffit pour savoir si, et comment, Millecam
            peut vous aider.
          </p>
          <Button href="/fr/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Démarrer une analyse GAP
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
