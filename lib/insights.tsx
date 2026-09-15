import type { ReactNode } from "react";

export type InsightArticle = {
  slug: string;
  /** Which pillar this article belongs to — same vocabulary as the rest of the site. */
  framework: string;
  title: string;
  /** One-sentence summary shown on the hub card and as the article's dek. */
  dek: string;
  publishedAt: string;
  readingTime: string;
  body: ReactNode;
  relatedHref: string;
  relatedLabel: string;
};

/**
 * Insights content architecture — deliberately one flagship article for now,
 * not a mass-generated set. Every claim here is a narrower re-explanation of
 * facts already published on /nis2, not new material, so it can't drift out
 * of sync with what Millecam actually offers.
 */
export const ARTICLES: InsightArticle[] = [
  {
    slug: "nis2-aantoonbaarheid",
    framework: "NIS2",
    title: "NIS2 in België: wie valt eronder, en wat betekent ‘aantoonbaar’ echt?",
    dek: "NIS2 vraagt niet enkel dat je maatregelen neemt, maar dat je kan bewijzen dat ze werken. Dat onderscheid verandert wat een GAP-analyse eigenlijk oplevert.",
    publishedAt: "2026-09-13",
    readingTime: "6 min",
    relatedHref: "/nis2",
    relatedLabel: "Meer over NIS2 bij Millecam",
    body: (
      <>
        <p>
          NIS2 wordt vaak beschreven als &ldquo;de nieuwe cybersecurity-richtlijn&rdquo;, alsof het om één
          extra checklist gaat naast wat een organisatie al doet. Dat is een onderschatting. NIS2 verschuift
          de vraag van <em>&ldquo;hebben we maatregelen?&rdquo;</em> naar <em>&ldquo;kunnen we aantonen dat ze
          werken?&rdquo;</em> — en dat tweede is voor de meeste KMO&apos;s de eigenlijke uitdaging.
        </p>

        <h2>Wie valt eronder?</h2>
        <p>
          NIS2 is relevant vanaf een bepaalde omvang of sector: essentiële en belangrijke entiteiten in
          onder meer energie, transport, digitale infrastructuur, gezondheidszorg en overheid. Maar
          aantoonbaarheid reikt verder dan die directe scope. Wie toelevert aan een entiteit die wél onder
          NIS2 valt, krijgt vaak dezelfde vraag doorgeschoven via het contract — zonder zelf formeel
          NIS2-plichtig te zijn.
        </p>

        <h2>Wat &ldquo;aantoonbaar&rdquo; concreet betekent</h2>
        <p>
          NIS2 verplicht risicobeheermaatregelen op basis van artikel 21: toegangsbeheer,
          leveranciersbeheer, bedrijfscontinuïteit, incidentrespons, en meer. Het is niet genoeg dat die
          maatregelen ergens bestaan. Een auditor of toezichthouder wil twee dingen zien: documentatie
          (beleid, procedures) én bewijs van effectieve implementatie (logs, trainingen, testresultaten,
          incidentregistraties). Een GAP-analyse scoort daarom altijd op beide dimensies apart — een
          organisatie kan perfect gedocumenteerd beleid hebben en toch laag scoren op aantoonbaarheid, simpelweg
          omdat niemand kan bewijzen dat het beleid ook gevolgd wordt.
        </p>

        <h2>Waarom dit de aanpak bepaalt</h2>
        <p>
          Dat onderscheid is de reden waarom een NIS2-traject niet stopt bij een beleidsdocument. Bevindingen
          uit de GAP-analyse worden vertaald naar een concreet actieplan met eigenaarschap en een realistisch
          tijdspad, gevolgd door een meldingsprocedure die aansluit bij de NIS2-rapportagetermijnen, en
          voorbereiding van het leidinggevend orgaan op zijn eigen verantwoordelijkheid. Aantoonbaarheid is
          geen eindpunt — het is iets wat blijft draaien nadat het project is afgerond.
        </p>

        <h2>Niet zeker of dit voor jou geldt?</h2>
        <p>
          Sector en omvang bepalen samen of NIS2 rechtstreeks van toepassing is, en de indirecte
          contractuele druk (via een klant of opdrachtgever) is minstens even vaak de eigenlijke aanleiding
          om ermee aan de slag te gaan. Een korte scoping-analyse geeft daar snel duidelijkheid over.
        </p>
      </>
    ),
  },
];

