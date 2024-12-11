import { defineConfig } from "astro/config";

import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://docs.reliverse.org",
	integrations: [
		starlight({
			title: "Relidocs: Reliverse Docs",
			customCss: ["./src/styles/globals.css"],
			defaultLocale: "root",
			locales: {
				root: {
					label: "English",
					lang: "en",
				},
				pl: {
					label: "Polish (Polski)",
				},
				uk: {
					label: "Ukrainian (Українська)",
				},
			},
			social: {
				github: "https://github.com/blefnk/relidocs",
				discord: "https://discord.gg/Pb8uKbwpsJ",
				twitter: "https://x.com/blefnk",
			},
			sidebar: [
				{
					label: "👋 Introduction",
					collapsed: true,
					autogenerate: { directory: "intro", collapsed: true },
				},
				{
					label: "🧰 Reliverse CLI and Libraries",
					collapsed: true,
					autogenerate: { directory: "reliverse", collapsed: true },
				},
				{
					label: "✨ Relivator Next.js Template",
					collapsed: false,
					autogenerate: { directory: "relivator", collapsed: true },
				},
			],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
	],
	redirects: {
		"/env/": "/relivator/env/",
		"/en/env/": "/relivator/env/",
	},
});
