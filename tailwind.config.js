/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
        display: ["var(--font-syne)", "Syne", "sans-serif"],
        mono: ["var(--font-dm-mono)", "DM Mono", "monospace"],
      },
      colors: {
        bg: {
          DEFAULT: "#080C14",
          2: "#0D1221",
          3: "#111827",
          4: "#161e2e",
        },
        accent: {
          DEFAULT: "#3B82F6",
          2: "#6366F1",
          3: "#06B6D4",
        },
      },
    },
  },
  plugins: [],
};
