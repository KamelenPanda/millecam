import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationCyfun from "@/components/illustrations/IllustrationCyfun";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "Consultant CyberFundamentals (CyFun) en Belgique | Millecam",
  description:
    "Analyse GAP CyFun et détermination du niveau (Basic, Important, Essential) pour les PME belges : une alternative accessible pour démontrer votre conformité NIS2.",
};

const VOORWIE = [
  {
    titel: "À la recherche d'une conformité démontrable NIS2, avec pragmatisme",
    tekst: "Les PME qui doivent démontrer leur conformité NIS2, mais qui ne veulent pas se lancer directement dans un trajet complet de certification ISO 27001.",
  },
  {
    titel: "Un client ou un donneur d'ordre demande un niveau",
    tekst: "Un client ou un marché public exige une conformité démontrable à un niveau CyFun spécifique (Basic, Important ou Essential).",
  },
  {
    titel: "Hésitation entre les référentiels",
    tekst: "Les organisations qui ne savent pas si NIS2, CyFun ou ISO 27001 est le bon point de départ, et qui souhaitent d'abord un avis pragmatique.",
  },
];

const DELIVERABLES = [
  "Analyse GAP par rapport au niveau CyFun choisi (Basic, Important ou Essential)",
  "Détermination motivée du niveau : quel niveau correspond aux risques et obligations de l'organisation",
  "Une feuille de route de remédiation priorisée",
  "Documentation de politiques et procédures adaptée au niveau choisi",
  "Accompagnement pour l'auto-évaluation et une éventuelle vérification",
  "Le cas échéant : un pont clair vers une conformité démontrable NIS2 plus large",
];

const STAPPEN = [
  { naam: "Analyse GAP & détermination du niveau", tekst: "Où vous en êtes aujourd'hui, et quel niveau est réaliste." },
  { naam: "Remédiation", tekst: "Les constats traduits en mesures concrètes et en documentation." },
  { naam: "Auto-évaluation", tekst: "Accompagnement pour finaliser et, le cas échéant, faire vérifier l'auto-évaluation." },
];

export default function CyberfundamentalsPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">CyberFundamentals (CyFun)</span> : une conformité
              démontrable NIS2 sans excès
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              CyFun est le référentiel belge d&apos;auto-évaluation du Centre pour la Cybersécurité
              Belgique (CCB), avec trois niveaux (Basic, Important, Essential) offrant un point
              d&apos;entrée plus accessible qu&apos;une certification ISO 27001 complète pour les
              organisations en quête d&apos;une conformité démontrable NIS2.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/fr/contact" variant="primary">Discutez de votre trajet CyberFundamentals</Button>
              <Button href="/fr/verification-nis2" variant="secondary">Faites la courte vérification NIS2</Button>
            </div>
          </div>
          <IllustrationCyfun className="hidden h-28 w-28 shrink-0 md:block" />
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
          Une analyse GAP par rapport au niveau CyFun choisi ou encore à déterminer (Basic, Important ou
          Essential) permet de cartographier où vous en êtes aujourd&apos;hui. S&apos;y ajoute un avis
          honnête sur le niveau réaliste et suffisant compte tenu des risques et obligations réels de
          votre organisation (pas automatiquement le plus élevé), suivi d&apos;un plan de remédiation
          priorisé.
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
        <h2 className="font-serif text-3xl font-semibold text-ink">Comment se déroule un trajet CyberFundamentals</h2>
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
              Une conformité démontrable au niveau qui compte réellement, sans gaspiller de temps ni de
              budget dans un trajet plus lourd que nécessaire.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Pourquoi Millecam</h2>
            <p className="mt-4 text-ink/70">
              Un point de contact fixe, pas d&apos;équipe qui tourne. Contact direct avec la personne qui
              réalise le travail : pas de consultant junior, pas de chaîne d&apos;escalade.{" "}
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
            Discutez de votre trajet CyberFundamentals
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
