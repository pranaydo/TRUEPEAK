/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navlinks: "#18243A",
        // navlinks: "#FF0000", //red color for testing
        primary: "#18243A",
        secondary: "#E1C78F",
      },
      fontFamily: {
        navbar: ["Nunito", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        heading: "48px", // 36px
        h2: "1.875rem", // 30px
        base: "1rem", // 16px
        14: "0.875rem", // 14px
        16: "16px",
        20: "20px",
        24: "24px",
        26: "26px",
        28: "28px",
        32: "32px",
        36: "36px",
        48: "48px",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
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
