/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        twitterBlue: "#00acee",
        dimWhite: "#ffffffb3",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        smthButton: "2.5px 2.5px 0 0",
        smthBox: "4px 4px 0 0",
      },
    },
  },
  plugins: [],
};
