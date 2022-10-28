/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#0a3057",
          secondary: "#71717a",
          accent: "#ffffff",
          neutral: "#191D24",
          "base-100": "#ffffff",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
          "primary-content": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
