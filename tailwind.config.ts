import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        alabster: "#f5f5f4",
      },
      fontFamily: {
        sans: ["var(--font-switzer)", ...fontFamily.sans],
        serif: ["var(--font-newsreader)", ...fontFamily.serif],
      },
      animation: {
        intro: "intro 0.6s both",
      },
      keyframes: {
        intro: {
          "0%": {
            transform: "translateY(10px)",
            opacity: "0",
            filter: "blur(3px)",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addVariant, addUtilities }) {
      addVariant("fine", "@media (any-pointer: fine)");
      addVariant("coarse", "@media (any-pointer: coarse)");

      addUtilities({
        ".contain-strict": {
          contain: "strict",
        },
        ".contain-content": {
          contain: "content",
        },
      });
    }),
  ],
} satisfies Config;

export default config;
