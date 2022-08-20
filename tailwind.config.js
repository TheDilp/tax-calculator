/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      height: {
        86: "21.5rem",
      },
      width: {
        21: "5.25rem",
        22: "5.5rem",
      },

      borderColor: ["odd", "even"],
      borderOpacity: ["odd", "even"],
      borderWidth: ["odd", "even"],
    },
  },
  plugins: [],
};
