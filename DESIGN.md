# DESIGN.md

## Overview

LSCSS uses a structured, modern design system built around clarity, maintainability, and consistency.

The visual language should feel:

- confident
- modern
- technical
- calm
- premium
- readable
- intentional

Avoid visual noise. Avoid unnecessary decoration. Let typography, spacing, and rhythm do the heavy lifting.

The design should feel like a methodology, not a startup landing page.

---

## Cascade Layers

LSCSS uses a defined cascade layer structure to reduce specificity conflicts, improve maintainability, and make styling decisions predictable.

```css
@layer legacy, settings, base, utilities, layout, components, theme, hacks;
```

Layer order matters more than source order.

Unlayered CSS is always more specific than layered CSS and should be avoided unless there is a deliberate reason.

### Choosing a low layer

The canonical stack declares `legacy` first (lowest). Projects may add an optional `thirdparty` layer **before** `legacy` when both foreign vendor CSS and inherited first-party CSS need separate buckets. First listed in `@layer` is least important.

- **Only old first-party CSS** — use `legacy` only (canonical default below).
- **Only vendor CSS, no legacy** — use `thirdparty` only; omit `legacy` from the declaration and imports.
- **Both** — declare `thirdparty, legacy, settings, …` and import each file into the matching layer.

Teams may also keep vendor CSS in `legacy` when a single low bucket is enough.

### Layer Purpose

#### `legacy`

Optional.

Used for inherited or older **first-party** CSS that cannot yet be fully refactored. This layer sits lowest in the canonical stack so modern architecture can progressively override it safely. Teams may also place third-party CSS here when one combined low bucket is enough.

Use when:

- working in legacy platforms
- gradual migrations
- reducing `!important` usage
- untangling old specificity problems

Do not add new feature work here unless unavoidable.

---

#### `thirdparty`

Optional. Not part of the canonical one-line stack; add **before** `legacy` when both layers are needed.

Used for CSS you do not own: npm packages, widgets, CMS plugins, and other vendor styles you must import but cannot refactor. Sits below `legacy` when both are declared (`thirdparty` is listed first in `@layer`).

Use when:

- the name `legacy` is misleading because you have no inherited first-party CSS
- vendor CSS must stay coupled to your authored layers without living in `components` or `base`
- you need a separate bucket from first-party legacy CSS during migration

Do not put first-party code you own here. Do not import vendor CSS into mid-stack layers because `legacy` feels wrong.

When both `thirdparty` and `legacy` exist:

```css
@layer thirdparty, legacy, settings, base, utilities, layout, components, theme, hacks;
```

---

#### `settings`

Global foundations.

Includes:

- design tokens
- CSS custom properties
- font declarations
- custom media queries
- root configuration
- animation timing tokens
- z-index scale

This is where the system begins.

---

#### `base`

Element-level styling and default behaviour.

Includes:

- resets
- typography defaults
- form element defaults
- semantic HTML styling
- default content flow
- global accessibility improvements

This should remain low-specificity and predictable.

---

#### `utilities`

Single-purpose helper classes.

Includes:

- visually hidden
- flow utilities
- spacing helpers where appropriate
- layout helpers
- accessibility helpers
- state visibility helpers

Utilities should be small, intentional, and composable.

Avoid utility bloat.

---

#### `layout`

Structural layout patterns.

Includes:

- wrappers
- containers
- grids
- sections
- stack patterns
- page-level composition

This controls placement, not component appearance.

---

#### `components`

Reusable UI components.

Includes:

- buttons
- cards
- navigation
- accordions
- tabs
- forms
- modals
- popovers

Most authored CSS lives here.

Components should be predictable and self-contained.

---

#### `theme`

Project-specific visual styling.

Includes:

- brand overrides
- campaign themes
- visual enhancements
- presentation-level polish

This layer should not fix architecture problems.

It styles, it does not rescue.

