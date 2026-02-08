<script lang="ts">
	import '../app.css';

	interface Props {
		children: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	// Mobile menu state
	let mobileMenuOpen = $state(false);

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<svelte:head>
	<title>Discover Cuneiform - Ancient Writing Explorer</title>
</svelte:head>

<div class="min-h-screen bg-clay-50 clay-surface">
	<!-- Navigation -->
	<header class="sticky top-0 z-50 bg-clay-100/95 backdrop-blur-sm border-b border-clay-200">
		<nav class="max-w-6xl mx-auto px-4 py-3">
			<div class="flex items-center justify-between">
				<!-- Logo -->
				<a href="/" class="flex items-center gap-2 sm:gap-3 group" onclick={closeMobileMenu}>
					<span class="cuneiform text-xl sm:text-2xl text-clay-800 group-hover:text-lapis-500 transition-colors">𒀭</span>
					<span class="font-display text-lg sm:text-xl font-medium text-clay-800">Discover Cuneiform</span>
					<span class="px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide bg-clay-200 text-clay-600 rounded">Beta</span>
				</a>

				<!-- Mobile Menu Button -->
				<button
					onclick={() => mobileMenuOpen = !mobileMenuOpen}
					class="md:hidden p-2 rounded-lg hover:bg-clay-200 transition-colors"
					aria-label="Toggle menu"
					aria-expanded={mobileMenuOpen}
				>
					<svg class="w-6 h-6 text-clay-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{#if mobileMenuOpen}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						{/if}
					</svg>
				</button>

				<!-- Desktop Navigation -->
				<div class="hidden md:flex items-center gap-1 bg-clay-200/50 rounded-lg p-1">
					<a
						href="/read"
						class="px-4 py-2 rounded-md font-body text-sm font-medium text-clay-700 hover:bg-clay-100 hover:text-clay-900 transition-all press-effect"
					>
						Explore
					</a>
					<a
						href="/learn"
						class="px-4 py-2 rounded-md font-body text-sm font-medium text-clay-700 hover:bg-clay-100 hover:text-clay-900 transition-all press-effect"
					>
						Learn
					</a>
					<a
						href="/create"
						class="px-4 py-2 rounded-md font-body text-sm font-medium text-clay-700 hover:bg-clay-100 hover:text-clay-900 transition-all press-effect"
					>
						Create
					</a>
					<a
						href="/discover"
						class="px-4 py-2 rounded-md font-body text-sm font-medium text-clay-700 hover:bg-clay-100 hover:text-clay-900 transition-all press-effect"
					>
						Discover
					</a>
				</div>
			</div>

			<!-- Mobile Navigation Menu -->
			{#if mobileMenuOpen}
				<div class="md:hidden mt-3 pt-3 border-t border-clay-200 space-y-1">
					<a
						href="/read"
						onclick={closeMobileMenu}
						class="block px-4 py-3 rounded-lg font-body text-base font-medium text-clay-700 hover:bg-clay-200 transition-colors"
					>
						Explore
					</a>
					<a
						href="/learn"
						onclick={closeMobileMenu}
						class="block px-4 py-3 rounded-lg font-body text-base font-medium text-clay-700 hover:bg-clay-200 transition-colors"
					>
						Learn
					</a>
					<a
						href="/create"
						onclick={closeMobileMenu}
						class="block px-4 py-3 rounded-lg font-body text-base font-medium text-clay-700 hover:bg-clay-200 transition-colors"
					>
						Create
					</a>
					<a
						href="/discover"
						onclick={closeMobileMenu}
						class="block px-4 py-3 rounded-lg font-body text-base font-medium text-clay-700 hover:bg-clay-200 transition-colors"
					>
						Discover
					</a>
				</div>
			{/if}
		</nav>
	</header>

	<!-- Main Content -->
	<main class="page-enter">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="mt-auto border-t border-clay-200 bg-clay-100/50">
		<div class="max-w-6xl mx-auto px-4 py-4 sm:py-6">
			<div class="flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-4 text-sm">
				<span class="text-clay-500">
					<span class="cuneiform text-clay-400 mr-1 sm:mr-2 text-sm sm:text-base">𒀀𒀭𒆠</span>
					<span class="text-xs sm:text-sm">A free educational tool for exploring cuneiform</span>
				</span>
				<div class="flex items-center gap-4 sm:gap-6">
					<a href="/project" class="text-lapis-500 hover:text-lapis-600 hover:underline transition-colors text-xs sm:text-sm">
						About
					</a>
					<a href="/resources" class="text-lapis-500 hover:text-lapis-600 hover:underline transition-colors text-xs sm:text-sm">
						Attribution
					</a>
				</div>
			</div>
		</div>
	</footer>
</div>
