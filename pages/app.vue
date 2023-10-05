<script setup lang="ts">
	definePageMeta({
		layout: "app",
		middleware: ["auth"],
	});
	const config = useRuntimeConfig().public;
	const currentPage = "App";
	useSeoMeta({
		title: `${currentPage} - ${config.APP}`,
	});
</script>
<template>
	<NuxtPage />
</template>
