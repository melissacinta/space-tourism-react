/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {

    extend: {
      backgroundImage: {
        'home-lg': 'url("/assets/home/background-home-desktop.jpg")',
        'home-md': 'url("/assets/home/background-home-tablet.jpg")',
        'home-sm': 'url("/assets/home/background-home-mobile.jpg")',
        'crew-lg': 'url("/assets/crew/background-crew-desktop.jpg")',
        'crew-md': 'url("/assets/crew/background-crew-tablet.jpg")',
        'crew-sm': 'url("/assets/crew/background-crew-mobile.jpg")',
        'destination-lg': 'url("/assets/destination/background-destination-desktop.jpg")',
        'destination-md': 'url("/assets/destination/background-destination-tablet.jpg")',
        'destination-sm': 'url("/assets/destination/background-destination-mobile.jpg")',
        'technology-lg': 'url("/assets/technology/background-technology-desktop.jpg")',
        'technology-md': 'url("/assets/technology/background-technology-tablet.jpg")',
        'technology-sm': 'url("/assets/technology/background-technology-mobile.jpg")',
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      },
      fontFamily: {
        'bellefair': ['Bellefair', 'serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      },
      screens: {
        'x-large': '1440px',
      },
    },
  },
  plugins: [],
}
