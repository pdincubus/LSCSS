/**
 * Generates brand SVGs (outlined type — no webfont required) and PNG exports.
 * Run: pnpm run generate:brand
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as fontkit from 'fontkit';
import { Resvg } from '@resvg/resvg-js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const fontPath = join(root, 'public/fonts/space-grotesk-variable.woff2');
const font = fontkit.openSync(fontPath);

const colors = {
    bgStart: 'hsl(222 35% 12%)',
    bgEnd: 'hsl(222 47% 9%)',
    heading: 'hsl(222 18% 96%)',
    muted: 'hsl(222 10% 68%)',
    accent: 'hsl(322 100% 66%)',
    faviconBg: 'hsl(222 47% 11%)'
};

/** Max wght axis on the variable font file */
const WGHT_BOLD = 700;
const WGHT_MEDIUM = 600;
const WGHT_REGULAR = 500;

/**
 * fontkit does not vary glyph outlines via { wght } on this file — stroke thickens paths.
 * @param {string} d
 * @param {string} fill
 * @param {number} strokeWidth
 */
function pathMarkup(d, fill, strokeWidth = 0) {
    if (!strokeWidth) {
        return `<path fill="${fill}" d="${d}"/>`;
    }

    return `<path fill="${fill}" stroke="${fill}" stroke-width="${strokeWidth}" stroke-linejoin="round" paint-order="stroke fill" d="${d}"/>`;
}

/**
 * @param {string} text
 * @param {number} x
 * @param {number} baseline
 * @param {number} fontSize
 * @param {number} [wght]
 */
function textToPath(text, x, baseline, fontSize, wght = WGHT_BOLD) {
    const run = font.layout(text, { wght });
    const scale = fontSize / font.unitsPerEm;
    let pen = x;
    const parts = [];
    let minY = Infinity;
    let maxY = -Infinity;
    let minX = Infinity;
    let maxX = -Infinity;

    for (let i = 0; i < run.glyphs.length; i++) {
        const glyph = run.glyphs[i];
        const path = glyph.path.transform(scale, 0, 0, -scale, pen, baseline);
        parts.push(path.toSVG());
        const box = path.bbox;
        minY = Math.min(minY, box.minY);
        maxY = Math.max(maxY, box.maxY);
        minX = Math.min(minX, box.minX);
        maxX = Math.max(maxX, box.maxX);
        pen += run.positions[i].xAdvance * scale;
    }

    return {
        d: parts.join(''),
        advanceWidth: pen - x,
        bbox: { minX, minY, maxX, maxY }
    };
}

function round(value) {
    return Math.round(value * 100) / 100;
}

function buildOgSvg() {
    const wordmarkY = 280;
    const ls = textToPath('LS', 80, wordmarkY, 72, WGHT_BOLD);
    const css = textToPath('CSS', 80 + ls.advanceWidth, wordmarkY, 72, WGHT_BOLD);
    const subtitle = textToPath('Layered Semantic CSS', 80, 360, 32, WGHT_MEDIUM);
    const tagline = textToPath('Calm CSS architecture for real teams', 80, 420, 22, WGHT_REGULAR);

    const underlineHeight = 6;
    const underlineGap = 10;
    const underlineY = round(ls.bbox.maxY + underlineGap);
    const underlineX = 80;
    const underlineWidth = round(ls.advanceWidth);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="ogTitle">
    <title id="ogTitle">LSCSS — Layered Semantic CSS</title>
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${colors.bgStart}"/>
            <stop offset="100%" stop-color="${colors.bgEnd}"/>
        </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect
        x="${underlineX}"
        y="${underlineY}"
        width="${underlineWidth}"
        height="${underlineHeight}"
        rx="3"
        fill="${colors.accent}"
    />
    ${pathMarkup(ls.d, colors.heading, 4)}
    ${pathMarkup(css.d, colors.heading, 4)}
    ${pathMarkup(subtitle.d, colors.muted, 1.4)}
    ${pathMarkup(tagline.d, colors.muted, 1)}
</svg>
`;
}

function buildFaviconSvg() {
    const baseline = 20;
    const centerX = 16;
    const fontSize = 13;
    const strokeWidth = 1.1;
    const l = textToPath(
        'L',
        centerX - advanceWidth('L', fontSize, WGHT_BOLD) / 2,
        baseline,
        fontSize,
        WGHT_BOLD
    );

    /*
     * Match OG underline ratio (6px on 72px type). Align bar to ink box of L,
     * expanded by half the stroke so it lines up with the rendered glyph edges.
     */
    const underlineHeight = round((6 / 72) * fontSize);
    const underlineGap = 1.5;
    const underlinePad = strokeWidth / 2;
    const underlineY = round(l.bbox.maxY + underlineGap);
    const underlineX = round(l.bbox.minX - underlinePad);
    const underlineWidth = round(l.bbox.maxX - l.bbox.minX + strokeWidth);
    const underlineRx = round(underlineHeight / 2);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-label="LSCSS">
    <rect width="32" height="32" rx="7" fill="${colors.faviconBg}"/>
    ${pathMarkup(l.d, colors.heading, strokeWidth)}
    <rect
        x="${underlineX}"
        y="${underlineY}"
        width="${underlineWidth}"
        height="${underlineHeight}"
        rx="${underlineRx}"
        fill="${colors.accent}"
    />
</svg>
`;
}

/**
 * @param {string} text
 * @param {number} fontSize
 * @param {number} wght
 */
function advanceWidth(text, fontSize, wght) {
    const run = font.layout(text, { wght });
    let units = 0;

    for (const pos of run.positions) {
        units += pos.xAdvance || 0;
    }

    return units * (fontSize / font.unitsPerEm);
}

function renderPng(svg, outPath, width) {
    const opts = {
        fitTo: width ? { mode: 'width', value: width } : undefined
    };

    if (!width) {
        delete opts.fitTo;
    }

    const resvg = new Resvg(svg, opts);
    writeFileSync(outPath, resvg.render().asPng());
}

const ogSvg = buildOgSvg();
const faviconSvg = buildFaviconSvg();

writeFileSync(join(root, 'public/images/og-default.svg'), ogSvg);
writeFileSync(join(root, 'public/favicon.svg'), faviconSvg);
renderPng(ogSvg, join(root, 'public/images/og-default.png'));
renderPng(faviconSvg, join(root, 'public/apple-touch-icon.png'), 180);

console.log('Wrote public/images/og-default.svg');
console.log('Wrote public/images/og-default.png');
console.log('Wrote public/favicon.svg');
console.log('Wrote public/apple-touch-icon.png (180×180)');
