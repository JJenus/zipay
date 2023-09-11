<script setup lang="ts">
	const appLayout = "applayout";
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Truculenta:opsz,wght@12..72,800&display=swap");
	.zipay-logo {
		font-family: "Truculenta", sans-serif;
		color: #2178f3;
	}
	.zipay-logo-dark {
		color: #fff !important;
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
