/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PT Sans"', "sans-serif"], // Add PT Sans as the primary font
      },
    },
  },
  plugins: [],
};
