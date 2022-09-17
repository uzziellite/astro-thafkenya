import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import prefetch from '@astrojs/prefetch';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	site:'https://thafkenya.org',
	integrations: [
		vue(),
		sitemap(),
		tailwind(),
		prefetch(),
		svelte()
	],
});
