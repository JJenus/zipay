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

	const closeDrawer = () => {
		console.log("Clicked");
		const body = document.querySelector(".drawer-overlay");
		if (body !== null) body.click();
		console.log(body);

		// body?.removeAttribute("data-kt-drawer");
		// body?.removeAttribute("data-kt-drawer-app-aside");
		// body?.removeAttribute("data-kt-drawer-activities");
	};

	onMounted(() => {
		KTThemeMode.setMode("light");
	});
</script>

<template>
	<div id="kt_drawer_nav_dismiss_close" class="app-navbar flex-shrink-0 d-none d-lg-flex">
		<!--begin::Quick links-->
		<a
			@click="closeDrawer"
			:href="nav.path"
			v-for="nav in mainNavs"
			class="app-navbar-item ms-1 ms-lg-3"
		>
			<!--begin::Menu wrapper-->
			<a
				data-kt-drawer-dismiss="true"
				role="button"
				class="btn btn-custom py-1 btn-icon-muted btn-active-primary btn-active-color-primaryi"
			>
				<span class="page-heading">{{ nav.name }}</span>
			</a>
		</a>
		<!--end::Quick links-->
	</div>
</template>
