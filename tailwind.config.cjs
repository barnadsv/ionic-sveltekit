const konstaConfig = require('konsta/config');

const config = konstaConfig({
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {}
	},

	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
});

module.exports = config;
