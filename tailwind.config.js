/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Add this to include all your JS/TS/JSX/TSX files
  ],
  theme: {
    extend: {
      transitionDuration: {
        300: "600ms",
      },
      transitionTimingFunction: {
        "ease-in": "ease-in",
      },
    },
  },
  plugins: [],
};
