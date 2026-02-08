<script lang="ts">
	import { getRandomPhrase } from '$lib/data/phrases';

	const examplePhrase = getRandomPhrase();
</script>

<div class="max-w-4xl mx-auto px-4 py-8 sm:py-12">
	<!-- Hero Section -->
	<section class="text-center mb-10 sm:mb-16">
		<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-clay-900 mb-3 sm:mb-4">
			Discover Cuneiform
		</h1>
		<p class="font-body text-base sm:text-lg md:text-xl text-clay-700 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
			Explore the world's oldest writing system. Identify cuneiform signs, learn to write like an ancient scribe, and create your own inscriptions.
		</p>

		<!-- Decorative cuneiform -->
		<div class="cuneiform-large text-clay-400 tracking-widest mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl">
			𒀀 𒀭 𒆠 𒈗 𒌓
		</div>
	</section>

	<!-- Mode Cards -->
	<section class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-16">
		<!-- Explore Mode -->
		<a
			href="/read"
			class="group p-4 sm:p-5 md:p-6 bg-clay-100 rounded-xl border border-clay-200 hover:border-lapis-400 hover:shadow-tablet active:scale-[0.98] transition-all press-effect"
		>
			<div class="cuneiform text-2xl sm:text-3xl text-clay-600 group-hover:text-lapis-500 mb-2 sm:mb-4">𒁹</div>
			<h2 class="font-display text-lg sm:text-xl md:text-2xl font-medium text-clay-800 mb-1 sm:mb-2">Explore</h2>
			<p class="font-body text-xs sm:text-sm text-clay-600 hidden sm:block">
				Discover famous tablets like Gilgamesh and Hammurabi with side-by-side translations.
			</p>
		</a>

		<!-- Learn Mode -->
		<a
			href="/learn"
			class="group p-4 sm:p-5 md:p-6 bg-clay-100 rounded-xl border border-clay-200 hover:border-lapis-400 hover:shadow-tablet active:scale-[0.98] transition-all press-effect"
		>
			<div class="cuneiform text-2xl sm:text-3xl text-clay-600 group-hover:text-lapis-500 mb-2 sm:mb-4">𒁾</div>
			<h2 class="font-display text-lg sm:text-xl md:text-2xl font-medium text-clay-800 mb-1 sm:mb-2">Learn</h2>
			<p class="font-body text-xs sm:text-sm text-clay-600 hidden sm:block">
				Train as an ancient scribe. Master wedge strokes and build signs.
			</p>
		</a>

		<!-- Create Mode -->
		<a
			href="/create"
			class="group p-4 sm:p-5 md:p-6 bg-clay-100 rounded-xl border border-clay-200 hover:border-lapis-400 hover:shadow-tablet active:scale-[0.98] transition-all press-effect"
		>
			<div class="cuneiform text-2xl sm:text-3xl text-clay-600 group-hover:text-lapis-500 mb-2 sm:mb-4">𒋙</div>
			<h2 class="font-display text-lg sm:text-xl md:text-2xl font-medium text-clay-800 mb-1 sm:mb-2">Create</h2>
			<p class="font-body text-xs sm:text-sm text-clay-600 hidden sm:block">
				Write poetry and prose, then render it in cuneiform script.
			</p>
		</a>

		<!-- Discover Mode -->
		<a
			href="/discover"
			class="group p-4 sm:p-5 md:p-6 bg-clay-100 rounded-xl border border-clay-200 hover:border-lapis-400 hover:shadow-tablet active:scale-[0.98] transition-all press-effect"
		>
			<div class="cuneiform text-2xl sm:text-3xl text-clay-600 group-hover:text-lapis-500 mb-2 sm:mb-4">𒀭</div>
			<h2 class="font-display text-lg sm:text-xl md:text-2xl font-medium text-clay-800 mb-1 sm:mb-2">Discover</h2>
			<p class="font-body text-xs sm:text-sm text-clay-600 hidden sm:block">
				Find scholarly projects, digital libraries, and museum collections.
			</p>
		</a>
	</section>

	<!-- Example Phrase -->
	<section class="bg-clay-100 rounded-xl p-5 sm:p-6 md:p-8 border border-clay-200">
		<div class="text-center mb-4 sm:mb-6">
			<span class="text-xs sm:text-sm font-body text-clay-500 uppercase tracking-wider">From the Archives</span>
		</div>

		<div class="text-center mb-3 sm:mb-4">
			<div class="cuneiform-large text-clay-800 mb-2 text-xl sm:text-2xl md:text-3xl">
				{examplePhrase.cuneiform}
			</div>
			<div class="font-body italic text-sm sm:text-base text-clay-600 mb-1">
				{examplePhrase.transliteration}
			</div>
			<div class="font-display text-lg sm:text-xl text-clay-800">
				"{examplePhrase.translation}"
			</div>
		</div>

		<p class="text-center font-body text-xs sm:text-sm text-clay-500 max-w-xl mx-auto">
			{examplePhrase.context}
		</p>

		<p class="text-center font-body text-xs text-clay-400 mt-3 sm:mt-4">
			Source: {examplePhrase.source}
		</p>
	</section>

	<!-- About Section -->
	<section class="mt-10 sm:mt-16 text-center">
		<h2 class="font-display text-xl sm:text-2xl font-medium text-clay-800 mb-3 sm:mb-4">
			Gateway to Ancient Writing
		</h2>
		<p class="font-body text-sm sm:text-base text-clay-600 max-w-2xl mx-auto mb-4 sm:mb-6 px-2">
			Discover Cuneiform is an educational tool that makes cuneiform accessible to everyone. All sign data comes from verified academic sources including the ORACC Sign List. We link to scholarly resources for those who want to learn more.
		</p>
		<p class="font-body text-xs sm:text-sm text-clay-500 px-2">
			This is not a scholarly OCR tool or machine translation engine. It's a starting point for curious learners to explore one of humanity's oldest writing systems.
		</p>
	</section>
</div>
