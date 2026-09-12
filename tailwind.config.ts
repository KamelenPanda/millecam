import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // "Inkt" palette: Prussian blue, the ink of historical maps and
        // government documents — deep and desaturated rather than the
        // bright, saturated blue most SaaS sites reach for — paired with
        // copper instead of gold. Replaces the earlier ivory/terracotta
        // system, which had become a recognizable "AI-generated site"
        // default. All pairings below hold real WCAG AA margin, not just
        // the 4.5:1 floor (see tokens.md-equivalent note below).
        ink: "#14181D",
        paper: "#EDEEE9",
        prussian: "#16323B",
        copper: "#C08A54",
        // Accessible pair for solid prussian fills carrying paper-colored body
        // text (buttons, badges) — the base prussian/copper pair alone doesn't
        // give small (14px) labels the same margin as prussian's 11.6:1 on
        // paper.
        "prussian-deep": "#102831",
        "prussian-darker": "#0A1B21",
        muted: "#4E545A",
        line: "#D6D9D4",
        status: {
          conform: "#4B6B4E",
          aandacht: "#B8862E",
          kritiek: "#9C3B30",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
      maxWidth: {
        container: "1120px",
      },
    },
  },
  plugins: [],
};
export default config;
