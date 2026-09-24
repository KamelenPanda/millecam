import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationGdpr from "@/components/illustrations/IllustrationGdpr";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "Consultant RGPD pour PME en Belgique | Millecam",
  description:
    "Analyse GAP RGPD, registre des traitements, AIPD et procédures de notification des violations de données. Mises en place de façon concrète, pas seulement une déclaration de confidentialité sur le site web.",
};

const VOORWIE = [
  {
    titel: "Pas de registre des traitements ni de processus AIPD",
    tekst: "L'organisation traite des données à caractère personnel, mais ne dispose pas d'un registre des traitements à jour ni d'un processus pour évaluer les nouveaux traitements.",
  },
  {
    titel: "Obligation de DPO, sans candidat interne",
    tekst: "Une obligation légale de DPO s'applique, mais personne dans l'équipe n'a le temps, l'indépendance ou le profil pour assumer ce rôle.",
  },
  {
    titel: "Vouloir remettre de l'ordre après un incident",
    tekst: "Une plainte, une violation de données ou un audit a révélé que la protection de la vie privée était jusque-là traitée de façon ad hoc.",
  },
];

const DELIVERABLES = [
  "Analyse GAP par rapport aux obligations RGPD",
  "Registre des traitements, construit et maintenable",
  "Processus de travail et modèle pour les AIPD (analyses d'impact relatives à la protection des données)",
  "Procédure de notification des violations de données dans le délai légal de 72 heures",
  "Révision ou rédaction des contrats de sous-traitance avec les fournisseurs",
  "Politique et déclarations de confidentialité sur mesure, sans contenu standardisé",
  "Sensibilisation de l'équipe aux principales obligations",
];

const STAPPEN = [
  { naam: "Analyse GAP", tekst: <>Où vous en êtes aujourd&apos;hui par rapport aux obligations RGPD.</> },
  { naam: "Mise en place", tekst: <>Registre des traitements, processus AIPD et procédures en ordre.</> },
  {
    naam: "Accompagnement continu",
    tekst: (
      <>
        Via{" "}
        <Link href="/fr/dpo-externalise" className="text-terracotta hover:underline">
          DPO-as-a-Service
        </Link>
        , vous gardez un point de contact fixe.
      </>
    ),
  },
];

export default function GdprPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">RGPD</span> : de la déclaration de confidentialité à un
              programme opérationnel
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              Le RGPD est une législation européenne sur la vie privée, applicable à pratiquement toute
              organisation qui traite des données à caractère personnel, mais une déclaration de
              confidentialité sur le site web n&apos;équivaut pas à un programme de protection de la vie
              privée opérationnel.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/fr/contact" variant="primary">Discuter de votre trajet RGPD</Button>
              <Button href="/fr/dpo-externalise" variant="secondary">Découvrir DPO-as-a-Service</Button>
            </div>
          </div>
          <IllustrationGdpr className="hidden h-28 w-28 shrink-0 md:block" />
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
          Une analyse GAP par rapport aux obligations RGPD, suivie de la construction d&apos;un registre
          des traitements, d&apos;un processus AIPD opérationnel, et de la révision ou rédaction des
          contrats de sous-traitance : avec une attention particulière à ce qui est réalisable pour une
          PME, pas un programme de conformité pensé pour une multinationale.
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
        <h2 className="font-serif text-3xl font-semibold text-ink">Comment se déroule un trajet RGPD</h2>
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
              Un programme de protection de la vie privée qui tient la route en cas de plainte,
              d&apos;audit ou de violation de données, pas seulement un dossier de documents jamais
              consulté.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Pourquoi Millecam</h2>
            <p className="mt-4 text-ink/70">
              Un seul point de contact fixe, pas d&apos;équipe changeante. Contact direct avec la
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
          <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">Prêt à démarrer ?</h2>
          <p className="mt-3 text-sm text-ink/70">
            Un entretien sans engagement de trente minutes suffit pour déterminer si, et comment,
            Millecam peut vous aider.
          </p>
          <Button href="/fr/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Discuter de votre trajet RGPD
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
