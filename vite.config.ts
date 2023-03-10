import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const orientation: "portrait" | "any" | "natural" | "landscape" | "landscape-primary" | "landscape-secondary" | "portrait-primary" | "portrait-secondary" | undefined = 'portrait';

const pwaManifest = {
	name: "Ionic SSR demo",
	short_name: "IonicSSRDemo",
	description: "Ionic SSR demo",
	theme_color: '#f27649',
	orientation: orientation,
	start_url: "/app/splash",
	icons: [
		{
			"src": "/android-chrome-192x192.png",
			"sizes": "192x192",
			"type": "image/png",
			"purpose": "maskable any"
		}
	]
}

const pwaConfiguration = {
	outDir: './build',
	// includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'dist/*'],
	// base: '/',
	// scope: '/',
	manifest: pwaManifest
}

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), VitePWA(pwaConfiguration)]
};

export default config;

// export default defineConfig({
// 	plugins: [sveltekit()]
// });

