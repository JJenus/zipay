// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	runtimeConfig:{
		BE_API: process.env.BE_API,
		public: {
			BE_API: process.env.BE_API,
		}
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
				// <meta name="viewport" content="width=device-width, initial-scale=1">
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
			],
			script: [
				// <script src="https://myawesome-lib.js"></script>
				{ src: "/assets/plugins/global/plugins.bundle.js" },
				{ src: "/assets/js/scripts.bundle.js" },
			],
			link: [
				// <link rel="stylesheet" href="https://myawesome-lib.css">
				{
					rel: "stylesheet",
					href: "/assets/plugins/global/plugins.bundle.css",
				},
				{ rel: "stylesheet", href: "/assets/css/style.bundle.css" },
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
