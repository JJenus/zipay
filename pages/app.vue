<script setup lang="ts">
	import { IUser } from "utils/interfaces/IUser";
	import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

	const appConfig = useRuntimeConfig();
	const userId = useAuth().userData.value?.userId;
	const data = userData().data;

	definePageMeta({
		layout: "app",
		middleware: ["auth"],
	});
	const config = useRuntimeConfig().public;
	const currentPage = "App";
	useSeoMeta({
		title: `${currentPage} - ${config.APP}`,
	});

	const getUserData = () => {
		const axiosConfig: AxiosRequestConfig = {
			method: "get",
			url: `${appConfig.public.BE_API}/users/${userId}`,
			timeout: 5000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		axios
			.request<IUser>(axiosConfig)
			.then((response: AxiosResponse<IUser, any>) => {
				data.value = response.data;
				data.value.imgUrl = data.value.imgUrl || "/assets/media/svg/avatars/blank.svg"
				console.log(data.value);
			})
			.catch((error) => {
				console.log(error);
				// useAuth().logout();
			});
	};

	onMounted(() => {
		getUserData();
	});
</script>
<template>
	<NuxtPage />
</template>
