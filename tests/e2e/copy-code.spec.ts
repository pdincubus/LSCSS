import { expect, test } from '@playwright/test';

test.beforeEach(async ({ context, baseURL }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: baseURL });
});

test('copies the full code example and resets its confirmation', async ({ page }) => {
    await page.goto('/apply/examples/');

    const example = page.locator('[data-code-example]').first();
    const button = example.getByRole('button');
    const status = example.locator('[data-copy-status]');
    const code = await example.locator('pre code').textContent();

    await expect(example.locator('.token').first()).toBeVisible();
    await expect(button).toHaveAccessibleName('Copy');
    expect(code?.trim()).toBeTruthy();
    await page.evaluate(() => navigator.clipboard.writeText('Previous clipboard contents'));
    await button.press('Enter');

    await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe(code);
    await expect(status).toHaveText('Copied to clipboard');
    await expect(button).toHaveText('Copied');
    await expect(button).toHaveText('Copy');
    await expect(status).toBeEmpty();
});

test('copy failure is announced without claiming success', async ({ page }) => {
    await page.goto('/apply/examples/');

    const example = page.locator('[data-code-example]').first();
    await expect(example.locator('.token').first()).toBeVisible();

    // Simulate the browser denying this API; the normal copy test uses the real clipboard.
    await page.evaluate(() => {
        Object.defineProperty(navigator.clipboard, 'writeText', {
            value: () => Promise.reject(new DOMException('Clipboard access denied', 'NotAllowedError'))
        });
    });

    const button = example.getByRole('button', { name: 'Copy', exact: true });
    await button.click();

    await expect(example.locator('[data-copy-status]')).toHaveText('Copy failed');
    await expect(button).toHaveText('Copy');
});

test('copies the selected package-manager command', async ({ page }) => {
    await page.goto('/apply/browser-support/');

    const command = page.locator('[data-cli-command]');
    await expect(command.locator('.token').first()).toBeVisible();
    await command.getByRole('tab', { name: 'npm', exact: true }).click();

    await expect(command.getByRole('tab', { name: 'npm', exact: true }))
        .toHaveAttribute('aria-selected', 'true');
    await expect(command.getByRole('tabpanel')).toHaveText('npx browserslist');
    await page.evaluate(() => navigator.clipboard.writeText('Previous clipboard contents'));
    await command.getByRole('button', { name: 'Copy', exact: true }).press('Enter');

    await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe('npx browserslist');
    await expect(command.locator('[data-cli-copy-status]')).toHaveText('Copied to clipboard');
});
