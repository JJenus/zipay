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

    onMounted(()=>{
        KTThemeMode.setMode("light");
    })
</script>

<template>
	<div class="app-navbar flex-shrink-0 d-none d-lg-flex" id="kt_app_aside_navbar">
        
		<!--begin::Quick links-->
		<NuxtLink :to="nav.path" v-for="nav in mainNavs" class="app-navbar-item ms-1 ms-lg-3">
			<!--begin::Menu wrapper-->
			<div
				class="btn btn-custom py-1 btn-icon-muted btn-active-primary btn-active-color-primaryi "
			>
				<span class="page-heading">{{ nav.name }}</span>
			</div>
		</NuxtLink>
		<!--end::Quick links-->
	</div>
</template>
