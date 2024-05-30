import type { Config } from "tailwindcss";

const multiThemePlugin = require("./theme/multi-theme-plujin.cjs");

const themes = require("./theme/theme.json");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      default: "inset 0 2px 2px rgba(0,0,0,.1)",
      custom: "0 15px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)",
      "inset-shadow": "rgb(245, 245, 245) 0px -1px 0px inset",

      shadowbottom:
        "rgba(0, 0, 0, 0.04) 0px 4px 4px, rgb(245, 245, 245) 0px -1px 0px inset",
    },
  },
  plugins: [multiThemePlugin({ colorThemes: themes })],
};
export default config;
