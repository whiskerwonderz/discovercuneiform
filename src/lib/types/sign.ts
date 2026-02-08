/**
 * Core cuneiform sign types based on ORACC Sign List (OSL) and Unicode Standard
 */

export interface CuneiformSign {
	/** Unicode code point (e.g., "U+12000") */
	codepoint: string;
	/** The rendered Unicode character (e.g., "𒀀") */
	character: string;
	/** OSL canonical sign name (e.g., "A", "LUGAL") */
	name: string;
	/** All attested reading values */
	readings: SignReading[];
	/** English semantic meanings */
	meanings: string[];
	/** Semantic category */
	category: SignCategory;
	/** Wedge stroke composition for filtering */
	wedgeComposition?: WedgeComposition;
	/** Borger MZL reference number */
	mzlNumber?: number;
	/** Data source provenance */
	source: DataSource;
}

export interface SignReading {
	/** The reading value (e.g., "a", "dur5", "e4") */
	value: string;
	/** Type of reading */
	type: 'syllabic' | 'logographic';
	/** Language association */
	language?: 'sumerian' | 'akkadian';
}

export interface WedgeComposition {
	/** Number of horizontal wedge strokes */
	horizontal: number;
	/** Number of vertical wedge strokes */
	vertical: number;
	/** Number of oblique/diagonal wedge strokes */
	oblique: number;
	/** Number of winkelhaken (corner) impressions */
	winkelhaken: number;
}

export type SignCategory =
	| 'nature'
	| 'body'
	| 'people'
	| 'actions'
	| 'objects'
	| 'numbers'
	| 'animals'
	| 'food'
	| 'buildings'
	| 'divine'
	| 'cosmos'
	| 'abstract'
	| 'containers'
	| 'textile'
	| 'tools';

export interface DataSource {
	/** Primary data source */
	primary: 'OSL' | 'Unicode';
	/** OSL version if applicable */
	oslVersion?: string;
	/** Unicode Standard version */
	unicodeVersion: string;
	/** Full attribution text */
	attribution: string;
}

/** Mapping from syllable to cuneiform sign for Create mode */
export interface SyllableMapping {
	/** The syllable (e.g., "mu", "an") */
	syllable: string;
	/** Primary sign for this syllable */
	primarySign: string;
	/** Alternative signs that can represent this syllable */
	alternatives?: string[];
	/** Confidence level of this mapping */
	confidence: 'high' | 'medium' | 'low';
}

/** Result of a wedge-based sign search */
export interface SignSearchResult {
	sign: CuneiformSign;
	/** How closely the wedge composition matches (0-1) */
	matchScore: number;
}
