export interface DocsNavItem {
    href: string;
    label: string;
    section: string;
}

export const docsNavigation: DocsNavItem[] = [
    { href: '/', label: 'Overview', section: 'Start here' },
    { href: '/principles/', label: 'Principles', section: 'Start here' },
    { href: '/decision-trees/', label: 'Decision trees', section: 'Start here' },
    { href: '/anti-pattern-gallery/', label: 'Anti-pattern gallery', section: 'Start here' },

    { href: '/layers/', label: 'Layers', section: 'Core methodology' },
    { href: '/naming/', label: 'Naming', section: 'Core methodology' },
    { href: '/modifiers-and-state/', label: 'Modifiers and state', section: 'Core methodology' },
    { href: '/architecture/', label: 'Architecture', section: 'Core methodology' },
    { href: '/utilities/', label: 'Utilities', section: 'Core methodology' },
    { href: '/theme-layer/', label: 'Theme layer', section: 'Core methodology' },
    { href: '/hacks/', label: 'Hacks', section: 'Core methodology' },
    { href: '/tooling/', label: 'Tooling', section: 'Core methodology' },

    { href: '/modern-css/where/', label: ':where()', section: 'Modern CSS' },
    { href: '/modern-css/is/', label: ':is()', section: 'Modern CSS' },
    { href: '/modern-css/has/', label: ':has()', section: 'Modern CSS' },
    { href: '/modern-css/not/', label: ':not()', section: 'Modern CSS' },
    { href: '/modern-css/nesting/', label: 'Nesting', section: 'Modern CSS' },
    { href: '/modern-css/container-queries/', label: 'Container queries', section: 'Modern CSS' },
    { href: '/modern-css/logical-properties/', label: 'Logical properties', section: 'Modern CSS' },
    { href: '/modern-css/view-transitions/', label: 'View transitions', section: 'Modern CSS' },

    { href: '/examples/', label: 'Examples', section: 'Practice' },
    { href: '/live-examples/', label: 'Live examples', section: 'Practice' },
    { href: '/comparisons/', label: 'Comparisons', section: 'Practice' },
    { href: '/comparisons/scope-vs-bem/', label: '@scope vs BEM', section: 'Practice' },
    { href: '/comparisons/scope-vs-cube/', label: '@scope vs CUBE', section: 'Practice' },
    { href: '/comparisons/scope-vs-lscss/', label: '@scope and LSCSS', section: 'Practice' },
    { href: '/migration/', label: 'Migration', section: 'Practice' },
    { href: '/diagrams/', label: 'Diagrams', section: 'Practice' },
    { href: '/starter-template/', label: 'Starter template', section: 'Practice' },

    { href: '/playground/', label: 'Playground', section: 'Tools and demos' },
    { href: '/playground/live-editor/', label: 'Live editor', section: 'Tools and demos' },
    { href: '/specificity-visualiser/', label: 'Specificity visualiser', section: 'Tools and demos' },
    { href: '/tools/specificity-calculator/', label: 'Specificity calculator', section: 'Tools and demos' },
    { href: '/tools/specificity-graph/', label: 'Specificity graph', section: 'Tools and demos' },
    { href: '/tools/scope-demo/', label: 'Scope demo', section: 'Tools and demos' },
    { href: '/tools/container-query-visualiser/', label: 'Container query visualiser', section: 'Tools and demos' },
    { href: '/tools/accessibility-demos/', label: 'Accessibility demos', section: 'Tools and demos' },
    { href: '/tools/performance-demos/', label: 'Performance demos', section: 'Tools and demos' },
    { href: '/tools/render-performance-demos/', label: 'Render performance demos', section: 'Tools and demos' },
    { href: '/tools/browser-support-demos/', label: 'Browser support demos', section: 'Tools and demos' },
    { href: '/tools/devtools-inspector/', label: 'DevTools-style inspector', section: 'Tools and demos' },

    { href: '/accessibility/', label: 'Accessibility', section: 'Reference' },
    { href: '/design-tokens/', label: 'Design tokens', section: 'Reference' },
    { href: '/articles/', label: 'Articles', section: 'Reference' },
    { href: '/articles/css-scope-and-lscss/', label: '@scope article', section: 'Reference' },
    { href: '/articles/methodology-evolution/', label: 'Methodology evolution', section: 'Reference' },
    { href: '/faq/', label: 'FAQ', section: 'Reference' }
];
