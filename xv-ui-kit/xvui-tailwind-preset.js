const spartanPreset = require('@spartan-ng/ui-core/hlm-tailwind-preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
	...spartanPreset,
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(221, 18%, 83%)',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: '#000000',
				foreground: 'hsl(var(--foreground))',
				primary: 'hsl(255, 100%, 68%)',
				secondary: 'hsl(223, 21%, 94%)',
				destructive: {
					DEFAULT: 'hsl(0, 100%, 70%)',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				// muted: {
				// 	DEFAULT: 'hsl(var(--muted))',
				// 	foreground: 'hsl(var(--muted-foreground))',
				// },
				accent: {
					DEFAULT: 'hsl(0, 0%, 100%)',
					foreground: 'hsl(var(--accent-foreground))',
				},
				// popover: {
				// 	DEFAULT: 'hsl(var(--popover))',
				// 	foreground: 'hsl(var(--popover-foreground))',
				// },
				// card: {
				// 	DEFAULT: 'hsl(var(--card))',
				// 	foreground: 'hsl(var(--card-foreground))',
				// },
			},
			// borderRadius: {
			// 	lg: `var(--radius)`,
			// 	md: `calc(var(--radius) - 2px)`,
			// 	sm: 'calc(var(--radius) - 4px)',
			// },
			// fontFamily: {
			// 	sans: ['var(--font-sans)', ...fontFamily.sans],
			// },
			backgroundColor: {
				primary: 'hsl(255, 100%, 68%)',
				secondary: '#EBEDF2',
				destructive: {
					DEFAULT: '#FF6666',
					foreground: 'hsl(var(--destructive-foreground))',
				},
			},
			keyframes: {
				indeterminate: {
					'0%': {
						transform: 'translateX(-100%) scaleX(0.5)',
					},
					'100%': {
						transform: 'translateX(100%) scaleX(0.5)',
					},
				},
			},
			animation: {
				indeterminate: 'indeterminate 4s infinite ease-in-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};