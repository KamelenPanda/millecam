import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Politique en matière de cookies | Millecam",
  description: "Quels cookies ce site utilise (pratiquement aucun).",
};

function H2({ children }: { children: string }) {
  return <h2 className="mt-10 font-serif text-xl font-semibold text-ink">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-ink/75">{children}</p>;
}

export default function CookiePolicyPage() {
  return (
    <Section className="pb-24 pt-16">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-ink">Politique en matière de cookies</h1>
        <p className="mt-4 text-sm text-muted">Dernière mise à jour : 2 septembre 2026</p>

        <P>
          Ce site ne place aucun cookie de suivi, et n&apos;affiche donc pas de bandeau de consentement
          qui proposerait réellement un choix. Il n&apos;y a tout simplement rien de non essentiel pour
          lequel demander un consentement.
        </P>

        <H2>Ce que nous utilisons : Vercel Analytics</H2>
        <P>
          Pour des statistiques de visite anonymes et agrégées (comme le nombre de pages vues), nous
          utilisons Vercel Analytics. Ce service fonctionne sans cookie : aucun cookie n&apos;est placé,
          aucune adresse IP n&apos;est stockée, et aucun visiteur n&apos;est suivi de manière
          individuellement identifiable. Comme aucune donnée à caractère personnel n&apos;est traitée,
          aucun consentement n&apos;est requis à cet égard en vertu de la directive ePrivacy ou du RGPD.
        </P>

        <H2>Cookies strictement nécessaires</H2>
        <P>
          Ce site n&apos;utilise actuellement aucun cookie, pas même fonctionnel ou nécessaire. Si cela
          devait changer à l&apos;avenir (par exemple avec une fonctionnalité de connexion), nous
          mettrons à jour cette politique de cookies et, si nécessaire, le bandeau de consentement du
          site.
        </P>

        <H2>Modifications</H2>
        <P>
          Si nous ajoutons ultérieurement un service qui place des cookies (par exemple pour le marketing
          ou la publicité ciblée), nous modifierons cette politique et, lorsque la loi l&apos;exige, nous
          demanderons votre consentement explicite avant que ces cookies ne soient placés.
        </P>

        <H2>Questions</H2>
        <P>
          Des questions sur cette politique de cookies ? Écrivez à{" "}
          <a className="text-terracotta hover:underline" href="mailto:privacy@millecam.be">privacy@millecam.be</a>. Consultez
          également notre{" "}
          <a className="text-terracotta hover:underline" href="/fr/politique-de-confidentialite">politique de confidentialité</a> pour
          savoir comment nous traitons les données issues du formulaire de contact.
        </P>
      </div>
    </Section>
  );
}
