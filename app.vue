<script setup>
	if (process.client) {
		window.$crisp = [];
		// window.CRISP_WEBSITE_ID = "ab46de5e-8557-4883-b0c9-00eb75f2f17e";
		(function () {
			const d = document;
			const s = d.createElement("script");
			s.src = "//code.tidio.co/4cbfxicxozzxvxulxoiqsqvv4h1tjbiz.js";
			s.async = true;
			d.getElementsByTagName("head")[0].appendChild(s);
		})();

		const auth = useAuth();

		const interval = setInterval(() => {
			if (auth.isAuthenticated()) {
				const user = auth.userData.value.user;
				// $crisp.push(["set", "user:nickname", [user.name]]);
				// $crisp.push(["set", "user:email", [user.email]]);

				if (window.tidioChatApi) {
					window.tidioChatApi.setVisitorData({
						name: user.name,
						email: user.email,
					});

					clearInterval(interval);
				}
			}
		}, 2000);
	}
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Truculenta:opsz,wght@12..72,800&display=swap");

	/* 
	font-family: 'Lobster', cursive;
font-family: 'Truculenta', sans-serif;
	 */
	.logo-color {
		columns: #226b8d;
	}
	.zipay-logo-dark {
		color: rgb(255, 93, 83);
	}

	@media (max-width: 765px) {
		.mobile-aside {
			padding-bottom: 60px !important;
		}
	}

	/* Remove up and down arrows (spinners) from number input */
	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		appearance: none;
		margin: 0;
	}
</style>
