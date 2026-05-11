import fs from 'node:fs';
import path from 'node:path';

const src = path.resolve('dist/pagefind');
const dest = path.resolve('public/pagefind');

if (!fs.existsSync(src)) {
    console.warn('copy-pagefind-to-public: dist/pagefind missing — run pagefind after astro build.');
    process.exit(0);
}

fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(src, dest, { recursive: true });
console.log('Copied dist/pagefind → public/pagefind (for astro dev and static hosting).');