**This repository:** The LSCSS docs site keeps `theme` in the declared `@layer` stack in `src/styles/site.css` but does not ship a separate `theme/*.css` partial. Semantic colour and light/dark behaviour live on `:root` in `src/styles/settings/tokens.css` (`light-dark()` and `--c-*` variables); components consume those variables in `layer(components)`. That keeps a single source of truth for the palette. When you maintain a distinct brand skin, campaign overrides, or presentation-only retargeting of components, add `@import '...' layer(theme)` and keep structure out of that file.

---

#### `hacks`

Temporary overrides only.

Includes:

- browser fixes
- third-party overrides
- emergency production patches
- temporary exceptions

Everything here should have an exit plan.

If `hacks` becomes large, something upstream is broken.

---

## Core Principles

### 1. Structure First

Layouts should feel ordered and deliberate.

Use strong alignment, consistent spacing, and clear hierarchy. Do not rely on decoration to create importance.

### 2. Typography Leads

The wordmark and typography carry the identity.

The brand should feel strong even without a logo device. Use type confidently.

### 3. Colour Supports, Not Dominates

Indigo and violet provide the primary brand foundation. Berry pink is used sparingly for emphasis.

Accent colours should guide attention, not overwhelm the interface.

### 4. Accessibility Is Default

Readable text, strong contrast, keyboard usability, and predictable interaction patterns are baseline requirements.

Accessibility is not an enhancement. It is the standard.

### 5. Practical Over Clever

Prefer clarity over novelty. Prefer maintainability over visual tricks. Prefer systems over one-off solutions.

---

## Typography

### Primary Font

**Space Grotesk**

Used for:

- body copy
- headings
- UI labels
- navigation
- buttons
- wordmark

Why:

- modern and structured
- strong readability
- technical without feeling cold
- works well in light and dark mode

### Monospace Font

**Space Mono**

Used for:

- code examples
- token references
- CSS examples
- technical callouts

Why:

- clear and readable
- pairs naturally with Space Grotesk
- reinforces technical identity

---

## Font Weights

| Token           | Value |
| --------------- | ----- |
| `--fw-light`    | 300   |
| `--fw-regular`  | 400   |
| `--fw-medium`   | 500   |
| `--fw-semibold` | 600   |
| `--fw-bold`     | 700   |

Use semibold and bold intentionally. Avoid overly heavy heading blocks.

---

## Token naming (site)

This docs site uses short prefixes in `src/styles/settings/tokens.css`. Bare `--fs`, `--lh`, and `--space` are the **base** step on each ladder (body size, normal line height, default spacing). Use explicit `-m` on a scale when you need the step before `-l` (for example `--fs-m`, `--lh-m`, `--space-m`).

| Prefix | Role |
| ------ | ---- |
| `--c-*` | Colour (semantic tokens and palette ramps) |
| `--fs`, `--fs-*` | Font size |
| `--lh`, `--lh-*` | Line height |
| `--space`, `--space-*` | Spacing |
| `--br-*` | Border radius |
| `--border-*` | Border width (not radius) |
| `--ff`, `--ff-mono` | Font stacks |
| `--fw-*` | Font weights |
| `--shadow-*`, `--transition-*`, `--z-*` | Shadows, motion, stacking |

Methodology and examples: `/apply/design-tokens/` on the published site.

---

## Type Scale

Desktop values (see `tokens.css`). Mobile scales the ladder down via `@media (--mobile)`; `--fs-2xs` floors at 14px on small viewports.

| Token       | Desktop |
| ----------- | ------- |
| `--fs-2xs`   | 16px    |
| `--fs-s`   | 17px    |
| `--fs` | 19px    |
| `--fs-m`   | 21px    |
| `--fs-l`   | 24px    |
| `--fs-xl`   | 30px    |
| `--fs-2xl`  | 40px    |
| `--fs-3xl`  | 64px    |

### Guidance

- body copy uses `--fs` (19px desktop); `--fs-2xs` is the small step and the mobile floor (14px)
- avoid text smaller than the mobile floor
- long-form content should prioritise readability over compression
- headings should feel spacious, not oversized

---

## Line Height

