/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        primary: '#EB6D20',
        third: '#EB8426',
        success: '#6DB95A',
        error: '#DD5E5E',
        warning: '#D89614',
        url: '#D89614',
        "text-color": '#3E3E3E',
        "subtext-color": '#9A9A9A',
        "para-color": '#292929',
        "thick-black": '#040404',
        "mid-black": '#0B0B0B',
        "soft-black": '#1B1B1B',
        'light-color': '#D6D6D6',
        'medium-color': '#5F5F5F',
        'regular-color': '#303030',
        'primary-border': '#E9E9E9',
        'disable-color': '#E9E9E9',
        'base-bg': '#FDFDFD',
        'soft-bg': '#FFF9F3',
        'gray-bg': '#F5F6F8'
      },
    },
  },
  plugins: [],
}