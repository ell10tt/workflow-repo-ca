import { test, expect } from '@playwright/test';

test('user sees an error message with invalid credentials', async ({
    page,
}) => {
    await page.goto('/login/');

    await page.locator('input[name="email"]').fill('wrong@stud.noroff.no');
    await page.locator('input[name="password"]').fill('wrongpass123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('#message-container')).not.toContainText(
        'Please enter a noroff.no or stud.noroff.no email address.'
    );
});

test('user can successfully log in with valid credentials', async ({
    page,
}) => {
    await page.goto('/login/');

    await page.locator('input[name="email"]').fill(process.env.TEST_EMAIL);
    await page
        .locator('input[name="password"]')
        .fill(process.env.TEST_PASSWORD);

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL('/');
    await expect(page.getByText('Hi Vladyslav')).toBeVisible();
});
