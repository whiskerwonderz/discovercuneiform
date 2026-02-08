<script lang="ts">
	import { creatorStore } from '$lib/stores/creator.svelte';
	import { ATTRIBUTION_TEXT, RENDER_STYLE_CONFIGS } from '$lib/types/export';
	import type { RenderStyle } from '$lib/types';
	import { copyToClipboard } from '$lib/utils/export';

	const styles: { id: RenderStyle; name: string; description: string }[] = [
		{ id: 'clay-tablet', name: 'Clay Tablet', description: 'Earth-toned with emboss effect' },
		{ id: 'museum-label', name: 'Museum Label', description: 'Clean scholarly style' },
		{ id: 'artistic-print', name: 'Artistic Print', description: 'High-contrast for framing' },
		{ id: 'side-by-side', name: 'Side by Side', description: 'Original and cuneiform' }
	];

	const examples = [
		{ label: 'Love poem', text: 'The moon rises over the river\nMy heart calls to you\nAcross the silent night' },
		{ label: 'Your name', text: 'Enter your name here' },
		{ label: 'Wisdom', text: 'Time flows like water\nKnowledge grows like grain' },
		{ label: 'Nature', text: 'The sun and moon\nThe earth and sky\nAll things return' }
	];

	let copied = $state(false);

	async function handleCopy() {
		if (creatorStore.cuneiformOutput) {
			await copyToClipboard(creatorStore.cuneiformOutput);
			copied = true;
			setTimeout(() => copied = false, 2000);
		}
	}

	function loadExample(text: string) {
		creatorStore.setText(text);
	}
</script>

