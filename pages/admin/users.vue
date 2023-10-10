<script setup lang="ts">
	onMounted(() => {});
</script>

<template>
	<div>
		<!--begin::Chart widget 36-->
		<div
			class="card card-flush card-custom border-0 h-md-100 mb-5 mb-lg-10"
		>
			<!--begin::Card body-->
			<div class="card-body">
				<div
					class="d-block d-flex flex-column align-items-center justify-content-center"
				>
					<h1 class="text-center h2 pb-2 fw-bold">Users</h1>
					<div class="position-relative my-1" bis_skin_checked="1">
						<i
							class="ki-outline ki-magnifier fs-2 position-absolute top-50 translate-middle-y ms-4"
						></i>
						<input
							type="text"
							data-kt-table-widget-4="search"
							class="form-control w-150px fs-7 ps-12"
							placeholder="Search"
						/>
					</div>
				</div>
			</div>
			<!--end::Card body-->
		</div>
		<!--end::Chart widget 36-->
		<div class="row g-6 mb-6 g-xl-9 mb-xl-9">
			<div class="col-md-6" bis_skin_checked="1">
				<!--begin::Card-->
				<div class="card" bis_skin_checked="1">
					<!--begin::Card body-->
					<div
						class="card-body d-flex flex-center flex-column py-9 px-5"
						bis_skin_checked="1"
					>
						<!--begin::Avatar-->
						<div
							class="symbol symbol-65px symbol-circle mb-5"
							bis_skin_checked="1"
						>
							<img
								src="/assets/media/avatars/300-11.jpg"
								alt="image"
							/>
							<div
								class="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-body h-15px w-15px ms-n3 mt-n3"
								bis_skin_checked="1"
							></div>
						</div>
						<!--end::Avatar-->

						<!--begin::Name-->
						<a
							href="#"
							class="fs-4 text-gray-800 text-hover-primary fw-bold mb-0"
							>Patric Watson</a
						>
						<!--end::Name-->

						<!--begin::Position-->
						<div
							class="fw-semibold text-gray-400 mb-6"
							bis_skin_checked="1"
						>
							epic@mail.com
						</div>
						<!--end::Position-->

						<!--begin::Info-->
						<div
							class="d-flex flex-center flex-wrap mb-5"
							bis_skin_checked="1"
						>
							<!--begin::Stats-->
							<div
								class="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3"
								bis_skin_checked="1"
							>
								<div
									class="fs-6 fw-bold text-gray-700"
									bis_skin_checked="1"
								>
									$14,560
								</div>
								<div
									class="fw-semibold text-gray-400"
									bis_skin_checked="1"
								>
									Balance
								</div>
							</div>
							<!--end::Stats-->
						</div>
						<!--end::Info-->

						<!--begin::Follow-->
						<button
							type="button"
							class="btn btn-sm btn-light-primary btn-flex btn-center"
							data-kt-follow-btn="true"
						>
							<i class="ki-duotone ki-user-square">
								<span class="path1"></span>
								<span class="path2"></span>
								<span class="path3"></span>
							</i>

							<!--begin::Indicator label-->
							<span class="mt-0">View</span>
							<!--end::Indicator label-->
							<!--end::Indicator progress-->
						</button>
						<!--end::Follow-->
					</div>
					<!--begin::Card body-->
				</div>
				<!--begin::Card-->
			</div>
		</div>
	</div>
</template>
