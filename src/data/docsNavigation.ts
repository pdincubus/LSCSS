export interface DocsNavItem {
    href: string;
    label: string;
    section: string;
}

export const docsNavigation: DocsNavItem[] = [
    { href: '/', label: 'Overview', section: 'Start here' },

    { href: '/learn/what-is-lscss/', label: 'What is LSCSS?', section: 'Learn' },
    { href: '/learn/principles/', label: 'Principles', section: 'Learn' },
    { href: '/learn/glossary/', label: 'Glossary', section: 'Learn' },
    { href: '/learn/faq/', label: 'FAQ', section: 'Learn' },

    { href: '/apply/decision-trees/', label: 'Decision trees', section: 'Apply' },
    { href: '/apply/examples/', label: 'Examples', section: 'Apply' },
    { href: '/apply/starter-template/', label: 'Starter template', section: 'Apply' },
    { href: '/apply/methodology/', label: 'Core methodology overview', section: 'Apply' },
    { href: '/apply/layers/', label: 'Layers', section: 'Apply' },
    { href: '/apply/base-styles/', label: 'Base styles', section: 'Apply' },
    { href: '/apply/naming/', label: 'Naming', section: 'Apply' },
    { href: '/apply/modifiers-and-state/', label: 'Modifiers and state', section: 'Apply' },
    { href: '/apply/architecture/', label: 'Architecture', section: 'Apply' },
    { href: '/apply/utilities/', label: 'Utilities', section: 'Apply' },
    { href: '/apply/theme-layer/', label: 'Theme layer', section: 'Apply' },
    { href: '/apply/hacks/', label: 'Hacks', section: 'Apply' },
    { href: '/apply/tooling/', label: 'Tooling', section: 'Apply' },
    { href: '/apply/migration/', label: 'Migration', section: 'Apply' },
    { href: '/apply/diagrams/', label: 'Diagrams', section: 'Apply' },
    { href: '/apply/live-examples/', label: 'Live examples', section: 'Apply' },

    { href: '/teams/adoption/', label: 'Adoption', section: 'Teams' },
    { href: '/teams/teaching-deck/', label: 'Teaching deck', section: 'Teams' },
    { href: '/teams/contributing/', label: 'Contribution standards', section: 'Teams' },
    { href: '/teams/governance/', label: 'Governance', section: 'Teams' },
    { href: '/apply/audit-checklist/', label: 'Audit checklist', section: 'Teams' },

    { href: '/learn/comparisons/', label: 'Comparisons overview', section: 'Learn' },
    { href: '/learn/comparisons/bem-vs-lscss/', label: 'BEM vs LSCSS', section: 'Learn' },
    { href: '/learn/comparisons/tailwind-vs-lscss/', label: 'Tailwind vs LSCSS', section: 'Learn' },
    { href: '/learn/comparisons/utility-first-vs-lscss/', label: 'Utility-first vs LSCSS', section: 'Learn' },
    { href: '/learn/comparisons/css-modules-vs-lscss/', label: 'CSS Modules vs LSCSS', section: 'Learn' },
    { href: '/learn/comparisons/scope-vs-lscss/', label: '@scope and LSCSS', section: 'Learn' },
    { href: '/learn/comparisons/scope-vs-bem/', label: '@scope vs BEM', section: 'Learn' },
    { href: '/learn/comparisons/scope-vs-cube/', label: '@scope vs CUBE', section: 'Learn' },
    { href: '/learn/anti-pattern-gallery/', label: 'Anti-pattern gallery', section: 'Learn' },

    { href: '/reference/modern-css/', label: 'Modern CSS overview', section: 'Reference' },
    { href: '/reference/modern-css/where/', label: ':where()', section: 'Reference' },
    { href: '/reference/modern-css/is/', label: ':is()', section: 'Reference' },
    { href: '/reference/modern-css/has/', label: ':has()', section: 'Reference' },
    { href: '/reference/modern-css/not/', label: ':not()', section: 'Reference' },
    { href: '/reference/modern-css/nesting/', label: 'Nesting', section: 'Reference' },
    { href: '/reference/modern-css/container-queries/', label: 'Container queries', section: 'Reference' },
    { href: '/reference/modern-css/logical-properties/', label: 'Logical properties', section: 'Reference' },
    { href: '/reference/modern-css/view-transitions/', label: 'View transitions', section: 'Reference' },
    { href: '/writing/guides/', label: 'Guides overview', section: 'Writing' },
    { href: '/writing/guides/accessibility-and-css/', label: 'Accessibility and CSS', section: 'Writing' },
    { href: '/writing/guides/performance-and-css/', label: 'Performance and CSS', section: 'Writing' },
    { href: '/writing/guides/browser-support-strategy/', label: 'Browser support strategy', section: 'Writing' },
    { href: '/writing/guides/migrating-legacy-css/', label: 'Migrating legacy CSS', section: 'Writing' },
    { href: '/apply/accessibility/', label: 'Accessibility', section: 'Reference' },
    { href: '/apply/design-tokens/', label: 'Design tokens', section: 'Reference' },
    { href: '/writing/articles/', label: 'Articles', section: 'Writing' },
    { href: '/writing/articles/css-scope-and-lscss/', label: '@scope article', section: 'Writing' },
    { href: '/writing/articles/methodology-evolution/', label: 'Methodology evolution', section: 'Writing' },
    { href: '/start/search/', label: 'Search', section: 'Reference' }
];
