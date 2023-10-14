<script setup lang="ts">
	import { IUser } from "utils/interfaces/IUser";
	import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
	import { AuthToken } from "utils/interfaces/AuthToken";

	definePageMeta({
		layout: "app",
	});
	useSeoMeta({
		title: `App - ${useRuntimeConfig().public.APP}`,
	});

	const loaded = useCookie<boolean>("reload", { maxAge: 60 * 60 * 24 });

	if (process.client) {
		if (!loaded.value) {
			loaded.value = true;
			window.location.reload();
		}
	}

	const appConfig = useRuntimeConfig();

	const userId = useAuth().userData.value?.userId;
	const data = userData().data;

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
			.request(axiosConfig)
			.then((response: AxiosResponse<IUser, any>) => {
				data.value = response.data;
				data.value.imgUrl =
					data.value.imgUrl || "/assets/media/svg/avatars/blank.svg";
				// console.log(data.value);
			})
			.catch((error) => {
				const res = error.response.data;
				if (
					res.message.includes("Access denied") ||
					error.response.status === 401
				) {
					useAuth().logout();
				}
				// console.log(error);
			});
	};

	getUserData();

	onBeforeMount(() => {
		const cookie = useCookie<AuthToken | null | undefined>("auth");
		if (cookie.value == null || cookie.value == undefined) {
			infoAlert("Session expired");
			return useAuth().logout();
		}
		// getUserData();
	});
</script>
<template>
	<NuxtPage />
</template>
