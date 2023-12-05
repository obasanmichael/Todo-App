/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        hoverBlue: "#3A7CFD",
        textGray: "#494C6B",
        strikedThrough: "#D1D2DA",
        lightGray: "#9495A5",
        currentTyping: "#393A4B",
      },
    },
  },
  variants: {},
  plugins: [],
};
