/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // or 'media' or 'class'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "fade-to-bottom-light":
          "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
        "fade-to-bottom-dark":
          "linear-gradient(to bottom, rgba(31, 41, 55, 1) 0%, rgba(31, 41, 55, 0) 100%)",
      },
    },
  },
  plugins: [],
};
