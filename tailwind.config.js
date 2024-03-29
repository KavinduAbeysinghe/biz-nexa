import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue["700"],
        body: colors.gray["100"],
        progressBlue: colors.blue["600"],
        progressRed: colors.red["600"],
        progressYellow: colors.yellow["600"],
        progressOrange: colors.orange["600"],
        progressGreen: colors.green["600"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