| Token          | Value |
| -------------- | ----- |
| `--lh-s`   | 1.2   |
| `--lh`    | 1.5   |
| `--lh-m`  | 1.6   |
| `--lh-l` | 1.7   |

Use relaxed spacing for content-heavy pages. Use tighter spacing for headings and labels.

---

## Colour System

Indigo and violet carry the brand. Berry pink accents emphasis only. Most of the interface should sit on neutrals.

### Principles

- **Colour supports, not dominates** — typography and spacing lead; accents guide attention.
- **Semantic tokens in components** — use `--c-text`, `--c-link`, and similar in `layer(components)`. Reserve raw `--c-*` ramps for token definitions and rare one-offs.
- **One accent at a time** — avoid neon links, saturated CTAs, and bright berry on the same view.

### Dark mode

Dark presentation should feel like one cohesive slate environment, not competing hues on mismatched surfaces.

- **Single neutral ramp** — background, surfaces, borders, and code blocks share hue `222°`; only lightness steps create depth.
- **Soft text** — body copy uses `--c-mist` (low-chroma off-white), not the blue-tinted `--c-paper` from light mode.
- **Restrained violet** — links and code accents use `--c-violet-muted`; hovers brighten slightly, not to pure white.
- **Deeper CTAs** — solid buttons use `--c-indigo-cta-dark` with light label text; hover is one step brighter on the same ramp.
- **Bright berry** — hero eyebrows use `--c-eyebrow` (maximum chroma); other accent text uses `--c-accent`. Both use literal `hsl()` inside `light-dark()`, not `light-dark(var(...), var(...))`, so colour computes reliably in browsers. Soft fills use `--c-berry-soft-dark` with `--c-on-accent-soft` (dark ink on both schemes) for label contrast.

Light mode values stay largely unchanged so the refresh targets dark presentation first.

### Light and dark implementation

Semantic colours on `:root` in `src/styles/settings/tokens.css` use the CSS `light-dark()` function: first value for light, second for dark. `html` sets `color-scheme: light dark` in `src/styles/base/reset.css` so system preference drives which value resolves. PostCSS leaves native `light-dark()` in place (see `postcss.config.mjs`).

---

### Raw brand colours (shared)

| Token            | Value              |
| ---------------- | ------------------ |
| `--c-indigo-700` | hsl(244 57% 50%)   |
| `--c-violet-500` | hsl(238 83% 66%)   |
| `--c-violet-300` | hsl(229 93% 81%)   |
| `--c-violet-muted` | hsl(235 70% 72%) |
| `--c-violet-muted-hover` | hsl(235 75% 78%) |
| `--c-indigo-cta-dark` | hsl(244 50% 58%) |
| `--c-indigo-cta-hover-dark` | hsl(244 48% 66%) |

Indigo/violet-muted are for links, CTAs, and interactive emphasis. Do not stack all three at full saturation on one screen.

---

### Accent colours

| Token           | Value              |
| --------------- | ------------------ |
| `--c-berry-500` | hsl(330 86% 62%)   |
| `--c-berry-300` | hsl(322 100% 68%)  |
| `--c-berry-400` | hsl(330 82% 72%)   |
| `--c-berry-bright-light` | hsl(322 100% 42%) |
| `--c-berry-bright-dark` | hsl(322 100% 66%) |
| `--c-berry-soft-dark` | hsl(322 75% 55%) |

Use sparingly for eyebrows, badges, selection, and active chips. `--c-berry-400` and `--c-berry-soft-dark` are tuned for dark surfaces; light mode keeps `--c-berry-500` / `--c-berry-300` via semantic tokens.

---

### Status colours

| Token         | Value              |
| ------------- | ------------------ |
| `--c-success` | hsl(160 84% 39%) |
| `--c-warning` | hsl(37 92% 50%)  |
| `--c-error`   | hsl(0 84% 60%)   |

Feedback states only. Not decorative.

---

### Light neutrals

