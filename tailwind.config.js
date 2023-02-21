/** @type {import('tailwindcss').Config} */


module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        serif: ["Ubuntu"],
      },
      colors: {
        'lightb': '#66a0fd',
       'googlebl': '#1967d2',
        'black': "#414141",
        'googlegrn': "#34a853",
        'googleyel': "#fbbc04",
        'googlered' : '#f72a25'
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
