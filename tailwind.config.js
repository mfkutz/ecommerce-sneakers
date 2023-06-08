/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Orange': "hsl(26, 100 %, 55 %)",
        'OrangeDark': "#ff7d1b",
        'OrangeFont': "#ef8536",
      }
    },
  },
  plugins: [],
}