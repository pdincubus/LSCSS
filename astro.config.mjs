import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { siteContentUpdated } from './scripts/site-seo-constants.mjs';

/** Paths excluded from sitemap (still reachable; search is noindex). */
function sitemapFilter(page) {
    return !page.includes('/search/');
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
    ]
});
