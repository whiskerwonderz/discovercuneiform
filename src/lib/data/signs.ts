/**
 * Cuneiform sign database
 * Data sourced from ORACC Sign List (OSL) and Unicode Standard
 * CC0 Public Domain
 */

import type { CuneiformSign, DataSource } from '$lib/types';

const OSL_SOURCE: DataSource = {
	primary: 'OSL',
	oslVersion: '2.0',
	unicodeVersion: '17.0',
	attribution: 'ORACC Sign List (OSL, CC0 Public Domain) maintained by Steve Tinney & Niek Veldhuis, University of Pennsylvania.'
};

/**
 * Core cuneiform sign database
 * Signs are organised by Unicode codepoint order
 */
export const SIGNS: CuneiformSign[] = [
	// === BASIC SYLLABIC SIGNS ===
	{
		codepoint: 'U+12000',
		character: '𒀀',
		name: 'A',
		readings: [
			{ value: 'a', type: 'syllabic' },
			{ value: 'dur5', type: 'logographic', language: 'sumerian' },
			{ value: 'e4', type: 'syllabic' }
		],
		meanings: ['water', 'seed', 'father', 'offspring'],
		category: 'nature',
		wedgeComposition: { horizontal: 4, vertical: 0, oblique: 0, winkelhaken: 1 },
		mzlNumber: 839,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+1202D',
		character: '𒀭',
		name: 'AN',
		readings: [
			{ value: 'an', type: 'syllabic' },
			{ value: 'dingir', type: 'logographic', language: 'sumerian' },
			{ value: 'ilu', type: 'logographic', language: 'akkadian' }
		],
		meanings: ['sky', 'heaven', 'god', 'divine determinative'],
		category: 'divine',
		wedgeComposition: { horizontal: 1, vertical: 1, oblique: 2, winkelhaken: 1 },
		mzlNumber: 13,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12040',
		character: '𒁀',
		name: 'BA',
		readings: [
			{ value: 'ba', type: 'syllabic' },
			{ value: 'pa4', type: 'syllabic' }
		],
		meanings: ['to give', 'to allot', 'portion'],
		category: 'actions',
		wedgeComposition: { horizontal: 2, vertical: 1, oblique: 0, winkelhaken: 0 },
		mzlNumber: 14,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12042',
		character: '𒁂',
		name: 'BAD',
		readings: [
			{ value: 'bad', type: 'syllabic' },
			{ value: 'bat', type: 'syllabic' },
			{ value: 'be', type: 'syllabic' },
			{ value: 'til', type: 'logographic', language: 'sumerian' }
		],
		meanings: ['to open', 'distant', 'to die'],
		category: 'actions',
		wedgeComposition: { horizontal: 1, vertical: 0, oblique: 0, winkelhaken: 0 },
		mzlNumber: 113,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12049',
		character: '𒁉',
		name: 'BI',
		readings: [
			{ value: 'bi', type: 'syllabic' },
			{ value: 'pi', type: 'syllabic' },
			{ value: 'pe', type: 'syllabic' },
			{ value: 'kas', type: 'logographic', language: 'sumerian' }
		],
		meanings: ['beer', 'wine', 'to speak'],
		category: 'food',
		wedgeComposition: { horizontal: 3, vertical: 2, oblique: 0, winkelhaken: 0 },
		mzlNumber: 358,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12051',
		character: '𒁑',
		name: 'BU',
		readings: [
			{ value: 'bu', type: 'syllabic' },
			{ value: 'pu', type: 'syllabic' },
			{ value: 'gid2', type: 'logographic', language: 'sumerian' }
		],
		meanings: ['long', 'to pull', 'to tear out'],
		category: 'actions',
		wedgeComposition: { horizontal: 2, vertical: 1, oblique: 1, winkelhaken: 0 },
		mzlNumber: 580,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+1207A',
		character: '𒁺',
		name: 'DU',
		readings: [
			{ value: 'du', type: 'syllabic' },
			{ value: 'tu', type: 'syllabic' },
			{ value: 'gin', type: 'logographic', language: 'sumerian' },
			{ value: 'gub', type: 'logographic', language: 'sumerian' }
		],
		meanings: ['to go', 'to walk', 'to stand', 'to bring'],
		category: 'actions',
		wedgeComposition: { horizontal: 2, vertical: 2, oblique: 1, winkelhaken: 0 },
		mzlNumber: 350,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+1208A',
		character: '𒂊',
		name: 'E',
		readings: [
			{ value: 'e', type: 'syllabic' },
			{ value: 'i', type: 'syllabic' }
		],
		meanings: ['house', 'temple', 'to speak'],
		category: 'buildings',
		wedgeComposition: { horizontal: 3, vertical: 0, oblique: 0, winkelhaken: 0 },
		mzlNumber: 308,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+1208D',
		character: '𒂍',
		name: 'E2',
		readings: [
			{ value: 'e2', type: 'syllabic' },
			{ value: 'bitu', type: 'logographic', language: 'akkadian' }
		],
		meanings: ['house', 'temple', 'household'],
		category: 'buildings',
		wedgeComposition: { horizontal: 4, vertical: 3, oblique: 2, winkelhaken: 0 },
		mzlNumber: 324,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12095',
		character: '𒂕',
		name: 'EN',
		readings: [
			{ value: 'en', type: 'syllabic' },
			{ value: 'in', type: 'syllabic' },
			{ value: 'bel', type: 'logographic', language: 'akkadian' }
		],
		meanings: ['lord', 'master', 'high priest'],
		category: 'people',
		wedgeComposition: { horizontal: 3, vertical: 2, oblique: 0, winkelhaken: 1 },
		mzlNumber: 164,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+120A0',
		character: '𒂠',
		name: 'ESH',
		readings: [
			{ value: 'esh', type: 'syllabic' },
			{ value: 'es', type: 'syllabic' }
		],
		meanings: ['three', 'shrine'],
		category: 'numbers',
		wedgeComposition: { horizontal: 0, vertical: 3, oblique: 0, winkelhaken: 0 },
		mzlNumber: 1,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+120B7',
		character: '𒂷',
		name: 'GA',
		readings: [
			{ value: 'ga', type: 'syllabic' },
			{ value: 'qa', type: 'syllabic' },
			{ value: 'ka', type: 'syllabic' }
		],
		meanings: ['milk', 'to bring'],
		category: 'food',
		wedgeComposition: { horizontal: 3, vertical: 1, oblique: 0, winkelhaken: 1 },
		mzlNumber: 491,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+120D5',
		character: '𒃕',
		name: 'GI',
		readings: [
			{ value: 'gi', type: 'syllabic' },
			{ value: 'ge', type: 'syllabic' },
			{ value: 'ke', type: 'syllabic' }
		],
		meanings: ['reed', 'to return', 'faithful'],
		category: 'nature',
		wedgeComposition: { horizontal: 2, vertical: 2, oblique: 0, winkelhaken: 0 },
		mzlNumber: 85,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12100',
		character: '𒄀',
		name: 'GU',
		readings: [
			{ value: 'gu', type: 'syllabic' },
			{ value: 'qu', type: 'syllabic' }
		],
		meanings: ['cord', 'string', 'thread'],
		category: 'objects',
		wedgeComposition: { horizontal: 3, vertical: 0, oblique: 0, winkelhaken: 0 },
		mzlNumber: 891,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+1212C',
		character: '𒄬',
		name: 'HA',
		readings: [
			{ value: 'ha', type: 'syllabic' },
			{ value: 'ku6', type: 'logographic', language: 'sumerian' }
		],
		meanings: ['fish', 'may (optative)'],
		category: 'animals',
		wedgeComposition: { horizontal: 4, vertical: 1, oblique: 0, winkelhaken: 0 },
		mzlNumber: 589,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12148',
		character: '𒅈',
		name: 'I',
		readings: [
			{ value: 'i', type: 'syllabic' }
		],
		meanings: ['oil', 'fat', 'five'],
		category: 'food',
		wedgeComposition: { horizontal: 0, vertical: 5, oblique: 0, winkelhaken: 0 },
		mzlNumber: 252,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12157',
		character: '𒅗',
		name: 'KA',
		readings: [
			{ value: 'ka', type: 'syllabic' },
			{ value: 'ga', type: 'syllabic' },
			{ value: 'zu2', type: 'logographic', language: 'sumerian' },
			{ value: 'dug4', type: 'logographic', language: 'sumerian' }
		],
		meanings: ['mouth', 'word', 'to speak', 'tooth'],
		category: 'body',
		wedgeComposition: { horizontal: 5, vertical: 3, oblique: 0, winkelhaken: 1 },
		mzlNumber: 24,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12197',
		character: '𒆗',
		name: 'KI',
		readings: [
			{ value: 'ki', type: 'syllabic' },
			{ value: 'ke4', type: 'syllabic' },
			{ value: 'gi7', type: 'syllabic' }
		],
		meanings: ['earth', 'place', 'land', 'ground'],
		category: 'nature',
		wedgeComposition: { horizontal: 3, vertical: 1, oblique: 0, winkelhaken: 1 },
		mzlNumber: 737,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+121A0',
		character: '𒆠',
		name: 'KU',
		readings: [
			{ value: 'ku', type: 'syllabic' },
			{ value: 'qu', type: 'syllabic' },
			{ value: 'tush', type: 'logographic', language: 'sumerian' }
		],
		meanings: ['to eat', 'to place', 'to lie down'],
		category: 'actions',
		wedgeComposition: { horizontal: 4, vertical: 2, oblique: 0, winkelhaken: 0 },
		mzlNumber: 808,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+121BE',
		character: '𒆾',
		name: 'LA',
		readings: [
			{ value: 'la', type: 'syllabic' },
			{ value: 'la2', type: 'syllabic' }
		],
		meanings: ['to hang', 'to weigh', 'to stretch', 'plenty'],
		category: 'actions',
		wedgeComposition: { horizontal: 2, vertical: 2, oblique: 1, winkelhaken: 0 },
		mzlNumber: 89,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+121F4',
		character: '𒇴',
		name: 'LI',
		readings: [
			{ value: 'li', type: 'syllabic' },
			{ value: 'le', type: 'syllabic' }
		],
		meanings: ['oil', 'juniper'],
		category: 'nature',
		wedgeComposition: { horizontal: 3, vertical: 2, oblique: 0, winkelhaken: 0 },
		mzlNumber: 59,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12217',
		character: '𒈗',
		name: 'LUGAL',
		readings: [
			{ value: 'lugal', type: 'logographic', language: 'sumerian' },
			{ value: 'sharru', type: 'logographic', language: 'akkadian' }
		],
		meanings: ['king', 'ruler'],
		category: 'people',
		wedgeComposition: { horizontal: 4, vertical: 3, oblique: 1, winkelhaken: 0 },
		mzlNumber: 266,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12222',
		character: '𒈢',
		name: 'MA',
		readings: [
			{ value: 'ma', type: 'syllabic' }
		],
		meanings: ['ship', 'to go'],
		category: 'objects',
		wedgeComposition: { horizontal: 2, vertical: 2, oblique: 0, winkelhaken: 0 },
		mzlNumber: 342,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+1222B',
		character: '𒈫',
		name: 'ME',
		readings: [
			{ value: 'me', type: 'syllabic' },
			{ value: 'mi', type: 'syllabic' }
		],
		meanings: ['divine powers', 'being', 'I (pronoun)'],
		category: 'abstract',
		wedgeComposition: { horizontal: 3, vertical: 1, oblique: 0, winkelhaken: 0 },
		mzlNumber: 532,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+1222C',
		character: '𒈬',
		name: 'MIN',
		readings: [
			{ value: 'min', type: 'syllabic' }
		],
		meanings: ['two'],
		category: 'numbers',
		wedgeComposition: { horizontal: 0, vertical: 2, oblique: 0, winkelhaken: 0 },
		mzlNumber: 826,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+1222F',
		character: '𒈯',
		name: 'MU',
		readings: [
			{ value: 'mu', type: 'syllabic' },
			{ value: 'shu', type: 'logographic', language: 'sumerian' }
		],
		meanings: ['year', 'name', 'to grow'],
		category: 'abstract',
		wedgeComposition: { horizontal: 2, vertical: 4, oblique: 0, winkelhaken: 0 },
		mzlNumber: 98,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12240',
		character: '𒉀',
		name: 'NA',
		readings: [
			{ value: 'na', type: 'syllabic' }
		],
		meanings: ['person', 'stone', 'man'],
		category: 'people',
		wedgeComposition: { horizontal: 3, vertical: 1, oblique: 0, winkelhaken: 0 },
		mzlNumber: 70,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12248',
		character: '𒉈',
		name: 'NE',
		readings: [
			{ value: 'ne', type: 'syllabic' },
			{ value: 'ni', type: 'syllabic' },
			{ value: 'izi', type: 'logographic', language: 'sumerian' }
		],
		meanings: ['fire', 'this', 'self'],
		category: 'nature',
		wedgeComposition: { horizontal: 4, vertical: 2, oblique: 2, winkelhaken: 0 },
		mzlNumber: 313,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12261',
		character: '𒉡',
		name: 'NU',
		readings: [
			{ value: 'nu', type: 'syllabic' }
		],
		meanings: ['not', 'image', 'likeness'],
		category: 'abstract',
		wedgeComposition: { horizontal: 2, vertical: 1, oblique: 0, winkelhaken: 0 },
		mzlNumber: 75,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+1228F',
		character: '𒊏',
		name: 'RA',
		readings: [
			{ value: 'ra', type: 'syllabic' }
		],
		meanings: ['to strike', 'to go'],
		category: 'actions',
		wedgeComposition: { horizontal: 2, vertical: 1, oblique: 0, winkelhaken: 1 },
		mzlNumber: 511,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12292',
		character: '𒊒',
		name: 'RI',
		readings: [
			{ value: 'ri', type: 'syllabic' },
			{ value: 're', type: 'syllabic' }
		],
		meanings: ['to impose', 'to direct'],
		category: 'actions',
		wedgeComposition: { horizontal: 2, vertical: 1, oblique: 1, winkelhaken: 0 },
		mzlNumber: 142,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+122A0',
		character: '𒊠',
		name: 'SA',
		readings: [
			{ value: 'sa', type: 'syllabic' },
			{ value: 'za', type: 'syllabic' }
		],
		meanings: ['sinew', 'net', 'to roast'],
		category: 'body',
		wedgeComposition: { horizontal: 4, vertical: 1, oblique: 0, winkelhaken: 0 },
		mzlNumber: 172,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+122AB',
		character: '𒊫',
		name: 'SHA',
		readings: [
			{ value: 'sha', type: 'syllabic' },
			{ value: 'sa4', type: 'syllabic' }
		],
		meanings: ['heart', 'middle', 'half'],
		category: 'body',
		wedgeComposition: { horizontal: 3, vertical: 3, oblique: 0, winkelhaken: 1 },
		mzlNumber: 566,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+122AC',
		character: '𒊬',
		name: 'SHAR2',
		readings: [
			{ value: 'shar', type: 'syllabic' },
			{ value: 'sar', type: 'syllabic' }
		],
		meanings: ['garden', 'to write', '3600'],
		category: 'buildings',
		wedgeComposition: { horizontal: 5, vertical: 4, oblique: 0, winkelhaken: 1 },
		mzlNumber: 630,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+122C0',
		character: '𒋀',
		name: 'SHU',
		readings: [
			{ value: 'shu', type: 'syllabic' },
			{ value: 'su', type: 'syllabic' }
		],
		meanings: ['hand', 'to pour', 'portion'],
		category: 'body',
		wedgeComposition: { horizontal: 2, vertical: 2, oblique: 0, winkelhaken: 1 },
		mzlNumber: 354,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+122D9',
		character: '𒋙',
		name: 'TA',
		readings: [
			{ value: 'ta', type: 'syllabic' },
			{ value: 'da', type: 'syllabic' }
		],
		meanings: ['from', 'with', 'side'],
		category: 'abstract',
		wedgeComposition: { horizontal: 3, vertical: 1, oblique: 0, winkelhaken: 0 },
		mzlNumber: 248,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+122EB',
		character: '𒋫',
		name: 'TI',
		readings: [
			{ value: 'ti', type: 'syllabic' },
			{ value: 'te', type: 'syllabic' },
			{ value: 'til', type: 'logographic', language: 'sumerian' }
		],
		meanings: ['arrow', 'rib', 'life', 'to live'],
		category: 'objects',
		wedgeComposition: { horizontal: 2, vertical: 2, oblique: 1, winkelhaken: 0 },
		mzlNumber: 73,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12306',
		character: '𒌆',
		name: 'TU',
		readings: [
			{ value: 'tu', type: 'syllabic' },
			{ value: 'du', type: 'syllabic' },
			{ value: 'tur', type: 'logographic', language: 'sumerian' }
		],
		meanings: ['small', 'child', 'young'],
		category: 'people',
		wedgeComposition: { horizontal: 2, vertical: 3, oblique: 0, winkelhaken: 0 },
		mzlNumber: 58,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+1230B',
		character: '𒌋',
		name: 'U',
		readings: [
			{ value: 'u', type: 'syllabic' },
			{ value: 'u2', type: 'syllabic' }
		],
		meanings: ['ten', 'plant', 'and'],
		category: 'numbers',
		wedgeComposition: { horizontal: 1, vertical: 0, oblique: 0, winkelhaken: 1 },
		mzlNumber: 411,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+1230D',
		character: '𒌍',
		name: 'U2',
		readings: [
			{ value: 'u2', type: 'syllabic' }
		],
		meanings: ['grass', 'plant', 'herb'],
		category: 'nature',
		wedgeComposition: { horizontal: 2, vertical: 1, oblique: 0, winkelhaken: 0 },
		mzlNumber: 490,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12326',
		character: '𒌦',
		name: 'UM',
		readings: [
			{ value: 'um', type: 'syllabic' }
		],
		meanings: ['reed rope', 'old woman'],
		category: 'objects',
		wedgeComposition: { horizontal: 3, vertical: 2, oblique: 0, winkelhaken: 0 },
		mzlNumber: 238,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12328',
		character: '𒌨',
		name: 'UR',
		readings: [
			{ value: 'ur', type: 'syllabic' },
			{ value: 'lik', type: 'syllabic' }
		],
		meanings: ['dog', 'lion', 'servant'],
		category: 'animals',
		wedgeComposition: { horizontal: 4, vertical: 1, oblique: 0, winkelhaken: 0 },
		mzlNumber: 575,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12351',
		character: '𒍑',
		name: 'USH',
		readings: [
			{ value: 'ush', type: 'syllabic' },
			{ value: 'us', type: 'syllabic' }
		],
		meanings: ['blood', 'to die', 'foundation'],
		category: 'body',
		wedgeComposition: { horizontal: 3, vertical: 1, oblique: 1, winkelhaken: 0 },
		mzlNumber: 381,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12360',
		character: '𒍠',
		name: 'ZA',
		readings: [
			{ value: 'za', type: 'syllabic' },
			{ value: 'sa', type: 'syllabic' }
		],
		meanings: ['stone', 'you'],
		category: 'objects',
		wedgeComposition: { horizontal: 3, vertical: 3, oblique: 0, winkelhaken: 0 },
		mzlNumber: 851,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12365',
		character: '𒍥',
		name: 'ZI',
		readings: [
			{ value: 'zi', type: 'syllabic' },
			{ value: 'ze', type: 'syllabic' },
			{ value: 'si', type: 'syllabic' }
		],
		meanings: ['life', 'breath', 'soul', 'throat'],
		category: 'body',
		wedgeComposition: { horizontal: 2, vertical: 2, oblique: 1, winkelhaken: 0 },
		mzlNumber: 140,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+1236A',
		character: '𒍪',
		name: 'ZU',
		readings: [
			{ value: 'zu', type: 'syllabic' },
			{ value: 'su', type: 'syllabic' }
		],
		meanings: ['to know', 'tooth', 'your'],
		category: 'abstract',
		wedgeComposition: { horizontal: 2, vertical: 2, oblique: 0, winkelhaken: 1 },
		mzlNumber: 15,
		source: OSL_SOURCE
	},

	// === NUMERALS ===
	{
		codepoint: 'U+12415',
		character: '𒐕',
		name: 'DISH',
		readings: [
			{ value: 'dish', type: 'syllabic' },
			{ value: '1', type: 'logographic' }
		],
		meanings: ['one', '1'],
		category: 'numbers',
		wedgeComposition: { horizontal: 0, vertical: 1, oblique: 0, winkelhaken: 0 },
		mzlNumber: 748,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+1241E',
		character: '𒐞',
		name: 'ASH',
		readings: [
			{ value: 'ash', type: 'syllabic' },
			{ value: '1', type: 'logographic' }
		],
		meanings: ['one', 'single'],
		category: 'numbers',
		wedgeComposition: { horizontal: 0, vertical: 1, oblique: 0, winkelhaken: 0 },
		mzlNumber: 1,
		source: OSL_SOURCE
	},

	// === COMMON LOGOGRAMS ===
	{
		codepoint: 'U+1214E',
		character: '𒅎',
		name: 'IM',
		readings: [
			{ value: 'im', type: 'syllabic' },
			{ value: 'em', type: 'syllabic' },
			{ value: 'tum', type: 'syllabic' }
		],
		meanings: ['wind', 'clay', 'tablet', 'storm'],
		category: 'nature',
		wedgeComposition: { horizontal: 4, vertical: 2, oblique: 1, winkelhaken: 0 },
		mzlNumber: 641,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12308',
		character: '𒌈',
		name: 'TUM',
		readings: [
			{ value: 'tum', type: 'syllabic' },
			{ value: 'dum', type: 'syllabic' }
		],
		meanings: ['to bring', 'to carry'],
		category: 'actions',
		wedgeComposition: { horizontal: 3, vertical: 2, oblique: 1, winkelhaken: 0 },
		mzlNumber: 350,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12229',
		character: '𒈩',
		name: 'MASH',
		readings: [
			{ value: 'mash', type: 'syllabic' },
			{ value: 'mas', type: 'syllabic' }
		],
		meanings: ['twin', 'goat', 'interest'],
		category: 'animals',
		wedgeComposition: { horizontal: 2, vertical: 2, oblique: 0, winkelhaken: 1 },
		mzlNumber: 120,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+1202B',
		character: '𒀫',
		name: 'AL',
		readings: [
			{ value: 'al', type: 'syllabic' }
		],
		meanings: ['hoe', 'desire'],
		category: 'tools',
		wedgeComposition: { horizontal: 3, vertical: 2, oblique: 0, winkelhaken: 0 },
		mzlNumber: 474,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12034',
		character: '𒀴',
		name: 'AR',
		readings: [
			{ value: 'ar', type: 'syllabic' }
		],
		meanings: ['praise', 'glory'],
		category: 'abstract',
		wedgeComposition: { horizontal: 4, vertical: 2, oblique: 0, winkelhaken: 1 },
		mzlNumber: 851,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12038',
		character: '𒀸',
		name: 'ASH2',
		readings: [
			{ value: 'ash2', type: 'syllabic' }
		],
		meanings: ['one'],
		category: 'numbers',
		wedgeComposition: { horizontal: 1, vertical: 0, oblique: 0, winkelhaken: 0 },
		mzlNumber: 1,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12308',
		character: '𒌈',
		name: 'DUB',
		readings: [
			{ value: 'dub', type: 'syllabic' },
			{ value: 'tup', type: 'syllabic' }
		],
		meanings: ['tablet', 'to heap up'],
		category: 'objects',
		wedgeComposition: { horizontal: 4, vertical: 3, oblique: 0, winkelhaken: 0 },
		mzlNumber: 138,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+1210C',
		character: '𒄌',
		name: 'GUR',
		readings: [
			{ value: 'gur', type: 'syllabic' },
			{ value: 'kur', type: 'syllabic' }
		],
		meanings: ['basket', 'to turn'],
		category: 'containers',
		wedgeComposition: { horizontal: 5, vertical: 2, oblique: 0, winkelhaken: 0 },
		mzlNumber: 111,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+121AD',
		character: '𒆭',
		name: 'KUR',
		readings: [
			{ value: 'kur', type: 'syllabic' },
			{ value: 'gur', type: 'syllabic' },
			{ value: 'mat', type: 'logographic', language: 'akkadian' }
		],
		meanings: ['mountain', 'land', 'underworld', 'foreign land'],
		category: 'nature',
		wedgeComposition: { horizontal: 3, vertical: 0, oblique: 3, winkelhaken: 0 },
		mzlNumber: 578,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12312',
		character: '𒌒',
		name: 'UD',
		readings: [
			{ value: 'ud', type: 'syllabic' },
			{ value: 'ut', type: 'syllabic' },
			{ value: 'tam', type: 'syllabic' },
			{ value: 'par', type: 'syllabic' }
		],
		meanings: ['sun', 'day', 'light', 'time', 'storm'],
		category: 'cosmos',
		wedgeComposition: { horizontal: 4, vertical: 0, oblique: 4, winkelhaken: 1 },
		mzlNumber: 596,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12311',
		character: '𒌑',
		name: 'UDU',
		readings: [
			{ value: 'udu', type: 'syllabic' },
			{ value: 'lu', type: 'syllabic' }
		],
		meanings: ['sheep'],
		category: 'animals',
		wedgeComposition: { horizontal: 3, vertical: 2, oblique: 1, winkelhaken: 0 },
		mzlNumber: 537,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+120FB',
		character: '𒃻',
		name: 'GU4',
		readings: [
			{ value: 'gu4', type: 'syllabic' },
			{ value: 'gud', type: 'syllabic' }
		],
		meanings: ['ox', 'bull', 'cattle'],
		category: 'animals',
		wedgeComposition: { horizontal: 5, vertical: 3, oblique: 1, winkelhaken: 0 },
		mzlNumber: 472,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+1219F',
		character: '𒆟',
		name: 'LAM',
		readings: [
			{ value: 'lam', type: 'syllabic' }
		],
		meanings: ['abundance', 'growth'],
		category: 'abstract',
		wedgeComposition: { horizontal: 4, vertical: 3, oblique: 0, winkelhaken: 0 },
		mzlNumber: 693,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12246',
		character: '𒉆',
		name: 'NAM',
		readings: [
			{ value: 'nam', type: 'syllabic' }
		],
		meanings: ['destiny', 'fate', 'status'],
		category: 'abstract',
		wedgeComposition: { horizontal: 3, vertical: 2, oblique: 0, winkelhaken: 0 },
		mzlNumber: 79,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12263',
		character: '𒉣',
		name: 'NUN',
		readings: [
			{ value: 'nun', type: 'syllabic' }
		],
		meanings: ['prince', 'noble'],
		category: 'people',
		wedgeComposition: { horizontal: 2, vertical: 3, oblique: 0, winkelhaken: 0 },
		mzlNumber: 143,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12297',
		character: '𒊗',
		name: 'RU',
		readings: [
			{ value: 'ru', type: 'syllabic' }
		],
		meanings: ['to send', 'to build'],
		category: 'actions',
		wedgeComposition: { horizontal: 3, vertical: 2, oblique: 0, winkelhaken: 0 },
		mzlNumber: 68,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+122BB',
		character: '𒊻',
		name: 'SHE',
		readings: [
			{ value: 'she', type: 'syllabic' },
			{ value: 'se', type: 'syllabic' }
		],
		meanings: ['barley', 'grain'],
		category: 'food',
		wedgeComposition: { horizontal: 1, vertical: 1, oblique: 1, winkelhaken: 1 },
		mzlNumber: 579,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+122F0',
		character: '𒋰',
		name: 'TAB',
		readings: [
			{ value: 'tab', type: 'syllabic' },
			{ value: 'dab', type: 'syllabic' }
		],
		meanings: ['to double', 'companion', 'pair'],
		category: 'numbers',
		wedgeComposition: { horizontal: 2, vertical: 2, oblique: 0, winkelhaken: 0 },
		mzlNumber: 209,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12134',
		character: '𒄴',
		name: 'HASH',
		readings: [
			{ value: 'hash', type: 'syllabic' },
			{ value: 'hish', type: 'syllabic' }
		],
		meanings: ['eight'],
		category: 'numbers',
		wedgeComposition: { horizontal: 0, vertical: 4, oblique: 4, winkelhaken: 0 },
		mzlNumber: 636,
		source: OSL_SOURCE
	},
	{
		codepoint: 'U+12399',
		character: '𒎙',
		name: 'DISH2',
		readings: [
			{ value: '1', type: 'logographic' }
		],
		meanings: ['one', 'single'],
		category: 'numbers',
		wedgeComposition: { horizontal: 0, vertical: 1, oblique: 0, winkelhaken: 0 },
		mzlNumber: 748,
		source: OSL_SOURCE
	}
];

