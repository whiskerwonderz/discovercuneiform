/**
 * Sign category definitions and metadata
 */

import type { SignCategory } from '$lib/types';

export interface CategoryInfo {
	id: SignCategory;
	name: string;
	description: string;
	icon: string;
}

export const CATEGORIES: CategoryInfo[] = [
	{
		id: 'nature',
		name: 'Nature',
		description: 'Water, earth, sky, celestial bodies, weather phenomena',
		icon: '🌊'
	},
	{
		id: 'body',
		name: 'Body',
		description: 'Parts of the human body, physical actions',
		icon: '👁️'
	},
	{
		id: 'people',
		name: 'People',
		description: 'Humans, social roles, professions, titles',
		icon: '👤'
	},
	{
		id: 'actions',
		name: 'Actions',
		description: 'Verbs, movements, processes',
		icon: '🏃'
	},
	{
		id: 'objects',
		name: 'Objects',
		description: 'Manufactured items, artifacts, tools',
		icon: '🏺'
	},
	{
		id: 'numbers',
		name: 'Numbers',
		description: 'Numerals and counting signs',
		icon: '🔢'
	},
	{
		id: 'animals',
		name: 'Animals',
		description: 'Domestic and wild animals, mythical creatures',
		icon: '🐂'
	},
	{
		id: 'food',
		name: 'Food',
		description: 'Grains, bread, beer, food production',
		icon: '🌾'
	},
	{
		id: 'buildings',
		name: 'Buildings',
		description: 'Structures, temples, houses, cities',
		icon: '🏛️'
	},
	{
		id: 'divine',
		name: 'Divine',
		description: 'Gods, religious concepts, sacred objects',
		icon: '⭐'
	},
	{
		id: 'cosmos',
		name: 'Cosmos',
		description: 'Heaven, earth, underworld, cosmic concepts',
		icon: '🌙'
	},
	{
		id: 'abstract',
		name: 'Abstract',
		description: 'Concepts, qualities, relationships',
		icon: '💭'
	},
	{
		id: 'containers',
		name: 'Containers',
		description: 'Vessels, jars, storage, measures',
		icon: '🫙'
	},
	{
		id: 'textile',
		name: 'Textile',
		description: 'Cloth, garments, weaving',
		icon: '🧵'
	},
	{
		id: 'tools',
		name: 'Tools',
		description: 'Implements, weapons, agricultural tools',
		icon: '⚒️'
	}
];

export function getCategoryInfo(category: SignCategory): CategoryInfo | undefined {
	return CATEGORIES.find(c => c.id === category);
}

export function getCategoryName(category: SignCategory): string {
	return getCategoryInfo(category)?.name ?? category;
}
