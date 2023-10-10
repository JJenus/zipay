<script setup lang="ts">
	import { IUser } from "utils/interfaces/IUser";
	import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

	definePageMeta({
		layout: "app",
		middleware: ["auth"],
	});
	
	const appConfig = useRuntimeConfig();
	const userId = useAuth().userData.value?.userId;
	const data = userData().data;

	

	const config = useRuntimeConfig().public;
	const currentPage = "App";
	
	useSeoMeta({
		title: `${currentPage} - ${config.APP}`,
	});

	const getUserData = () => {
		if (!useAuth().userData) {
			navigateTo("/sign-in");
		}
		const axiosConfig: AxiosRequestConfig = {
			method: "get",
			url: `${appConfig.public.BE_API}/users/${userId}`,
			timeout: 15000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		axios
			.request<IUser>(axiosConfig)
			.then((response: AxiosResponse<IUser, any>) => {
				data.value = response.data;
				data.value.imgUrl =
					data.value.imgUrl || "/assets/media/svg/avatars/blank.svg";
				// console.log(data.value);
			})
			.catch((error) => {
				// console.log(error);
				// useAuth().logout();
			});
	};

	getUserData();

	onBeforeMount(() => {
		// getUserData();
	});
</script>
<template>
	<NuxtPage />
</template>
