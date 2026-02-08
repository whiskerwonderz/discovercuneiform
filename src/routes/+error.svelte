<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="max-w-4xl mx-auto px-4 py-16 text-center">
	<div class="cuneiform text-6xl text-clay-300 mb-6">𒌋</div>
	<h1 class="font-display text-3xl font-medium text-clay-900 mb-4">
		{$page.status}: {$page.error?.message || 'Something went wrong'}
	</h1>
	<p class="font-body text-clay-600 mb-8">
		The tablet you seek has crumbled to dust.
	</p>
	<a
		href="/"
		class="inline-block px-6 py-3 bg-lapis-500 text-white rounded-lg hover:bg-lapis-600 transition-colors"
	>
		Return Home
	</a>
</div>
