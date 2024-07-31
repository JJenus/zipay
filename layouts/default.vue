<script setup>
	const config = useRuntimeConfig().public;

	const mainNavs = [
		{
			name: "About Us",
			path: "/about-us",
		},
		{
			name: "News",
			path: "/news",
		},
		{
			name: "Investment",
			path: "/investment",
		},
		{
			name: "Our Banking",
			path: "/banking",
		},
		{
			name: "Contact Us",
			path: "/contact-us",
		},
	];
	const loaded = useCookie("reload", { maxAge: 60 * 60 * 24 });
	loaded.value = false;

	if (process.client) {
		KTThemeMode.setMode("light");
	}
	onMounted(() => {});
</script>

<template>
	<div
		id="kt_app_body"
		data-kt-app-header-fixed-mobile="true"
		data-kt-app-sidebar-enabled="true"
		data-kt-app-sidebar-fixed="true"
		data-kt-app-sidebar-push-header="true"
		data-kt-app-sidebar-push-toolbar="true"
		data-kt-app-sidebar-push-footer="true"
		class="app-default w-100 overflow-hidden"
	>
		<!--begin::App-->
		<div class="d-flex flex-column flex-root app-root" id="kt_app_root">
			<!--begin::Page-->
			<div
				class="app-page flex-column flex-column-fluid"
				id="kt_app_page"
			>
				<!--begin::Header-->
				<div
					id="kt_app_header"
					class="app-header d-flex"
					data-kt-sticky="true"
					data-kt-sticky-name="app-header-sticky"
					data-kt-sticky-offset="{default: 'false', lg: '300px'}"
				>
					<!--begin::Header container-->
					<div
						@click="closeDrawer()"
						class="app-container container-fluid d-flex align-items-stretch justify-content-between"
						id="kt_app_header_container"
					>
						<!--begin::Sidebar toggle-->
						<div
							class="d-flex d-lg-none align-items-center ms-n2 me-2"
							title="Show sidebar menu"
						>
							<div
								class="btn btn-icon btn-active-color-primary w-35px h-35px"
								id="kt_activities_toggle"
							>
								<i class="ki-outline ki-abstract-14 fs-2"></i>
							</div>
						</div>
						<!--end::Sidebar toggle-->

						<!--begin::Logo-->
						<div
							class="d-flex d-lg-none align-items-center me-auto"
						>
							<a href="/">
								<img
									alt="Logo"
									src="/assets/media/logos/zipay-logo.png"
									class="theme-light-show h-25px"
								/>
								<img
									alt="Logo"
									src="/assets/media/logos/zipay-logo.png"
									class="theme-dark-show h-25px"
								/>
							</a>
							<span class="fs-3 mt-1 logo-color ms-3 fw-bold">
								{{ config.APP }}
							</span>
						</div>

						<!--begin::Page title-->
						<div
							class="page-title d-none d-lg-flex flex-row justify-content-center me-3 mb-6 mb-lg-0"
						>
							<div
								class="d-flex justify-content-center align-items-center me-auto"
							>
								<a href="/">
									<img
										alt="Logo"
										src="/assets/media/logos/zipay-logo.png"
										class="h-50px"
									/>
								</a>
								<span class="fs-1 text-primary ms-3 fw-bold">
									{{ config.APP }}
								</span>
							</div>
						</div>
						<!--end::Page title-->

						<!--begin::Navbar-->
						<Navbar :main-navs="mainNavs" />
						<!--end::Navbar-->
					</div>
					<!--end::Header container-->
				</div>
				<!--end::Header-->
				<!--begin::Wrapper-->
				<div class="flex-column flex-row-fluid" id="kt_app_wrapper">
					<!--begin::Sidebar-->

					<!--begin::Main-->
					<div class="container mt-18 mt-md-3">
						<!--begin::Content wrapper-->
						<div class="over-flow-hidden">
							<slot class="mt-10" />
						</div>
						<!--end::Content wrapper-->
					</div>
					<!--end:::Main-->
					<!--begin::Footer-->
					<div>
						<Footer />
					</div>
					<!--end::Footer-->
				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Page-->
		</div>
		<!--end::App-->

		<!--end::Drawers-->
		<MobileNav :main-navs="mainNavs" />
		<!--begin::Engage drawers-->

		<!--begin::Scrolltop-->
		<div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
			<i class="ki-outline ki-arrow-up"></i>
		</div>
		<!--end::Scrolltop-->
	</div>
</template>
