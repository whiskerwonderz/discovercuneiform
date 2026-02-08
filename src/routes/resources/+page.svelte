<script lang="ts">
	const resources = [
		{
			name: 'ORACC (Open Richly Annotated Cuneiform Corpus)',
			url: 'https://oracc.museum.upenn.edu/',
			logo: '𒀭',
			usage: 'Sign data and readings',
			description: 'We use the ORACC Sign List (OSL) as our primary source for cuneiform sign data. This includes sign names, Unicode codepoints, phonetic readings, and meanings.',
			license: 'CC0 Public Domain',
			licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
			maintainers: 'Steve Tinney & Niek Veldhuis, University of Pennsylvania'
		},
		{
			name: 'CDLI (Cuneiform Digital Library Initiative)',
			url: 'https://cdli.mpiwg-berlin.mpg.de/',
			logo: '𒁹',
			usage: 'Tablet catalog and translations',
			description: 'Famous tablet texts, transliterations, and translations in our Explore mode come from CDLI\'s extensive digital library of cuneiform texts.',
			license: 'Non-commercial use',
			licenseUrl: 'https://cdli.earth/terms-of-use',
			maintainers: 'UCLA, Max Planck Institute, and partner institutions'
		},
		{
			name: 'eBL (electronic Babylonian Library)',
			url: 'https://www.ebl.lmu.de/',
			logo: '𒋙',
			usage: 'Reference links',
			description: 'We link to eBL for users who want to explore literary texts in greater depth. eBL provides scholarly editions of Babylonian literature.',
			license: 'External reference only',
			licenseUrl: 'https://www.ebl.lmu.de/',
			maintainers: 'Ludwig Maximilian University of Munich'
		},
		{
			name: 'Borger, Mesopotamisches Zeichenlexikon (MZL)',
			url: 'https://www.worldcat.org/title/mesopotamisches-zeichenlexikon/oclc/43905054',
			logo: '𒁾',
			usage: 'Sign reference numbers',
			description: 'MZL numbers in our sign data come from Rykle Borger\'s authoritative cuneiform sign lexicon (2nd ed. 2010), the standard reference used by scholars worldwide.',
			license: 'Scholarly citation',
			licenseUrl: 'https://www.worldcat.org/title/mesopotamisches-zeichenlexikon/oclc/43905054',
			maintainers: 'Rykle Borger (1929–2010)'
		},
		{
			name: 'Unicode Cuneiform Block',
			url: 'https://unicode.org/charts/PDF/U12000.pdf',
			logo: '𒀀',
			usage: 'Character encoding',
			description: 'All cuneiform characters are rendered using the Unicode Standard\'s Cuneiform block (U+12000–U+123FF), ensuring compatibility across devices and platforms.',
			license: 'Open Standard',
			licenseUrl: 'https://unicode.org/',
			maintainers: 'Unicode Consortium'
		}
	];
</script>

<div class="max-w-4xl mx-auto px-4 py-8 sm:py-12">
	<header class="mb-8 sm:mb-12">
		<h1 class="font-display text-3xl sm:text-4xl font-medium text-clay-900 mb-3 sm:mb-4">
			Attribution
		</h1>
		<p class="font-body text-base sm:text-lg text-clay-600">
			Discover Cuneiform is built on the work of scholars and institutions who have made cuneiform accessible to the digital age. Here's what we use and how.
		</p>
	</header>

	<div class="space-y-4 sm:space-y-8">
		{#each resources as resource}
			<article class="bg-clay-100 rounded-xl border border-clay-200 overflow-hidden">
				<div class="p-4 sm:p-6">
					<div class="flex items-start gap-3 sm:gap-4">
						<div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-clay-200 rounded-lg flex items-center justify-center">
							<span class="cuneiform text-xl sm:text-2xl text-clay-700">{resource.logo}</span>
						</div>
						<div class="flex-1 min-w-0">
							<h2 class="font-display text-base sm:text-xl font-medium text-clay-900 mb-1">
								<a href={resource.url} target="_blank" rel="noopener noreferrer" class="hover:text-lapis-600 transition-colors">
									{resource.name}
								</a>
							</h2>
							<div class="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
								<span class="px-1.5 sm:px-2 py-0.5 bg-lapis-100 text-lapis-700 text-xs font-medium rounded">
									{resource.usage}
								</span>
								<a
									href={resource.licenseUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="px-1.5 sm:px-2 py-0.5 bg-clay-200 text-clay-600 text-xs rounded hover:bg-clay-300 transition-colors"
								>
									{resource.license}
								</a>
							</div>
							<p class="font-body text-xs sm:text-base text-clay-600 mb-2 sm:mb-3">
								{resource.description}
							</p>
							<p class="text-xs text-clay-500">
								Maintained by: {resource.maintainers}
							</p>
						</div>
					</div>
				</div>
			</article>
		{/each}
	</div>

	<footer class="mt-8 sm:mt-12 text-center">
		<a href="/" class="text-sm sm:text-base text-lapis-500 hover:text-lapis-600 hover:underline">
			← Back to Home
		</a>
	</footer>
</div>
