/**
 * Create mode (Verse in Clay) state using Svelte 5 runes
 */

import type { RenderStyle, RenderedVerse, RenderedLine } from '$lib/types';
import { renderText, getSyllabificationStats } from '$lib/utils/syllabify';
import { renderTextToCuneiform } from '$lib/utils/cuneiform-render';

class CreatorStore {
	/** Input text */
	inputText = $state('');

	/** Selected render style */
	renderStyle = $state<RenderStyle>('clay-tablet');

	/** Whether to show transliteration */
	showTransliteration = $state(true);

	/** Whether to show original text */
	showOriginal = $state(true);

	/** Syllable overrides (user-selected alternative mappings) */
	syllableOverrides = $state<Map<string, string>>(new Map());

	/** Rendered lines */
	renderedLines = $derived.by(() => {
		if (!this.inputText.trim()) return [];
		return renderText(this.inputText);
	});

	/** Full rendered verse object */
	renderedVerse = $derived.by((): RenderedVerse | null => {
		if (!this.inputText.trim()) return null;
		return {
			originalText: this.inputText,
			lines: this.renderedLines,
			style: this.renderStyle,
			timestamp: Date.now()
		};
	});

	/** Cuneiform output string */
	cuneiformOutput = $derived.by(() => {
		if (!this.inputText.trim()) return '';
		return renderTextToCuneiform(this.inputText);
	});

	/** Syllabification statistics */
	stats = $derived.by(() => {
		if (!this.inputText.trim()) {
			return {
				totalSyllables: 0,
				mappedSyllables: 0,
				approximatedSyllables: 0,
				unmappedSyllables: 0,
				mappingRate: 0,
				confidenceRate: 0
			};
		}
		return getSyllabificationStats(this.inputText);
	});

	/** Word count */
	wordCount = $derived.by(() => {
		return this.inputText.trim().split(/\s+/).filter(w => w.length > 0).length;
	});

	/** Character count */
	charCount = $derived.by(() => {
		return this.inputText.length;
	});

	/** Set input text */
	setText(text: string) {
		this.inputText = text;
	}

	/** Append text */
	appendText(text: string) {
		this.inputText += text;
	}

	/** Clear text */
	clearText() {
		this.inputText = '';
		this.syllableOverrides = new Map();
	}

	/** Set render style */
	setStyle(style: RenderStyle) {
		this.renderStyle = style;
	}

	/** Toggle transliteration */
	toggleTransliteration() {
		this.showTransliteration = !this.showTransliteration;
	}

	/** Toggle original text */
	toggleOriginal() {
		this.showOriginal = !this.showOriginal;
	}

	/** Override a syllable mapping */
	overrideSyllable(syllable: string, sign: string) {
		const newOverrides = new Map(this.syllableOverrides);
		newOverrides.set(syllable, sign);
		this.syllableOverrides = newOverrides;
	}

	/** Remove a syllable override */
	removeOverride(syllable: string) {
		const newOverrides = new Map(this.syllableOverrides);
		newOverrides.delete(syllable);
		this.syllableOverrides = newOverrides;
	}

	/** Clear all overrides */
	clearOverrides() {
		this.syllableOverrides = new Map();
	}

	/** Get current verse for export */
	getExportVerse(): RenderedVerse | null {
		return this.renderedVerse;
	}

	/** Load example text */
	loadExample(text: string) {
		this.inputText = text;
		this.syllableOverrides = new Map();
	}

	/** Reset to defaults */
	reset() {
		this.inputText = '';
		this.renderStyle = 'clay-tablet';
		this.showTransliteration = true;
		this.showOriginal = true;
		this.syllableOverrides = new Map();
	}
}

export const creatorStore = new CreatorStore();
