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
