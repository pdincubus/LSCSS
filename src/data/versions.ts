export const currentVersion = '0.2';

export interface LscssVersion {
    version: string;
    label: string;
    status: 'current' | 'archived' | 'draft';
    href: string;
    description: string;
    releasedAt: string;
}

export const versions: LscssVersion[] = [
    {
        version: '0.2',
        label: '0.2',
        status: 'current',
        href: '/reference/versions/',
        description: 'Category-first URL migration release with updated navigation, internal links, and documentation structure.',
        releasedAt: '2026-05-11'
    },
    {
        version: '0.1',
        label: '0.1',
        status: 'archived',
        href: '/reference/versions/',
        description: 'Initial public draft covering layers, semantic naming, scoped selectors, modern CSS features, migration, and tooling.',
        releasedAt: '2026-04-01'
    }
];
