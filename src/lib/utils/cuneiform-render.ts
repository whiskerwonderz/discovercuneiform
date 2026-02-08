/**
 * Text to cuneiform Unicode rendering utilities
 */

import { syllableMap } from '$lib/data/syllable-map';
import { syllabify } from './syllabify';

export interface RenderOptions {
	/** Add spaces between signs */
	addSpacing: boolean;
	/** Character to use for unknown syllables */
	unknownChar: string;
	/** Include word separators */
	wordSeparator: string;
	/** Include line breaks */
	preserveLineBreaks: boolean;
}

export const DEFAULT_RENDER_OPTIONS: RenderOptions = {
	addSpacing: false,
	unknownChar: '?',
	wordSeparator: ' ',
	preserveLineBreaks: true
};

/**
 * Render a syllable to cuneiform character
 */
export function renderSyllable(syllable: string, unknownChar: string = '?'): string {
	const mapping = syllableMap.get(syllable.toLowerCase());
	return mapping?.primarySign ?? unknownChar;
}

/**
 * Render a word to cuneiform
 */
export function renderWordToCuneiform(
	word: string,
	options: Partial<RenderOptions> = {}
): string {
	const opts = { ...DEFAULT_RENDER_OPTIONS, ...options };
	const syllables = syllabify(word);
	const signs = syllables.map(s => renderSyllable(s, opts.unknownChar));
	return opts.addSpacing ? signs.join(' ') : signs.join('');
}

/**
 * Render complete text to cuneiform
 */
export function renderTextToCuneiform(
	text: string,
	options: Partial<RenderOptions> = {}
): string {
	const opts = { ...DEFAULT_RENDER_OPTIONS, ...options };

	const lines = opts.preserveLineBreaks ? text.split('\n') : [text.replace(/\n/g, ' ')];

	const renderedLines = lines.map(line => {
		const words = line.split(/\s+/).filter(w => w.length > 0);
		const renderedWords = words.map(word => renderWordToCuneiform(word, opts));
		return renderedWords.join(opts.wordSeparator);
	});

	return opts.preserveLineBreaks ? renderedLines.join('\n') : renderedLines.join(' ');
}

/**
 * Get a breakdown of text into syllables and their cuneiform mappings
 */
export interface SyllableBreakdown {
	word: string;
	syllables: Array<{
		syllable: string;
		sign: string;
		mapped: boolean;
		confidence: 'high' | 'medium' | 'low' | 'none';
	}>;
}

export function getTextBreakdown(text: string): SyllableBreakdown[] {
	const words = text.split(/\s+/).filter(w => w.length > 0);

	return words.map(word => {
		const syllables = syllabify(word);
		return {
			word,
			syllables: syllables.map(syl => {
				const mapping = syllableMap.get(syl.toLowerCase());
				return {
					syllable: syl,
					sign: mapping?.primarySign ?? '?',
					mapped: !!mapping,
					confidence: mapping?.confidence ?? 'none'
				};
			})
		};
	});
}

/**
 * Format cuneiform for HTML display with proper styling
 */
export function formatCuneiformHTML(
	text: string,
	className: string = 'cuneiform'
): string {
	const cuneiform = renderTextToCuneiform(text);
	// Wrap each character in a span for potential individual styling
	const chars = [...cuneiform].map(char => {
		if (char === ' ' || char === '\n') return char;
		return `<span class="${className}-char" aria-label="${char}">${char}</span>`;
	}).join('');

	return `<span class="${className}">${chars}</span>`;
}

/**
 * Check if a string contains cuneiform characters
 */
export function containsCuneiform(text: string): boolean {
	// Cuneiform Unicode block: U+12000 to U+123FF and U+12400 to U+1247F
	return /[\u{12000}-\u{123FF}\u{12400}-\u{1247F}]/u.test(text);
}

/**
 * Extract cuneiform characters from mixed text
 */
export function extractCuneiform(text: string): string {
	return [...text].filter(char => {
		const code = char.codePointAt(0) ?? 0;
		return (code >= 0x12000 && code <= 0x123FF) || (code >= 0x12400 && code <= 0x1247F);
	}).join('');
}

/**
 * Count cuneiform characters in text
 */
export function countCuneiformChars(text: string): number {
	return extractCuneiform(text).length;
}
