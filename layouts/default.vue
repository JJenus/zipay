<script setup>
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

	// onMounted(()=>{
	//     KTThemeMode.setMode("light");
	// })
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
								id="kt_app_sidebar_mobile_toggle"
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
						</div>
						<!--end::Logo-->

						<!--begin::Page title-->
						<div
							data-kt-swapper="true"
							data-kt-swapper-mode="{default: 'prepend', lg: 'prepend'}"
							data-kt-swapper-parent="{default: '#kt_app_content_container', lg: '#kt_app_header_container'}"
							class="page-title d-flex flex-row justify-content-center me-3 mb-6 mb-lg-0"
						>
							<div class="d-flex align-items-center me-auto">
								<a href="/">
									<img
										alt="Logo"
										src="/assets/media/logos/zipay-logo.png"
										class="theme-light-show h-60px"
									/>
									<img
										alt="Logo"
										src="/assets/media/logos/zipay-logo.png"
										class="theme-dark-show h-60px"
									/>
								</a>
							</div>
						</div>
						<!--end::Page title-->

						<!--begin::Navbar-->
						<Navbar />
						<!--end::Navbar-->
					</div>
					<!--end::Header container-->
				</div>
				<!--end::Header-->
				<!--begin::Wrapper-->
				<div class="flex-column flex-row-fluid" id="kt_app_wrapper">
					<!--begin::Sidebar-->
					<div
						id="kt_app_sidebar"
						class="app-sidebar flex-column d-lg-none"
						data-kt-drawer="true"
						data-kt-drawer-name="app-sidebar"
						data-kt-drawer-activate="{default: true, lg: true}"
						data-kt-drawer-overlay="true"
						data-kt-drawer-width="250px"
						data-kt-drawer-direction="start"
						data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
					>
						<!--begin::sidebar menu-->
						<div
							class="app-sidebar-menu overflow-hidden flex-column-fluid"
						>
							<div
								class="d-flex d-lg-none mt-5 justify-content-center align-items-center"
							>
								<a href="/">
									<img
										alt="Logo"
										src="/assets/media/logos/zipay-logo.png"
										class="h-50px"
									/>
								</a>
							</div>
							<!--begin::Menu wrapper-->
							<div
								id="kt_app_sidebar_menu_wrapper"
								class="app-sidebar-wrapper hover-scroll-y my-5 mx-3 mx-xl-11"
								data-kt-scroll="true"
								data-kt-scroll-activate="true"
								data-kt-scroll-height="auto"
								data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
								data-kt-scroll-wrappers="#kt_app_sidebar_menu"
								data-kt-scroll-offset="5px"
							>
								<!--begin::Menu-->
								<div
									class="menu menu-column menu-rounded menu-sub-indention menu-active-bg menu- px-3"
									id="#kt_app_sidebar_menu"
									data-kt-menu="true"
									data-kt-menu-expand="false"
								>
									<NuxtLink
										v-for="nav in mainNavs"
										:to="nav.path"
										data-kt-menu-trigger="click"
										class="menu-item"
									>
										<!--begin:Menu link--><span
											class="menu-link"
										>
											<span class="menu-title">
												{{ nav.name }}
											</span>
										</span>
										<!--end:Menu link-->
									</NuxtLink>
								</div>
								<!--end::Menu-->
							</div>
							<!--end::Menu wrapper-->
						</div>
						<!--end::sidebar menu-->
					</div>
					<!--end::Sidebar-->

					<!--begin::Main-->
					<div class="container pt-15 pt-md-0">
						<!--begin::Content wrapper-->
						<slot />
						<!--end::Content wrapper-->

						<!--begin::Footer-->
						<div id="kt_app_footer" class="app-footer">
							<!--begin::Footer container-->
							<div
								class="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3"
							>
								<!--begin::Copyright-->
								<div class="text-dark order-2 order-md-1">
									<span class="text-muted fw-semibold me-1"
										>2023&copy;</span
									>
									<a
										href="https://keenthemes.com/"
										target="_blank"
										class="text-gray-800 text-hover-primary"
										>Keenthemes</a
									>
								</div>
								<!--end::Copyright-->

								<!--begin::Menu-->
								<ul
									class="menu menu-gray-600 menu-hover-primary fw-semibold order-1"
								>
									<li class="menu-item">
										<a
											href="https://keenthemes.com/"
											target="_blank"
											class="menu-link px-2"
											>About</a
										>
									</li>

									<li class="menu-item">
										<a
											href="https://devs.keenthemes.com/"
											target="_blank"
											class="menu-link px-2"
											>Support</a
										>
									</li>

									<li class="menu-item">
										<a
											href="https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/"
											target="_blank"
											class="menu-link px-2"
											>Purchase</a
										>
									</li>
								</ul>
								<!--end::Menu-->
							</div>
							<!--end::Footer container-->
						</div>
						<!--end::Footer-->
					</div>
					<!--end:::Main-->
				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Page-->
		</div>
		<!--end::App-->

		<!--end::Drawers-->
		<!--begin::Engage drawers-->

		<!--begin::Scrolltop-->
		<div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
			<i class="ki-outline ki-arrow-up"></i>
		</div>
		<!--end::Scrolltop-->
	</div>
</template>
