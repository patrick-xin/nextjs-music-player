/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Poppins", "sans-serif"'],
        display: ['"Anton", "sans-serif"'],
      },
      colors: {
        primary: '#23204C',
        'primary-light': '#3E3874',
        'primary-dark': '#0D0A2A',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      zIndex: {
        100: '100',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar-hide')],
};
