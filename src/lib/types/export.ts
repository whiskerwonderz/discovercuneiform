/**
 * Types for export functionality in Create mode
 */

export type ExportFormat = 'png' | 'svg' | 'pdf';

export type RenderStyle = 'clay-tablet' | 'museum-label' | 'artistic-print' | 'side-by-side';

export interface ExportOptions {
	/** Output format */
	format: ExportFormat;
	/** Visual style to render */
	style: RenderStyle;
	/** DPI for raster exports (PNG) */
	dpi: number;
	/** Whether to include attribution block */
	includeAttribution: boolean;
	/** Whether to include transliteration */
	includeTransliteration: boolean;
	/** Width in pixels (for PNG/SVG) or points (for PDF) */
	width: number;
	/** Height in pixels (for PNG/SVG) or points (for PDF) */
	height: number;
}

export const DEFAULT_EXPORT_OPTIONS: ExportOptions = {
	format: 'png',
	style: 'clay-tablet',
	dpi: 300,
	includeAttribution: true,
	includeTransliteration: true,
	width: 1200,
	height: 800
};

/** Style-specific rendering configuration */
export interface RenderStyleConfig {
	/** Background color or gradient */
	background: string;
	/** Cuneiform text color */
	textColor: string;
	/** Whether to add emboss/deboss effects */
	embossEffect: boolean;
	/** Whether to add noise/grain texture */
	grainOverlay: boolean;
	/** Border radius for tablet edges */
	borderRadius: number;
	/** Font size multiplier for cuneiform */
	cuneiformScale: number;
	/** Show transliteration below signs */
	showTransliteration: boolean;
	/** Show original text */
	showOriginal: boolean;
}

export const RENDER_STYLE_CONFIGS: Record<RenderStyle, RenderStyleConfig> = {
	'clay-tablet': {
		background: 'linear-gradient(135deg, #d4c4a0 0%, #c4a882 50%, #a8895e 100%)',
		textColor: '#3d2e0a',
		embossEffect: true,
		grainOverlay: true,
		borderRadius: 16,
		cuneiformScale: 1.5,
		showTransliteration: false,
		showOriginal: false
	},
	'museum-label': {
		background: '#faf6f0',
		textColor: '#1a1510',
		embossEffect: false,
		grainOverlay: false,
		borderRadius: 0,
		cuneiformScale: 1.2,
		showTransliteration: true,
		showOriginal: true
	},
	'artistic-print': {
		background: '#f5ede0',
		textColor: '#1a1510',
		embossEffect: false,
		grainOverlay: false,
		borderRadius: 0,
		cuneiformScale: 2.0,
		showTransliteration: false,
		showOriginal: false
	},
	'side-by-side': {
		background: '#faf6f0',
		textColor: '#1a1510',
		embossEffect: false,
		grainOverlay: false,
		borderRadius: 0,
		cuneiformScale: 1.0,
		showTransliteration: true,
		showOriginal: true
	}
};

/** Attribution text that must appear on all exports */
export const ATTRIBUTION_TEXT = `This rendering uses phonetic syllabic approximation to map modern language sounds to ancient cuneiform sign values. It is not an authentic Sumerian or Akkadian translation. Sign data sourced from the ORACC Sign List (OSL, CC0 Public Domain) maintained by Steve Tinney & Niek Veldhuis, University of Pennsylvania. For scholarly cuneiform work, consult oracc.org.`;

/** Rendered verse ready for export */
export interface RenderedVerse {
	/** Original input text */
	originalText: string;
	/** Text broken into lines */
	lines: RenderedLine[];
	/** Render style used */
	style: RenderStyle;
	/** Timestamp of rendering */
	timestamp: number;
}

export interface RenderedLine {
	/** Original line text */
	original: string;
	/** Words in the line */
	words: RenderedWord[];
}

export interface RenderedWord {
	/** Original word */
	original: string;
	/** Syllable breakdown */
	syllables: RenderedSyllable[];
}

export interface RenderedSyllable {
	/** The syllable text */
	syllable: string;
	/** Mapped cuneiform sign (Unicode character) */
	sign: string;
	/** Sign codepoint */
	codepoint: string;
	/** Whether this is a fallback/approximation */
	isApproximation: boolean;
	/** Whether no mapping was found */
	unmapped: boolean;
}
