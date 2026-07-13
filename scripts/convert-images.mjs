// Convert magi PNGs in _magi_tmp/ to optimised WebP in public/images/phases/.
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import { join, parse } from 'node:path';

const SRC = '_magi_tmp';
const OUT = 'public/images/phases';

await mkdir(OUT, { recursive: true });
const files = (await readdir(SRC)).filter((f) => f.toLowerCase().endsWith('.png'));

for (const f of files) {
  const { name } = parse(f);
  const out = join(OUT, `${name}.webp`);
  await sharp(join(SRC, f))
    .resize(1280, 800, { fit: 'cover', position: 'attention' })
    .webp({ quality: 82 })
    .toFile(out);
  console.log('  wrote', out);
}
console.log(`Done: ${files.length} images.`);
