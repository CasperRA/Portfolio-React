module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "prim-orange": "#FF9A4D",
        "medium-green": "#325244",
        "dark-green": "#2E473C",
        "regular-green": "#365E4C",
        "biege-text": "#F8F2E3",
        "dark-text": "#4A4A4A",
        "orange-text": "#C98E54",
      },
      zIndex: {
        "-1": "-1",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
};
