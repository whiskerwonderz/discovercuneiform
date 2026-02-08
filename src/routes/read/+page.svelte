<script lang="ts">
	import { FAMOUS_TABLETS, getTabletById, type FamousTablet } from '$lib/data/tablets';
	import { SIGNS } from '$lib/data/signs';
	import type { CuneiformSign } from '$lib/types';

	// Current state
	let selectedTabletId = $state<string | null>(null);
	let selectedTablet = $derived(selectedTabletId ? getTabletById(selectedTabletId) : null);

	// Sign explorer state
	let showSignExplorer = $state(false);
	let signSearch = $state('');
	let selectedSign = $state<CuneiformSign | null>(null);

	// Filter signs based on search
	let filteredSigns = $derived.by(() => {
		if (!signSearch.trim()) return SIGNS;
		const query = signSearch.toLowerCase();
		return SIGNS.filter(s =>
			s.name.toLowerCase().includes(query) ||
			s.meanings.some(m => m.toLowerCase().includes(query)) ||
			s.readings.some(r => r.value.toLowerCase().includes(query))
		);
	});

	// Group signs by visual similarity (by first character of name for simple grouping)
	let signGroups = $derived.by(() => {
		const groups: Record<string, CuneiformSign[]> = {};
		for (const sign of filteredSigns) {
			// Group by category for better organization
			const category = sign.category || 'other';
			if (!groups[category]) groups[category] = [];
			groups[category].push(sign);
		}
		return groups;
	});

	function selectTablet(id: string) {
		selectedTabletId = id;
		selectedSign = null;
	}

	function backToSelection() {
		selectedTabletId = null;
		selectedSign = null;
	}

	function selectSignForDetail(sign: CuneiformSign) {
		selectedSign = sign;
	}
</script>

