import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { siteContentUpdated } from './scripts/site-seo-constants.mjs';

/** Paths excluded from sitemap (still reachable; search is noindex). */
function sitemapFilter(page) {
    return !page.includes('/search/');
}

/** Prism component files invoke `(function (Prism) { … }(Prism))`; in strict ESM that bare `Prism` is undefined. */
function prismComponentsGlobal() {
    const prismFreeIdentifier = /(?<![.\w$])Prism\./g;

    return {
        name: 'prism-components-global',
        transform(code, id) {
            if (!id.includes('node_modules/prismjs/components/')) {
                return null;
            }

            if (!/\}\(Prism\)/.test(code) && !prismFreeIdentifier.test(code)) {
                return null;
            }

            prismFreeIdentifier.lastIndex = 0;

            return {
                code: code
                    .replace(/\}\(Prism\)/g, '}(globalThis.Prism)')
                    .replace(prismFreeIdentifier, 'globalThis.Prism.'),
                map: null
            };
        },
        renderChunk(code, chunk) {
            if (!chunk.fileName.includes('prism-setup')) {
                return null;
            }

            prismFreeIdentifier.lastIndex = 0;

            if (!prismFreeIdentifier.test(code)) {
                return null;
            }

            prismFreeIdentifier.lastIndex = 0;

            return {
                code: code.replace(prismFreeIdentifier, 'globalThis.Prism.'),
                map: null
            };
        }
    };
}

export default defineConfig({
    site: 'https://lscss.crayonsandco.de',
    trailingSlash: 'always',

    redirects: {
        '/teams/team-governance/': '/teams/governance/',
        '/learn/comparisons/utility-first-vs-lscss/': '/learn/comparisons/tailwind-vs-lscss/'
    },

    integrations: [
        mdx(),
        sitemap({
            filter: sitemapFilter,
            serialize(item) {
                item.lastmod = new Date(siteContentUpdated);
                return item;
            }
        })
    ],

    vite: {
        plugins: [prismComponentsGlobal()]
    }
});
