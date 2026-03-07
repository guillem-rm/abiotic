import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0f9f4',
          100: '#d8f0e3',
          500: '#2d7a52',
          700: '#1a5438',
          900: '#0d2e1f',
        },
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-headings': '#1a5438',
            '--tw-prose-links': '#2d7a52',
            '--tw-prose-bullets': '#2d7a52',
          },
        },
      },
    },
  },
  plugins: [typography],
};
