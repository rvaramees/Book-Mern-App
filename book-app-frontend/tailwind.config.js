/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{.js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 0.5s ease-in-out infinite",
        wave: "wave 2s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-5deg)",
          },
          "50%": {
            transform: "rotate(5deg)",
          },
        },
      },
    },
  },
  plugins: [],
}