module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 400: "#afafaf" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { spacemono: "Space Mono", montserrat: "Montserrat" },
      boxShadow: { bs: "inset 12px 12px  12px 12px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
