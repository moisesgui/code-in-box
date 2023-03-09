/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      backgroundImage: {
        'hero-image': "url('/src/assets/imagens/bg-hero.png')",
        'hero-image-2': "url('/src/assets/imagens/bg-hero2.png')",
      },
      colors: {
        white: '#ffff',
        black: '#111',
        blue: '#0A2647',
        yellow: {
          50: '#fff3b0',
          100: '#ffea00',
          200: '#F2CF30',
          500: '#FFBD59',
          800: '#FAA500',
        },
        pink: {
          200: '#AF1685',
          800: '#E31C79',
        },
        orange: {
          500: '#CD7925'
        },
        green: {
          400: '#7FD768',
          450: '#5cc32c',
          500: '#52b028'
        },
        red: {
          400: '#D70000',
          500: '#a4161a',
          800: '#6a040f'
        },
        gray: {
          50: '#F3F3F3',
          100: '#eaeaea',
          200: '#E4E4E4',
          300: '#CCCCCC',
          500: '#313131',
          900: '#1F1F1E'
        },   
      },
    },
  },
  plugins: [],
}