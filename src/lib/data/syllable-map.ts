/**
 * Syllable to cuneiform sign mappings for Create mode
 * Used to convert modern text into cuneiform phonetic approximations
 *
 * Data sourced from ORACC Sign List (OSL) syllabic readings
 * CC0 Public Domain
 */

import type { SyllableMapping } from '$lib/types';

/**
 * Core syllable to sign mappings
 * Maps common CV, VC, and CVC syllable patterns to cuneiform signs
 */
export const SYLLABLE_MAPPINGS: SyllableMapping[] = [
	// === VOWELS ===
	{ syllable: 'a', primarySign: '𒀀', confidence: 'high' },
	{ syllable: 'e', primarySign: '𒂊', confidence: 'high' },
	{ syllable: 'i', primarySign: '𒅈', confidence: 'high' },
	{ syllable: 'u', primarySign: '𒌋', confidence: 'high' },

	// === BA SERIES ===
	{ syllable: 'ba', primarySign: '𒁀', confidence: 'high' },
	{ syllable: 'be', primarySign: '𒁁', alternatives: ['𒁀'], confidence: 'high' },
	{ syllable: 'bi', primarySign: '𒁉', confidence: 'high' },
	{ syllable: 'bu', primarySign: '𒁑', confidence: 'high' },

	// === DA SERIES ===
	{ syllable: 'da', primarySign: '𒁕', confidence: 'high' },
	{ syllable: 'de', primarySign: '𒁲', confidence: 'medium' },
	{ syllable: 'di', primarySign: '𒁳', confidence: 'high' },
	{ syllable: 'du', primarySign: '𒁺', confidence: 'high' },

	// === GA SERIES ===
	{ syllable: 'ga', primarySign: '𒂵', confidence: 'high' },
	{ syllable: 'ge', primarySign: '𒄀', alternatives: ['𒄄'], confidence: 'medium' },
	{ syllable: 'gi', primarySign: '𒄀', confidence: 'high' },
	{ syllable: 'gu', primarySign: '𒄖', confidence: 'high' },

	// === HA SERIES ===
	{ syllable: 'ha', primarySign: '𒄩', confidence: 'high' },
	{ syllable: 'he', primarySign: '𒄭', confidence: 'medium' },
	{ syllable: 'hi', primarySign: '𒄭', confidence: 'high' },
	{ syllable: 'hu', primarySign: '𒄷', confidence: 'high' },

	// === KA SERIES ===
	{ syllable: 'ka', primarySign: '𒅗', confidence: 'high' },
	{ syllable: 'ke', primarySign: '𒆠', alternatives: ['𒅗'], confidence: 'medium' },
	{ syllable: 'ki', primarySign: '𒆠', confidence: 'high' },
	{ syllable: 'ku', primarySign: '𒆪', confidence: 'high' },

	// === LA SERIES ===
	{ syllable: 'la', primarySign: '𒆷', confidence: 'high' },
	{ syllable: 'le', primarySign: '𒇷', alternatives: ['𒆷'], confidence: 'medium' },
	{ syllable: 'li', primarySign: '𒇷', confidence: 'high' },
	{ syllable: 'lu', primarySign: '𒇻', confidence: 'high' },

	// === MA SERIES ===
	{ syllable: 'ma', primarySign: '𒈠', confidence: 'high' },
	{ syllable: 'me', primarySign: '𒈨', confidence: 'high' },
	{ syllable: 'mi', primarySign: '𒈪', confidence: 'high' },
	{ syllable: 'mu', primarySign: '𒈬', confidence: 'high' },

	// === NA SERIES ===
	{ syllable: 'na', primarySign: '𒈾', confidence: 'high' },
	{ syllable: 'ne', primarySign: '𒉈', confidence: 'high' },
	{ syllable: 'ni', primarySign: '𒉌', confidence: 'high' },
	{ syllable: 'nu', primarySign: '𒉡', confidence: 'high' },

	// === PA SERIES ===
	{ syllable: 'pa', primarySign: '𒉺', confidence: 'high' },
	{ syllable: 'pe', primarySign: '𒁉', confidence: 'medium' },
	{ syllable: 'pi', primarySign: '𒁉', confidence: 'high' },
	{ syllable: 'pu', primarySign: '𒁑', confidence: 'medium' },

	// === RA SERIES ===
	{ syllable: 'ra', primarySign: '𒊏', confidence: 'high' },
	{ syllable: 're', primarySign: '𒊑', alternatives: ['𒊏'], confidence: 'medium' },
	{ syllable: 'ri', primarySign: '𒊑', confidence: 'high' },
	{ syllable: 'ru', primarySign: '𒊒', confidence: 'high' },

	// === SA SERIES ===
	{ syllable: 'sa', primarySign: '𒊓', confidence: 'high' },
	{ syllable: 'se', primarySign: '𒊓', confidence: 'medium' },
	{ syllable: 'si', primarySign: '𒋛', confidence: 'high' },
	{ syllable: 'su', primarySign: '𒋢', confidence: 'high' },

	// === SHA SERIES ===
	{ syllable: 'sha', primarySign: '𒊭', confidence: 'high' },
	{ syllable: 'she', primarySign: '𒊺', confidence: 'high' },
	{ syllable: 'shi', primarySign: '𒅆', alternatives: ['𒊭'], confidence: 'medium' },
	{ syllable: 'shu', primarySign: '𒋗', confidence: 'high' },

	// === TA SERIES ===
	{ syllable: 'ta', primarySign: '𒋫', confidence: 'high' },
	{ syllable: 'te', primarySign: '𒋼', confidence: 'high' },
	{ syllable: 'ti', primarySign: '𒋾', confidence: 'high' },
	{ syllable: 'tu', primarySign: '𒌅', confidence: 'high' },

	// === WA SERIES (using U-) ===
	{ syllable: 'wa', primarySign: '𒉿', alternatives: ['𒌋𒀀'], confidence: 'medium' },
	{ syllable: 'we', primarySign: '𒌌', alternatives: ['𒌋𒂊'], confidence: 'low' },
	{ syllable: 'wi', primarySign: '𒌏', alternatives: ['𒌋𒅈'], confidence: 'low' },
	{ syllable: 'wu', primarySign: '𒌋', confidence: 'low' },

	// === ZA SERIES ===
	{ syllable: 'za', primarySign: '𒍝', confidence: 'high' },
	{ syllable: 'ze', primarySign: '𒍢', alternatives: ['𒍝'], confidence: 'medium' },
	{ syllable: 'zi', primarySign: '𒍣', confidence: 'high' },
	{ syllable: 'zu', primarySign: '𒍪', confidence: 'high' },

	// === VC PATTERNS (Vowel + Consonant) ===
	{ syllable: 'ab', primarySign: '𒀊', confidence: 'high' },
	{ syllable: 'ad', primarySign: '𒀜', confidence: 'high' },
	{ syllable: 'ag', primarySign: '𒀝', confidence: 'high' },
	{ syllable: 'ak', primarySign: '𒀝', confidence: 'high' },
	{ syllable: 'al', primarySign: '𒀠', confidence: 'high' },
	{ syllable: 'am', primarySign: '𒄠', confidence: 'high' },
	{ syllable: 'an', primarySign: '𒀭', confidence: 'high' },
	{ syllable: 'ap', primarySign: '𒀊', confidence: 'medium' },
	{ syllable: 'ar', primarySign: '𒅈', confidence: 'high' },
	{ syllable: 'as', primarySign: '𒊍', confidence: 'high' },
	{ syllable: 'ash', primarySign: '𒀸', confidence: 'high' },
	{ syllable: 'at', primarySign: '𒀜', confidence: 'medium' },
	{ syllable: 'az', primarySign: '𒊍', confidence: 'medium' },

	{ syllable: 'eb', primarySign: '𒅁', confidence: 'high' },
	{ syllable: 'ed', primarySign: '𒀉', confidence: 'medium' },
	{ syllable: 'eg', primarySign: '𒅅', confidence: 'high' },
	{ syllable: 'ek', primarySign: '𒅅', confidence: 'medium' },
	{ syllable: 'el', primarySign: '𒂖', confidence: 'high' },
	{ syllable: 'em', primarySign: '𒅎', confidence: 'high' },
	{ syllable: 'en', primarySign: '𒂗', confidence: 'high' },
	{ syllable: 'er', primarySign: '𒅕', confidence: 'high' },
	{ syllable: 'esh', primarySign: '𒌍', confidence: 'high' },
	{ syllable: 'et', primarySign: '𒀉', confidence: 'low' },

	{ syllable: 'ib', primarySign: '𒅁', confidence: 'high' },
	{ syllable: 'id', primarySign: '𒀉', confidence: 'high' },
	{ syllable: 'ig', primarySign: '𒅅', confidence: 'high' },
	{ syllable: 'ik', primarySign: '𒅅', confidence: 'medium' },
	{ syllable: 'il', primarySign: '𒅋', confidence: 'high' },
	{ syllable: 'im', primarySign: '𒅎', confidence: 'high' },
	{ syllable: 'in', primarySign: '𒅔', confidence: 'high' },
	{ syllable: 'ip', primarySign: '𒅁', confidence: 'medium' },
	{ syllable: 'ir', primarySign: '𒅕', confidence: 'high' },
	{ syllable: 'is', primarySign: '𒅖', confidence: 'high' },
	{ syllable: 'ish', primarySign: '𒅖', confidence: 'high' },
	{ syllable: 'it', primarySign: '𒀉', confidence: 'medium' },
	{ syllable: 'iz', primarySign: '𒅖', confidence: 'medium' },

	{ syllable: 'ub', primarySign: '𒌒', confidence: 'high' },
	{ syllable: 'ud', primarySign: '𒌓', confidence: 'high' },
	{ syllable: 'ug', primarySign: '𒌑', confidence: 'high' },
	{ syllable: 'uk', primarySign: '𒌑', confidence: 'medium' },
	{ syllable: 'ul', primarySign: '𒌌', confidence: 'high' },
	{ syllable: 'um', primarySign: '𒌝', confidence: 'high' },
	{ syllable: 'un', primarySign: '𒌦', confidence: 'high' },
	{ syllable: 'up', primarySign: '𒌒', confidence: 'medium' },
	{ syllable: 'ur', primarySign: '𒌨', confidence: 'high' },
	{ syllable: 'us', primarySign: '𒍑', confidence: 'high' },
	{ syllable: 'ush', primarySign: '𒍑', confidence: 'high' },
	{ syllable: 'ut', primarySign: '𒌓', confidence: 'medium' },
	{ syllable: 'uz', primarySign: '𒍑', confidence: 'medium' },

	// === CVC PATTERNS (Common) ===
	{ syllable: 'bad', primarySign: '𒁁', confidence: 'high' },
	{ syllable: 'bal', primarySign: '𒁄', confidence: 'high' },
	{ syllable: 'ban', primarySign: '𒁈', confidence: 'high' },
	{ syllable: 'bar', primarySign: '𒁇', confidence: 'high' },
	{ syllable: 'bur', primarySign: '𒁔', confidence: 'high' },

	{ syllable: 'dag', primarySign: '𒁖', confidence: 'high' },
	{ syllable: 'dal', primarySign: '𒁳', confidence: 'high' },
	{ syllable: 'dam', primarySign: '𒁮', confidence: 'high' },
	{ syllable: 'dar', primarySign: '𒁯', confidence: 'high' },
	{ syllable: 'dim', primarySign: '𒁴', confidence: 'high' },
	{ syllable: 'din', primarySign: '𒁷', confidence: 'high' },
	{ syllable: 'dub', primarySign: '𒁾', confidence: 'high' },
	{ syllable: 'dug', primarySign: '𒂁', confidence: 'high' },
	{ syllable: 'dul', primarySign: '𒂃', confidence: 'high' },
	{ syllable: 'dur', primarySign: '𒂄', confidence: 'high' },

	{ syllable: 'gal', primarySign: '𒃲', confidence: 'high' },
	{ syllable: 'gam', primarySign: '𒃵', confidence: 'high' },
	{ syllable: 'gan', primarySign: '𒃶', confidence: 'high' },
	{ syllable: 'gar', primarySign: '𒃻', confidence: 'high' },
	{ syllable: 'gig', primarySign: '𒈪𒈪', confidence: 'medium' },
	{ syllable: 'gir', primarySign: '𒄊', confidence: 'high' },
	{ syllable: 'gish', primarySign: '𒄑', confidence: 'high' },
	{ syllable: 'gul', primarySign: '𒄢', confidence: 'high' },
	{ syllable: 'gur', primarySign: '𒄥', confidence: 'high' },

	{ syllable: 'hal', primarySign: '𒄬', confidence: 'high' },
	{ syllable: 'har', primarySign: '𒄯', confidence: 'high' },
	{ syllable: 'hul', primarySign: '𒄾', confidence: 'high' },
	{ syllable: 'hur', primarySign: '𒄯', confidence: 'medium' },

	{ syllable: 'kal', primarySign: '𒆗', confidence: 'high' },
	{ syllable: 'kam', primarySign: '𒄰', confidence: 'high' },
	{ syllable: 'kar', primarySign: '𒃸', confidence: 'high' },
	{ syllable: 'kesh', primarySign: '𒆝', confidence: 'high' },
	{ syllable: 'kir', primarySign: '𒆥', confidence: 'high' },
	{ syllable: 'kur', primarySign: '𒆳', confidence: 'high' },

	{ syllable: 'lal', primarySign: '𒇲', confidence: 'high' },
	{ syllable: 'lam', primarySign: '𒇴', confidence: 'high' },
	{ syllable: 'lil', primarySign: '𒇸', confidence: 'high' },
	{ syllable: 'lum', primarySign: '𒈝', confidence: 'high' },

	{ syllable: 'mal', primarySign: '𒈤', confidence: 'high' },
	{ syllable: 'man', primarySign: '𒈥', confidence: 'high' },
	{ syllable: 'mar', primarySign: '𒈥', confidence: 'medium' },
	{ syllable: 'mas', primarySign: '𒈦', confidence: 'high' },
	{ syllable: 'mash', primarySign: '𒈦', confidence: 'high' },
	{ syllable: 'mul', primarySign: '𒀯', confidence: 'high' },
	{ syllable: 'mur', primarySign: '𒈬𒌨', confidence: 'low' },
	{ syllable: 'mush', primarySign: '𒈲', confidence: 'high' },

	{ syllable: 'nal', primarySign: '𒈾𒀠', confidence: 'low' },
	{ syllable: 'nam', primarySign: '𒉆', confidence: 'high' },
	{ syllable: 'nar', primarySign: '𒈾𒅈', confidence: 'low' },
	{ syllable: 'nig', primarySign: '𒃻', confidence: 'high' },
	{ syllable: 'nim', primarySign: '𒉏', confidence: 'high' },
	{ syllable: 'nin', primarySign: '𒊩𒌆', confidence: 'high' },
	{ syllable: 'nir', primarySign: '𒉢', confidence: 'high' },
	{ syllable: 'nun', primarySign: '𒉣', confidence: 'high' },

	{ syllable: 'pir', primarySign: '𒉽', confidence: 'high' },

	{ syllable: 'sar', primarySign: '𒊬', confidence: 'high' },
	{ syllable: 'shar', primarySign: '𒊬', confidence: 'high' },
	{ syllable: 'shir', primarySign: '𒋓', confidence: 'high' },
	{ syllable: 'shum', primarySign: '𒋧', confidence: 'high' },
	{ syllable: 'shur', primarySign: '𒋩', confidence: 'high' },
	{ syllable: 'sig', primarySign: '𒋝', confidence: 'high' },
	{ syllable: 'sim', primarySign: '𒋞', confidence: 'high' },
	{ syllable: 'sir', primarySign: '𒋟', confidence: 'high' },
	{ syllable: 'sur', primarySign: '𒋢', confidence: 'medium' },

	{ syllable: 'tab', primarySign: '𒋰', confidence: 'high' },
	{ syllable: 'tag', primarySign: '𒋳', confidence: 'high' },
	{ syllable: 'tak', primarySign: '𒋳', confidence: 'medium' },
	{ syllable: 'tal', primarySign: '𒌇', confidence: 'high' },
	{ syllable: 'tam', primarySign: '𒌓', confidence: 'medium' },
	{ syllable: 'tar', primarySign: '𒋻', confidence: 'high' },
	{ syllable: 'tesh', primarySign: '𒌍', confidence: 'medium' },
	{ syllable: 'til', primarySign: '𒌀', confidence: 'high' },
	{ syllable: 'tir', primarySign: '𒌁', confidence: 'high' },
	{ syllable: 'tum', primarySign: '𒌈', confidence: 'high' },
	{ syllable: 'tur', primarySign: '𒌉', confidence: 'high' },

	{ syllable: 'zal', primarySign: '𒍠𒀠', confidence: 'low' },
	{ syllable: 'zig', primarySign: '𒍣𒄀', confidence: 'low' },

	// === ADDITIONAL COMMON PATTERNS ===

	// Long vowels / diphthongs (approximations)
	{ syllable: 'aa', primarySign: '𒀀𒀀', confidence: 'low' },
	{ syllable: 'ee', primarySign: '𒂊𒂊', confidence: 'low' },
	{ syllable: 'oo', primarySign: '𒌋𒌋', confidence: 'low' },
	{ syllable: 'ai', primarySign: '𒀀𒅈', confidence: 'low' },
	{ syllable: 'ay', primarySign: '𒀀𒅈', confidence: 'low' },
	{ syllable: 'au', primarySign: '𒀀𒌋', confidence: 'low' },
	{ syllable: 'aw', primarySign: '𒀀𒌋', confidence: 'low' },
	{ syllable: 'ea', primarySign: '𒂊𒀀', confidence: 'low' },
	{ syllable: 'ia', primarySign: '𒅈𒀀', confidence: 'low' },
	{ syllable: 'ie', primarySign: '𒅈𒂊', confidence: 'low' },
	{ syllable: 'io', primarySign: '𒅈𒌋', confidence: 'low' },
	{ syllable: 'iu', primarySign: '𒅈𒌋', confidence: 'low' },
	{ syllable: 'oi', primarySign: '𒌋𒅈', confidence: 'low' },
	{ syllable: 'ou', primarySign: '𒌋𒌋', confidence: 'low' },
	{ syllable: 'ow', primarySign: '𒌋𒌋', confidence: 'low' },
	{ syllable: 'ua', primarySign: '𒌋𒀀', confidence: 'low' },
	{ syllable: 'ue', primarySign: '𒌋𒂊', confidence: 'low' },
	{ syllable: 'ui', primarySign: '𒌋𒅈', confidence: 'low' },

	// Common English syllables missing from core set
	{ syllable: 'bo', primarySign: '𒁍', confidence: 'medium' },
	{ syllable: 'co', primarySign: '𒆪', confidence: 'low' },
	{ syllable: 'do', primarySign: '𒁺', confidence: 'medium' },
	{ syllable: 'fo', primarySign: '𒁑', confidence: 'low' },
	{ syllable: 'go', primarySign: '𒄖', confidence: 'medium' },
	{ syllable: 'ho', primarySign: '𒄷', confidence: 'medium' },
	{ syllable: 'jo', primarySign: '𒁺', confidence: 'low' },
	{ syllable: 'ko', primarySign: '𒆪', confidence: 'medium' },
	{ syllable: 'lo', primarySign: '𒇻', confidence: 'medium' },
	{ syllable: 'mo', primarySign: '𒈬', confidence: 'medium' },
	{ syllable: 'no', primarySign: '𒉡', confidence: 'medium' },
	{ syllable: 'po', primarySign: '𒁑', confidence: 'medium' },
	{ syllable: 'ro', primarySign: '𒊒', confidence: 'medium' },
	{ syllable: 'so', primarySign: '𒋢', confidence: 'medium' },
	{ syllable: 'to', primarySign: '𒌅', confidence: 'medium' },
	{ syllable: 'wo', primarySign: '𒌋', confidence: 'low' },
	{ syllable: 'yo', primarySign: '𒅈𒌋', confidence: 'low' },

	// More VC patterns
	{ syllable: 'ob', primarySign: '𒌒', confidence: 'medium' },
	{ syllable: 'od', primarySign: '𒌓', confidence: 'medium' },
	{ syllable: 'og', primarySign: '𒌑', confidence: 'medium' },
	{ syllable: 'ok', primarySign: '𒌑', confidence: 'medium' },
	{ syllable: 'ol', primarySign: '𒌌', confidence: 'medium' },
	{ syllable: 'om', primarySign: '𒌝', confidence: 'medium' },
	{ syllable: 'on', primarySign: '𒌦', confidence: 'medium' },
	{ syllable: 'op', primarySign: '𒌒', confidence: 'medium' },
	{ syllable: 'or', primarySign: '𒌨', confidence: 'medium' },
	{ syllable: 'os', primarySign: '𒍑', confidence: 'medium' },
	{ syllable: 'ot', primarySign: '𒌓', confidence: 'medium' },

	// Y as vowel
	{ syllable: 'ya', primarySign: '𒅀', confidence: 'high' },
	{ syllable: 'ye', primarySign: '𒅀𒂊', confidence: 'low' },
	{ syllable: 'yi', primarySign: '𒅀𒅈', confidence: 'low' },
	{ syllable: 'yu', primarySign: '𒅀𒌋', confidence: 'low' },

	// Common name endings
	{ syllable: 'ly', primarySign: '𒇷', confidence: 'low' },
	{ syllable: 'ry', primarySign: '𒊑', confidence: 'low' },
	{ syllable: 'ny', primarySign: '𒉌', confidence: 'low' },
	{ syllable: 'ty', primarySign: '𒋾', confidence: 'low' },
	{ syllable: 'dy', primarySign: '𒁳', confidence: 'low' },
	{ syllable: 'ey', primarySign: '𒂊', confidence: 'low' },
	{ syllable: 'gy', primarySign: '𒄀', confidence: 'low' },
	{ syllable: 'ky', primarySign: '𒆠', confidence: 'low' },
	{ syllable: 'my', primarySign: '𒈪', confidence: 'low' },
	{ syllable: 'py', primarySign: '𒁉', confidence: 'low' },
	{ syllable: 'sy', primarySign: '𒋛', confidence: 'low' },
	{ syllable: 'vy', primarySign: '𒁉', confidence: 'low' },
	{ syllable: 'zy', primarySign: '𒍣', confidence: 'low' },

	// Single consonants as fallback (use vowel-less approximations)
	{ syllable: 'b', primarySign: '𒁀', confidence: 'low' },
	{ syllable: 'c', primarySign: '𒆪', confidence: 'low' },
	{ syllable: 'd', primarySign: '𒁕', confidence: 'low' },
	{ syllable: 'f', primarySign: '𒁑', confidence: 'low' },
	{ syllable: 'g', primarySign: '𒂵', confidence: 'low' },
	{ syllable: 'h', primarySign: '𒄩', confidence: 'low' },
	{ syllable: 'j', primarySign: '𒁕', confidence: 'low' },
	{ syllable: 'k', primarySign: '𒅗', confidence: 'low' },
	{ syllable: 'l', primarySign: '𒆷', confidence: 'low' },
	{ syllable: 'm', primarySign: '𒈠', confidence: 'low' },
	{ syllable: 'n', primarySign: '𒈾', confidence: 'low' },
	{ syllable: 'p', primarySign: '𒉺', confidence: 'low' },
	{ syllable: 'q', primarySign: '𒆪', confidence: 'low' },
	{ syllable: 'r', primarySign: '𒊏', confidence: 'low' },
	{ syllable: 's', primarySign: '𒊓', confidence: 'low' },
	{ syllable: 't', primarySign: '𒋫', confidence: 'low' },
	{ syllable: 'v', primarySign: '𒁀', confidence: 'low' },
	{ syllable: 'w', primarySign: '𒌋', confidence: 'low' },
	{ syllable: 'x', primarySign: '𒆪𒊓', confidence: 'low' },
	{ syllable: 'y', primarySign: '𒅈', confidence: 'low' },
	{ syllable: 'z', primarySign: '𒍝', confidence: 'low' },

	// Common consonant clusters (approximations)
	{ syllable: 'ch', primarySign: '𒋗', confidence: 'low' },
	{ syllable: 'ck', primarySign: '𒆪', confidence: 'low' },
	{ syllable: 'gh', primarySign: '𒄩', confidence: 'low' },
	{ syllable: 'ng', primarySign: '𒂵', confidence: 'low' },
	{ syllable: 'nk', primarySign: '𒅗', confidence: 'low' },
	{ syllable: 'ph', primarySign: '𒁑', confidence: 'low' },
	{ syllable: 'sc', primarySign: '𒊓𒆪', confidence: 'low' },
	{ syllable: 'sh', primarySign: '𒊭', confidence: 'medium' },
	{ syllable: 'sk', primarySign: '𒊓𒆪', confidence: 'low' },
	{ syllable: 'sp', primarySign: '𒊓𒉺', confidence: 'low' },
	{ syllable: 'st', primarySign: '𒊓𒋫', confidence: 'low' },
	{ syllable: 'th', primarySign: '𒋫', confidence: 'low' },
	{ syllable: 'wh', primarySign: '𒌋', confidence: 'low' },

	// More CVC patterns for common words
	{ syllable: 'ber', primarySign: '𒁁𒅕', confidence: 'low' },
	{ syllable: 'der', primarySign: '𒁲𒅕', confidence: 'low' },
	{ syllable: 'fer', primarySign: '𒁑𒅕', confidence: 'low' },
	{ syllable: 'ger', primarySign: '𒄀𒅕', confidence: 'low' },
	{ syllable: 'her', primarySign: '𒄭𒅕', confidence: 'low' },
	{ syllable: 'ker', primarySign: '𒆠𒅕', confidence: 'low' },
	{ syllable: 'ler', primarySign: '𒇷𒅕', confidence: 'low' },
	{ syllable: 'mer', primarySign: '𒈨𒅕', confidence: 'low' },
	{ syllable: 'ner', primarySign: '𒉈𒅕', confidence: 'low' },
	{ syllable: 'per', primarySign: '𒁉𒅕', confidence: 'low' },
	{ syllable: 'ser', primarySign: '𒊓𒅕', confidence: 'low' },
	{ syllable: 'ter', primarySign: '𒋼𒅕', confidence: 'low' },
	{ syllable: 'ver', primarySign: '𒁉𒅕', confidence: 'low' },

	{ syllable: 'ble', primarySign: '𒁀𒇷', confidence: 'low' },
	{ syllable: 'cle', primarySign: '𒆪𒇷', confidence: 'low' },
	{ syllable: 'dle', primarySign: '𒁕𒇷', confidence: 'low' },
	{ syllable: 'fle', primarySign: '𒁑𒇷', confidence: 'low' },
	{ syllable: 'gle', primarySign: '𒂵𒇷', confidence: 'low' },
	{ syllable: 'ple', primarySign: '𒉺𒇷', confidence: 'low' },
	{ syllable: 'tle', primarySign: '𒋫𒇷', confidence: 'low' },
	{ syllable: 'zle', primarySign: '𒍝𒇷', confidence: 'low' },

	// Common word endings
	{ syllable: 'ing', primarySign: '𒅔', confidence: 'medium' },
	{ syllable: 'ung', primarySign: '𒌦', confidence: 'medium' },
	{ syllable: 'ang', primarySign: '𒀀𒂵', confidence: 'low' },
	{ syllable: 'ong', primarySign: '𒌋𒂵', confidence: 'low' },
	{ syllable: 'ant', primarySign: '𒀭𒋫', confidence: 'low' },
	{ syllable: 'ent', primarySign: '𒂗𒋫', confidence: 'low' },
	{ syllable: 'int', primarySign: '𒅔𒋫', confidence: 'low' },
	{ syllable: 'unt', primarySign: '𒌦𒋫', confidence: 'low' },
	{ syllable: 'ard', primarySign: '𒅈𒁕', confidence: 'low' },
	{ syllable: 'ord', primarySign: '𒌨𒁕', confidence: 'low' },
	{ syllable: 'ess', primarySign: '𒂊𒊓', confidence: 'low' },
	{ syllable: 'ness', primarySign: '𒉈𒊓', confidence: 'low' },
	{ syllable: 'less', primarySign: '𒇷𒊓', confidence: 'low' },
	{ syllable: 'ful', primarySign: '𒁑𒌌', confidence: 'low' },
	{ syllable: 'ous', primarySign: '𒌋𒊓', confidence: 'low' },
	{ syllable: 'tion', primarySign: '𒋫𒅔', confidence: 'low' },
	{ syllable: 'sion', primarySign: '𒊓𒅔', confidence: 'low' }
];

/**
 * Map for quick syllable lookup
 */
export const syllableMap: Map<string, SyllableMapping> = new Map(
	SYLLABLE_MAPPINGS.map(m => [m.syllable, m])
);

/**
 * Get a sign for a syllable
 */
export function getSignForSyllable(syllable: string): SyllableMapping | undefined {
	return syllableMap.get(syllable.toLowerCase());
}

/**
 * Get all available syllables
 */
export function getAllSyllables(): string[] {
	return SYLLABLE_MAPPINGS.map(m => m.syllable).sort();
}

/**
 * Check if a syllable has a mapping
 */
export function hasSyllableMapping(syllable: string): boolean {
	return syllableMap.has(syllable.toLowerCase());
}

/**
 * Get syllables by confidence level
 */
export function getSyllablesByConfidence(confidence: 'high' | 'medium' | 'low'): SyllableMapping[] {
	return SYLLABLE_MAPPINGS.filter(m => m.confidence === confidence);
}
