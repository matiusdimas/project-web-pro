/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        dropdown: {
        '0%': {
            transform: 'rotateX(-90deg)'
        },
        '70%': {
            transform: 'rotateX(20deg)' 
        },
        '100%': {
            transform: 'rotateX(0deg)' 
        }
        },
        dropdownNone: {
          '0%': {
              transform: 'rotateX(0deg)'
          },

          '100%': {
              transform: 'rotateX(-90deg)' 
          }
        },
      }
    },
  },
  plugins: [],
}

