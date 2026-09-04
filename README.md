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
  nis2-check/page.tsx            Interactieve NIS2-checker
  not-found.tsx          Eigen 404-pagina
  opengraph-image.png     Social-share-afbeelding (LinkedIn, etc.)
  api/contact/route.ts  Formulier-handler (Resend)
  icon.svg              Favicon (Next.js App Router-conventie)
components/
  Logo.tsx             Wordmark — vaste vector-paths, GEEN font-dependency (zie hieronder)
  Mark.tsx              "||"-merkteken alleen
  PillarGlyph.tsx        Los "||"-glyph voor bullets/accenten (klein, geen achtergrond)
  FrameworkList.tsx      NIS2/ISO 27001/CyFun/GDPR-rijtje — pijler-scheidingsteken i.p.v. "·"
  TornDivider.tsx        Gekartelde sectie-overgang (2x gebruikt, niet overal)
  HeroWatermark.tsx      Hero-achtergrondmerk met muis-parallax (client component)
  MaturityGauge.tsx      Illustratieve GAP-analyse-gauge + domeinbalkjes
  Nis2Checker.tsx        De interactieve checker zelf (client component)
  Nav.tsx / Footer.tsx / MobileMenu.tsx
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

## Mobiel, toegankelijkheid & een moderne laag

- **Mobiel navigatiemenu** (`MobileMenu.tsx`) — de header toonde op smartphone
  voorheen enkel het logo: geen links, geen CTA, geen hamburgermenu. Volledig
  functionele hamburger/kruis-toggle toegevoegd, met een `z-50` op het
  uitklappaneel (zonder die z-index lag het menu ONDER de paginatekst in
  plaats van erboven — check dit als je het paneel ooit herbouwt).
- **Focus-zichtbaarheid in het formulier** — velden hadden geen `appearance-none`,
  waardoor sommige browsers een eigen "native" focusring tekenen die auteurs-CSS
  negeert. Opgelost, met `focus:!outline-none` (met `!important`) omdat een
  gewone `outline-none` niet in elke browserconfiguratie sterk genoeg is om de
  ingebouwde focusbescherming te overschrijven — dat is bewuste browserbescherming
  tegen onzichtbare focus, dus omzeil dit nooit zonder een duidelijk alternatief
  (hier: de dikkere terracotta onderlijn).
- **Rastergat opgelost** — vijf diensten in drie kolommen liet een lege plek open
  op de tweede rij; nu twee kolommen (2-2-1) i.p.v. drie (3-2).
- **Aanpak-pagina consistent gemaakt** met de rest van de site (linker
  accentstreep + genummerde cirkel), was nog in de oude kale stijl blijven staan.
- **Eerste (te voorzichtige) moderniseringspass** — hero-watermerk, een
  eenmalige intro-animatie, en hover-polish op knoppen/links. Achteraf
  ingeschat als veilige, oppervlakkige polish die het "statische" gevoel niet
  echt wegnam — de onderliggende structuur (rechte kleurbanden, alles even
  symmetrisch) bleef ongemoeid. Zie de uitgebreidere pass hieronder.

## Een echte moderniseringspass (structuur, niet enkel polish)

Na een tussentijdse reflectie (was de eerste pass echt het beste wat kon?)
vijf structurele toevoegingen, elk gekozen omdat het iets **specifieks aan
Millecam** oplost, niet omdat het "een animatie" is:

- **`Nis2Checker.tsx`** (`/nis2-check`) — een echte interactieve tool (3 vragen,
  een verdict, een CTA naar een GAP-analyse), geen tekst die enkel gelezen
  wordt. Het enige element dat de site iets laat *doen* i.p.v. laten lezen.
  Uitkomst is expliciet een indicatie, geen juridisch sluitend antwoord —
  bewaar die disclaimer als je de vragen/logica ooit uitbreidt.
- **`TornDivider.tsx`** — een gekartelde "afgescheurde ledger-pagina"-rand
  tussen twee secties, in plaats van een harde kleurblok-snede. Gebruikt op
  precies twee plekken (na de hero, na de donkere sectie) — bewust niet
  overal, anders wordt het zelf weer een sjabloon-tic.
