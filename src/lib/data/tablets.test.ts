import { describe, it, expect } from 'vitest';
import { FAMOUS_TABLETS, getTabletById } from './tablets';

describe('Tablets Data', () => {
	it('should have at least one tablet', () => {
		expect(FAMOUS_TABLETS.length).toBeGreaterThan(0);
	});

	it('should have unique tablet IDs', () => {
		const ids = FAMOUS_TABLETS.map(t => t.id);
		const uniqueIds = new Set(ids);
		expect(uniqueIds.size).toBe(ids.length);
	});

	it('each tablet should have required fields', () => {
		for (const tablet of FAMOUS_TABLETS) {
			expect(tablet.id).toBeTruthy();
			expect(tablet.name).toBeTruthy();
			expect(tablet.description).toBeTruthy();
			expect(tablet.period).toBeTruthy();
			expect(tablet.language).toBeTruthy();
			expect(tablet.collection).toBeTruthy();
			expect(tablet.sourceUrl).toBeTruthy();
			expect(tablet.text.length).toBeGreaterThan(0);
		}
	});

	it('each tablet text line should have transliteration and translation', () => {
		for (const tablet of FAMOUS_TABLETS) {
			for (const line of tablet.text) {
				expect(line.line).toBeTruthy();
				expect(line.transliteration).toBeTruthy();
				expect(line.translation).toBeTruthy();
			}
		}
	});

	it('getTabletById should return correct tablet', () => {
		const tablet = getTabletById('gilgamesh-flood');
		expect(tablet).toBeDefined();
		expect(tablet?.name).toBe('Gilgamesh Flood Tablet');
	});

	it('getTabletById should return undefined for non-existent ID', () => {
		const tablet = getTabletById('non-existent');
		expect(tablet).toBeUndefined();
	});

	it('source URLs should be valid URLs', () => {
		for (const tablet of FAMOUS_TABLETS) {
			expect(() => new URL(tablet.sourceUrl)).not.toThrow();
			if (tablet.cdliUrl) {
				expect(() => new URL(tablet.cdliUrl as string)).not.toThrow();
			}
		}
	});
});
