// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

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

  integrations: [
    mdx({
      remarkPlugins: [remarkAutoImportSidenote],
    }),
    sitemap(),
  ],
});
