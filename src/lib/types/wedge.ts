/**
 * Types for wedge strokes and drawing canvas
 */

import type { WedgeType, Stroke, StrokeSequence } from './lesson';

export type { WedgeType, Stroke, StrokeSequence };

/** Wedge filter state for Read mode sign identification */
export interface WedgeFilter {
	horizontal: number;
	vertical: number;
	oblique: number;
	winkelhaken: number;
}

/** Canvas drawing context for wedge strokes */
export interface WedgeCanvasState {
	/** Current strokes on the canvas */
	strokes: StrokeSequence;
	/** Whether the user is currently drawing */
	isDrawing: boolean;
	/** Current stroke in progress */
	currentStroke: Stroke | null;
	/** Undo history */
	history: StrokeSequence[];
	/** History index for redo */
	historyIndex: number;
}

/** Pointer event data for pressure-sensitive drawing */
export interface StrokePoint {
	x: number;
	y: number;
	/** Pressure (0-1), defaults to 0.5 for non-pressure devices */
	pressure: number;
	/** Timestamp */
	time: number;
}

/** Visual properties for rendering a wedge stroke */
export interface WedgeRenderStyle {
	/** Base width of the wedge head */
	headWidth: number;
	/** Tail width at the end */
	tailWidth: number;
	/** Fill color */
	color: string;
	/** Whether to show displacement effect around edges */
	showDisplacement: boolean;
}

/** Default render styles for different wedge types */
export const WEDGE_STYLES: Record<WedgeType, WedgeRenderStyle> = {
	horizontal: {
		headWidth: 12,
		tailWidth: 2,
		color: '#3d2e0a',
		showDisplacement: true
	},
	vertical: {
		headWidth: 12,
		tailWidth: 2,
		color: '#3d2e0a',
		showDisplacement: true
	},
	oblique: {
		headWidth: 10,
		tailWidth: 2,
		color: '#3d2e0a',
		showDisplacement: true
	},
	winkelhaken: {
		headWidth: 14,
		tailWidth: 3,
		color: '#3d2e0a',
		showDisplacement: true
	}
};

/** Wedge count range for filtering */
export interface WedgeCountRange {
	min: number;
	max: number;
}

/** Tolerance settings for wedge matching */
export interface WedgeMatchTolerance {
	horizontal: number;
	vertical: number;
	oblique: number;
	winkelhaken: number;
}

export const DEFAULT_TOLERANCE: WedgeMatchTolerance = {
	horizontal: 1,
	vertical: 1,
	oblique: 1,
	winkelhaken: 1
};
