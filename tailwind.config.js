/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'head': "url('/src/images/head.jpg')",
      },
    }
  },
  plugins: [],
}
