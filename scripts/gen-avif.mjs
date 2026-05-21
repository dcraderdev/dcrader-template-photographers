#!/usr/bin/env node
// Generate AVIF siblings for every existing .webp in public/images.
// Source the largest existing width per base name; resize down to 320/640/1024/1400/1920 when needed.
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const IMG_DIR = path.resolve('public/images');
const TARGET_WIDTHS = [320, 400, 640, 800, 1024, 1400, 1920];

function parseName(file) {
  const m = file.match(/^(.+)-(\d+)\.webp$/);
  if (!m) return null;
  return { base: m[1], width: parseInt(m[2], 10), file };
}

const files = await readdir(IMG_DIR);
const groups = new Map();
for (const f of files) {
  const p = parseName(f);
  if (!p) continue;
  if (!groups.has(p.base)) groups.set(p.base, []);
  groups.get(p.base).push(p);
}

let created = 0;
let skipped = 0;
for (const [base, entries] of groups) {
  entries.sort((a, b) => b.width - a.width);
  const largest = entries[0];
  const largestPath = path.join(IMG_DIR, largest.file);
  const largestMeta = await sharp(largestPath).metadata();
  const actualMaxW = largestMeta.width || largest.width;

  for (const w of TARGET_WIDTHS) {
    if (w > actualMaxW && w !== largest.width) continue; // don't upscale
    const targetW = Math.min(w, actualMaxW);
    const webpOut = path.join(IMG_DIR, `${base}-${w}.webp`);
    const avifOut = path.join(IMG_DIR, `${base}-${w}.avif`);

    if (!existsSync(webpOut)) {
      await sharp(largestPath).resize({ width: targetW, withoutEnlargement: true }).webp({ quality: 78 }).toFile(webpOut);
      created++;
      console.log('webp', webpOut);
    } else {
      skipped++;
    }
    if (!existsSync(avifOut)) {
      await sharp(largestPath).resize({ width: targetW, withoutEnlargement: true }).avif({ quality: 50 }).toFile(avifOut);
      created++;
      console.log('avif', avifOut);
    } else {
      skipped++;
    }
  }
}

console.log(`Done. created=${created} skipped(existed)=${skipped}`);
