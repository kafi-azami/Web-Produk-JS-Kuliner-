/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      colors: {
        katering: {
          dark: "#1F4B2A",
          DEFAULT: "#2E6B34",
          medium: "#3C8C42",
          light: "#8FD98F",
          pale: "#E8FBEA",
          accent: "#F2C14E"
        },
      },
      boxShadow: {
        card: "0 10px 30px 12px rgba(31, 75, 42, 0.35)",
      },
    },
  },
  plugins: [],
};
