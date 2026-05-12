export interface LscssVersion {
    version: string;
    label: string;
    status: 'current' | 'archived' | 'draft';
    href: string;
    /** Short summary of the release (site + docs + methodology tone). */
    description: string;
    releasedAt: string;
    /**
     * Concrete methodology or documentation moves introduced in this release
     * (new emphasis, restructured guidance, renamed concepts). Omit when nothing
     * material changed.
     */
    changed?: string[];
    /**
     * Guidance, sections, tools, or patterns we stopped presenting as part of LSCSS
     * or this site—say what replaced them when it helps readers migrate mentally.
     */
    removed?: string[];
}

export const versions: LscssVersion[] = [
    {
        version: '0.5',
        label: '0.5',
        status: 'current',
        href: '/versions/',
        description:
            'Site implementation aligned with LSCSS naming: temporary UI state uses `.is_*` with underscores; stable layout variants use BEM-style `--` modifiers on the owning block.',
        releasedAt: '2026-06-14',
        changed: [
            'Primary header mobile menu uses `.is_nav_open` on `.site-header` (state from interaction), with matching script and `site-header` styles.',
            'Documentation pagination uses a short `doc-pager` block with contextual children (`.link`, `.body`, `.name`) and modifiers `link--previous` / `link--next`, not `.is_*` classes, matching /apply/modifiers-and-state/.',
            'Site chrome moves from BEM `__` chains to LSCSS-style roots and short children: e.g. `hub-card` > `.link` / `.body`, `site-footer` > `.inner` / `.topics`, docs sidebar `disclosure` > `.toc` > `.list`, versions `release` > `.row` / `.changes`, and `site-search` for Pagefind.',
            'Removed the standalone `/modern-css/` guides from the site (nav, docs map, command palette, and writing links).',
            'Merged `/learn/anti-pattern-gallery/` into `/learn/anti-patterns/` as a single page.',
            'Removed the `/apply/diagrams/` placeholder page.',
            'Removed the `/apply/accessibility/` summary; accessibility and CSS live only under `/writing/guides/accessibility-and-css/`.',
            'Removed the `/apply/performance/` summary; performance content lives only under `/writing/guides/performance-and-css/`.',
            'Removed the `/apply/live-examples/` page in favour of `/apply/examples/`.',
            'Removed legacy `/start/search/` Astro redirect; search is only published at `/search/`.',
            'Dropped all `redirects` from `astro.config.mjs` so the site ships only current routes (no legacy `/reference/` or alias stubs).',
            'Expanded `/apply/browser-support/` with browserslist, build alignment, `@supports`, and a practical checklist; tightened the Browser Support Strategy guide links.'
        ],
        removed: [
            'The `/modern-css/` topic pages (overview, :where, :is, :has, :not, nesting, container queries, logical properties, view transitions). Methodology and examples remain under Learn and Apply; use MDN or similar for platform selector reference.',
            'The `/starter-template/` Astro redirect; the starter template is only published at `/apply/starter-template/`.',
            'The `/start/search/` Astro redirect; search lives only at `/search/`.',
            'The `/apply/diagrams/` placeholder page (thin content). Use methodology, architecture, and examples for visual structure instead.',
            'The `/apply/accessibility/` summary page; use the Writing guide at `/writing/guides/accessibility-and-css/` instead.',
            'The `/apply/performance/` summary page; use the Writing guide at `/writing/guides/performance-and-css/` instead.',
            'The `/apply/live-examples/` page; use `/apply/examples/` for documented patterns and snippets.'
        ]
    },
    {
        version: '0.4',
        label: '0.4',
        status: 'archived',
        href: '/versions/',
        description:
            'Discovery and technical SEO pass: sitemap and robots, canonical and social meta, richer RSS, structured data for FAQ and breadcrumbs, default share artwork, and cleaner legacy redirects aligned with trailing-slash URLs.',
        releasedAt: '2026-06-13',
        changed: [
            '@astrojs/sitemap builds sitemap-index.xml; public/robots.txt points crawlers at it and allows common documentation and AI crawlers.',
            'BaseLayout adds canonical URLs, Open Graph and Twitter Card tags, a default /images/og-default.svg share image (overridable per page), and an RSS autodiscovery link.',
            'RSS items now include guid, pubDate, and description; channel declares language.',
            'Learn FAQ ships FAQPage JSON-LD matching visible Q&A; docs breadcrumbs add BreadcrumbList JSON-LD with absolute URLs.',
            'Footer legal links include RSS feed and sitemap for quick access.',
            'Astro trailingSlash: always plus single trailing-slash keys for legacy redirects remove duplicate-route build warnings and match how internal links are written.'
        ],
        removed: [
            'Paired redirect config entries for the same legacy path with and without a trailing slash—replaced by one key per source and site-wide trailing-slash behaviour.'
        ]
    },
    {
        version: '0.3',
        label: '0.3',
        status: 'archived',
        href: '/versions/',
        description:
            'Retired the old interactive toolbox; flattened routes (/modern-css/, /search/, /versions/) with redirects from /reference/. Rebuilt global styles and tokens to match DESIGN.md. Added accessibility and AI transparency pages, refreshed the footer, tightened primary navigation, and improved the header on small and touch screens. Pagefind search works after a local build, with clearer errors when the index is missing.',
        releasedAt: '2026-06-12',
        changed: [
            'Information architecture: Modern CSS under /modern-css/, search under /search/, this history under /versions/; old /reference/… URLs redirect.',
            'Global CSS and design tokens rebuilt against DESIGN.md so the live site matches the agreed visual spec.',
            'Primary navigation calls out Modern CSS; footer links to the accessibility statement, AI transparency page, and this version log.',
            'Pagefind wired for search after build; clearer messaging when the index is absent in dev.'
        ],
        removed: [
            'The /reference/tools/ set (cascade debugger, specificity tools, container-query visualiser, performance and accessibility demos, browser-support demos, devtools-style inspector, and their assets) as a maintained surface. Apply, Learn, and Writing guides carry that teaching instead.',
            'The /reference/ catch-all: modern CSS and versions are top-level routes now; legacy URLs redirect.'
        ]
    },
    {
        version: '0.2',
        label: '0.2',
        status: 'archived',
        href: '/versions/',
        description:
            'Switched documentation to category-first URLs (Learn, Apply, Teams, Writing, Reference), then realigned navigation, sidebars, breadcrumbs, and internal links.',
        releasedAt: '2026-05-11',
        changed: [
            'Paths follow audience-facing categories instead of opaque folder names.',
            'Sidebars, breadcrumbs, and footer nav match the new map; internal links updated in bulk.',
            'Starter template lives under `/apply/starter-template/` as the canonical URL.'
        ],
        removed: [
            'Pre-migration URL shapes superseded by redirects (no duplicate pages for the same content).'
        ]
    },
    {
        version: '0.1',
        label: '0.1',
        status: 'archived',
        href: '/versions/',
        description:
            'First public draft: layers, semantic naming, shallow selectors, modern CSS, migration, tooling, and team-facing comparisons.',
        releasedAt: '2026-04-01',
        changed: [
            'Core framing: layer order and ownership, semantic naming, shallow selectors, utilities as exceptions, tokens, visible hacks, and incremental change.',
            'Modern CSS (selectors, nesting, container queries, logical properties, view transitions) documented alongside the methodology.',
            'Early migration, tooling, comparisons, and anti-pattern material for adoption and audits.'
        ]
    }
];
