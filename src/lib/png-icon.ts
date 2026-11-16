import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

/** Rasteriza public/favicon.svg (monograma AF) para PNG no build. */
export async function faviconPng(size: number, padding = 0): Promise<Response> {
  const svg = await readFile(join(process.cwd(), 'public', 'favicon.svg'));
  const inner = size - padding * 2;
  let img = sharp(svg, { density: 512 }).resize(inner, inner);
  if (padding) img = img.extend({ top: padding, bottom: padding, left: padding, right: padding, background: '#f7f4ec' });
  const png = await img.png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}
