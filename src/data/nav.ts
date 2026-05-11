export const primaryNav = [
    { href: '/', label: 'Home' },
    { href: '/learn/what-is-lscss/', label: 'Learn' },
    { href: '/apply/methodology/', label: 'Apply' },
    { href: '/teams/adoption/', label: 'Teams' },
    { href: '/writing/guides/', label: 'Writing' },
    { href: '/modern-css/', label: 'Modern CSS' },
    { href: '/search/', label: 'Search' }
];

export interface SiteNavLink {
    href: string;
    label: string;
    /** Indented sub-link (e.g. topics under Core methodology in Apply). */
    indent?: boolean;
}

export interface SiteNavSection {
    label: string;
    href: string;
    links: SiteNavLink[];
}

export const siteNavSections: SiteNavSection[] = [
    {
        label: 'Learn',
        href: '/learn/what-is-lscss/',
        links: [
            { href: '/learn/what-is-lscss/', label: 'What is LSCSS?' },
            { href: '/learn/principles/', label: 'Principles' },
            { href: '/learn/glossary/', label: 'Glossary' },
            { href: '/learn/faq/', label: 'FAQ' },
            { href: '/learn/comparisons/', label: 'Comparisons overview' },
            { href: '/learn/comparisons/bem-vs-lscss/', label: 'BEM vs LSCSS', indent: true },
            { href: '/learn/comparisons/tailwind-vs-lscss/', label: 'Tailwind vs LSCSS', indent: true },
            { href: '/learn/comparisons/utility-first-vs-lscss/', label: 'Utility-first vs LSCSS', indent: true },
            { href: '/learn/comparisons/css-modules-vs-lscss/', label: 'CSS Modules vs LSCSS', indent: true },
            { href: '/learn/comparisons/scope-vs-lscss/', label: '@scope and LSCSS', indent: true },
            { href: '/learn/anti-pattern-gallery/', label: 'Anti-pattern gallery' },
            { href: '/learn/anti-patterns/', label: 'Anti-patterns' }
        ]
    },
    {
        label: 'Apply',
        href: '/apply/methodology/',
        links: [
            { href: '/apply/methodology/', label: 'Core methodology overview' },
            { href: '/apply/layers/', label: 'Layers', indent: true },
            { href: '/apply/base-styles/', label: 'Base styles', indent: true },
            { href: '/apply/naming/', label: 'Naming', indent: true },
            { href: '/apply/modifiers-and-state/', label: 'Modifiers and state', indent: true },
            { href: '/apply/architecture/', label: 'Architecture', indent: true },
            { href: '/apply/utilities/', label: 'Utilities', indent: true },
            { href: '/apply/theme-layer/', label: 'Theme layer', indent: true },
            { href: '/apply/hacks/', label: 'Hacks', indent: true },
            { href: '/apply/decision-trees/', label: 'Decision trees' },
            { href: '/apply/examples/', label: 'Examples' },
            { href: '/apply/tooling/', label: 'Tooling' },
            { href: '/apply/live-examples/', label: 'Live examples' },
            { href: '/apply/starter-template/', label: 'Starter template' },
            { href: '/apply/migration/', label: 'Migration' }
        ]
    },
    {
        label: 'Teams',
        href: '/teams/adoption/',
        links: [
            { href: '/teams/adoption/', label: 'Adoption' },
            { href: '/teams/teaching-deck/', label: 'Teaching deck' },
            { href: '/teams/governance/', label: 'Governance' },
            { href: '/teams/team-governance/', label: 'Team governance' },
            { href: '/teams/contributing/', label: 'Contribution standards' },
            { href: '/apply/audit-checklist/', label: 'Audit checklist' }
        ]
    },
    {
        label: 'Writing',
        href: '/writing/guides/',
        links: [
            { href: '/writing/guides/', label: 'Guides overview' },
            { href: '/writing/guides/accessibility-and-css/', label: 'Accessibility and CSS', indent: true },
            { href: '/writing/guides/performance-and-css/', label: 'Performance and CSS', indent: true },
            { href: '/writing/guides/browser-support-strategy/', label: 'Browser Support Strategy', indent: true },
            { href: '/writing/guides/migrating-legacy-css/', label: 'Migrating Legacy CSS', indent: true },
            { href: '/writing/articles/', label: 'Articles overview' },
            { href: '/writing/articles/css-scope-and-lscss/', label: '@scope and LSCSS', indent: true },
            { href: '/writing/articles/methodology-evolution/', label: 'Methodology Evolution', indent: true }
        ]
    },
    {
        label: 'Modern CSS',
        href: '/modern-css/',
        links: [
            { href: '/modern-css/', label: 'Overview' },
            { href: '/modern-css/where/', label: ':where()', indent: true },
            { href: '/modern-css/is/', label: ':is()', indent: true },
            { href: '/modern-css/has/', label: ':has()', indent: true },
            { href: '/modern-css/not/', label: ':not()', indent: true },
            { href: '/modern-css/nesting/', label: 'Nesting', indent: true },
            { href: '/modern-css/container-queries/', label: 'Container queries', indent: true },
            { href: '/modern-css/logical-properties/', label: 'Logical properties', indent: true },
            { href: '/modern-css/view-transitions/', label: 'View transitions', indent: true }
        ]
    },
    {
        label: 'Search',
        href: '/search/',
        links: []
    }
];

