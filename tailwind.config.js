/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    theme: {
      extend: {
        boxShadow: {
          '3xl': '0 10px 10px -15px rgba(0, 0, 0, 0.5)',
        }
      }
    },
  },
  plugins: [],
}

