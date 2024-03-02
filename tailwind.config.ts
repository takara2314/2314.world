import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter Variable"',
          '"M PLUS 2 Variable"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
