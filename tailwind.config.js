import scrollbarHide from "tailwind-scrollbar-hide";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
  plugins: [scrollbarHide],
};
