<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { getLessonById, getNextLesson } from '$lib/data/lessons';
	import { getSignByCodepoint } from '$lib/data/signs';
	import { scribeStore } from '$lib/stores/scribe.svelte';
	import WedgeCanvas from '$lib/components/learn/WedgeCanvas.svelte';

	let lessonId = $derived($page.params.lesson ?? '');
	let lesson = $derived(lessonId ? getLessonById(lessonId) : undefined);
	let currentStep = $derived(lesson?.steps[scribeStore.currentStepIndex]);
	let targetSign = $derived(currentStep?.targetSign ? getSignByCodepoint(currentStep.targetSign) : null);
	let isLastStep = $derived(lesson ? scribeStore.currentStepIndex === lesson.steps.length - 1 : false);

	// Determine wedge type from lesson ID for wedge fundamental lessons
	let wedgeType = $derived.by(() => {
		if (!lesson) return null;
		if (lesson.id === 'wedge-horizontal') return 'horizontal' as const;
		if (lesson.id === 'wedge-vertical') return 'vertical' as const;
		if (lesson.id === 'wedge-oblique') return 'oblique' as const;
		if (lesson.id === 'wedge-winkelhaken') return 'winkelhaken' as const;
		return null;
	});

	const wedgeInfo: Record<string, { symbol: string; name: string; visual: string }> = {
		horizontal: { symbol: '─', name: 'Horizontal Wedge', visual: '◀━━━' },
		vertical: { symbol: '│', name: 'Vertical Wedge', visual: '▲' },
		oblique: { symbol: '╱', name: 'Oblique Wedge', visual: '╲' },
		winkelhaken: { symbol: '∠', name: 'Winkelhaken', visual: '∠' }
	};

	// Track step completion
	let hasDrawn = $state(false);
	let showSuccess = $state(false);
	let showLessonComplete = $state(false);

	// Canvas reference
	let canvas = $state<WedgeCanvas | null>(null);

	// Encouraging messages
	const successMessages = [
		'Great work!',
		'Well done!',
		'Perfect!',
		'Excellent!',
		'You got it!',
		'Nice stroke!',
		'Beautiful!',
		'Like an ancient scribe!'
	];

	let currentSuccessMessage = $state(successMessages[0]);

	// Reset step state when step changes
	$effect(() => {
		if (currentStep) {
			hasDrawn = false;
			showSuccess = false;
		}
	});

	// Initialize lesson on mount
	$effect(() => {
		if (lesson && (!scribeStore.currentLesson || scribeStore.currentLesson.id !== lesson.id)) {
			scribeStore.startLesson(lesson.id);
		}
	});

	function handleStrokeComplete(strokes: Array<{ points: Array<{ x: number; y: number }> }>) {
		const hadDrawn = hasDrawn;
		hasDrawn = strokes.length > 0;

		// Show success feedback on first stroke
		if (hasDrawn && !hadDrawn) {
			currentSuccessMessage = successMessages[Math.floor(Math.random() * successMessages.length)];
			showSuccess = true;
			setTimeout(() => {
				showSuccess = false;
			}, 1500);
		}
	}

	function canProceed(): boolean {
		if (!currentStep) return false;
		// All steps can proceed - learning should be encouraging, not blocking
		return true;
	}

	function handleNext() {
		if (!lesson || !canProceed()) return;

		if (scribeStore.currentStepIndex < lesson.steps.length - 1) {
			scribeStore.nextStep();
			hasDrawn = false;
			showSuccess = false;
		} else {
			// Show lesson complete celebration
			showLessonComplete = true;
			scribeStore.completeLesson();
		}
	}

	function handleContinueAfterComplete() {
		if (!lesson) return;
		const next = getNextLesson(lesson.id);
		if (next) {
			showLessonComplete = false;
			goto(`/learn/${next.id}`);
		} else {
			goto('/learn');
		}
	}

	function handlePrevious() {
		hasDrawn = false;
		showSuccess = false;
		scribeStore.previousStep();
	}

	function handleExit() {
		scribeStore.exitLesson();
		goto('/learn');
	}
</script>

