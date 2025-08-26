/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        snow: "#FFFAFA", // custom snow white
      },
    },
  },
  plugins: [],
}
