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
  privacybeleid/page.tsx  Privacybeleid
  cookiebeleid/page.tsx    Cookiebeleid
  api/contact/route.ts  Formulier-handler (Resend)
  icon.svg              Favicon (Next.js App Router-conventie)
components/
  Logo.tsx             Wordmark — vaste vector-paths, GEEN font-dependency (zie hieronder)
  Mark.tsx              "||"-merkteken alleen
  Nav.tsx / Footer.tsx
  CookieBanner.tsx       Melding (geen consent-gate — zie toelichting hieronder)
  Button.tsx / Section.tsx / Container.tsx / Eyebrow.tsx
  ServiceCard.tsx / StatCard.tsx / StatusBadge.tsx
  ContactForm.tsx        Client component, post't naar /api/contact
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
- [ ] BTW-nummer/adresgegevens op de website checken indien wettelijk vereist
- [ ] Open Graph-afbeelding toevoegen (`app/opengraph-image.png` of vergelijkbaar)
- [ ] Echte inhoud i.p.v. `[in te vullen]`-placeholders doorzoeken vóór livegang

## Niet meegenomen in dit skelet

- Meertaligheid (NL/EN/FR) — de oude repo had dit al opgezet, maar de copy in
  dit skelet is enkel Nederlandstalig. Toevoegen zodra de EN/FR-vertalingen
  van de vijf pagina's klaar zijn (zie Sitemap & pagina-copy-document).
- Cases/referenties-pagina — bewust nog niet gebouwd, zie Sitemap-document.