- **`HeroWatermark.tsx`** — het bestaande pijler-watermerk in de hero
  beweegt nu subtiel mee met de muis (`prefers-reduced-motion` gerespecteerd).
  Eén interactieve laag op het ene element dat we al als "bold choice" hadden
  gekozen, geen nieuwe decoratie.
- **`MaturityGauge.tsx`** — een halfronde meter + domeinbalkjes die toont wat
  een GAP-analyse oplevert, i.p.v. het enkel te beschrijven. Illustratief/
  statisch, expliciet gelabeld als voorbeeld (geen live data).
- **Tijdlijn i.p.v. drie losse blokken** — "Hoe een traject verloopt" heeft nu
  een echte verbindingslijn: horizontaal op de homepage-teaser, verticaal
  doorlopend op de volledige Aanpak-pagina (`flex flex-col` + `flex-1` tussen
  de cirkels, past zich automatisch aan ongeacht tekstlengte per stap).

Bewust géén zesde/zevende toevoeging meer — vijf structurele elementen is al
veel voor één pagina; nog meer zou opnieuw de "spend your boldness in one
place"-regel schenden.

## Nog een ronde: illustraties, diepte, paginaovergangen

Op vraag om het "fancier" te maken (zonder terug te vallen in generieke
SaaS-clichés):

- **`components/illustrations/`** — drie custom, geometrische illustraties
  voor de Aanpak-stappen (assessment-matrix, oplopende balkjes, pijler-brug),
  opgebouwd uit dezelfde vlakke vormentaal als de maturity-gauge en het
  pijler-glyph. Bewust geen stockiconen (vergrootglas, tandwiel, handdruk) —
  dat zou meteen weer generiek ogen.
- **Zwevende diepte** — een zachte, warm-getinte schaduw
  (`shadow-[0_14px_34px_rgba(33,29,24,0.09)]`) toegevoegd aan ServiceCard,
  het credentials-blok, de NIS2-check-resultaatkaart en de Aanpak-panelen, en
  een iets zwaardere variant op de gauge-kaart. Blijft een statische
  eigenschap (geen hover-triggered lift op niet-klikbare kaarten) — dat zou
  opnieuw het "hover-effect op elke kaart"-patroon zijn dat de skill afraadt.
- **Paginaovergangen** (`app/template.tsx`) — Next.js remount't dit bestand
  bij elke navigatie (in tegenstelling tot `layout.tsx`, dat blijft staan),
  dus Nav/Footer flikkeren nooit mee; enkel de paginainhoud zelf vervaagt/rijst
  in (0,35s, `prefers-reduced-motion` gerespecteerd).
- Illustraties zijn verborgen op mobiel (`hidden sm:block`) — op een smalle
  viewport voegen ze weinig toe naast de tekst en nemen ze kostbare ruimte in.

## Van "tonen" naar "bedienen": interactieve laag

Op de vraag om het nog innovatiever/interactiever te maken — bewust gekozen
voor dingen die de bezoeker zelf **bedient**, niet enkel een mooiere versie
van hetzelfde plaatje:

- **`SelfAssessment.tsx`** — de statische `MaturityGauge` (nog steeds
  beschikbaar als component, maar niet meer gebruikt op de homepage) werd een
  echte mini-zelfassessment: klik de balkjes per domein aan, de meter en het
  gemiddelde updaten live. `BarRating` is een bewust bespoke rating-control
  (vijf oplopende balkjes, dezelfde vormentaal als de illustraties en
  domeinbalkjes) in plaats van een generieke `<input type="range">`.
- **`ScrollTimeline.tsx`** (homepage, horizontaal) en
  **`ScrollTimelineVertical.tsx`** (Aanpak-pagina, verticaal) — de
  verbindingslijn en stappen verschijnen pas zodra de sectie in beeld komt
  (`IntersectionObserver`, eenmalig, niet herhaald bij terugscrollen). Let op
  bij het doorgeven van de stappen-data vanuit een server component: de
  illustraties moeten al gerenderd zijn (`illustratie: <IllustrationGap ... />`
  als JSX-element) vóór ze als prop naar een client component gaan — een
  component-**referentie** (`Illustratie: IllustrationGap`) kan niet over de
  server/client-grens, dat gaf een build error.
