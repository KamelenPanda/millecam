# Millecam — website

Next.js 14 (App Router) + TypeScript + Tailwind. Ledger-huisstijl (Ink `#211D18`,
Paper `#F2EDE1`, Terracotta `#B2532E`) — zie de twee Brand Guidelines-documenten
voor de volledige specificatie.

## Snel starten

```bash
npm install
cp .env.example .env.local   # vul RESEND_API_KEY in voor het contactformulier
npm run dev
```

Site draait op `http://localhost:3000`.

## Structuur

```
app/
  layout.tsx          Root layout: fonts (Source Serif 4 + Inter), Nav, Footer
  page.tsx             Home
  diensten/page.tsx    Diensten
  aanpak/page.tsx       Aanpak
  over/page.tsx         Over
  contact/page.tsx      Contact (formulier)
  privacybeleid/page.tsx        Privacybeleid
  cookiebeleid/page.tsx          Cookiebeleid
  algemene-voorwaarden/page.tsx  Algemene voorwaarden
  veelgestelde-vragen/page.tsx   FAQ (native <details>/<summary>, geen JS-accordion)
  not-found.tsx          Eigen 404-pagina
  opengraph-image.png     Social-share-afbeelding (LinkedIn, etc.)
  api/contact/route.ts  Formulier-handler (Resend)
  icon.svg              Favicon (Next.js App Router-conventie)
components/
  Logo.tsx             Wordmark — vaste vector-paths, GEEN font-dependency (zie hieronder)
  Mark.tsx              "||"-merkteken alleen
  FrameworkList.tsx      NIS2/ISO 27001/CyFun/GDPR-rijtje — pijler-scheidingsteken i.p.v. "·"
  Nav.tsx / Footer.tsx
  CookieBanner.tsx       Melding (geen consent-gate — zie toelichting hieronder)
  Button.tsx / Section.tsx / Container.tsx
  ServiceCard.tsx / StatCard.tsx / StatusBadge.tsx
  ContactForm.tsx        Client component, onderlijnde "ledger"-velden, post't naar /api/contact
public/
  logo.svg / logo-inverse.svg     Losse SVG-bestanden (social previews, e-mail, enz.)
  mark-light.svg / mark-dark.svg  "||"-merkteken los
```

## Belangrijk: het logo NIET aanraken met een font

