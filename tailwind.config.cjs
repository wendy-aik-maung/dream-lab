/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dreamLabColor1: "#0092FF",
        dreamLabColor2: "##00D7FF",
        dreamLabColor3: "#00BEFF",
        dreamLabColor4: "#1D3160",
        textColor1: "#262626",
        textColor2: "#0092FF",
        textColor3: "#EFEFEF",
        textColor4: "#54595F",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        asap: ["Asap", "sans-serif"],
        myanmar: ["Noto Sans Myanmar", "sans-serif"],
      },
    },
  },
  plugins: [],
};