<div class="max-w-7xl mx-auto px-4 py-6 sm:py-8">
	{#if !selectedTablet}
		<!-- Tablet Selection View -->
		<header class="mb-6 sm:mb-8 text-center">
			<h1 class="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-clay-900 mb-2 sm:mb-3">
				Explore Ancient Tablets
			</h1>
			<p class="font-body text-sm sm:text-base text-clay-600 max-w-2xl mx-auto px-2">
				Discover famous cuneiform texts with side-by-side translations.
				Select a tablet to explore its signs and meanings.
			</p>
		</header>

		<!-- Tablet Grid -->
		<div class="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
			{#each FAMOUS_TABLETS as tablet}
				<button
					onclick={() => selectTablet(tablet.id)}
					class="group bg-clay-100 rounded-xl border border-clay-200 overflow-hidden text-left hover:border-lapis-400 hover:shadow-lg transition-all"
				>
					<div class="aspect-video bg-gradient-to-br from-clay-200 via-clay-100 to-clay-200 flex items-center justify-center p-4 relative overflow-hidden">
						{#if tablet.imageUrl}
							<img
								src={tablet.imageUrl}
								alt={tablet.name}
								loading="lazy"
								class="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-300"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-clay-900/60 via-transparent to-transparent"></div>
							<span class="absolute bottom-3 left-3 text-xs text-white/80 bg-black/30 px-2 py-1 rounded">{tablet.collection}</span>
						{:else}
							<!-- Fallback cuneiform display -->
							<div class="absolute inset-0 opacity-10 flex items-center justify-center overflow-hidden">
								<span class="cuneiform text-9xl text-clay-900">𒀭𒀀𒈾𒆠𒌓</span>
							</div>
							<span class="cuneiform text-5xl text-clay-500 group-hover:text-lapis-500 transition-colors mb-2 relative">𒀀𒉡𒈠</span>
							<span class="text-xs text-clay-500 relative">{tablet.collection}</span>
						{/if}
					</div>
					<div class="p-4">
						<h3 class="font-display text-xl font-medium text-clay-900 mb-1 group-hover:text-lapis-600">
							{tablet.name}
						</h3>
						<p class="text-sm text-clay-500 mb-2">
							{tablet.period} · {tablet.language}
						</p>
						<p class="font-body text-sm text-clay-600 line-clamp-2">
							{tablet.description}
						</p>
					</div>
				</button>
			{/each}
		</div>

		<!-- Sign Explorer Teaser -->
		<div class="bg-lapis-50 rounded-xl border border-lapis-200 p-4 sm:p-6 text-center">
			<h2 class="font-display text-lg sm:text-xl font-medium text-clay-900 mb-2">
				Or Browse All Signs
			</h2>
			<p class="font-body text-sm sm:text-base text-clay-600 mb-3 sm:mb-4">
				Explore {SIGNS.length} cuneiform signs in our visual dictionary
			</p>
			<button
				onclick={() => showSignExplorer = true}
				class="px-5 sm:px-6 py-2 bg-lapis-500 text-white rounded-lg hover:bg-lapis-600 transition-colors text-sm sm:text-base"
			>
				Open Sign Explorer
			</button>
		</div>

	{:else}
		<!-- Tablet Viewer -->
		<header class="mb-4 sm:mb-6">
			<button
				onclick={backToSelection}
				class="text-sm text-clay-600 hover:text-clay-800 flex items-center gap-1 mb-3 sm:mb-4"
			>
				<span>←</span> Back to Tablets
			</button>
			<h1 class="font-display text-xl sm:text-2xl md:text-3xl font-medium text-clay-900 mb-1 sm:mb-2">
				{selectedTablet.name}
			</h1>
			<p class="font-body text-sm sm:text-base text-clay-600">
				{selectedTablet.period} · {selectedTablet.language} · {selectedTablet.collection}
			</p>
		</header>

		<div class="grid lg:grid-cols-2 gap-4 sm:gap-6">
			<!-- Tablet Info Card -->
			<div class="bg-clay-100 rounded-xl border border-clay-200 overflow-hidden">
				<div class="aspect-square bg-gradient-to-br from-clay-200 via-clay-100 to-clay-200 flex flex-col items-center justify-center relative overflow-hidden">
					{#if selectedTablet.imageUrl}
						<img
							src={selectedTablet.imageUrl}
							alt={selectedTablet.name}
							loading="lazy"
							class="w-full h-full object-cover"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-clay-900/70 via-transparent to-transparent"></div>
						<div class="absolute bottom-0 left-0 right-0 p-6 text-white">
							<h3 class="font-display text-lg mb-1">{selectedTablet.name}</h3>
							<p class="text-white/80 text-sm mb-4">{selectedTablet.collection}</p>
							<div class="flex flex-wrap gap-2">
								<a
									href={selectedTablet.sourceUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-block px-4 py-2 bg-white text-clay-800 rounded-lg hover:bg-clay-100 transition-colors text-sm font-medium"
								>
									View at Museum
								</a>
								{#if selectedTablet.cdliUrl}
									<a
										href={selectedTablet.cdliUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-block px-4 py-2 bg-lapis-500 text-white rounded-lg hover:bg-lapis-600 transition-colors text-sm font-medium"
									>
										View on CDLI
									</a>
								{/if}
							</div>
						</div>
					{:else}
						<!-- Fallback -->
						<div class="absolute inset-0 opacity-5 flex items-center justify-center">
							<span class="cuneiform text-[12rem] text-clay-900">𒀭𒀀𒈾𒆠𒌓𒁹𒂗</span>
						</div>
						<div class="relative text-center p-8">
							<span class="cuneiform text-7xl text-clay-500 block mb-4">𒀀𒉡𒈠</span>
							<h3 class="font-display text-lg text-clay-700 mb-1">{selectedTablet.name}</h3>
							<p class="text-clay-500 text-sm mb-6">{selectedTablet.collection}</p>
							<a
								href={selectedTablet.sourceUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-block px-5 py-2.5 bg-lapis-500 text-white rounded-lg hover:bg-lapis-600 transition-colors text-sm font-medium"
							>
								View Tablet at Museum →
							</a>
						</div>
					{/if}
				</div>
				<div class="p-3 text-xs text-clay-500 text-center border-t border-clay-200">
					Image: {selectedTablet.imageCredit}
				</div>
			</div>

			<!-- Text and Translation -->
			<div class="bg-clay-100 rounded-xl border border-clay-200 overflow-hidden flex flex-col">
				<div class="p-4 border-b border-clay-200 flex items-center justify-between">
					<h2 class="font-display text-lg font-medium text-clay-800">
						Text & Translation
					</h2>
					<button
						onclick={() => showSignExplorer = true}
						class="text-sm text-lapis-500 hover:text-lapis-600"
					>
						Browse Signs →
					</button>
				</div>

				<div class="flex-1 overflow-y-auto p-4 space-y-4 max-h-[500px]">
					{#each selectedTablet.text as line}
						<div class="bg-clay-50 rounded-lg p-4 border border-clay-200">
							<div class="text-xs text-clay-500 mb-2 font-mono">
								{line.line}
							</div>
							{#if line.cuneiform}
								<div class="cuneiform text-2xl text-clay-800 mb-2 leading-relaxed">
									{line.cuneiform}
								</div>
							{/if}
							<div class="font-body text-sm text-clay-600 mb-1 italic">
								{line.transliteration}
							</div>
							<div class="font-body text-clay-900">
								"{line.translation}"
							</div>
						</div>
					{/each}
				</div>

				<div class="p-4 border-t border-clay-200 bg-clay-50">
					<a
						href={selectedTablet.sourceUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm text-lapis-500 hover:text-lapis-600 hover:underline"
					>
						View full text at source →
					</a>
				</div>
			</div>
		</div>

		<!-- Description -->
		<div class="mt-6 bg-clay-100 rounded-xl border border-clay-200 p-6">
			<h3 class="font-display text-lg font-medium text-clay-800 mb-3">About This Tablet</h3>
			<p class="font-body text-clay-600 leading-relaxed">
				{selectedTablet.description}
			</p>
			<div class="mt-4 flex flex-wrap gap-4 text-sm">
				{#if selectedTablet.cdliUrl}
					<a
						href={selectedTablet.cdliUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="text-lapis-500 hover:text-lapis-600 hover:underline"
					>
						View on CDLI →
					</a>
				{/if}
				<a
					href={selectedTablet.sourceUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="text-lapis-500 hover:text-lapis-600 hover:underline"
				>
					Museum Collection →
				</a>
			</div>
		</div>
	{/if}
</div>

<!-- Sign Explorer Modal -->
{#if showSignExplorer}
	<div class="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center sm:p-4">
		<div class="bg-white rounded-t-2xl sm:rounded-2xl w-full sm:max-w-4xl max-h-[85vh] sm:max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
			<!-- Header -->
			<div class="p-3 sm:p-4 border-b border-clay-200 flex items-center justify-between">
				<h2 class="font-display text-lg sm:text-xl font-medium text-clay-900">
					Sign Explorer
					<span class="text-xs sm:text-sm font-normal text-clay-500">({filteredSigns.length})</span>
				</h2>
				<button
					onclick={() => { showSignExplorer = false; selectedSign = null; }}
					class="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-clay-100 hover:bg-clay-200 flex items-center justify-center text-lg"
				>
					×
				</button>
			</div>

			<!-- Search -->
			<div class="p-3 sm:p-4 border-b border-clay-200">
				<input
					type="text"
					placeholder="Search by name, meaning, or reading..."
					bind:value={signSearch}
					class="w-full px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg border border-clay-300 focus:border-lapis-500 focus:outline-none focus:ring-2 focus:ring-lapis-200 text-base"
				/>
			</div>

			<div class="flex-1 overflow-hidden flex">
				<!-- Sign Grid -->
				<div class="flex-1 overflow-y-auto p-3 sm:p-4">
					{#if selectedSign}
						<!-- Sign Detail View -->
						<button
							onclick={() => selectedSign = null}
							class="text-sm text-clay-600 hover:text-clay-800 mb-3 sm:mb-4 flex items-center gap-1"
						>
							<span>←</span> Back to all signs
						</button>

						<div class="bg-clay-50 rounded-xl p-4 sm:p-6 border border-clay-200">
							<div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
								<div class="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 bg-clay-200 rounded-lg flex items-center justify-center">
									<span class="cuneiform text-5xl sm:text-7xl text-clay-800">{selectedSign.character}</span>
								</div>
								<div class="flex-1 text-center sm:text-left">
									<h3 class="font-display text-xl sm:text-2xl font-medium text-clay-900 mb-1">
										{selectedSign.name}
									</h3>
									<p class="font-mono text-xs sm:text-sm text-clay-500 mb-2 sm:mb-3">
										{selectedSign.codepoint}
										{#if selectedSign.mzlNumber}· MZL {selectedSign.mzlNumber}{/if}
									</p>

									{#if selectedSign.readings.length > 0}
										<div class="mb-2 sm:mb-3">
											<h4 class="text-xs sm:text-sm font-medium text-clay-700 mb-1">Readings</h4>
											<div class="flex flex-wrap justify-center sm:justify-start gap-1">
												{#each selectedSign.readings as reading}
													<span class="px-2 py-0.5 bg-clay-200 rounded text-xs sm:text-sm">
														{reading.value}
													</span>
												{/each}
											</div>
										</div>
									{/if}

									{#if selectedSign.meanings.length > 0}
										<div class="mb-2 sm:mb-3">
											<h4 class="text-xs sm:text-sm font-medium text-clay-700 mb-1">Meanings</h4>
											<p class="text-sm text-clay-600">{selectedSign.meanings.join(', ')}</p>
										</div>
									{/if}

									{#if selectedSign.wedgeComposition}
										<div>
											<h4 class="text-xs sm:text-sm font-medium text-clay-700 mb-1">Wedge Composition</h4>
											<div class="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 text-xs sm:text-sm text-clay-600">
												<span>─ {selectedSign.wedgeComposition.horizontal}</span>
												<span>│ {selectedSign.wedgeComposition.vertical}</span>
												<span>╱ {selectedSign.wedgeComposition.oblique}</span>
												<span>∠ {selectedSign.wedgeComposition.winkelhaken}</span>
											</div>
										</div>
									{/if}
								</div>
							</div>
						</div>

						<!-- Similar Signs -->
						<div class="mt-4 sm:mt-6">
							<h4 class="font-display text-base sm:text-lg font-medium text-clay-800 mb-2 sm:mb-3">
								Visually Similar Signs
							</h4>
							<div class="grid grid-cols-4 sm:grid-cols-6 gap-2">
								{#each SIGNS.filter(s =>
									s.codepoint !== selectedSign?.codepoint &&
									s.category === selectedSign?.category
								).slice(0, 12) as similar}
									<button
										onclick={() => selectSignForDetail(similar)}
										class="aspect-square flex items-center justify-center bg-clay-100 rounded-lg border border-clay-200 hover:border-lapis-400 hover:bg-clay-50 transition-all"
										title={similar.name}
									>
										<span class="cuneiform text-xl sm:text-2xl">{similar.character}</span>
									</button>
								{/each}
							</div>
						</div>
					{:else}
						<!-- All Signs Grid -->
						{#each Object.entries(signGroups) as [category, signs]}
							<div class="mb-4 sm:mb-6">
								<h3 class="font-display text-xs sm:text-sm font-medium text-clay-600 uppercase tracking-wide mb-2 sm:mb-3">
									{category} ({signs.length})
								</h3>
								<div class="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-1.5 sm:gap-2">
									{#each signs as sign}
										<button
											onclick={() => selectSignForDetail(sign)}
											class="aspect-square flex items-center justify-center bg-clay-100 rounded-lg border border-clay-200 hover:border-lapis-400 hover:bg-lapis-50 transition-all"
											title="{sign.name}: {sign.meanings.slice(0, 2).join(', ')}"
										>
											<span class="cuneiform text-lg sm:text-xl">{sign.character}</span>
										</button>
									{/each}
								</div>
							</div>
						{/each}

						{#if filteredSigns.length === 0}
							<div class="text-center py-8 sm:py-12 text-clay-500">
								<p>No signs match "{signSearch}"</p>
							</div>
						{/if}
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}
