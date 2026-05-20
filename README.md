# LSCSS

Layered Semantic CSS is a practical CSS methodology built around cascade layers, semantic component naming, shallow scoped selectors, explicit modifiers, and clear state classes.

## Development

```bash
pnpm install
pnpm run dev
```

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