- **`Nis2Checker.tsx`** uitgebreid met een gepersonaliseerd "Mogelijk traject"
  per verdict: drie tot twee fases met periode + activiteit, gebaseerd op het
  antwoordpatroon. Verbindt de checker en het aanpak-concept tot één
  outputmoment in plaats van twee losse onderdelen.
- **`HeroWatermark.tsx`** ging van 2D-verschuiving naar echte 3D-tilt
  (`perspective` + `rotateX`/`rotateY` op basis van cursorpositie) — subtiel
  (8% dekking), maar met echte diepte i.p.v. een platte verschuiving.

## De hero herzien: van "netjes" naar een echt eerste-indruk-moment

Na feedback dat de site ondanks alle voorgaande toevoegingen nog te "netjes
overal even veel" aanvoelde — geen "wow"-moment — bleek het probleem niet een
ontbrekend effect, maar dat elke sectie ongeveer evenveel visueel gewicht
had. Screenshots van de **live** site (niet mijn lokale Georgia-render)
bevestigden dat alles correct rendert; het was een compositie-probleem, geen
bug. Aanpak, bewust nog steeds zonder kleur/glas/gradients toe te voegen —
enkel schaal, materiaal en aanwezigheid:

- **Hero op (bijna) volledige schermhoogte** (`md:min-h-[88vh]`), koptekst
  fors groter (`lg:text-[5.5rem]` i.p.v. `text-5xl`).
- **`SelfAssessment` verhuisd ín de hero** — als zwevende witte kaart met
  duidelijke schaduw naast de tekst, in tweekoloms layout. De losse
  "Probeer het zelf"-sectie verderop op de pagina is dus weg (was anders
  dubbel) — dit ís nu die sectie, alleen bovenaan i.p.v. na twee keer
  scrollen.
- **`HeroWatermark` drastisch opgeschaald**: van `22rem × 16rem` in een
  hoek naar `78vh × 56vh`, gecentreerd en rechts uitlopend buiten beeld
  (`justify-end` + negatieve marge). Dekking bewust nog steeds laag (7%) en
  de tilt-hoek verkleind (van 20°/14° naar 10°/7°) — op deze schaal zou de
  oorspronkelijke hoek te veel bewegen.

Dit is bewust de "flashy uitzondering, enkel in de hero"-route: de rest van
de site (Diensten, Aanpak, FAQ, ...) bleef ongemoeid. Als een volgende ronde
feedback vraagt om diezelfde schaal/aanwezigheid ook elders door te trekken,
weeg dat dan bewust af tegen "spend your boldness in one place" — dat
principe is precies waarom de rest van de site nu weer rustig oogt naast een
prominente hero, in plaats van dat alles even hard roept.

## Twee bugs uit live screenshots, direct na de hero-herziening

- **Verbindingslijn liep door de teksten** (`ScrollTimeline.tsx`) — cirkel en
  titel stonden inline naast elkaar op dezelfde hoogte, dus een doorlopende
  horizontale lijn kruiste onvermijdelijk door de middelste kolom heen
  (cirkel én tekst). Fix: titel staat nu onder de cirkel (`mt-4`) i.p.v.
  ernaast, zodat de lijnhoogte (`top-5`) altijd boven alle tekst blijft,
  ongeacht kolombreedte of tekstlengte. Zelfde patroon geldt niet voor
  `ScrollTimelineVertical.tsx` (Aanpak-pagina) — die lijn loopt verticaal
  tussen de cirkels, niet door tekst heen.
