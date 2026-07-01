export type NativeCssFeatureGroupId = 'use-now' | 'use-with-care' | 'watch-list';

export interface NativeCssFeatureGroup {
    id: NativeCssFeatureGroupId;
    title: string;
    shortLabel: string;
    description: string;
}

export interface NativeCssSource {
    label: string;
    href: string;
}

export const nativeCssSources = {
    baseline: {
        label: 'Baseline',
        href: 'https://web.dev/baseline/'
    },
    webdxBaseline: {
        label: 'WebDX Baseline',
        href: 'https://web-platform-dx.github.io/baseline/'
    },
    mdnBcd: {
        label: 'MDN browser-compat-data',
        href: 'https://github.com/mdn/browser-compat-data'
    },
    caniuse: {
        label: 'Can I Use',
        href: 'https://caniuse.com/'
    },
    browserslist: {
        label: 'Browserslist',
        href: 'https://github.com/browserslist/browserslist'
    },
    mdnLayer: {
        label: 'MDN @layer',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@layer'
    },
    mdnCustomProperties: {
        label: 'MDN custom properties',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/--*'
    },
    mdnProperty: {
        label: 'MDN @property',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@property'
    },
    mdnLogicalProperties: {
        label: 'MDN logical properties',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values'
    },
    mdnSelectors: {
        label: 'MDN selectors',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors'
    },
    mdnContainer: {
        label: 'MDN container queries',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries'
    },
    mdnLightDark: {
        label: 'MDN light-dark()',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark'
    },
    mdnCustomMedia: {
        label: 'MDN @custom-media',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@custom-media'
    },
    mdnNesting: {
        label: 'MDN CSS nesting',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting'
    },
    mdnHas: {
        label: 'MDN :has()',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:has'
    },
    mdnScope: {
        label: 'MDN @scope',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@scope'
    },
    mdnStartingStyle: {
        label: 'MDN @starting-style',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style'
    },
    mdnTransitionBehavior: {
        label: 'MDN transition-behavior',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-behavior'
    },
    mdnPopover: {
        label: 'MDN Popover API',
        href: 'https://developer.mozilla.org/en-US/docs/Web/API/Popover_API'
    },
    mdnCustomSelect: {
        label: 'MDN customisable select',
        href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select'
    },
    mdnDetailsContent: {
        label: 'MDN ::details-content',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::details-content'
    },
    mdnInterpolateSize: {
        label: 'MDN interpolate-size',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size'
    },
    mdnCalcSize: {
        label: 'MDN calc-size()',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/calc-size'
    },
    mdnAnchorPositioning: {
        label: 'MDN anchor positioning',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning'
    },
    mdnScrollTimeline: {
        label: 'MDN scroll-timeline',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-timeline'
    },
    mdnViewTransitions: {
        label: 'MDN view transitions',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_view_transitions'
    },
    mdnFieldSizing: {
        label: 'MDN field-sizing',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing'
    },
    mdnCustomFunctions: {
        label: 'MDN custom functions and mixins',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_custom_functions_and_mixins'
    },
    mdnSubgrid: {
        label: 'MDN subgrid',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid'
    }
} satisfies Record<string, NativeCssSource>;

export type NativeCssSourceId = keyof typeof nativeCssSources;

export interface NativeCssFeature {
    name: string;
    code?: string;
    group: NativeCssFeatureGroupId;
    summary: string;
    supportLabel: string;
    deliveryMode: string;
    recommendation: string;
    fallback: string;
    lastReviewed: string;
    sources: NativeCssSourceId[];
}

export const nativeCssFeatureGroups: NativeCssFeatureGroup[] = [
    {
        id: 'use-now',
        title: 'Use now',
        shortLabel: 'Use now',
        description:
            'Features LSCSS already treats as part of a modern evergreen baseline. Check your own matrix, but these should not need defensive ceremony in current projects.'
    },
    {
        id: 'use-with-care',
        title: 'Use with care',
        shortLabel: 'Gate or build',
        description:
            'Features worth using when they solve a real problem, but only with the delivery mode, fallback, or rule ordering documented beside the component.'
    },
    {
        id: 'watch-list',
        title: 'Watch list',
        shortLabel: 'Watch',
        description:
            'Features that could simplify LSCSS defaults or remove old workarounds later. Track them, prototype safely, but do not make them required without a project decision.'
    }
];

export const nativeCssCoreSourceIds: NativeCssSourceId[] = [
    'baseline',
    'webdxBaseline',
    'mdnBcd',
    'caniuse',
    'browserslist'
];

