import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://theopinard.github.io',
  base: '/about-me',
  integrations: [sitemap()],
});
