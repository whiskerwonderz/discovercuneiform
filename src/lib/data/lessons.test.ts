import { describe, it, expect } from 'vitest';
import { LESSONS, getLessonById, getNextLesson, getLessonsByDifficulty } from './lessons';

describe('Lessons Data', () => {
	it('should have at least one lesson', () => {
		expect(LESSONS.length).toBeGreaterThan(0);
	});

	it('should have unique lesson IDs', () => {
		const ids = LESSONS.map(l => l.id);
		const uniqueIds = new Set(ids);
		expect(uniqueIds.size).toBe(ids.length);
	});

	it('each lesson should have required fields', () => {
		for (const lesson of LESSONS) {
			expect(lesson.id).toBeTruthy();
			expect(lesson.title).toBeTruthy();
			expect(lesson.description).toBeTruthy();
			expect(lesson.difficulty).toBeTruthy();
			expect(lesson.steps.length).toBeGreaterThan(0);
		}
	});

	it('lesson steps should have valid types', () => {
		const validTypes = ['demo', 'practice', 'quiz'];
		for (const lesson of LESSONS) {
			for (const step of lesson.steps) {
				expect(validTypes).toContain(step.type);
				expect(step.instruction).toBeTruthy();
			}
		}
	});

	it('getLessonById should return correct lesson', () => {
		const lesson = getLessonById('wedge-horizontal');
		expect(lesson).toBeDefined();
		expect(lesson?.title).toContain('Horizontal');
	});

	it('getLessonById should return undefined for non-existent ID', () => {
		const lesson = getLessonById('non-existent');
		expect(lesson).toBeUndefined();
	});

	it('prerequisites should reference existing lessons', () => {
		const lessonIds = new Set(LESSONS.map(l => l.id));
		for (const lesson of LESSONS) {
			if (lesson.prerequisite) {
				expect(lessonIds.has(lesson.prerequisite)).toBe(true);
			}
		}
	});

	it('getNextLesson should return a valid next lesson or undefined', () => {
		const firstLesson = LESSONS[0];
		const next = getNextLesson(firstLesson.id);
		if (next) {
			expect(LESSONS.some(l => l.id === next.id)).toBe(true);
		}
	});

	it('getLessonsByDifficulty should filter correctly', () => {
		const beginnerLessons = getLessonsByDifficulty('beginner');
		for (const lesson of beginnerLessons) {
			expect(lesson.difficulty).toBe('beginner');
		}
	});
});
