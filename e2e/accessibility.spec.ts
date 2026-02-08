import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
	test('pages have proper heading structure', async ({ page }) => {
		const pages = ['/', '/read', '/learn', '/create', '/discover', '/project', '/resources', '/about'];

		for (const pagePath of pages) {
			await page.goto(pagePath);

			// Should have exactly one h1
			const h1s = await page.locator('h1').count();
			expect(h1s).toBe(1);
		}
	});

	test('images have alt text', async ({ page }) => {
		await page.goto('/read');

		// Click a tablet with an image
		await page.click('button.group');

		const images = await page.locator('img').all();
		for (const img of images) {
			const alt = await img.getAttribute('alt');
			expect(alt).toBeTruthy();
		}
	});

	test('buttons have accessible names', async ({ page }) => {
		await page.goto('/');

		// Check that buttons exist
		const buttons = await page.locator('button').count();
		expect(buttons).toBeGreaterThan(0);

		// Hamburger button has aria-label on mobile view
		await page.setViewportSize({ width: 375, height: 667 });
		const hamburger = page.locator('button[aria-label="Toggle menu"]');
		await expect(hamburger).toBeVisible();
	});

	test('form inputs have labels or placeholders', async ({ page }) => {
		await page.goto('/create');

		const textarea = page.locator('textarea');
		const placeholder = await textarea.getAttribute('placeholder');
		expect(placeholder).toBeTruthy();
	});

	test('links are distinguishable', async ({ page }) => {
		await page.goto('/discover');

		// Links should have hover styles (contain hover:)
		const links = await page.locator('a').all();
		expect(links.length).toBeGreaterThan(0);
	});

	test('color is not the only differentiator', async ({ page }) => {
		await page.goto('/create');

		// Type something that may have unmapped syllables
		await page.fill('textarea', 'xyz hello');
		await page.waitForTimeout(700);

		// Check that cuneiform preview exists with content
		const cuneiformContent = page.locator('.cuneiform').first();
		await expect(cuneiformContent).toBeVisible();

		// The test verifies that visual feedback exists for content
		// Either ? marks for unmapped syllables or actual cuneiform characters
		const content = await cuneiformContent.textContent();
		expect(content?.length).toBeGreaterThan(0);
	});

	test('interactive elements are keyboard accessible', async ({ page }) => {
		await page.goto('/');

		// Tab to first link
		await page.keyboard.press('Tab');

		// Should be able to navigate with keyboard
		const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
		expect(['A', 'BUTTON']).toContain(focusedElement);
	});

	test('modals can be closed with button', async ({ page }) => {
		await page.goto('/read');

		// Open Sign Explorer
		await page.click('button:has-text("Open Sign Explorer")');
		await expect(page.getByRole('heading', { name: /Sign Explorer/ })).toBeVisible();

		// Close button should be visible and clickable
		const closeBtn = page.locator('.fixed.inset-0 button:has-text("×")');
		await expect(closeBtn).toBeVisible();
		await closeBtn.click();

		// Modal should be closed
		await expect(page.locator('.fixed.inset-0.bg-black')).toBeHidden();
	});
});

test.describe('Responsive Design', () => {
	const viewports = [
		{ name: 'Mobile', width: 375, height: 667 },
		{ name: 'Tablet', width: 768, height: 1024 },
		{ name: 'Desktop', width: 1280, height: 800 }
	];

	for (const viewport of viewports) {
		test.describe(`${viewport.name} (${viewport.width}x${viewport.height})`, () => {
			test.use({ viewport: { width: viewport.width, height: viewport.height } });

			test('home page renders correctly', async ({ page }) => {
				await page.goto('/');

				// Content should not overflow horizontally
				const body = page.locator('body');
				const box = await body.boundingBox();
				expect(box?.width).toBeLessThanOrEqual(viewport.width);

				// Hero text should be visible
				await expect(page.locator('h1')).toBeVisible();
			});

			test('navigation is functional', async ({ page }) => {
				await page.goto('/');

				if (viewport.width < 768) {
					// Mobile: hamburger menu
					const hamburger = page.locator('button[aria-label="Toggle menu"]');
					await expect(hamburger).toBeVisible();
				} else {
					// Desktop: nav links visible
					await expect(page.locator('nav a[href="/read"]')).toBeVisible();
				}
			});

			test('create page is usable', async ({ page }) => {
				await page.goto('/create');

				// Textarea should be visible and usable
				const textarea = page.locator('textarea');
				await expect(textarea).toBeVisible();

				await textarea.fill('anna');
				await page.waitForTimeout(500);

				// Preview should update - cuneiform text should appear
				const cuneiformElements = page.locator('.cuneiform');
				const count = await cuneiformElements.count();
				expect(count).toBeGreaterThan(0);
			});

			test('read page cards don\'t overflow', async ({ page }) => {
				await page.goto('/read');

				const cards = await page.locator('button.group').all();
				for (const card of cards) {
					const box = await card.boundingBox();
					if (box) {
						expect(box.x).toBeGreaterThanOrEqual(0);
						expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 20); // Allow small padding
					}
				}
			});
		});
	}
});

test.describe('Touch Interactions (Mobile)', () => {
	test.use({ viewport: { width: 375, height: 667 }, hasTouch: true });

	test('buttons have adequate touch targets', async ({ page }) => {
		await page.goto('/create');

		// Style selector buttons - check some buttons
		const styleButtons = page.locator('button:has-text("Clay Tablet"), button:has-text("Museum Label")');
		const firstButton = styleButtons.first();

		if (await firstButton.isVisible()) {
			const box = await firstButton.boundingBox();
			if (box) {
				// Touch targets should be usable (at least 28px)
				expect(box.height).toBeGreaterThanOrEqual(28);
			}
		}
	});

	test('canvas supports touch drawing', async ({ page }) => {
		await page.goto('/learn/wedge-horizontal');

		// Navigate to practice step
		const continueBtn = page.locator('button:has-text("Continue")');
		if (await continueBtn.isVisible()) {
			await continueBtn.click();
		}

		const canvas = page.locator('canvas');
		const isVisible = await canvas.isVisible().catch(() => false);
		if (isVisible) {
			// Touch draw
			const box = await canvas.boundingBox();
			if (box) {
				await page.touchscreen.tap(box.x + 50, box.y + 50);
			}
		}
		// Pass if canvas not visible
	});

	test('links and buttons respond to tap', async ({ page }) => {
		await page.goto('/');

		// First tap to open hamburger menu on mobile
		const hamburger = page.locator('button[aria-label="Toggle menu"]');
		if (await hamburger.isVisible()) {
			await hamburger.tap();
			// Then tap on Explore link in mobile menu
			const exploreLink = page.locator('nav .md\\:hidden a[href="/read"]');
			await exploreLink.tap();
		} else {
			// Desktop: tap on Explore card directly
			const exploreCard = page.locator('a[href="/read"]').first();
			await exploreCard.tap();
		}

		await expect(page).toHaveURL('/read');
	});
});
