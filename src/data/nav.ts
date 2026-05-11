export const primaryNav = [
    { href: '/', label: 'Home' },
    { href: '/learn/what-is-lscss/', label: 'Learn' },
    { href: '/apply/decision-trees/', label: 'Apply' },
    { href: '/teams/adoption/', label: 'Teams' },
    { href: '/writing/guides/', label: 'Writing' },
    { href: '/start/search/', label: 'Search' }
];

export interface SiteNavSection {
    label: string;
    href: string;
    links: Array<{ href: string; label: string }>;
}

export const siteNavSections: SiteNavSection[] = [
    {
        label: 'Start here',
        href: '/',
        links: []
    },
    {
        label: 'Learn',
        href: '/learn/what-is-lscss/',
        links: [
            { href: '/learn/what-is-lscss/', label: 'What is LSCSS?' },
            { href: '/learn/principles/', label: 'Principles' },
            { href: '/learn/glossary/', label: 'Glossary' },
            { href: '/learn/faq/', label: 'FAQ' },
            { href: '/learn/comparisons/', label: 'Comparisons' },
            { href: '/learn/anti-pattern-gallery/', label: 'Anti-pattern Gallery' }
        ]
    },
    {
        label: 'Apply',
        href: '/apply/decision-trees/',
        links: [
            { href: '/apply/decision-trees/', label: 'Decision Trees' },
            { href: '/apply/examples/', label: 'Examples' },
            { href: '/apply/starter-template/', label: 'Starter Template' },
            { href: '/apply/migration/', label: 'Migration' }
        ]
    },
    {
        label: 'Teams',
        href: '/teams/adoption/',
        links: [
            { href: '/teams/adoption/', label: 'Adoption' },
            { href: '/teams/governance/', label: 'Governance' },
            { href: '/teams/contributing/', label: 'Contribution Standards' },
            { href: '/apply/audit-checklist/', label: 'Audit Checklist' }
        ]
    },
    {
        label: 'Writing',
        href: '/writing/guides/',
        links: [
            { href: '/writing/guides/', label: 'Guides Overview' },
            { href: '/writing/guides/accessibility-and-css/', label: 'Accessibility and CSS' },
            { href: '/writing/guides/performance-and-css/', label: 'Performance and CSS' },
            { href: '/writing/guides/browser-support-strategy/', label: 'Browser Support Strategy' },
            { href: '/writing/guides/migrating-legacy-css/', label: 'Migrating Legacy CSS' },
            { href: '/writing/articles/', label: 'Articles Overview' },
            { href: '/writing/articles/methodology-evolution/', label: 'Methodology Evolution' },
            { href: '/writing/articles/css-scope-and-lscss/', label: '@scope and LSCSS' }
        ]
    },
    {
        label: 'Search',
        href: '/start/search/',
        links: []
    }
];

export const docsNav = [
    {
        heading: 'Guides',
        links: [
            { href: '/learn/principles/', label: 'Principles' },
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
            { href: '/reference/modern-css/', label: 'Overview' },
            { href: '/reference/modern-css/where/', label: ':where()' },
            { href: '/reference/modern-css/is/', label: ':is()' },
            { href: '/reference/modern-css/has/', label: ':has()' },
            { href: '/reference/modern-css/not/', label: ':not()' },
            { href: '/reference/modern-css/nesting/', label: 'Nesting' },
            { href: '/reference/modern-css/container-queries/', label: 'Container queries' },
            { href: '/reference/modern-css/logical-properties/', label: 'Logical properties' },
            { href: '/reference/modern-css/view-transitions/', label: 'View transitions' }
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