export const nativeCssFeatures: NativeCssFeature[] = [
    {
        name: 'Cascade layers',
        code: '@layer',
        group: 'use-now',
        summary: 'The architectural backbone for predictable override order.',
        supportLabel: 'Baseline widely available',
        deliveryMode: 'Native CSS',
        recommendation:
            'Use a single declared layer order and keep each file imported into its owning layer.',
        fallback:
            'No useful runtime fallback. If a project must support engines without layers, document that as a major architecture constraint.',
        lastReviewed: '2026-07-01',
        sources: ['baseline', 'mdnLayer']
    },
    {
        name: 'Custom properties and design tokens',
        code: '--token',
        group: 'use-now',
        summary: 'The safest way to share colour, spacing, type, radius, and component contracts.',
        supportLabel: 'Baseline widely available',
        deliveryMode: 'Native CSS',
        recommendation:
            'Use semantic tokens in settings and consume them from components instead of hard-coding values.',
        fallback:
            'Do not emit legacy duplicate declarations by default unless a product matrix explicitly needs them.',
        lastReviewed: '2026-07-01',
        sources: ['baseline', 'mdnCustomProperties']
    },
    {
        name: 'Registered custom properties',
        code: '@property',
        group: 'use-now',
        summary: 'Typed custom properties make tokens safer and allow custom values to animate predictably.',
        supportLabel: 'Baseline newly available',
        deliveryMode: 'Native CSS',
        recommendation:
            'Use for important typed tokens, animation values, and component contracts where validation, inheritance control, or interpolation adds clear value.',
        fallback:
            'Use ordinary custom properties first; rely on registration for enhancement unless the project matrix confirms support.',
        lastReviewed: '2026-07-01',
        sources: ['baseline', 'mdnProperty', 'mdnCustomProperties']
    },
    {
        name: 'Logical properties and values',
        group: 'use-now',
        summary: 'Flow-relative spacing, sizing, and borders reduce left/right assumptions.',
        supportLabel: 'Baseline widely available',
        deliveryMode: 'Native CSS',
        recommendation:
            'Prefer logical properties for layout, spacing, and borders; keep physical properties for genuinely physical directions.',
        fallback:
            'Use physical properties only when your support matrix or visual requirement demands them.',
        lastReviewed: '2026-07-01',
        sources: ['baseline', 'mdnLogicalProperties']
    },
    {
        name: 'Low-specificity selector helpers',
        code: ':is() / :where() / :not()',
        group: 'use-now',
        summary: 'Selector tools that reduce repetition without adding architecture by themselves.',
        supportLabel: 'Baseline widely available',
        deliveryMode: 'Native CSS',
        recommendation:
            'Use :where() to keep specificity low, :is() to remove repetition, and :not() for simple exclusions.',
        fallback:
            'Use longer explicit selectors if a legacy browser target cannot parse the helper.',
        lastReviewed: '2026-07-01',
        sources: ['baseline', 'mdnSelectors']
    },
    {
        name: 'Size container queries',
        code: '@container',
        group: 'use-now',
        summary: 'Components can respond to their container instead of guessing from viewport width.',
        supportLabel: 'Baseline widely available, with subfeatures to check',
        deliveryMode: 'Native CSS',
        recommendation:
            'Use size queries for portable components; name containers only when the name improves review clarity.',
        fallback:
            'Use viewport media queries or a simpler layout when the component can still work without container awareness.',
        lastReviewed: '2026-07-01',
        sources: ['baseline', 'mdnContainer']
    },
    {
        name: 'Scheme-aware token values',
        code: 'light-dark()',
        group: 'use-now',
        summary: 'A concise way to make semantic tokens resolve across light and dark schemes.',
        supportLabel: 'Project target dependent',
        deliveryMode: 'Native CSS',
        recommendation:
            'Use inside semantic tokens when your browserslist supports it, paired with an explicit color-scheme.',
        fallback:
            'Use explicit theme overrides or a build transform if older targets cannot parse the function.',
        lastReviewed: '2026-07-01',
        sources: ['mdnLightDark', 'browserslist']
    },
    {
        name: 'Custom media queries',
        code: '@custom-media',
        group: 'use-with-care',
        summary: 'Named breakpoints and preference queries are excellent for maintainability, but not natively dependable yet.',
        supportLabel: 'Limited natively',
        deliveryMode: 'Build transform',
        recommendation:
            'Use in the settings layer only when every CSS delivery path expands it before shipping.',
        fallback:
            'Ship ordinary @media rules, or keep a simpler responsive pattern for projects without a build step.',
        lastReviewed: '2026-07-01',
        sources: ['mdnCustomMedia', 'browserslist']
    },
    {
        name: 'CSS nesting',
        group: 'use-with-care',
        summary: 'Good for grouping related rules, risky when it recreates deep selector chains.',
        supportLabel: 'Project target dependent',
        deliveryMode: 'Native or build transform',
        recommendation:
            'Allow shallow nesting only when it improves ownership; do not nest your way around unclear architecture.',
        fallback:
            'Write flat selectors, which remain the easiest code to review in LSCSS.',
        lastReviewed: '2026-07-01',
        sources: ['baseline', 'mdnNesting']
    },
    {
        name: 'Relational selectors',
        code: ':has()',
        group: 'use-with-care',
        summary: 'Can remove JavaScript styling hooks when parent or sibling state is already in the DOM.',
        supportLabel: 'Baseline widely available',
        deliveryMode: 'Native CSS, often gated',
        recommendation:
            'Use for progressive styling and non-critical relational states; gate critical UI with @supports selector(:has(*)) when fallback matters.',
        fallback:
            'Keep a state class or simpler DOM hook when the selector decides a critical journey.',
        lastReviewed: '2026-07-01',
        sources: ['baseline', 'mdnHas']
    },
    {
        name: 'Scoped component selectors',
        code: '@scope',
        group: 'use-with-care',
        summary: 'A native boundary that can reduce naming ceremony inside contained component subtrees.',
        supportLabel: 'Baseline newly available',
        deliveryMode: 'Native CSS',
        recommendation:
            'Use where agreed for production, but keep layers, state rules, tokens, and component ownership intact.',
        fallback:
            'Use ordinary semantic component roots and shallow child selectors.',
        lastReviewed: '2026-07-01',
        sources: ['baseline', 'mdnScope']
    },
    {
        name: 'Entry transition start values',
        code: '@starting-style',
        group: 'use-with-care',
        summary: 'Defines the starting values for elements that become visible after initial render.',
        supportLabel: 'Baseline newly available',
        deliveryMode: 'Native CSS, usually gated',
        recommendation:
            'Use in the owning component and preserve required rule order when selectors have equal specificity.',
        fallback:
            'Skip the entry transition; the component should still open, close, and expose state correctly.',
        lastReviewed: '2026-07-01',
        sources: ['baseline', 'mdnStartingStyle']
    },
    {
        name: 'Discrete transition control',
        code: 'transition-behavior',
        group: 'use-with-care',
        summary: 'Allows discrete values such as display, overlay, and content-visibility to transition at the right point.',
        supportLabel: 'Check support before critical use',
        deliveryMode: 'Native CSS, gated for interaction polish',
        recommendation:
            'Use for progressive interaction polish only after the fallback state change works without animation.',
        fallback:
            'Discrete values should change immediately without breaking the control.',
        lastReviewed: '2026-07-01',
        sources: ['mdnTransitionBehavior', 'baseline']
    },
    {
        name: 'Native popover',
        code: 'popover',
        group: 'use-with-care',
        summary: 'Useful top-layer behaviour without a full custom dialog stack.',
        supportLabel: 'Baseline newly available',
        deliveryMode: 'Native HTML and CSS',
        recommendation:
            'Use for suitable menus and lightweight popovers, but keep focus, dismissal, and accessible names explicit.',
        fallback:
            'Use an always-available disclosure, navigation pattern, or carefully tested JavaScript fallback.',
        lastReviewed: '2026-07-01',
        sources: ['baseline', 'mdnPopover']
    },
    {
        name: 'Customisable select',
        code: 'appearance: base-select',
        group: 'use-with-care',
        summary: 'Promising native form styling, but still too uneven for default design-system assumptions.',
        supportLabel: 'Limited or evolving',
        deliveryMode: 'Native CSS behind @supports',
        recommendation:
            'Use only as progressive enhancement; the plain select must remain usable and recognisable.',
        fallback:
            'Classic native select styling.',
        lastReviewed: '2026-07-01',
        sources: ['mdnCustomSelect', 'mdnBcd']
    },
    {
        name: 'Disclosure content pseudo-element',
        code: '::details-content',
        group: 'use-with-care',
        summary: 'Enables native details content animation without replacing details behaviour.',
        supportLabel: 'Check current support',
        deliveryMode: 'Native CSS behind @supports',
        recommendation:
            'Use for optional disclosure animation only; never make the animation required for comprehension.',
        fallback:
            'Native details open and close instantly.',
        lastReviewed: '2026-07-01',
        sources: ['mdnDetailsContent', 'mdnBcd']
    },
    {
        name: 'Intrinsic size interpolation',
        code: 'interpolate-size / calc-size()',
        group: 'use-with-care',
        summary: 'Can reduce JavaScript height measurement for disclosure and panel motion.',
        supportLabel: 'Syntax and support still sensitive',
        deliveryMode: 'Native CSS behind @supports',
        recommendation:
            'Use conservatively in progressive animation examples and verify syntax against current platform docs.',
        fallback:
            'Instant intrinsic size change, or a simpler fixed-size transition when appropriate.',
        lastReviewed: '2026-07-01',
        sources: ['mdnInterpolateSize', 'mdnCalcSize']
    },
    {
        name: 'Native custom media',
        code: '@custom-media',
        group: 'watch-list',
        summary: 'Would let LSCSS named breakpoints work without PostCSS expansion.',
        supportLabel: 'Watch for native Baseline movement',
        deliveryMode: 'Not required natively yet',
        recommendation:
            'Keep using the build transform today; revisit when native support is broad enough for your matrix.',
        fallback:
            'Build-expanded @media queries.',
        lastReviewed: '2026-07-01',
        sources: ['mdnCustomMedia', 'baseline']
    },
    {
        name: 'Anchor positioning',
        group: 'watch-list',
        summary: 'Could replace a lot of fragile tooltip, flyout, and anchored overlay positioning code.',
        supportLabel: 'Limited or evolving',
        deliveryMode: 'Prototype only unless matrix allows',
        recommendation:
            'Track for menus, tooltips, and contextual UI; do not require it for core controls yet.',
        fallback:
            'Use simpler static placement or a well-tested positioning helper.',
        lastReviewed: '2026-07-01',
        sources: ['mdnAnchorPositioning', 'mdnBcd']
    },
    {
        name: 'Scroll-driven animations',
        code: 'scroll-timeline',
        group: 'watch-list',
        summary: 'May remove JavaScript scroll listeners for decorative and progress-driven motion.',
        supportLabel: 'Limited or evolving',
        deliveryMode: 'Progressive enhancement',
        recommendation:
            'Use only when reduced-motion handling and no-animation fallbacks are already designed.',
        fallback:
            'No scroll-linked animation; content and controls remain usable.',
        lastReviewed: '2026-07-01',
        sources: ['mdnScrollTimeline', 'mdnBcd']
    },
    {
        name: 'View transitions',
        group: 'watch-list',
        summary: 'Can improve continuity between pages and states, but motion has accessibility and support costs.',
        supportLabel: 'Check current support by transition type',
        deliveryMode: 'Progressive enhancement',
        recommendation:
            'Track for navigation polish; respect reduced motion and avoid hiding real loading or focus changes.',
        fallback:
            'Ordinary navigation or state change.',
        lastReviewed: '2026-07-01',
        sources: ['mdnViewTransitions', 'baseline']
    },
    {
        name: 'Style and scroll-state container queries',
        code: '@container style() / scroll-state()',
        group: 'watch-list',
        summary: 'Could make components react to local state without extra classes in some patterns.',
        supportLabel: 'Subfeatures vary',
        deliveryMode: 'Prototype and gate',
        recommendation:
            'Track carefully; size queries are ready, but style and scroll-state queries need separate decisions.',
        fallback:
            'Use existing state classes, data attributes, or size queries.',
        lastReviewed: '2026-07-01',
        sources: ['mdnContainer', 'mdnBcd']
    },
    {
        name: 'Field sizing',
        code: 'field-sizing',
        group: 'watch-list',
        summary: 'Could reduce JavaScript for auto-growing form controls.',
        supportLabel: 'Check current support',
        deliveryMode: 'Progressive enhancement',
        recommendation:
            'Track for textareas and compact form controls; keep normal field sizing as the baseline.',
        fallback:
            'Fixed or manually controlled form control sizing.',
        lastReviewed: '2026-07-01',
        sources: ['mdnFieldSizing', 'mdnBcd']
    },
    {
        name: 'CSS custom functions and mixins',
        group: 'watch-list',
        summary: 'Could replace some preprocessor-only patterns without giving up plain CSS.',
        supportLabel: 'Experimental',
        deliveryMode: 'Do not rely on for production LSCSS yet',
        recommendation:
            'Watch the specification and tooling; avoid designing architecture around it for now.',
        fallback:
            'Use custom properties, plain declarations, or build-time tooling where already approved.',
        lastReviewed: '2026-07-01',
        sources: ['mdnCustomFunctions', 'mdnBcd']
    },
    {
        name: 'Subgrid adoption patterns',
        code: 'subgrid',
        group: 'watch-list',
        summary: 'Support has improved, but the LSCSS question is where it belongs in layout/component ownership.',
        supportLabel: 'Ready to evaluate per project',
        deliveryMode: 'Native CSS',
        recommendation:
            'Use when parent-child grid alignment is genuinely shared; do not let layout concerns leak through every component.',
        fallback:
            'Duplicate only the small grid structure needed, or simplify alignment.',
        lastReviewed: '2026-07-01',
        sources: ['baseline', 'mdnSubgrid']
    }
];
