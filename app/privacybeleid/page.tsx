import type { Metadata } from "next";
import Section from "@/components/Section";
import PillarGlyph from "@/components/PillarGlyph";

export const metadata: Metadata = {
  title: "Privacybeleid | Millecam",
  description: "Hoe Millecam met persoonsgegevens omgaat.",
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

export default function PrivacybeleidPage() {
  return (
    <Section className="pb-24 pt-16">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-ink">Privacybeleid</h1>
        <p className="mt-4 text-sm text-muted">Laatst bijgewerkt: [datum invullen]</p>

        <P>
          Millecam is een eenmanszaak van Robin Millecam, gevestigd te Sinte Annalaan 34, 9300
          Aalst (BTW BE 1026.876.048). Voor vragen over dit beleid of over hoe we met jouw gegevens
          omgaan, kan je terecht op <a className="text-terracotta hover:underline" href="mailto:privacy@millecam.be">privacy@millecam.be</a>.
        </P>

        <H2>Welke gegevens verzamelen we</H2>
        <P>
          Wanneer je het contactformulier op deze website gebruikt, verzamelen we de gegevens die
          je zelf invult: naam, bedrijfsnaam, e-mailadres, telefoonnummer (optioneel), het
          onderwerp van je vraag, en je bericht. We verzamelen geen gegevens via cookies of
          trackingtechnologie. Zie het <a className="text-terracotta hover:underline" href="/cookiebeleid">cookiebeleid</a> voor meer uitleg.
        </P>

        <H2>Waarvoor gebruiken we deze gegevens</H2>
        <P>
          Uitsluitend om te reageren op je vraag of aanvraag, en om (indien daaruit een
          samenwerking volgt) die samenwerking op te starten en op te volgen. We gebruiken je
          gegevens niet voor marketingdoeleinden zonder je uitdrukkelijke toestemming, en we
          verkopen of verhuren je gegevens nooit aan derden.
        </P>

        <H2>Rechtsgrond</H2>
        <P>
          De verwerking van je contactgegevens is gebaseerd op ons gerechtvaardigd belang om
          vragen van (potentiële) klanten te beantwoorden, en, zodra een opdracht wordt
          besproken of aangegaan, op de uitvoering van (voor)contractuele maatregelen op jouw
          verzoek (art. 6.1.b en 6.1.f AVG).
        </P>

        <H2>Wie heeft toegang tot je gegevens</H2>
        <P>
          Je gegevens worden in principe enkel door Robin Millecam ingezien. Voor de technische
          werking van deze website doen we beroep op twee verwerkers:
        </P>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/75">
          <LI>
            <span className="font-medium text-ink">Resend</span>: verzendt de e-mail die het
            contactformulier genereert. Resend kan hierbij optreden als verwerker buiten de EU;
            we maken enkel gebruik van partijen die passende waarborgen bieden (zoals
            modelcontractbepalingen).
          </LI>
          <LI>
            <span className="font-medium text-ink">Vercel</span>: host deze website en
            verwerkt daarbij technische gegevens (zoals IP-adressen in servertoegangslogs) die
            nodig zijn om de site te laten functioneren.
          </LI>
        </ul>

        <H2>Bewaartermijn</H2>
        <P>
          We bewaren de gegevens uit het contactformulier maximaal 2 jaar na je laatste contact
          met Millecam, tenzij een langere bewaartermijn wettelijk verplicht is (bijvoorbeeld bij
          een lopende overeenkomst of boekhoudkundige verplichtingen).
        </P>

        <H2>Doorgifte buiten de EU</H2>
        <P>
          Sommige van de hierboven genoemde verwerkers kunnen gegevens verwerken op servers
          buiten de Europese Economische Ruimte. In dat geval zorgen we ervoor dat deze doorgifte
          gebeurt op basis van een passende waarborg zoals erkend door de AVG (zoals
          modelcontractbepalingen van de Europese Commissie).
        </P>

        <H2>Beveiliging</H2>
        <P>
          We nemen redelijke technische en organisatorische maatregelen om je gegevens te
          beschermen tegen verlies, misbruik of onbevoegde toegang.
        </P>

        <H2>Jouw rechten</H2>
        <P>Onder de AVG heb je met betrekking tot je persoonsgegevens het recht op:</P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>Inzage in de gegevens die we van je verwerken</LI>
          <LI>Correctie van onjuiste of onvolledige gegevens</LI>
          <LI>Verwijdering van je gegevens (&apos;recht om vergeten te worden&apos;)</LI>
          <LI>Beperking van de verwerking</LI>
          <LI>Bezwaar tegen de verwerking</LI>
          <LI>Overdraagbaarheid van je gegevens (dataportabiliteit)</LI>
        </ul>
        <P>
          Om een van deze rechten uit te oefenen, mail je naar{" "}
          <a className="text-terracotta hover:underline" href="mailto:privacy@millecam.be">privacy@millecam.be</a>. We reageren binnen de wettelijke termijn van één maand.
        </P>

        <H2>Klacht indienen</H2>
        <P>
          Ben je niet tevreden over hoe we met je gegevens omgaan? Neem dan eerst contact met ons
          op. Je hebt daarnaast steeds het recht om een klacht in te dienen bij de
          Gegevensbeschermingsautoriteit (GBA): Drukpersstraat 35, 1000 Brussel,{" "}
          <a className="text-terracotta hover:underline" href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noreferrer">
            gegevensbeschermingsautoriteit.be
          </a>.
        </P>

        <H2>Wijzigingen aan dit beleid</H2>
        <P>
          We kunnen dit privacybeleid van tijd tot tijd aanpassen. De datum bovenaan deze pagina
          geeft aan wanneer het beleid voor het laatst is bijgewerkt.
        </P>
      </div>
    </Section>
  );
}
