/**
 * Rehype plugin that optimises <img> elements in markdown/MDX content:
 * - Converts .png/.jpg/.jpeg src to .webp (skips .png.webp files)
 * - Adds loading="lazy" and decoding="async" (first image gets loading="eager")
 * - Preserves any existing attributes
 */

export default function rehypeImgOptimize() {
  return (tree) => {
    let imgIndex = 0;

    function visit(node) {
      if (node.type === 'element' && node.tagName === 'img') {
        const props = node.properties || {};

        // Convert src extension to .webp (skip .png.webp and already .webp)
        if (props.src && typeof props.src === 'string' && !/\.webp$/i.test(props.src)) {
          props.src = props.src.replace(/\.(png|jpe?g)$/i, '.webp');
        }

        // Add lazy loading — first image in the document loads eagerly
        if (!props.loading) {
          props.loading = imgIndex === 0 ? 'eager' : 'lazy';
        }

        // Add decoding
        if (!props.decoding) {
          props.decoding = 'async';
        }

        imgIndex++;
      }

      if (node.children) {
        for (const child of node.children) {
          visit(child);
        }
      }
    }

    visit(tree);
  };
}
