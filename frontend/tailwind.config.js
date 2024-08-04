/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      "2xs": "430px",
      "3xs": "520px",
      sm: "640px",
      md: "768px",
      mdb: "880px",
      lg: "1024px",
      lgb: "1175px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1760px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        sm: "0.625rem"
      }
    },
    extend: {
      fontFamily: {
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaDemiBold": "Dana DemiBold",
        "MorabbaLight": "Morabba Light",
        "MorabbaMedium": "Morabba Medium",
        "MorabbaBold": "Morabba Bold",
      },
      colors: {
        'mainBlue': "#16509D",
        'mainRed': "#EF4056"
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}

