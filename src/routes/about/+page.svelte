<script lang="ts">
	const timeline = [
		{ year: 'c. 3500 BCE', event: 'Earliest pictographic tablets appear in Uruk (modern Iraq)' },
		{ year: 'c. 3000 BCE', event: 'Pictographs evolve into abstract wedge-shaped signs' },
		{ year: 'c. 2600 BCE', event: 'Phonetic (syllabic) writing becomes standard' },
		{ year: 'c. 2400 BCE', event: 'Akkadian adopts cuneiform; script spreads across Near East' },
		{ year: 'c. 1750 BCE', event: 'Hammurabi\'s law code inscribed on stone stele' },
		{ year: 'c. 1200 BCE', event: 'Epic of Gilgamesh composed in its "standard" version' },
		{ year: 'c. 500 BCE', event: 'Darius I carves the Behistun Inscription in three languages' },
		{ year: 'c. 100 CE', event: 'Last known cuneiform tablets written; script falls out of use' },
		{ year: '1802 CE', event: 'Georg Grotefend deciphers first Old Persian cuneiform signs' },
		{ year: '1857 CE', event: 'Akkadian cuneiform fully deciphered by Rawlinson, Hincks, Oppert, and Talbot' }
	];

	const facts = [
		{
			title: 'Over 3,000 years of use',
			description: 'Cuneiform was used for more than three millennia, making it the longest-used writing system in human history.'
		},
		{
			title: 'Multiple languages',
			description: 'The script was adapted to write Sumerian, Akkadian, Babylonian, Assyrian, Elamite, Hittite, Hurrian, and Old Persian.'
		},
		{
			title: 'Half a million tablets survive',
			description: 'Approximately 500,000 cuneiform tablets have been excavated, with many still untranslated.'
		},
		{
			title: 'First literature',
			description: 'The Epic of Gilgamesh, written in cuneiform, is the oldest surviving work of literature.'
		},
		{
			title: 'First schools',
			description: 'Sumerian "tablet houses" (edubba) were the world\'s first schools, training scribes for years.'
		},
		{
			title: 'Clay preserved everything',
			description: 'Clay tablets survived fires (which hardened them) and millennia underground, preserving records that paper never could.'
		}
	];
</script>

