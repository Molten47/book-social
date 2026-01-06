/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Add custom scrollbar hiding
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbar for Chrome, Safari and Opera */
          '-webkit-overflow-scrolling': 'touch',
          'scrollbar-width': 'none' /* Firefox */,
          '-ms-overflow-style': 'none' /* IE and Edge */,
          '&::-webkit-scrollbar': {
            display: 'none' /* Chrome, Safari and Opera */,
          },
        },
      })
    },
  ],
}