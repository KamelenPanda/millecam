export type NavDict = {
  links: { href: string; label: string }[];
  /** Heading above the framework dropdown/mobile section. */
  frameworksHeading: string;
  /** Labels for NIS2, ISO 27001, CyFun and GDPR/RGPD, in that fixed order. */
  frameworks: string[];
  /** Heading above the services dropdown/mobile section. */
  servicesHeading: string;
  /** Labels for GAP analysis, implementation track, DPO-as-a-Service,
   * tabletop exercises and fractional GRC, in that fixed order. */
  services: string[];
  cta: string;
  homeAriaLabel: string;
  menuOpen: string;
  menuClose: string;
};

export type FooterDict = {
  servicesHeading: string;
  frameworks: string[];
  faqLink: string;
  nis2CheckLink: string;
  contactHeading: string;
  rights: string;
  linkedinPerson: string;
  linkedinCompany: string;
  privacy: string;
  cookies: string;
  terms: string;
  vatLabel: string;
};

export type CookieBannerDict = {
  title: string;
  body: string;
  accept: string;
  moreInfo: string;
};

export type ContactFormDict = {
  subjects: string[];
  /** Shown once near the top of the form to explain what the `*` on required fields means. */
  requiredHint: string;
  labels: {
    name: string;
    company: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  };
  validation: {
    name: string;
    email: string;
    message: string;
    privacy: string;
  };
  privacy: {
    text: string;
    linkLabel: string;
    href: string;
  };
  submit: string;
  sending: string;
  sentTitle: string;
  sentSub: string;
  error: string;
};

export type Nis2Verdict = {
  titel: string;
  tekst: string;
  tijdlijn: { periode: string; activiteit: string }[];
};

export type Nis2CheckerDict = {
  sectoren: string[];
  groottes: string[];
  aantoonbaarheid: string[];
  vragen: string[];
  /** Template with {step} and {total} placeholders, e.g. "Question {step} of {total}" */
  questionOf: string;
  previous: string;
  possiblePath: string;
  disclaimer: string;
  ctaPrimary: string;
  restart: string;
  verdicts: {
    inSectorAndGroot: Nis2Verdict;
    inSectorNotGroot: Nis2Verdict;
    notInSectorButAsked: Nis2Verdict;
    fallback: Nis2Verdict;
  };
};

export type SelfAssessmentDict = {
  domains: string[];
  averageLabel: string;
  helper: string;
};

export type FrameworkVerdictText = { titel: string; tekst: string };

export type FrameworkCheckerDict = {
  sectoren: string[];
  groottes: string[];
  jaNeeNietZeker: string[];
  vragen: string[];
  /** Template with {step} and {total} placeholders. */
  questionOf: string;
  previous: string;
  resultTitle: string;
  resultIntro: string;
  ctaPrimary: string;
  restart: string;
  relevantieLabels: {
    waarschijnlijk: string;
    mogelijk: string;
    minderWaarschijnlijk: string;
    vrijwelAltijd: string;
  };
  frameworks: {
    nis2: {
      naam: string;
      waarschijnlijk: FrameworkVerdictText;
      mogelijkSector: FrameworkVerdictText;
      mogelijkGevraagd: FrameworkVerdictText;
      minderWaarschijnlijk: FrameworkVerdictText;
    };
    cyfun: {
      naam: string;
      waarschijnlijk: FrameworkVerdictText;
      mogelijk: FrameworkVerdictText;
    };
    iso27001: {
      naam: string;
      waarschijnlijk: FrameworkVerdictText;
      mogelijk: FrameworkVerdictText;
    };
    gdpr: {
      naam: string;
      tekst: string;
    };
  };
};
