/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        risePrimary: "#07969E",
        risePrimary2: "#40BBC3",
        riseDark: "#2d2d2d",
        riseDarkText: "#4A5050",
        riselightGreen: "var(--light-green)",
      },
      fontFamily: {
        clash: "var(--clashFont-medium)",
      },
      animation: {
        twinkle: "twinkle 5s infinite ease-in-out",
        scroll: "scroll 15s linear infinite",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.7)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
