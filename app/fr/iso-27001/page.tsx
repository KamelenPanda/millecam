import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationIso27001 from "@/components/illustrations/IllustrationIso27001";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "Consultant ISO 27001 pour PME en Belgique | Millecam",
  description:
    "Mise en œuvre de l'ISO/IEC 27001:2022, de l'analyse GAP à l'audit de certification. Millecam accompagne les PME belges étape par étape vers un SMSI opérationnel.",
};

const VOORWIE = [
  {
    titel: "Un client ou un appel d'offres l'exige",
    tekst: "L'ISO 27001 est devenue une exigence contractuelle d'un client, d'un assureur ou d'un appel d'offres, pas (uniquement) une priorité interne.",
  },
  {
    titel: "Équipe en croissance, risque en croissance",
    tekst: "La sécurité de l'information reposait sur des accords ad hoc et des documents épars. Cela ne suit plus la croissance de l'organisation.",
  },
  {
    titel: "La volonté y est, le temps manque",
    tekst: "Vous savez ce que doit être un SMSI, mais personne dans l'équipe n'a la disponibilité pour le construire à partir de zéro.",
  },
];

const DELIVERABLES = [
  "Analyse GAP par rapport à l'ISO/IEC 27001:2022, avec un score par contrôle",
  "Définition du périmètre du SMSI (système de management de la sécurité de l'information)",
  "Appréciation des risques et plan de traitement des risques",
  "Déclaration d'applicabilité (Statement of Applicability)",
  "Documents de politique et procédures, adaptés à la façon dont l'organisation fonctionne réellement",
  "Objectifs de sécurité alignés sur l'activité de l'organisation",
  "Collecte et structuration des preuves (evidence)",
  "Préparation de l'audit interne",
  "Préparation de la revue de direction (management review)",
  "Accompagnement pendant l'audit de certification",
  "Remédiation des constats issus de l'audit ou de la revue interne",
];

const STAPPEN = [
  { naam: "Analyse GAP", tekst: "Où vous en êtes aujourd'hui par rapport à l'ISO/IEC 27001:2022, avec un plan d'action concret à la clé." },
  { naam: "Mise en œuvre", tekst: "Périmètre du SMSI, appréciation des risques, déclaration d'applicabilité, politiques et procédures : construits, pas seulement rédigés." },
  { naam: "Certification", tekst: "Audit interne, revue de direction et accompagnement jusqu'à l'audit de certification, et pendant celui-ci." },
];

export default function Iso27001Page() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">ISO 27001</span> : un SMSI qui fonctionne réellement, pas
              seulement sur papier
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              La norme internationale pour la sécurité de l&apos;information. Souvent une exigence
              contractuelle des clients ou des appels d&apos;offres, et une bonne raison d&apos;organiser
              la sécurité de manière structurelle plutôt qu&apos;au coup par coup.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/fr/contact" variant="primary">Discuter de votre trajet ISO 27001</Button>
              <Button href="/fr/analyse-gap" variant="secondary">Commencer par une analyse GAP</Button>
            </div>
          </div>
          <IllustrationIso27001 className="hidden h-28 w-28 shrink-0 md:block" />
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
          Une analyse GAP détermine où vous en êtes aujourd&apos;hui par rapport à l&apos;ISO/IEC
          27001:2022 : par contrôle, sans généralités vagues. Le SMSI est ensuite construit à partir de
          là : périmètre, appréciation des risques, déclaration d&apos;applicabilité, politiques et
          procédures adaptées à la façon dont l&apos;organisation fonctionne réellement. Millecam
          accompagne également la dernière phase : audit interne, revue de direction et l&apos;audit de
          certification lui-même.
        </p>
      </Section>

      <Section dark>
        <h2 className="max-w-2xl font-serif text-3xl font-semibold">Ce que vous recevez concrètement</h2>
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
        <h2 className="font-serif text-3xl font-semibold text-ink">Comment se déroule un trajet ISO 27001</h2>
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
              Un SMSI qu&apos;un auditeur peut examiner sans surprise : des preuves qui tiennent la route,
              des politiques réellement suivies, et un certificat qui démontre ce qui se passe réellement,
              pas seulement ce qui est écrit sur papier.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Pourquoi Millecam</h2>
            <p className="mt-4 text-ink/70">
              Un seul point de contact fixe, pas d&apos;équipe qui change. Un contact direct avec la
              personne qui exécute le travail : une mise en œuvre pragmatique plutôt qu&apos;un conseil
              purement théorique.{" "}
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
            Un entretien de trente minutes, sans engagement, suffit pour déterminer si, et comment,
            Millecam peut vous aider.
          </p>
          <Button href="/fr/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Discuter de votre trajet ISO 27001
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
