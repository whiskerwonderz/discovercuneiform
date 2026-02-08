// Sign database
export {
	SIGNS,
	getSignByCodepoint,
	getSignByCharacter,
	getSignByName,
	getSignsByCategory,
	getSignsByReading,
	searchSignsByMeaning
} from './signs';

// Syllable mappings
export {
	SYLLABLE_MAPPINGS,
	syllableMap,
	getSignForSyllable,
	getAllSyllables,
	hasSyllableMapping,
	getSyllablesByConfidence
} from './syllable-map';

// Lessons
export {
	LESSONS,
	getLessonById,
	getLessonsByDifficulty,
	getNextLesson,
	canStartLesson,
	getTotalLessonCount
} from './lessons';

// Phrases
export {
	PHRASES,
	getPhraseById,
	getPhrasesByLanguage,
	getRandomPhrase
} from './phrases';
export type { AncientPhrase } from './phrases';

// Categories
export {
	CATEGORIES,
	getCategoryInfo,
	getCategoryName
} from './categories';
export type { CategoryInfo } from './categories';
