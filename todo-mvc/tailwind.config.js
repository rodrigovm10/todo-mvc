// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				allports: {
					50: '#eff9fc',
					100: '#d7eff6',
					200: '#b5dfec',
					300: '#81c7df',
					400: '#46a6ca',
					500: '#2b8aaf',
					600: '#29779e',
					700: '#255b79',
					800: '#264c64',
					900: '#244155',
					950: '#132939'
				}
			}
		}
	},
	plugins: [require('tailwindcss-animated')]
}
