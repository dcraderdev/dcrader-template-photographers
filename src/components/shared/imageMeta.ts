// Build-time image metadata. Reads intrinsic dimensions from public/images/ via sharp,
// and discovers which responsive widths exist per base name.
// Cached for the lifetime of the build (Astro evaluates this once at SSG time).
import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const IMG_DIR = path.join(PUBLIC_DIR, 'images');

type Meta = {
  width: number;
  height: number;
  widths: number[];           // ascending list of widths available for this base+format
  base: string;
  ext: 'webp' | 'jpg' | 'jpeg' | 'png';
  hasAvif: boolean;
};

const cache = new Map<string, Meta>();
type WidthIndex = Map<string, { webp: Set<number>; avif: Set<number> }>;
let widthsPromise: Promise<WidthIndex> | null = null;

function indexWidths(): Promise<WidthIndex> {
  if (widthsPromise) return widthsPromise;
  widthsPromise = (async () => {
    const index: WidthIndex = new Map();
    const files = await readdir(IMG_DIR).catch(() => [] as string[]);
    for (const f of files) {
      const m = f.match(/^(.+)-(\d+)\.(webp|avif|jpg|jpeg|png)$/i);
      if (!m) continue;
      const [, base, wStr, extRaw] = m;
      const ext = extRaw.toLowerCase();
      const w = parseInt(wStr, 10);
      if (!index.has(base)) index.set(base, { webp: new Set(), avif: new Set() });
      const entry = index.get(base)!;
      if (ext === 'avif') entry.avif.add(w);
      else entry.webp.add(w); // group jpg/jpeg/png/webp under "webp" key — all act as the <img> fallback
    }
    return index;
  })();
  return widthsPromise;
}

export async function getImageMeta(srcPath: string): Promise<Meta | null> {
  if (cache.has(srcPath)) return cache.get(srcPath)!;
  const m = srcPath.match(/^\/images\/(.+)-(\d+)\.(webp|jpg|jpeg|png)$/i);
  if (!m) return null;
  const [, base, , extRaw] = m;
  const ext = extRaw.toLowerCase() as Meta['ext'];

  const idx = await indexWidths();
  const entry = idx.get(base);
  if (!entry) return null;

  const fallbackWidths = [...entry.webp].sort((a, b) => a - b);
  const avifWidths = [...entry.avif].sort((a, b) => a - b);
  const largestFallback = fallbackWidths[fallbackWidths.length - 1];
  const largestPath = path.join(IMG_DIR, `${base}-${largestFallback}.${ext === 'webp' ? 'webp' : extRaw}`);

  let dims: { width: number; height: number };
  try {
    const meta = await sharp(largestPath).metadata();
    dims = { width: meta.width || largestFallback, height: meta.height || largestFallback };
  } catch {
    return null;
  }

  const result: Meta = {
    width: dims.width,
    height: dims.height,
    widths: fallbackWidths,
    base,
    ext,
    hasAvif: avifWidths.length > 0,
  };
  cache.set(srcPath, result);
  return result;
}

export function buildSrcset(base: string, widths: number[], ext: string): string {
  return widths.map(w => `/images/${base}-${w}.${ext} ${w}w`).join(', ');
}

export function aspectRatioHeight(intrinsicW: number, intrinsicH: number, displayW: number): number {
  return Math.round((intrinsicH / intrinsicW) * displayW);
}