<div class="max-w-4xl mx-auto px-4 py-8 sm:py-12">
	<header class="mb-8 sm:mb-12 text-center">
		<h1 class="font-display text-3xl sm:text-4xl font-medium text-clay-900 mb-3 sm:mb-4">
			About Cuneiform
		</h1>
		<p class="font-body text-base sm:text-lg text-clay-600 max-w-2xl mx-auto">
			The world's oldest writing system, born in ancient Mesopotamia over 5,000 years ago.
		</p>
	</header>

	<!-- What is Cuneiform -->
	<section class="mb-8 sm:mb-12">
		<h2 class="font-display text-xl sm:text-2xl font-medium text-clay-900 mb-3 sm:mb-4">
			What is Cuneiform?
		</h2>
		<div class="bg-clay-100 rounded-xl border border-clay-200 p-4 sm:p-6">
			<p class="font-body text-sm sm:text-base text-clay-700 mb-3 sm:mb-4">
				Cuneiform (from Latin <em>cuneus</em>, "wedge") is a writing system that uses wedge-shaped marks pressed into soft clay tablets. It was developed by the Sumerians of southern Mesopotamia around 3500 BCE and remained in use for over 3,000 years.
			</p>
			<p class="font-body text-sm sm:text-base text-clay-700 mb-3 sm:mb-4">
				Originally pictographic (pictures representing objects), cuneiform evolved into a logo-syllabic system where signs could represent whole words OR syllable sounds. This made it flexible enough to write multiple unrelated languages.
			</p>
			<p class="font-body text-sm sm:text-base text-clay-700">
				A trained scribe would use a reed stylus to press wedge-shaped impressions into wet clay. The basic wedges (horizontal, vertical, and diagonal) combined to form hundreds of distinct signs.
			</p>
			<p class="mt-3 sm:mt-4 text-xs text-clay-500">
				Sources: <a href="https://www.britannica.com/topic/cuneiform" target="_blank" rel="noopener noreferrer" class="text-lapis-500 hover:underline">Britannica</a>, <a href="https://www.worldhistory.org/cuneiform/" target="_blank" rel="noopener noreferrer" class="text-lapis-500 hover:underline">World History Encyclopedia</a>
			</p>
		</div>
	</section>

	<!-- The Four Wedges -->
	<section class="mb-8 sm:mb-12">
		<h2 class="font-display text-xl sm:text-2xl font-medium text-clay-900 mb-3 sm:mb-4">
			The Building Blocks: Four Wedge Types
		</h2>
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
			<div class="bg-clay-100 rounded-xl border border-clay-200 p-3 sm:p-4 text-center">
				<div class="text-3xl sm:text-4xl font-mono text-clay-700 mb-1 sm:mb-2">─</div>
				<div class="font-display text-sm sm:text-base font-medium text-clay-800">Horizontal</div>
				<div class="text-xs sm:text-sm text-clay-500">Head left, tail right</div>
			</div>
			<div class="bg-clay-100 rounded-xl border border-clay-200 p-3 sm:p-4 text-center">
				<div class="text-3xl sm:text-4xl font-mono text-clay-700 mb-1 sm:mb-2">│</div>
				<div class="font-display text-sm sm:text-base font-medium text-clay-800">Vertical</div>
				<div class="text-xs sm:text-sm text-clay-500">Head top, tail down</div>
			</div>
			<div class="bg-clay-100 rounded-xl border border-clay-200 p-3 sm:p-4 text-center">
				<div class="text-3xl sm:text-4xl font-mono text-clay-700 mb-1 sm:mb-2">╲</div>
				<div class="font-display text-sm sm:text-base font-medium text-clay-800">Oblique</div>
				<div class="text-xs sm:text-sm text-clay-500">Diagonal strokes</div>
			</div>
			<div class="bg-clay-100 rounded-xl border border-clay-200 p-3 sm:p-4 text-center">
				<div class="text-3xl sm:text-4xl font-mono text-clay-700 mb-1 sm:mb-2">∠</div>
				<div class="font-display text-sm sm:text-base font-medium text-clay-800">Winkelhaken</div>
				<div class="text-xs sm:text-sm text-clay-500">Corner impression</div>
			</div>
		</div>
		<p class="mt-3 sm:mt-4 text-xs sm:text-sm text-clay-500 text-center">
			Every cuneiform sign is composed of these four basic wedge types in different combinations.
			<br />
			<span class="text-xs">Source: <a href="https://www.britishmuseum.org/blog/how-write-cuneiform" target="_blank" rel="noopener noreferrer" class="text-lapis-500 hover:underline">British Museum</a></span>
		</p>
	</section>

	<!-- Timeline -->
	<section class="mb-8 sm:mb-12">
		<h2 class="font-display text-xl sm:text-2xl font-medium text-clay-900 mb-3 sm:mb-4">
			Timeline
		</h2>
		<div class="bg-clay-100 rounded-xl border border-clay-200 p-4 sm:p-6">
			<div class="space-y-3 sm:space-y-4">
				{#each timeline as item}
					<div class="flex gap-2 sm:gap-4">
						<div class="flex-shrink-0 w-20 sm:w-28 text-right">
							<span class="font-mono text-xs sm:text-sm text-lapis-600">{item.year}</span>
						</div>
						<div class="flex-shrink-0 w-px bg-clay-300"></div>
						<div class="font-body text-xs sm:text-base text-clay-700">{item.event}</div>
					</div>
				{/each}
			</div>
			<p class="mt-3 sm:mt-4 text-xs text-clay-500">
				Sources: <a href="https://en.wikipedia.org/wiki/Cuneiform" target="_blank" rel="noopener noreferrer" class="text-lapis-500 hover:underline">Wikipedia</a>, <a href="https://en.wikipedia.org/wiki/Decipherment_of_cuneiform" target="_blank" rel="noopener noreferrer" class="text-lapis-500 hover:underline">Decipherment of Cuneiform</a>, <a href="https://www.loc.gov/collections/cuneiform-tablets/about-this-collection/" target="_blank" rel="noopener noreferrer" class="text-lapis-500 hover:underline">Library of Congress</a>
			</p>
		</div>
	</section>

	<!-- How it was Deciphered -->
	<section class="mb-8 sm:mb-12">
		<h2 class="font-display text-xl sm:text-2xl font-medium text-clay-900 mb-3 sm:mb-4">
			How Was It Deciphered?
		</h2>
		<div class="bg-clay-100 rounded-xl border border-clay-200 p-4 sm:p-6 space-y-3 sm:space-y-4">
			<p class="font-body text-sm sm:text-base text-clay-700">
				For centuries after cuneiform fell out of use, no one could read it. The breakthrough came from the <strong>Behistun Inscription</strong>, a massive rock carving in Iran commissioned by Persian King Darius I around 500 BCE.
			</p>
			<p class="font-body text-sm sm:text-base text-clay-700">
				Like the Rosetta Stone for Egyptian hieroglyphs, Behistun contained the same text in three languages: Old Persian, Elamite, and Babylonian. In 1802, German schoolteacher <strong>Georg Grotefend</strong> made the first breakthrough by identifying royal names in the Old Persian version.
			</p>
			<p class="font-body text-sm sm:text-base text-clay-700">
				British officer <strong>Henry Rawlinson</strong> scaled the dangerous cliff face in the 1830s-40s to copy the full inscription. By 1857, four scholars working independently could all translate the same Akkadian text, proving cuneiform had been cracked.
			</p>
			<p class="mt-2 text-xs text-clay-500">
				Sources: <a href="https://en.wikipedia.org/wiki/Behistun_Inscription" target="_blank" rel="noopener noreferrer" class="text-lapis-500 hover:underline">Behistun Inscription</a>, <a href="https://en.wikipedia.org/wiki/Decipherment_of_cuneiform" target="_blank" rel="noopener noreferrer" class="text-lapis-500 hover:underline">Decipherment of Cuneiform</a>
			</p>
		</div>
	</section>

	<!-- Interesting Facts -->
	<section class="mb-8 sm:mb-12">
		<h2 class="font-display text-xl sm:text-2xl font-medium text-clay-900 mb-3 sm:mb-4">
			Fascinating Facts
		</h2>
		<div class="grid sm:grid-cols-2 gap-3 sm:gap-4">
			{#each facts as fact}
				<div class="bg-clay-100 rounded-xl border border-clay-200 p-3 sm:p-4">
					<h3 class="font-display text-sm sm:text-base font-medium text-clay-800 mb-1">{fact.title}</h3>
					<p class="font-body text-xs sm:text-sm text-clay-600">{fact.description}</p>
				</div>
			{/each}
		</div>
		<p class="mt-3 sm:mt-4 text-xs text-clay-500 text-center">
			Sources: <a href="https://cdli.mpiwg-berlin.mpg.de/" target="_blank" rel="noopener noreferrer" class="text-lapis-500 hover:underline">CDLI</a>, <a href="https://www.britannica.com/topic/cuneiform" target="_blank" rel="noopener noreferrer" class="text-lapis-500 hover:underline">Britannica</a>, <a href="https://www.worldhistory.org/cuneiform/" target="_blank" rel="noopener noreferrer" class="text-lapis-500 hover:underline">World History Encyclopedia</a>
		</p>
	</section>

	<!-- Go Deeper -->
	<section class="mb-8 sm:mb-12">
		<div class="bg-lapis-50 rounded-xl border border-lapis-200 p-4 sm:p-6 text-center">
			<h2 class="font-display text-lg sm:text-xl font-medium text-clay-900 mb-2">
				Want to Go Deeper?
			</h2>
			<p class="font-body text-sm sm:text-base text-clay-600 mb-3 sm:mb-4">
				Explore books, videos, digital libraries, and research projects in our Discover section.
			</p>
			<a href="/discover" class="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-lapis-500 text-white rounded-lg hover:bg-lapis-600 transition-colors font-medium text-sm sm:text-base">
				Explore Resources →
			</a>
		</div>
	</section>

	<!-- CTA -->
	<section class="text-center">
		<p class="font-body text-sm sm:text-base text-clay-600 mb-4 sm:mb-6">
			Ready to try writing cuneiform yourself?
		</p>
		<div class="flex flex-wrap justify-center gap-3 sm:gap-4">
			<a href="/learn" class="px-5 sm:px-6 py-2.5 sm:py-3 bg-lapis-500 text-white rounded-lg hover:bg-lapis-600 transition-colors font-medium text-sm sm:text-base">
				Start Learning
			</a>
			<a href="/read" class="px-5 sm:px-6 py-2.5 sm:py-3 bg-clay-200 text-clay-800 rounded-lg hover:bg-clay-300 transition-colors font-medium text-sm sm:text-base">
				Explore Tablets
			</a>
		</div>
	</section>
</div>
