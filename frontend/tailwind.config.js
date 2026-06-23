/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        bone: "#F6F8FB",
        line: "#E4EAF0",
        navy: "#10273B",
        navyDeep: "#0A1B2A",
        ink: "#050B12",
        cyan: {
          DEFAULT: "#00A7E1",
          soft: "#E6F6FD",
          deep: "#0381AE",
        },
        mute: "#5B6B7B",
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ['"Geist"', "Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widerx: "0.18em",
      },
      keyframes: {
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(120%) scaleY(0.6)" },
          "100%": { opacity: "1", transform: "translateY(0) scaleY(1)" },
        },
        wordmarkIn: {
          "0%": { opacity: "0", transform: "translateX(-8px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        sweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
