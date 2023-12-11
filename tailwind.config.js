/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-light": "#defff6",
        "tran-color": "#07e8aa",
        "theme-dark": "#006B62",
        "footer-color2": "#042d33",
        "uploader-bg": "#017373",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