`components/Logo.tsx` bevat de wordmark als vaste `<path>`-data (uitgelijnde
contouren van Source Serif 4), niet als `<text>` met een `font-family`. Dat is
bewust: elke renderer (browser, Figma, een andere developer z'n machine) vult
een font-naam anders in als het font niet lokaal geïnstalleerd staat, en dat
verschoof eerder de afstand tussen "mi", de twee pijlers, en "ecam" zichtbaar.
Met vaste paths ziet het logo er altijd exact hetzelfde uit, overal.

**Gebruik dus altijd `<Logo />` of `<Mark />`, en herschrijf ze nooit terug naar
tekst + een lettertype.** Wil je een derde kleurvariant, voeg die toe als een
nieuwe waarde voor de `variant`-prop, niet als losse tekstcomponent.

## Privacybeleid, cookiebeleid & cookiemelding

- `/privacybeleid` — volledige AVG-tekst: verwerkingsverantwoordelijke (Robin Millecam,
  Sinte Annalaan 34, 9300 Aalst), verwerkte gegevens, rechtsgrond, verwerkers
  (Resend, Vercel), bewaartermijn, alle AVG-rechten, klachtprocedure bij de GBA.
- `/cookiebeleid` — legt uit dat de site geen trackingcookies gebruikt; Vercel
  Analytics is cookieless en verwerkt geen persoonsgegevens, dus geen
  toestemming nodig onder de ePrivacy-richtlijn.
- `CookieBanner.tsx` toont daarom een **melding**, geen Accept/Reject-keuze —
  er is niets niet-noodzakelijks om toestemming voor te vragen. Voeg je later
  wél trackingcookies toe (marketingpixel, volledige Google Analytics, ...),
  bouw dit dan om tot een echte consent-gate vóór die scripts geladen worden,
  en werk `/cookiebeleid` bij.
- Beide beleidsteksten zijn een **werkdocument, geen juridisch sluitend
  advies** — gezien je eigen DPO-achtergrond de aangewezen persoon om ze
  definitief te checken, met name de bewaartermijn en de verwerkersclausules.

## Algemene voorwaarden

`/algemene-voorwaarden` dekt de standaardclausules voor een B2B-adviesbureau:
totstandkoming, prijs/betaling, aansprakelijkheidsbeperking, IE, vertrouwelijkheid,
opzegtermijn, toepasselijk recht. Ook dit is een **werkdocument** — met name de
aansprakelijkheidsbeperking (punt 6) heeft in België specifieke geldigheidsvereisten;
laat dit door een jurist checken voor je opdrachten via deze voorwaarden factureert.

## Designprincipes — waarom dit er niet "gevibe-code" uitziet

Een paar bewuste keuzes om weg te blijven van herkenbare AI-gegenereerde
default-patronen:
- **Geen "eyebrow"-labels** (ALL-CAPS tracked label boven elke titel) — die
  voegden geen informatie toe, enkel decoratie.
- **Geen "A · B · C"-middelpunt-rijtjes** — `FrameworkList.tsx` gebruikt een
  dun verticaal streepje, een verwijzing naar de pijlers in de wordmark zelf,
  in plaats van een generieke scheiding.
- **Geen "→" achter link-tekst.**
- **Formuliervelden zijn onderlijnd, geen boxen** — het berichtveld heeft
  zelfs een subtiele gelinieerde achtergrond, een echo van een papieren
  ledger in plaats van een standaard `<textarea>`.
- Genummerde stappen (1/2/3) staan er wél nog — maar alleen waar de inhoud
  ook echt een volgorde is (het GAP-analyse → implementatie → ondersteuning-
  traject), niet als decoratie.
- **Geen "elk blok een omkaderd vakje"** — service- en frameworkkaarten, het
  credentials-blok en CTA-secties gebruiken een linker accentstreep met een
  zacht getinte vulling (`#FBF9F4`) in plaats van een volledige rand. CTA's
  sluiten een sectie af met een lijn erboven, niet met een zwevend kader.
  Herhaling van hetzelfde "vakje" voor elk soort content is zelf ook een
  herkenbaar sjabloonpatroon, ook zonder afgeronde hoeken of schaduw.
- **Het pijler-motief (`PillarGlyph.tsx`) keert bewust terug** op plekken waar
  toch al een opsommingsteken, scheidingslijn of accent nodig was: als bullet
  in lijsten (Aanpak, Privacybeleid), als opener boven elke CTA-sectie, als
  quote-marker op de Over-pagina, en als kleine signatuur boven "404". Nooit
  toegevoegd als pure decoratie op een plek die niets nodig had.

Blijf hier waakzaam voor bij toekomstige uitbreidingen: het is makkelijk om
onbewust weer in een eyebrow of een middelpunt-rijtje te vervallen.

## Body & professionaliteit toegevoegd

- **BTW-nummer** (BE 1026.876.048) in footer, privacybeleid en algemene voorwaarden —
  wettelijk verplicht zichtbaar op een Belgische bedrijfswebsite. Klikbaar naar de
  geverifieerde KBO-pagina van de onderneming zelf.
- **Structured data (JSON-LD)** in `app/layout.tsx` — `ProfessionalService`-schema
  met naam, adres, vatID, oprichter. Enkel bevestigde velden; telefoon/LinkedIn
  bewust weggelaten tot ze echt ingevuld zijn (een placeholder in structured data
  wordt letterlijk genomen door zoekmachines).
- **Open Graph-afbeelding** (`opengraph-image.png`) — hoe de site oogt wanneer
  gedeeld op LinkedIn; zonder dit bestand toont zo'n link niets.
- **Eigen 404-pagina** (`not-found.tsx`) in plaats van de kale Next.js-standaard.
- **Credentials-blok** op de Over-pagina — enkel de bevestigde DPO-erkenning,
  bewust geen certificeringen vermeld die nog niet gestart zijn.
- **FAQ-pagina** (`/veelgestelde-vragen`) — acht inhoudelijke vragen, gebouwd met
  het native `<details>/<summary>`-element in plaats van een JS-accordion:
  toegankelijk by default, geen extra dependency.

## Wat is hergebruikt uit `millecam-ai`

- Next.js/Tailwind/TypeScript-basisconfiguratie
- Resend-integratie voor het contactformulier
- Security headers (`next.config.js`) en `security.txt`

## Wat volledig vervangen is

- Design: donker/teal → Ledger (ivoor/inkt/terracotta)
- Copy: AI-automatisering → GRC-adviesbureau-positionering
- `Sectors.tsx` en alle automatisering-content: verwijderd
- Logo: vervangen door de contourlijn-wordmark

## Nog te doen voor launch

- [ ] Domeinkoppeling: `millecam.be` (overname van vorige eigenaar) als primair,
      `millecam.eu` als redirect, `millecam.ai` voorlopig redirecten naar `.be`
- [ ] Telefoonnummer en LinkedIn-link invullen (Contact-pagina, Footer)
- [ ] Privacybeleid en cookiebeleid laten nalezen/afvinken (bewaartermijn, verwerkersclausule Resend)
- [ ] `RESEND_API_KEY` instellen in Vercel-projectinstellingen
- [ ] BTW-nummer al verwerkt — enkel nog checken of adresgegevens correct/actueel blijven
- [ ] Open Graph-afbeelding toevoegen (`app/opengraph-image.png` of vergelijkbaar)
- [ ] Echte inhoud i.p.v. `[in te vullen]`-placeholders doorzoeken vóór livegang

## Niet meegenomen in dit skelet

- Meertaligheid (NL/EN/FR) — de oude repo had dit al opgezet, maar de copy in
  dit skelet is enkel Nederlandstalig. Toevoegen zodra de EN/FR-vertalingen
  van de vijf pagina's klaar zijn (zie Sitemap & pagina-copy-document).
- Cases/referenties-pagina — bewust nog niet gebouwd, zie Sitemap-document.
