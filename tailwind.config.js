/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Überprüft HTML und Vue-Dateien
  theme: {
    extend: {}, // Optional: Für eigene Anpassungen
  },
  plugins: [], // Optional: Für Plugins
};
