/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',   // <-- we’ll use the .dark class on <html>
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
        primary:        'var(--color-primary)',
        secondary:      'var(--color-secondary)',
        accent:         'var(--color-accent)',
        'neutral-dark': 'var(--color-neutral-dark)',
        'neutral-light':'var(--color-neutral-light)',
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body:    ['var(--font-body)'],
      },
    },
  },
  plugins: [],
};
