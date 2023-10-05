// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	routeRules: {
		"/": { redirect: "/about-us" },
	},
	runtimeConfig: {
		BE_API: process.env.BE_API,
		public: {
			BE_API: process.env.BE_API,
			APP: "Premium Trust Group",
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
					content: "summary_large_image",
				},
				{
					name: "twitter:title",
					content: "Your Website Title",
				},
				{
					name: "twitter:description",
					content: "Description of your website",
				},
				{
					name: "twitter:image",
					content: "URL to your image",
				},
				{
					property: "og:title",
					content: "Your Website Title",
				},
				{
					property: "og:description",
					content: "Description of your website",
				},
				{
					property: "og:image",
					content: "URL to your image",
				},
				{
					property: "og:url",
					content: "URL to your website",
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
					href: "https://myawesome-lib.css",
				},
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
