#!/usr/bin/env node
// Re-compress any WebP fallback whose size exceeds the budget.
// Targets: -400.webp < 50KB (thumbnail), all other -*.webp < 200KB.
// AVIFs are already under budget and untouched.
import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'node:fs/promises';
import path from 'node:path';

const IMG_DIR = path.resolve('public/images');
const THUMB_BUDGET = 50 * 1024;
const STD_BUDGET = 200 * 1024;

const files = await readdir(IMG_DIR);
let totalBefore = 0, totalAfter = 0, touched = 0;

for (const f of files) {
  if (!f.endsWith('.webp')) continue;
  const m = f.match(/-(\d+)\.webp$/);
  if (!m) continue;
  const w = parseInt(m[1], 10);
  const fp = path.join(IMG_DIR, f);
  const s = await stat(fp);
  const budget = w <= 400 ? THUMB_BUDGET : STD_BUDGET;
  if (s.size <= budget) continue;

  totalBefore += s.size;

  // Step quality down until we hit the budget or floor at q=40.
  let q = 65;
  let outBuf;
  while (q >= 40) {
    outBuf = await sharp(fp).webp({ quality: q, effort: 6 }).toBuffer();
    if (outBuf.length <= budget) break;
    q -= 5;
  }
  // Write atomically.
  const tmp = fp + '.tmp';
  await sharp(outBuf).toFile(tmp);
  await rename(tmp, fp);
  const after = (await stat(fp)).size;
  totalAfter += after;
  touched++;
  console.log(`${f}: ${s.size} -> ${after} (q=${q}, budget=${budget})`);
}

console.log(`\nDone. touched=${touched} before=${totalBefore} after=${totalAfter} saved=${totalBefore - totalAfter}`);
