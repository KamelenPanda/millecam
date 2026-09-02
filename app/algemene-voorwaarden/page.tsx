import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Algemene voorwaarden | Millecam",
  description: "De voorwaarden die van toepassing zijn op opdrachten bij Millecam.",
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

export default function AlgemeneVoorwaardenPage() {
  return (
    <Section className="pb-24 pt-16">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-ink">Algemene voorwaarden</h1>
        <p className="mt-4 text-sm text-muted">Laatst bijgewerkt: 02/09/2026</p>

        <P>
          Deze voorwaarden zijn van toepassing op elke offerte en overeenkomst tussen Millecam
          (Robin Millecam, eenmanszaak, Sinte Annalaan 34, 9300 Aalst, BTW BE 1026.876.048, hierna
          &quot;Millecam&quot;) en een opdrachtgever, tenzij schriftelijk anders overeengekomen.
        </P>

        <H2 n="1">Toepassingsgebied</H2>
        <P>
          Deze algemene voorwaarden gelden voor alle diensten van Millecam, waaronder GAP-analyses,
          implementatietrajecten, DPO-as-a-Service, tabletop exercises en fractional
          GRC-ondersteuning. Afwijkende voorwaarden van de opdrachtgever zijn niet van toepassing,
          tenzij Millecam deze schriftelijk aanvaardt.
        </P>

        <H2 n="2">Totstandkoming van de overeenkomst</H2>
        <P>
          Een offerte van Millecam is vrijblijvend en geldig gedurende 30 dagen, tenzij anders
          vermeld. De overeenkomst komt tot stand na schriftelijke bevestiging door de
          opdrachtgever (inclusief per e-mail), of door de feitelijke aanvang van de werkzaamheden.
        </P>

        <H2 n="3">Uitvoering van de opdracht</H2>
        <P>
          Millecam voert de opdracht uit naar best vermogen, op basis van een inspanningsverbintenis
          (niet een resultaatsverbintenis), tenzij uitdrukkelijk anders overeengekomen. De
          opdrachtgever bezorgt tijdig de informatie, documenten en toegang die redelijkerwijs nodig
          zijn voor de uitvoering. Vertraging die het gevolg is van laattijdige medewerking van de
          opdrachtgever kan niet aan Millecam worden toegerekend.
        </P>

        <H2 n="4">Prijs en betaling</H2>
        <P>
          Prijzen worden vermeld exclusief btw, tenzij anders aangegeven. Facturen zijn betaalbaar
          binnen 30 dagen na factuurdatum. Bij laattijdige betaling is van rechtswege en zonder
          voorafgaande ingebrekestelling een verwijlintrest van 1% per maand verschuldigd, vermeerderd
          met een forfaitaire schadevergoeding van 10% van het factuurbedrag (met een minimum van
          &euro;75).
        </P>

        <H2 n="5">Duur en beëindiging</H2>
        <P>
          Een opdracht loopt voor de duur die in de offerte of overeenkomst is vastgelegd. Bij
          doorlopende dienstverlening (zoals DPO-as-a-Service of fractional ondersteuning) geldt een
          opzegtermijn van 30 dagen, tenzij anders overeengekomen. Beide partijen kunnen de
          overeenkomst met onmiddellijke ingang beëindigen bij een ernstige tekortkoming van de
          andere partij die niet binnen 14 dagen na schriftelijke ingebrekestelling wordt hersteld.
        </P>

        <H2 n="6">Aansprakelijkheid</H2>
        <P>
          De aansprakelijkheid van Millecam voor schade die voortvloeit uit de uitvoering van een
          opdracht is beperkt tot het bedrag dat voor die opdracht werd gefactureerd, en in elk geval
          tot het bedrag dat de beroepsaansprakelijkheidsverzekering van Millecam uitkeert. Millecam
          is niet aansprakelijk voor indirecte schade (zoals gederfde winst of reputatieschade). Deze
          beperking geldt niet bij opzet of grove fout van Millecam.
        </P>

        <H2 n="7">Intellectuele eigendom</H2>
        <P>
          Rapporten, sjablonen, methodieken en andere werken die Millecam in het kader van een
          opdracht ontwikkelt, blijven eigendom van Millecam, tenzij schriftelijk anders
          overeengekomen. De opdrachtgever krijgt een gebruiksrecht voor eigen intern gebruik.
          Onderliggende methodieken en generieke sjablonen van Millecam mogen ook bij andere klanten
          hergebruikt worden.
        </P>

        <H2 n="8">Vertrouwelijkheid</H2>
        <P>
          Beide partijen behandelen alle vertrouwelijke informatie die zij van elkaar ontvangen met
          de nodige zorgvuldigheid, en gebruiken deze uitsluitend in het kader van de opdracht. Deze
          verplichting blijft gelden na afloop van de opdracht.
        </P>

        <H2 n="9">Verwerking van persoonsgegevens</H2>
        <P>
          Voor de verwerking van persoonsgegevens in het kader van een opdracht (en, waar van
          toepassing, een verwerkersovereenkomst) verwijst Millecam naar het{" "}
          <a className="text-terracotta hover:underline" href="/privacybeleid">privacybeleid</a>.
        </P>

        <H2 n="10">Overmacht</H2>
        <P>
          Geen van beide partijen is aansprakelijk voor een tekortkoming die het gevolg is van
          overmacht: een omstandigheid buiten haar redelijke controle die de uitvoering van de
          opdracht tijdelijk of blijvend verhindert.
        </P>

        <H2 n="11">Wijziging van deze voorwaarden</H2>
        <P>
          Millecam kan deze algemene voorwaarden wijzigen. De versie die van toepassing was op het
          moment van het sluiten van de overeenkomst blijft gelden voor die overeenkomst, tenzij
          partijen anders overeenkomen.
        </P>

        <H2 n="12">Toepasselijk recht en bevoegde rechtbank</H2>
        <P>
          Op elke overeenkomst met Millecam is het Belgisch recht van toepassing. Geschillen worden
          voorgelegd aan de bevoegde rechtbank van de zetel van Millecam, onverminderd het recht van
          Millecam om een geschil voor te leggen aan de rechtbank van de woon- of vestigingsplaats
          van de opdrachtgever.
        </P>

        <P>
          Vragen over deze voorwaarden? Mail naar{" "}
          <a className="text-terracotta hover:underline" href="mailto:info@millecam.be">info@millecam.be</a>.
        </P>
      </div>
    </Section>
  );
}
