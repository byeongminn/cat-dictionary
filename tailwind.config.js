/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'card-1': 'repeat(1, minmax(auto, 18.75rem))',
        'card-2': 'repeat(2, 18.75rem)',
        'card-3': 'repeat(3, 18.75rem)',
      },
      width: {
        128: '32rem',
      },
      screens: {
        sm: '576px',
      },
      maxWidth: {
        248: '62rem',
        240: '60rem',
        180: '45rem',
      },
    },
  },
  plugins: [],
};
