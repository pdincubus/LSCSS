import { expect, test } from '@playwright/test';

test('built search results open the matching documentation with the keyboard', async ({ page }) => {
    await page.goto('/search/');
    await page.getByRole('searchbox', { name: 'Search documentation' }).fill('cascade');

    const results = page.locator('#site-search-hits');
    const layers = results.getByRole('link', { name: 'Layer architecture', exact: true });

    await expect(layers).toBeVisible();
    await layers.press('Enter');

    await expect(page).toHaveURL('/apply/layers/');
    await expect(page.getByRole('heading', { name: 'Layer architecture', exact: true })).toBeVisible();
});

test('search explains an empty result and clears it when the query is removed', async ({ page }) => {
    await page.goto('/search/');

    const query = page.getByRole('searchbox', { name: 'Search documentation' });
    const results = page.locator('#site-search-hits');
    const missingQuery = '"a phrase absent from these documentation pages"';

    await query.fill(missingQuery);
    await expect(results.getByRole('status')).toHaveText(`No results for “${missingQuery}”.`);

    await query.fill('');
    await expect(results).toBeEmpty();
});

test('a missing search index gives an explanation and disables the input', async ({ page }) => {
    await page.route('**/pagefind/pagefind.js', (route) => route.abort());
    await page.goto('/search/');

    await expect(page.getByRole('searchbox', { name: 'Search documentation' })).toBeDisabled();
    await expect(page.locator('#site-search-hits').getByRole('status'))
        .toHaveText('Search index is not available.');
    await expect(page.getByText('Search is temporarily unavailable. Please try again later.', {
        exact: true
    })).toBeVisible();
});
