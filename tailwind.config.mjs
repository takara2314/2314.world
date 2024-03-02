/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', '"M PLUS 2 Variable"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};