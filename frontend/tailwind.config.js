/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myfont: ['Dosis', 'sans-serif'],
      },
      boxShadow: {
        custom: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);',
      },
      transitionProperty: {
        'custom': 'all',
      },
      transitionTimingFunction: {
        'custom': 'ease-in-out',
      },
      transitionDuration: {
        'custom': '600ms',
      },
      backgroundImage: theme => ({
      'gradient-hover': 'linear-gradient(90deg, #ffffff, #018fd6)',
      }),
    },
  },
  plugins: [],
}

