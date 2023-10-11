<script setup lang="ts">
	const users = userData().users;
	const searchText = ref("");
	const active = userData().active;

	const search = (area: string, input: string) => {
		const rjx = new RegExp(input, "i");
		const showAble = document.querySelectorAll(area);
		showAble.forEach((e) => {
			if (!rjx.test(e.innerHTML)) {
				e.classList.add("d-none");
			} else {
				e.classList.remove("d-none");
			}
		});
	};

	const findUser = () => {
		search(".user", searchText.value);
	};
	onMounted(() => {});
</script>

<template>
	<div class="h-md-100">
		<!--begin::Chart widget 36-->
		<div v-if="!active" class="">
			<div
				class="card card-flush card-custom border-0 h-md-100 mb-5 mb-lg-10"
			>
				<!--begin::Card body-->
				<div class="card-body">
					<div
						class="d-block d-flex flex-column align-items-center justify-content-center"
					>
						<h1 class="text-center h2 pb-2 fw-bold">Users</h1>
						<div
							class="position-relative my-1"
							bis_skin_checked="1"
						>
							<i
								class="ki-outline ki-magnifier fs-2 position-absolute top-50 translate-middle-y ms-4"
							></i>
							<input
								@keyup="findUser()"
								type="text"
								data-kt-table-widget-4="search"
								class="form-control w-150px fs-7 ps-12"
								placeholder="Search"
								v-model="searchText"
							/>
						</div>
					</div>
				</div>
				<!--end::Card body-->
			</div>
			<!--end::Chart widget 36-->
			<div class="row g-6 mb-6 g-xl-9 mb-xl-9">
				<div
					v-for="user in users"
					class="col-md-6"
					bis_skin_checked="1"
				>
					<AdminUsersUser :user="user" />
				</div>
			</div>
		</div>

		<AdminUser v-else />
	</div>
</template>
