import type { Metadata } from "next";
import Section from "@/components/Section";
import PillarGlyph from "@/components/PillarGlyph";

export const metadata: Metadata = {
  title: "Politique en matière de cookies | Millecam",
  description:
    "Millecam.be n'utilise pas de cookies : ce que fait Vercel Web Analytics et comment le traitement technique du site fonctionne.",
};

function H2({ children }: { children: string }) {
  return <h2 className="mt-10 font-serif text-xl font-semibold text-ink">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-ink/75">{children}</p>;
}
function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <PillarGlyph className="mt-1 h-3.5 w-2.5 shrink-0" />
      <span>{children}</span>
    </li>
  );
}

const A = "text-prussian hover:underline";

export default function CookiebeleidPage() {
  return (
    <Section className="pb-24 pt-16">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-ink">Politique en matière de cookies</h1>
        <p className="mt-4 text-sm text-muted">Dernière mise à jour : 8 septembre 2026</p>

        <P>
          Millecam tient à être transparente sur les technologies utilisées sur ce site web.
          Nous expliquons ci-dessous quels cookies et technologies similaires sont utilisés.
        </P>

        <H2>1. Que sont les cookies ?</H2>
        <P>
          Les cookies sont de petits fichiers qu&apos;un site web peut, via votre navigateur,
          enregistrer sur votre appareil. Ils peuvent notamment servir à faire fonctionner
          correctement un site web, à mémoriser des préférences, à collecter des statistiques
          d&apos;utilisation ou à suivre les visiteurs d&apos;un site web à l&apos;autre.
        </P>
        <P>
          Toutefois, toute fonctionnalité d&apos;un site web pour laquelle des données sont
          traitées ne fait pas nécessairement appel à des cookies.
        </P>

        <H2>2. millecam.be utilise-t-il des cookies ?</H2>
        <P>À l&apos;heure actuelle, millecam.be ne place aucun cookie sur votre appareil.</P>
        <P>Nous n&apos;utilisons pas de :</P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>cookies publicitaires ;</LI>
          <LI>cookies marketing ;</LI>
          <LI>cookies de suivi (tracking) ;</LI>
          <LI>cookies de réseaux sociaux ;</LI>
          <LI>cookies de profilage comportemental.</LI>
        </ul>
        <P>
          C&apos;est pourquoi nous n&apos;affichons actuellement pas de bandeau de cookies
          demandant le consentement pour des cookies non essentiels.
        </P>

        <H2>3. Vercel Web Analytics</H2>
        <P>
          Nous utilisons Vercel Web Analytics pour obtenir des statistiques agrégées sur
          l&apos;utilisation de notre site web.
        </P>
        <P>
          Vercel Web Analytics fonctionne sans cookies et est conçu pour ne pas suivre les
          visiteurs d&apos;un site web à l&apos;autre ni d&apos;un jour à l&apos;autre.
        </P>
        <P>
          Selon la visite du site, les données d&apos;analyse peuvent comprendre des informations
          telles que :
        </P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>la page visitée ;</LI>
          <LI>l&apos;heure de la visite ;</LI>
          <LI>le site web référent ;</LI>
          <LI>le pays ou la région ;</LI>
          <LI>le navigateur et sa version ;</LI>
          <LI>le système d&apos;exploitation ;</LI>
          <LI>le type d&apos;appareil.</LI>
        </ul>
        <P>
          Pour déterminer les visiteurs uniques, Vercel utilise un hachage technique dérivé de la
          requête entrante. Cette identification est temporaire et est réinitialisée
          quotidiennement. Selon Vercel, l&apos;adresse IP n&apos;est pas conservée dans le cadre
          de la donnée d&apos;analyse.
        </P>
        <P>
          Nous utilisons ces statistiques exclusivement pour obtenir des informations sur
          l&apos;utilisation et les performances de notre site web.
        </P>

        <H2>4. Traitement techniquement nécessaire</H2>
        <P>
          Même lorsqu&apos;un site web ne place pas de cookies, un trafic de données techniques a
          lieu entre votre navigateur et l&apos;infrastructure nécessaire à la fourniture du site
          web.
        </P>
        <P>
          Notre site web est hébergé via Vercel. Dans ce cadre, des données techniques telles que
          des adresses IP et des informations de requête peuvent être traitées pour la mise à
          disposition et la sécurisation du site web, ainsi qu&apos;à des fins de journalisation
          technique.
        </P>
        <P>Cela est indépendant du placement de cookies sur votre appareil.</P>
        <P>
          Vous trouverez davantage d&apos;informations sur ce traitement dans notre{" "}
          <a className={A} href="/fr/politique-de-confidentialite">
            politique de confidentialité
          </a>
          .
        </P>

        <H2>5. Formulaire de contact</H2>
        <P>
          Le formulaire de contact ne fait appel à aucun cookie marketing ou de suivi.
        </P>
        <P>
          Lorsque vous envoyez vous-même le formulaire, les données que vous avez saisies sont
          traitées afin de faire parvenir votre message à Millecam. Nous utilisons à cette fin
          Resend comme prestataire technique.
        </P>
        <P>
          Il s&apos;agit du traitement de données que vous nous fournissez activement, et cela est
          indépendant des cookies.
        </P>

        <H2>6. Pas de suivi marketing</H2>
        <P>
          Millecam n&apos;utilise actuellement aucune technologie de suivi à des fins de publicité
          ciblée, de remarketing ou de constitution de profils marketing des visiteurs du site
          web.
        </P>
        <P>
          Si nous ajoutions à l&apos;avenir une technologie nécessitant un consentement préalable,
          nous ne l&apos;activerions pas avant d&apos;avoir obtenu le consentement requis. Nous
          adapterons en conséquence cette politique de cookies et, si nécessaire, les
          fonctionnalités du site web.
        </P>

        <H2>7. Modifications</H2>
        <P>
          La technologie et notre site web peuvent évoluer. Nous pouvons donc adapter cette
          politique de cookies lorsque nous introduisons de nouvelles fonctionnalités, de nouveaux
          prestataires ou de nouvelles technologies.
        </P>
        <P>
          La date figurant en haut de cette page indique la dernière mise à jour de cette
          politique.
        </P>

        <H2>8. Questions</H2>
        <P>
          Vous avez des questions sur l&apos;utilisation de cookies ou d&apos;autres technologies
          sur notre site web ?
        </P>
        <P>Contactez-nous à l&apos;adresse :</P>
        <P>
          <a className={A} href="mailto:privacy@millecam.be">
            privacy@millecam.be
          </a>
        </P>
        <P>
          Vous trouverez davantage d&apos;informations sur la manière dont Millecam traite les
          données à caractère personnel dans notre{" "}
          <a className={A} href="/fr/politique-de-confidentialite">
            politique de confidentialité
          </a>
          .
        </P>
      </div>
    </Section>
  );
}
