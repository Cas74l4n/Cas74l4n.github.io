import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://github.com/cas74l4n.github.io',
	base: '/Cas74l4n.github.io',
	integrations: [mdx(), sitemap()],
});
