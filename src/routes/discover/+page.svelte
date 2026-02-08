<script lang="ts">
	const digitalLibraries = [
		{
			name: 'CDLI (Cuneiform Digital Library Initiative)',
			description: 'The largest online collection of cuneiform texts, with images and metadata for hundreds of thousands of tablets.',
			url: 'https://cdli.mpiwg-berlin.mpg.de/',
			highlight: '500,000+ tablets'
		},
		{
			name: 'ORACC (Open Richly Annotated Cuneiform Corpus)',
			description: 'Scholarly editions of cuneiform texts with translations, linked to sign lists and dictionaries.',
			url: 'https://oracc.museum.upenn.edu/',
			highlight: 'Annotated editions'
		},
		{
			name: 'ETCSL (Electronic Text Corpus of Sumerian Literature)',
			description: 'Translations and transliterations of Sumerian literary texts from Oxford University.',
			url: 'https://etcsl.orinst.ox.ac.uk/',
			highlight: 'Sumerian literature'
		},
		{
			name: 'SEAL (Sources of Early Akkadian Literature)',
			description: 'Database of early Akkadian literary texts with editions and analysis.',
			url: 'https://seal.huji.ac.il/',
			highlight: 'Akkadian literature'
		},
		{
			name: 'ePSD (Pennsylvania Sumerian Dictionary)',
			description: 'Searchable dictionary for Sumerian signs, words, and meanings.',
			url: 'https://psd.museum.upenn.edu/',
			highlight: 'Sumerian dictionary'
		},
		{
			name: 'Library of Congress - Cuneiform Tablets',
			description: 'Digitised tablets from the Library of Congress collection.',
			url: 'https://www.loc.gov/collections/cuneiform-tablets/',
			highlight: 'Primary sources'
		},
		{
			name: 'CDLI Arabic Initiative',
			description: 'Arabic-language interface for CDLI, making cuneiform scholarship accessible in the primary language of modern Iraq.',
			url: 'https://cdli.earth/',
			highlight: 'Arabic interface'
		},
		{
			name: 'Syrian Digital Library of Cuneiform',
			description: 'Trilingual project (Arabic, English, French) digitising cuneiform tablets from Syrian museums.',
			url: 'https://www.mpiwg-berlin.mpg.de/project_cdli',
			highlight: 'Syrian collections'
		},
		{
			name: 'electronic Babylonian Library (eBL)',
			description: 'Research platform hosting cuneiform text editions, fragment matching tools, and digitised tablets from the Iraq Museum.',
			url: 'https://www.ebl.lmu.de/',
			highlight: 'Research platform'
		},
		{
			name: 'Akkademia',
			description: 'Open source AI model for translating Akkadian cuneiform, trained on ORACC data.',
			url: 'https://github.com/gaigutherz/Akkademia',
			highlight: 'AI translation'
		}
	];

	const museums = [
		{
			name: 'British Museum - Mesopotamia Collection',
			description: 'Home to the Gilgamesh flood tablet, Cyrus Cylinder, and thousands of cuneiform objects.',
			url: 'https://www.britishmuseum.org/collection/search?place=Mesopotamia',
			location: 'London, UK'
		},
		{
			name: 'Louvre - Near Eastern Antiquities',
			description: 'Houses the Code of Hammurabi stele and extensive Mesopotamian collections.',
			url: 'https://www.louvre.fr/en/explore/the-palace/the-department-of-near-eastern-antiquities',
			location: 'Paris, France'
		},
		{
			name: 'Penn Museum - Babylonian Section',
			description: 'Artifacts from the University of Pennsylvania\'s excavations at Ur and Nippur.',
			url: 'https://www.penn.museum/collections/galleries/middle-east',
			location: 'Philadelphia, USA'
		},
		{
			name: 'Iraq Museum',
			description: 'The world\'s largest collection of Mesopotamian artifacts, in the heartland of ancient Sumer and Babylon.',
			url: 'https://theiraqmuseum.com/',
			location: 'Baghdad, Iraq'
		}
	];

	const books = [
		{
			title: 'Cuneiform',
			author: 'Irving Finkel & Jonathan Taylor',
			description: 'Introduction to the writing system from British Museum experts',
			url: 'https://www.britishmuseumshoponline.org/cuneiform.html'
		}
	];

	const videos = [
		{
			title: 'How to Write Cuneiform',
			source: 'British Museum',
			description: 'Learn the basics with clay and stylus',
			url: 'https://www.britishmuseum.org/blog/how-write-cuneiform'
		}
	];

	const regionalScholars = [
		{
			name: 'Taha Baqir (1912–1984)',
			country: 'Iraq',
			contribution: 'Produced the first Arabic translation of the Epic of Gilgamesh directly from Akkadian. Discovered the Laws of Eshnunna, a legal code predating Hammurabi by two centuries.',
			links: [
				{ label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Taha_Baqir' }
			]
		},
		{
			name: 'Hormuzd Rassam (1826–1910)',
			country: 'Iraq (Mosul)',
			contribution: 'Discovered the clay tablets containing the Epic of Gilgamesh, the lion-hunt relief of Ashurbanipal, and the Balawat Gates. His book is freely available online.',
			links: [
				{ label: 'His book (free)', url: 'https://archive.org/details/asshurandlandni00rogegoog/page/n10/mode/2up' },
				{ label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Hormuzd_Rassam' }
			]
		},
		{
			name: 'Zainab Bahrani',
			country: 'Iraq',
			contribution: 'Professor at Columbia University whose scholarship challenges how the field frames its own history. Her book War Essays is free to read online.',
			links: [
				{ label: 'War Essays (free)', url: 'https://uclpress.co.uk/book/war-essays/' },
				{ label: 'Columbia profile', url: 'https://arthistory.columbia.edu/content/zainab-bahrani' }
			]
		},
		{
			name: 'Lamia Al-Gailani Werr (1938–2019)',
			country: 'Iraq',
			contribution: 'First Iraqi woman to study archaeology abroad. Specialist in cylinder seals who founded the Basrah Museum and worked to recover artefacts looted from the Iraq Museum.',
			links: [
				{ label: 'TrowelBlazers profile', url: 'https://trowelblazers.com/2021/08/01/lamia-al-gailani/' },
				{ label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Lamia_Al-Gailani_Werr' }
			]
		}
	];

</script>

<div class="max-w-5xl mx-auto px-4 py-8 sm:py-12">
	<header class="mb-8 sm:mb-12 text-center">
		<h1 class="font-display text-3xl sm:text-4xl font-medium text-clay-900 mb-3 sm:mb-4">
			Discover Cuneiform
		</h1>
		<p class="font-body text-base sm:text-lg text-clay-600 max-w-2xl mx-auto">
			Resources for exploring the world's oldest writing system.
		</p>
	</header>

	<!-- 1. What is Cuneiform -->
	<section class="mb-10 sm:mb-16">
		<div class="bg-clay-100 rounded-xl border border-clay-200 p-4 sm:p-6 md:p-8">
			<h2 class="font-display text-xl sm:text-2xl font-medium text-clay-900 mb-3 sm:mb-4">
				What is Cuneiform?
			</h2>
			<div class="grid md:grid-cols-2 gap-4 sm:gap-6">
				<div class="space-y-3 sm:space-y-4 font-body text-sm sm:text-base text-clay-700">
					<p>
						Cuneiform (from Latin <em>cuneus</em>, "wedge") is humanity's oldest writing system, developed by the Sumerians of Mesopotamia around <strong>3500 BCE</strong>. Writers pressed a reed stylus into soft clay to create wedge-shaped marks.
					</p>
					<p>
						Originally pictographic, it evolved into a <strong>logo-syllabic</strong> system where signs could represent words or syllable sounds. This made it flexible enough to write Sumerian, Akkadian, Babylonian, Assyrian, and other languages for over <strong>3,000 years</strong>.
					</p>
				</div>
				<div class="space-y-3 sm:space-y-4">
					<div class="grid grid-cols-4 gap-1.5 sm:gap-2 text-center">
						<div class="bg-clay-200 rounded-lg p-2 sm:p-3">
							<div class="text-xl sm:text-2xl font-mono text-clay-700">─</div>
							<div class="text-xs text-clay-500 mt-0.5 sm:mt-1">Horizontal</div>
						</div>
						<div class="bg-clay-200 rounded-lg p-2 sm:p-3">
							<div class="text-xl sm:text-2xl font-mono text-clay-700">│</div>
							<div class="text-xs text-clay-500 mt-0.5 sm:mt-1">Vertical</div>
						</div>
						<div class="bg-clay-200 rounded-lg p-2 sm:p-3">
							<div class="text-xl sm:text-2xl font-mono text-clay-700">╲</div>
							<div class="text-xs text-clay-500 mt-0.5 sm:mt-1">Oblique</div>
						</div>
						<div class="bg-clay-200 rounded-lg p-2 sm:p-3">
							<div class="text-xl sm:text-2xl font-mono text-clay-700">∠</div>
							<div class="text-xs text-clay-500 mt-0.5 sm:mt-1">Winkelhaken</div>
						</div>
					</div>
					<p class="text-xs sm:text-sm text-clay-600 text-center">
						Every cuneiform sign is built from these four wedge types.
					</p>
					<div class="flex justify-center">
						<a href="/about" class="text-xs sm:text-sm text-lapis-600 hover:underline">
							Read full history & timeline →
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- 2. Digital Libraries -->
	<section class="mb-10 sm:mb-16">
		<h2 class="font-display text-xl sm:text-2xl font-medium text-clay-900 mb-3 sm:mb-4">
			Digital Libraries
		</h2>
		<p class="font-body text-sm sm:text-base text-clay-600 mb-4 sm:mb-6">
			Online databases containing cuneiform texts with translations, images, and scholarly annotations.
		</p>

		<div class="grid sm:grid-cols-2 gap-3 sm:gap-4">
			{#each digitalLibraries as lib}
				<a
					href={lib.url}
					target="_blank"
					rel="noopener noreferrer"
					class="group bg-clay-100 rounded-xl border border-clay-200 p-4 sm:p-5 hover:border-lapis-400 hover:shadow-md active:scale-[0.98] transition-all"
				>
					<div class="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
						<h3 class="font-display text-sm sm:text-base font-medium text-clay-900 group-hover:text-lapis-600">
							{lib.name}
						</h3>
						<span class="flex-shrink-0 text-xs px-1.5 sm:px-2 py-0.5 bg-lapis-100 text-lapis-700 rounded">
							{lib.highlight}
						</span>
					</div>
					<p class="font-body text-xs sm:text-sm text-clay-600">
						{lib.description}
					</p>
				</a>
			{/each}
		</div>
	</section>

	<!-- 3. Scholars from the Region -->
	<section class="mb-10 sm:mb-16">
		<h2 class="font-display text-xl sm:text-2xl font-medium text-clay-900 mb-3 sm:mb-4">
			Scholars from the Region
		</h2>
		<p class="font-body text-sm sm:text-base text-clay-600 mb-4 sm:mb-6">
			Iraqi and regional scholars have made foundational contributions to cuneiform studies.
		</p>

		<div class="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
			{#each regionalScholars as scholar}
				<div class="bg-clay-100 rounded-xl border border-clay-200 p-4 sm:p-5 flex flex-col">
					<div class="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
						<h3 class="font-display text-sm sm:text-base font-medium text-clay-900">
							{scholar.name}
						</h3>
						<span class="flex-shrink-0 text-xs px-1.5 sm:px-2 py-0.5 bg-clay-200 text-clay-600 rounded">
							{scholar.country}
						</span>
					</div>
					<p class="font-body text-xs sm:text-sm text-clay-600 mb-2 sm:mb-3 flex-grow">
						{scholar.contribution}
					</p>
					<div class="flex flex-wrap gap-2 sm:gap-3 mt-auto">
						{#each scholar.links as link}
							<a
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-xs sm:text-sm text-lapis-600 hover:text-lapis-700 hover:underline"
							>
								{link.label} →
							</a>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- 5. Learning Resources -->
	<section class="mb-10 sm:mb-16">
		<h2 class="font-display text-xl sm:text-2xl font-medium text-clay-900 mb-3 sm:mb-4">
			Learning Resources
		</h2>
		<p class="font-body text-sm sm:text-base text-clay-600 mb-4 sm:mb-6">
			Introductory materials for beginners.
		</p>

		<div class="grid sm:grid-cols-2 gap-3 sm:gap-4">
			{#each books as book}
				<a
					href={book.url}
					target="_blank"
					rel="noopener noreferrer"
					class="group bg-clay-100 rounded-xl border border-clay-200 p-4 sm:p-5 hover:border-lapis-400 hover:shadow-md active:scale-[0.98] transition-all"
				>
					<h3 class="font-display text-sm sm:text-base font-medium text-clay-900 group-hover:text-lapis-600 mb-1.5 sm:mb-2">
						{book.title}
					</h3>
					<p class="text-xs sm:text-sm text-clay-600 mb-1">{book.author}</p>
					<p class="font-body text-xs sm:text-sm text-clay-500">{book.description}</p>
				</a>
			{/each}
			{#each videos as video}
				<a
					href={video.url}
					target="_blank"
					rel="noopener noreferrer"
					class="group bg-clay-100 rounded-xl border border-clay-200 p-4 sm:p-5 hover:border-lapis-400 hover:shadow-md active:scale-[0.98] transition-all"
				>
					<h3 class="font-display text-sm sm:text-base font-medium text-clay-900 group-hover:text-lapis-600 mb-1.5 sm:mb-2">
						{video.title}
					</h3>
					<p class="text-xs sm:text-sm text-clay-600 mb-1">{video.source}</p>
					<p class="font-body text-xs sm:text-sm text-clay-500">{video.description}</p>
				</a>
			{/each}
		</div>
	</section>

	<!-- 6. Museums -->
	<section class="mb-10 sm:mb-16">
		<h2 class="font-display text-xl sm:text-2xl font-medium text-clay-900 mb-3 sm:mb-4">
			Museums
		</h2>
		<p class="font-body text-sm sm:text-base text-clay-600 mb-4 sm:mb-6">
			See cuneiform tablets in person at these collections.
		</p>

		<div class="grid sm:grid-cols-2 gap-3 sm:gap-4">
			{#each museums as museum}
				<a
					href={museum.url}
					target="_blank"
					rel="noopener noreferrer"
					class="group bg-clay-100 rounded-xl border border-clay-200 p-4 sm:p-5 hover:border-lapis-400 hover:shadow-md active:scale-[0.98] transition-all"
				>
					<div class="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
						<h3 class="font-display text-sm sm:text-base font-medium text-clay-900 group-hover:text-lapis-600">
							{museum.name}
						</h3>
						<span class="flex-shrink-0 text-xs text-clay-500">
							{museum.location}
						</span>
					</div>
					<p class="font-body text-xs sm:text-sm text-clay-600">
						{museum.description}
					</p>
				</a>
			{/each}
		</div>
	</section>

	<!-- Footer -->
	<footer class="text-center">
		<p class="text-xs sm:text-sm text-clay-500">
			Know of a resource we should include? We'd love to hear about it. Drop us an <a href="mailto:whiskerwonderz001@gmail.com" class="text-lapis-500 hover:text-lapis-600 hover:underline">e-mail</a>.
		</p>
	</footer>
</div>
