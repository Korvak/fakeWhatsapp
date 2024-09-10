module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all source files in your project
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: true,
    content: [
      './src/**/*.{js,jsx,ts,tsx}'
    ],
  },
};