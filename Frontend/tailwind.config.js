/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {

      colors: {
        'primary': '#3A7045',
        'gradient-start': '#DAFEFF',
        'gradient-end': '#67C3C7',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #DAFEFF 0%, #67C3C7 100%)',
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite",
      },
    },
  },
  plugins: [],
}

