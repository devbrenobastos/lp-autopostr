/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#3B69D5",
          secondary: "#77A5FF",
        },
        background: {
          main: "#080E15",
          card: "#101826",
        },
        text: {
          secondary: "#94A3B8",
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'premium-gradient': 'linear-gradient(to right, #3B69D5, #77A5FF)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