export function getArticle(slug: string): InsightArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export const ARTICLES_EN: InsightArticle[] = [
  {
    slug: "nis2-demonstrability",
    framework: "NIS2",
    title: "NIS2 in Belgium: who does it apply to, and what does ‘demonstrable’ really mean?",
    dek: "NIS2 doesn't just ask you to take measures — it asks you to prove they work. That distinction changes what a GAP analysis actually delivers.",
    publishedAt: "2026-09-13",
    readingTime: "6 min",
    relatedHref: "/en/nis2",
    relatedLabel: "More about NIS2 at Millecam",
    body: (
      <>
        <p>
          NIS2 is often described as &ldquo;the new cybersecurity directive&rdquo;, as if it were just one
          more checklist alongside what an organisation already does. That undersells it. NIS2 shifts the
          question from <em>&ldquo;do we have measures in place?&rdquo;</em> to <em>&ldquo;can we prove they
          work?&rdquo;</em> — and for most SMEs, that second question is the real challenge.
        </p>

        <h2>Who does it apply to?</h2>
        <p>
          NIS2 becomes relevant from a certain size or sector onward: essential and important entities in,
          among others, energy, transport, digital infrastructure, healthcare, and government. But
          demonstrability reaches further than that direct scope. Anyone who supplies an entity that does
          fall under NIS2 often gets the same question passed down through the contract — without being
          formally subject to NIS2 themselves.
        </p>

        <h2>What &ldquo;demonstrable&rdquo; actually means</h2>
        <p>
          NIS2 requires risk management measures under Article 21: access management, supplier management,
          business continuity, incident response, and more. It isn&apos;t enough for those measures to
          exist somewhere on paper. An auditor or supervisory authority wants to see two things:
          documentation (policy, procedures) <em>and</em> evidence of effective implementation (logs,
          training records, test results, incident logs). That&apos;s why a GAP analysis always scores both
          dimensions separately — an organisation can have perfectly documented policy and still score low
          on demonstrability, simply because no one can prove the policy is actually being followed.
        </p>

        <h2>Why this shapes the approach</h2>
        <p>
          That distinction is why a NIS2 track doesn&apos;t stop at a policy document. Findings from the
          GAP analysis are translated into a concrete action plan with ownership and a realistic timeline,
          followed by an incident notification procedure aligned with the NIS2 reporting deadlines, and
          preparation of the management body for its own responsibility. Demonstrability isn&apos;t an
          endpoint — it&apos;s something that keeps running after the project is done.
        </p>

        <h2>Not sure whether this applies to you?</h2>
        <p>
          Sector and size together determine whether NIS2 applies directly, and indirect contractual
          pressure (via a client or principal) is at least as often the actual reason organisations start
          working on it. A short scoping analysis quickly clarifies where you stand.
        </p>
      </>
    ),
  },
];

export function getArticleEn(slug: string): InsightArticle | undefined {
  return ARTICLES_EN.find((a) => a.slug === slug);
}

export const ARTICLES_FR: InsightArticle[] = [
  {
    slug: "demontrabilite-nis2",
    framework: "NIS2",
    title: "NIS2 en Belgique : qui est concerné, et que signifie vraiment « démontrable » ?",
    dek: "NIS2 ne demande pas seulement de prendre des mesures, mais de prouver qu'elles fonctionnent. Cette distinction change ce qu'une analyse GAP apporte réellement.",
    publishedAt: "2026-09-13",
    readingTime: "6 min",
    relatedHref: "/fr/nis2",
    relatedLabel: "En savoir plus sur NIS2 chez Millecam",
    body: (
      <>
        <p>
          NIS2 est souvent présentée comme &laquo; la nouvelle directive cybersécurité &raquo;, comme s&apos;il
          s&apos;agissait d&apos;une simple case à cocher en plus de ce qu&apos;une organisation fait déjà.
          C&apos;est sous-estimer la portée du texte. NIS2 déplace la question de{" "}
          <em>&laquo; avons-nous des mesures ? &raquo;</em> vers{" "}
          <em>&laquo; pouvons-nous démontrer qu&apos;elles fonctionnent ? &raquo;</em> — et pour la plupart
          des PME, c&apos;est cette seconde question qui constitue le véritable défi.
        </p>

        <h2>Qui est concerné ?</h2>
        <p>
          NIS2 devient pertinente à partir d&apos;une certaine taille ou d&apos;un certain secteur : les
          entités essentielles et importantes, notamment dans l&apos;énergie, le transport,
          l&apos;infrastructure numérique, les soins de santé et les administrations publiques. Mais la
          conformité démontrable dépasse ce champ d&apos;application direct. Quiconque fournit une entité
          qui, elle, relève de NIS2 se voit souvent transmettre la même exigence par contrat — sans être
          elle-même formellement soumise à NIS2.
        </p>

        <h2>Ce que « démontrable » signifie concrètement</h2>
        <p>
          NIS2 impose des mesures de gestion des risques en vertu de l&apos;article 21 : gestion des accès,
          gestion des fournisseurs, continuité des activités, réponse aux incidents, et plus encore. Il ne
          suffit pas que ces mesures existent quelque part sur papier. Un auditeur ou une autorité de
          contrôle veut voir deux choses : la documentation (politiques, procédures) <em>et</em> la preuve
          d&apos;une mise en œuvre effective (journaux, formations, résultats de tests, registres
          d&apos;incidents). C&apos;est pourquoi une analyse GAP note toujours ces deux dimensions
          séparément — une organisation peut avoir une politique parfaitement documentée et pourtant
          obtenir un score faible en matière de conformité démontrable, simplement parce que personne ne
          peut prouver que cette politique est réellement suivie.
        </p>

        <h2>Pourquoi cela détermine l&apos;approche</h2>
        <p>
          Cette distinction explique pourquoi un trajet NIS2 ne s&apos;arrête pas à un document de
          politique. Les constats de l&apos;analyse GAP sont traduits en un plan d&apos;action concret,
          avec répartition des responsabilités et un calendrier réaliste, suivi d&apos;une procédure de
          notification d&apos;incident alignée sur les délais de notification NIS2, et de la préparation de
          l&apos;organe de direction à sa propre responsabilité. La conformité démontrable n&apos;est pas
          un aboutissement — c&apos;est quelque chose qui continue de vivre une fois le projet terminé.
        </p>

        <h2>Vous n&apos;êtes pas sûr(e) que cela vous concerne ?</h2>
        <p>
          Le secteur et la taille déterminent ensemble si NIS2 s&apos;applique directement, et la pression
          contractuelle indirecte (via un client ou un donneur d&apos;ordre) est au moins aussi souvent la
          véritable raison qui pousse à s&apos;y mettre. Une courte analyse de scoping permet d&apos;y voir
          rapidement clair.
        </p>
      </>
    ),
  },
];

export function getArticleFr(slug: string): InsightArticle | undefined {
  return ARTICLES_FR.find((a) => a.slug === slug);
}
