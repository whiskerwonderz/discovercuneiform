<script lang="ts">
	import { scribeStore } from '$lib/stores/scribe.svelte';
	import { LESSONS } from '$lib/data/lessons';
</script>

<div class="max-w-4xl mx-auto px-4 py-6 sm:py-8">
	<header class="mb-6 sm:mb-8">
		<h1 class="font-display text-2xl sm:text-3xl font-medium text-clay-900 mb-1 sm:mb-2">
			Scribe School
		</h1>
		<p class="font-body text-sm sm:text-base text-clay-600">
			Learn to write cuneiform like an ancient scribe. Master wedge strokes, build signs, and practice recognition.
		</p>
	</header>

	<!-- Progress Overview -->
	<div class="bg-clay-100 rounded-xl border border-clay-200 p-4 sm:p-6 mb-6 sm:mb-8">
		<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
			<h2 class="font-display text-lg sm:text-xl font-medium text-clay-800">Your Progress</h2>
			<span class="text-xs sm:text-sm text-clay-600">
				{scribeStore.completedLessons.size} / {LESSONS.length} lessons completed
			</span>
		</div>
		<div class="h-2.5 sm:h-3 bg-clay-200 rounded-full overflow-hidden">
			<div
				class="h-full bg-gradient-to-r from-clay-500 to-fired-500 rounded-full transition-all duration-500"
				style="width: {scribeStore.overallProgress}%"
			></div>
		</div>
	</div>

	<!-- Lessons Grid -->
	<div class="space-y-3 sm:space-y-4">
		<!-- Beginner Lessons -->
		<section>
			<h2 class="font-display text-lg sm:text-xl font-medium text-clay-800 mb-3 sm:mb-4">
				Level 1: Wedge Fundamentals
			</h2>
			<div class="grid sm:grid-cols-2 gap-3 sm:gap-4">
				{#each LESSONS.filter(l => l.difficulty === 'beginner') as lesson}
					{@const isCompleted = scribeStore.completedLessons.has(lesson.id)}
					{@const canStart = !lesson.prerequisite || scribeStore.completedLessons.has(lesson.prerequisite)}

					<a
						href="/learn/{lesson.id}"
						class="group p-3 sm:p-4 bg-clay-100 rounded-lg border transition-all
							{isCompleted ? 'border-lapis-400 bg-lapis-50' : canStart ? 'border-clay-200 hover:border-lapis-400 hover:shadow-clay active:scale-[0.98]' : 'border-clay-200 opacity-60 cursor-not-allowed'}"
						class:pointer-events-none={!canStart}
					>
						<div class="flex items-start justify-between mb-1.5 sm:mb-2">
							<h3 class="font-display text-base sm:text-lg font-medium text-clay-800 group-hover:text-lapis-600">
								{lesson.title}
							</h3>
							{#if isCompleted}
								<span class="text-lapis-500">✓</span>
							{:else if !canStart}
								<span class="text-xs text-clay-500">🔒</span>
							{/if}
						</div>
						<p class="font-body text-xs sm:text-sm text-clay-600 mb-1.5 sm:mb-2">
							{lesson.description}
						</p>
						<div class="flex items-center gap-2 text-xs text-clay-500">
							<span>{lesson.steps.length} steps</span>
							{#if lesson.signs.length > 0}
								<span>·</span>
								<span>{lesson.signs.length} signs</span>
							{/if}
						</div>
					</a>
				{/each}
			</div>
		</section>

		<!-- Intermediate Lessons -->
		<section class="mt-6 sm:mt-8">
			<h2 class="font-display text-lg sm:text-xl font-medium text-clay-800 mb-3 sm:mb-4">
				Level 2: Simple Signs
			</h2>
			<div class="grid sm:grid-cols-2 gap-3 sm:gap-4">
				{#each LESSONS.filter(l => l.difficulty === 'intermediate') as lesson}
					{@const isCompleted = scribeStore.completedLessons.has(lesson.id)}
					{@const canStart = !lesson.prerequisite || scribeStore.completedLessons.has(lesson.prerequisite)}

					<a
						href="/learn/{lesson.id}"
						class="group p-3 sm:p-4 bg-clay-100 rounded-lg border transition-all
							{isCompleted ? 'border-lapis-400 bg-lapis-50' : canStart ? 'border-clay-200 hover:border-lapis-400 hover:shadow-clay active:scale-[0.98]' : 'border-clay-200 opacity-60 cursor-not-allowed'}"
						class:pointer-events-none={!canStart}
					>
						<div class="flex items-start justify-between mb-1.5 sm:mb-2">
							<h3 class="font-display text-base sm:text-lg font-medium text-clay-800 group-hover:text-lapis-600">
								{lesson.title}
							</h3>
							{#if isCompleted}
								<span class="text-lapis-500">✓</span>
							{:else if !canStart}
								<span class="text-xs text-clay-500">🔒</span>
							{/if}
						</div>
						<p class="font-body text-xs sm:text-sm text-clay-600 mb-1.5 sm:mb-2">
							{lesson.description}
						</p>
						<div class="flex items-center gap-2 text-xs text-clay-500">
							<span>{lesson.steps.length} steps</span>
							{#if lesson.signs.length > 0}
								<span>·</span>
								<span>{lesson.signs.length} signs</span>
							{/if}
						</div>
					</a>
				{/each}
			</div>
		</section>

		<!-- Advanced Lessons -->
		<section class="mt-6 sm:mt-8">
			<h2 class="font-display text-lg sm:text-xl font-medium text-clay-800 mb-3 sm:mb-4">
				Level 3: Complex Signs
			</h2>
			<div class="grid sm:grid-cols-2 gap-3 sm:gap-4">
				{#each LESSONS.filter(l => l.difficulty === 'advanced') as lesson}
					{@const isCompleted = scribeStore.completedLessons.has(lesson.id)}
					{@const canStart = !lesson.prerequisite || scribeStore.completedLessons.has(lesson.prerequisite)}

					<a
						href="/learn/{lesson.id}"
						class="group p-3 sm:p-4 bg-clay-100 rounded-lg border transition-all
							{isCompleted ? 'border-lapis-400 bg-lapis-50' : canStart ? 'border-clay-200 hover:border-lapis-400 hover:shadow-clay active:scale-[0.98]' : 'border-clay-200 opacity-60 cursor-not-allowed'}"
						class:pointer-events-none={!canStart}
					>
						<div class="flex items-start justify-between mb-1.5 sm:mb-2">
							<h3 class="font-display text-base sm:text-lg font-medium text-clay-800 group-hover:text-lapis-600">
								{lesson.title}
							</h3>
							{#if isCompleted}
								<span class="text-lapis-500">✓</span>
							{:else if !canStart}
								<span class="text-xs text-clay-500">🔒</span>
							{/if}
						</div>
						<p class="font-body text-xs sm:text-sm text-clay-600 mb-1.5 sm:mb-2">
							{lesson.description}
						</p>
						<div class="flex items-center gap-2 text-xs text-clay-500">
							<span>{lesson.steps.length} steps</span>
							{#if lesson.signs.length > 0}
								<span>·</span>
								<span>{lesson.signs.length} signs</span>
							{/if}
						</div>
					</a>
				{/each}
			</div>
		</section>
	</div>

	<!-- Historical Context -->
	<section class="mt-8 sm:mt-12 bg-clay-100 rounded-xl border border-clay-200 p-4 sm:p-6">
		<h2 class="font-display text-lg sm:text-xl font-medium text-clay-800 mb-3 sm:mb-4">
			The Edubba: Ancient Tablet House
		</h2>
		<p class="font-body text-sm sm:text-base text-clay-600 mb-3 sm:mb-4">
			In ancient Mesopotamia, scribes were trained in schools called "edubba" (𒂍𒁾𒁀), meaning "tablet house."
			Students began learning around age 5-7, spending years copying sign lists and literary texts before
			graduating to work in temples, palaces, or administrative offices.
		</p>
		<p class="font-body text-sm sm:text-base text-clay-600">
			The curriculum followed a strict progression: first individual wedge strokes, then simple signs,
			and finally complex compositions. You're following in the footsteps of scribes who lived 4,000 years ago.
		</p>
	</section>
</div>