- **Te veel witruimte tussen "Hoe een traject verloopt" en de slot-CTA** —
  het waren twee aparte `<Section>`-componenten met dezelfde (`bg-white`)
  achtergrond, dus twee keer `py-20` (Section's default) stapelde op boven
  de CTA's eigen `pt-14`. Samengevoegd tot één Section; alleen wanneer twee
  opeenvolgende secties een *verschillende* achtergrondkleur hebben (bv.
  Diensten- en Aanpak-pagina's slot-CTA, na een `dark`- of standaardsectie)
  is die dubbele padding wél bedoeld — de kleurwissel rechtvaardigt de
  langere adempauze. Check dit bij nieuwe secties: twee opeenvolgende
  `<Section>`s met identieke achtergrond is bijna nooit wat je wil.

## Formuliervalidatie (contactformulier)

- **E-mailveld valideert nu echt** — daarvoor was `type="email"` wel gezet,
  maar dat gaf enkel de kale, Engelstalige browser-popup (`Please include an
  '@'...`), niet gestileerd, niet in het Nederlands. `noValidate` op de
  `<form>` schakelt die native validatie uit; alle velden (naam, e-mail,
  bericht) worden nu volledig zelf gecontroleerd, met een foutmelding in de
  merkkleur (`text-status-kritiek`) direct onder het veld.
- **Ook server-side gecontroleerd** in `app/api/contact/route.ts` — client-side
  validatie is altijd te omzeilen (JS uit, of een directe POST-aanvraag), dus
  de API-route weigert een ongeldig e-mailadres zelf ook, met status 400.
  Zelfde eenvoudige regex aan beide kanten (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) —
  bewust geen volledige RFC 5322-implementatie, dat wijst vaker geldige
  adressen af dan dat het iets wint.
- Als je later nog een veld met specifiek formaat toevoegt (bv. een
  BTW-nummer-veld), volg hetzelfde patroon: valideer aan beide kanten, nooit
  enkel client-side.

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

## Framework-glyphs: NIS2, ISO 27001, CyFun, GDPR

De frameworkkaarten op `/diensten` ("Waarin Millecam gespecialiseerd is")
waren tot nu toe de enige kaarten op de site zonder de "zwevende diepte"-
behandeling (zachte vulling + schaduw) die ServiceCard, het credentials-blok
en de NIS2-check-resultaatkaart al wél hadden — nu rechtgetrokken.

Elk framework kreeg daarnaast een eigen klein glyph
(`components/illustrations/IllustrationNis2|Iso27001|Cyfun|Gdpr.tsx`), in
dezelfde vlakke vormentaal als de bestaande illustraties (rechthoeken,
cirkels, bogen — geen stockiconen):

- **NIS2** — een hub-and-spoke netwerkje: de gereguleerde entiteit als
  middelste knoop, verbonden naar buiten. Letterlijk een netwerk, wat NIS2
  ook regelt (Network and Information Systems).
- **ISO 27001** — een zeshoekig zegel met een lint erover: een
  certificerings-/normmarkering, geometrisch in plaats van een medaille- of
  vinkje-icoon.
- **CyFun** — drie gestapelde, verbredende balken: de drie
  assurance-niveaus (Basic/Important/Essential) als letterlijke
  niveaustructuur. Horizontaal gestapeld (i.p.v. verticaal zoals
  `IllustrationBuild`) om visueel onderscheiden te blijven.
- **GDPR/AVG** — een hangslot, opgebouwd uit dezelfde boog- en
  rechthoek-primitieven als `IllustrationSupport`. Het enige framework waar
  een slot de eerlijke, ondubbelzinnige lezing is (gegevensbescherming),
  dus bewust wél een herkenbaar slot in plaats van een abstracter
  alternatief.

Bewust alleen toegepast op de Diensten-pagina, niet ook in `FrameworkList`
(hero/footer) — dat blijft compacte chrome, geen ruimte voor illustraties
zonder het "spend your boldness in one place"-principe te schenden.

**Bewust geen officiële logo's van ISO, CCB/CyFun of een "GDPR-compliant"-
badge** — geopperd, maar afgewezen. Het ISO-logo en CyFun-label zijn
beschermde merken die enkel getoond mogen worden na een échte, geaccrediteerde
certificering; NIS2 (een richtlijn) en GDPR hebben sowieso geen officieel
logo om te tonen. Voor een GRC-/DPO-adviesbureau zou het suggereren van een
certificering die er niet is, precies het risico blootleggen dat klanten net
willen vermijden. De custom glyphs hierboven zijn de geoorloofde vervanger:
herkenbaar zonder een merk te claimen.

**Opvolgende ronde — groter, meer kleur, scroll-reveal:** de glyphs bleken
met `h-10 w-10` klein en met enkel ink+terracotta vrij mono-kleurig. Nu
`h-14 w-14`, en de ink-accenten (`#211D18`) vervangen door terracotta-light
(`#D97A52`) zodat elk glyph binnen dezelfde terracotta-familie meer
kleurvariatie krijgt — geen nieuwe kleur toegevoegd aan het palet, enkel een
extra tint ervan (CyFun's lichtste balk kreeg om diezelfde reden een pale
terracotta-tint, `#E9C6AC`, in plaats van het neutrale `#DCD3BF`).
`components/FrameworkGrid.tsx` (client component) voegt een scroll-reveal
toe — exact hetzelfde eenmalige `IntersectionObserver`-patroon als
`ScrollTimeline.tsx`, nu ook op deze sectie toegepast in plaats van dat de
kaarten enkel statisch aanwezig zijn zodra je scrollt.

## Scroll-reveal op elke sectie, niet enkel de tijdlijn

Alle secties buiten de hero waren tot nu toe statisch aanwezig zodra je
ernaartoe scrolde — enkel `ScrollTimeline`/`ScrollTimelineVertical` en
`FrameworkGrid` beloonden het scrollen met beweging. Twee nieuwe, generieke
componenten passen hetzelfde eenmalige `IntersectionObserver`-patroon nu
overal toe, zonder de bestaande drie te herschrijven:

- **`Reveal.tsx`** — één blok (een CTA, het credentials-blok, een
  paragraaf) dat in zijn geheel in-fade't zodra het in beeld komt.
- **`RevealGroup.tsx`** — de gestaggerde variant voor een grid of lijst.
  `as`/`itemAs` laten toe de container/items als `div` of als `ul`/`li` te
  renderen, zodat een `<ul><li>`-lijst (bv. "Wat je van Millecam mag
  verwachten") dit kan gebruiken zonder een niet-semantische wrapper die
  de markup breekt.

Toegepast op: Home (Probleemherkenning-grid, Diensten-teaser-grid, "Een
specialist, geen callcenter"-lijst, slot-CTA), Diensten (dienstenkaarten-
grid, slot-CTA), Aanpak ("Wat je mag verwachten"-lijst, slot-CTA), Over
(introtekst, credentials-blok). Bewust **niet** toegepast op FAQ, Contact
of NIS2-check — die pagina's zijn al interactief (accordion, formulier,
checker) en hebben dat "iets gebeurt bij scrollen"-probleem niet.

Let op bij het testen: een screenshot-tool met een vaste (ook al is ze
groot) viewporthoogte triggert de `IntersectionObserver` niet voor content
die daarbuiten valt — enkel een écht scrollende headless-browser (of een
menselijke bezoeker) doet dat betrouwbaar.

## "Glazen" credential-badges in de hero

Naar het voorbeeld van review-badges op andere sites (blur + transparantie
over een foto), maar aangepast aan twee dingen die Millecam niet heeft:
geen hero-foto om overheen te leggen, en geen rounded-full-vormentaal
(Button, ServiceCard, alles op de site is hoekig — bewust, zie de
designprincipes hierboven). De badges nemen dus enkel het glas-*materiaal*
over (`bg-white/40 backdrop-blur-md border border-white/70`), niet de
ronde vorm.

Twee badges, beide échte, verifieerbare feiten — geen verzonnen cijfers:
- **"Erkend Data Protection Officer"** — linkt naar `/over`, waar de DPI-
  certificering wordt toegelicht.
- **"KBO BE 1026.876.048"** — linkt naar de officiële KBO-pagina, zoals de
  footer dat al deed.

Ingevoegd tussen `FrameworkList` en de CTA-knop in de hero, met dezelfde
`animate-hero-in`-sequentie (de knop schoof een stap op naar 0.4s).

## Een duotone portret van Robin op de Over-pagina

Eerste échte foto op de site — bewust met terughoudendheid gekozen. Geen
stockfoto's (die zouden precies het generieke "SaaS met stockbeelden"-gevoel
oproepen dat de rest van de site vermijdt), en geen willekeurige
bedrijfsfoto's. Wel een portret van Robin zelf: dat onderbouwt letterlijk de
kernpositionering ("één vast aanspreekpunt, geen callcenter, rechtstreeks
contact met de persoon die het werk doet") beter dan tekst alleen kan.

- **Bron**: `Foto Robin.png` uit de `millecam-ai`-repo (de vorige, volledig
  vervangen merkidentiteit — zie "Wat volledig vervangen is" verderop). Enkel
  de foto zelf is herbruikt, niet de rest van die repo: logo's, social-media-
  assets en het "workflow-pattern"-netwerkmotief horen bij de oude
  teal/donkere AI-automatiseringsstijl en botsen met de huidige Ledger-kleuren
  — bewust niet meegenomen.
- **Duotone-behandeling** (`public/images/robin.jpg`): grijswaarden gemaakt,
  dan gekleurd van ink (`#211D18`, schaduwen) naar terracotta-light
  (`#D97A52`, lichten) — dezelfde twee kleuren die de rest van de site al
  gebruikt, dus geen nieuwe kleur toegevoegd. Twee andere varianten
  (ink→paper, ink→volle terracotta) zijn overwogen: die eerste oogde als
  gewoon zwart-wit (geen band met de huisstijl), de tweede te donker/muf om
  details te onderscheiden.
- **Plaatsing** (`app/over/page.tsx`): tweekoloms grid naast de introtekst,
  zelfde `[1.3fr_0.9fr]`-verhouding als de hero. Het portret zit in een wit
  "kader" (`bg-white p-3` + dezelfde zwevende schaduw als elders) — hetzelfde
  "foto op papier gemonteerd"-motief in plaats van een randloze, bleedende
  foto. Op mobiel staat de foto vóór de tekst (`order-1`/`order-2`), zodat het
  gezicht meteen zichtbaar is in plaats van pas na een lange tekstblok.

## Iets rijker kleurgebruik op enkele puur ink/paper-secties

Eerste poging was te subtiel om zonder inzoomen te zien (een klein
PillarGlyph-accent, een kolomscheiding op 30% dekking) — teruggedraaid en
opnieuw met meer gewicht:

- **Kernwoord in terracotta binnen de intro-titel** op Diensten
  ("GAP-analyse") en Aanpak ("Millecam") — dezelfde behandeling als de
  hero's kop, nu als klein accent i.p.v. de volledige titel.
- **PillarGlyph-accent** (`h-6 w-5`, vol terracotta) boven diezelfde
  intro-titels, net als op de Over-pagina/CTA-secties.
- **Kolomscheiding op de homepage** ("Probleemherkenning"): van neutraal
  `divide-line` naar `divide-x-2 divide-terracotta-light` — duidelijk
  zichtbaar in plaats van een dun grijs lijntje.

**Bewust niet gebruikt: de status-kleuren** (`status-conform`/`aandacht`/
`kritiek`). Die zijn specifiek bedoeld om compliance-status weer te geven
(zie `StatusBadge.tsx`) — als decoratie in gewone marketingsecties zou dat
hun betekenis verwateren en verwarrend worden zodra ze ooit in een echte
assessment-context gebruikt worden.

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
- [x] Telefoonnummer en LinkedIn-links ingevuld (Contact-pagina, Footer, JSON-LD)
- [ ] Privacybeleid en cookiebeleid laten nalezen/afvinken (bewaartermijn, verwerkersclausule Resend)
- [ ] `RESEND_API_KEY` instellen in Vercel-projectinstellingen
- [ ] BTW-nummer al verwerkt — enkel nog checken of adresgegevens correct/actueel blijven
- [x] Open Graph-afbeelding toegevoegd (`app/opengraph-image.png` bestaat al)
- [x] Gecontroleerd op `[in te vullen]`-placeholders — geen gevonden

## Niet meegenomen in dit skelet

- Meertaligheid (NL/EN/FR) — de oude repo had dit al opgezet, maar de copy in
  dit skelet is enkel Nederlandstalig. Toevoegen zodra de EN/FR-vertalingen
  van de vijf pagina's klaar zijn (zie Sitemap & pagina-copy-document).
- Cases/referenties-pagina — bewust nog niet gebouwd, zie Sitemap-document.
