import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";

export const metadata: Metadata = {
  title: "Veelgestelde vragen | Millecam",
  description: "Antwoorden op veelgestelde vragen over NIS2, ISO 27001, CyFun, GDPR en werken met Millecam.",
};

const FAQS = [
  {
    vraag: "Wat is het verschil tussen NIS2, ISO 27001, CyFun en GDPR?",
    antwoord:
      "NIS2 is een Europese richtlijn, een wettelijke verplichting voor bepaalde sectoren en organisatiegroottes. ISO 27001 is een internationale norm, vrijwillig maar vaak contractueel vereist door klanten of aanbestedingen. CyFun is een Belgisch zelfevaluatiekader van het Centre for Cybersecurity Belgium, een toegankelijker alternatief voor NIS2-aantoonbaarheid. GDPR (AVG) is Europese privacywetgeving, van toepassing op vrijwel elke organisatie die persoonsgegevens verwerkt. Ze overlappen deels, bijvoorbeeld op het vlak van informatiebeveiligingscontrols, maar dienen elk een ander doel.",
  },
  {
    vraag: "Valt mijn bedrijf onder NIS2?",
    antwoord:
      "Dat hangt af van je sector en omvang: middelgrote en grote organisaties in aangewezen sectoren (zoals energie, transport, digitale infrastructuur en gezondheidszorg) vallen doorgaans onder de richtlijn. Een korte scoping-check tijdens een kennismakingsgesprek geeft snel duidelijkheid over jouw situatie.",
  },
  {
    vraag: "Hoe lang duurt een GAP-analyse?",
    antwoord:
      "Meestal enkele weken, afhankelijk van de omvang van de organisatie en het gekozen kader. Documentenreview en interviews nemen het meeste tijd in beslag; hoe snel documentatie en toegang beschikbaar zijn, bepaalt mee de doorlooptijd.",
  },
  {
    vraag: "Kan Millecam optreden als onze externe DPO?",
    antwoord:
      "Ja. Robin is DPI-gecertificeerd Data Protection Officer en neemt die rol extern op via DPO-as-a-Service, op maandelijkse basis.",
  },
  {
    vraag: "Werkt Millecam enkel met KMO's?",
    antwoord:
      "De focus ligt op KMO's, omdat zij zelden een interne compliance-officer hebben maar wel aan dezelfde eisen moeten voldoen als grotere organisaties. Grotere trajecten zijn bespreekbaar, in overleg.",
  },
  {
    vraag: "Wat kost een traject bij Millecam?",
    antwoord:
      "Dat hangt af van de dienst: een GAP-analyse heeft een vaste prijs, een implementatietraject wordt per project geraamd, en DPO-as-a-Service of fractional ondersteuning lopen via een maandelijkse of dagprijs. Een concreet bedrag volgt pas na een kort intakegesprek.",
  },
  {
    vraag: "Is een eerste gesprek vrijblijvend?",
    antwoord:
      "Ja. Een kennismaking van ongeveer dertig minuten is gratis en vrijblijvend, en dient om te bepalen of, en hoe, Millecam kan helpen.",
  },
  {
    vraag: "Werken jullie samen met andere IT- of securitypartners?",
    antwoord:
      "Ja. GRC-advies staat vaak los van technische implementatie. Millecam werkt waar nuttig samen met bestaande IT-partners van de klant, of verwijst door indien nodig.",
  },
];

export default function FAQPage() {
  return (
    <Section className="pb-24 pt-16">
      <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">Veelgestelde vragen</h1>
      <p className="mt-4 max-w-xl text-ink/70">
        Staat je vraag er niet bij? Stel ze rechtstreeks via het contactformulier.
      </p>

      <div className="mt-10 max-w-2xl divide-y divide-line border-t border-line">
        {FAQS.map((f) => (
          <details key={f.vraag} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-lg font-semibold text-ink">
              {f.vraag}
              <span className="mt-1 shrink-0 text-2xl font-normal leading-none text-terracotta transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/70">{f.antwoord}</p>
          </details>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-md pt-14 text-center">
        <PillarGlyph className="mx-auto h-6 w-5" />
        <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">Nog een andere vraag?</h2>
        <p className="mt-3 text-sm text-ink/70">
          Een kort gesprek beantwoordt vaak meer dan een lijst met vragen.
        </p>
        <Button href="/contact" variant="primary" className="mx-auto mt-6 w-fit">
          Plan een gesprek
        </Button>
      </div>
    </Section>
  );
}
