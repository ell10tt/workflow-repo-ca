import { test, expect } from '@playwright/test';

test('navigates to the venue details page', async ({ page }) => {
    await page.goto('/');

    await page.waitForSelector('#venue-container a');

    const firstVenue = page.locator('#venue-container a').first();
    await firstVenue.click();

    await expect(
        page.getByRole('heading', { name: /Venue details/i })
    ).toBeVisible();
});
