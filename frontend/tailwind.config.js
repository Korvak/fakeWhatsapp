/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files in your project
  ],
  theme: {
    extend: {
      colors: {
          "teal" : "#008E6B"
      }
    },
  },
  plugins: [],
};
