<script setup>
	import axios from "axios";
	import currency from "currency.js";

	const appConfig = useRuntimeConfig();

	const balance = ref({
		id: null,
		userId: "49d5ce8e-5273-44b9-b449-7a3ce278efb5",
		currencyId: "USD",
		amount: null,
		status: "active",
		createdAt: "2023-10-04T15:56:16.000Z",
		updatedAt: "2023-10-04T15:56:16.000Z",
		deletedAt: null,
	});
	const userId = useAuth().userData.value?.userId;

	const fetchBalance = () => {
		const axiosConfig = {
			method: "get",
			url: `${appConfig.public.BE_API}/account/${userId}`,
			timeout: 15000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		axios
			.request(axiosConfig)
			.then((response) => {
				const data = response.data;
				balance.value = data;
				// console.log(data);
			})
			.catch((error) => {
				// console.log(error);
			});
	};

	const getBalance = () => {
		let cAmount = balance.value.amount;
		if (!cAmount) {
			cAmount = 0;
		}
		const amount = currency(cAmount, {
			symbol: "",
		}).format();
		return amount;
	};

	onBeforeMount(() => {
		fetchBalance();
	});
</script>

<template>
	<div>
		<!--begin::Title-->
		<div class="card-title mb-7 d-none d-lg-block">
			<span class="widget-title fw-bold fs-4">
				My Balance
				<i class="ki-outline ki-question-2 fs-3 text-primary ms-1"></i>
			</span>
		</div>
		<!--end::Title-->

		<!--begin::Info-->
		<div class="d-flex align-items-center mb-8">
			<!--begin::Currency-->
			<span class="fs-3 fw-semibold text-gray-400 me-1 align-self-start"
				>$</span
			>
			<!--end::Currency-->

			<!--begin::Amount-->
			<span
				v-if="balance.amount !== null"
				class="page-title fs-2tx fw-bold me-2 lh-1 ls-n2"
				>{{ getBalance() }}</span
			>
			<span
				v-else
				class="spinner-border spinner-border-sm text-muted"
			></span>

			<!--end::Amount-->
		</div>
		<!--end::Info-->

		<!--begin::Text-->
		<div class="widget-desc fw-bold mb-8 d-none">
			<a href="#" class="text-success me-2">+6.72%</a>
			$835.32 vs Last Week
		</div>
		<!--end::Text-->

		<!--begin::Action-->
		<div class="mb-2 d-flex">
			<a
				href="#"
				class="btn btn-sm btn-danger fw-semibold me-2"
				style="background-color: #ff5d53"
				data-bs-toggle="modal"
				data-bs-target="#kt_modal_upgrade_plan"
			>
				Top Up Balance
			</a>

			<!--begin::Action-->
			<NuxtLink
				to="/app/transfer"
				class="btn btn-sm btn-primary fw-semibold me-2"
			>
				Transfer
			</NuxtLink>
		</div>

		<!-- data-bs-toggle="modal"
				data-bs-target="#kt_modal_upgrade_plan" -->
		<!--end::Action-->
	</div>
</template>
