import { defineConfig, devices } from '@playwright/test';

const baseURL = 'http://127.0.0.1:4177';

export default defineConfig({
    testDir: './tests/e2e',
    forbidOnly: true,
    // Clipboard contents are shared between browser contexts.
    workers: 1,
    retries: 0,
    reporter: [['list'], ['html', { open: 'never' }]],
    use: {
        baseURL,
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure'
    },
    projects: [
        {
            name: 'desktop-chromium',
            use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 1000 } }
        },
        {
            name: 'mobile-chromium',
            use: { ...devices['Pixel 7'] }
        }
    ],
    webServer: {
        command: 'pnpm build && pnpm preview --host 127.0.0.1 --port 4177 --ignore-lock',
        url: baseURL,
        reuseExistingServer: false,
        timeout: 120_000,
        env: { PUBLIC_UMAMI_WEBSITE_ID: '' }
    }
});