| Token           | Value              |
| --------------- | ------------------ |
| `--c-ink-900`   | hsl(222 47% 11%)   |
| `--c-slate-700` | hsl(215 25% 26%)   |
| `--c-slate-300` | hsl(212 26% 83%)   |
| `--c-paper`     | hsl(240 100% 99%)  |
| `--c-white`     | hsl(0 0% 100%)     |
| `--c-code-bg-light` | hsl(235 100% 97%) |

---

### Dark slate ramp (hue 222°)

| Token           | Value              | Role (dark)        |
| --------------- | ------------------ | ------------------ |
| `--c-slate-950` | hsl(222 47% 9%)    | page background    |
| `--c-slate-900` | hsl(222 35% 12%)   | cards, header      |
| `--c-slate-850` | hsl(222 24% 16%)   | alt panels, sidebars |
| `--c-slate-800` | hsl(222 22% 17%)   | code block bg      |
| `--c-slate-750` | hsl(222 16% 22%)   | borders            |
| `--c-slate-700-dark` | hsl(222 18% 28%) | strong borders |
| `--c-mist`      | hsl(222 15% 92%)   | body text          |
| `--c-mist-bright` | hsl(222 18% 96%) | headings         |
| `--c-mist-muted` | hsl(222 10% 68%)  | secondary text     |

---

### Semantic tokens

Components and base styles should consume these. Each resolves per color scheme via `light-dark()`.

| Token | Light | Dark |
| ----- | ----- | ---- |
| `--c-background` | `--c-paper` | `--c-slate-950` |
| `--c-surface` | `--c-white` | `--c-slate-900` |
| `--c-surface-alt` | hsl(240 57% 97%) | `--c-slate-850` |
| `--c-text` | `--c-ink-900` | `--c-mist` |
| `--c-text-muted` | `--c-slate-700` | `--c-mist-muted` |
| `--c-heading` | `--c-ink-900` | `--c-mist-bright` |
| `--c-text-inverse` | `--c-white` | `--c-slate-950` |
| `--c-border` | `--c-slate-300` | `--c-slate-750` |
| `--c-border-strong` | `--c-slate-700` | `--c-slate-700-dark` |
| `--c-link` | `--c-indigo-700` | `--c-violet-muted` |
| `--c-link-hover` | `--c-violet-500` | `--c-violet-muted-hover` |
| `--c-accent` | hsl(322 100% 48%) | hsl(322 100% 70%) |
| `--c-eyebrow` | hsl(322 100% 42%) | hsl(322 100% 66%) |
| `--c-accent-soft` | `--c-berry-300` | `--c-berry-soft-dark` |
| `--c-on-accent-soft` | `--c-ink-900` | `--c-ink-900` |
| `--c-cta-bg` | `--c-indigo-700` | `--c-indigo-cta-dark` |
| `--c-cta-bg-hover` | `--c-violet-500` | `--c-indigo-cta-hover-dark` |
| `--c-cta-text` | `--c-white` | `--c-mist-bright` |
| `--c-code-bg` | `--c-code-bg-light` | `--c-slate-800` |
| `--c-code-text` | `--c-indigo-700` | `--c-violet-muted` |

### Usage

- Prefer semantic tokens in authored CSS. Raw ramps belong in `settings/tokens.css` and documentation.
- Do not hardcode `--c-ink-900` on `--c-accent-soft` fills; use `--c-on-accent-soft` so light and dark both contrast correctly.
- Do not use `--c-paper` as dark-mode body text; it is a light-mode surface tint.
- Status colours stay scoped to validation and feedback UI.

---

## Spacing Scale

| Token         | Size |
| ------------- | ---- |
| `--space-2xs`  | 4px  |
| `--space-s`  | 8px  |
| `--space`  | 16px |
| `--space-m`  | 24px |
| `--space-l`  | 32px |
| `--space-xl` | 48px |
| `--space-2xl` | 64px |

### Guidance

Use spacing consistently. Do not invent random values.

Whitespace creates clarity. Let layouts breathe.

---

## Border Radius (`--br-*`)

Short prefix for border-radius tokens.

