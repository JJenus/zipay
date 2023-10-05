<script setup lang="ts">
	const props = defineProps({
		classes: {
			type: String,
			required: false,
		},
	});
</script>

<template>
	<NuxtLink to="/" class="d-flex align-items-center position-relative">
		<img
			alt="Logo"
			src="/assets/media/logos/zipay-logo.png"
			:class="classes"
		/>
		<div class="mt-5 ms-n1 h1">
			<span class="zipay-logo theme-light-show">pay</span>
			<span class="zipay-logo zipay-logo-dark theme-dark-show">pay</span>
		</div>
	</NuxtLink>
</template>
