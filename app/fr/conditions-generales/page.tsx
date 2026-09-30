import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Conditions générales | Millecam",
  description: "Les conditions applicables aux collaborations avec Millecam.",
};

function H2({ n, children }: { n: string; children: string }) {
  return (
    <h2 className="mt-10 font-serif text-xl font-semibold text-ink">
      <span className="text-terracotta">{n}. </span>
      {children}
    </h2>
  );
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-ink/75">{children}</p>;
}

export default function TermsPage() {
  return (
    <Section className="pb-24 pt-16">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-ink">Conditions générales</h1>
        <p className="mt-4 text-sm text-muted">Dernière mise à jour : 2 septembre 2026</p>

        <P>
          Les présentes conditions s&apos;appliquent à toute offre et tout contrat entre Millecam (Robin
          Millecam, entreprise individuelle, Sinte Annalaan 34, 9300 Alost, Belgique, TVA BE
          1026.876.048, ci-après « Millecam ») et un client, sauf accord écrit contraire.
        </P>

        <H2 n="1">Champ d&apos;application</H2>
        <P>
          Les présentes conditions générales s&apos;appliquent à tous les services de Millecam, y compris
          les analyses GAP, les trajets de mise en œuvre, le DPO-as-a-Service, les tabletop exercises et
          l&apos;accompagnement GRC fractionné. Toute condition dérogatoire proposée par le client ne
          s&apos;applique que si Millecam l&apos;accepte par écrit.
        </P>

        <H2 n="2">Formation du contrat</H2>
        <P>
          Une offre de Millecam est sans engagement et valable 30 jours, sauf mention contraire. Le
          contrat est formé dès la confirmation écrite du client (y compris par e-mail), ou par le
          commencement effectif des travaux.
        </P>

        <H2 n="3">Exécution de la mission</H2>
        <P>
          Millecam exécute la mission au mieux de ses capacités, dans le cadre d&apos;une obligation de
          moyens (et non de résultat), sauf convention contraire expresse. Le client fournit en temps
          utile les informations, documents et accès raisonnablement nécessaires à l&apos;exécution. Les
          retards résultant d&apos;une collaboration tardive du client ne peuvent être imputés à Millecam.
        </P>

        <H2 n="4">Prix et paiement</H2>
        <P>
          Les prix sont indiqués hors TVA, sauf mention contraire. Les factures sont payables dans les 30
          jours suivant la date de facturation. En cas de retard de paiement, un intérêt de 1 % par mois
          est dû de plein droit et sans mise en demeure préalable, majoré d&apos;une indemnité forfaitaire
          de 10 % du montant de la facture (avec un minimum de 75 €).
        </P>

        <H2 n="5">Durée et résiliation</H2>
        <P>
          Une mission court pour la durée fixée dans l&apos;offre ou le contrat. Pour les services
          continus (tels que le DPO-as-a-Service ou l&apos;accompagnement fractionné), un délai de
          préavis de 30 jours s&apos;applique, sauf convention contraire. Chaque partie peut résilier le
          contrat avec effet immédiat en cas de manquement grave de l&apos;autre partie qui n&apos;est pas
          corrigé dans les 14 jours suivant une mise en demeure écrite.
        </P>

        <H2 n="6">Responsabilité</H2>
        <P>
          La responsabilité de Millecam pour les dommages résultant de l&apos;exécution d&apos;une mission
          est limitée au montant facturé pour cette mission, et en tout état de cause au montant versé au
          titre de l&apos;assurance responsabilité professionnelle de Millecam. Millecam n&apos;est pas
          responsable des dommages indirects (tels que la perte de bénéfices ou l&apos;atteinte à la
          réputation). Cette limitation ne s&apos;applique pas en cas de dol ou de faute grave de la part
          de Millecam.
        </P>

        <H2 n="7">Propriété intellectuelle</H2>
        <P>
          Les rapports, modèles, méthodologies et autres œuvres que Millecam développe dans le cadre
          d&apos;une mission restent la propriété de Millecam, sauf convention écrite contraire. Le client
          reçoit un droit d&apos;usage pour ses propres besoins internes. Les méthodologies sous-jacentes
          et les modèles génériques de Millecam peuvent également être réutilisés auprès d&apos;autres
          clients.
        </P>

        <H2 n="8">Confidentialité</H2>
        <P>
          Les deux parties traitent avec le soin nécessaire toutes les informations confidentielles
          qu&apos;elles reçoivent l&apos;une de l&apos;autre, et ne les utilisent que dans le cadre de la
          mission. Cette obligation demeure en vigueur après la fin de la mission.
        </P>

        <H2 n="9">Traitement des données à caractère personnel</H2>
        <P>
          Pour le traitement des données à caractère personnel dans le cadre d&apos;une mission (et, le
          cas échéant, d&apos;un contrat de sous-traitance), Millecam renvoie à sa{" "}
          <a className="text-terracotta hover:underline" href="/fr/politique-de-confidentialite">politique de confidentialité</a>.
        </P>

        <H2 n="10">Force majeure</H2>
        <P>
          Aucune partie n&apos;est responsable d&apos;un manquement résultant d&apos;un cas de force
          majeure : une circonstance échappant à son contrôle raisonnable qui empêche temporairement ou
          définitivement l&apos;exécution de la mission.
        </P>

        <H2 n="11">Modification des présentes conditions</H2>
        <P>
          Millecam peut modifier les présentes conditions générales. La version en vigueur au moment de la
          conclusion du contrat reste applicable à ce contrat, sauf accord contraire entre les parties.
        </P>

        <H2 n="12">Droit applicable et juridiction compétente</H2>
        <P>
          Le droit belge s&apos;applique à tout contrat conclu avec Millecam. Les litiges sont soumis au
          tribunal compétent du siège de Millecam, sans préjudice du droit de Millecam de porter un litige
          devant le tribunal du domicile ou du siège du client.
        </P>

        <P>
          Des questions sur ces conditions ? Écrivez à{" "}
          <a className="text-terracotta hover:underline" href="mailto:info@millecam.be">info@millecam.be</a>.
        </P>
      </div>
    </Section>
  );
}
