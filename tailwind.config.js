/ @type {import('tailwindcss').Config} */;
module.exports = {
  content: ["./src//*.{html,js}"],
  theme: {
    extend: {
      colors: {
        $first: "#150101",
        $Second: "#D23166",
        $third: "#F2CEDA",
        white: "#ffffff",
        dark: "#333333",
      },
    },
  },

  plugins: [],
};
