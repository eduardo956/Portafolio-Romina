/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          dark: '#1c192c',
          card: '#312e42',
          primary: '#4b2a8d',
          accent: '#6344a6',
          electric: '#845ec2',
          light: '#fdf8ff',
          soft: '#f1ebff',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
