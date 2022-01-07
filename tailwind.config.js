const defaultTheme = require('tailwindcss/defaultTheme');
const { defaultMaxListeners } = require("events");

module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      ja: [...defaultTheme.fontFamily.sans],
      en: [...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        theme: {
          white: '#fff',
          light: '#cccccc',
          medium: '#888888',
          DEFAULT: '#242424',
          dark: '#111111',
        },
        // メインカラー
        primary: {
          light: '#C2FFF9',
          medium: '#71DFE7',
          DEFAULT: '#06B3B7',
          dark: '#06878a',
        },
        // サブカラー
        secondary: {
        //   light: '',
        DEFAULT: '#FFE652',
        //   dark: '',
        },
        // アクセントカラー
        accent: {
        //   light: '',
        medium: '#FF5252',
        DEFAULT: '#F73420',
      //   dark: '',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
