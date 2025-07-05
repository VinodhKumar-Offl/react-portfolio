/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    boxShadow: {
        neon: '0 0 10px rgba(147, 51, 234, 0.7), 0 0 20px rgba(236, 72, 153, 0.5)',
      },
    scrollBehavior: ["responsive"],
  },
},
  plugins: [],
}