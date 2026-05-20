# LSCSS

Layered Semantic CSS is a practical CSS methodology built around cascade layers, semantic component naming, shallow scoped selectors, explicit modifiers, and clear state classes.

## Development

```bash
pnpm install
pnpm run dev
```

## Analytics (Umami Cloud)

Production builds can include [Umami](https://umami.is/) for privacy-focused, cookieless page analytics.

1. Create a site at [Umami Cloud](https://cloud.umami.is) for `lscss.dev`.
2. Copy `.env.example` to `.env` and set `PUBLIC_UMAMI_WEBSITE_ID` to your Website ID.
3. Run `pnpm run build` — the tracker script is only injected when `import.meta.env.PROD` is true and the ID is set.

Set the same `PUBLIC_UMAMI_WEBSITE_ID` in your hosting or CI environment before deploying. Local `pnpm run dev` does not load the script unless you set the variable and build for production.

Optional: `PUBLIC_UMAMI_SCRIPT_URL` overrides the default `https://cloud.umami.is/script.js` (for example, a self-hosted Umami instance).
