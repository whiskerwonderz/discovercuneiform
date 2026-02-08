/**
 * Stroke analysis utilities for validating cuneiform drawing
 */

export type StrokeDirection = 'horizontal' | 'vertical' | 'oblique' | 'winkelhaken' | 'unknown';

export interface StrokeAnalysis {
	direction: StrokeDirection;
	angle: number; // degrees from horizontal (0-360)
	length: number;
}

export interface StrokeComparison {
	horizontal: { drawn: number; expected: number; diff: number };
	vertical: { drawn: number; expected: number; diff: number };
	oblique: { drawn: number; expected: number; diff: number };
	winkelhaken: { drawn: number; expected: number; diff: number };
	totalDrawn: number;
	totalExpected: number;
	isComplete: boolean;
	feedback: string[];
}

/**
 * Classify a single stroke based on its start and end points
 */
export function classifyStroke(points: Array<{ x: number; y: number }>): StrokeAnalysis {
	if (points.length < 2) {
		return { direction: 'unknown', angle: 0, length: 0 };
	}

	const start = points[0];
	const end = points[points.length - 1];
	const dx = end.x - start.x;
	const dy = end.y - start.y;
	const length = Math.sqrt(dx * dx + dy * dy);

	if (length < 10) {
		// Very short stroke - could be a winkelhaken (corner impression)
		return { direction: 'winkelhaken', angle: 0, length };
	}

	// Calculate angle in degrees (0 = right, 90 = down, 180 = left, 270 = up)
	let angle = Math.atan2(dy, dx) * (180 / Math.PI);
	if (angle < 0) angle += 360;

	// Classify based on angle
	// Horizontal: roughly 0°, 180° (±25°)
	// Vertical: roughly 90°, 270° (±25°)
	// Oblique: everything else

	const direction = classifyAngle(angle);

	return { direction, angle, length };
}

function classifyAngle(angle: number): StrokeDirection {
	// Normalize to 0-180 range (we don't care about direction, just orientation)
	const normalizedAngle = angle > 180 ? angle - 180 : angle;

	// Horizontal: 0-25° or 155-180°
	if (normalizedAngle <= 25 || normalizedAngle >= 155) {
		return 'horizontal';
	}

	// Vertical: 65-115°
	if (normalizedAngle >= 65 && normalizedAngle <= 115) {
		return 'vertical';
	}

	// Oblique: 25-65° or 115-155°
	return 'oblique';
}

/**
 * Analyze all strokes and count by direction
 */
export function analyzeStrokes(strokes: Array<{ points: Array<{ x: number; y: number }> }>): Record<StrokeDirection, number> {
	const counts: Record<StrokeDirection, number> = {
		horizontal: 0,
		vertical: 0,
		oblique: 0,
		winkelhaken: 0,
		unknown: 0
	};

	for (const stroke of strokes) {
		const analysis = classifyStroke(stroke.points);
		counts[analysis.direction]++;
	}

	return counts;
}

/**
 * Compare drawn strokes to expected wedge composition
 */
export function compareToTarget(
	strokes: Array<{ points: Array<{ x: number; y: number }> }>,
	expectedComposition: { horizontal: number; vertical: number; oblique: number; winkelhaken: number }
): StrokeComparison {
	const drawn = analyzeStrokes(strokes);
	const feedback: string[] = [];

	const horizontal = {
		drawn: drawn.horizontal,
		expected: expectedComposition.horizontal,
		diff: drawn.horizontal - expectedComposition.horizontal
	};

	const vertical = {
		drawn: drawn.vertical,
		expected: expectedComposition.vertical,
		diff: drawn.vertical - expectedComposition.vertical
	};

	const oblique = {
		drawn: drawn.oblique,
		expected: expectedComposition.oblique,
		diff: drawn.oblique - expectedComposition.oblique
	};

	const winkelhaken = {
		drawn: drawn.winkelhaken,
		expected: expectedComposition.winkelhaken,
		diff: drawn.winkelhaken - expectedComposition.winkelhaken
	};

	const totalDrawn = drawn.horizontal + drawn.vertical + drawn.oblique + drawn.winkelhaken;
	const totalExpected =
		expectedComposition.horizontal +
		expectedComposition.vertical +
		expectedComposition.oblique +
		expectedComposition.winkelhaken;

	// Generate feedback
	if (horizontal.diff < 0) {
		feedback.push(`Add ${-horizontal.diff} more horizontal wedge${-horizontal.diff > 1 ? 's' : ''} (─)`);
	} else if (horizontal.diff > 0) {
		feedback.push(`You have ${horizontal.diff} extra horizontal wedge${horizontal.diff > 1 ? 's' : ''}`);
	}

	if (vertical.diff < 0) {
		feedback.push(`Add ${-vertical.diff} more vertical wedge${-vertical.diff > 1 ? 's' : ''} (│)`);
	} else if (vertical.diff > 0) {
		feedback.push(`You have ${vertical.diff} extra vertical wedge${vertical.diff > 1 ? 's' : ''}`);
	}

	if (oblique.diff < 0) {
		feedback.push(`Add ${-oblique.diff} more oblique wedge${-oblique.diff > 1 ? 's' : ''} (╱)`);
	} else if (oblique.diff > 0) {
		feedback.push(`You have ${oblique.diff} extra oblique wedge${oblique.diff > 1 ? 's' : ''}`);
	}

	if (winkelhaken.diff < 0) {
		feedback.push(`Add ${-winkelhaken.diff} more winkelhaken (∠)`);
	} else if (winkelhaken.diff > 0) {
		feedback.push(`You have ${winkelhaken.diff} extra winkelhaken`);
	}

	const isComplete =
		horizontal.diff === 0 &&
		vertical.diff === 0 &&
		oblique.diff === 0 &&
		winkelhaken.diff === 0;

	return {
		horizontal,
		vertical,
		oblique,
		winkelhaken,
		totalDrawn,
		totalExpected,
		isComplete,
		feedback
	};
}

/**
 * Get a simple progress message
 */
export function getProgressMessage(comparison: StrokeComparison): string {
	if (comparison.isComplete) {
		return 'Perfect! All wedges match.';
	}

	if (comparison.totalDrawn === 0) {
		return `Draw ${comparison.totalExpected} wedge${comparison.totalExpected > 1 ? 's' : ''} to complete this sign.`;
	}

	if (comparison.totalDrawn < comparison.totalExpected) {
		const remaining = comparison.totalExpected - comparison.totalDrawn;
		return `${comparison.totalDrawn}/${comparison.totalExpected} wedges drawn. ${remaining} more to go!`;
	}

	if (comparison.totalDrawn > comparison.totalExpected) {
		return `${comparison.totalDrawn}/${comparison.totalExpected} wedges — you've drawn a few extra!`;
	}

	// Same count but different types
	return `${comparison.totalDrawn}/${comparison.totalExpected} wedges — check the stroke directions.`;
}
