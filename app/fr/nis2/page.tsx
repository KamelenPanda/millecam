import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationNis2 from "@/components/illustrations/IllustrationNis2";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "Consultant NIS2 pour PME en Belgique | Millecam",
  description:
    "Votre organisation relève-t-elle de NIS2 et n'avez-vous pas de responsable conformité en interne ? Millecam accompagne les PME belges du scoping et de l'analyse GAP jusqu'à la conformité démontrable.",
};

const VOORWIE = [
  {
    titel: "Entité essentielle ou importante",
    tekst: "Votre organisation relève de l'un des secteurs NIS2 (énergie, transport, infrastructure numérique, soins de santé, et plus encore) et dépasse le seuil de taille.",
  },
  {
    titel: "Un client ou un assureur demande une preuve de conformité",
    tekst: "Vous fournissez une entité essentielle ou importante, qui vous demande de démontrer vous-même que votre gestion des risques est en ordre.",
  },
  {
    titel: "Pas de responsable conformité en interne",
    tekst: "Vous savez que NIS2 est pertinent, mais personne dans l'équipe n'a le temps ou les connaissances pour le mettre en place de façon structurée.",
  },
];

const DELIVERABLES = [
  "Analyse de scoping : si vous relevez de NIS2, et en tant qu'entité essentielle ou importante",
  "Rapport GAP par rapport aux mesures de gestion des risques NIS2 (article 21), avec un score par mesure",
  "Plan d'action priorisé avec répartition des responsabilités et calendrier réaliste",
  "Documents de politique et procédures sur mesure : gestion des accès, gestion des fournisseurs, continuité des activités, réponse aux incidents",
  "Procédure de notification d'incident alignée sur les délais de notification NIS2",
  "Préparation de l'organe de direction à sa responsabilité NIS2 et à la structure de reporting",
  "Accompagnement lors d'une vérification ou d'un contrôle par l'autorité compétente",
];

const STAPPEN = [
  { naam: "Scoping & analyse GAP", tekst: "Si vous relevez de NIS2, et où vous en êtes aujourd'hui par rapport aux mesures de gestion des risques." },
  { naam: "Mise en œuvre", tekst: "Les constats traduits en politiques, procédures et mesures techniques — vous gardez la main." },
  { naam: "Conformité démontrable", tekst: "Documentation et éléments de preuve en ordre, prêts pour un contrôle éventuel." },
];

export default function Nis2Page() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">NIS2</span> : de la directive à la conformité démontrable
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              La directive européenne sur la cybersécurité pour les entités essentielles et importantes,
              transposée en droit belge. Pertinente à partir d&apos;une certaine taille ou d&apos;un
              certain secteur — avec une responsabilité des administrateurs si rien n&apos;est entrepris.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/fr/contact" variant="primary">Discuter de votre trajet NIS2</Button>
              <Button href="/fr/verification-nis2" variant="secondary">Faire la vérification NIS2 rapide</Button>
            </div>
          </div>
          <IllustrationNis2 className="hidden h-28 w-28 shrink-0 md:block" />
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
        <p className="mt-8 text-sm text-ink/70">
          Vous n&apos;êtes pas sûr(e) que cela concerne votre organisation ?{" "}
          <Link href="/fr/verification-nis2" className="text-terracotta hover:underline">
            Faites la vérification NIS2 rapide
          </Link>
          .
        </p>
      </Section>

      <Section>
        <h2 className="font-serif text-3xl font-semibold text-ink">Ce que fait Millecam</h2>
        <p className="mt-4 max-w-2xl text-ink/70">
          Une analyse de scoping détermine si, et en tant que quoi, votre organisation relève de NIS2.
          Elle est suivie d&apos;une analyse GAP par rapport aux mesures de gestion des risques de
          l&apos;article 21 : où vous en êtes aujourd&apos;hui, avec un score tant pour la documentation
          que pour la mise en œuvre effective. Les constats sont traduits en un plan d&apos;action concret
          — pas quatre-vingts pages de jargon, mais une liste de ce qui doit se faire en premier, et par
          qui.
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
        <h2 className="font-serif text-3xl font-semibold text-ink">Comment se déroule un trajet NIS2</h2>
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
              Une conformité démontrable aux mesures de gestion des risques NIS2 : une gestion des risques
              opérationnelle plutôt qu&apos;une simple documentation, un organe de direction qui connaît
              sa responsabilité, et un processus de notification d&apos;incident prêt avant qu&apos;il ne
              soit nécessaire.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Pourquoi Millecam</h2>
            <p className="mt-4 text-ink/70">
              Un seul point de contact fixe, pas d&apos;équipe qui change. Un contact direct avec la
              personne qui exécute le travail — pas de consultant junior, pas de chaîne d&apos;escalade.{" "}
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
            Discuter de votre trajet NIS2
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
