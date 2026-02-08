/**
 * Wedge pattern matching algorithm for sign identification
 * Filters signs based on their wedge composition
 */

import type { CuneiformSign, WedgeComposition, SignSearchResult } from '$lib/types';
import { DEFAULT_TOLERANCE, type WedgeMatchTolerance } from '$lib/types/wedge';
import { SIGNS } from '$lib/data/signs';

/**
 * Check if two wedge compositions match within tolerance
 */
export function wedgeCompositionsMatch(
	a: WedgeComposition,
	b: WedgeComposition,
	tolerance: WedgeMatchTolerance = DEFAULT_TOLERANCE
): boolean {
	return (
		Math.abs(a.horizontal - b.horizontal) <= tolerance.horizontal &&
		Math.abs(a.vertical - b.vertical) <= tolerance.vertical &&
		Math.abs(a.oblique - b.oblique) <= tolerance.oblique &&
		Math.abs(a.winkelhaken - b.winkelhaken) <= tolerance.winkelhaken
	);
}

/**
 * Calculate similarity score between two wedge compositions (0-1)
 */
export function wedgeSimilarity(a: WedgeComposition, b: WedgeComposition): number {
	const totalA = a.horizontal + a.vertical + a.oblique + a.winkelhaken;
	const totalB = b.horizontal + b.vertical + b.oblique + b.winkelhaken;

	if (totalA === 0 && totalB === 0) return 1;
	if (totalA === 0 || totalB === 0) return 0;

	const diffH = Math.abs(a.horizontal - b.horizontal);
	const diffV = Math.abs(a.vertical - b.vertical);
	const diffO = Math.abs(a.oblique - b.oblique);
	const diffW = Math.abs(a.winkelhaken - b.winkelhaken);

	const maxDiff = Math.max(totalA, totalB);
	const totalDiff = diffH + diffV + diffO + diffW;

	return Math.max(0, 1 - totalDiff / maxDiff);
}

/**
 * Filter signs by wedge composition with tolerance
 */
export function matchByWedges(
	signs: CuneiformSign[],
	filter: WedgeComposition,
	tolerance: number = 1
): CuneiformSign[] {
	const toleranceObj: WedgeMatchTolerance = {
		horizontal: tolerance,
		vertical: tolerance,
		oblique: tolerance,
		winkelhaken: tolerance
	};

	return signs.filter(sign => {
		if (!sign.wedgeComposition) return false;
		return wedgeCompositionsMatch(sign.wedgeComposition, filter, toleranceObj);
	});
}

/**
 * Find signs matching a wedge composition, sorted by similarity
 */
export function findSignsByWedges(
	filter: WedgeComposition,
	tolerance: number = 1
): SignSearchResult[] {
	const results: SignSearchResult[] = [];

	for (const sign of SIGNS) {
		if (!sign.wedgeComposition) continue;

		const toleranceObj: WedgeMatchTolerance = {
			horizontal: tolerance,
			vertical: tolerance,
			oblique: tolerance,
			winkelhaken: tolerance
		};

		if (wedgeCompositionsMatch(sign.wedgeComposition, filter, toleranceObj)) {
			results.push({
				sign,
				matchScore: wedgeSimilarity(sign.wedgeComposition, filter)
			});
		}
	}

	// Sort by match score (highest first)
	return results.sort((a, b) => b.matchScore - a.matchScore);
}

/**
 * Get signs with exactly the specified wedge composition
 */
export function findExactWedgeMatch(filter: WedgeComposition): CuneiformSign[] {
	return SIGNS.filter(sign => {
		if (!sign.wedgeComposition) return false;
		return (
			sign.wedgeComposition.horizontal === filter.horizontal &&
			sign.wedgeComposition.vertical === filter.vertical &&
			sign.wedgeComposition.oblique === filter.oblique &&
			sign.wedgeComposition.winkelhaken === filter.winkelhaken
		);
	});
}

/**
 * Get the total wedge count for a composition
 */
export function getTotalWedges(composition: WedgeComposition): number {
	return (
		composition.horizontal +
		composition.vertical +
		composition.oblique +
		composition.winkelhaken
	);
}

/**
 * Get signs by total wedge count range
 */
export function findSignsByWedgeCount(min: number, max: number): CuneiformSign[] {
	return SIGNS.filter(sign => {
		if (!sign.wedgeComposition) return false;
		const total = getTotalWedges(sign.wedgeComposition);
		return total >= min && total <= max;
	});
}

/**
 * Group signs by their total wedge count
 */
export function groupSignsByWedgeCount(): Map<number, CuneiformSign[]> {
	const groups = new Map<number, CuneiformSign[]>();

	for (const sign of SIGNS) {
		if (!sign.wedgeComposition) continue;
		const total = getTotalWedges(sign.wedgeComposition);

		if (!groups.has(total)) {
			groups.set(total, []);
		}
		groups.get(total)!.push(sign);
	}

	return groups;
}

/**
 * Create empty wedge filter
 */
export function createEmptyFilter(): WedgeComposition {
	return { horizontal: 0, vertical: 0, oblique: 0, winkelhaken: 0 };
}
