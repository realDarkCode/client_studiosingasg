// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],            // Sets Inter as the default sans-serif font
        heading: ['"Inknut Antiqua"', 'serif'],      // Custom font option for Inknut Antiqua
        medium: ['"Epilogue"', 'sans-serif'],      // Custom font option for Epilogue
      },
      colors: {
        brand: {
          heading: "#111827", 
          text: "#374151  ", 
          button: "#634D38",
          hover: "#825d39"
        }
      }
    },
  },
  plugins: [],
};
