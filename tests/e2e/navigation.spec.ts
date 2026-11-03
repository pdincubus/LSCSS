import { expect, test } from '@playwright/test';

test('primary navigation opens documentation and breadcrumbs return home', async ({ page }) => {
    await page.goto('/');

    const menu = page.getByRole('button', { name: 'Menu', exact: true });

    if (await menu.isVisible()) {
        await menu.click();
        await expect(menu).toHaveAttribute('aria-expanded', 'true');
    }

    const primary = page.getByRole('navigation', { name: 'Primary', exact: true });
    await primary.getByRole('link', { name: 'Learn', exact: true }).click();

    await expect(page).toHaveURL('/learn/what-is-lscss/');
    await expect(page.getByRole('heading', { name: 'What is LSCSS?', exact: true })).toBeVisible();

    await page.getByRole('navigation', { name: 'Breadcrumb', exact: true })
        .getByRole('link', { name: 'Home', exact: true }).click();

    await expect(page).toHaveURL('/');
    await expect(page.getByRole('heading', {
        name: 'CSS architecture that stays calm under pressure',
        exact: true
    })).toBeVisible();
});

test('mobile submenus support keyboard opening and Escape returns focus', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const menu = page.getByRole('button', { name: 'Menu', exact: true });
    const primary = page.getByRole('navigation', { name: 'Primary', exact: true, includeHidden: true });

    await expect(primary).toBeHidden();
    await menu.press('Enter');
    await expect(menu).toHaveAttribute('aria-expanded', 'true');
    await expect(primary).toBeVisible();

    const submenu = primary.getByRole('button', {
        name: 'Learn submenu',
        exact: true,
        includeHidden: true
    });
    await submenu.press('Enter');
    await expect(submenu).toHaveAttribute('aria-expanded', 'true');
    await expect(primary.getByRole('link', { name: 'Principles', exact: true })).toBeVisible();

    await submenu.press('Escape');
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await expect(submenu).toHaveAttribute('aria-expanded', 'false');
    await expect(primary).toBeHidden();
    await expect(menu).toBeFocused();
});

test.describe('without JavaScript', () => {
    test.use({ javaScriptEnabled: false });

    test('ordinary content links and breadcrumbs remain usable', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: 'Start here', exact: true }).click();

        await expect(page).toHaveURL('/learn/what-is-lscss/');
        await expect(page.getByRole('heading', { name: 'What is LSCSS?', exact: true })).toBeVisible();

        await page.getByRole('navigation', { name: 'Breadcrumb', exact: true })
            .getByRole('link', { name: 'Home', exact: true }).click();
        await expect(page).toHaveURL('/');
    });
});
