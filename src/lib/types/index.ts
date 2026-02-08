// Core sign types
export type {
	CuneiformSign,
	SignReading,
	WedgeComposition,
	SignCategory,
	DataSource,
	SyllableMapping,
	SignSearchResult
} from './sign';

// Lesson types
export type {
	Lesson,
	LessonStep,
	LessonProgress,
	FlashCard,
	DrawingAttempt
} from './lesson';

// Wedge types
export type {
	WedgeType,
	Stroke,
	StrokeSequence,
	WedgeFilter,
	WedgeCanvasState,
	StrokePoint,
	WedgeRenderStyle,
	WedgeCountRange,
	WedgeMatchTolerance
} from './wedge';

export { WEDGE_STYLES, DEFAULT_TOLERANCE } from './wedge';

// Export types
export type {
	ExportFormat,
	RenderStyle,
	ExportOptions,
	RenderStyleConfig,
	RenderedVerse,
	RenderedLine,
	RenderedWord,
	RenderedSyllable
} from './export';

export {
	DEFAULT_EXPORT_OPTIONS,
	RENDER_STYLE_CONFIGS,
	ATTRIBUTION_TEXT
} from './export';
