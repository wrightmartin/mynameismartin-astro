// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import rehypeImgOptimize from './plugins/rehype-img-optimize.mjs';

/**
 * Remark plugin that auto-imports the Sidenote component into every MDX file
 * so authors can use <Sidenote> without a manual import statement.
 */
function remarkAutoImportSidenote() {
  return (tree) => {
    tree.children.unshift({
      type: 'mdxjsEsm',
      value: "import Sidenote from '../../components/Sidenote.astro'",
      data: {
        estree: {
          type: 'Program',
          sourceType: 'module',
          body: [{
            type: 'ImportDeclaration',
            specifiers: [{
              type: 'ImportDefaultSpecifier',
              local: { type: 'Identifier', name: 'Sidenote' },
            }],
            source: {
              type: 'Literal',
              value: '../../components/Sidenote.astro',
              raw: "'../../components/Sidenote.astro'",
            },
          }],
        },
      },
    });
  };
}

// https://astro.build/config
export default defineConfig({

  site: 'https://www.mynameismartin.co.uk',

  fonts: [
    {
      name: 'Albert Sans',
      cssVariable: '--font-heading',
      provider: fontProviders.google(),
      weights: [400, 600, 700, 800],
      styles: ['normal'],
      fallbacks: ['system-ui', '-apple-system', 'sans-serif'],
    },
    {
      name: 'PT Serif',
      cssVariable: '--font-body',
      provider: fontProviders.google(),
      weights: [400, 700],
      styles: ['normal', 'italic'],
      fallbacks: ['Georgia', 'Times New Roman', 'serif'],
    },
  ],

  security: {
    csp: {
      scriptDirective: {
        resources: ["'self'", 'https://scripts.simpleanalyticscdn.com'],
      },
    },
  },

  markdown: {
    rehypePlugins: [rehypeImgOptimize],
  },

  integrations: [
    mdx({
      remarkPlugins: [remarkAutoImportSidenote],
      rehypePlugins: [rehypeImgOptimize],
    }),
    sitemap(),
  ],
});
