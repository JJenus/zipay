<script setup lang="ts">
	import { IUser } from "utils/interfaces/IUser";
	import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

	definePageMeta({
		layout: "adminlayout",
		middleware: ["admin-auth"],
	});

	const loaded = useCookie<boolean>("reload", { maxAge: 60 * 60 * 24 });

	if (process.client) {
		if (!loaded.value) {
			window.location.reload();
			loaded.value = true;
		}
	}
	const appConfig = useRuntimeConfig();
	const userId = useAuth().userData.value?.userId;
	const data = userData().data;
	const users = userData().users;

	const config = useRuntimeConfig().public;
	const currentPage = "Admin";

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
				const data = error.response.data;
				if (
					data.message.includes("Access denied") ||
					error.response.status === 401
				) {
					console.log("Access denied");
				}
				// useAuth().logout();
			});
	};

	const getUsers = () => {
		if (!useAuth().userData) {
			navigateTo("/sign-in");
		}
		const axiosConfig: AxiosRequestConfig = {
			method: "get",
			url: `${appConfig.public.BE_API}/users`,
			timeout: 20000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		axios
			.request(axiosConfig)
			.then((response: AxiosResponse<IUser[], any>) => {
				users.value = response.data;
				console.log(users.value);
			})
			.catch((error) => {
				// console.log(error);
				const data = error.response.data;
				if (
					data.message.includes("Access denied") ||
					error.response.status === 401
				) {
					// console.log("Access denied");
					infoAlert("Session expired")
					useAuth().logout();
				}
			});
	};

	onBeforeMount(() => {
		getUserData();
		getUsers();
	});
</script>
<template>
	<NuxtPage />
</template>
