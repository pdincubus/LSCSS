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
        version: '0.9',
        label: '0.9',
        status: 'current',
        href: '/versions/',
        description:
            'Design token ladder guidance, a full browser-support engineering page (custom media, feature baselines, support matrix templates), tabbed package-manager CLI examples, and a broad Apply documentation pass with shared teaching components.',
        releasedAt: '2026-06-01',
        changed: [
            'Documented the token ladder in DESIGN.md and /apply/design-tokens/: bare `--fs`, `--lh`, and `--space` as base steps; explicit size steps (`--fs-s` … `--fs-3xl`, `--space-2xs` … `--space-2xl`); `--br-*` for border radius (`--border-*` stays width). Live site styles updated to match.',
            'Rebuilt /apply/browser-support/ with browserslist (including feature queries), build-pipeline alignment, custom media and the build-step tradeoff, `@supports`, modern CSS capabilities (`:has()`, `:not()`, layers, container queries, and related), and copyable support matrix templates—feature baseline (CSS and optional JS/API rows) or version list, or both.',
            'Added `CliCommand` and `cliCommands.ts`: npm / pnpm / yarn tabs with copy for documented shell commands; wired on browser-support (browserslist) and /search/ local Pagefind setup; search-unavailable help links to that section instead of duplicating command strings.',
            'Expanded Apply teaching pages (layers, architecture, starter template, theme layer, migration with shared milestones/steps components, decision trees from data, comparisons hub and per-approach pages) and cross-linked tooling, tokens, and browser support across the map.',
            'Documentation read order: design tokens and browser support now sit before Teams adoption in `docsNavigation` (pager “Next” from browser support → adoption).',
            'Merged utility-first comparison into /learn/comparisons/tailwind-vs-lscss/ with redirects from the old utility-first URL; llms.txt and discovery copy updated.',
            'Shared UI for docs: `DecisionTree`, `FileTree`, `MigrationEffort`, `MigrationMilestones`, `MigrationSteps`, `ComparisonPairs`, and `comparison-table--plain` for skeleton tables on browser support.'
        ],
        removed: [
            'The standalone /learn/comparisons/utility-first-vs-lscss/ page; use /learn/comparisons/tailwind-vs-lscss/ (utility-first is covered there).',
            'Site-wide `--radius-*` custom properties in favour of `--br-*` for corner radius; update any forked CSS that still references the old names.'
        ]
    },
    {
        version: '0.8',
        label: '0.8',
        status: 'archived',
        href: '/versions/',
        description:
            'Naming guidance update: optional short component namespaces added as a collision-safety pattern without changing the default semantic naming model.',
        releasedAt: '2026-05-27',
        changed: [
            'Added optional component namespacing guidance to /apply/naming/ with examples for plain and prefixed selectors.',
            'Documented namespace guardrails: use only when collision risk is real, keep prefixes short (typically 2-4 characters), and preserve semantic component names after the prefix.',
            'Added a dedicated Namespaces section anchor in the naming page navigation for direct linking.',
            'Added selector-depth guidance to /apply/naming/ with practical limits for chain length, when descendant selectors are acceptable, and when to introduce a stable context hook instead of chaining through every wrapper.'
        ]
    },
    {
        version: '0.7',
        label: '0.7',
        status: 'archived',
        href: '/versions/',
        description:
            'SEO and AEO pass: richer structured data, discovery files for crawlers and LLMs, legal policy pages, Umami analytics, and editorial alignment on utility-first CSS.',
        releasedAt: '2026-05-21',
        changed: [
            'Canonical site URL set to lscss.crayonsandco.de across astro config, sitemap, robots, RSS, and policy copy.',
            'JSON-LD @graph on every page: Organization (Crayons and Code), WebSite with SearchAction, Person author URL, and article datePublished where applicable.',
            'Discovery files: sitemap.xml and urllist.txt generated at build time; public llms.txt for AI-oriented site summary; footer links to Versions, sitemap, and llms.txt.',
            'Privacy, cookie, and accessibility policy pages; Umami Cloud analytics with data-host-url for reliable collect requests.',
            'Sitemap excludes /search/ (noindex) and uses lastmod; comparison and FAQ copy states utility-first markup is poor architecture for long-lived sites.',
            'SiteBreadcrumbs and BreadcrumbList JSON-LD on policy and versions pages.',
            '/teams/team-governance/ redirects to /teams/governance/ — one governance guide, no summary stub.'
        ],
        removed: [
            'The standalone /teams/team-governance/ summary page (bullet-list stub); use /teams/governance/ instead.',
            'Neutral “utility-first is fine” framing on FAQ and Tailwind comparison pages in favour of explicit LSCSS editorial stance.'
        ]
    },
    {
        version: '0.6',
        label: '0.6',
        status: 'archived',
        href: '/versions/',
        description:
            'Visual refresh built on a new design token set and a clean-slate stylesheet. Space Grotesk and Space Mono carry the wordmark and code voice; indigo and violet lead, berry pink is held back for accent. Every layer of the cascade was rewritten from scratch so the live site demonstrates the methodology it documents.',
        releasedAt: '2026-05-13',
        changed: [
            'Design tokens replaced wholesale: a single `settings/tokens.css` now defines all colour, type, spacing, radius, shadow, focus, and z-index scales, with semantic tokens built on `light-dark()` for system theming.',
            'Stylesheets rebuilt in the canonical `legacy, settings, base, utilities, layout, components, theme, hacks` cascade layers; each component lives in its own partial and `site.css` is an import map only.',
            'Typography moved to Space Grotesk (body, headings, UI) and Space Mono (code), self-hosted as WOFF2: `@font-face` in `src/styles/settings/fonts.css` (URLs under `/fonts/…` at runtime) and `<link rel="preload" as="font" crossorigin>` in BaseLayout.',
            'Prism syntax highlighting is now themed against LSCSS colour tokens directly rather than the vendored Okaidia theme, so code blocks respect light and dark mode alongside the rest of the UI.',
            'Versions page markup uses `release-list` (was `versions-stack`) to match LSCSS naming: the list describes what the items are, not where they appear.',
            'Page chrome was simplified: the unused `versions-page` wrapper class was removed; `.page-shell` alone owns container width and vertical rhythm.',
            'Component selectors stay shallow throughout: short children under the owning root (`.hub-card > .link`, `.release > .row`, `.docs-sidebar .list`) instead of long BEM-style chains.'
        ],
        removed: [
            'Vendored Prism `okaidia` and the deprecated `prism-legacy.css` shim; code syntax colours come from `base/code.css` and the LSCSS palette.',
            'The `--colour-*`, `--font-*`, and ad-hoc design variables from the previous token system; everything now flows from the `tokens.css` semantic layer (`--c-*`, `--fs-*`, `--space-*`, `--br-*`, `--border-*`, `--shadow-*`, `--transition-*`).',
            'The `.versions-page` wrapper class on the versions index `<main>`; it carried no styling responsibility distinct from `.page-shell`.',
            'Unused component CSS (`example-card`, decoupled `decision-tree` styles, the standalone `command-palette` shell) was dropped to keep `components/` aligned with what the site actually renders.'
        ]
    },
    {
        version: '0.5',
        label: '0.5',
        status: 'archived',
        href: '/versions/',
        description:
            'Site implementation aligned with LSCSS naming: temporary UI state uses `.is_*` with underscores; stable layout variants use BEM-style `--` modifiers on the owning block.',
        releasedAt: '2026-05-12',
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
        releasedAt: '2026-05-11',
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
        releasedAt: '2026-05-10',
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
        releasedAt: '2026-05-09',
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
        releasedAt: '2026-05-08',
        changed: [
            'Core framing: layer order and ownership, semantic naming, shallow selectors, utilities as exceptions, tokens, visible hacks, and incremental change.',
            'Modern CSS (selectors, nesting, container queries, logical properties, view transitions) documented alongside the methodology.',
            'Early migration, tooling, comparisons, and anti-pattern material for adoption and audits.'
        ]
    }
];
