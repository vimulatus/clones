const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class', '[data-mode="dark"]'],
	presets: [require('@clones/theme/tailwind.preset')],
	content: [join(__dirname, '../**/!(*.spec).{ts,html}'), ...createGlobPatternsForDependencies(__dirname)],
	theme: {
		extend: {},
	},
	plugins: [],
};
