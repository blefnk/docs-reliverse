// import colors from "tailwindcss/colors";

import starlightPlugin from "@astrojs/starlight-tailwind";

const accent = {
	200: "#b3c7ff",
	600: "#364bff",
	900: "#182775",
	950: "#131e4f",
};
const gray = {
	100: "#f5f6f8",
	200: "#eceef2",
	300: "#c0c2c7",
	400: "#888b96",
	500: "#545861",
	700: "#353841",
	800: "#24272f",
	900: "#17181c",
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				// Preferred accent color. Indigo is closest to Starlight’s defaults.
				// accent: colors.indigo,
				// Preferred gray scale. Zinc is closest to Starlight’s defaults.
				// gray: colors.zinc,
				accent,
				gray,

				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				// accent: {
				// 	DEFAULT: "hsl(var(--accent))",
				// 	foreground: "hsl(var(--accent-foreground))",
				// },
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))",
				},
			},
			fontFamily: {
				// Preferred text font. Starlight uses a system font stack by default.
				// sans: ['"Atkinson Hyperlegible"'],
				// Preferred code font. Starlight uses system monospace fonts by default.
				// mono: ['"IBM Plex Mono"'],
			},
		},
	},
	plugins: [starlightPlugin()],
};
