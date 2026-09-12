import type { Metadata } from "next";
import Section from "@/components/Section";
import PillarGlyph from "@/components/PillarGlyph";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Millecam",
  description:
    "Comment Millecam traite les données à caractère personnel : quelles données, pourquoi, avec qui elles sont partagées et quels sont vos droits.",
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
function Provider({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <p className="font-serif text-sm font-semibold text-ink">{name}</p>
      <p className="mt-1 text-sm leading-relaxed text-ink/75">{children}</p>
    </div>
  );
}
function Table({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="mt-4 overflow-x-auto border border-line">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-line bg-[#F4F5F2]">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 font-serif font-semibold text-ink">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-line last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-top leading-relaxed text-ink/75">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const A = "text-prussian hover:underline";

export default function PrivacybeleidPage() {
  return (
    <Section className="pb-24 pt-16">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-ink">Politique de confidentialité</h1>
        <p className="mt-4 text-sm text-muted">Dernière mise à jour : 8 septembre 2026</p>

        <P>
          Chez Millecam, la sécurité de l&apos;information et la protection de la vie privée vont
          de pair avec les services que nous proposons à nos clients. C&apos;est pourquoi nous
          tenons à expliquer de manière transparente quelles données à caractère personnel nous
          traitons, pourquoi nous le faisons, avec qui nous les partageons et quels droits vous
          pouvez exercer à cet égard.
        </P>

        <H2>1. Qui est responsable de vos données à caractère personnel ?</H2>
        <P>
          <strong className="font-medium text-ink">Millecam</strong> est une entreprise
          individuelle de Robin Millecam et agit en tant que{" "}
          <strong className="font-medium text-ink">responsable du traitement</strong> pour les
          données à caractère personnel décrites dans la présente politique de confidentialité.
        </P>
        <P>
          <strong className="font-medium text-ink">Millecam – Robin Millecam</strong>
          <br />
          Sinte Annalaan 34
          <br />
          9300 Alost
          <br />
          Belgique
        </P>
        <P>
          Numéro d&apos;entreprise / TVA :{" "}
          <strong className="font-medium text-ink">BE 1026.876.048</strong>
        </P>
        <P>
          E-mail pour les questions relatives à la vie privée :{" "}
          <a className={A} href="mailto:privacy@millecam.be">
            privacy@millecam.be
          </a>
        </P>
        <P>
          Cette politique de confidentialité s&apos;applique lorsque vous visitez notre site web,
          prenez contact avec nous, demandez une offre, êtes client ou fournisseur, ou entrez
          d&apos;une autre manière en relation commerciale avec Millecam.
        </P>

        <H2>2. Quelles données à caractère personnel traitons-nous et pourquoi ?</H2>
        <P>Les données que nous traitons dépendent de votre relation avec Millecam.</P>
        <Table
          headers={["Traitement", "Données à caractère personnel possibles", "Finalité", "Base juridique"]}
          rows={[
            [
              "Site web et demandes de contact",
              "Nom, nom de l'entreprise, adresse e-mail, numéro de téléphone, objet et contenu de votre message",
              "Répondre aux questions et assurer le suivi des demandes",
              "Intérêt légitime et/ou mesures précontractuelles",
            ],
            [
              "Offres et contacts prospects",
              "Nom, fonction, organisation, coordonnées professionnelles, communications et données relatives aux offres",
              "Discuter d'éventuelles collaborations et établir des offres",
              "Mesures précontractuelles et intérêt légitime",
            ],
            [
              "Gestion de la clientèle et des contrats",
              "Nom, fonction, organisation, coordonnées, données contractuelles et de projet et communications professionnelles",
              "Exécution et gestion de nos prestations de services",
              "Exécution du contrat et intérêt légitime",
            ],
            [
              "Missions de consultance",
              "Coordonnées professionnelles et autres données à caractère personnel nécessaires à la mission",
              "Exécution de missions de consultance GRC, cybersécurité et vie privée",
              "Exécution du contrat et, selon la situation, traitement pour le compte du client",
            ],
            [
              "Facturation et comptabilité",
              "Nom, adresse, coordonnées, données d'entreprise, données de facturation et de paiement",
              "Facturation, comptabilité et administration fiscale",
              "Exécution du contrat et obligation légale",
            ],
            [
              "Communication professionnelle et réunions",
              "Nom, adresse e-mail, fonction, organisation, correspondance et données relatives aux réunions",
              "Communication, rendez-vous et collaboration",
              "Exécution du contrat, mesures précontractuelles et intérêt légitime",
            ],
            [
              "Sécurité du site web et fonctionnement technique",
              "Adresse IP et données techniques de requêtes et de journalisation le cas échéant",
              "Maintenir le site web disponible et sécurisé, examiner les erreurs et prévenir les abus",
              "Intérêt légitime",
            ],
            [
              "Analyse du site web",
              "Informations d'utilisation anonymisées/agrégées telles que les pages consultées, le référent, le pays/la région, le navigateur, le système d'exploitation et le type d'appareil",
              "Obtenir des informations sur l'utilisation et les performances de notre site web",
              "Intérêt légitime",
            ],
          ]}
        />
        <P>
          Nous ne collectons pas sciemment plus de données à caractère personnel que ce qui est
          nécessaire pour la finalité concernée.
        </P>

        <H2>3. D&apos;où proviennent vos données ?</H2>
        <P>
          Le plus souvent, nous recevons les données à caractère personnel directement de votre
          part, par exemple lorsque vous :
        </P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>remplissez notre formulaire de contact ;</LI>
          <LI>nous envoyez un e-mail ;</LI>
          <LI>prenez contact avec nous via LinkedIn ;</LI>
          <LI>participez à un entretien ou à une réunion ;</LI>
          <LI>demandez une offre ou concluez un contrat.</LI>
        </ul>
        <P>
          Dans un contexte professionnel, nous pouvons également recevoir des coordonnées de la
          part de votre employeur, de votre donneur d&apos;ordre, d&apos;un collègue ou d&apos;une
          autre personne de contact professionnelle.
        </P>
        <P>
          Par ailleurs, nous pouvons consulter des données professionnelles limitées accessibles
          publiquement, par exemple via des sites web d&apos;entreprises, des plateformes
          professionnelles telles que LinkedIn ou des registres d&apos;entreprises publics.
        </P>

        <H2>4. Missions de consultance et données à caractère personnel des clients</H2>
        <P>
          Dans le cadre de nos missions de consultance portant notamment sur le RGPD, NIS2, ISO
          27001 et CyberFundamentals, nous pouvons avoir accès à des informations contenant des
          données à caractère personnel.
        </P>
        <P>
          Il peut s&apos;agir par exemple de données figurant dans des documents de politique, des
          registres, des preuves d&apos;audit, des analyses de risques, des informations relatives
          à des incidents ou des systèmes auxquels un client nous donne accès.
        </P>
        <P>Notre rôle au regard du RGPD dépend alors du traitement concret concerné.</P>
        <P>
          Lorsque Millecam détermine elle-même les finalités et les moyens d&apos;un traitement,
          nous agissons en tant que{" "}
          <strong className="font-medium text-ink">responsable du traitement</strong>.
        </P>
        <P>
          Lorsque nous traitons des données à caractère personnel exclusivement pour le compte et
          selon les instructions d&apos;un client, nous pouvons agir en tant que{" "}
          <strong className="font-medium text-ink">sous-traitant</strong>. Dans ce cas, le
          traitement est régi par le contrat applicable et, lorsque cela est requis, par un accord
          de sous-traitance. Le client demeure responsable des informations qu&apos;il doit, en
          tant que responsable du traitement, fournir aux personnes concernées.
        </P>
        <P>
          La présente politique de confidentialité publique décrit principalement les traitements
          pour lesquels Millecam est elle-même responsable du traitement.
        </P>

        <H2>5. Avec qui partageons-nous des données à caractère personnel ?</H2>
        <P>Nous ne vendons ni ne louons jamais de données à caractère personnel.</P>
        <P>
          Pour exercer nos activités, nous faisons toutefois appel à des prestataires de services
          spécialisés. Selon le traitement concerné, les données à caractère personnel peuvent
          notamment être traitées par :
        </P>
        <Provider name="Microsoft 365">
          Nous utilisons Microsoft Outlook pour la messagerie professionnelle, Microsoft Teams
          pour la communication en ligne et les réunions, et OneDrive pour le stockage et la
          gestion des documents professionnels.
        </Provider>
        <Provider name="Dexxter">
          Nous utilisons Dexxter pour notre administration financière, notamment les offres, la
          facturation et le traitement comptable.
        </Provider>
        <Provider name="De Ridder – Arijs Accountancy">
          Notre comptable externe peut avoir accès aux données à caractère personnel nécessaires
          à la prestation de services comptables, fiscaux et administratifs.
        </Provider>
        <Provider name="Vercel">
          Notre site web est hébergé via Vercel. Lors de la mise à disposition et de la
          sécurisation du site web, des données techniques peuvent être traitées.
        </Provider>
        <Provider name="Resend">
          Lorsque vous utilisez le formulaire de contact de notre site web, Resend est utilisé
          pour l&apos;envoi technique du message à Millecam.
        </Provider>
        <Provider name="OpenAI et Anthropic">
          Millecam fait appel, dans le cadre de son fonctionnement professionnel, à des services
          assistés par IA fournis par OpenAI et Anthropic. Lorsque ces services sont utilisés pour
          des informations contenant des données à caractère personnel, cela se fait dans le cadre
          de garanties contractuelles et techniques appropriées et dans le respect de la
          minimisation des données et de la confidentialité.
        </Provider>
        <P>
          Par ailleurs, nous pouvons communiquer des données à des autorités publiques, des
          organes de contrôle ou d&apos;autres parties lorsque cela est légalement requis.
        </P>

        <H2>6. L&apos;IA au sein de nos services</H2>
        <P>
          Millecam utilise l&apos;IA comme outil d&apos;aide dans le cadre de certaines activités
          professionnelles.
        </P>
        <P>
          Nous appliquons à cet égard le principe de{" "}
          <strong className="font-medium text-ink">minimisation des données</strong> : les données
          à caractère personnel et les informations confidentielles des clients ne sont traitées
          par un service d&apos;IA que lorsque cela est approprié et nécessaire à la finalité
          poursuivie et lorsque des garanties techniques et contractuelles appropriées sont en
          place.
        </P>
        <P>
          L&apos;IA est utilisée comme un outil d&apos;aide et ne remplace pas sans plus
          l&apos;appréciation professionnelle que l&apos;on peut attendre de Millecam.
        </P>

        <H2>7. Analyse du site web</H2>
        <P>
          Nous utilisons <strong className="font-medium text-ink">Vercel Web Analytics</strong>{" "}
          pour obtenir des informations sur l&apos;utilisation de notre site web.
        </P>
        <P>
          Vercel Web Analytics fonctionne sans cookies. Ce service d&apos;analyse est conçu pour
          fournir des statistiques d&apos;utilisation agrégées sans suivre les visiteurs à travers
          différents sites web ou d&apos;un jour à l&apos;autre.
        </P>
        <P>Cela nous permet notamment d&apos;obtenir des informations sur :</P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>le nombre de pages consultées ;</LI>
          <LI>les pages visitées ;</LI>
          <LI>les sites web référents ;</LI>
          <LI>le pays ou la région ;</LI>
          <LI>le navigateur et le système d&apos;exploitation ;</LI>
          <LI>le type d&apos;appareil.</LI>
        </ul>
        <P>
          Nous utilisons ces informations exclusivement pour comprendre et améliorer
          l&apos;utilisation et les performances de notre site web.
        </P>
        <P>
          Vous trouverez davantage d&apos;informations sur l&apos;utilisation des cookies et des
          technologies similaires dans notre{" "}
          <a className={A} href="/fr/politique-de-cookies">
            politique en matière de cookies
          </a>{" "}
          distincte.
        </P>

        <H2>8. Transferts internationaux</H2>
        <P>
          Certains des prestataires avec lesquels nous collaborons sont actifs au niveau
          international. Il est donc possible que, dans certains cas, des données à caractère
          personnel soient traitées en dehors de l&apos;
          <strong className="font-medium text-ink">Espace économique européen (EEE)</strong>.
        </P>
        <P>
          Lorsque des données à caractère personnel sont transférées vers un pays situé en dehors
          de l&apos;EEE, nous veillons à ce qu&apos;il existe un fondement de transfert valable
          conformément au RGPD, par exemple :
        </P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>une décision d&apos;adéquation de la Commission européenne ;</LI>
          <LI>
            des clauses contractuelles types (« CCT ») de la Commission européenne ; ou
          </LI>
          <LI>une autre garantie reconnue légalement.</LI>
        </ul>
        <P>
          Le cas échéant, nous évaluons également quelles mesures supplémentaires sont appropriées
          pour le traitement concerné.
        </P>

        <H2>9. Combien de temps conservons-nous les données à caractère personnel ?</H2>
        <P>
          Nous ne conservons pas les données à caractère personnel plus longtemps que nécessaire
          pour la finalité pour laquelle elles ont été collectées, sauf si une durée de
          conservation plus longue est légalement requise ou justifiée.
        </P>
        <P>Nous appliquons, par principe, les durées suivantes :</P>
        <Table
          headers={["Données", "Durée de conservation"]}
          rows={[
            [
              "Demandes de contact ne débouchant pas sur une collaboration",
              "Maximum 2 ans après le dernier contact pertinent",
            ],
            [
              "Offres ne débouchant pas sur une mission",
              "Maximum 2 ans après le dernier contact pertinent, sauf si une durée plus longue est justifiée",
            ],
            [
              "Administration des clients, des contrats et des projets",
              "Pendant la durée de la collaboration, puis aussi longtemps que nécessaire pour les obligations contractuelles ou légales et la défense de droits en justice",
            ],
            [
              "Factures et documents comptables",
              "Pendant la durée de conservation légale applicable",
            ],
            [
              "E-mails professionnels et correspondance",
              "Aussi longtemps que nécessaire pour la relation commerciale, le dossier ou les obligations légales applicables",
            ],
            [
              "Données techniques du site web",
              "Pas plus longtemps que nécessaire pour la sécurité, le dépannage et le fonctionnement technique",
            ],
          ]}
        />
        <P>
          Lorsque les données ne sont plus nécessaires, elles sont supprimées ou anonymisées dans
          la mesure où cela est raisonnablement possible.
        </P>

        <H2>10. Comment sécurisons-nous les données à caractère personnel ?</H2>
        <P>
          Nous prenons des mesures techniques et organisationnelles appropriées pour protéger les
          données à caractère personnel contre l&apos;accès non autorisé, la perte, la
          modification, la divulgation ou l&apos;usage abusif.
        </P>
        <P>
          Ces mesures sont adaptées à la nature des données, au traitement concerné et aux risques
          associés.
        </P>
        <P>
          Nous appliquons à cet égard, le cas échéant, des principes tels que la limitation des
          accès, l&apos;authentification forte, la communication sécurisée, une gestion
          rigoureuse des fournisseurs, la minimisation des données et un stockage sécurisé.
        </P>
        <P>Aucun système d&apos;information ne peut toutefois garantir une sécurité absolue.</P>

        <H2>11. Prise de décision automatisée et profilage</H2>
        <P>
          Millecam ne prend aucune décision produisant des effets juridiques ou des effets
          significatifs similaires pour des personnes, fondée exclusivement sur un traitement
          automatisé au sens de l&apos;article 22 du RGPD.
        </P>
        <P>
          Nous n&apos;utilisons pas non plus les données à caractère personnel à des fins de
          profilage publicitaire ou de marketing comportemental.
        </P>

        <H2>12. Vos droits</H2>
        <P>
          Selon le traitement concerné et la base juridique applicable, vous disposez notamment,
          en vertu du RGPD, du droit :
        </P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>d&apos;obtenir l&apos;accès à vos données à caractère personnel ;</LI>
          <LI>de faire rectifier des données inexactes ou incomplètes ;</LI>
          <LI>
            de faire effacer vos données à caractère personnel lorsque les conditions légales
            sont remplies (droit à l&apos;effacement) ;
          </LI>
          <LI>d&apos;obtenir la limitation du traitement ;</LI>
          <LI>
            de vous opposer à certains traitements, y compris les traitements fondés sur
            l&apos;intérêt légitime ;
          </LI>
          <LI>
            de retirer à tout moment votre consentement lorsqu&apos;un traitement est fondé sur
            le consentement ;
          </LI>
          <LI>
            de recevoir ou de faire transmettre, dans certains cas, vos données à caractère
            personnel dans un format structuré, couramment utilisé et lisible par machine (droit
            à la portabilité des données) ;
          </LI>
          <LI>d&apos;introduire une réclamation auprès d&apos;une autorité de contrôle.</LI>
        </ul>
        <P>
          Ces droits ne sont pas absolus. Certaines obligations légales ou exceptions peuvent
          faire que nous ne pouvons donner suite à une demande que partiellement, voire pas du
          tout.
        </P>

        <H2>13. Comment exercer vos droits ?</H2>
        <P>Envoyez votre demande à :</P>
        <P>
          <a className={A} href="mailto:privacy@millecam.be">
            privacy@millecam.be
          </a>
        </P>
        <P>
          Veuillez fournir suffisamment d&apos;informations pour que nous puissions déterminer à
          quelles données votre demande se rapporte.
        </P>
        <P>
          Si nous avons un doute raisonnable quant à votre identité, nous pouvons demander des
          informations complémentaires afin d&apos;éviter que des données à caractère personnel ne
          soient communiquées à une personne non autorisée.
        </P>
        <P>Nous traitons les demandes dans les délais prescrits par le RGPD.</P>

        <H2>14. Réclamations</H2>
        <P>
          Vous avez des questions ou des préoccupations concernant la manière dont nous traitons
          vos données à caractère personnel ? Contactez-nous de préférence d&apos;abord à
          l&apos;adresse{" "}
          <a className={A} href="mailto:privacy@millecam.be">
            privacy@millecam.be
          </a>
          , afin que nous puissions examiner votre demande.
        </P>
        <P>Vous avez en outre le droit d&apos;introduire une réclamation auprès de :</P>
        <P>
          <strong className="font-medium text-ink">Autorité de protection des données</strong>
          <br />
          rue de la Presse 35
          <br />
          1000 Bruxelles
          <br />
          Belgique
        </P>
        <P>
          <a
            className={A}
            href="https://www.autoriteprotectiondonnees.be"
            target="_blank"
            rel="noreferrer"
          >
            www.autoriteprotectiondonnees.be
          </a>
        </P>

        <H2>15. Modifications de cette politique</H2>
        <P>
          Nos services, systèmes et obligations légales peuvent évoluer. C&apos;est pourquoi nous
          pouvons adapter cette politique de confidentialité de temps à autre.
        </P>
        <P>
          La date figurant en haut de cette page indique la dernière mise à jour de la politique.
          En cas de modifications importantes, nous veillerons, le cas échéant, à assurer une
          communication complémentaire.
        </P>
      </div>
    </Section>
  );
}
