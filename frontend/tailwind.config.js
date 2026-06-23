/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        paper: "#F4F1ED",
        paperShade: "#EAE6DF",
        ink: "#1A1A1A",
        oxblood: "#7A2021",
        brass: "#B59A5A",
        olive: "#4B5320",
      },
      fontFamily: {
        serif: ['"IBM Plex Serif"', "Georgia", "serif"],
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widerx: "0.18em",
      },
    },
  },
  plugins: [],
};
