import type { MigrationEffortTier, MigrationMilestone } from '../types/migration';

export const migrationPathSteps: string[] = [
    'Introduce the layer order first.',
    'Move old CSS into the legacy layer.',
    'Put tokens and settings in the settings layer.',
    'Move broad element defaults into base.',
    'Write all new work as proper component partials.',
    'Reduce selector depth when touching existing code.',
    'Replace unclear names with semantic component ownership.',
    'Use modifiers for variants and state classes for temporary state.',
    'Move emergency fixes into hacks with comments.',
    'Delete old CSS when the UI is replaced.'
];

export const migrationMilestones: MigrationMilestone[] = [
    {
        phase: 'Milestone 1',
        title: 'Contain legacy',
        description: 'Layer order is defined and inherited CSS is isolated in legacy or thirdparty.'
    },
    {
        phase: 'Milestone 2',
        title: 'Stabilise new work',
        description: 'New components follow naming, state, and token rules without exceptions.'
    },
    {
        phase: 'Milestone 3',
        title: 'Shrink legacy',
        description: 'Legacy selectors and files get smaller release by release.'
    },
    {
        phase: 'Milestone 4',
        title: 'Retire hacks',
        description: 'Temporary fixes are tracked and removed on a regular cadence.'
    }
];

export const migrationEffortTiers: MigrationEffortTier[] = [
    {
        size: 'Small codebase',
        duration: '1–3 sprints',
        note: 'Enough for a stable migration baseline when one team owns most of the CSS.'
    },
    {
        size: 'Mid-size codebase',
        duration: '1–2 quarters',
        note: 'Broad consistency across active products and shared partials.'
    },
    {
        size: 'Large or multi-team',
        duration: 'Multiple quarters',
        note: 'Phased rollout with governance, reviews, and measurable legacy reduction.'
    }
];
