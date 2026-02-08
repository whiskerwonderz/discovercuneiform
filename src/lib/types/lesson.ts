/**
 * Types for Scribe School (Learn mode) curriculum
 */

export interface Lesson {
	/** Unique identifier */
	id: string;
	/** Display title */
	title: string;
	/** Brief description */
	description: string;
	/** Historical context about scribal education */
	historicalContext: string;
	/** Ordered lesson steps */
	steps: LessonStep[];
	/** ID of prerequisite lesson (if any) */
	prerequisite?: string;
	/** Sign codepoints covered in this lesson */
	signs: string[];
	/** Difficulty level */
	difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface LessonStep {
	/** Type of step */
	type: 'demo' | 'practice' | 'quiz';
	/** Instruction text for the user */
	instruction: string;
	/** Target sign codepoint (for sign-based steps) */
	targetSign?: string;
	/** Target stroke sequence (for drawing steps) */
	targetStrokes?: StrokeSequence;
	/** Hints to show if the user struggles */
	hints?: string[];
}

export type WedgeType = 'horizontal' | 'vertical' | 'oblique' | 'winkelhaken';

export interface Stroke {
	/** Type of wedge stroke */
	type: WedgeType;
	/** Starting X position (normalized 0-1) */
	startX: number;
	/** Starting Y position (normalized 0-1) */
	startY: number;
	/** Angle in degrees */
	angle: number;
	/** Length (normalized 0-1) */
	length: number;
}

export type StrokeSequence = Stroke[];

/** User progress on a lesson */
export interface LessonProgress {
	lessonId: string;
	/** Steps completed (0-indexed) */
	completedSteps: number;
	/** Total steps in the lesson */
	totalSteps: number;
	/** Whether the lesson is fully completed */
	completed: boolean;
	/** Last activity timestamp */
	lastActivity: number;
}

/** Flash card for sign recognition drills */
export interface FlashCard {
	/** Sign codepoint */
	signCodepoint: string;
	/** Front of card (what to show) */
	front: 'sign' | 'reading' | 'meaning';
	/** What the user needs to identify */
	back: 'sign' | 'reading' | 'meaning';
}

/** User's drawing attempt on the canvas */
export interface DrawingAttempt {
	/** Strokes the user made */
	strokes: StrokeSequence;
	/** Target strokes for comparison */
	target: StrokeSequence;
	/** Similarity score (0-1) */
	score: number;
	/** Timestamp */
	timestamp: number;
}
