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

export interface DocsNavItem {
    href: string;
    label: string;
    section: string;
    /** When set, the docs sidebar nests this item under the link with this href. */
    parentHref?: string;
}

type LegacyDocsGroup = 'Guides' | 'Practice';

interface NavigationLink {
    href: string;
    label: string;
    docsLabel?: string;
    parentHref?: string;
    indent?: boolean;
    legacyDocsGroup?: LegacyDocsGroup;
    legacyDocsLabel?: string;
    legacyDocsOrder?: number;
}

interface NavigationSection {
    label: string;
    href: string;
    links: NavigationLink[];
    includeInDocs?: boolean;
}

export const navigationSections: NavigationSection[] = [
    {
        label: 'Learn',
        href: '/learn/what-is-lscss/',
        links: [
            { href: '/learn/what-is-lscss/', label: 'What is LSCSS?' },
            { href: '/learn/principles/', label: 'Principles', legacyDocsGroup: 'Guides', legacyDocsOrder: 1 },
            { href: '/learn/glossary/', label: 'Glossary' },
            { href: '/learn/faq/', label: 'FAQ', legacyDocsGroup: 'Practice', legacyDocsOrder: 8 },
            { href: '/learn/comparisons/', label: 'Comparisons overview', legacyDocsGroup: 'Practice', legacyDocsLabel: 'Comparisons', legacyDocsOrder: 2 },
            {
                href: '/learn/comparisons/bem-vs-lscss/',
                label: 'BEM vs LSCSS',
                parentHref: '/learn/comparisons/',
                indent: true
            },
            {
                href: '/learn/comparisons/tailwind-vs-lscss/',
                label: 'Tailwind and utility-first vs LSCSS',
                parentHref: '/learn/comparisons/',
                indent: true
            },
            {
                href: '/learn/comparisons/css-modules-vs-lscss/',
                label: 'CSS Modules vs LSCSS',
                parentHref: '/learn/comparisons/',
                indent: true
            },
            {
                href: '/learn/comparisons/scope-vs-lscss/',
                label: '@scope and LSCSS',
                parentHref: '/learn/comparisons/',
                indent: true
            },
            { href: '/learn/anti-patterns/', label: 'Anti-patterns', legacyDocsGroup: 'Practice', legacyDocsOrder: 4 }
        ]
    },
    {
        label: 'Apply',
        href: '/apply/methodology/',
        links: [
            {
                href: '/apply/methodology/',
                label: 'Overview',
                docsLabel: 'Core methodology overview',
                legacyDocsGroup: 'Guides',
                legacyDocsLabel: 'Core methodology',
                legacyDocsOrder: 2
            },
            {
                href: '/apply/layers/',
                label: 'Layers',
                parentHref: '/apply/methodology/',
                indent: true,
                legacyDocsGroup: 'Guides',
                legacyDocsOrder: 3
            },
            {
                href: '/apply/base-styles/',
                label: 'Base styles',
                parentHref: '/apply/methodology/',
                indent: true
            },
            {
                href: '/apply/naming/',
                label: 'Naming',
                parentHref: '/apply/methodology/',
                indent: true,
                legacyDocsGroup: 'Guides',
                legacyDocsOrder: 4
            },
            {
                href: '/apply/modifiers-and-state/',
                label: 'Modifiers and state',
                parentHref: '/apply/methodology/',
                indent: true,
                legacyDocsGroup: 'Guides',
                legacyDocsLabel: 'Modifiers & State',
                legacyDocsOrder: 5
            },
            {
                href: '/apply/architecture/',
                label: 'Architecture',
                parentHref: '/apply/methodology/',
                indent: true,
                legacyDocsGroup: 'Guides',
                legacyDocsOrder: 6
            },
            {
                href: '/apply/utilities/',
                label: 'Utilities',
                parentHref: '/apply/methodology/',
                indent: true,
                legacyDocsGroup: 'Guides',
                legacyDocsOrder: 7
            },
            {
                href: '/apply/theme-layer/',
                label: 'Theme layer',
                parentHref: '/apply/methodology/',
                indent: true,
                legacyDocsGroup: 'Guides',
                legacyDocsOrder: 8
            },
            {
                href: '/apply/hacks/',
                label: 'Hacks',
                parentHref: '/apply/methodology/',
                indent: true,
                legacyDocsGroup: 'Guides',
                legacyDocsOrder: 9
            },
            { href: '/apply/decision-trees/', label: 'Decision trees' },
            { href: '/apply/examples/', label: 'Examples', legacyDocsGroup: 'Practice', legacyDocsOrder: 1 },
            { href: '/apply/starter-template/', label: 'Starter template', legacyDocsGroup: 'Practice', legacyDocsOrder: 7 },
            { href: '/apply/tooling/', label: 'Tooling', legacyDocsGroup: 'Guides', legacyDocsOrder: 10 },
            { href: '/apply/migration/', label: 'Migration', legacyDocsGroup: 'Practice', legacyDocsOrder: 3 },
            { href: '/apply/design-tokens/', label: 'Design tokens', legacyDocsGroup: 'Practice', legacyDocsOrder: 5 },
            { href: '/apply/browser-support/', label: 'Browser support', legacyDocsGroup: 'Guides', legacyDocsOrder: 11 },
            { href: '/apply/native-css/', label: 'Native CSS features', legacyDocsGroup: 'Guides', legacyDocsOrder: 12 },
            { href: '/apply/audit-checklist/', label: 'Audit checklist', legacyDocsGroup: 'Guides', legacyDocsOrder: 13 }
        ]
    },
    {
        label: 'Teams',
        href: '/teams/adoption/',
        links: [
            { href: '/teams/adoption/', label: 'Adoption' },
            { href: '/teams/teaching-deck/', label: 'Teaching deck' },
            { href: '/teams/contributing/', label: 'Contribution standards' },
            { href: '/teams/governance/', label: 'Governance', legacyDocsGroup: 'Practice', legacyDocsOrder: 6 }
        ]
    },
    {
        label: 'Writing',
        href: '/writing/guides/',
        links: [
            { href: '/writing/guides/', label: 'Guides overview' },
            {
                href: '/writing/guides/accessibility-and-css/',
                label: 'Accessibility and CSS',
                parentHref: '/writing/guides/',
                indent: true
            },
            {
                href: '/writing/guides/performance-and-css/',
                label: 'Performance and CSS',
                parentHref: '/writing/guides/',
                indent: true
            },
            {
                href: '/writing/guides/browser-support-strategy/',
                label: 'Browser Support Strategy',
                docsLabel: 'Browser support strategy',
                parentHref: '/writing/guides/',
                indent: true
            },
            {
                href: '/writing/guides/migrating-legacy-css/',
                label: 'Migrating Legacy CSS',
                docsLabel: 'Migrating legacy CSS',
                parentHref: '/writing/guides/',
                indent: true
            },
            { href: '/writing/articles/', label: 'Articles overview' },
            {
                href: '/writing/articles/css-scope-and-lscss/',
                label: '@scope and LSCSS',
                docsLabel: '@scope article',
                parentHref: '/writing/articles/',
                indent: true
            },
            {
                href: '/writing/articles/methodology-evolution/',
                label: 'Methodology Evolution',
                docsLabel: 'Methodology evolution',
                parentHref: '/writing/articles/',
                indent: true
            }
        ]
    },
    {
        label: 'Search',
        href: '/search/',
        includeInDocs: true,
        links: []
    }
];

