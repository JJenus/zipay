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
	@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Truculenta:opsz,wght@12..72,800&display=swap");
	
	/* 
	font-family: 'Lobster', cursive;
font-family: 'Truculenta', sans-serif;
	 */
	.zipay-logo {
		/* font-family: 'Lobster', cursive; */
		/* color: rgb(75, 91, 166); #2178f3; */
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
