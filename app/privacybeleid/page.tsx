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
        <h1 className="font-serif text-4xl font-bold text-ink">Privacybeleid</h1>
        <p className="mt-4 text-sm text-muted">Laatst bijgewerkt: 8 september 2026</p>

        <P>
          Bij Millecam gaan informatiebeveiliging en privacy hand in hand met de diensten die we
          aan onze klanten aanbieden. We vinden het daarom belangrijk om transparant uit te
          leggen welke persoonsgegevens we verwerken, waarom we dat doen, met wie we gegevens
          delen en welke rechten je daarbij hebt.
        </P>

        <H2>1. Wie is verantwoordelijk voor jouw persoonsgegevens?</H2>
        <P>
          <strong className="font-medium text-ink">Millecam</strong> is een eenmanszaak van
          Robin Millecam en treedt op als verwerkingsverantwoordelijke voor de persoonsgegevens
          die in dit privacybeleid worden beschreven.
        </P>
        <P>
          <strong className="font-medium text-ink">Millecam – Robin Millecam</strong>
          <br />
          Sinte Annalaan 34
          <br />
          9300 Aalst
          <br />
          België
        </P>
        <P>
          Ondernemingsnummer / BTW: <strong className="font-medium text-ink">BE 1026.876.048</strong>
        </P>
        <P>
          E-mail voor privacyvragen:{" "}
          <a className={A} href="mailto:privacy@millecam.be">
            privacy@millecam.be
          </a>
        </P>
        <P>
          Dit privacybeleid is van toepassing wanneer je onze website bezoekt, contact met ons
          opneemt, een offerte aanvraagt, klant of leverancier bent, of op een andere manier een
          zakelijke relatie met Millecam aangaat.
        </P>

        <H2>2. Welke persoonsgegevens verwerken we en waarom?</H2>
        <P>Welke gegevens we verwerken, hangt af van je relatie met Millecam.</P>
        <Table
          headers={["Verwerking", "Mogelijke persoonsgegevens", "Doel", "Rechtsgrond"]}
          rows={[
            [
              "Website en contactaanvragen",
              "Naam, bedrijfsnaam, e-mailadres, telefoonnummer, onderwerp en inhoud van je bericht",
              "Vragen beantwoorden en aanvragen opvolgen",
              "Gerechtvaardigd belang en/of precontractuele maatregelen",
            ],
            [
              "Offertes en prospectcontacten",
              "Naam, functie, organisatie, zakelijke contactgegevens, communicatie en offertegegevens",
              "Mogelijke samenwerkingen bespreken en offertes opstellen",
              "Precontractuele maatregelen en gerechtvaardigd belang",
            ],
            [
              "Klanten- en contractbeheer",
              "Naam, functie, organisatie, contactgegevens, contract- en projectgegevens en zakelijke communicatie",
              "Uitvoering en beheer van onze dienstverlening",
              "Uitvoering van de overeenkomst en gerechtvaardigd belang",
            ],
            [
              "Consultancyopdrachten",
              "Zakelijke contactgegevens en andere persoonsgegevens die noodzakelijk zijn voor de opdracht",
              "Uitvoering van GRC-, cybersecurity- en privacyconsultancy",
              "Uitvoering van de overeenkomst en, afhankelijk van de situatie, verwerking in opdracht van de klant",
            ],
            [
              "Facturatie en boekhouding",
              "Naam, adres, contactgegevens, ondernemingsgegevens, factuur- en betalingsgegevens",
              "Facturatie, boekhouding en fiscale administratie",
              "Uitvoering overeenkomst en wettelijke verplichting",
            ],
            [
              "Zakelijke communicatie en meetings",
              "Naam, e-mailadres, functie, organisatie, correspondentie en vergadergegevens",
              "Communicatie, afspraken en samenwerking",
              "Uitvoering overeenkomst, precontractuele maatregelen en gerechtvaardigd belang",
            ],
            [
              "Websitebeveiliging en technische werking",
              "IP-adres en technische request- en loggegevens waar van toepassing",
              "Website beschikbaar en veilig houden, fouten onderzoeken en misbruik voorkomen",
              "Gerechtvaardigd belang",
            ],
            [
              "Websiteanalyse",
              "Geanonimiseerde/geaggregeerde gebruiksinformatie zoals paginaweergaven, referrer, land/regio, browser, besturingssysteem en apparaattype",
              "Inzicht krijgen in het gebruik en de prestaties van onze website",
              "Gerechtvaardigd belang",
            ],
          ]}
        />
        <P>
          We verzamelen niet bewust meer persoonsgegevens dan noodzakelijk voor het betreffende
          doel.
        </P>

        <H2>3. Waar komen jouw gegevens vandaan?</H2>
        <P>
          Meestal ontvangen we persoonsgegevens rechtstreeks van jou, bijvoorbeeld wanneer je:
        </P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>ons contactformulier invult;</LI>
          <LI>ons een e-mail stuurt;</LI>
          <LI>contact met ons opneemt via LinkedIn;</LI>
          <LI>deelneemt aan een gesprek of vergadering;</LI>
          <LI>een offerte aanvraagt of een overeenkomst aangaat.</LI>
        </ul>
        <P>
          In een zakelijke context kunnen we ook contactgegevens ontvangen van jouw werkgever,
          opdrachtgever, collega of een andere zakelijke contactpersoon.
        </P>
        <P>
          Daarnaast kunnen we beperkte zakelijke gegevens raadplegen die publiek beschikbaar
          zijn, bijvoorbeeld via bedrijfswebsites, professionele platformen zoals LinkedIn of
          openbare ondernemingsregisters.
        </P>

        <H2>4. Consultancyopdrachten en persoonsgegevens van klanten</H2>
        <P>
          Bij onze consultancyopdrachten op het gebied van onder andere GDPR, NIS2, ISO 27001 en
          CyberFundamentals kunnen we toegang krijgen tot informatie die persoonsgegevens bevat.
        </P>
        <P>
          Het kan bijvoorbeeld gaan om gegevens in beleidsdocumenten, registers, audit evidence,
          risicoanalyses, incidentinformatie of systemen waartoe een klant ons toegang geeft.
        </P>
        <P>Onze rol onder de GDPR hangt daarbij af van de concrete verwerking.</P>
        <P>
          Wanneer Millecam zelf het doel en de middelen van een verwerking bepaalt, treden we op
          als <strong className="font-medium text-ink">verwerkingsverantwoordelijke</strong>.
        </P>
        <P>
          Wanneer we persoonsgegevens uitsluitend verwerken namens en volgens de instructies van
          een klant, kunnen we optreden als{" "}
          <strong className="font-medium text-ink">verwerker</strong>. In dat geval wordt de
          verwerking geregeld door de toepasselijke overeenkomst en, waar vereist, een
          verwerkersovereenkomst. De klant blijft verantwoordelijk voor de informatie die hij als
          verwerkingsverantwoordelijke aan betrokkenen moet verstrekken.
        </P>
        <P>
          Dit publieke privacybeleid beschrijft voornamelijk de verwerkingen waarvoor Millecam
          zelf verwerkingsverantwoordelijke is.
        </P>

        <H2>5. Met wie delen we persoonsgegevens?</H2>
        <P>We verkopen of verhuren persoonsgegevens nooit.</P>
        <P>
          Om onze activiteiten uit te voeren maken we wel gebruik van gespecialiseerde
          dienstverleners. Afhankelijk van de verwerking kunnen persoonsgegevens worden verwerkt
          door onder andere:
        </P>
        <Provider name="Microsoft 365">
          We gebruiken Microsoft Outlook voor zakelijke e-mail, Microsoft Teams voor online
          communicatie en vergaderingen en OneDrive voor het opslaan en beheren van zakelijke
          documenten.
        </Provider>
        <Provider name="Dexxter">
          We gebruiken Dexxter voor onze financiële administratie, waaronder offertes,
          facturatie en boekhoudkundige verwerking.
        </Provider>
        <Provider name="De Ridder – Arijs Accountancy">
          Onze externe accountant kan toegang krijgen tot persoonsgegevens die noodzakelijk zijn
          voor boekhoudkundige, fiscale en administratieve dienstverlening.
        </Provider>
        <Provider name="Vercel">
          Onze website wordt gehost via Vercel. Bij het aanbieden en beveiligen van de website
          kunnen technische gegevens worden verwerkt.
        </Provider>
        <Provider name="Resend">
          Wanneer je het contactformulier op onze website gebruikt, wordt Resend gebruikt voor
          het technisch verzenden van het bericht naar Millecam.
        </Provider>
        <Provider name="OpenAI en Anthropic">
          Millecam maakt in zijn professionele werking gebruik van AI-ondersteunde diensten van
          OpenAI en Anthropic. Waar deze diensten worden gebruikt voor informatie die
          persoonsgegevens bevat, gebeurt dit binnen passende contractuele en technische
          waarborgen en met aandacht voor dataminimalisatie en vertrouwelijkheid.
        </Provider>
        <P>
          Daarnaast kunnen we gegevens verstrekken aan overheidsinstanties, toezichthouders of
          andere partijen wanneer dit wettelijk verplicht is.
        </P>

        <H2>6. AI binnen onze dienstverlening</H2>
        <P>
          Millecam gebruikt AI als ondersteunend hulpmiddel bij bepaalde professionele
          werkzaamheden.
        </P>
        <P>
          We hanteren daarbij het principe van{" "}
          <strong className="font-medium text-ink">dataminimalisatie</strong>: persoonsgegevens
          en vertrouwelijke klantinformatie worden alleen met een AI-dienst verwerkt wanneer dit
          passend en noodzakelijk is voor het beoogde doel en wanneer passende technische en
          contractuele waarborgen aanwezig zijn.
        </P>
        <P>
          AI wordt gebruikt als ondersteuning en vervangt niet zonder meer de professionele
          beoordeling die van Millecam mag worden verwacht.
        </P>

        <H2>7. Websiteanalyse</H2>
        <P>
          We gebruiken <strong className="font-medium text-ink">Vercel Web Analytics</strong> om
          inzicht te krijgen in het gebruik van onze website.
        </P>
        <P>
          Vercel Web Analytics werkt zonder cookies. De analyticsdienst is ontworpen om
          geaggregeerde gebruiksstatistieken te leveren zonder bezoekers over verschillende
          websites of dagen heen te volgen.
        </P>
        <P>Hiermee kunnen we bijvoorbeeld inzicht krijgen in:</P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>het aantal paginaweergaven;</LI>
          <LI>bezochte pagina&apos;s;</LI>
          <LI>verwijzende websites;</LI>
          <LI>land of regio;</LI>
          <LI>browser en besturingssysteem;</LI>
          <LI>apparaattype.</LI>
        </ul>
        <P>
          We gebruiken deze informatie uitsluitend om het gebruik en de prestaties van onze
          website te begrijpen en te verbeteren.
        </P>
        <P>
          Meer informatie over het gebruik van cookies en vergelijkbare technologieën vind je in
          ons afzonderlijke{" "}
          <a className={A} href="/cookiebeleid">
            cookiebeleid
          </a>
          .
        </P>

        <H2>8. Internationale doorgiften</H2>
        <P>
          Sommige dienstverleners waarmee we samenwerken zijn internationaal actief. Daardoor
          kunnen persoonsgegevens in bepaalde gevallen buiten de Europese Economische Ruimte
          (EER) worden verwerkt.
        </P>
        <P>
          Wanneer persoonsgegevens worden doorgegeven naar een land buiten de EER zorgen we
          ervoor dat hiervoor een geldige doorgiftegrond bestaat overeenkomstig de GDPR,
          bijvoorbeeld:
        </P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>een adequaatheidsbesluit van de Europese Commissie;</LI>
          <LI>Standard Contractual Clauses (SCC&apos;s) van de Europese Commissie; of</LI>
          <LI>een andere wettelijk erkende waarborg.</LI>
        </ul>
        <P>
          Waar nodig beoordelen we ook welke aanvullende maatregelen passend zijn voor de
          betreffende verwerking.
        </P>

        <H2>9. Hoe lang bewaren we persoonsgegevens?</H2>
        <P>
          We bewaren persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor ze
          werden verzameld, tenzij een langere bewaartermijn wettelijk vereist of gerechtvaardigd
          is.
        </P>
        <P>Als uitgangspunt hanteren we:</P>
        <Table
          headers={["Gegevens", "Bewaartermijn"]}
          rows={[
            [
              "Contactaanvragen die niet tot een samenwerking leiden",
              "Maximaal 2 jaar na het laatste relevante contact",
            ],
            [
              "Offertes die niet tot een opdracht leiden",
              "Maximaal 2 jaar na het laatste relevante contact, tenzij een langere termijn gerechtvaardigd is",
            ],
            [
              "Klant-, contract- en projectadministratie",
              "Gedurende de samenwerking en vervolgens zolang noodzakelijk voor contractuele of wettelijke verplichtingen en de verdediging van rechtsvorderingen",
            ],
            [
              "Facturen en boekhoudkundige documenten",
              "Gedurende de toepasselijke wettelijke bewaartermijn",
            ],
            [
              "Zakelijke e-mail en correspondentie",
              "Zolang noodzakelijk voor de zakelijke relatie, het dossier of toepasselijke wettelijke verplichtingen",
            ],
            [
              "Technische websitegegevens",
              "Niet langer dan noodzakelijk voor beveiliging, troubleshooting en technische werking",
            ],
          ]}
        />
        <P>
          Wanneer gegevens niet langer nodig zijn, worden ze verwijderd of geanonimiseerd waar
          dat redelijkerwijs mogelijk is.
        </P>

        <H2>10. Hoe beveiligen we persoonsgegevens?</H2>
        <P>
          We nemen passende technische en organisatorische maatregelen om persoonsgegevens te
          beschermen tegen ongeoorloofde toegang, verlies, wijziging, openbaarmaking of misbruik.
        </P>
        <P>
          De maatregelen worden afgestemd op de aard van de gegevens, de verwerking en de
          bijbehorende risico&apos;s.
        </P>
        <P>
          Daarbij passen we waar relevant principes toe zoals toegangsbeperking, sterke
          authenticatie, beveiligde communicatie, zorgvuldig leveranciersbeheer, dataminimalisatie
          en beveiligde opslag.
        </P>
        <P>Geen enkel informatiesysteem kan echter absolute veiligheid garanderen.</P>

        <H2>11. Geautomatiseerde besluitvorming en profilering</H2>
        <P>
          Millecam neemt geen beslissingen met juridische of vergelijkbare aanzienlijke gevolgen
          voor personen die uitsluitend gebaseerd zijn op geautomatiseerde verwerking zoals
          bedoeld in artikel 22 GDPR.
        </P>
        <P>
          We gebruiken persoonsgegevens evenmin voor advertentieprofilering of gedragsgerichte
          marketing.
        </P>

        <H2>12. Jouw rechten</H2>
        <P>
          Afhankelijk van de verwerking en de toepasselijke rechtsgrond heb je onder de GDPR
          onder andere het recht om:
        </P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>inzage te krijgen in jouw persoonsgegevens;</LI>
          <LI>onjuiste of onvolledige gegevens te laten verbeteren;</LI>
          <LI>
            jouw persoonsgegevens te laten verwijderen wanneer aan de wettelijke voorwaarden is
            voldaan;
          </LI>
          <LI>de verwerking te laten beperken;</LI>
          <LI>
            bezwaar te maken tegen bepaalde verwerkingen, waaronder verwerkingen gebaseerd op
            gerechtvaardigd belang;
          </LI>
          <LI>
            jouw toestemming op ieder moment in te trekken wanneer een verwerking op toestemming
            gebaseerd is;
          </LI>
          <LI>
            persoonsgegevens in bepaalde gevallen in een gestructureerde, gangbare en
            machineleesbare vorm te ontvangen of te laten overdragen;
          </LI>
          <LI>een klacht in te dienen bij een toezichthoudende autoriteit.</LI>
        </ul>
        <P>
          Deze rechten zijn niet absoluut. Bepaalde wettelijke verplichtingen of uitzonderingen
          kunnen ertoe leiden dat we een verzoek niet of slechts gedeeltelijk kunnen uitvoeren.
        </P>

        <H2>13. Hoe kan je jouw rechten uitoefenen?</H2>
        <P>Stuur je verzoek naar:</P>
        <P>
          <a className={A} href="mailto:privacy@millecam.be">
            privacy@millecam.be
          </a>
        </P>
        <P>
          Vermeld voldoende informatie zodat we kunnen bepalen op welke gegevens je verzoek
          betrekking heeft.
        </P>
        <P>
          Wanneer we redelijke twijfel hebben over je identiteit, kunnen we bijkomende informatie
          vragen om te voorkomen dat persoonsgegevens aan een onbevoegde persoon worden
          verstrekt.
        </P>
        <P>We behandelen verzoeken binnen de termijnen die de GDPR voorschrijft.</P>

        <H2>14. Klachten</H2>
        <P>
          Heb je vragen of bezorgdheden over hoe we jouw persoonsgegevens verwerken? Neem dan bij
          voorkeur eerst contact op via{" "}
          <a className={A} href="mailto:privacy@millecam.be">
            privacy@millecam.be
          </a>
          , zodat we je vraag kunnen onderzoeken.
        </P>
        <P>Je hebt daarnaast het recht om een klacht in te dienen bij:</P>
        <P>
          <strong className="font-medium text-ink">Gegevensbeschermingsautoriteit</strong>
          <br />
          Drukpersstraat 35
          <br />
          1000 Brussel
          <br />
          België
        </P>
        <P>
          <a className={A} href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noreferrer">
            www.gegevensbeschermingsautoriteit.be
          </a>
        </P>

        <H2>15. Wijzigingen aan dit privacybeleid</H2>
        <P>
          Onze diensten, systemen en wettelijke verplichtingen kunnen veranderen. Daarom kunnen we
          dit privacybeleid van tijd tot tijd aanpassen.
        </P>
        <P>
          De datum bovenaan deze pagina geeft aan wanneer het beleid voor het laatst werd
          bijgewerkt. Bij belangrijke wijzigingen zorgen we waar passend voor aanvullende
          communicatie.
        </P>
      </div>
    </Section>
  );
}
