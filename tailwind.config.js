/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 🎨 Custom Colors
      colors: {
        primary: "#18243A",     // Used for main backgrounds and text
        secondary: "#E1C78F",   // Accent color (e.g., buttons, highlights)
        navlinks: "#18243A",    // Specific to navbar links (same as primary)
      },

      // 🖋 Custom Fonts
      fontFamily: {
        navbar: ["Nunito", "sans-serif"],     // For navigation bar text
        heading: ["Poppins", "sans-serif"],   // For titles/headings
        body: ["Montserrat", "sans-serif"],   // For paragraph text
      },

      // 🔠 Font Sizes
      fontSize: {
        heading: "48px", // Custom heading style
        h2: "1.875rem",  // 30px
        base: "1rem",    // 16px
        14: "0.875rem",
        16: "1rem",
        20: "1.25rem",
        24: "1.5rem",
        26: "1.625rem",
        28: "1.75rem",
        32: "2rem",
        36: "2.25rem",
        48: "3rem",
      },

      // 💪 Font Weights
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },

      // 📐 Custom Spacing
      spacing: {
        section: "5rem",     // Default section spacing
        "section-sm": "3rem" // Smaller section spacing
      },

      // ⭕ Custom Border Radius
      borderRadius: {
        xl: "1.25rem", // Extra-large rounded corners
      },
    },
  },
  plugins: [],
};
