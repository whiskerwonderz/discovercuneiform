/**
 * Shared sign database state using Svelte 5 runes
 */

import type { CuneiformSign, SignCategory } from '$lib/types';
import { SIGNS, getSignsByCategory, getSignsByReading, searchSignsByMeaning } from '$lib/data/signs';

class SignsStore {
	/** All signs in the database */
	allSigns = $state<CuneiformSign[]>(SIGNS);

	/** Currently selected category filter */
	categoryFilter = $state<SignCategory | null>(null);

	/** Search query */
	searchQuery = $state('');

	/** Filtered signs based on category and search */
	filteredSigns = $derived.by(() => {
		let signs = this.allSigns;

		// Filter by category
		if (this.categoryFilter) {
			signs = signs.filter(s => s.category === this.categoryFilter);
		}

		// Filter by search query
		if (this.searchQuery.trim()) {
			const query = this.searchQuery.toLowerCase().trim();

			signs = signs.filter(sign => {
				// Match by name
				if (sign.name.toLowerCase().includes(query)) return true;

				// Match by reading
				if (sign.readings.some(r => r.value.toLowerCase().includes(query))) return true;

				// Match by meaning
				if (sign.meanings.some(m => m.toLowerCase().includes(query))) return true;

				// Match by character
				if (sign.character === query) return true;

				return false;
			});
		}

		return signs;
	});

	/** Total sign count */
	totalCount = $derived(this.allSigns.length);

	/** Filtered count */
	filteredCount = $derived(this.filteredSigns.length);

	/** Set category filter */
	setCategory(category: SignCategory | null) {
		this.categoryFilter = category;
	}

	/** Set search query */
	setSearch(query: string) {
		this.searchQuery = query;
	}

	/** Clear all filters */
	clearFilters() {
		this.categoryFilter = null;
		this.searchQuery = '';
	}

	/** Get signs by category */
	getByCategory(category: SignCategory): CuneiformSign[] {
		return getSignsByCategory(category);
	}

	/** Get signs by reading */
	getByReading(reading: string): CuneiformSign[] {
		return getSignsByReading(reading);
	}

	/** Search by meaning */
	searchByMeaning(query: string): CuneiformSign[] {
		return searchSignsByMeaning(query);
	}
}

export const signsStore = new SignsStore();
