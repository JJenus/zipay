<script setup lang="ts">

</script>

<template>
	<!--begin::App-->
	<div
		class="d-flex flex-column flex-root app-root position-relative"
		id="kt_app_root"
	>
		<!--begin::Page-->
		<div class="app-page flex-column flex-column-fluid" id="kt_app_page">
			<!--begin::Header-->
			<AppHeader />
			<!--end::Header-->
			<!--begin::Wrapper-->
			<div
				class="app-wrapper flex-column flex-row-fluid"
				id="kt_app_wrapper"
			>
				<!--begin::Sidebar-->
				<AppSideBar />
				<!--end::Sidebar-->

				<!-- MAIN VIEW -->
				<!--begin::Main-->
				<div
					class="app-main flex-column flex-row-fluid"
					id="kt_app_main"
				>
					<!--begin::Content wrapper-->
					<div class="d-flex flex-column flex-column-fluid">
						<!--begin::Content-->
						<div
							id="kt_app_content"
							class="app-content flex-column-fluid"
						>
							<!--begin::Content container-->
							<div
								id="kt_app_content_container"
								class="app-container container-fluid"
							>
								<slot />
							</div>
							<!--end::Content container-->
						</div>
						<!--end::Content-->
					</div>
					<!--end::Content wrapper-->
				</div>

				<!--begin::aside-->
				<AppAsideBar />
				<!--end::aside-->
			</div>
			<!--end::Wrapper-->
		</div>
		<!--end::Page-->
		<AppMobileNavBar />
	</div>
	<!--end::App-->
</template>
