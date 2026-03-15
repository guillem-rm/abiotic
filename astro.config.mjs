import { defineConfig, fontProviders } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'fs';
import { join } from 'path';
import { imageSize } from 'image-size';
import { visit } from 'unist-util-visit';

/** Rehype plugin: auto-adds width/height to <img> tags from public/images/ */
function rehypePublicImgSize() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'img') return;
      const src = String(node.properties?.src ?? '');
      if (!src.startsWith('/images/') || node.properties.width) return;
      try {
        const buf = readFileSync(join(process.cwd(), 'public', src));
        const { width, height } = imageSize(new Uint8Array(buf));
        if (width && height) {
          node.properties.width = width;
          node.properties.height = height;
        }
      } catch { /* ignore missing files */ }
    });
  };
}

// Latin unicode-range from @fontsource-variable/lora
const LATIN_RANGE = ['U+0000-00FF', 'U+0131', 'U+0152-0153', 'U+02BB-02BC', 'U+02C6', 'U+02DA', 'U+02DC', 'U+0304', 'U+0308', 'U+0329', 'U+2000-206F', 'U+20AC', 'U+2122', 'U+2191', 'U+2193', 'U+2212', 'U+2215', 'U+FEFF', 'U+FFFD'];
const LATIN_EXT_RANGE = ['U+0100-02BA', 'U+02BD-02C5', 'U+02C7-02CC', 'U+02CE-02D7', 'U+02DD-02FF', 'U+0304', 'U+0308', 'U+0329', 'U+1D00-1DBF', 'U+1E00-1E9F', 'U+1EF2-1EFF', 'U+2020', 'U+20A0-20AB', 'U+20AD-20C0', 'U+2113', 'U+2C60-2C7F', 'U+A720-A7FF'];

export default defineConfig({
  site: 'https://abiotic.ad',
  experimental: {
    fonts: [
      {
        provider: fontProviders.local(),
        name: 'Lora Variable',
        cssVariable: '--font-lora',
        options: {
          variants: [
            {
              src: ['@fontsource-variable/lora/files/lora-latin-wght-normal.woff2'],
              weight: '400 700',
              style: 'normal',
              display: 'swap',
              unicodeRange: LATIN_RANGE,
            },
            {
              src: ['@fontsource-variable/lora/files/lora-latin-ext-wght-normal.woff2'],
              weight: '400 700',
              style: 'normal',
              display: 'swap',
              unicodeRange: LATIN_EXT_RANGE,
            },
            {
              src: ['@fontsource-variable/lora/files/lora-latin-wght-italic.woff2'],
              weight: '400 700',
              style: 'italic',
              display: 'swap',
              unicodeRange: LATIN_RANGE,
            },
            {
              src: ['@fontsource-variable/lora/files/lora-latin-ext-wght-italic.woff2'],
              weight: '400 700',
              style: 'italic',
              display: 'swap',
              unicodeRange: LATIN_EXT_RANGE,
            },
          ],
        },
      },
    ],
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: 'ca',
        locales: { ca: 'ca', es: 'es', en: 'en', fr: 'fr' },
      },
    }),
  ],
  markdown: {
    rehypePlugins: [rehypePublicImgSize],
  },
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
