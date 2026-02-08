import { test, expect } from '@playwright/test';

test.describe('Internal Links Validation', () => {
	test('all internal links are valid', async ({ page }) => {
		const pages = ['/', '/read', '/learn', '/create', '/discover', '/project', '/resources', '/about'];
		const brokenLinks: string[] = [];

		for (const pagePath of pages) {
			await page.goto(pagePath);

			// Find all internal links
			const links = await page.locator('a[href^="/"]').all();

			for (const link of links) {
				const href = await link.getAttribute('href');
				if (href && !href.includes('#')) {
					const response = await page.request.get(href);
					if (response.status() !== 200) {
						brokenLinks.push(`${pagePath} -> ${href} (${response.status()})`);
					}
				}
			}
		}

		expect(brokenLinks).toEqual([]);
	});
});

test.describe('External Links Validation', () => {
	test('Discover page external links have valid format', async ({ page }) => {
		await page.goto('/discover');

		// Get all external links
		const externalLinks = await page.locator('a[target="_blank"]').all();
		expect(externalLinks.length).toBeGreaterThan(0);

		for (const link of externalLinks) {
			const href = await link.getAttribute('href');
			expect(href).toBeTruthy();
			expect(href).toMatch(/^https?:\/\//);
		}
	});

	test('Resources page external links have valid format', async ({ page }) => {
		await page.goto('/resources');

		const externalLinks = await page.locator('a[target="_blank"]').all();
		expect(externalLinks.length).toBeGreaterThan(0);

		const expectedUrls = [
			'oracc.museum.upenn.edu',
			'cdli.mpiwg-berlin.mpg.de',
			'ebl.lmu.de',
			'unicode.org'
		];

		const hrefs: string[] = [];
		for (const link of externalLinks) {
			const href = await link.getAttribute('href');
			if (href) hrefs.push(href);
		}

		for (const expected of expectedUrls) {
			expect(hrefs.some((h) => h.includes(expected))).toBe(true);
		}
	});

	test('About page has source links', async ({ page }) => {
		await page.goto('/about');

		// Should have external links
		const externalLinks = await page.locator('a[target="_blank"]').count();
		expect(externalLinks).toBeGreaterThan(0);

		// Should have some scholarly source links
		const allLinks = await page.locator('a').allTextContents();
		const hasExternalRefs = allLinks.some(
			(text) =>
				text.includes('Wikipedia') ||
				text.includes('Britannica') ||
				text.includes('British Museum') ||
				text.includes('CDLI')
		);
		expect(hasExternalRefs).toBe(true);
	});

	test('Read page tablet cards have museum links', async ({ page }) => {
		await page.goto('/read');

		// Click a tablet
		await page.click('button.group');

		// Should have source link
		await expect(page.locator('a:has-text("View at Museum")')).toBeVisible();

		const museumLink = page.locator('a:has-text("View at Museum")');
		const href = await museumLink.getAttribute('href');
		expect(href).toMatch(/^https?:\/\//);
	});

	test('external links have rel="noopener noreferrer"', async ({ page }) => {
		const pages = ['/discover', '/resources', '/about'];

		for (const pagePath of pages) {
			await page.goto(pagePath);

			const externalLinks = await page.locator('a[target="_blank"]').all();

			for (const link of externalLinks) {
				const rel = await link.getAttribute('rel');
				expect(rel).toContain('noopener');
			}
		}
	});
});

test.describe('Navigation Flow', () => {
	test('home to explore flow', async ({ page }) => {
		await page.goto('/');

		// Click Explore mode card (works on both mobile and desktop)
		const exploreCard = page.locator('section a[href="/read"]');
		await exploreCard.click();
		await expect(page).toHaveURL('/read');

		// Click a tablet
		await page.click('button.group');

		// Should be able to browse signs
		await page.click('button:has-text("Browse Signs")');
		await expect(page.getByRole('heading', { name: /Sign Explorer/ })).toBeVisible();
	});

	test('home to learn flow', async ({ page }) => {
		await page.goto('/');

		// Click Learn mode card
		const learnCard = page.locator('section a[href="/learn"]');
		await learnCard.click();
		await expect(page).toHaveURL('/learn');

		// Click first available lesson
		const lesson = page.locator('a[href^="/learn/"]:not(.pointer-events-none)').first();
		await lesson.click();

		// Should be in lesson
		await expect(page.locator('text=Exit')).toBeVisible();

		// Exit back
		await page.click('text=Exit');
		await expect(page).toHaveURL('/learn');
	});

	test('home to create flow', async ({ page }) => {
		await page.goto('/');

		// Click Create mode card
		const createCard = page.locator('section a[href="/create"]');
		await createCard.click();
		await expect(page).toHaveURL('/create');

		// Type something
		await page.fill('textarea', 'anna');
		await page.waitForTimeout(500);

		// Should render cuneiform
		const cuneiformCount = await page.locator('.cuneiform').count();
		expect(cuneiformCount).toBeGreaterThan(0);
	});

	test('home to discover flow', async ({ page }) => {
		await page.goto('/');

		// Click Discover mode card
		const discoverCard = page.locator('section a[href="/discover"]');
		await discoverCard.click();
		await expect(page).toHaveURL('/discover');

		// CDLI link should be present
		const cdliLink = page.locator('a[href*="cdli"]').first();
		await expect(cdliLink).toBeVisible();
	});

	test('cross-page navigation from about', async ({ page }) => {
		await page.goto('/about');

		// Click Start Learning
		await page.click('a:has-text("Start Learning")');
		await expect(page).toHaveURL('/learn');

		// Go back and click Explore Tablets
		await page.goto('/about');
		await page.click('a:has-text("Explore Tablets")');
		await expect(page).toHaveURL('/read');
	});

	test('cross-page navigation from discover', async ({ page }) => {
		await page.goto('/discover');

		// Click Read full history link if it exists
		const historyLink = page.locator('a:has-text("Read full history")');
		const isVisible = await historyLink.isVisible().catch(() => false);
		if (isVisible) {
			await historyLink.click();
			await expect(page).toHaveURL('/about');
		}
		// Pass if link doesn't exist
	});
});
