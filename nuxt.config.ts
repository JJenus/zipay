// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [],
	ssr: true,
	devtools: { enabled: true },
	routeRules: {
		"/": { redirect: "/about-us" },
	},
	runtimeConfig: {
		BE_API: process.env.BE_API || "https://fibre.alwaysdata.net/api",
		public: {
			BE_API: process.env.BE_API || "https://fibre.alwaysdata.net/api",
			APP: "Elisa Finance",
		},
	},
	devServer: {
		https: {
			key: "./server.key",
			cert: "./server.crt",
		},
	},
	app: {
		head: {
			meta: [
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					name: "twitter:card",
					content:
						"Top international financial services provided to be accessible to all",
				},
				{
					name: "twitter:title",
					content: "Elisa Finance",
				},
				{
					name: "twitter:description",
					content:
						"Top international financial services provided to be accessible to all",
				},
				{
					name: "twitter:image",
					content:
						"https://www.elisafinance.com/assets/media/elisa-logo.png",
				},
				{
					property: "og:title",
					content: "Elisa Finance",
				},
				{
					property: "og:description",
					content:
						"Top international financial services provided to be accessible to all",
				},
				{
					property: "og:image",
					content:
						"https://www.elisafinance.com/assets/media/elisa-logo.png",
				},
				{
					property: "og:url",
					content: "https://www.elisafinance.com",
				},
			],
			script: [
				// <script src="https://myawesome-lib.js"></script>
				{ src: "/assets/plugins/global/plugins.bundle.js" },
				{ src: "/assets/js/scripts.bundle.js" },
				{
					src: "/assets/plugins/custom/fslightbox/fslightbox.bundle.js",
				},
				{
					src: "/assets/plugins/custom/datatables/datatables.bundle.js",
				},
			],

			link: [
				{
					rel: "stylesheet",
					href: "/assets/plugins/global/plugins.bundle.css",
				},
				{
					rel: "stylesheet",
					href: "/assets/css/style.bundle.css",
				},
				{
					rel: "icon",
					type: "image/x-icon",
					href: "/assets/media/favicon/favicon.ico",
				},
				{
					rel: "icon",
					sizes: "16x16",
					type: "image/png",
					href: "/assets/media/favicon/favicon-16x16.png",
				},
				{
					rel: "icon",
					sizes: "192x192",
					type: "image/png",
					href: "/assets/media/favicon/android-chrome-192x192.png",
				},
				{
					rel: "icon",
					sizes: "512x512",
					type: "image/png",
					href: "/assets/media/favicon/android-chrome-512x512.png",
				},
				{
					rel: "apple-touch-icon",
					href: "/assets/media/favicon/apple-touch-icon.png",
				},
				{
					rel: "manifest",
					href: "/assets/media/favicon/site.webmanifest",
				},
			],

			// please note that this is an area that is likely to change
			style: [
				// <style type="text/css">:root { color: red }</style>
				// { children: ":root { color: red }" },
			],
			noscript: [
				// <noscript>JavaScript is required</noscript>
				{ children: "JavaScript is required" },
			],
		},
	},
});
