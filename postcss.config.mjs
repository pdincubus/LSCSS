/**
 * PostCSS for CSS processed by Vite (Astro). Mirrors the intent of the Gulp
 * stack on another project, adapted for this repo:
 *
 * - No partialImports: Vite inlines `@import` when bundling `src/styles/site.css`.
 * - postcss-custom-media: expands `src/styles/settings/media.css` so
 *   `@media (--desktop)` becomes real media queries in the shipped CSS.
 * - postcss-preset-env: progressive enhancements; cascade-layers disabled so
 *   our explicit `@layer` order from DESIGN.md is left untouched (same as your
 *   Gulp `presetEnv({ features: { 'cascade-layers': false } })`).
 *   `browsers` is passed in explicitly because auto-discovery of
 *   `.browserslistrc` from a Vite/PostCSS execution context is unreliable;
 *   the same query string lives in `.browserslistrc` for esbuild/lightningcss.
 *   `light-dark()` is force-disabled because the transform emits a verbose
 *   custom-property toggle chain for a feature every target browser supports.
 *   `custom-properties` is disabled: targets all support `var()`; the plugin only
 *   added legacy `prop: resolved; prop: var(--token)` pairs that bloated output.
 * - postcss-sort-media-queries: mobile-first ordering (same as your Gulp sort).
 * - No nested(): stylesheets use flat selectors only.
 * - No lightningcss() here: let Vite minify the final bundle to avoid double passes.
 * - No postcss-reporter: use the terminal from `astro build` / Vite instead.
 * - No systemUiFont: fonts are local `@font-face` in `settings/fonts.css`.
 */
export default {
    plugins: {
        'postcss-custom-media': {},
        'postcss-preset-env': {
            stage: 2,
            browsers: 'last 2 versions, not dead, > 0.5%',
            features: {
                'cascade-layers': false,
                'custom-media-queries': false,
                'light-dark-function': false,
                'custom-properties': false
            }
        },
        'postcss-sort-media-queries': {
            sort: 'mobile-first'
        }
    }
};
