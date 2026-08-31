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
