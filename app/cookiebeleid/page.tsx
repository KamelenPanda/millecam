import type { Metadata } from "next";
import Section from "@/components/Section";
import PillarGlyph from "@/components/PillarGlyph";

export const metadata: Metadata = {
  title: "Cookiebeleid | Millecam",
  description: "Welke cookies deze website gebruikt (bijna geen).",
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
        <h1 className="font-serif text-4xl font-bold text-ink">Cookiebeleid</h1>
        <p className="mt-4 text-sm text-muted">Laatst bijgewerkt: 8 september 2026</p>

        <P>
          Millecam wil transparant zijn over de technologie die op deze website wordt gebruikt.
          Daarom leggen we hieronder uit welke cookies en vergelijkbare technologieën worden
          gebruikt.
        </P>

        <H2>1. Wat zijn cookies?</H2>
        <P>
          Cookies zijn kleine bestanden die een website via je browser op je toestel kan
          opslaan. Ze kunnen onder andere worden gebruikt om een website correct te laten
          functioneren, voorkeuren te onthouden, gebruiksstatistieken te verzamelen of bezoekers
          over websites heen te volgen.
        </P>
        <P>
          Niet iedere websitefunctionaliteit waarvoor gegevens worden verwerkt, maakt echter
          gebruik van cookies.
        </P>

        <H2>2. Gebruikt millecam.be cookies?</H2>
        <P>Op dit moment plaatst millecam.be geen cookies op je toestel.</P>
        <P>We gebruiken geen:</P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>advertentiecookies;</LI>
          <LI>marketingcookies;</LI>
          <LI>trackingcookies;</LI>
          <LI>socialmediacookies;</LI>
          <LI>cookies voor gedragsprofilering.</LI>
        </ul>
        <P>
          Daarom tonen we momenteel geen cookiebanner waarmee toestemming voor
          niet-noodzakelijke cookies wordt gevraagd.
        </P>

        <H2>3. Vercel Web Analytics</H2>
        <P>
          We gebruiken Vercel Web Analytics om geaggregeerde statistieken over het gebruik van
          onze website te verkrijgen.
        </P>
        <P>
          Vercel Web Analytics werkt zonder cookies en is ontworpen om bezoekers niet over
          verschillende websites of dagen heen te volgen.
        </P>
        <P>
          Afhankelijk van het websitebezoek kunnen analyticsgegevens bestaan uit informatie
          zoals:
        </P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>bezochte pagina;</LI>
          <LI>tijdstip van het bezoek;</LI>
          <LI>verwijzende website;</LI>
          <LI>land of regio;</LI>
          <LI>browser en versie;</LI>
          <LI>besturingssysteem;</LI>
          <LI>apparaattype.</LI>
        </ul>
        <P>
          Vercel gebruikt voor het bepalen van unieke bezoekers een technische hash die wordt
          afgeleid van het inkomende request. Deze identificatie is tijdelijk en wordt dagelijks
          opnieuw ingesteld. Het IP-adres wordt volgens Vercel niet als onderdeel van het
          analyticsdatapunt opgeslagen.
        </P>
        <P>
          We gebruiken deze statistieken uitsluitend om inzicht te krijgen in het gebruik en de
          prestaties van onze website.
        </P>

        <H2>4. Technisch noodzakelijke verwerking</H2>
        <P>
          Ook wanneer een website geen cookies plaatst, vindt technisch gegevensverkeer plaats
          tussen je browser en de infrastructuur die nodig is om de website te leveren.
        </P>
        <P>
          Onze website wordt gehost via Vercel. Daarbij kunnen technische gegevens zoals
          IP-adressen en requestinformatie worden verwerkt voor het afleveren en beveiligen van
          de website en voor technische logging.
        </P>
        <P>Dit staat los van het plaatsen van cookies op je toestel.</P>
        <P>
          Meer informatie over deze verwerking vind je in ons{" "}
          <a className={A} href="/privacybeleid">
            privacybeleid
          </a>
          .
        </P>

        <H2>5. Contactformulier</H2>
        <P>Het contactformulier maakt geen gebruik van marketing- of trackingcookies.</P>
        <P>
          Wanneer je het formulier zelf verstuurt, worden de door jou ingevulde gegevens
          verwerkt om je bericht aan Millecam te bezorgen. Hiervoor gebruiken we Resend als
          technische dienstverlener.
        </P>
        <P>
          Dit betreft de verwerking van gegevens die je actief aan ons verstrekt en staat los
          van cookies.
        </P>

        <H2>6. Geen marketingtracking</H2>
        <P>
          Millecam gebruikt momenteel geen trackingtechnologie voor gerichte advertenties,
          remarketing of het opbouwen van marketingprofielen van websitebezoekers.
        </P>
        <P>
          Als we in de toekomst technologie toevoegen waarvoor voorafgaande toestemming vereist
          is, zullen we deze niet activeren voordat de vereiste toestemming is verkregen. We
          zullen dit cookiebeleid en, waar nodig, de websitefunctionaliteit daarop aanpassen.
        </P>

        <H2>7. Wijzigingen</H2>
        <P>
          Technologie en onze website kunnen veranderen. We kunnen dit cookiebeleid daarom
          aanpassen wanneer we nieuwe functionaliteiten, leveranciers of technologieën
          introduceren.
        </P>
        <P>
          De datum bovenaan deze pagina geeft aan wanneer dit beleid voor het laatst werd
          bijgewerkt.
        </P>

        <H2>8. Vragen</H2>
        <P>
          Heb je vragen over het gebruik van cookies of andere technologieën op onze website?
        </P>
        <P>Neem contact op via:</P>
        <P>
          <a className={A} href="mailto:privacy@millecam.be">
            privacy@millecam.be
          </a>
        </P>
        <P>
          Meer informatie over hoe Millecam persoonsgegevens verwerkt vind je in ons{" "}
          <a className={A} href="/privacybeleid">
            privacybeleid
          </a>
          .
        </P>
      </div>
    </Section>
  );
}
