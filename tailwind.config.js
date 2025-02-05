/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        xxl: "1530px",
      },
      padding: {
        DEFAULT: "16px",
        sm: "1rem",
        lg: "2rem",
        xxl: "24px",
      },
    },

    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "390px",
        xxs: "480px",
        sm: "650px",
        md: "768px",
        xmd: "992px",
        lg: "1024px",
        xlg: "1200px",
        xl: "1560px",
        xxl: "1920px",
      },
    },
  },
  plugins: [],
};
