/**
 * Example ancient phrases for demonstration and learning
 * Authenticated Sumerian and Akkadian expressions with translations
 */

export interface AncientPhrase {
	id: string;
	sumerian?: string;
	akkadian?: string;
	transliteration: string;
	cuneiform: string;
	translation: string;
	context: string;
	source: string;
}

export const PHRASES: AncientPhrase[] = [
	{
		id: 'royal-title-1',
		sumerian: 'lugal kiengi kiuri',
		transliteration: 'lugal ki-en-gi ki-uri',
		cuneiform: '𒈗 𒆠𒂗𒄀 𒆠𒌵',
		translation: 'King of Sumer and Akkad',
		context: 'This was the most prestigious royal title in Mesopotamia, claimed by rulers who controlled both the Sumerian south and Akkadian north.',
		source: 'Common royal inscription formula'
	},
	{
		id: 'divine-blessing',
		sumerian: 'an ki',
		transliteration: 'an-ki',
		cuneiform: '𒀭𒆠',
		translation: 'Heaven and Earth / The Universe',
		context: 'Represents the cosmic totality in Sumerian thought. An (sky) and Ki (earth) were primordial deities whose union created the world.',
		source: 'Sumerian cosmological texts'
	},
	{
		id: 'temple-dedication',
		sumerian: 'e dingir',
		transliteration: 'e₂ dingir',
		cuneiform: '𒂍 𒀭',
		translation: 'House of God / Temple',
		context: 'Temples were the center of Mesopotamian city life, serving as religious, economic, and administrative hubs.',
		source: 'Temple inscriptions'
	},
	{
		id: 'scribe-colophon',
		sumerian: 'dub sar',
		transliteration: 'dub-sar',
		cuneiform: '𒁾𒊬',
		translation: 'Tablet-writer / Scribe',
		context: 'Scribes were highly trained professionals who underwent years of education in the edubba (tablet house). This title appears in countless colophons.',
		source: 'Scribal colophons'
	},
	{
		id: 'greeting-1',
		akkadian: 'lū šalmu',
		transliteration: 'lu₂ šalmu',
		cuneiform: '𒇻 𒊩𒈬',
		translation: 'May you be well',
		context: 'A common Akkadian greeting found in letters. Mesopotamian correspondence often began with wishes for the recipient\'s health and prosperity.',
		source: 'Old Babylonian letters'
	},
	{
		id: 'royal-inscription-1',
		akkadian: 'šarrum dannum',
		transliteration: 'šarrum dannum',
		cuneiform: '𒈗 𒁕𒀭𒉡𒌝',
		translation: 'Mighty King',
		context: 'An epithet used by Akkadian kings to emphasize their power and divine mandate to rule.',
		source: 'Royal inscriptions'
	},
	{
		id: 'wisdom-saying-1',
		sumerian: 'nam lugal',
		transliteration: 'nam-lugal',
		cuneiform: '𒉆𒈗',
		translation: 'Kingship',
		context: 'The concept of nam-lugal (kingship) was believed to descend from heaven. The Sumerian King List records how kingship was transferred between cities.',
		source: 'Sumerian King List'
	},
	{
		id: 'date-formula',
		sumerian: 'mu an',
		transliteration: 'mu an',
		cuneiform: '𒈬 𒀭',
		translation: 'Year of An / Year-name',
		context: 'Years in ancient Mesopotamia were named after significant events. This formula begins many date notations.',
		source: 'Administrative texts'
	},
	{
		id: 'prayer-opening',
		akkadian: 'ana ili',
		transliteration: 'ana ili',
		cuneiform: '𒀀𒈾 𒀭',
		translation: 'To the god',
		context: 'Prayers and offerings were addressed to specific deities. This phrase opens many devotional texts.',
		source: 'Prayer texts'
	},
	{
		id: 'law-formula',
		akkadian: 'šumma awilum',
		transliteration: 'šum-ma a-wi-lum',
		cuneiform: '𒋗𒈠 𒀀𒉿𒈝',
		translation: 'If a man...',
		context: 'This phrase begins most laws in Mesopotamian legal codes, including the famous Code of Hammurabi.',
		source: 'Law codes'
	},
	{
		id: 'creation-myth',
		akkadian: 'enuma elish',
		transliteration: 'e-nu-ma e-liš',
		cuneiform: '𒂊𒉡𒈠 𒂊𒇷𒅖',
		translation: 'When on high...',
		context: 'The opening words of the Babylonian creation epic, describing the primordial state before heaven and earth were named.',
		source: 'Enuma Elish tablet I'
	},
	{
		id: 'gilgamesh-1',
		akkadian: 'sha naqba imuru',
		transliteration: 'ša naq-ba i-mu-ru',
		cuneiform: '𒊭 𒈾𒀝𒁀 𒄿𒈬𒊒',
		translation: 'He who saw the deep',
		context: 'The opening line of the Epic of Gilgamesh, referring to the hero\'s journey to gain wisdom and knowledge of all things.',
		source: 'Epic of Gilgamesh, Tablet I'
	}
];

/**
 * Get a phrase by ID
 */
export function getPhraseById(id: string): AncientPhrase | undefined {
	return PHRASES.find(p => p.id === id);
}

/**
 * Get phrases in a specific language
 */
export function getPhrasesByLanguage(language: 'sumerian' | 'akkadian'): AncientPhrase[] {
	return PHRASES.filter(p =>
		language === 'sumerian' ? p.sumerian : p.akkadian
	);
}

/**
 * Get a random phrase for display
 */
export function getRandomPhrase(): AncientPhrase {
	return PHRASES[Math.floor(Math.random() * PHRASES.length)];
}
