/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,astro,js,jsx}"],
  theme: {
    extend: {
      height:{
        '128':'28rem',
        '138':'38rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
