/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // dont't forget to add other files and directories
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ps-blue': '#004B93'
      },
      height: {
        '640': '640px'
      }
    },
  },
  plugins: [],
}

