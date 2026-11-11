import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#211D18",
        paper: "#F2EDE1",
        terracotta: "#B2532E",
        "terracotta-light": "#D97A52",
        // Accessible pair for solid terracotta fills carrying paper-colored body text
        // (buttons, badges) — the base terracotta/terracotta-light pair only clears
        // WCAG AA (4.5:1) for large/decorative text, not the 14px labels these carry.
        "terracotta-deep": "#AA4F2C",
        "terracotta-darker": "#8F3F20",
        muted: "#5A5044",
        line: "#DCD3BF",
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
