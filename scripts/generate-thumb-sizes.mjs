/**
 * Generate responsive thumbnail variants for project cards.
 * Creates 400w and 800w WebP versions of each *-thumb.webp file.
 *
 * Usage: node scripts/generate-thumb-sizes.mjs
 */

import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const DIR = 'public/images/work';
const SIZES = [400, 800];
const QUALITY = 80;

async function run() {
  const entries = await readdir(DIR);
  const thumbs = entries.filter((f) => f.endsWith('-thumb.webp'));

  for (const file of thumbs) {
    const src = path.join(DIR, file);
    const base = file.replace('.webp', '');

    for (const w of SIZES) {
      const out = path.join(DIR, `${base}-${w}.webp`);

      try {
        await stat(out);
        console.log(`  skip ${path.basename(out)} (exists)`);
        continue;
      } catch {}

      const meta = await sharp(src).metadata();

      // Don't upscale — if the source is smaller than the target, copy at original size
      const targetW = Math.min(w, meta.width);
      await sharp(src).resize(targetW).webp({ quality: QUALITY }).toFile(out);

      const outStat = await stat(out);
      console.log(`  ✓ ${path.basename(out)}  ${targetW}px  ${(outStat.size / 1024).toFixed(0)}KB`);
    }
  }

  console.log('\nDone.');
}

run().catch(console.error);
