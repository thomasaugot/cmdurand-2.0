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
        montserrat: ['"Montserrat", sans-serif'],
        poppins: ["'Poppins', sans-serif"],
        arial: ["'Arial', sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        primary: "#f37139",
        secondary: "#FFBF00",
        lightGrey: "#d3d3d3",
        darkGrey: "#3b3b3b",
      },
    },
  },
  plugins: [],
};