/**
 * Get a sign by its Unicode codepoint
 */
export function getSignByCodepoint(codepoint: string): CuneiformSign | undefined {
	return SIGNS.find(s => s.codepoint === codepoint);
}

/**
 * Get a sign by its Unicode character
 */
export function getSignByCharacter(character: string): CuneiformSign | undefined {
	return SIGNS.find(s => s.character === character);
}

/**
 * Get a sign by its name (case-insensitive)
 */
export function getSignByName(name: string): CuneiformSign | undefined {
	const upper = name.toUpperCase();
	return SIGNS.find(s => s.name.toUpperCase() === upper);
}

/**
 * Get all signs in a category
 */
export function getSignsByCategory(category: string): CuneiformSign[] {
	return SIGNS.filter(s => s.category === category);
}

/**
 * Get signs that have a specific reading value
 */
export function getSignsByReading(reading: string): CuneiformSign[] {
	const lower = reading.toLowerCase();
	return SIGNS.filter(s =>
		s.readings.some(r => r.value.toLowerCase() === lower)
	);
}

/**
 * Search signs by meaning (partial match)
 */
export function searchSignsByMeaning(query: string): CuneiformSign[] {
	const lower = query.toLowerCase();
	return SIGNS.filter(s =>
		s.meanings.some(m => m.toLowerCase().includes(lower))
	);
}
