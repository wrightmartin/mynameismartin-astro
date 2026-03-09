/**
 * Convert all PNG/JPG/JPEG images in public/images/ to WebP.
 * - Generates a .webp file alongside each original
 * - Resizes images wider than 1600px down to 1600px (2× for 720px content)
 * - Skips files that already have a .webp sibling
 * - Quality: 80
 *
 * Usage: node scripts/convert-to-webp.mjs
 */

import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const PUBLIC_IMAGES = 'public/images';
const MAX_WIDTH = 1600;
const QUALITY = 80;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else {
      files.push(full);
    }
  }
  return files;
}

async function convert() {
  const files = await walk(PUBLIC_IMAGES);
  const targets = files.filter((f) => /\.(png|jpe?g)$/i.test(f) && !f.endsWith('.png.webp'));

  console.log(`Found ${targets.length} images to convert.\n`);

  let converted = 0;
  let skipped = 0;

  for (const src of targets) {
    const webpPath = src.replace(/\.(png|jpe?g)$/i, '.webp');

    // Skip if .webp already exists
    try {
      await stat(webpPath);
      skipped++;
      continue;
    } catch {
      // File doesn't exist — proceed
    }

    const img = sharp(src);
    const meta = await img.metadata();

    let pipeline = img;
    if (meta.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH);
    }

    await pipeline.webp({ quality: QUALITY }).toFile(webpPath);

    const srcStat = await stat(src);
    const webpStat = await stat(webpPath);
    const savings = ((1 - webpStat.size / srcStat.size) * 100).toFixed(0);

    console.log(
      `✓ ${path.relative(PUBLIC_IMAGES, webpPath)}  ` +
        `${(srcStat.size / 1024).toFixed(0)}KB → ${(webpStat.size / 1024).toFixed(0)}KB  (${savings}% smaller)` +
        (meta.width > MAX_WIDTH ? `  [resized ${meta.width}→${MAX_WIDTH}]` : '')
    );
    converted++;
  }

  console.log(`\nDone. Converted: ${converted}, Skipped (already exist): ${skipped}`);
}

convert().catch(console.error);
