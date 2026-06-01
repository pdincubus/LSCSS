export interface DocsNavItem {
    href: string;
    label: string;
    section: string;
    /** When set, the docs sidebar nests this item under the link with this href. */
    parentHref?: string;
}

export const docsNavigation: DocsNavItem[] = [
    { href: '/learn/what-is-lscss/', label: 'What is LSCSS?', section: 'Learn' },
    { href: '/learn/principles/', label: 'Principles', section: 'Learn' },
    { href: '/learn/glossary/', label: 'Glossary', section: 'Learn' },
    { href: '/learn/faq/', label: 'FAQ', section: 'Learn' },

    { href: '/learn/comparisons/', label: 'Comparisons overview', section: 'Learn' },
    { href: '/learn/comparisons/bem-vs-lscss/', label: 'BEM vs LSCSS', section: 'Learn', parentHref: '/learn/comparisons/' },
    {
        href: '/learn/comparisons/tailwind-vs-lscss/',
        label: 'Tailwind and utility-first vs LSCSS',
        section: 'Learn',
        parentHref: '/learn/comparisons/'
    },
    {
        href: '/learn/comparisons/css-modules-vs-lscss/',
        label: 'CSS Modules vs LSCSS',
        section: 'Learn',
        parentHref: '/learn/comparisons/'
    },
    { href: '/learn/comparisons/scope-vs-lscss/', label: '@scope and LSCSS', section: 'Learn', parentHref: '/learn/comparisons/' },
    { href: '/learn/anti-patterns/', label: 'Anti-patterns', section: 'Learn' },

    { href: '/apply/methodology/', label: 'Core methodology overview', section: 'Apply' },
    { href: '/apply/layers/', label: 'Layers', section: 'Apply', parentHref: '/apply/methodology/' },
    { href: '/apply/base-styles/', label: 'Base styles', section: 'Apply', parentHref: '/apply/methodology/' },
    { href: '/apply/naming/', label: 'Naming', section: 'Apply', parentHref: '/apply/methodology/' },
    {
        href: '/apply/modifiers-and-state/',
        label: 'Modifiers and state',
        section: 'Apply',
        parentHref: '/apply/methodology/'
    },
    { href: '/apply/architecture/', label: 'Architecture', section: 'Apply', parentHref: '/apply/methodology/' },
    { href: '/apply/utilities/', label: 'Utilities', section: 'Apply', parentHref: '/apply/methodology/' },
    { href: '/apply/theme-layer/', label: 'Theme layer', section: 'Apply', parentHref: '/apply/methodology/' },
    { href: '/apply/hacks/', label: 'Hacks', section: 'Apply', parentHref: '/apply/methodology/' },

    { href: '/apply/decision-trees/', label: 'Decision trees', section: 'Apply' },
    { href: '/apply/examples/', label: 'Examples', section: 'Apply' },
    { href: '/apply/starter-template/', label: 'Starter template', section: 'Apply' },
    { href: '/apply/tooling/', label: 'Tooling', section: 'Apply' },
    { href: '/apply/migration/', label: 'Migration', section: 'Apply' },
    { href: '/apply/design-tokens/', label: 'Design tokens', section: 'Apply' },
    { href: '/apply/browser-support/', label: 'Browser support', section: 'Apply' },

    { href: '/teams/adoption/', label: 'Adoption', section: 'Teams' },
    { href: '/teams/teaching-deck/', label: 'Teaching deck', section: 'Teams' },
    { href: '/teams/contributing/', label: 'Contribution standards', section: 'Teams' },
    { href: '/teams/governance/', label: 'Governance', section: 'Teams' },
    { href: '/apply/audit-checklist/', label: 'Audit checklist', section: 'Teams' },

    { href: '/writing/guides/', label: 'Guides overview', section: 'Writing' },
    {
        href: '/writing/guides/accessibility-and-css/',
        label: 'Accessibility and CSS',
        section: 'Writing',
        parentHref: '/writing/guides/'
    },
    {
        href: '/writing/guides/performance-and-css/',
        label: 'Performance and CSS',
        section: 'Writing',
        parentHref: '/writing/guides/'
    },
    {
        href: '/writing/guides/browser-support-strategy/',
        label: 'Browser support strategy',
        section: 'Writing',
        parentHref: '/writing/guides/'
    },
    {
        href: '/writing/guides/migrating-legacy-css/',
        label: 'Migrating legacy CSS',
        section: 'Writing',
        parentHref: '/writing/guides/'
    },
    { href: '/writing/articles/', label: 'Articles overview', section: 'Writing' },
    {
        href: '/writing/articles/css-scope-and-lscss/',
        label: '@scope article',
        section: 'Writing',
        parentHref: '/writing/articles/'
    },
    {
        href: '/writing/articles/methodology-evolution/',
        label: 'Methodology evolution',
        section: 'Writing',
        parentHref: '/writing/articles/'
    },
    { href: '/search/', label: 'Search', section: 'Search' }
];
