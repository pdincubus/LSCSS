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

### Layer Purpose

#### `legacy`

Optional.

Used for inherited or older CSS that cannot yet be fully refactored. This layer sits lowest so modern architecture can progressively override it safely.

Use when:

- working in legacy platforms
- gradual migrations
- reducing `!important` usage
- untangling old specificity problems

Do not add new feature work here unless unavoidable.

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

## Type Scale

| Token       | Size |
| ----------- | ---- |
| `--fs-xs`   | 12px |
| `--fs-sm`   | 14px |
| `--fs-base` | 16px |
| `--fs-md`   | 18px |
| `--fs-lg`   | 20px |
| `--fs-xl`   | 24px |
| `--fs-2xl`  | 32px |
| `--fs-3xl`  | 48px |

### Guidance

- body copy should default to 16px minimum
- avoid text smaller than 12px
- long-form content should prioritise readability over compression
- headings should feel spacious, not oversized

---

## Line Height

| Token          | Value |
| -------------- | ----- |
| `--lh-tight`   | 1.2   |
| `--lh-base`    | 1.5   |
| `--lh-relaxed` | 1.7   |

Use relaxed spacing for content-heavy pages. Use tighter spacing for headings and labels.

---

## Colour System

## Primary Brand Colours

| Token            | Hex              |
| ---------------- | ---------------- |
| `--c-indigo-700` | hsl(244 57% 50%) |
| `--c-violet-500` | hsl(238 83% 66%) |
| `--c-violet-300` | hsl(229 93% 81%) |

These form the core identity. Use for headings, primary actions, featured areas, and visual emphasis.

---

## Accent Colours

| Token           | Hex              |
| --------------- | ---------------- |
| `--c-berry-500` | hsl(330 81% 60%) |
| `--c-berry-300` | hsl(327 87% 81%) |

Use sparingly for:

- key highlights
- call-to-action moments
- important callouts
- selected active states

Do not overuse. Berry pink should feel intentional.

---

## Status Colours

| Token         | Hex              |
| ------------- | ---------------- |
| `--c-success` | hsl(160 84% 39%) |
| `--c-warning` | hsl(37 92% 50%)  |
| `--c-error`   | hsl(0 84% 60%)   |

Used for feedback states only. Do not use as decorative colours.

---

## Neutral Palette

| Token           | Hex               |
| --------------- | ----------------- |
| `--c-ink-900`   | hsl(222 47% 11%)  |
| `--c-slate-700` | hsl(215 25% 26%)  |
| `--c-slate-300` | hsl(212 26% 83%)  |
| `--c-paper`     | hsl(240 100% 99%) |
| `--c-white`     | hsl(0 0% 100%)    |

These create balance and readability. Most of the UI should live here.

---

## Spacing Scale

| Token         | Size |
| ------------- | ---- |
| `--space-xs`  | 4px  |
| `--space-sm`  | 8px  |
| `--space-md`  | 16px |
| `--space-lg`  | 24px |
| `--space-xl`  | 32px |
| `--space-2xl` | 48px |
| `--space-3xl` | 64px |

### Guidance

Use spacing consistently. Do not invent random values.

Whitespace creates clarity. Let layouts breathe.

---

## Border Radius

| Token         | Value |
| ------------- | ----- |
| `--radius-sm` | 4px   |
| `--radius-md` | 8px   |
| `--radius-lg` | 16px  |
| `--radius-xl` | 24px  |

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