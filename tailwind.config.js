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
        dosis: ["'Dosis', sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        primary: "#f37139",
        secondary: "#FFBF00",
        lightGrey: "#d3d3d3",
        darkGrey: "#3b3b3b",
      },
      boxShadow: {
        "custom-light": "0 2px 4px rgba(0, 0, 0, 0.1)",
        "custom-medium": "0 4px 8px rgba(0, 0, 0, 0.2)",
        "custom-dark": "0 8px 16px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
  paths: {
    "@/*": ["./*"],
  },
};
