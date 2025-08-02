// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://marcocondrache.com',
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
    // https://github.com/withastro/astro/issues/12824
    resolve: {
      alias: import.meta.env.PROD
        ? {
            'react-dom/server': 'react-dom/server.edge',
          }
        : undefined,
    },
  },

  adapter: cloudflare(),
});
