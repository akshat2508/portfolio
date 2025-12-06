
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f14",
        neon: "#00ffd5",
        electric: "#7df9ff",
        hot: "#ff3d81",
        soft: "#1b2630",
      },
      boxShadow: {
        'neon-lg': '0 10px 30px rgba(0,255,213,0.08), 0 0 18px rgba(0,255,213,0.06)',
      },
      keyframes: {
        pulseNeon: {
          '0%': { transform: 'scale(1)', opacity: 0.9 },
          '50%': { transform: 'scale(1.03)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 0.9 },
        },
        floaty: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        'pulse-neon': 'pulseNeon 3s ease-in-out infinite',
        'floaty-slow': 'floaty 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
