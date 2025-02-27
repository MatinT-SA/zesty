/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Dangrek, Rubik, Poppins",
    },

    extend: {
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
