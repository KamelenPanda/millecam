import type {
  NavDict,
  FooterDict,
  CookieBannerDict,
  ContactFormDict,
  Nis2CheckerDict,
  SelfAssessmentDict,
} from "./types";

export const nav: NavDict = {
  links: [
    { href: "/en/diensten", label: "Services" },
    { href: "/en/aanpak", label: "Approach" },
    { href: "/en/nis2-check", label: "NIS2 check" },
    { href: "/en/veelgestelde-vragen", label: "FAQ" },
    { href: "/en/over", label: "About" },
    { href: "/en/contact", label: "Contact" },
  ],
  cta: "Book a call",
  homeAriaLabel: "Millecam homepage",
  menuOpen: "Open menu",
  menuClose: "Close menu",
};

export const footer: FooterDict = {
  servicesHeading: "Services",
  frameworks: ["NIS2", "ISO 27001", "CyFun", "GDPR"],
  faqLink: "Frequently asked questions",
  nis2CheckLink: "NIS2 check",
  contactHeading: "Contact",
  rights: "Millecam",
  linkedinPerson: "LinkedIn: Robin Millecam",
  linkedinCompany: "LinkedIn: Millecam",
  privacy: "Privacy Policy",
  cookies: "Cookie Policy",
  terms: "Terms & Conditions",
  vatLabel: "VAT",
};

export const cookieBanner: CookieBannerDict = {
  title: "This site keeps it simple",
  body: "Millecam doesn't use tracking cookies. For anonymous visitor statistics we use Vercel Analytics, which doesn't set cookies and doesn't collect personal data.",
  accept: "Got it",
  moreInfo: "Learn more",
};

export const contactForm: ContactFormDict = {
  subjects: ["GAP analysis", "DPO support", "ISO 27001 track", "Tabletop exercise", "Other question"],
  labels: {
    name: "Name",
    company: "Company",
    email: "Email address",
    phone: "Phone number",
    subject: "Subject",
    message: "Message",
  },
  validation: {
    name: "Please enter your name.",
    email: "Please enter a valid email address, e.g. name@company.com.",
    message: "Please enter a message.",
  },
  submit: "Send message",
  sending: "Sending...",
  sentTitle: "Message sent.",
  sentSub: "You'll hear back within 24 hours.",
  error: "Something went wrong. Please try again, or email us directly at info@millecam.be.",
};

export const nis2Checker: Nis2CheckerDict = {
  sectoren: [
    "Energy, water or waste management",
    "Transport or logistics",
    "Banking or financial infrastructure",
    "Healthcare",
    "Digital infrastructure (cloud, hosting, data centres)",
    "IT services provided to other businesses",
    "Government",
    "Food industry",
    "Other / none of these",
  ],
  groottes: [
    "Fewer than 50 employees and less than €10 million turnover",
    "50 to 249 employees, or €10 to 50 million turnover",
    "250 or more employees, or more than €50 million turnover",
  ],
  aantoonbaarheid: ["Yes", "No", "Not sure"],
  vragen: [
    "Which sector is your organisation active in?",
    "How many employees (or annual turnover) does your organisation have?",
    "Is a client, insurer, or government body already asking you to demonstrate your cybersecurity measures?",
  ],
  questionOf: "Question {step} of {total}",
  previous: "Previous question",
  possiblePath: "Possible path",
  disclaimer:
    "This is a first indication based on three questions, not a legally binding answer. A GAP analysis provides certainty.",
  ctaPrimary: "Schedule a GAP analysis",
  restart: "Start again",
  verdicts: {
    inSectorAndGroot: {
      titel: "Likely subject to NIS2",
      tekst:
        "Based on your sector and size, you likely fall under NIS2. That requires formal proof of your cybersecurity measures: a GAP analysis maps out exactly what's still needed.",
      tijdlijn: [
        { periode: "Month 1", activiteit: "GAP analysis" },
        { periode: "Months 2–4", activiteit: "Implementation" },
        { periode: "Ongoing", activiteit: "Support" },
      ],
    },
    inSectorNotGroot: {
      titel: "Probably not (yet) subject to NIS2 due to your size",
      tekst:
        "Most organisations in your sector fall below a size threshold, although exceptions exist for critical services. CyFun is often a good, accessible baseline to still be able to demonstrate compliance.",
      tijdlijn: [
        { periode: "Month 1", activiteit: "CyFun self-assessment" },
        { periode: "Month 2", activiteit: "Light implementation" },
        { periode: "Annually", activiteit: "Reassessment" },
      ],
    },
    notInSectorButAsked: {
      titel: "Not necessarily subject to NIS2, but still worth clarifying",
      tekst:
        "NIS2 doesn't seem immediately applicable, but your client's or insurer's request points more towards ISO 27001 or CyFun. A GAP analysis clarifies which framework fits best.",
      tijdlijn: [
        { periode: "Month 1", activiteit: "GAP analysis (ISO 27001/CyFun)" },
        { periode: "Months 2–3", activiteit: "Building demonstrability" },
        { periode: "Ongoing", activiteit: "Maintenance" },
      ],
    },
    fallback: {
      titel: "Probably not subject to NIS2",
      tekst:
        "Based on your answers, NIS2 doesn't seem to apply right now. That may change as you grow. GDPR still applies regardless of sector or size.",
      tijdlijn: [
        { periode: "Now", activiteit: "GDPR still applies" },
        { periode: "As you grow", activiteit: "Re-assess NIS2" },
      ],
    },
  },
};

export const selfAssessment: SelfAssessmentDict = {
  domains: ["Governance", "Access Control", "Incident Response", "Supplier Management"],
  averageLabel: "average score / 5",
  helper:
    "Adjust the scores to see how the average changes: that's how scoring works in every GAP analysis, using your own situation instead of this example.",
};
