/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'bai': ["Bai Jamjuree", ' sans-serif'],
        'raleway': ["Raleway", 'system-ui'],
        'lato': ["Lato", 'system-ui'],
        'inter': ["Inter", 'system-ui'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
