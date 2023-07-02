/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#FFF",
      primary: {
        100: "#FFF0F8",
        200: "#FFE1F0",
        DEFAULT: "#FFB4DA",
        400: "#FF3D9E",
      },
      secondary: {
        DEFAULT: "#4FEAFF",
        400: "#0099AD",
      },
      red: {
        DEFAULT: "#FC6984",
      },
      green: {
        DEFAULT: "#69FC6F",
      },
      shadow: "#00000040",
      background: {
        body: "#FFFEF3",
        paper: "#F5F5F5",
        "paper-dark": "#D9D9D9",
      },
      text: {
        body: "#1E1E05",
      },
    },
    extend: {
      dropShadow: {
        logo: "2px 2px 1px #000",
      },
      lineHeight: {
        0.7: 0.7,
      },
      spacing: {
        4.5: "1.125rem",
      },
    },
  },
  plugins: [],
};
