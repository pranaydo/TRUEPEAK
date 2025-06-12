/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navlinks: "#18243A",
        // navlinks: "#FF0000", //red color for testing
        primary: "#616c84",
        secondary: "#505a6e",
      },
      fontFamily: {
        navbar: ["Nunito", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        h1: "2.25rem", // 36px
        h2: "1.875rem", // 30px
        base: "1rem", // 16px
        sm: "0.875rem", // 14px
      },
      spacing: {
        section: "5rem",
        "section-sm": "3rem",
      },
      borderRadius: {
        xl: "1.25rem",
      },
    },
  },
  plugins: [],
};