/** Trailing slash for non-root paths; used by header and footer nav. */
export function normaliseSitePath(path: string): string {
    if (path === '/') {
        return path;
    }

    return path.endsWith('/') ? path : `${path}/`;
}

export function isSitePathCurrent(currentPath: string, href: string): boolean {
    return normaliseSitePath(currentPath) === normaliseSitePath(href);
}

export const docsNav = [
    {
        heading: 'Guides',
        links: [
            { href: '/learn/principles/', label: 'Principles' },
            { href: '/apply/methodology/', label: 'Core methodology' },
            { href: '/apply/layers/', label: 'Layers' },
            { href: '/apply/naming/', label: 'Naming' },
            { href: '/apply/modifiers-and-state/', label: 'Modifiers & State' },
            { href: '/apply/architecture/', label: 'Architecture' },
            { href: '/apply/utilities/', label: 'Utilities' },
            { href: '/apply/theme-layer/', label: 'Theme layer' },
            { href: '/apply/hacks/', label: 'Hacks' },
            { href: '/apply/tooling/', label: 'Tooling' },
            { href: '/apply/browser-support/', label: 'Browser support' }
        ]
    },
    {
        heading: 'Modern CSS',
        links: [
            { href: '/modern-css/', label: 'Overview' },
            { href: '/modern-css/where/', label: ':where()' },
            { href: '/modern-css/is/', label: ':is()' },
            { href: '/modern-css/has/', label: ':has()' },
            { href: '/modern-css/not/', label: ':not()' },
            { href: '/modern-css/nesting/', label: 'Nesting' },
            { href: '/modern-css/container-queries/', label: 'Container queries' },
            { href: '/modern-css/logical-properties/', label: 'Logical properties' },
            { href: '/modern-css/view-transitions/', label: 'View transitions' }
        ]
    },
    {
        heading: 'Practice',
        links: [
            { href: '/apply/examples/', label: 'Examples' },
            { href: '/learn/comparisons/', label: 'Comparisons' },
            { href: '/apply/migration/', label: 'Migration' },
            { href: '/learn/anti-patterns/', label: 'Anti-patterns' },
            { href: '/apply/accessibility/', label: 'Accessibility' },
            { href: '/apply/performance/', label: 'Performance' },
            { href: '/apply/design-tokens/', label: 'Design tokens' },
            { href: '/teams/team-governance/', label: 'Team governance' },
            { href: '/apply/diagrams/', label: 'Diagrams' },
            { href: '/apply/starter-template/', label: 'Starter template' },
            { href: '/learn/faq/', label: 'FAQ' }
        ]
    }
];
