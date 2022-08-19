/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      height: {
        86: "21.5rem",
      },
      borderColor: ["odd", "even"],
      borderOpacity: ["odd", "even"],
      borderWidth: ["odd", "even"],
    },
  },
  plugins: [],
};
