// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rthtechservices.com',
  integrations: [sitemap()],
  build: {
    // Emit /work/index.html rather than /work.html so URLs stay extensionless.
    format: 'directory',
  },
});
