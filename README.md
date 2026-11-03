# LSCSS

Layered Semantic CSS is a practical CSS methodology built around cascade layers, semantic component naming, shallow scoped selectors, explicit modifiers, and clear state classes.

## Accessibility

Read the [accessibility statement](ACCESSIBILITY.md) for our accessibility target, known limitations, and how to report a problem.

## Development

Use Node.js 22.23.4 or newer and pnpm. TypeScript stays on version 6 while `@astrojs/check` requires its JavaScript compiler API.

```bash
pnpm install
pnpm run dev
```

Before opening a pull request, verify a reproducible installation and the production build:

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm audit
```

### Browser tests

Install Chromium once after installing dependencies, and again whenever Playwright is updated:

```bash
pnpm exec playwright install chromium
pnpm test:e2e
```

The Playwright suite builds the production site, including its real Pagefind index, and starts a local preview at `http://127.0.0.1:4177`. That port must be free; the suite will not reuse another server. Analytics are disabled for the test build.

Desktop and mobile Chromium checks cover documentation links, breadcrumbs, mobile submenus, keyboard navigation and Escape focus return, content links without JavaScript, search results and empty/unavailable states, and both code-copy controls. Copy tests check the real clipboard contents, confirmation/reset behaviour and the permission-denied message. Tests run one at a time to avoid clipboard conflicts.

Run `pnpm test:e2e` alongside the checks above for monthly package maintenance. GitHub Actions runs the project check and browser suite on pull requests and pushes to `main`. Failure reports, screenshots and traces are saved outside the site build in `playwright-report/` and `test-results/` and uploaded by CI on failure. To inspect a local HTML report, run `pnpm exec playwright show-report`.

This suite covers Chromium at two viewport sizes; it is not a full accessibility audit or Firefox/WebKit verification. Continue checking affected layouts, reduced motion and browser-specific behaviour when relevant to a change.

## Analytics (Umami Cloud)

Production builds can include [Umami](https://umami.is/) for privacy-focused, cookieless page analytics.

1. Create a site at [Umami Cloud](https://cloud.umami.is) for `lscss.crayonsandco.de`.
2. Copy `.env.example` to `.env` and set `PUBLIC_UMAMI_WEBSITE_ID` to your Website ID.
3. Run `pnpm run build` — the tracker script is only injected when `import.meta.env.PROD` is true and the ID is set.

Set the same `PUBLIC_UMAMI_WEBSITE_ID` in your hosting or CI environment before deploying. Local `pnpm run dev` does not load the script unless you set the variable and build for production.

Optional: `PUBLIC_UMAMI_SCRIPT_URL` and `PUBLIC_UMAMI_HOST_URL` for self-hosted Umami. Set `PUBLIC_UMAMI_RESPECT_DNT=true` only if you want to honour browser Do Not Track (off by default).

The tracker sets `data-host-url` to `https://cloud.umami.is` because the Cloud script alone posts to `api-gateway.umami.dev`, which many ad blockers allow the script but block the collect request.

### No data in the dashboard?

1. **Network** — DevTools → Network → filter `send`. You should see `POST https://cloud.umami.is/api/send` with status 200. If only `script.js` loads and `api-gateway.umami.dev` is blocked, redeploy with the current `Umami.astro` (uses `data-host-url`).
2. **Ad blockers** — Test in a private window with extensions disabled.
3. **Website ID** — Must match Umami Cloud exactly; rebuild after changing env vars.
4. **Umami Cloud domain** — In the dashboard, set the site domain to `lscss.crayonsandco.de`.
5. **`astro preview` / localhost** — Tracker is production-only; use the live site to test real visits.
