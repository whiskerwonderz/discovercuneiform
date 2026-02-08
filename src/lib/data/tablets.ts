/**
 * Famous cuneiform tablets with existing translations
 * These are well-documented tablets from major collections
 */

export interface TabletText {
	/** Line number or section */
	line: string;
	/** Cuneiform text (actual signs) */
	cuneiform?: string;
	/** Transliteration (Akkadian/Sumerian in Latin script) */
	transliteration: string;
	/** English translation */
	translation: string;
}

export interface FamousTablet {
	id: string;
	name: string;
	description: string;
	period: string;
	language: string;
	location: string;
	collection: string;
	cdliNumber?: string;
	cdliUrl?: string;
	imageUrl?: string;
	imageCredit: string;
	text: TabletText[];
	sourceUrl: string;
}

export const FAMOUS_TABLETS: FamousTablet[] = [
	{
		id: 'gilgamesh-flood',
		name: 'Gilgamesh Flood Tablet',
		description: 'Tablet XI of the Epic of Gilgamesh, containing the famous Flood narrative. This tablet tells how Utnapishtim survived the great flood sent by the gods.',
		period: 'Neo-Assyrian (7th century BCE)',
		language: 'Akkadian',
		location: 'Nineveh, Library of Ashurbanipal',
		collection: 'British Museum (K.3375)',
		cdliNumber: 'P363717',
		cdliUrl: 'https://cdli.earth/artifacts/P363717',
		imageUrl: '/tablets/gilgamesh-flood.jpg',
		imageCredit: 'British Museum / Wikimedia Commons',
		sourceUrl: 'https://www.britishmuseum.org/collection/object/W_K-3375',
		text: [
			{
				line: 'I.1',
				cuneiform: '𒊭 𒈾𒀊𒁀 𒄿𒈬𒊒 𒅖𒁲 𒈠𒋾',
				transliteration: 'ša naqba īmuru išdī māti',
				translation: 'He who saw the Deep, the foundation of the land,'
			},
			{
				line: 'I.2',
				cuneiform: '𒊭 𒆪𒆷𒀜 𒄿𒁺 𒅗𒆷𒈠 𒄩𒋛𒋢',
				transliteration: 'ša kullat īdû kalāma ḫasīsu',
				translation: 'who knew all things, wise in everything:'
			},
			{
				line: 'XI.9',
				cuneiform: '𒀭𒀭 𒅔 𒊭𒁉𒋗𒉡 𒅅𒁍𒁺 𒀀𒁍𒁀',
				transliteration: 'ilū ina libbī-šunu ikpudū abūba',
				translation: 'The gods took counsel and decided upon the flood.'
			},
			{
				line: 'XI.86',
				cuneiform: '𒌓𒈬 𒐋 𒈬𒅆 𒐌 𒅋𒆷𒆪𒈠 𒀀𒁍𒁍',
				transliteration: 'ūmī 6 mūšī 7 illikū-ma abūbu',
				translation: 'Six days and seven nights the flood came on.'
			},
			{
				line: 'XI.145',
				cuneiform: '𒌑𒊺𒍣𒄿 𒋢𒈬𒈠𒋫',
				transliteration: 'ušēṣī summata',
				translation: 'I sent forth a dove.'
			},
			{
				line: 'XI.148',
				cuneiform: '𒌑𒊺𒍣𒄿 𒀀𒊑𒁀',
				transliteration: 'ušēṣī ariba',
				translation: 'I sent forth a raven.'
			}
		]
	},
	{
		id: 'hammurabi-laws',
		name: 'Code of Hammurabi',
		description: 'The famous law code of King Hammurabi of Babylon, one of the oldest deciphered writings of significant length.',
		period: 'Old Babylonian (c. 1792-1750 BCE)',
		language: 'Akkadian',
		location: 'Babylon (found at Susa)',
		collection: 'Louvre Museum',
		imageUrl: '/tablets/hammurabi.jpg',
		imageCredit: 'Louvre Museum / Wikimedia Commons',
		sourceUrl: 'https://www.louvre.fr/en/explore/the-palace/the-code-of-hammurabi',
		text: [
			{
				line: 'Prologue',
				cuneiform: '𒄿𒉡𒈠 𒀭𒉡𒌈 𒊭𒊒𒌈 𒀭𒀀𒉣𒈾𒆠',
				transliteration: 'inūma Anum ṣīrum šar Anunnakī',
				translation: 'When supreme Anu, king of the Anunnaki gods,'
			},
			{
				line: 'Law 1',
				cuneiform: '𒋳𒈠 𒀀𒉿𒈝 𒀀𒉿𒈝 𒌑𒌒𒁉𒅕𒈠',
				transliteration: 'šumma awīlum awīlam ubbirma',
				translation: 'If a man accuses another man'
			},
			{
				line: 'Law 196',
				cuneiform: '𒋳𒈠 𒀀𒉿𒈝 𒅔 𒈥 𒀀𒉿𒅅 𒌑𒄷𒀜𒀊𒁉𒀉',
				transliteration: 'šumma awīlum īn mār awīlim uḫtappid',
				translation: 'If a man destroys the eye of another free man,'
			},
			{
				line: 'Law 196b',
				cuneiform: '𒅔𒋗 𒌑𒄷𒀊𒁍𒁺',
				transliteration: 'īnšu uḫappadu',
				translation: 'they shall destroy his eye.'
			}
		]
	},
	{
		id: 'cyrus-cylinder',
		name: 'Cyrus Cylinder',
		description: 'Declaration by Persian King Cyrus the Great after conquering Babylon in 539 BCE. Often called the first declaration of human rights.',
		period: 'Achaemenid (539 BCE)',
		language: 'Akkadian',
		location: 'Babylon',
		collection: 'British Museum (90920)',
		cdliNumber: 'P273880',
		cdliUrl: 'https://cdli.earth/artifacts/P273880',
		imageUrl: '/tablets/cyrus-cylinder.jpg',
		imageCredit: 'British Museum / Wikimedia Commons',
		sourceUrl: 'https://www.britishmuseum.org/collection/object/W_1880-0617-1941',
		text: [
			{
				line: '1',
				cuneiform: '𒆪𒊏𒀸 𒈗 𒆧𒊭𒋾 𒈗 𒁀𒁉𒅋',
				transliteration: 'Kuraš šar kiššati šar Bābili',
				translation: 'Cyrus, king of the world, king of Babylon,'
			},
			{
				line: '12',
				cuneiform: '𒅔 𒆠𒁉𒀜 𒀭𒀫𒌓 𒁁𒂖 𒃲',
				transliteration: 'ina qibīt Marduk bēl rabî',
				translation: 'By the command of Marduk, the great lord,'
			},
			{
				line: '22',
				cuneiform: '𒀭𒀭 𒀀𒅆𒁍𒌓 𒆷𒁉𒁉𒋗𒉡 𒀀𒈾 𒆸𒂗 𒁀𒁉𒅋',
				transliteration: 'ilānī āšibūt libbī-šunu ana qereb Bābili',
				translation: 'The gods dwelling within, to the midst of Babylon'
			},
			{
				line: '32',
				cuneiform: '𒆪𒆷𒀜 𒈠𒋫𒋾 𒋳𒆷𒈬 𒅖𒋫𒀝𒀭',
				transliteration: 'kullat mātāti šulmu ištakkan',
				translation: 'I established peace in all the lands.'
			}
		]
	},
	{
		id: 'enuma-elish',
		name: 'Enūma Eliš (Creation Epic)',
		description: 'The Babylonian creation myth, telling how Marduk became king of the gods and created the world from the body of Tiamat.',
		period: 'Old Babylonian (c. 1900-1600 BCE)',
		language: 'Akkadian',
		location: 'Babylon/Nineveh',
		collection: 'British Museum (various tablets)',
		imageUrl: '/tablets/enuma-elish.jpg',
		imageCredit: 'British Museum / Wikimedia Commons',
		sourceUrl: 'https://www.britishmuseum.org/collection/object/W_K-5418-c',
		text: [
			{
				line: 'I.1',
				cuneiform: '𒂊𒉡𒈠 𒂊𒇷𒅖 𒆷 𒈾𒁍𒌑 𒊭𒈠𒈬',
				transliteration: 'enūma eliš lā nabû šamāmū',
				translation: 'When on high the heavens had not been named,'
			},
			{
				line: 'I.2',
				cuneiform: '𒊭𒀊𒇷𒅖 𒀀𒄠𒈠𒌈 𒋳𒈠 𒆷 𒍝𒅗𒊏𒀜',
				transliteration: 'šapliš ammatum šuma lā zakrat',
				translation: 'Below, the earth had not been called by name,'
			},
			{
				line: 'I.3',
				cuneiform: '𒀊𒋢𒈠 𒊑𒅖𒌅𒌑 𒍝𒊒𒌑𒋗𒌦',
				transliteration: 'Apsûma rēštû zārûšun',
				translation: 'Primeval Apsu was their progenitor,'
			},
			{
				line: 'I.4',
				cuneiform: '𒈬𒌝𒈬 𒋾𒊩𒆳 𒈬𒀀𒇷𒁲𒁀𒀜 𒁹𒅕𒊑𒋗𒌦',
				transliteration: 'Mummu Tiāmat muallildat gimrīšun',
				translation: 'and creator Tiamat was she who bore them all.'
			},
			{
				line: 'VI.5',
				cuneiform: '𒇻𒌌𒇻𒀀𒈠 𒋳𒋗 𒀀𒉿𒈝 𒅋𒁀𒉌',
				transliteration: 'lulluʾa-ma šumšu awīlum libnī',
				translation: 'Let his name be "Man", let me create a human being.'
			}
		]
	},
	{
		id: 'descent-ishtar',
		name: 'Descent of Ishtar',
		description: 'The Akkadian version of the myth of Ishtar\'s journey to the underworld, one of the oldest recorded stories of death and resurrection.',
		period: 'Neo-Assyrian (7th century BCE)',
		language: 'Akkadian',
		location: 'Nineveh, Library of Ashurbanipal',
		collection: 'British Museum (K.162)',
		cdliNumber: 'P394922',
		cdliUrl: 'https://cdli.earth/artifacts/P394922',
		imageUrl: '/tablets/descent-ishtar.jpg',
		imageCredit: 'British Museum / Wikimedia Commons',
		sourceUrl: 'https://www.britishmuseum.org/collection/object/W_K-162',
		text: [
			{
				line: '1',
				cuneiform: '𒀀𒈾 𒆳 𒆷 𒋫𒊑 𒀀𒈾 𒆳 𒆷 𒌋',
				transliteration: 'ana kur-nu-gi₄-a ana kur la târi',
				translation: 'To the land of no return, to the land from which there is no coming back,'
			},
			{
				line: '2',
				cuneiform: '𒀭𒈹 𒈥𒌅 𒂍𒀀𒊑𒆤𒀀 𒌑𒍝𒄿𒅔 𒌑𒍣𒉡𒊭',
				transliteration: 'Ištar mārat Ea-rig uznu-ša uṣṣi-ma',
				translation: 'Ishtar, daughter of Sin, set her mind,'
			},
			{
				line: '3',
				cuneiform: '𒌑𒍣𒉡 𒈥𒌅 𒂍𒀀 𒀀𒈾 𒁉𒌅 𒂍𒆪𒊒',
				transliteration: 'uṣṣi mārat Ea ana bīt ekleti',
				translation: 'The daughter of Sin set out toward the dark house,'
			},
			{
				line: '4',
				cuneiform: '𒀀𒈾 𒁉𒌅 𒊭 𒂊𒊑𒁍𒋗 𒆷 𒀀𒊓𒌑',
				transliteration: 'ana bīti ša ērubūšu lā aṣû',
				translation: 'To the house which those who enter cannot leave,'
			}
		]
	},
	{
		id: 'ur-nammu-laws',
		name: 'Code of Ur-Nammu',
		description: 'The oldest known law code, predating Hammurabi by 300 years. Written in Sumerian during the Third Dynasty of Ur.',
		period: 'Ur III (c. 2100-2050 BCE)',
		language: 'Sumerian',
		location: 'Ur / Nippur',
		collection: 'Istanbul Archaeological Museum / Penn Museum',
		cdliNumber: 'P432146',
		cdliUrl: 'https://cdli.earth/artifacts/P432146',
		imageUrl: '/tablets/ur-nammu.jpg',
		imageCredit: 'Istanbul Archaeological Museum / Wikimedia Commons',
		sourceUrl: 'https://www.penn.museum/collections/object/304979',
		text: [
			{
				line: 'Prologue',
				cuneiform: '𒀭𒉆𒈬 𒈗 𒋀𒀊𒆠𒂵',
				transliteration: 'ur-nammu lugal urim₅-ma-ke₄',
				translation: 'Ur-Nammu, king of Ur,'
			},
			{
				line: 'Law 1',
				cuneiform: '𒋾𒆷 𒇻 𒄭 𒁉𒍣𒅔 𒂄𒋾𒇻',
				transliteration: 'tukum-bi lu₂ lu₂ gu₇-de₃ in-ši-in-gaz',
				translation: 'If a man commits murder, that man must be killed.'
			},
			{
				line: 'Law 2',
				cuneiform: '𒋾𒆷 𒇻 𒇻 𒅆 𒁉𒍣𒅔',
				transliteration: 'tukum-bi lu₂ lu₂-ra ni₂ in-ši-in-ak',
				translation: 'If a man commits robbery, he shall be killed.'
			}
		]
	}
];

export function getTabletById(id: string): FamousTablet | undefined {
	return FAMOUS_TABLETS.find(t => t.id === id);
}
