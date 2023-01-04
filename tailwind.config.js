/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "color-getir-white": "#fff",
        "color-getir-white-transparent": "#ffffffa6",
        "color-getir-black": "#191919",
        "color-getir-black800": "#0E0E0E",
        "color-getir-gray-dark": "#3e3e3e",
        "color-getir-gray": "#a2a2a2",
        "color-getir-gray-mid": "#525252",
        "color-getir-gray-light": "#f5f5f5",
        "color-getir-gray-background": "#fafafa",
        "color-getir-gray-storm": "#697488",
        "color-getir-gray-50": "#f0f1f3",
        "color-getir-gray-blue": "#f0f1f3",
        "color-getir-primary": "#5d3ebc",
        "color-getir-primary-light": "#f3f0fe",
        "color-getir-secondary": "#7849f7",
        "color-getir-danger": "#db471e",
        "color-getir-warning": "#ddf300",
        "color-getir-success": "#188977",
        "color-getir-info": "#4eb5eb",
        "color-getir-brand-yellow": "#ffd300",
        "color-getir-purple-light": "#dbdbff",
        "color-getir-black-800": "#0e0e0e",
      },
    },
  },
  plugins: [],
};

/* 
--color-white: #fff;
--color-white-transparent: #ffffffa6;
--color-black: #191919;
--color-black800: #0E0E0E;
--color-gray-dark: #3e3e3e;
--color-gray: #a2a2a2;
--color-gray-mid: #525252;
--color-gray-light: #f5f5f5;
--color-gray-background: #fafafa;
--color-gray-storm: #697488;
--color-gray-50: #f0f1f3;
--color-gray-blue: #f0f1f3;
--color-primary: #5d3ebc;
--color-primary-light: #f3f0fe;
--color-secondary: #7849f7;
--color-danger: #db471e;
--color-warning: #ddf300;
--color-success: #188977;
--color-info: #4eb5eb;
--color-brand-yellow: #ffd300;
--color-purple-light: #dbdbff;
--color-black-800: #0e0e0e;

--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-semi-bold: 600;
--font-weight-bold: 700;
--font-size-xxs: 8px;
--font-size-xs: 10px;
--font-size-s: 12px;
--font-size-m: 14px;
--font-size-l: 16px;
--font-size-xl: 18px;
--font-size-xxl: 20px;
--font-size-xxxl: 24px;

--border-color-primary: var(--color-primary);
--border-color-primary-light: var(--color-primary-light);
--border-color-gray-light: var(--color-gray-light);
--border-width-s: 2px;
--border-radius-s: 2px;
--border-radius-m: 4px;
--border-radius-l: 8px;
--border-radius-xl: 16px;
--border-radius-circle: 50%;

--shadow-xs: 0px 2px 4px;
--shadow-s: 0px 1px 6px;
--shadow-m: 0px 2px 6px;
--shadow-l: 0px 6px 16px;
--shadow-xl: 0px 6px 24px;
--shadow-xxl: 0px 16px 46px;
--shadow-color-primary: rgba(93,56,192,0.196445);
--shadow-color-gray-light: rgba(0,0,0,0.1);
--shadow-card: rgba(93,62,188,0.04);
--shadow-card-hover: rgba(93,62,188,0.12);
--shadow-success: rgba(24,137,119,0.1);
--shadow-warning: rgba(227,155,14,0.1);
--shadow-danger: rgba(219,71,30,0.1);
--shadow-button: rgba(105,116,136,0.15);

--gap-xxxs: 2px;
--gap-xxs: 4px;
--gap-xs: 8px;
--gap-s: 12px;
--gap-m: 16px;
--gap-l: 24px;
--gap-xl: 32px;
--gap-xxl: 48px;
--gap-xxxl: 64px; */
