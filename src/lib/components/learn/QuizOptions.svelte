<script lang="ts">
	import type { CuneiformSign } from '$lib/types';
	import { SIGNS } from '$lib/data/signs';

	interface Props {
		correctSign?: CuneiformSign | null;
		question: string;
		onAnswer: (correct: boolean) => void;
	}

	let { correctSign = null, question, onAnswer }: Props = $props();

	let options = $state<CuneiformSign[]>([]);
	let selectedIndex = $state<number | null>(null);
	let answered = $state(false);
	let correctIndex = $state(0);

	// Generate options when correctSign changes
	$effect(() => {
		if (correctSign) {
			generateOptions();
		}
	});

	function generateOptions() {
		if (!correctSign) return;

		// Get distractor signs (different from correct answer)
		const distractors = SIGNS
			.filter(s => s.codepoint !== correctSign.codepoint)
			.sort(() => Math.random() - 0.5)
			.slice(0, 3);

		// Combine and shuffle
		const allOptions = [correctSign, ...distractors];
		options = allOptions.sort(() => Math.random() - 0.5);

		// Find where the correct answer ended up
		correctIndex = options.findIndex(o => o.codepoint === correctSign.codepoint);

		// Reset state
		selectedIndex = null;
		answered = false;
	}

	function selectOption(index: number) {
		if (answered) return;

		selectedIndex = index;
		answered = true;

		const isCorrect = index === correctIndex;
		onAnswer(isCorrect);
	}

	function getOptionClass(index: number): string {
		const base = 'p-6 rounded-xl border-2 transition-all cursor-pointer';

		if (!answered) {
			if (selectedIndex === index) {
				return `${base} border-lapis-500 bg-lapis-50`;
			}
			return `${base} border-clay-200 bg-clay-50 hover:border-lapis-400 hover:bg-clay-100`;
		}

		// After answering
		if (index === correctIndex) {
			return `${base} border-green-500 bg-green-50`;
		}
		if (selectedIndex === index && index !== correctIndex) {
			return `${base} border-fired-500 bg-fired-50`;
		}
		return `${base} border-clay-200 bg-clay-50 opacity-50`;
	}
</script>

<div class="bg-clay-50 rounded-xl p-6 border border-clay-200">
	<!-- Quiz Badge -->
	<div class="flex items-center gap-2 mb-4">
		<span class="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide bg-fired-100 text-fired-700">
			Quiz
		</span>
	</div>

	<!-- Question -->
	<p class="font-body text-lg text-clay-800 mb-6">
		{question}
	</p>

	<!-- Options Grid -->
	{#if options.length > 0}
		<div class="grid grid-cols-2 gap-4">
			{#each options as option, index}
				<button
					onclick={() => selectOption(index)}
					disabled={answered}
					class={getOptionClass(index)}
				>
					<div class="text-center">
						<span class="cuneiform text-4xl block mb-2" aria-label={option.name}>
							{option.character}
						</span>
						<span class="text-sm text-clay-600">{option.name}</span>
					</div>

					<!-- Feedback icons -->
					{#if answered}
						{#if index === correctIndex}
							<div class="absolute top-2 right-2 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
								✓
							</div>
						{:else if selectedIndex === index}
							<div class="absolute top-2 right-2 w-6 h-6 bg-fired-500 text-white rounded-full flex items-center justify-center text-sm">
								✗
							</div>
						{/if}
					{/if}
				</button>
			{/each}
		</div>
	{:else}
		<!-- Fallback for non-sign quizzes -->
		<div class="grid grid-cols-2 gap-4">
			<button
				onclick={() => selectOption(0)}
				disabled={answered}
				class="p-4 rounded-lg border border-clay-200 bg-clay-50 hover:border-lapis-400 text-clay-700"
			>
				Option A
			</button>
			<button
				onclick={() => selectOption(1)}
				disabled={answered}
				class="p-4 rounded-lg border border-clay-200 bg-clay-50 hover:border-lapis-400 text-clay-700"
			>
				Option B
			</button>
		</div>
	{/if}

	<!-- Feedback Message -->
	{#if answered}
		<div class="mt-6 p-4 rounded-lg {selectedIndex === correctIndex ? 'bg-green-50 border border-green-200' : 'bg-fired-50 border border-fired-200'}">
			{#if selectedIndex === correctIndex}
				<p class="text-green-700 font-medium">
					Correct! {correctSign?.name} means "{correctSign?.meanings[0] || 'this sign'}".
				</p>
			{:else}
				<p class="text-fired-700 font-medium">
					Not quite. The correct answer is {correctSign?.name} ({correctSign?.character}).
				</p>
			{/if}
		</div>
	{/if}
</div>
