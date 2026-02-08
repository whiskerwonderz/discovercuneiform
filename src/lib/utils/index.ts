// Syllabification
export {
	syllabify,
	syllableToSign,
	renderWord,
	renderLine,
	renderText,
	wordToCuneiform,
	textToCuneiform,
	getSyllabificationStats
} from './syllabify';

// Wedge matching
export {
	wedgeCompositionsMatch,
	wedgeSimilarity,
	matchByWedges,
	findSignsByWedges,
	findExactWedgeMatch,
	getTotalWedges,
	findSignsByWedgeCount,
	groupSignsByWedgeCount,
	createEmptyFilter
} from './wedge-match';

// Image enhancement
export {
	applyEnhancements,
	loadImage,
	createEnhancedCanvas,
	cropCanvas,
	canvasToDataURL,
	canvasToBlob,
	applyGrayscale,
	applyThreshold,
	applySharpen,
	DEFAULT_ENHANCEMENT
} from './image-enhance';
export type { EnhancementSettings } from './image-enhance';

// Cuneiform rendering
export {
	renderSyllable,
	renderWordToCuneiform,
	renderTextToCuneiform,
	getTextBreakdown,
	formatCuneiformHTML,
	containsCuneiform,
	extractCuneiform,
	countCuneiformChars,
	DEFAULT_RENDER_OPTIONS
} from './cuneiform-render';
export type { RenderOptions, SyllableBreakdown } from './cuneiform-render';

// Export utilities
export {
	generateFilename,
	exportToPNG,
	generateSVG,
	exportToSVG,
	exportToPDF,
	downloadBlob,
	copyToClipboard,
	createShareableURL
} from './export';
