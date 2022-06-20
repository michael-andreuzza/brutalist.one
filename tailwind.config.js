//
// This plugin will let set opacity darker on Firefox in case you want to use a blur filter by apending
// "firefox:" to the class
// the snippet is att the bottom within the plugins.
const plugin = require("tailwindcss/plugin");
// Here we importa all tailwind colors
const colors = require("tailwindcss/colors");
module.exports = {
  //mode: 'jit',

  content: ["./src/**/*.html"],

  theme: {
    extend: {
      boxShadow: {
        static:
          "0px 10px 0px -10px rgba(151,163,184,.5), 0px 20px 10px -20px rgba(151,163,184,.5),0px 30px 20px -25px rgba(151,163,184,.5),0px 40px 30px -30px rgba(151,163,184,.5),0px 50px 50px -35px rgba(151,163,184,.5);",

        hover:
          "0px 5px 8px -5px rgba(151,163,184,.5),0px 15px 16px -15px rgba(151,163,184,.5),0px 25px 32px -25px rgba(151,163,184,.5)",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
        "10xl": "8rem",
        "11xl": "9rem",
        "12xl": "10rem",
        "13xl": "11rem",
        "14xl": "12rem",
        "15xl": "13rem",
        "16xl": "14rem",
        "17xl": "15rem",
        "18xl": "16rem",
        "19xl": "17rem",
        "20xl": "18rem",
      },
      colors: {
        black: "#16171b",


      },
      fontFamily: {

        sans: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ], // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
