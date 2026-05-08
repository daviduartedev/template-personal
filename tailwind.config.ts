import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta inspirada no logo da Sabrina - mais vibrante
        ink:        "#0A0F12",
        ink2:       "#11181D",
        bone:       "#F6FBFC",
        bone2:      "#DFF3F6",   // mais turquesa puxado pro pastel
        // Cinza family - tons frios pra equilibrar a paleta
        smoke:      "#EEF2F4",   // cinza muito claro
        ash:        "#D4DCE0",   // cinza médio claro (bordas, dividers)
        slate:      "#7C8A93",   // cinza médio (textos secundários)
        graphite:   "#3A464D",   // cinza escuro (textos sobre claro)
        // Aqua family expandida
        aqua:       "#3FC2D6",   // turquesa principal (do logo)
        aquaDeep:   "#1B9FB5",   // turquesa escuro
        aquaDark:   "#0E6E80",   // azul petróleo profundo
        aquaSoft:   "#A9E5EF",   // turquesa pastel
        aquaIce:    "#E1F5F8",   // gelo / quase branco
        aquaNeon:   "#5EE3F0",   // brilho neon (acentos)
        muted:      "#6B7A82",
        line:       "rgba(10,15,18,0.10)",
        lineDark:   "rgba(246,251,252,0.10)",
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        hero:    ["var(--font-outfit)", "var(--font-inter)", "sans-serif"],
        sans:    ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        floaty:  "floaty 5s ease-in-out infinite",
        blob:    "blob 14s ease-in-out infinite",
        spin60:  "spin 60s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%":      { transform: "translate(40px,-30px) scale(1.1)" },
          "66%":      { transform: "translate(-30px,40px) scale(0.95)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
