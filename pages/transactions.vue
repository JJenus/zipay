<template>
	<!--begin::Engage widget 12-->
	<div class="card card-custom border-0 min-h-500px h-md-100 mb-5 mb-lg-10">
		<!--begin::Body-->
		<div class="card-body ps-xl-15">
			<h1 class="text-center fs-2x pt-4 fw-bold mb-8">Transactions</h1>
			<div class="d-flex flex-row justify-content-between mb-5">
				<div>
					<!--begin::Title-->
					<div class="card-title mb-2">
						<div
							class="widget-title fw-bold fs-4 d-flex align-items-center"
						>
							<span>Received</span>

							<i
								class="ki-duotone ki-double-left fs-1 text-success ms-2"
							>
								<i class="path1"></i>
								<i class="path2"></i>
							</i>
						</div>
					</div>
					<!--end::Title-->

					<!--begin::Info-->
					<div class="d-flex align-items-center mb-8">
						<!--begin::Currency-->
						<span
							class="fs-3 fw-semibold text-gray-400 me-1 align-self-start"
							>$</span
						>
						<!--end::Currency-->

						<!--begin::Amount-->
						<span class="page-title fs-2 fw-bold me-2 lh-1 ls-n2"
							>4,684.00</span
						>
						<!--end::Amount-->
					</div>
				</div>
				<div>
					<!--begin::Title-->
					<div class="card-title mb-2">
						<div
							class="widget-title fw-bold fs-4 d-flex align-items-center"
						>
							<i
								class="ki-duotone ki-double-right fs-1 text-danger me-2"
							>
								<i class="path1"></i>
								<i class="path2"></i>
							</i>
							<span>Sent</span>
						</div>
					</div>
					<!--end::Title-->

					<!--begin::Info-->
					<div class="d-flex align-items-center mb-8">
						<!--begin::Currency-->
						<span
							class="fs-3 fw-semibold text-gray-400 me-1 align-self-start"
							>$</span
						>
						<!--end::Currency-->

						<!--begin::Amount-->
						<span class="page-title fs-2 fw-bold me-2 lh-1 ls-n2"
							>14,684.00</span
						>
						<!--end::Amount-->
					</div>
				</div>
			</div>

			<div class="d-nonie">
				<AppTransactionEntry :showDetails="true" v-for="i in 5" />
			</div>
		</div>
		<!--end::Body-->
	</div>
	<!--end::Engage widget 12-->
</template>
