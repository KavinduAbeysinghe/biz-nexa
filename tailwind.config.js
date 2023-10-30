import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue["700"],
        body: colors.gray["100"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
