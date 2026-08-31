/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// Dark version -
				primaryText:'#e2e8f0',
				secondaryText: '#cbd5e1',
				primaryBg: '#253242',
				secondaryBg: '#1A2532',
				primaryBtn: '#3f9790',
				secondaryBtn: '#f4fafa',
				header: '#070b12',
				lightOpaque: '#3f979026',
				mediumOpaque: '#00000031',
				darkOpaque: '#00000097',
				accent: '#3F9790',
				// light Version -
				// primaryText: '#141613',
				// primaryBg: '#ececec',
				// primaryBtn: '#2a405b',
				// secondaryBtn: '#f0dacc',
				// accent: '#5aa1ce',
			},
			gridTemplateColumns: {
				minMaxContent: 'min-content max-content',
				aboutmeCol: '1fr 265px',
			},
			gridTemplateRow: {
				twoFrOne: '2fr 1fr',
				aboutmeRow: 'repeat(1, 10%)',
			},
			width: {
				introCalc: 'calc(100% + 1em)',
				introCalcAbout: 'calc(100% + 1.75em)',
				introCalcAboutLg: 'calc(100% + 3em)',
			},
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require('@tailwindcss/container-queries')],
};
