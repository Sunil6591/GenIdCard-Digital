import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", foreground: "var(--foreground)",
        primary: { DEFAULT: "var(--green)", foreground: "var(--white)" },
        secondary: { DEFAULT: "var(--mint)", foreground: "var(--dark)" },
        border: "var(--border)", muted: "var(--muted)",
      },
      fontFamily: { sans: ["Inter Variable", "Noto Sans Devanagari", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
} satisfies Config;
