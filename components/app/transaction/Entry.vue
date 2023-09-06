<script setup lang="ts">
	const props = defineProps({
		showDetails: {
			type: Boolean,
			required: false,
			default: false,
		},
	});

	const show = ref(false);

	const toggleShowData = () => {
		if (props.showDetails) show.value = !show.value;
	};
</script>
<template>
	<div></div>
	<!--begin::Item-->
	<div class="d-flex flex-stack mb-6" @click="toggleShowData">
		<!--begin::Symbol-->
		<div class="symbol symbol-circle symbol-45px me-4">
			<img src="~assets/media/avatars/300-2.jpg" class="d-none" alt="" />
			<i class="ki-outline ki-check-circle fs-1 text-success"></i>
		</div>
		<!--end::Symbol-->

		<!--begin::Section-->
		<div class="d-flex align-items-center flex-row-fluid flex-wrap">
			<!--begin:Author-->
			<div class="flex-grow-1 me-2">
				<a
					role="button"
					class="text-hover-primary text-gray-800 fs-5 fw-bolder"
					style="color: #28346c"
					>Darlene Robertson</a
				>

				<span class="text-gray-400 fw-semibold d-block fs-n6">
					<span class="text-primary">Debit</span> Today 12:19 PM
				</span>
			</div>
			<!--end:Author-->

			<div class="d-flex flex-column text-end">
				<!--begin::Info-->
				<span class="text-gray-800 fw-bold fs-6">$9,763</span>
				<!--end::Info-->
				<span class="text-gray-400">Paypal</span>
			</div>
			<div v-if="showDetails" class="ms-2 ">
				<i
					:class="show ? 'ki-up-square' : 'ki-down-square'"
					class="ki-outline mt-5 mt-lg-1 text-primary fs-2x"
				>
				</i>
			</div>
		</div>
		<!--end::Section-->
	</div>
	<!--end::Item-->

	<div v-if="show" class="mb-10 px-8 px-md-15 px-lg-20">
		<div class="table-responsive border-bottom w-100">
			<table class="table fs-6">
				<tbody>
					<tr>
						<td class="fw-b6old">Bank</td>
						<td class="text-end">Barclays Bank</td>
					</tr>
					<tr>
						<td class="fw-b6old">Name</td>
						<td class="text-end">Oxford Keller</td>
					</tr>
					<tr>
						<td class="fw-bol6d">Account</td>
						<td class="text-end">1890384709</td>
					</tr>
					<tr>
						<td>
							<span class="badge bg-success fw-bold">Status</span>
						</td>
						<td class="text-end text-success">Completed</td>
					</tr>
					<tr>
						<td class="fw-bol6d">Time</td>
						<td class="text-end">19/12/2023 12:19 AM</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
