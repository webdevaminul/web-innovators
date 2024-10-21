/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bai: ["Bai Jamjuree", " sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },

      colors: {
        textPrimary: "rgba(var(--text-primary))",
        textReverse: "rgba(var(--text-reverse))",
        textBlack: "rgba(var(--text-black))",
        textWhite: "rgba(var(--text-white))",
        textBlue: "rgba(var(--text-blue))",
        textOrange: "rgba(var(--text-orange))",

        backgroundPrimary: "rgba(var(--background-primary))",
        backgroundShadeOne: "rgba(var(--background-shade-one))",
        backgroundBlue: "rgba(var(--background-blue))",
        backgroundBlueHover: "rgba(var(--background-blue-hover))",
        backgroundOrange: "rgba(var(--background-orange))",
        backgroundOrangeHover: "rgba(var(--background-orange-hover))",

        borderLight: "rgba(var(--border-light))",
        borderDark: "rgba(var(--border-dark))",

        accentOne: "rgba(var(--accent-one))",
        accentTwo: "rgba(var(--accent-two))",
        text: "rgba(var(--text-color))",
        link: "rgba(var(--text-link))",
        linkHover: "rgba(var(--text-link-hover))",
        secondary: "rgba(var(--secondary-color))",
        secondaryHover: "rgba(var(--secondary-hover-color))",
        border: "rgba(var(--border-color))",
        outline: "rgba(var(--outline-color))",
        error: "rgba(var(--error-color))",
        success: "rgba(var(--success-color))",
        warning: "rgba(var(--warning-color))",
        info: "rgba(var(--info-color))",
        disabled: "rgba(var(--disabled-color))",
        inputBg: "rgba(var(--input-bg-color))",
        placeholder: "rgba(var(--placeholder-color))",
      },

      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-infinite": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotate: "rotate 0.4s ease-in-out",
        "spin-infinite": "spin-infinite 10s linear infinite",
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none", // Internet Explorer 10+
          "scrollbar-width": "none", // Firefox
        },
      };
      addUtilities(newUtilities);
    },
  ],
  daisyui: {
    themes: [],
  },
};
