import sharp from 'sharp';
import path from 'node:path';
import fs from 'node:fs/promises';

const images = [
  { svg: 'og-home.svg', png: 'og-home.png' },
  { svg: 'og-about.svg', png: 'og-about.png' },
  { svg: 'og-portfolio.svg', png: 'og-portfolio.png' },
  { svg: 'og-contact.svg', png: 'og-contact.png' }
];

const inDir = path.join(process.cwd(), 'public', 'images');

async function convertAll() {
  for (const { svg, png } of images) {
    const input = path.join(inDir, svg);
    const output = path.join(inDir, png);
    try {
      const buf = await fs.readFile(input);
      await sharp(buf, { density: 320 })
        .resize(1200, 630, { fit: 'cover' })
        .png({ quality: 90 })
        .toFile(output);
      console.log(`Generated: ${output}`);
    } catch (err) {
      console.error(`Failed for ${svg}:`, err.message);
      process.exitCode = 1;
    }
  }
}

convertAll();
