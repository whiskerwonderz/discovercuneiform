import { test, expect } from '@playwright/test';

test.describe('Create/Verse in Clay Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/create');
	});

	test('page loads with correct elements', async ({ page }) => {
		await expect(page.locator('h1')).toContainText('Verse in Clay');
		await expect(page.locator('textarea')).toBeVisible();
		await expect(page.locator('text=Cuneiform Preview')).toBeVisible();
	});

	test('typing text generates cuneiform output', async ({ page }) => {
		const textarea = page.locator('textarea');
		await textarea.fill('hello world');

		// Wait for cuneiform to render
		await page.waitForTimeout(300);

		// Should show cuneiform characters in preview
		const preview = page.locator('.cuneiform').first();
		await expect(preview).toBeVisible();
		const text = await preview.textContent();
		expect(text?.length).toBeGreaterThan(0);
	});

	test('example buttons load text', async ({ page }) => {
		// Click "Love poem" example
		await page.click('button:has-text("Love poem")');

		const textarea = page.locator('textarea');
		const value = await textarea.inputValue();
		expect(value.length).toBeGreaterThan(0);
		expect(value).toContain('moon');
	});

	test('clear button works', async ({ page }) => {
		// Type something
		await page.fill('textarea', 'test text');

		// Click clear
		await page.click('button:has-text("Clear")');

		// Textarea should be empty
		const textarea = page.locator('textarea');
		const value = await textarea.inputValue();
		expect(value).toBe('');
	});

	test('copy button works', async ({ page }) => {
		await page.fill('textarea', 'hello');
		await page.waitForTimeout(300);

		// Copy button should be enabled
		const copyBtn = page.locator('button:has-text("Copy")');
		await expect(copyBtn).toBeEnabled();

		await copyBtn.click();
		await expect(page.locator('button:has-text("Copied!")')).toBeVisible();
	});

	test('style selector changes preview', async ({ page }) => {
		await page.fill('textarea', 'test');
		await page.waitForTimeout(300);

		// Default is clay-tablet
		const preview = page.locator('.min-h-36, .min-h-48');
		await expect(preview).toHaveClass(/from-clay-300/);

		// Switch to artistic print
		await page.click('button:has-text("Artistic Print")');
		await expect(preview).toHaveClass(/bg-clay-900/);

		// Switch to museum label
		await page.click('button:has-text("Museum Label")');
		await expect(preview).toHaveClass(/bg-clay-50/);
	});

	test('syllable breakdown appears', async ({ page }) => {
		await page.fill('textarea', 'luna');
		await page.waitForTimeout(300);

		// Should show syllable breakdown
		await expect(page.locator('text=Syllable Breakdown')).toBeVisible();
		await expect(page.locator('text=luna:')).toBeVisible();
	});

	test('mapping stats update', async ({ page }) => {
		const textarea = page.locator('textarea');
		// Clear first, then type
		await textarea.clear();
		await textarea.type('anna luna', { delay: 50 });

		// Wait for reactive update
		await page.waitForTimeout(1000);

		// Should show mapping results section - use more specific locator
		const mappingHeader = page.locator('h3', { hasText: 'Mapping Results' });
		await expect(mappingHeader).toBeVisible({ timeout: 10000 });
	});

	test('disclaimer is visible', async ({ page }) => {
		await expect(page.locator('text=phonetic approximation')).toBeVisible();
	});

	test('how it works dropdown expands', async ({ page }) => {
		const details = page.locator('details:has-text("How does this work")');
		await details.click();

		await expect(page.locator('text=syllabic writing system')).toBeVisible();
	});
});

test.describe('Create Page - Mobile', () => {
	test.use({ viewport: { width: 375, height: 667 } });

	test('example buttons wrap on mobile', async ({ page }) => {
		await page.goto('/create');

		// Buttons should be visible and wrapped
		const buttons = page.locator('button:has-text("Love poem"), button:has-text("Your name")');
		await expect(buttons.first()).toBeVisible();
	});

	test('textarea is usable on mobile', async ({ page }) => {
		await page.goto('/create');

		const textarea = page.locator('textarea');
		await textarea.fill('mobile test');

		const value = await textarea.inputValue();
		expect(value).toBe('mobile test');
	});
});
