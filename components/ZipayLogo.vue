<script setup lang="ts">
	const props = defineProps({
		classes: {
			type: String,
			required: false,
		},
		appClass: {
			type: String,
			required: false,
		},
		appClassDark: {
			type: String,
			required: false,
		},
	});

	const config = useRuntimeConfig().public;
	// const currentPage = "App";
	// useSeoMeta({
	// 	title: `${currentPage} - ${config.APP}`,
	// });
</script>

<template>
	<NuxtLink
		to="/"
		class="d-flex align-items-center justify-content-center position-relative"
	>
		<img
			alt="Logo"
			src="/assets/media/logos/zipay-logo.png"
			:class="classes"
			class="me-4"
		/>
		<div class="mt-3 h1">
			<span
				class="zipay-logo logo-color theme-light-show"
				:class="appClass"
				>{{ config.APP }}</span
			>
			<span
				:class="appClassDark"
				class="text-warning zipay-logo theme-dark-show"
				>{{ config.APP }}</span
			>
		</div>
	</NuxtLink>
</template>
