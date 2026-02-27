// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({

  site: 'https://www.mynameismartin.co.uk',

  integrations: [sitemap()],

  // Redirect old/legacy routes to their new locations
  redirects: {
    '/weeknotes':   { status: 301, destination: '/blog' },
    '/weeknotes/*': { status: 301, destination: '/blog/*' },
    '/home':        { status: 301, destination: '/' },
    '/cart':        { status: 301, destination: '/' },
    '/rssfeeds':    { status: 301, destination: '/blog' },
  },
});
