/**
 * Learn mode (Scribe School) state using Svelte 5 runes
 */

import type { Lesson, LessonProgress, StrokeSequence, DrawingAttempt } from '$lib/types';
import { LESSONS, getLessonById, canStartLesson, getNextLesson } from '$lib/data/lessons';
import { browser } from '$app/environment';

const STORAGE_KEY = 'tablet-reader-scribe-progress';

class ScribeStore {
	/** All available lessons */
	allLessons = $state<Lesson[]>(LESSONS);

	/** Completed lesson IDs */
	completedLessons = $state<Set<string>>(new Set());

	/** Progress for each started lesson */
	lessonProgress = $state<Map<string, LessonProgress>>(new Map());

	/** Currently active lesson */
	currentLesson = $state<Lesson | null>(null);

	/** Current step index within the lesson */
	currentStepIndex = $state(0);

	/** Current strokes on the drawing canvas */
	currentStrokes = $state<StrokeSequence>([]);

	/** Drawing history for undo */
	strokeHistory = $state<StrokeSequence[]>([]);

	/** History index for redo */
	historyIndex = $state(0);

	/** Whether currently drawing */
	isDrawing = $state(false);

	/** Recent drawing attempts for feedback */
	recentAttempts = $state<DrawingAttempt[]>([]);

	constructor() {
		// Load saved progress from localStorage on initialization
		if (browser) {
			this.loadFromStorage();
		}
	}

	/** Available lessons (prerequisites met) */
	availableLessons = $derived.by(() => {
		return this.allLessons.filter(lesson =>
			canStartLesson(lesson.id, this.completedLessons)
		);
	});

	/** Current step in the active lesson */
	currentStep = $derived.by(() => {
		if (!this.currentLesson) return null;
		return this.currentLesson.steps[this.currentStepIndex] ?? null;
	});

	/** Progress percentage for current lesson */
	currentLessonProgress = $derived.by(() => {
		if (!this.currentLesson) return 0;
		return (this.currentStepIndex / this.currentLesson.steps.length) * 100;
	});

	/** Overall progress across all lessons */
	overallProgress = $derived.by(() => {
		if (this.allLessons.length === 0) return 0;
		return (this.completedLessons.size / this.allLessons.length) * 100;
	});

	/** Start a lesson */
	startLesson(lessonId: string) {
		const lesson = getLessonById(lessonId);
		if (!lesson) return false;

		if (!canStartLesson(lessonId, this.completedLessons)) {
			return false;
		}

		this.currentLesson = lesson;
		this.currentStepIndex = 0;
		this.clearCanvas();

		// Initialize or update progress
		if (!this.lessonProgress.has(lessonId)) {
			this.lessonProgress.set(lessonId, {
				lessonId,
				completedSteps: 0,
				totalSteps: lesson.steps.length,
				completed: false,
				lastActivity: Date.now()
			});
		}

		return true;
	}

	/** Advance to next step */
	nextStep() {
		if (!this.currentLesson) return;

		if (this.currentStepIndex < this.currentLesson.steps.length - 1) {
			this.currentStepIndex++;
			this.clearCanvas();

			// Update progress
			const progress = this.lessonProgress.get(this.currentLesson.id);
			if (progress) {
				progress.completedSteps = this.currentStepIndex;
				progress.lastActivity = Date.now();
			}
		} else {
			// Lesson complete
			this.completeLesson();
		}
	}

	/** Go to previous step */
	previousStep() {
		if (this.currentStepIndex > 0) {
			this.currentStepIndex--;
			this.clearCanvas();
		}
	}

	/** Complete current lesson */
	completeLesson() {
		if (!this.currentLesson) return;

		this.completedLessons.add(this.currentLesson.id);

		const progress = this.lessonProgress.get(this.currentLesson.id);
		if (progress) {
			progress.completed = true;
			progress.completedSteps = this.currentLesson.steps.length;
			progress.lastActivity = Date.now();
		}

		// Persist progress to localStorage
		this.saveToStorage();
	}

	/** Exit current lesson */
	exitLesson() {
		this.currentLesson = null;
		this.currentStepIndex = 0;
		this.clearCanvas();
	}

	/** Get next lesson after current */
	getNextLesson(): Lesson | undefined {
		if (!this.currentLesson) return undefined;
		return getNextLesson(this.currentLesson.id);
	}

	/** Add a stroke to the canvas */
	addStroke(stroke: StrokeSequence[number]) {
		// Save current state for undo
		this.strokeHistory = [
			...this.strokeHistory.slice(0, this.historyIndex + 1),
			[...this.currentStrokes]
		];
		this.historyIndex = this.strokeHistory.length - 1;

		this.currentStrokes = [...this.currentStrokes, stroke];
	}

	/** Clear the drawing canvas */
	clearCanvas() {
		this.currentStrokes = [];
		this.strokeHistory = [];
		this.historyIndex = 0;
	}

	/** Undo last stroke */
	undo() {
		if (this.historyIndex >= 0 && this.strokeHistory.length > 0) {
			this.currentStrokes = this.strokeHistory[this.historyIndex] ?? [];
			this.historyIndex = Math.max(0, this.historyIndex - 1);
		}
	}

	/** Redo undone stroke */
	redo() {
		if (this.historyIndex < this.strokeHistory.length - 1) {
			this.historyIndex++;
			// Would need to store future states for proper redo
		}
	}

	/** Record a drawing attempt */
	recordAttempt(attempt: DrawingAttempt) {
		this.recentAttempts = [...this.recentAttempts.slice(-9), attempt];
	}

	/** Reset all progress */
	resetProgress() {
		this.completedLessons = new Set();
		this.lessonProgress = new Map();
		this.exitLesson();

		// Clear localStorage
		if (browser) {
			try {
				localStorage.removeItem(STORAGE_KEY);
			} catch {
				// Ignore storage errors
			}
		}
	}

	/** Load progress from localStorage */
	private loadFromStorage() {
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored) {
				const data = JSON.parse(stored) as { completed: string[]; progress: [string, LessonProgress][] };
				this.loadProgress(data);
			}
		} catch {
			// Ignore parse errors, start fresh
		}
	}

	/** Save progress to localStorage */
	private saveToStorage() {
		if (!browser) return;

		try {
			const data = this.exportProgress();
			localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
		} catch {
			// Ignore storage errors (quota exceeded, etc.)
		}
	}

	/** Load progress from storage */
	loadProgress(data: { completed: string[]; progress: [string, LessonProgress][] }) {
		this.completedLessons = new Set(data.completed);
		this.lessonProgress = new Map(data.progress);
	}

	/** Export progress for storage */
	exportProgress(): { completed: string[]; progress: [string, LessonProgress][] } {
		return {
			completed: [...this.completedLessons],
			progress: [...this.lessonProgress.entries()]
		};
	}
}

export const scribeStore = new ScribeStore();
