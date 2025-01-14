// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        philosopher: ['Philosopher'],
      },
      animation: {
        spinOnce: 'spinOnce 2s ease-in-out',
      },
      keyframes: {
        spinOnce: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
