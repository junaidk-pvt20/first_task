/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgba(14, 35, 104, 1)',
        'red': 'rgba(226, 55, 68, 1)',
        'backwhite': 'rgba(30, 42, 93, 0.04)',
        'lighttext': 'rgba(100, 104, 116, 1)        ',
      },
    },
  },
  plugins: [],
}