{#if lesson}
	<div class="max-w-4xl mx-auto px-4 py-6 sm:py-8">
		<!-- Lesson Complete Celebration Overlay -->
		{#if showLessonComplete}
			<div class="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 sm:p-4">
				<div class="bg-white rounded-t-2xl sm:rounded-2xl p-6 sm:p-8 max-w-md w-full text-center shadow-2xl animate-bounce-in">
					<!-- Success Icon SVG -->
					<div class="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-lapis-100 rounded-full flex items-center justify-center">
						<svg class="w-7 h-7 sm:w-8 sm:h-8 text-lapis-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
					</div>
					<h2 class="font-display text-xl sm:text-2xl font-medium text-clay-900 mb-2">
						Lesson Complete!
					</h2>
					<p class="text-sm sm:text-base text-clay-600 mb-5 sm:mb-6">
						You've mastered <strong>{lesson.title}</strong>
					</p>

					{#if getNextLesson(lesson.id)}
						<button
							onclick={handleContinueAfterComplete}
							class="w-full px-5 sm:px-6 py-3 bg-lapis-500 text-white rounded-lg hover:bg-lapis-600 font-medium transition-colors mb-3 text-sm sm:text-base"
						>
							Continue to Next Lesson →
						</button>
					{/if}

					<button
						onclick={() => goto('/learn')}
						class="w-full px-5 sm:px-6 py-3 text-clay-600 hover:text-clay-800 transition-colors text-sm sm:text-base"
					>
						Back to All Lessons
					</button>
				</div>
			</div>
		{/if}

		<!-- Header -->
		<header class="mb-6">
			<div class="flex items-center justify-between mb-4">
				<button
					onclick={handleExit}
					class="text-sm text-clay-600 hover:text-clay-800 flex items-center gap-1"
				>
					<span>←</span> Exit
				</button>
				<span class="text-sm text-clay-500">
					{scribeStore.currentStepIndex + 1} / {lesson.steps.length}
				</span>
			</div>

			<!-- Progress Bar -->
			<div class="h-2 bg-clay-200 rounded-full overflow-hidden">
				<div
					class="h-full bg-lapis-500 rounded-full transition-all duration-300"
					style="width: {((scribeStore.currentStepIndex + 1) / lesson.steps.length) * 100}%"
				></div>
			</div>
		</header>

		{#if currentStep}
			<!-- Step Content -->
			<div class="mb-4 sm:mb-6">
				<!-- Demo Step: Learn by watching -->
				{#if currentStep.type === 'demo'}
					<div class="bg-clay-50 rounded-xl p-4 sm:p-6 border border-clay-200">
						<div class="flex items-center gap-2 mb-3 sm:mb-4">
							<span class="px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide bg-lapis-100 text-lapis-700">
								Learn
							</span>
						</div>

						<p class="font-body text-base sm:text-lg text-clay-800 mb-4 sm:mb-6">
							{currentStep.instruction}
						</p>

						<!-- Wedge Type Demo -->
						{#if wedgeType && wedgeInfo[wedgeType]}
							<div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 bg-clay-100 rounded-lg p-4 sm:p-6">
								<div class="flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-clay-200 rounded-lg flex items-center justify-center">
									<span class="text-4xl sm:text-5xl md:text-6xl font-mono text-clay-700">{wedgeInfo[wedgeType].symbol}</span>
								</div>
								<div class="flex-1 text-center sm:text-left">
									<h3 class="font-display text-xl sm:text-2xl font-medium text-clay-800 mb-1 sm:mb-2">
										{wedgeInfo[wedgeType].name}
									</h3>
									<p class="text-sm sm:text-base text-clay-600">
										{#if wedgeType === 'horizontal'}
											Head on the left, tail pointing right. The most common stroke.
										{:else if wedgeType === 'vertical'}
											Head at the top, tail pointing down.
										{:else if wedgeType === 'oblique'}
											Diagonal strokes at various angles.
										{:else if wedgeType === 'winkelhaken'}
											Corner impression, like an "L" or hook shape.
										{/if}
									</p>
								</div>
							</div>
						{/if}

						<!-- Sign Demo -->
						{#if targetSign}
							<div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 bg-clay-100 rounded-lg p-4 sm:p-6">
								<div class="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-clay-200 rounded-lg flex items-center justify-center">
									<span class="cuneiform text-5xl sm:text-6xl md:text-7xl text-clay-800">{targetSign.character}</span>
								</div>
								<div class="flex-1 text-center sm:text-left">
									<h3 class="font-display text-xl sm:text-2xl font-medium text-clay-800 mb-1">
										{targetSign.name}
									</h3>
									{#if targetSign.meanings.length > 0}
										<p class="text-sm sm:text-base text-clay-600 mb-1 sm:mb-2">
											Meaning: {targetSign.meanings.join(', ')}
										</p>
									{/if}
									{#if targetSign.readings.length > 0}
										<p class="text-xs sm:text-sm text-clay-500">
											Readings: {targetSign.readings.map(r => r.value).join(', ')}
										</p>
									{/if}
								</div>
							</div>
						{/if}
					</div>

				<!-- Practice Step: Copy and succeed -->
				{:else if currentStep.type === 'practice' || currentStep.type === 'quiz'}
					<div class="bg-clay-50 rounded-xl p-4 sm:p-6 border border-clay-200 relative overflow-hidden">
						<!-- Success Toast -->
						{#if showSuccess}
							<div class="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 z-10 animate-bounce-in">
								<div class="bg-green-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium shadow-lg flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
									<span>✓</span> {currentSuccessMessage}
								</div>
							</div>
						{/if}

						<div class="flex items-center gap-2 mb-3 sm:mb-4">
							<span class="px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide bg-clay-200 text-clay-700">
								Your Turn
							</span>
						</div>

						<p class="font-body text-base sm:text-lg text-clay-800 mb-4 sm:mb-6">
							{currentStep.instruction}
						</p>

						<!-- Target to Copy -->
						{#if targetSign}
							<div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mb-4 sm:mb-6 p-3 sm:p-4 bg-lapis-50 rounded-lg border-2 border-dashed border-lapis-200">
								<span class="text-xs sm:text-sm text-lapis-600 font-medium">Copy this:</span>
								<span class="cuneiform text-4xl sm:text-5xl text-clay-800">{targetSign.character}</span>
								<span class="text-sm sm:text-base text-clay-600">{targetSign.name}</span>
							</div>
						{:else if wedgeType && wedgeInfo[wedgeType]}
							<!-- Visual hint for wedge practice -->
							<div class="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 p-2.5 sm:p-3 bg-clay-100 rounded-lg text-xs sm:text-sm text-clay-600">
								<span>Hint: Use strokes like</span>
								<span class="text-xl sm:text-2xl font-mono text-clay-700">{wedgeInfo[wedgeType].symbol}</span>
								<span>({wedgeInfo[wedgeType].name})</span>
							</div>
						{/if}

						<!-- Drawing Canvas -->
						<div class="flex justify-center overflow-hidden">
							<WedgeCanvas
								bind:this={canvas}
								width={400}
								height={280}
								showGrid={true}
								onStrokeComplete={handleStrokeComplete}
							/>
						</div>

						<!-- Hints (collapsible) -->
						{#if currentStep.hints && currentStep.hints.length > 0}
							<details class="mt-3 sm:mt-4">
								<summary class="text-xs sm:text-sm text-lapis-500 cursor-pointer hover:text-lapis-600">
									Need a hint?
								</summary>
								<ul class="mt-2 pl-4 list-disc text-xs sm:text-sm text-clay-600">
									{#each currentStep.hints as hint}
										<li>{hint}</li>
									{/each}
								</ul>
							</details>
						{/if}

						<!-- Simple feedback -->
						{#if hasDrawn}
							<div class="mt-3 sm:mt-4 text-center text-green-600 font-medium text-sm sm:text-base">
								✓ Ready to continue
							</div>
						{/if}
					</div>
				{/if}
			</div>

			<!-- Navigation -->
			<div class="flex items-center justify-between">
				<button
					onclick={handlePrevious}
					disabled={scribeStore.currentStepIndex === 0}
					class="px-5 py-2 text-clay-600 hover:text-clay-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
				>
					← Back
				</button>

				<button
					onclick={handleNext}
					disabled={!canProceed()}
					class="px-6 py-3 bg-lapis-500 text-white rounded-lg hover:bg-lapis-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium"
				>
					{#if isLastStep}
						Complete ✓
					{:else}
						Continue →
					{/if}
				</button>
			</div>
		{/if}

		<!-- Historical Context (collapsed by default for cleaner flow) -->
		<details class="mt-10">
			<summary class="cursor-pointer text-clay-500 hover:text-clay-700 text-sm">
				Historical Context
			</summary>
			<div class="mt-3 bg-clay-50 rounded-xl p-6 border border-clay-200">
				<p class="font-body text-clay-600 italic leading-relaxed">
					{lesson.historicalContext}
				</p>
			</div>
		</details>
	</div>
{:else}
	<div class="max-w-4xl mx-auto px-4 py-16 text-center">
		<div class="cuneiform text-4xl text-clay-300 mb-4">𒁹</div>
		<p class="text-clay-600 mb-4">Lesson not found.</p>
		<a href="/learn" class="text-lapis-500 hover:text-lapis-600 hover:underline">
			← Back to lessons
		</a>
	</div>
{/if}

<style>
	@keyframes bounce-in {
		0% {
			transform: scale(0.8);
			opacity: 0;
		}
		50% {
			transform: scale(1.05);
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	.animate-bounce-in {
		animation: bounce-in 0.3s ease-out;
	}
</style>