<div class="max-w-6xl mx-auto px-4 py-6 sm:py-8">
	<header class="mb-4 sm:mb-6">
		<h1 class="font-display text-2xl sm:text-3xl font-medium text-clay-900 mb-1 sm:mb-2">
			Verse in Clay
		</h1>
		<p class="font-body text-sm sm:text-base text-clay-600">
			Write poetry or prose and see it rendered in cuneiform script.
		</p>
	</header>

	<div class="grid lg:grid-cols-2 gap-4 sm:gap-6">
		<!-- Input Panel -->
		<div class="space-y-3 sm:space-y-4">
			<div class="bg-clay-100 rounded-xl border border-clay-200 overflow-hidden">
				<div class="p-3 sm:p-4 border-b border-clay-200">
					<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
						<h2 class="font-display text-base sm:text-lg font-medium text-clay-800">Your Text</h2>
						<div class="flex flex-wrap gap-1">
							{#each examples as example}
								<button
									onclick={() => loadExample(example.text)}
									class="px-2 py-1 text-xs bg-clay-200 hover:bg-clay-300 rounded transition-colors"
								>
									{example.label}
								</button>
							{/each}
						</div>
					</div>
				</div>
				<textarea
					bind:value={creatorStore.inputText}
					placeholder="Type words or sentences...

Examples that work well:
- Names: Anna, Marcus, Luna
- Simple phrases: The sun rises
- Poetry: Stars shine in the night sky

Cuneiform is syllabic (ka, mu, an) so normal
words work better than random letters."
					class="w-full h-40 sm:h-56 p-3 sm:p-4 bg-transparent font-body text-base text-clay-800 placeholder:text-clay-400 resize-none focus:outline-none border-none"
					style="text-decoration: none;"
				></textarea>
				<div class="p-2 sm:p-3 border-t border-clay-200 flex items-center justify-between text-xs sm:text-sm text-clay-500">
					<span>{creatorStore.wordCount} words · {creatorStore.charCount} characters</span>
					<button
						onclick={() => creatorStore.clearText()}
						class="text-clay-500 hover:text-fired-500 transition-colors"
					>
						Clear
					</button>
				</div>
			</div>

			<!-- How it works -->
			<details class="bg-clay-50 rounded-xl border border-clay-200 p-3 sm:p-4">
				<summary class="font-display text-xs sm:text-sm font-medium text-clay-700 cursor-pointer">
					How does this work?
				</summary>
				<div class="mt-2 sm:mt-3 text-xs sm:text-sm text-clay-600 space-y-2">
					<p>
						Cuneiform is a <strong>syllabic</strong> writing system. Each sign represents a syllable like
						"ka", "mu", "an", "ti", not individual letters.
					</p>
					<p>
						We break your text into syllables and find the closest cuneiform sign for each.
						For example: "Luna" → "lu" + "na" → 𒇻𒈾
					</p>
					<p class="text-clay-500">
						Some sounds (like "th", "x", "qu") don't exist in ancient Mesopotamian languages
						and will show as "?". This is expected!
					</p>
				</div>
			</details>

			<!-- Stats -->
			{#if creatorStore.inputText.trim()}
				<div class="bg-clay-100 rounded-xl border border-clay-200 p-3 sm:p-4">
					<h3 class="font-display text-xs sm:text-sm font-medium text-clay-700 mb-2 sm:mb-3">Mapping Results</h3>
					<div class="grid grid-cols-3 gap-2 sm:gap-4 text-center">
						<div>
							<div class="text-xl sm:text-2xl font-display text-clay-800">{creatorStore.stats.totalSyllables}</div>
							<div class="text-xs text-clay-500">Syllables</div>
						</div>
						<div>
							<div class="text-xl sm:text-2xl font-display text-lapis-600">{creatorStore.stats.mappedSyllables}</div>
							<div class="text-xs text-clay-500">Mapped</div>
						</div>
						<div>
							<div class="text-xl sm:text-2xl font-display {creatorStore.stats.unmappedSyllables > 0 ? 'text-fired-500' : 'text-clay-400'}">{creatorStore.stats.unmappedSyllables}</div>
							<div class="text-xs text-clay-500">Unknown</div>
						</div>
					</div>
					{#if creatorStore.stats.unmappedSyllables > 0}
						<p class="mt-2 sm:mt-3 text-xs text-clay-500 text-center">
							"?" marks syllables without cuneiform equivalents
						</p>
					{/if}
				</div>
			{/if}

			<!-- Style Selector -->
			<div class="bg-clay-100 rounded-xl border border-clay-200 p-3 sm:p-4">
				<h3 class="font-display text-xs sm:text-sm font-medium text-clay-700 mb-2 sm:mb-3">Render Style</h3>
				<div class="grid grid-cols-2 gap-1.5 sm:gap-2">
					{#each styles as style}
						<button
							onclick={() => creatorStore.setStyle(style.id)}
							class="p-2 sm:p-3 text-left rounded-lg border transition-all press-effect
								{creatorStore.renderStyle === style.id
									? 'border-lapis-400 bg-lapis-50'
									: 'border-clay-200 hover:border-clay-300'}"
						>
							<div class="font-medium text-xs sm:text-sm text-clay-800">{style.name}</div>
							<div class="text-xs text-clay-500 hidden sm:block">{style.description}</div>
						</button>
					{/each}
				</div>
			</div>
		</div>

		<!-- Preview Panel -->
		<div class="space-y-3 sm:space-y-4">
			<div class="bg-clay-100 rounded-xl border border-clay-200 overflow-hidden">
				<div class="p-3 sm:p-4 border-b border-clay-200 flex items-center justify-between">
					<h2 class="font-display text-base sm:text-lg font-medium text-clay-800">Cuneiform Preview</h2>
					<div class="flex items-center gap-2">
						<button
							onclick={handleCopy}
							disabled={!creatorStore.cuneiformOutput}
							class="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm bg-clay-200 hover:bg-clay-300 rounded transition-colors disabled:opacity-50"
						>
							{copied ? 'Copied!' : 'Copy'}
						</button>
					</div>
				</div>

				<!-- Render Preview -->
				<div
					class="min-h-36 sm:min-h-48 p-4 sm:p-6 {creatorStore.renderStyle === 'clay-tablet'
						? 'bg-gradient-to-br from-clay-300 via-clay-400 to-clay-500'
						: creatorStore.renderStyle === 'artistic-print'
						? 'bg-clay-900'
						: 'bg-clay-50'}"
				>
					{#if creatorStore.cuneiformOutput}
						<!-- Clay Tablet Style -->
						{#if creatorStore.renderStyle === 'clay-tablet'}
							<div
								class="cuneiform text-3xl sm:text-4xl md:text-5xl leading-relaxed tracking-wider break-words text-clay-900"
								style="text-shadow: 1px 1px 2px rgba(0,0,0,0.3), -1px -1px 1px rgba(255,255,255,0.1);"
							>
								{creatorStore.cuneiformOutput}
							</div>

						<!-- Museum Label Style -->
						{:else if creatorStore.renderStyle === 'museum-label'}
							<div class="border-l-4 border-lapis-400 pl-3 sm:pl-4">
								<div class="cuneiform text-2xl sm:text-3xl md:text-4xl leading-relaxed tracking-wider break-words text-clay-800 mb-3 sm:mb-4">
									{creatorStore.cuneiformOutput}
								</div>
								<div class="text-xs text-clay-400 uppercase tracking-widest mb-1 sm:mb-2">Transliteration</div>
								{#each creatorStore.renderedLines as line}
									<p class="font-body text-xs sm:text-sm italic text-clay-600">
										{line.original}
									</p>
								{/each}
							</div>

						<!-- Artistic Print Style -->
						{:else if creatorStore.renderStyle === 'artistic-print'}
							<div class="text-center py-2 sm:py-4">
								<div class="cuneiform text-4xl sm:text-5xl md:text-6xl leading-relaxed tracking-widest break-words text-clay-100">
									{creatorStore.cuneiformOutput}
								</div>
							</div>

						<!-- Side by Side Style -->
						{:else if creatorStore.renderStyle === 'side-by-side'}
							<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 sm:divide-x divide-clay-200">
								<div>
									<div class="text-xs text-clay-400 uppercase tracking-widest mb-1 sm:mb-2">Original</div>
									{#each creatorStore.renderedLines as line}
										<p class="font-body text-base sm:text-lg text-clay-800 leading-relaxed">
											{line.original}
										</p>
									{/each}
								</div>
								<div class="sm:pl-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-clay-200">
									<div class="text-xs text-clay-400 uppercase tracking-widest mb-1 sm:mb-2">Cuneiform</div>
									<div class="cuneiform text-2xl sm:text-3xl leading-relaxed tracking-wider break-words text-clay-800">
										{creatorStore.cuneiformOutput}
									</div>
								</div>
							</div>
						{/if}
					{:else}
						<div class="text-center py-6 sm:py-8">
							<div class="cuneiform text-3xl sm:text-4xl text-clay-300 mb-2">𒀭𒈗𒆠</div>
							<p class="text-clay-400 text-xs sm:text-sm">
								Type something to see it in cuneiform
							</p>
						</div>
					{/if}
				</div>
			</div>

			<!-- Syllable Breakdown -->
			{#if creatorStore.renderedLines.length > 0}
				<div class="bg-clay-100 rounded-xl border border-clay-200 p-3 sm:p-4">
					<h3 class="font-display text-xs sm:text-sm font-medium text-clay-700 mb-2 sm:mb-3">Syllable Breakdown</h3>
					<div class="space-y-2 max-h-32 sm:max-h-40 overflow-y-auto">
						{#each creatorStore.renderedLines as line}
							{#each line.words as word}
								<div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
									<span class="text-xs sm:text-sm text-clay-500 min-w-0 truncate max-w-20 sm:max-w-24" title={word.original}>{word.original}:</span>
									<div class="flex flex-wrap gap-1">
										{#each word.syllables as syl}
											<span
												class="inline-flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-0.5 rounded text-xs sm:text-sm
													{syl.unmapped ? 'bg-fired-100 text-fired-700' : 'bg-clay-200 text-clay-700'}"
												title="{syl.syllable} → {syl.sign}"
											>
												<span class="text-xs text-clay-400">{syl.syllable}</span>
												<span class="cuneiform">{syl.sign}</span>
											</span>
										{/each}
									</div>
								</div>
							{/each}
						{/each}
					</div>
				</div>
			{/if}

			<!-- Disclaimer -->
			<div class="bg-fired-50 rounded-xl border border-fired-200 p-3 sm:p-4">
				<p class="text-xs text-fired-700">
					<strong>Note:</strong> The Create feature uses phonetic approximation to map modern sounds to cuneiform sign values. It produces real, attested signs arranged to echo your words, but it is not authentic Sumerian or Akkadian translation. Those were living languages with their own grammar, vocabulary, and literature. For those who wish to study cuneiform properly, visit our <a href="/discover" class="text-fired-800 underline hover:text-fired-900">Discover</a> page for resources to dive deeper.
				</p>
			</div>
		</div>
	</div>

	<!-- Attribution -->
	<footer class="mt-4 sm:mt-6 p-3 sm:p-4 bg-clay-50 rounded-xl border border-clay-200">
		<p class="text-xs text-clay-500 text-center">
			{ATTRIBUTION_TEXT}
		</p>
	</footer>
</div>
