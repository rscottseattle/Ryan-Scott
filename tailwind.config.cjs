/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.svelte',
		'./src/**/*.html'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'brand-bg': '#f5f5f0',
				'brand-bg-dark': '#0a0a0a',
				'brand-text': '#1a1a1a',
				'brand-text-dark': '#ededed',
				'brand-muted': '#737373',
				'brand-muted-dark': '#999999',
				'brand-border': '#e5e5e5',
				'brand-border-dark': '#1f1f1f',
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'--tw-prose-bullets': theme('colors.black'),
						blockquote: {
							borderLeft: '2px solid #e5e5e5',
							fontSize: 'inherit',
							fontStyle: 'inherit',
							fontWeight: 'medium'
						},
						'blockquote p:first-of-type::before': {
							content: ''
						},
						'blockquote p:last-of-type::after': {
							content: ''
						},
						'code::before': false,
						'code::after': false,
						code: {
							'border-radius': '0.25rem',
							padding: '0.15rem 0.3rem',
							borderWidth: '1px',
							borderColor: 'rgba(0,0,0,0.1)'
						},
						pre: {
							'border-radius': '0rem',
						},
						'a:hover': {
							color: '#4bbeff !important',
							textDecoration: 'underline !important'
						},
						a: {
							color: '#4bbeff',
							textDecoration: 'none'
						},
						'a code': {
							color: 'unset'
						},
						table: {
							overflow: 'hidden'
						},
						'li, ul, ol': {
							margin: 0
						},
						'li > img': {
							margin: 0,
							display: 'inline'
						},
						'ol > li::marker': {
							color: 'var(--tw-prose-body)'
						},
						'ul > li::marker': {
							color: 'var(--tw-prose-body)'
						},
						'ul > li > p': {
							marginTop: 0,
							marginBottom: 0,
						},
					}
				}
			})
		}
	},
	variants: {},
	plugins: [
		require('@tailwindcss/typography')
	]
};
