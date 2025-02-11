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
        raleway: ["Raleway", "sans-serif"],
        bricolage: ["Bricolage Grotesque", "sans-serif"],
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
      colors: {
        navbarColor: "#616161",
        buttonColor: "#07A0EC",
        headingColor: "#000B1C",
      },
      boxShadow: {
        custom: "0px 4px 13px 0px rgba(0, 0, 0, 0.07)",
      },
      boxShadow: {
        customCard: "0px 10px 29px 2px rgba(0, 0, 0, 0.10)",
      },
      boxShadow: {
        fileUpload: "0px 4px 13px 0px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [],
};
