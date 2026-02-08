import { test, expect } from '@playwright/test';

test.describe('Read/Explore Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/read');
	});

	test('displays tablet cards', async ({ page }) => {
		// Should show tablet cards
		const tabletCards = page.locator('button.group');
		await expect(tabletCards.first()).toBeVisible();
		const count = await tabletCards.count();
		expect(count).toBeGreaterThan(0);
	});

	test('clicking tablet opens viewer', async ({ page }) => {
		// Click first tablet
		await page.click('button.group');

		// Should show tablet viewer
		await expect(page.locator('text=Back to Tablets')).toBeVisible();
		await expect(page.locator('text=Text & Translation')).toBeVisible();
	});

	test('back button returns to tablet selection', async ({ page }) => {
		// Open a tablet
		await page.click('button.group');
		await expect(page.locator('text=Back to Tablets')).toBeVisible();

		// Click back
		await page.click('text=Back to Tablets');

		// Should be back to selection
		await expect(page.locator('h1')).toContainText('Explore Ancient Tablets');
	});

	test('Sign Explorer opens and closes', async ({ page }) => {
		// Click "Open Sign Explorer" button
		await page.click('button:has-text("Open Sign Explorer")');

		// Modal should be visible - use heading role for specificity
		await expect(page.getByRole('heading', { name: /Sign Explorer/ })).toBeVisible();
		await expect(page.locator('input[placeholder*="Search"]')).toBeVisible();

		// Close modal
		await page.locator('.fixed.inset-0 button:has-text("×")').click();

		// Modal should be closed
		await expect(page.locator('.fixed.inset-0.bg-black')).toBeHidden();
	});

	test('Sign Explorer search works', async ({ page }) => {
		await page.click('text=Open Sign Explorer');

		// Search for a sign
		await page.fill('input[placeholder*="Search"]', 'water');

		// Should filter results
		await page.waitForTimeout(300); // Wait for filter
		const signButtons = page.locator('.grid button[title]');
		const count = await signButtons.count();
		expect(count).toBeGreaterThan(0);
	});

	test('clicking sign shows detail view', async ({ page }) => {
		await page.click('text=Open Sign Explorer');

		// Click first sign in grid
		const firstSign = page.locator('.grid button[title]').first();
		await firstSign.click();

		// Should show sign detail
		await expect(page.locator('text=Back to all signs')).toBeVisible();
		await expect(page.locator('text=Readings')).toBeVisible();
	});

	test('tablet viewer shows external links', async ({ page }) => {
		// Open a tablet
		await page.click('button.group');

		// Should have museum link
		await expect(page.locator('a:has-text("View at Museum")')).toBeVisible();
	});
});

test.describe('Read Page - Mobile', () => {
	test.use({ viewport: { width: 375, height: 667 } });

	test('tablet cards display correctly on mobile', async ({ page }) => {
		await page.goto('/read');

		// Cards should be visible and not overflow
		const card = page.locator('button.group').first();
		await expect(card).toBeVisible();

		const box = await card.boundingBox();
		expect(box?.width).toBeLessThanOrEqual(375);
	});

	test('Sign Explorer modal is mobile-friendly', async ({ page }) => {
		await page.goto('/read');
		await page.click('text=Open Sign Explorer');

		// Modal should slide up from bottom on mobile
		const modal = page.locator('.fixed.inset-0 > div');
		await expect(modal).toBeVisible();

		// Should have rounded top corners (mobile style)
		await expect(modal).toHaveClass(/rounded-t-2xl/);
	});
});
