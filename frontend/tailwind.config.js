/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            danger: {
              DEFAULT: "#bf1f13",
            },
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: "#1C1C1C",
            focus: "#BEF264",
            danger: {
              DEFAULT: "#bf1f13",
              foreground: "#ffffff",
            },
          },
        },
      },
    }),
    require("@tailwindcss/typography"),
  ],
};
