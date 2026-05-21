/**
 * After `astro build`: validate sitemap output, emit sitemap.xml + urllist.txt.
 * Reads dist/sitemap-0.xml (from @astrojs/sitemap). Fails the build on mismatch.
 */
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const siteOrigin = 'https://lscss.crayonsandco.de';
const sitemap0Path = path.join(dist, 'sitemap-0.xml');
const indexPath = path.join(dist, 'sitemap-index.xml');

if (!fs.existsSync(sitemap0Path)) {
    console.error('generate-discovery-files: dist/sitemap-0.xml missing — is @astrojs/sitemap enabled?');
    process.exit(1);
}

const sitemap0 = fs.readFileSync(sitemap0Path, 'utf8');
const urls = [...sitemap0.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).sort();

if (urls.length === 0) {
    console.error('generate-discovery-files: no URLs in sitemap-0.xml');
    process.exit(1);
}

const errors = [];

for (const url of urls) {
    if (!url.startsWith(`${siteOrigin}/`) && url !== `${siteOrigin}/`) {
        errors.push(`URL not on site origin: ${url}`);
    }
    try {
        const parsed = new URL(url);
        if (parsed.protocol !== 'https:') {
            errors.push(`URL must be HTTPS: ${url}`);
        }
    } catch {
        errors.push(`Invalid URL: ${url}`);
    }
}

const duplicates = urls.filter((u, i) => urls.indexOf(u) !== i);
if (duplicates.length) {
    errors.push(`Duplicate URLs: ${[...new Set(duplicates)].join(', ')}`);
}

if (!sitemap0.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
    errors.push('sitemap-0.xml missing sitemaps.org urlset namespace');
}

if (!fs.existsSync(indexPath)) {
    errors.push('dist/sitemap-index.xml missing');
} else {
    const index = fs.readFileSync(indexPath, 'utf8');
    if (!index.includes(`${siteOrigin}/sitemap-0.xml`)) {
        errors.push('sitemap-index.xml does not reference sitemap-0.xml');
    }
}

if (errors.length) {
    console.error('generate-discovery-files: validation failed:\n', errors.join('\n'));
    process.exit(1);
}

// Flat sitemap.xml (common crawler expectation) — same urlset as sitemap-0.xml
fs.copyFileSync(sitemap0Path, path.join(dist, 'sitemap.xml'));

// Plain URL list for crawlers and tooling (one absolute URL per line)
fs.writeFileSync(path.join(dist, 'urllist.txt'), `${urls.join('\n')}\n`, 'utf8');

const expectedIndexedPages = 46;

if (urls.length !== expectedIndexedPages) {
    console.warn(
        `generate-discovery-files: expected ${expectedIndexedPages} indexed URLs, got ${urls.length} (update expectedIndexedPages if sitemap filter changed).`
    );
}

console.log(
    `generate-discovery-files: ${urls.length} URLs — sitemap.xml, urllist.txt written; sitemap valid.`
);
