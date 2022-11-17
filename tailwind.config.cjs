/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				image: 'movein 2s cubic-bezier(0, 0, 0.2, 1)',
				imagefadein: 'fade 2s linear',
			},
			keyframes: {
				movein: {
					'0%': { transform: 'translateX(1000px)' },
					'100%': { transform: 'translateX(0px)' },
				},
			},
		},
	},
	plugins: [],
};
