import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef7fb',
          100: '#cde9f4',
          200: '#9dd2e8',
          300: '#5db4d6',
          400: '#2898bf',
          500: '#1585ab',
          600: '#0d7090',
          700: '#0A6A88',
          800: '#085972',
          900: '#053d50',
        },
        secondary: {
          50:  '#f5fce8',
          100: '#e7f6c1',
          200: '#ccec88',
          300: '#b2e04f',
          400: '#a1d32e',
          500: '#95C121',
          600: '#79a01a',
          700: '#5d7c13',
        },
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-headings': '#0A6A88',
            '--tw-prose-links': '#0A6A88',
            '--tw-prose-bullets': '#95C121',
          },
        },
      },
    },
  },
  plugins: [typography],
};
