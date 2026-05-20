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

Optional: `PUBLIC_UMAMI_SCRIPT_URL` overrides the default `https://cloud.umami.is/script.js` (for example, a self-hosted Umami instance). `PUBLIC_UMAMI_DOMAINS` overrides the hostname list derived from `site` in `astro.config.mjs` (useful for preview deploy hostnames).

### No data in the dashboard?

The script tag can load while **no hits are sent**. Check in order:

1. **Hostname** — `data-domains` must include the hostname you are actually visiting (`lscss.crayonsandco.de` vs a preview URL). `astro preview` on `localhost` will not record (by design).
2. **Network** — In DevTools → Network, filter for `collect` or `api`. You should see successful requests to `cloud.umami.is`. Ad blockers often block these even when `script.js` loads.
3. **Website ID** — Must match the UUID in Umami Cloud exactly; a wrong ID returns errors on the collect request.
4. **Do Not Track** — With `data-do-not-track="true"`, browsers with DNT enabled send nothing. Test in a normal window with DNT off, or use another device.
5. **Rebuild after env changes** — `PUBLIC_UMAMI_WEBSITE_ID` is baked in at `pnpm run build` time; changing hosting env vars requires a new production build and deploy.
