/**
 * Syllabification engine for converting text to cuneiform
 * Breaks words into CV/VC/CVC patterns that map to cuneiform signs
 */

import { syllableMap, hasSyllableMapping } from '$lib/data/syllable-map';
import type { RenderedSyllable, RenderedWord, RenderedLine } from '$lib/types';

/**
 * Break a single word into syllables that can map to cuneiform signs
 * Uses a greedy longest-match algorithm
 */
export function syllabify(word: string): string[] {
	const cleaned = word.toLowerCase().replace(/[^a-z]/g, '');
	if (!cleaned) return [];

	const syllables: string[] = [];
	let i = 0;

	while (i < cleaned.length) {
		let matched = false;

		// Try longest match first (4, 3, 2, 1 characters)
		for (let len = Math.min(4, cleaned.length - i); len >= 1; len--) {
			const chunk = cleaned.slice(i, i + len);
			if (hasSyllableMapping(chunk)) {
				syllables.push(chunk);
				i += len;
				matched = true;
				break;
			}
		}

		if (!matched) {
			// Fallback: take single character
			syllables.push(cleaned[i]);
			i++;
		}
	}

	return syllables;
}

/**
 * Convert a syllable to its cuneiform representation
 */
export function syllableToSign(syllable: string): RenderedSyllable {
	const mapping = syllableMap.get(syllable.toLowerCase());

	if (mapping) {
		return {
			syllable,
			sign: mapping.primarySign,
			codepoint: '', // Would need reverse lookup
			isApproximation: mapping.confidence !== 'high',
			unmapped: false
		};
	}

	return {
		syllable,
		sign: '?',
		codepoint: '',
		isApproximation: false,
		unmapped: true
	};
}

/**
 * Render a complete word to cuneiform
 */
export function renderWord(word: string): RenderedWord {
	const syllables = syllabify(word);
	return {
		original: word,
		syllables: syllables.map(syllableToSign)
	};
}

/**
 * Render a line of text to cuneiform
 */
export function renderLine(line: string): RenderedLine {
	const words = line.split(/\s+/).filter(w => w.length > 0);
	return {
		original: line,
		words: words.map(renderWord)
	};
}

/**
 * Render complete text to cuneiform
 */
export function renderText(text: string): RenderedLine[] {
	const lines = text.split('\n');
	return lines.map(renderLine);
}

/**
 * Get the cuneiform string for a word (signs only)
 */
export function wordToCuneiform(word: string): string {
	const rendered = renderWord(word);
	return rendered.syllables.map(s => s.sign).join('');
}

/**
 * Get the cuneiform string for complete text
 */
export function textToCuneiform(text: string): string {
	const lines = renderText(text);
	return lines.map(line =>
		line.words.map(word =>
			word.syllables.map(s => s.sign).join('')
		).join(' ')
	).join('\n');
}

/**
 * Get statistics about syllabification results
 */
export function getSyllabificationStats(text: string) {
	const lines = renderText(text);
	let totalSyllables = 0;
	let mappedSyllables = 0;
	let approximatedSyllables = 0;
	let unmappedSyllables = 0;

	for (const line of lines) {
		for (const word of line.words) {
			for (const syl of word.syllables) {
				totalSyllables++;
				if (syl.unmapped) {
					unmappedSyllables++;
				} else if (syl.isApproximation) {
					approximatedSyllables++;
				} else {
					mappedSyllables++;
				}
			}
		}
	}

	return {
		totalSyllables,
		mappedSyllables,
		approximatedSyllables,
		unmappedSyllables,
		mappingRate: totalSyllables > 0 ? mappedSyllables / totalSyllables : 0,
		confidenceRate: totalSyllables > 0 ? (mappedSyllables + approximatedSyllables) / totalSyllables : 0
	};
}
