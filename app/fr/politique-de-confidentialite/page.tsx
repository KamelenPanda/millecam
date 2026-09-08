import type { Metadata } from "next";
import Section from "@/components/Section";
import PillarGlyph from "@/components/PillarGlyph";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Millecam",
  description: "Comment Millecam traite les données à caractère personnel.",
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

export default function PrivacyPolicyPage() {
  return (
    <Section className="pb-24 pt-16">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-ink">Politique de confidentialité</h1>
        <p className="mt-4 text-sm text-muted">Dernière mise à jour : 2 septembre 2026</p>

        <P>
          Millecam est une entreprise individuelle de Robin Millecam, établie à Sinte Annalaan 34, 9300
          Alost, Belgique (TVA BE 1026.876.048). Pour toute question sur cette politique ou sur la façon
          dont nous traitons vos données, vous pouvez nous contacter à{" "}
          <a className="text-terracotta hover:underline" href="mailto:privacy@millecam.be">privacy@millecam.be</a>.
        </P>

        <H2>Quelles données nous collectons</H2>
        <P>
          Lorsque vous utilisez le formulaire de contact de ce site, nous collectons les données que vous
          fournissez vous-même : nom, nom de l&apos;entreprise, adresse e-mail, numéro de téléphone
          (facultatif), l&apos;objet de votre demande, et votre message. Nous ne collectons aucune donnée
          via des cookies ou des technologies de suivi. Consultez la{" "}
          <a className="text-terracotta hover:underline" href="/fr/politique-de-cookies">politique en matière de cookies</a> pour
          plus de détails.
        </P>

        <H2>À quoi nous utilisons ces données</H2>
        <P>
          Uniquement pour répondre à votre question ou demande, et — si une collaboration en découle —
          pour démarrer et gérer cette collaboration. Nous n&apos;utilisons pas vos données à des fins
          marketing sans votre consentement explicite, et nous ne vendons ni ne louons jamais vos données
          à des tiers.
        </P>

        <H2>Base légale</H2>
        <P>
          Le traitement de vos coordonnées repose sur notre intérêt légitime à répondre aux questions des
          (futurs) clients, et, dès qu&apos;une collaboration est discutée ou conclue, sur
          l&apos;exécution de mesures (pré-)contractuelles prises à votre demande (art. 6, § 1, points b)
          et f) du RGPD).
        </P>

        <H2>Qui a accès à vos données</H2>
        <P>
          Vos données ne sont en principe consultées que par Robin Millecam. Pour le fonctionnement
          technique de ce site, nous faisons appel à deux sous-traitants :
        </P>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/75">
          <LI>
            <span className="font-medium text-ink">Resend</span> : envoie l&apos;e-mail généré par le
            formulaire de contact. Resend peut agir en tant que sous-traitant en dehors de l&apos;UE ;
            nous ne travaillons qu&apos;avec des parties qui offrent des garanties appropriées (telles que
            des clauses contractuelles types).
          </LI>
          <LI>
            <span className="font-medium text-ink">Vercel</span> : héberge ce site et traite, à cette
            occasion, des données techniques (comme les adresses IP dans les journaux d&apos;accès du
            serveur) nécessaires au bon fonctionnement du site.
          </LI>
        </ul>

        <H2>Durée de conservation</H2>
        <P>
          Nous conservons les données issues du formulaire de contact pendant un maximum de 2 ans après
          votre dernier contact avec Millecam, sauf si une durée de conservation plus longue est
          légalement requise (par exemple dans le cadre d&apos;un contrat en cours ou d&apos;obligations
          comptables).
        </P>

        <H2>Transferts en dehors de l&apos;UE</H2>
        <P>
          Certains des sous-traitants mentionnés ci-dessus peuvent traiter des données sur des serveurs
          situés en dehors de l&apos;Espace économique européen. Dans ce cas, nous veillons à ce que ce
          transfert repose sur une garantie appropriée reconnue par le RGPD (comme les clauses
          contractuelles types de la Commission européenne).
        </P>

        <H2>Sécurité</H2>
        <P>
          Nous prenons des mesures techniques et organisationnelles raisonnables pour protéger vos données
          contre la perte, l&apos;utilisation abusive ou l&apos;accès non autorisé.
        </P>

        <H2>Vos droits</H2>
        <P>En vertu du RGPD, vous disposez des droits suivants concernant vos données à caractère personnel :</P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>Accès aux données que nous traitons à votre sujet</LI>
          <LI>Rectification des données inexactes ou incomplètes</LI>
          <LI>Effacement de vos données (« droit à l&apos;oubli »)</LI>
          <LI>Limitation du traitement</LI>
          <LI>Opposition au traitement</LI>
          <LI>Portabilité des données</LI>
        </ul>
        <P>
          Pour exercer l&apos;un de ces droits, écrivez à{" "}
          <a className="text-terracotta hover:underline" href="mailto:privacy@millecam.be">privacy@millecam.be</a>. Nous
          répondons dans le délai légal d&apos;un mois.
        </P>

        <H2>Introduire une plainte</H2>
        <P>
          Vous n&apos;êtes pas satisfait(e) de la façon dont nous traitons vos données ? Contactez-nous
          d&apos;abord. Vous avez toujours le droit d&apos;introduire une plainte auprès de
          l&apos;Autorité de protection des données : rue de la Presse 35, 1000 Bruxelles,{" "}
          <a className="text-terracotta hover:underline" href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noreferrer">
            autoriteprotectiondonnees.be
          </a>.
        </P>

        <H2>Modifications de cette politique</H2>
        <P>
          Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. La date en haut
          de cette page indique quand la politique a été mise à jour pour la dernière fois.
        </P>
      </div>
    </Section>
  );
}
