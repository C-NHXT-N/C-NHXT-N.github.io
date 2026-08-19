import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://c-nhxt-n.github.io',
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