export const primaryNav = [
    { href: '/', label: 'Home' },
    ...navigationSections.map((section) => ({
        href: section.href,
        label: section.label
    }))
];

export const siteNavSections: SiteNavSection[] = navigationSections.map((section) => ({
    label: section.label,
    href: section.href,
    links: section.links.map((link) => ({
        href: link.href,
        label: link.label,
        ...(link.indent ? { indent: true } : {})
    }))
}));

export const docsNavigation: DocsNavItem[] = navigationSections.flatMap((section) => {
    if (section.links.length === 0) {
        return section.includeInDocs === false
            ? []
            : [{ href: section.href, label: section.label, section: section.label }];
    }

    return section.links.map((link) => ({
        href: link.href,
        label: link.docsLabel ?? link.label,
        section: section.label,
        ...(link.parentHref ? { parentHref: link.parentHref } : {})
    }));
});

export const docsNav = (['Guides', 'Practice'] satisfies LegacyDocsGroup[]).map((heading) => ({
    heading,
    links: navigationSections
        .flatMap((section) => section.links)
        .filter((link) => link.legacyDocsGroup === heading)
        .sort((a, b) => (a.legacyDocsOrder ?? 0) - (b.legacyDocsOrder ?? 0))
        .map((link) => ({
            href: link.href,
            label: link.legacyDocsLabel ?? link.docsLabel ?? link.label
        }))
}));

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
