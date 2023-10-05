<script setup lang="ts"></script>

<template>
	<div
		id="kt_app_sidebar"
		class="app-sidebar d-none d-lg-flex flex-column"
		data-kt-drawer="true"
		data-kt-drawer-name="app-sidebar"
		data-kt-drawer-activate="{default: true, lg: false}"
		data-kt-drawer-overlay="true"
		data-kt-drawer-width="250px"
		data-kt-drawer-direction="start"
		data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
	>
		<!--begin::Logo-->
		<div
			class="app-sidebar-logo d-none mx-auto pt-7 pt-xl-18 mb-xl-9 d-lg-flex align-items-center"
			id="kt_app_sidebar_logo"
		>
			<!--begin::Logo image-->
			<a href="/">
				<img
					alt="Logo"
					src="/assets/media/logos/zipay-logo.png"
					class="h-70px"
				/>
			</a>
			<div class="mt-5 ms-n3 m-0 p-0 fs-3x">
				<span class="zipay-logo theme-light-show">pay</span>
				<span class="zipay-logo-dark zipay-logo theme-dark-show"
					>pay</span
				>
			</div>
			<!--end::Logo image-->
		</div>
		<!--end::Logo-->
		<!--begin::sidebar menu-->
		<div class="app-sidebar-menu overflow-hidden flex-column-fluid">
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
					<!--begin:Menu item-->
					<NuxtLink
						v-for="nav in navs"
						:to="nav.dir"
						:class="nav.name == 'Scan' ? 'd-none' : ''"
						data-kt-menu-trigger="click"
						class="menu-item"
					>
						<!--begin:Menu link-->
						<span class="menu-link">
							<span class="menu-icon">
								<i :class="nav.icon" class="fs-2x">
									<i
										v-for="path in nav.paths"
										:class="path"
									></i>
								</i>
							</span>
							<span class="menu-title">{{ nav.name }}</span>
						</span>
					</NuxtLink>
					<!--end:Menu item--><!--begin:Menu item-->
				</div>
				<!--end::Menu-->
			</div>
			<!--end::Menu wrapper-->
		</div>
		<!--end::sidebar menu-->
		<!--begin::Footer-->
		<div
			class="app-sidebar-footer flex-column-auto m-9"
			id="kt_app_sidebar_footer"
		>
			<!--begin::Card-->
			<div class="card card-custom-2 bg-light-success border-0">
				<!--begin::Body-->
				<div class="card-body text-center">
					<!--begin::Title-->
					<h4 class="text-gray-800 text-center fw-bold mb-9">
						Create a ticket <br />
						enjoy awesome support
					</h4>
					<!--end::Title-->

					<!--begin::Action-->
					<a
						href="#"
						class="btn btn-sm btn-primary"
						data-bs-toggle="modal"
						data-bs-target="#kt_modal_upgrade_plan"
					>
						Devs Forum
					</a>
					<!--begin::Action-->
				</div>
				<!--end::Body-->
			</div>
			<!--end::Card-->
		</div>
		<!--end::Footer-->
	</div>
</template>
