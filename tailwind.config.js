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
        'secondary-2': '#eef3fc',
        'secondary-3': '#d3e3fd',
        'secondary-4': 'rgba(32, 33, 36, 0.06)',
        'tertiary-1': '#cccfd4'
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
}