| Token          | Value |
| -------------- | ----- |
| `--br-s`   | 4px   |
| `--br-m`   | 8px   |
| `--br-l`   | 16px  |
| `--br-xl`  | 24px  |
| `--br-round` | pill |

Rounded corners should feel modern but restrained. Avoid overly soft UI.

---

## Shadows

Use subtle depth only where needed.

Shadows should support hierarchy, not become decoration.

Prefer:

- cards
- elevated navigation
- overlays
- focused UI states

Avoid heavy shadows.

---

## Layout Rules

### Rhythm

Use consistent vertical spacing. Avoid cramped sections. Avoid giant empty voids.

Spacing should feel deliberate.

---

## Component Guidance

### Buttons

- strong typography
- clear hover states
- clear focus states
- obvious active state
- never rely on colour alone

### Cards

- simple structure
- subtle border or soft elevation
- strong internal spacing
- consistent alignment

### Code Blocks

- use Space Mono
- strong contrast
- generous padding
- obvious hierarchy for examples

### Documentation Sections

- prioritise scanning
- strong heading structure
- predictable navigation
- practical examples first

---

## Wordmark Direction

Primary identity should favour:

# LSCSS

## Modern CSS architecture

No forced slogan. No unnecessary brand theatre.

Confidence comes from clarity.

Typography should carry the brand.

---

## Selector Methodology

Selectors should follow LSCSS rules: semantic ownership, low specificity, and predictable responsibility.

The goal is not clever selectors. The goal is maintainable CSS.

---

### Core Naming Rules

- Name components by purpose, not appearance
- Keep child classes short and scoped by the parent
- Use modifiers for reusable variants
- Use `.is_*` for temporary UI state
- Use `.has_*` for conditions and content presence
- Avoid utility names pretending to be components
- If the name needs explaining, the architecture probably does too

Good naming reduces questions before they happen.

Avoid names like:

- `.blue-box`
- `.big-red-button`
- `.left-column-text`

These describe appearance, not ownership, and become lies the moment design changes.

---

### Components and Child Selectors

Components describe what something is.

```css
.product-card
.site-header
.filter-panel
```

Child selectors stay short because the parent already provides context.

```css
.product-card > .title
.product-card > .price
.site-header > .logo
.filter-panel > .actions
```

Avoid repeating the parent name everywhere unless there is a strong reason.

Prefer:

```css
.product-card > .title
```

Over:

```css
.product-card__title
```

The parent already exists. It does not need to introduce itself at every meeting.

---

### Modifiers

Use modifiers for deliberate, reusable component variants.

A modifier should be something design can document and another developer understands without reading JavaScript.

```css
.product-card--featured
.product-card--compact
.site-header--minimal
```

If it disappears after interaction, it is probably not a modifier.

---

### State Classes

Use `.is_*` for temporary UI behaviour.

Examples:

- interaction
- validation
- loading
- expansion
- progressive enhancement state

```css
.is_active
.is_disabled
.is_expanded
.is_loading
```

State should remain explicit.

Do not hide behaviour inside deep selectors.

---

### Condition Classes

Use `.has_*` for content presence or conditions that affect styling but are not reusable variants.

```css
.has_error
.has_results
.has_child
.has_media
```

A field with an error is still the same field. It has a condition, it is not a new component variant.

---

### Combined Patterns

These patterns work together because they describe different truths.

```css
.product-card--featured.is_loading {}
.form-field.has_error {}
.disclosure.is_expanded {}
```

Keep concerns separate.

A featured card can also be loading.

---

### Architecture Rules

CSS architecture should reduce decisions, not create weekly debates about where a button belongs.

Rules:

- one component, one partial
- root files are import maps, not dumping grounds
- shared styles first
- only changed values inside breakpoints
- keep modifiers and state close to their component
- use named custom media queries, not magic numbers
- large files trigger review, not acceptance
- if a group of rules feels like its own component, it probably is

Structure should make ownership obvious and maintenance boring in the best possible way.

---

## Final Rule

If a design choice feels like it is trying too hard, it probably is.

Remove noise. Keep structure. Trust the system.