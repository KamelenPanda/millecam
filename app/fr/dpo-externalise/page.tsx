import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationSupport from "@/components/illustrations/IllustrationSupport";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "DPO externalisé | DPO externe en Belgique | Millecam",
  description:
    "Un délégué à la protection des données (DPO) externe et reconnu, sur base mensuelle : pour les organisations qui ont besoin d'un DPO, pas d'un poste à temps plein.",
};

const VOORWIE = [
  {
    titel: "Une obligation légale de DPO",
    tekst: "Les autorités publiques, les organisations qui traitent des données à grande échelle, ou qui traitent des catégories particulières de données à caractère personnel, doivent désigner un DPO.",
  },
  {
    titel: "Un DPO interne « par accident »",
    tekst: "Quelqu'un dans l'équipe s'est vu confier le rôle de DPO sans disposer du temps, de l'indépendance ou du bagage nécessaires pour l'assumer pleinement.",
  },
  {
    titel: "Besoin d'un point de contact reconnu",
    tekst: "Les clients, les collaborateurs ou l'autorité de contrôle attendent un point de contact clair et externe pour les questions de protection des données.",
  },
];

const DELIVERABLES = [
  "Désignation en tant que DPO externe, avec inscription auprès de l'Autorité de protection des données",
  "Un moment de concertation fixe et périodique avec l'organisation",
  "Conseil sur les nouveaux traitements et les DPIA",
  "Point de contact pour l'autorité de contrôle et pour les personnes concernées (par ex. en cas de demande d'accès)",
  "Suivi des obligations de notification en cas de fuite de données",
  "Rapport annuel à la direction sur l'état des lieux",
];

const STAPPEN = [
  { naam: "Prise de contact & cadrage", tekst: "Quels traitements, risques et attentes sont en jeu." },
  { naam: "Reprise du rôle de DPO", tekst: "Désignation formelle et inscription auprès de l'autorité de contrôle." },
  { naam: "Accompagnement continu", tekst: "Un rythme fixe de concertation, de conseil et de reporting." },
];

export default function DpoExternalisePage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">DPO externalisé</span> (DPO-as-a-Service) : un DPO
              externe, pas un poste à temps plein
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              Le RGPD impose, dans certains cas, un délégué à la protection des données (DPO), mais ce
              rôle occupe rarement une semaine de travail complète. Le DPO externalisé vous offre un
              point de contact externe reconnu, sur base mensuelle, sans recrutement.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/fr/contact" variant="primary">Discuter du DPO externalisé</Button>
              <Button href="/fr/rgpd" variant="secondary">En savoir plus sur le RGPD</Button>
            </div>
          </div>
          <IllustrationSupport className="hidden h-28 w-28 shrink-0 md:block" />
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
          Robin assume le rôle légal de DPO en tant que délégué à la protection des données certifié
          (certification DPI, depuis février 2025) : supervision de la conformité, conseil sur les
          nouveaux traitements et les DPIA, et point de contact tant pour l&apos;autorité de contrôle que
          pour les personnes concernées, selon un rythme fixe et prévisible.
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
        <h2 className="font-serif text-3xl font-semibold text-ink">Comment cela se déroule dans la pratique</h2>
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
              Une fonction de DPO qui fonctionne réellement (pas seulement un nom sur un registre RGPD),
              sans le coût ni le risque d&apos;un recrutement interne mal ajusté.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Pourquoi Millecam</h2>
            <p className="mt-4 text-ink/70">
              Un seul point de contact fixe, pas d&apos;équipe qui change. Un contact direct avec la
              personne qui effectue le travail : pas de consultant junior, pas de chaîne
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
            Un entretien de trente minutes, sans engagement, suffit pour déterminer si, et comment,
            Millecam peut vous aider.
          </p>
          <Button href="/fr/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Discuter du DPO externalisé
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
