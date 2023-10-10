<template>
	<div
		id="kt_app_header"
		class="app-header d-flex d-lg-none"
		data-kt-sticky="true"
		data-kt-sticky-name="app-header-sticky"
		data-kt-sticky-offset="{default: 'false', lg: '300px'}"
	>
		<!--begin::Header container-->
		<div
			class="app-container container-fluid d-flex align-items-stretch justify-content-between"
			id="kt_app_header_container"
		>
			<!--begin::Logo-->
			<div class="d-flex align-items-center me-auto position-relative">
				<ZipayLogo app-class="logo-color" :classes="'h-35px'" />
			</div>
			<!--end::Logo-->

			<!--begin::Aside toggle-->
			<div
				class="d-flex align-items-center ms-2 me-n3"
				title="Show header menu"
			>
				<!--begin::Notifications-->
				<div
					class="app-navbar-item d-flex justify-content-end flex-grow-1 me-1 d-lg-none"
				>
					<!--begin::Drawer toggle-->
					<div
						class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
						id="kt_activities_toggle"
					>
						<i class="ki-outline ki-notification-bing fs-2x"></i>
					</div>
					<!--end::Drawer toggle-->
				</div>
				<!--end::Notifications-->
				<div
					class="btn btn-icon btn-active-color-primary w-35px h-35px"
					id="kt_app_aside_mobile_toggle"
				>
					<i class="ki-outline ki-text-align-left fs-2 fw-bold"></i>
				</div>
			</div>
			<!--end::Aside toggle-->
		</div>
		<!--end::Header container-->
	</div>
</template>
