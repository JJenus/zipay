<script setup>
	const config = useRuntimeConfig().public;
</script>

<template>
	<!--begin::Footer container-->
	<!-- <input
		type="text"
		class="form-control fs-4 py-4 ps-14 text-gray-700 placeholder-gray-400 mw-500px"
		name="search"
		value=""
		placeholder="Ask a question"
	/> -->
	<div
		data-bs-theme="light"
		style="background-color: #1c325e"
		class="app-container text-light container-fluid d-flex align-items-center flex-column flex-md-row flex-center flex-md-stack pt-10 mt-10 py-3"
	>
		<!--begin::Copyright-->
		<div class="text-dark order-2w order-md-1w pb-8">
			<div
				class="d-flex flex-column justify-content-center align-items-center mb-6"
			>
				<div class="d-flex flex-column justify-content-center mb-3">
					<a href="/">
						<img
							alt="Logo"
							src="/assets/media/logos/zipay-logo.png"
							class="h-50px"
						/>
					</a>
				</div>
				<span class="fs-1 text-danger ms-3 fw-bold">
					{{ config.APP }}
				</span>
			</div>
			<p class="text-light">
				Our business and philanthropy are helping build more
				sustainable, diverse and equitable communities around the world.
			</p>
			<!--end::Page title-->
		</div>
		<!--end::Copyright-->

		<!--begin::Menu-->
		<ul class="menu menu-gray-600 menu-hover-primary fw-semibold order-1w">
			<li class="menu-item">
				<a target="_blank" class="menu-link px-2"
					><span class="text-muted fw-semibold me-1"
						>2023&copy;</span
					></a
				>
			</li>
			<li class="menu-item">
				<a target="_blank" class="menu-link px-2">About</a>
			</li>

			<li class="menu-item">
				<a class="menu-link px-2">Support</a>
			</li>

			<li class="menu-item">
				<a target="_blank" class="menu-link px-2"
					>Term and conditions</a
				>
			</li>
		</ul>
		<!--end::Menu-->
	</div>
	<!--end::Footer container-->
</template>
