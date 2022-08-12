/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.tsx",
    "./pages/**/*.tsx"
  ],
  theme: {
    extend: {
      height: {
        "max": "calc(100vh-5rem)"
      }
    },
  },
  plugins: [],
}