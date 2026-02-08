<script lang="ts">
	import type { CuneiformSign } from '$lib/types';

	interface Props {
		sign?: CuneiformSign | null;
		wedgeType?: 'horizontal' | 'vertical' | 'oblique' | 'winkelhaken' | null;
		instruction: string;
	}

	let { sign = null, wedgeType = null, instruction }: Props = $props();

	const wedgeInfo = {
		horizontal: {
			symbol: '─',
			name: 'Horizontal Wedge',
			description: 'Head on the left, tail pointing right. The most common stroke.',
			visual: '◀━━━'
		},
		vertical: {
			symbol: '│',
			name: 'Vertical Wedge',
			description: 'Head at the top, tail pointing down.',
			visual: '▲\n│\n│'
		},
		oblique: {
			symbol: '╱',
			name: 'Oblique Wedge',
			description: 'Diagonal strokes at various angles.',
			visual: '◤\n  ╲'
		},
		winkelhaken: {
			symbol: '∠',
			name: 'Winkelhaken',
			description: 'Corner impression, like an "L" or hook shape.',
			visual: '◢\n └'
		}
	};

	let info = $derived(wedgeType ? wedgeInfo[wedgeType] : null);
</script>

<div class="bg-clay-50 rounded-xl p-6 border border-clay-200">
	<!-- Demo Badge -->
	<div class="flex items-center gap-2 mb-4">
		<span class="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide bg-lapis-100 text-lapis-700">
			Watch & Learn
		</span>
	</div>

	<!-- Instruction -->
	<p class="font-body text-lg text-clay-800 mb-6">
		{instruction}
	</p>

	{#if wedgeType && info}
		<!-- Wedge Type Demo -->
		<div class="flex flex-col md:flex-row items-center gap-8">
			<!-- Large Visual -->
			<div class="flex-shrink-0 w-32 h-32 bg-clay-200 rounded-lg flex items-center justify-center">
				<span class="text-6xl font-mono text-clay-700">{info.symbol}</span>
			</div>

			<div class="flex-1 text-center md:text-left">
				<h3 class="font-display text-2xl font-medium text-clay-800 mb-2">
					{info.name}
				</h3>
				<p class="font-body text-clay-600 mb-4">
					{info.description}
				</p>

				<!-- Visual Guide -->
				<div class="inline-block bg-clay-100 rounded-lg p-4 border border-clay-200">
					<p class="text-xs text-clay-500 mb-2">Stylus motion:</p>
					<pre class="font-mono text-2xl text-clay-700 leading-tight">{info.visual}</pre>
				</div>
			</div>
		</div>
	{:else if sign}
		<!-- Sign Demo -->
		<div class="flex flex-col md:flex-row items-center gap-8">
			<!-- Large Sign -->
			<div class="flex-shrink-0 w-40 h-40 bg-clay-200 rounded-lg flex items-center justify-center">
				<span class="cuneiform text-7xl text-clay-800" aria-label={sign.name}>
					{sign.character}
				</span>
			</div>

			<div class="flex-1 text-center md:text-left">
				<h3 class="font-display text-2xl font-medium text-clay-800 mb-1">
					{sign.name}
				</h3>
				<p class="font-mono text-sm text-clay-500 mb-3">
					{sign.codepoint}
				</p>

				<!-- Readings -->
				{#if sign.readings.length > 0}
					<div class="mb-3">
						<span class="text-sm text-clay-600">Readings: </span>
						<span class="font-body text-clay-800">
							{sign.readings.map(r => r.value).join(', ')}
						</span>
					</div>
				{/if}

				<!-- Meanings -->
				{#if sign.meanings.length > 0}
					<div class="mb-4">
						<span class="text-sm text-clay-600">Meanings: </span>
						<span class="font-body text-clay-800">
							{sign.meanings.join(', ')}
						</span>
					</div>
				{/if}

				<!-- Wedge Composition -->
				{#if sign.wedgeComposition}
					<div class="bg-clay-100 rounded-lg p-3 inline-block">
						<p class="text-xs text-clay-500 mb-2">Wedge composition:</p>
						<div class="flex gap-4 text-sm">
							<span class="flex items-center gap-1">
								<span class="font-mono">─</span>
								<span class="text-clay-700">{sign.wedgeComposition.horizontal}</span>
							</span>
							<span class="flex items-center gap-1">
								<span class="font-mono">│</span>
								<span class="text-clay-700">{sign.wedgeComposition.vertical}</span>
							</span>
							<span class="flex items-center gap-1">
								<span class="font-mono">╱</span>
								<span class="text-clay-700">{sign.wedgeComposition.oblique}</span>
							</span>
							<span class="flex items-center gap-1">
								<span class="font-mono">∠</span>
								<span class="text-clay-700">{sign.wedgeComposition.winkelhaken}</span>
							</span>
						</div>
					</div>
				{/if}
			</div>
		</div>
	{:else}
		<!-- Generic Demo -->
		<div class="text-center py-8">
			<div class="cuneiform text-5xl text-clay-400 mb-4">𒀭</div>
			<p class="text-clay-500">Observe the demonstration above</p>
		</div>
	{/if}
</div>
