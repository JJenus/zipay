<script setup lang="ts">
	import Cleave from "cleave.js";

	// Variables
	const moneyInput = ref();
	const cleave = ref();

	const form = ref({
		amount: "",
	});
	const buttons = [
		{
			num: 1,
		},
		{
			num: 2,
		},
		{
			num: 3,
		},
		{
			num: 4,
		},
		{
			num: 5,
		},
		{
			num: 6,
		},
		{
			num: 7,
		},
		{
			num: 8,
		},
		{
			num: 9,
		},
		{
			num: ".",
		},
		{
			num: 0,
		},
	];
	const startDelete = ref(false);

	// Functions

	const addAmount = (num: number | string) => {
		const newValue = form.value.amount + num;
		form.value.amount = newValue;

		cleave.value.setRawValue(newValue);
	};

	const delNum = async () => {
		if (startDelete.value) {
			await new Promise((resolve) => setTimeout(resolve, 160));
			console.log("Del");
			form.value.amount = form.value.amount.slice(0, -1);
			cleave.value.setRawValue(form.value.amount);

			requestAnimationFrame(delNum);
		}
	};

	const stopDel = () => {
		startDelete.value = false;
	};

	const startDel = () => {
		startDelete.value = true;
		delNum(); // Start the function initially
	};

	const enterAmount = (event: any) => {
		const num: string = moneyInput.value.value.replace(/[a-zA-Z]/g, "");
		if (num.includes(".")) {
			const part: string[] = num.split(".");
			form.value.amount = part[0] + "." + part[1].slice(0, 2);
			console.log(form.value.amount);
		}
	};
	const send = () => {};

	onMounted(() => {
		// console.log("Trying luck they say")
		cleave.value = new Cleave(moneyInput.value, {
			numeral: true,
			numeralThousandsGroupStyle: "thousand",
			numeralDecimalMark: ".",
			numeralDecimalScale: 2, // Number of decimal places
		});
	});
</script>

<template>
	<!--begin::Chart widget 36-->
	<div class="card card-flush card-custom border-0 h-md-100 mb-5 mb-lg-10">
		<div class="card-header text-center d-flex justify-content-center p-4">
			<h1 class="text-center h2 pt-4 fw-bold">Transfer</h1>
		</div>
		<!--begin::Card body-->
		<div class="card-body">
			<form @submit.prevent="send" class="px-5 px-md-0 px-xl-15">
				<div class="mb-5">
					<input
						ref="moneyInput"
						@keydown="enterAmount($event)"
						type="text"
						placeholder="0"
						class="form-control money-input fs-2 form-control-lg text-center fw-bold form-control-solid"
					/>
				</div>

				<div class="d-flex flex-row mb-8 justify-content-end w-100">
					<button
						class="btn btn-sm btn-light-primary fw-semibold me-2"
					>
						<i class="ki-solid ki-dollar"></i>
						Request payment
					</button>
					<NuxtLink
						to="/app/scan"
						class="btn btn-sm btn-light-warning fw-semibold me-2"
					>
						<i class="ki-duotone ki-scan-barcode">
							<i class="path1"></i>
							<i class="path2"></i>
							<i class="path3"></i>
							<i class="path4"></i>
							<i class="path5"></i>
							<i class="path6"></i>
							<i class="path7"></i>
							<i class="path8"></i>
						</i>
						Scan
					</NuxtLink>
				</div>

				<div class="row flex-row row-cols-3 justify-content-end">
					<div
						v-for="btn in buttons"
						class="col justify-content-center d-flex mb-4"
					>
						<button
							@click="addAmount(btn.num)"
							class="btn btn-active-light-primary p-0 btn-icon fw-bold fs-2"
						>
							{{ btn.num }}
						</button>
					</div>
					<div class="col justify-content-center d-flex mb-4">
						<button
							@mouseup="stopDel"
							@mousedown="startDel"
							class="btn btn-active-light-danger btn-icon-danger btn-icon fw-bold fs-2"
						>
							<i class="ki-solid ki-arrow-left fs-2x fw-bold"></i>
						</button>
					</div>
				</div>

				<div class="mt-4">
					<button type="button" class="btn btn-primary btn-icon fw-bold fs-2 w-100">
						Next
					</button>
				</div>
			</form>
		</div>
		<!--end::Card body-->
	</div>
	<!--end::Chart widget 36-->
</template>
