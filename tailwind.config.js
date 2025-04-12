/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'tenderness-yellow': '#fffacd',
        'affection-rose': '#ffe4e1',
        'adoration-lavender': '#e6e6fa',
        'serenity-cyan': '#e0ffff',
        'caring-peach': '#ffdab9',
        'innocence-pink': '#ffc0cb',
        'purity-ivory': '#f0fff0',
        'trust-blue': '#add8e6',
        'soft-passion-salmon': '#ffa07a',
        'freshness-mint': '#f0fff0',
        'gray-800': '#1f2937',
      },
      fontFamily: {
        rounded: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
