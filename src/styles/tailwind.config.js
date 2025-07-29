/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',              // activeer class-based dark mode
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}',
    './src/scenes/**/*.{js,ts,jsx,tsx}',
    './src/animations/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        'neutral-dark': 'var(--color-neutral-dark)',
        'neutral-light': 'var(--color-neutral-light)',
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(197, 157, 95, 0.5)',
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
};
