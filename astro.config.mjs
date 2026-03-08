import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://abiotic.ad',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: 'ca',
        locales: { ca: 'ca', es: 'es', en: 'en', fr: 'fr' },
      },
    }),
  ],
  output: 'static',
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
