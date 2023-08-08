/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/components/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{vue,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
