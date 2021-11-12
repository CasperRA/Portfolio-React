module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "prim-orange": "#FF9A4D",
        "prim-blue": "#358CD6",
        "sec-purple": "#2C314A",
        "prim-provsti": "#F8F2E3",
        "prim-gaston": "#5541f8;",
        "prim-genskab": "#5CD48C;",
        "prim-nordvest": "#5d7a85;",
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
