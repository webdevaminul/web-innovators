/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bai: ["Bai Jamjuree", " sans-serif"],
        raleway: ["Raleway", "system-ui"],
        lato: ["Lato", "system-ui"],
        inter: ["Inter", "system-ui"],
      },

      colors: {
        bg: "rgba(var(--bg-color))",
        accentOne: "rgba(var(--accent-one))",
        accentTwo: "rgba(var(--accent-two))",
        text: "rgba(var(--text-color))",
        textReversed: "rgba(var(--text-reversed))",
        textWhite: "rgba(var(--text-white))",
        link: "rgba(var(--text-link))",
        linkHover: "rgba(var(--text-link-hover))",
        secondary: "rgba(var(--secondary-color))",
        secondaryHover: "rgba(var(--secondary-hover-color))",
        link: "rgba(var(--link-color))",
        linkHover: "rgba(var(--link-hover-color))",
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
      },
      animation: {
        rotate: "rotate 0.4s ease-in-out",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
