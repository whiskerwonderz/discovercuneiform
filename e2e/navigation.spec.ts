import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
	test('home page loads correctly', async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveTitle(/Discover Cuneiform/);
		await expect(page.locator('h1')).toContainText('Discover Cuneiform');
	});

	test('main navigation links work', async ({ page }) => {
		await page.goto('/');

		// Helper to navigate - use mode cards on home page (works on all viewports)
		async function navigateTo(href: string, expectedH1: string) {
			await page.goto('/');
			// Click the mode card link on home page
			const modeCard = page.locator(`section a[href="${href}"]`);
			await modeCard.click();
			await expect(page).toHaveURL(href);
			await expect(page.locator('h1')).toContainText(expectedH1);
		}

		await navigateTo('/read', 'Explore Ancient Tablets');
		await navigateTo('/learn', 'Scribe School');
		await navigateTo('/create', 'Verse in Clay');
		await navigateTo('/discover', 'Discover Cuneiform');
	});

	test('logo navigates to home', async ({ page }) => {
		await page.goto('/read');
		await page.click('a[href="/"]');
		await expect(page).toHaveURL('/');
	});

	test('footer links work', async ({ page }) => {
		await page.goto('/');

		// About link
		await page.click('footer a[href="/project"]');
		await expect(page).toHaveURL('/project');
		await expect(page.locator('h1')).toContainText('About Discover Cuneiform');

		// Resources link
		await page.goto('/');
		await page.click('footer a[href="/resources"]');
		await expect(page).toHaveURL('/resources');
		await expect(page.locator('h1')).toContainText('Resources & Attribution');
	});

	test('all main pages load without errors', async ({ page }) => {
		const pages = ['/', '/read', '/learn', '/create', '/discover', '/project', '/resources', '/about'];

		for (const path of pages) {
			const response = await page.goto(path);
			expect(response?.status()).toBe(200);
			// Check no console errors
			const errors: string[] = [];
			page.on('console', (msg) => {
				if (msg.type() === 'error') errors.push(msg.text());
			});
			await page.waitForLoadState('networkidle');
			expect(errors.length).toBe(0);
		}
	});
});

test.describe('Mobile Navigation', () => {
	test.use({ viewport: { width: 375, height: 667 } });

	test('hamburger menu works on mobile', async ({ page }) => {
		await page.goto('/');

		// Desktop nav should be hidden
		await expect(page.locator('nav .hidden.md\\:flex')).toBeHidden();

		// Hamburger button should be visible
		const hamburger = page.locator('button[aria-label="Toggle menu"]');
		await expect(hamburger).toBeVisible();

		// Click hamburger to open menu
		await hamburger.click();

		// Mobile menu should be visible
		await expect(page.locator('nav .md\\:hidden a[href="/read"]')).toBeVisible();
		await expect(page.locator('nav .md\\:hidden a[href="/learn"]')).toBeVisible();
		await expect(page.locator('nav .md\\:hidden a[href="/create"]')).toBeVisible();
		await expect(page.locator('nav .md\\:hidden a[href="/discover"]')).toBeVisible();

		// Click a link should close menu and navigate
		await page.click('nav .md\\:hidden a[href="/learn"]');
		await expect(page).toHaveURL('/learn');
	});
});
