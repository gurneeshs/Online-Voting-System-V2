// @type {import('tailwindcss').Config} 
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightColor1: "#EDE8F5",
        lightColor2: "#ADBBDA",
        mediumColor: "#8697C4",
        darkColor1: "#7091E6",
        darkColor2: "#3D52A0"
      },
    },
  },
  plugins: [],
})

