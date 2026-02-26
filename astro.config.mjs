// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

  // Site URL — update this when you have a production domain
  site: 'https://mynameismartin.com',

  // Redirect old/legacy routes to their new locations
  redirects: {
    '/weeknotes':   { status: 301, destination: '/blog' },
    '/weeknotes/*': { status: 301, destination: '/blog/*' },
    '/home':        { status: 301, destination: '/' },
    '/cart':        { status: 301, destination: '/' },
    '/rssfeeds':    { status: 301, destination: '/blog' },
  },
});
