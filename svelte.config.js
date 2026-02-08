import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			// If deploying to username.github.io/repo-name, set base to '/repo-name'
			// If deploying to custom domain or username.github.io, leave empty
			base: ''
		},
		prerender: {
			handleHttpError: ({ path, message }) => {
				// Ignore missing image files during prerender
				if (path.endsWith('.png') || path.endsWith('.ico')) {
					console.warn(`Warning: ${path} not found - add this file before deploying`);
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
