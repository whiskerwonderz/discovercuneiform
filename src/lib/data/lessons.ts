/**
 * Scribe School curriculum data
 * Progressive lessons teaching cuneiform from wedge strokes to complete signs
 */

import type { Lesson } from '$lib/types';

export const LESSONS: Lesson[] = [
	// === LEVEL 1: WEDGE FUNDAMENTALS ===
	{
		id: 'wedge-horizontal',
		title: 'The Horizontal Wedge',
		description: 'Master the most fundamental stroke in cuneiform writing.',
		historicalContext: 'The horizontal wedge is the most common stroke in cuneiform. Ancient scribes would press their reed stylus at an angle into wet clay, creating a distinctive triangular impression with a thin tail. Young scribes in the edubba (tablet house) spent weeks perfecting this single stroke before moving on.',
		steps: [
			{
				type: 'demo',
				instruction: 'Watch how the horizontal wedge is formed. The stylus enters the clay at an angle, pressing deeper at the head (left) and lifting to create a thin tail (right).',
				hints: ['Notice how the head is always on the left', 'The tail tapers gradually']
			},
			{
				type: 'practice',
				instruction: 'Draw a horizontal wedge. Press firmly at the start, then lift gradually as you move right.',
				hints: ['Start with the thick end', 'Keep the motion smooth and continuous']
			},
			{
				type: 'practice',
				instruction: 'Draw three horizontal wedges in a row, evenly spaced.',
				hints: ['Aim for consistent size', 'Equal spacing creates readable signs']
			},
			{
				type: 'practice',
				instruction: 'Draw one final horizontal wedge to complete the lesson!'
			}
		],
		signs: [],
		difficulty: 'beginner'
	},
	{
		id: 'wedge-vertical',
		title: 'The Vertical Wedge',
		description: 'Learn to form vertical impressions in the clay.',
		historicalContext: 'Vertical wedges required a different wrist motion than horizontal ones. The scribe would rotate their stylus and press downward, creating a wedge with its head at the top. This stroke appears in many common signs including the numeral for "one."',
		prerequisite: 'wedge-horizontal',
		steps: [
			{
				type: 'demo',
				instruction: 'Watch how the vertical wedge is formed. The stylus presses straight down, creating a head at the top and a tail pointing downward.'
			},
			{
				type: 'practice',
				instruction: 'Draw a vertical wedge. The head should be at the top.'
			},
			{
				type: 'practice',
				instruction: 'Draw three vertical wedges side by side. This represents the number three (3) in cuneiform!',
				targetSign: 'U+120A0'
			},
			{
				type: 'practice',
				instruction: 'Draw five vertical wedges in a row. Practice consistent spacing and sizing.',
				hints: ['Space them evenly', 'Each wedge should be the same size']
			}
		],
		signs: ['U+120A0'],
		difficulty: 'beginner'
	},
	{
		id: 'wedge-oblique',
		title: 'The Oblique Wedge',
		description: 'Master diagonal strokes at various angles.',
		historicalContext: 'Oblique wedges add visual complexity to cuneiform signs. They can point in any diagonal direction and often appear in signs representing movement, action, or celestial objects. The famous sign for "god" (DINGIR) features oblique wedges radiating like a star.',
		prerequisite: 'wedge-vertical',
		steps: [
			{
				type: 'demo',
				instruction: 'Watch how oblique wedges are formed at different angles. The stylus tilts to create diagonal impressions.'
			},
			{
				type: 'practice',
				instruction: 'Draw an oblique wedge pointing to the upper-right.'
			},
			{
				type: 'practice',
				instruction: 'Draw an oblique wedge pointing to the lower-right.'
			},
			{
				type: 'practice',
				instruction: 'Combine oblique wedges to create a simple star pattern. This is the AN (sky/god) sign!',
				targetSign: 'U+1202D',
				hints: ['Start with a vertical wedge in the center', 'Add oblique wedges radiating outward']
			}
		],
		signs: [],
		difficulty: 'beginner'
	},
	{
		id: 'wedge-winkelhaken',
		title: 'The Winkelhaken',
		description: 'Learn the distinctive corner impression unique to cuneiform.',
		historicalContext: 'The winkelhaken (German for "angle hook") is a corner-shaped impression made by pressing the edge of the stylus into the clay. It\'s one of the most distinctive features of cuneiform writing and appears in many signs, including A (water) and AN (sky/god).',
		prerequisite: 'wedge-oblique',
		steps: [
			{
				type: 'demo',
				instruction: 'Watch how the winkelhaken is formed. The corner of the stylus creates a distinctive L-shaped or triangular impression.'
			},
			{
				type: 'practice',
				instruction: 'Draw a winkelhaken. Focus on the angular corner shape.'
			},
			{
				type: 'practice',
				instruction: 'Draw the sign A (water) which combines horizontal wedges with a winkelhaken.',
				targetSign: 'U+12000'
			}
		],
		signs: ['U+12000'],
		difficulty: 'beginner'
	},

	// === LEVEL 2: SIMPLE SIGNS (1-3 wedges) ===
	{
		id: 'sign-an',
		title: 'AN — Sky and Divinity',
		description: 'Learn to write the sign for sky, heaven, and the determinative for gods.',
		historicalContext: 'AN is one of the most important signs in cuneiform. As a word, it means "sky" or "heaven." As a determinative, it appears before the names of gods to indicate divine status. The Sumerian sky god Anu shares his name with this sign. Young scribes learned this sign early because of its fundamental importance.',
		prerequisite: 'wedge-winkelhaken',
		steps: [
			{
				type: 'demo',
				instruction: 'Watch how AN is constructed: a star-like pattern of wedges radiating from a central point.',
				targetSign: 'U+1202D'
			},
			{
				type: 'practice',
				instruction: 'Draw the sign AN. Start with the central vertical, then add the oblique strokes.',
				targetSign: 'U+1202D',
				hints: ['Begin with the vertical wedge', 'Add diagonals symmetrically']
			},
			{
				type: 'practice',
				instruction: 'Draw AN one more time. Remember: it means "sky" or "heaven"!',
				targetSign: 'U+1202D'
			}
		],
		signs: ['U+1202D'],
		difficulty: 'beginner'
	},
	{
		id: 'sign-ba',
		title: 'BA — To Give',
		description: 'Write a simple but essential syllabic sign.',
		historicalContext: 'BA is primarily used as a syllabic sign in Sumerian texts. It appears in countless words and grammatical constructions. Its simple form—just a few wedges—made it one of the first signs young scribes could master with confidence.',
		prerequisite: 'sign-an',
		steps: [
			{
				type: 'demo',
				instruction: 'Watch how BA is formed: a combination of horizontal and vertical wedges.',
				targetSign: 'U+12040'
			},
			{
				type: 'practice',
				instruction: 'Draw the sign BA.',
				targetSign: 'U+12040'
			},
			{
				type: 'practice',
				instruction: 'Write BA three times, aiming for consistency.',
				targetSign: 'U+12040'
			}
		],
		signs: ['U+12040'],
		difficulty: 'beginner'
	},
	{
		id: 'sign-e',
		title: 'E — House and Temple',
		description: 'Learn a sign central to Mesopotamian civilization.',
		historicalContext: 'E₂ represents "house" or "temple"—the fundamental unit of Mesopotamian society. Temples were the centers of economic, religious, and political life. The sign\'s form suggests the ground plan of a building. Writing this sign connected young scribes to the institutions that employed them.',
		prerequisite: 'sign-ba',
		steps: [
			{
				type: 'demo',
				instruction: 'Watch how E₂ (house) is constructed with its architectural form.',
				targetSign: 'U+1208D'
			},
			{
				type: 'practice',
				instruction: 'Draw the sign E₂. Note how it suggests a building outline.',
				targetSign: 'U+1208D'
			}
		],
		signs: ['U+1208D'],
		difficulty: 'beginner'
	},

	// === LEVEL 3: MEDIUM SIGNS (4-6 wedges) ===
	{
		id: 'sign-lugal',
		title: 'LUGAL — King',
		description: 'Master the sign for royalty and rulership.',
		historicalContext: 'LUGAL means "king" in Sumerian (literally "big man"). This sign appeared constantly in royal inscriptions, administrative texts, and historical records. Every scribe needed to write it perfectly—a mistake in the king\'s title could have serious consequences!',
		prerequisite: 'sign-e',
		steps: [
			{
				type: 'demo',
				instruction: 'Watch how LUGAL is formed. It combines the signs for "big" and "man."',
				targetSign: 'U+12217'
			},
			{
				type: 'practice',
				instruction: 'Draw the sign LUGAL. Take care with the proportions.',
				targetSign: 'U+12217',
				hints: ['This is a compound sign', 'Both parts should be clearly readable']
			},
			{
				type: 'practice',
				instruction: 'Draw LUGAL once more. You\'re writing "king" like ancient scribes did!',
				targetSign: 'U+12217'
			}
		],
		signs: ['U+12217'],
		difficulty: 'intermediate'
	},
	{
		id: 'sign-dingir',
		title: 'DINGIR — God',
		description: 'Write the determinative for divine beings.',
		historicalContext: 'DINGIR is both a word meaning "god" and a determinative placed before divine names. When you see this sign before a name (like ᵈInanna or ᵈMarduk), it tells you that name belongs to a deity. The sign\'s star-like form evokes the celestial realm of the gods.',
		prerequisite: 'sign-lugal',
		steps: [
			{
				type: 'demo',
				instruction: 'DINGIR uses the same form as AN but in a different context. Watch its construction.',
				targetSign: 'U+1202D'
			},
			{
				type: 'practice',
				instruction: 'Draw DINGIR. It should look identical to AN.',
				targetSign: 'U+1202D'
			},
			{
				type: 'practice',
				instruction: 'Write ᵈINANNA — DINGIR followed by the name of the goddess.',
				hints: ['The superscript d indicates DINGIR', 'It marks the following word as a god\'s name']
			}
		],
		signs: ['U+1202D'],
		difficulty: 'intermediate'
	},
	{
		id: 'sign-ki',
		title: 'KI — Earth and Place',
		description: 'Learn the sign that grounds Mesopotamian geography.',
		historicalContext: 'KI means "earth," "place," or "land." It appears as a determinative after place names (like Babylon^ki or Ur^ki) to indicate geographic locations. The sign also represents the earth goddess Ki, consort of the sky god An. Together, AN and KI represent the cosmic pair of heaven and earth.',
		prerequisite: 'sign-dingir',
		steps: [
			{
				type: 'demo',
				instruction: 'Watch how KI is formed with its distinctive composition.',
				targetSign: 'U+12197'
			},
			{
				type: 'practice',
				instruction: 'Draw the sign KI.',
				targetSign: 'U+12197'
			},
			{
				type: 'practice',
				instruction: 'Write AN-KI (heaven-earth), the Sumerian word for "universe."'
			}
		],
		signs: ['U+12197'],
		difficulty: 'intermediate'
	},

	// === LEVEL 4: COMPLEX SIGNS (7+ wedges) ===
	{
		id: 'sign-shar',
		title: 'SHAR — Garden and Universe',
		description: 'Tackle a complex sign with many wedges.',
		historicalContext: 'SHAR can mean "garden," "totality," or the number 3,600. In Akkadian texts, it appears in the royal title "sharru" (king). The complexity of this sign—with its many carefully placed wedges—demonstrates the precision required of advanced scribes.',
		prerequisite: 'sign-ki',
		steps: [
			{
				type: 'demo',
				instruction: 'Watch how SHAR is carefully constructed wedge by wedge.',
				targetSign: 'U+122AC'
			},
			{
				type: 'practice',
				instruction: 'Draw SHAR. Plan your stroke order before beginning.',
				targetSign: 'U+122AC',
				hints: ['Count your wedges as you go', 'Maintain consistent spacing']
			}
		],
		signs: ['U+122AC'],
		difficulty: 'advanced'
	},
	{
		id: 'sign-ud',
		title: 'UD — Sun and Day',
		description: 'Master the radiant sign for solar concepts.',
		historicalContext: 'UD represents the sun, daylight, and the concept of "day" in time-keeping. The sun god Shamash (Utu in Sumerian) was one of the most important deities, associated with justice and truth. This sign\'s rays suggest the life-giving light of the Mesopotamian sun.',
		prerequisite: 'sign-shar',
		steps: [
			{
				type: 'demo',
				instruction: 'Watch how UD captures the radiating quality of sunlight.',
				targetSign: 'U+12312'
			},
			{
				type: 'practice',
				instruction: 'Draw UD with its distinctive wedge pattern.',
				targetSign: 'U+12312'
			},
			{
				type: 'practice',
				instruction: 'Draw UD one final time. You\'re drawing the sun itself!',
				targetSign: 'U+12312'
			}
		],
		signs: ['U+12312'],
		difficulty: 'advanced'
	}
];

/**
 * Get a lesson by ID
 */
export function getLessonById(id: string): Lesson | undefined {
	return LESSONS.find(l => l.id === id);
}

/**
 * Get lessons by difficulty
 */
export function getLessonsByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): Lesson[] {
	return LESSONS.filter(l => l.difficulty === difficulty);
}

/**
 * Get the next lesson in sequence
 */
export function getNextLesson(currentId: string): Lesson | undefined {
	const index = LESSONS.findIndex(l => l.id === currentId);
	if (index === -1 || index === LESSONS.length - 1) return undefined;
	return LESSONS[index + 1];
}

/**
 * Check if a lesson's prerequisites are met
 */
export function canStartLesson(lessonId: string, completedLessons: Set<string>): boolean {
	const lesson = getLessonById(lessonId);
	if (!lesson) return false;
	if (!lesson.prerequisite) return true;
	return completedLessons.has(lesson.prerequisite);
}

/**
 * Get total lesson count
 */
export function getTotalLessonCount(): number {
	return LESSONS.length;
}
