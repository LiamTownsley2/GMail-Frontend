/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      fontFamily: {
        'google-sans': ['"Product Sans"', 'sans-serif']
      },
      extend: {
        colors: {
          'primary-1': '#f6f8fc',
          'primary-2': '#c2e7ff',
          'secondary-1': '#202124',
          'secondary-2': '#eef3fc'
        },
      },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
