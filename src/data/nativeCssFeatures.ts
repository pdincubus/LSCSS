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
    mdnStartViewTransition: {
        label: 'MDN startViewTransition()',
        href: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/startViewTransition'
    },
    mdnViewTransitionRule: {
        label: 'MDN @view-transition',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@view-transition'
    },
    mdnFieldSizing: {
        label: 'MDN field-sizing',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing'
    },
    mdnCustomFunctions: {
        label: 'MDN @function',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@function'
    },
    cssMixins: {
        label: 'CSSWG functions and mixins draft',
        href: 'https://drafts.csswg.org/css-mixins-1/'
    },
    mdnRevertRule: {
        label: 'MDN revert-rule',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/revert-rule'
    },
    mdnPositionAnchor: {
        label: 'MDN position-anchor',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-anchor'
    },
    mdnScrollState: {
        label: 'MDN scroll-state queries',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries'
    },
    mdnTextBoxTrim: {
        label: 'MDN text-box-trim',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-box-trim'
    },
    mdnSiblingCount: {
        label: 'MDN sibling-count()',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/sibling-count'
    },
    mdnProgress: {
        label: 'MDN progress()',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/progress'
    },
    webPlatformMay2026: {
        label: 'May 2026 Baseline digest',
        href: 'https://web.dev/blog/baseline-digest-may-2026'
    },
    webPlatformAugust2026: {
        label: 'August 2026 platform updates',
        href: 'https://web.dev/blog/web-platform-08-2026'
    },
    webPlatformSeptember2026: {
        label: 'September 2026 platform updates',
        href: 'https://web.dev/blog/web-platform-09-2026'
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
        supportLabel: 'Baseline newly available since September 2025',
        deliveryMode: 'Native CSS behind @supports',
        recommendation:
            'Use for optional disclosure styling; check size interpolation and discrete transitions separately, and respect reduced motion.',
        fallback:
            'Native details open and close instantly.',
        lastReviewed: '2026-10-04',
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
        group: 'use-with-care',
        summary: 'Positions contextual UI relative to an anchor without JavaScript measurements.',
        supportLabel: 'Core features Baseline newly available; check subfeatures',
        deliveryMode: 'Native CSS with a usable fallback',
        recommendation:
            'Use explicit anchors and overflow fallbacks in the owning component. Verify the exact positioning features in your matrix; positioning does not supply focus or dismissal behaviour.',
        fallback:
            'Use simpler static placement or a well-tested positioning helper.',
        lastReviewed: '2026-10-04',
        sources: ['mdnAnchorPositioning', 'mdnPositionAnchor']
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
        name: 'Same-document view transitions',
        code: 'document.startViewTransition()',
        group: 'use-with-care',
        summary: 'Adds visual continuity to a state change within the current document.',
        supportLabel: 'Baseline newly available; check newer options separately',
        deliveryMode: 'JavaScript feature detection and CSS',
        recommendation:
            'Run the state update directly when the API is missing or reduced motion is requested. Preserve focus and loading feedback.',
        fallback:
            'Immediate state change without snapshots or animation.',
        lastReviewed: '2026-10-04',
        sources: ['mdnStartViewTransition', 'mdnViewTransitions']
    },
    {
        name: 'Cross-document view transitions',
        code: '@view-transition',
        group: 'watch-list',
        summary: 'Adds visual continuity between separate documents during navigation.',
        supportLabel: 'Limited availability',
        deliveryMode: 'Progressive CSS enhancement',
        recommendation:
            'Opt in eligible same-origin pages only where navigation remains complete without a transition. Respect reduced motion on both pages.',
        fallback:
            'Ordinary document navigation.',
        lastReviewed: '2026-10-04',
        sources: ['mdnViewTransitionRule', 'mdnViewTransitions']
    },
    {
        name: 'Custom-property style queries',
        code: '@container style()',
        group: 'use-with-care',
        summary: 'Lets a component respond to a custom property on an ancestor container.',
        supportLabel: 'Baseline newly available since May 2026',
        deliveryMode: 'Native CSS with default component styles',
        recommendation:
            'Use for documented context or theme contracts. This support claim covers custom-property queries, not arbitrary CSS properties or every range syntax.',
        fallback:
            'Keep usable default styles outside the query; use explicit variants where required by the project matrix.',
        lastReviewed: '2026-10-04',
        sources: ['webPlatformMay2026', 'mdnContainer']
    },
    {
        name: 'Scroll-state container queries',
        code: '@container scroll-state()',
        group: 'watch-list',
        summary: 'Can respond to scrolling, sticky, or snap conditions without extra styling hooks.',
        supportLabel: 'Limited availability; check each queried state',
        deliveryMode: 'Progressive enhancement',
        recommendation:
            'Keep essential controls visible without the query. Set up the scroll-state container deliberately and test keyboard scrolling.',
        fallback:
            'Ordinary component styles or an existing explicit state hook.',
        lastReviewed: '2026-10-04',
        sources: ['mdnScrollState', 'mdnBcd']
    },
    {
        name: 'Field sizing',
        code: 'field-sizing',
        group: 'use-with-care',
        summary: 'Sizes form controls to their content without JavaScript measurement.',
        supportLabel: 'Baseline newly available since June 2026',
        deliveryMode: 'Progressive enhancement',
        recommendation:
            'Use with minimum and maximum sizes so empty controls stay discoverable and long input stays manageable. Test placeholders, zoom, and manual textarea resizing.',
        fallback:
            'Fixed or manually controlled form control sizing.',
        lastReviewed: '2026-10-04',
        sources: ['mdnFieldSizing', 'mdnBcd']
    },
    {
        name: 'CSS custom functions',
        code: '@function',
        group: 'watch-list',
        summary: 'Defines reusable calculations that return a CSS value.',
        supportLabel: 'Experimental; limited availability',
        deliveryMode: 'Do not rely on for production LSCSS yet',
        recommendation:
            'Evaluate value calculations independently from mixins. Keep token contracts readable and avoid making shared styles depend on experimental functions.',
        fallback:
            'Use custom properties, plain declarations, or build-time tooling where already approved.',
        lastReviewed: '2026-10-04',
        sources: ['mdnCustomFunctions', 'mdnBcd']
    },
    {
        name: 'CSS mixins',
        code: '@mixin / @apply',
        group: 'watch-list',
        summary: 'The draft proposes reusable blocks of declarations and rules, rather than single returned values.',
        supportLabel: 'Draft; separate from custom-function support',
        deliveryMode: 'Do not require native mixins',
        recommendation:
            'Track the draft without replacing component ownership or introducing a new abstraction layer. Support for @function does not imply support for mixins.',
        fallback:
            'Use ordinary component rules, custom properties, or existing approved build tooling.',
        lastReviewed: '2026-10-04',
        sources: ['cssMixins']
    },
    {
        name: 'Subgrid adoption patterns',
        code: 'subgrid',
        group: 'use-now',
        summary: 'Shares parent grid tracks with nested content for consistent alignment.',
        supportLabel: 'Baseline widely available',
        deliveryMode: 'Native CSS',
        recommendation:
            'Use when parent-child grid alignment is genuinely shared; do not let layout concerns leak through every component.',
        fallback:
            'Duplicate only the small grid structure needed, or simplify alignment.',
        lastReviewed: '2026-10-04',
        sources: ['baseline', 'mdnSubgrid']
    },
    {
        name: 'Rule-level cascade rollback',
        code: 'revert-rule',
        group: 'use-with-care',
        summary: 'Withdraws a property decision from one rule while preserving other rules in the same layer.',
        supportLabel: 'Baseline newly available since September 2026',
        deliveryMode: 'Native CSS behind @supports where required',
        recommendation:
            'Choose revert-rule for a rule boundary, revert-layer for a layer boundary, and revert for an origin boundary. Check ownership before adding a rollback.',
        fallback:
            'Keep complete ordinary styles outside the feature gate.',
        lastReviewed: '2026-10-04',
        sources: ['mdnRevertRule', 'webPlatformSeptember2026']
    },
    {
        name: 'Text-box trimming',
        code: 'text-box / text-box-trim / text-box-edge',
        group: 'use-with-care',
        summary: 'Uses font metrics to control space at the block edges of text.',
        supportLabel: 'Baseline newly available since August 2026',
        deliveryMode: 'Progressive CSS enhancement',
        recommendation:
            'Use for deliberate heading or control alignment in the owning component. Check fallback fonts, accents, multiple lines, and text resizing before changing shared typography.',
        fallback:
            'Normal line boxes with the existing line-height and spacing tokens.',
        lastReviewed: '2026-10-04',
        sources: ['mdnTextBoxTrim', 'webPlatformAugust2026']
    },
    {
        name: 'Sibling calculations',
        code: 'sibling-index() / sibling-count()',
        group: 'use-with-care',
        summary: 'Exposes an element’s position and count among sibling elements to CSS calculations.',
        supportLabel: 'Baseline newly available since August 2026',
        deliveryMode: 'Native CSS with fallback values',
        recommendation:
            'Use for local component calculations when DOM order is intentional. Counts include the element itself and hidden siblings; they do not describe only visible matching items.',
        fallback:
            'Ordinary grid or flex layout and uniform values. Any staggered motion must respect reduced motion.',
        lastReviewed: '2026-10-04',
        sources: ['mdnSiblingCount', 'webPlatformAugust2026']
    },
    {
        name: 'Progress calculations',
        code: 'progress()',
        group: 'use-with-care',
        summary: 'Returns a ratio describing where a value sits between two bounds.',
        supportLabel: 'Baseline newly available since September 2026; check no-clamp separately',
        deliveryMode: 'Native CSS with fallback values',
        recommendation:
            'Use when it makes a bounded calculation clearer than existing calc() or clamp() expressions. This is a value calculation, not a scroll timeline.',
        fallback:
            'An explicit token value or an existing calc() or clamp() expression.',
        lastReviewed: '2026-10-04',
        sources: ['mdnProgress', 'webPlatformSeptember2026']
    },
    {
        name: 'Relative colour alpha',
        code: 'alpha()',
        group: 'use-with-care',
        summary: 'Changes the transparency of an existing colour without redefining its colour channels.',
        supportLabel: 'Baseline newly available since September 2026',
        deliveryMode: 'Native CSS with a supported colour fallback',
        recommendation:
            'Derive values from semantic colour tokens where useful, and test contrast against the actual background after compositing.',
        fallback:
            'An explicit semantic colour. Gate token definitions with a real colour-property @supports check; custom properties accept unsupported function text.',
        lastReviewed: '2026-10-04',
        sources: ['webPlatformSeptember2026']
    },
    {
        name: 'Scheme-aware images',
        code: 'light-dark() with image values',
        group: 'use-with-care',
        summary: 'Selects an image or gradient using the active colour scheme.',
        supportLabel: 'Baseline newly available since September 2026',
        deliveryMode: 'Native CSS with an ordinary image fallback',
        recommendation:
            'Keep colour and image support decisions separate. Set color-scheme explicitly and keep meaningful images and alternative text in HTML.',
        fallback:
            'A single suitable image or existing colour-scheme media rules; gate image-valued token overrides separately.',
        lastReviewed: '2026-10-04',
        sources: ['mdnLightDark', 'webPlatformSeptember2026']
    }
];
