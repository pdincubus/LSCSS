import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

/** Legacy redirect HTML lives under these paths; keep them out of the sitemap. */
function isRedirectStubPage(pageUrl) {
    try {
        const { pathname } = new URL(pageUrl);
        const normalised = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;

        if (pathname.startsWith('/reference/')) {
            return true;
        }

        if (normalised === '/start/search') {
            return true;
        }

        if (normalised === '/starter-template') {
            return true;
        }

        return false;
    } catch {
        return true;
    }
}

const legacyToolSlugs = [
    'cascade-debugger',
    'render-performance-demos',
    'performance-demos',
    'accessibility-demos',
    'browser-support-demos',
    'accessibility-failures',
    'container-query-visualiser',
    'specificity-graph',
    'specificity-calculator',
    'devtools-inspector'
];

/** One trailing-slash key per source URL so Astro does not emit duplicate static routes. */
const legacyToolRedirects = Object.fromEntries(
    legacyToolSlugs.map((slug) => [`/reference/tools/${slug}/`, '/learn/what-is-lscss/'])
);

const modernCssSlugs = [
    '',
    'where',
    'is',
    'has',
    'not',
    'nesting',
    'container-queries',
    'logical-properties',
    'view-transitions'
];

const legacyModernCssRedirects = Object.fromEntries(
    modernCssSlugs.map((slug) => {
        const fromBase = slug ? `/reference/modern-css/${slug}` : '/reference/modern-css';
        const to = slug ? `/modern-css/${slug}/` : '/modern-css/';

        return [`${fromBase}/`, to];
    })
);

export default defineConfig({
    site: 'https://lscss.dev',
    trailingSlash: 'always',

    redirects: {
        '/starter-template/': '/apply/starter-template/',
        '/reference/tools/': '/learn/what-is-lscss/',
        '/reference/tools/layer-visualiser/': '/apply/layers/',
        '/reference/versions/': '/versions/',
        '/start/search/': '/search/',
        ...legacyModernCssRedirects,
        ...legacyToolRedirects
    },

    integrations: [
        mdx(),
        sitemap({
            filter: (page) => !isRedirectStubPage(page)
        })
    ]
});
