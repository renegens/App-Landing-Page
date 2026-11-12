// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://giant-solutions.eu',
  // public/ already has a dist/ folder (legacy CSS at /dist/output.css).
  // Astro copies public/ into outDir as-is, so it ends up at the same URL.
  outDir: 'dist',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
  vite: { plugins: [tailwindcss()] },
});
