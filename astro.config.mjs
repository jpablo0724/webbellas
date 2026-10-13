// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://cirugiascasaderecuperacionmedellin.com',
	// El CSS va dentro del HTML: evita una petición que bloquea el primer pintado.
	build: { inlineStylesheets: 'always' },
});
