// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import robotsTxt from 'astro-robots-txt';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pindd.xyz/',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react(), robotsTxt(), sitemap()]
});