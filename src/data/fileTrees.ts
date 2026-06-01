import type { FileTreeRoot } from '../types/fileTree';

/** Recommended LSCSS folder layout (architecture page). */
export const architectureFolderTree: FileTreeRoot = {
    name: 'css',
    children: [
        { name: 'site.css', kind: 'file' },
        { name: 'settings', kind: 'folder' },
        { name: 'base', kind: 'folder' },
        { name: 'utilities', kind: 'folder' },
        { name: 'layout', kind: 'folder' },
        { name: 'components', kind: 'folder' },
        { name: 'theme', kind: 'folder' },
        {
            name: 'legacy',
            kind: 'folder',
            comment: 'inherited first-party CSS (optional)'
        },
        {
            name: 'thirdparty',
            kind: 'folder',
            comment: 'vendor CSS when split from legacy (optional)'
        },
        { name: 'hacks', kind: 'folder' }
    ]
};

/** Starter template with nested partials (starter-template page). */
export const starterFolderTree: FileTreeRoot = {
    name: 'css',
    children: [
        {
            name: 'critical.css',
            kind: 'file',
            comment: 'above-the-fold / every-page bundle'
        },
        {
            name: 'site.css',
            kind: 'file',
            comment: 'full import map, loaded after critical'
        },
        {
            name: 'settings',
            kind: 'folder',
            children: [
                { name: 'tokens.css', kind: 'file' },
                { name: 'media.css', kind: 'file' },
                { name: 'fonts.css', kind: 'file' }
            ]
        },
        {
            name: 'base',
            kind: 'folder',
            children: [
                { name: 'reset.css', kind: 'file' },
                { name: 'typography.css', kind: 'file' }
            ]
        },
        {
            name: 'helpers',
            kind: 'folder',
            children: [
                { name: 'vh.css', kind: 'file' },
                { name: 'a11y-link.css', kind: 'file' }
            ]
        },
        {
            name: 'layout',
            kind: 'folder',
            children: [{ name: 'site-head.css', kind: 'file' }]
        },
        {
            name: 'components',
            kind: 'folder',
            children: [
                { name: 'logo.css', kind: 'file' },
                { name: 'button.css', kind: 'file' },
                { name: 'main-nav.css', kind: 'file' },
                { name: 'card.css', kind: 'file' }
            ]
        },
        {
            name: 'theme',
            kind: 'folder',
            children: [{ name: 'brand.css', kind: 'file' }]
        },
        {
            name: 'legacy',
            kind: 'folder',
            children: [
                { name: 'vendor.css', kind: 'file' },
                { name: 'old-site.css', kind: 'file' }
            ]
        },
        {
            name: 'hacks',
            kind: 'folder',
            children: [{ name: 'temporary-fixes.css', kind: 'file' }]
        }
    ]
};
