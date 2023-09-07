<script setup lang="ts">
	const appLayout = "applayout";
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
		data-kt-app-aside-enabled="true"
		data-kt-app-aside-fixed="true"
		data-kt-app-aside-push-header="true"
		data-kt-app-aside-push-toolbar="true"
		data-kt-app-aside-push-footer="true"
		data-bs-theme-mode="dark"
		class="app-default"
	>
		<NuxtLayout :name="appLayout">
			<NuxtPage />
		</NuxtLayout>

		<!-- To be USED AS NOTIFICATION -->
		<!--begin::Drawers-->
		<AppNotifications />

		<!--end::Drawers-->

		<!--end::Engage toolbar--><!--begin::Scrolltop-->
		<div
			style="margin-bottom: 40px"
			id="kt_scrolltop"
			class="scrolltop"
			data-kt-scrolltop="true"
		>
			<i class="ki-outline ki-arrow-up"></i>
		</div>
		<!--end::Scrolltop-->

		<!--begin::Modals-->

		<!--begin::Modal - Upgrade plan-->
		<!-- To be used as send money/add modal -->
		<div
			class="modal fade"
			id="kt_modal_upgrade_plan"
			tabindex="-1"
			aria-hidden="true"
		>
			<!--begin::Modal dialog-->
			<div class="modal-dialog modal-xl">
				<!--begin::Modal content-->
				<div class="modal-content rounded">
					<!--begin::Modal header-->
					<div class="modal-header justify-content-end border-0 pb-0">
						<!--begin::Close-->
						<div
							class="btn btn-sm btn-icon btn-active-color-primary"
							data-bs-dismiss="modal"
						>
							<i class="ki-outline ki-cross fs-1"></i>
						</div>
						<!--end::Close-->
					</div>
					<!--end::Modal header-->

					<!--begin::Modal body-->
					<div class="modal-body pt-0 pb-15 px-5 px-xl-20">
						<!--begin::Heading-->
						<div class="mb-13 text-center">
							<h1 class="mb-3">Deposit</h1>

							<div class="text-muted fw-semibold fs-5">
								If you need any assistance, please contact
								<a role="button" class="link-primary fw-bold"
									>support</a
								>.
							</div>
						</div>
						<!--end::Heading-->

						<form
							id="kt_modal_new_card_form"
							class="form fv-plugins-bootstrap5 fv-plugins-framework"
							action="#"
							data-select2-id="select2-data-kt_modal_new_card_form"
						>
							<!--begin::Input group-->
							<div
								class="d-flex flex-column mb-7 fv-row fv-plugins-icon-container"
							>
								<!--begin::Label-->
								<label
									class="d-flex align-items-center fs-6 fw-semibold form-label mb-2"
								>
									<span class="required">Name On Card</span>

									<span
										class="ms-1"
										data-bs-toggle="tooltip"
										aria-label="Specify a card holder's name"
										data-bs-original-title="Specify a card holder's name"
										data-kt-initialized="1"
									>
										<i
											class="ki-outline ki-information-5 text-gray-500 fs-6"
										></i
									></span>
								</label>
								<!--end::Label-->

								<input
									type="text"
									class="form-control form-control-solid"
									placeholder=""
									name="card_name"
									value="Max Doe"
								/>
								<div
									class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
								></div>
							</div>
							<!--end::Input group-->

							<!--begin::Input group-->
							<div
								class="d-flex flex-column mb-7 fv-row fv-plugins-icon-container"
							>
								<!--begin::Label-->
								<label
									class="required fs-6 fw-semibold form-label mb-2"
									>Card Number</label
								>
								<!--end::Label-->

								<!--begin::Input wrapper-->
								<div class="position-relative">
									<!--begin::Input-->
									<input
										type="text"
										class="form-control form-control-solid"
										placeholder="Enter card number"
										name="card_number"
										value="4111 1111 1111 1111"
									/>
									<!--end::Input-->

									<!--begin::Card logos-->
									<div
										class="position-absolute translate-middle-y top-50 end-0 me-5"
									>
										<img
											src="../assets/media/svg/card-logos/visa.svg"
											alt=""
											class="h-25px"
										/>
										<img
											src="../assets/media/svg/card-logos/mastercard.svg"
											alt=""
											class="h-25px"
										/>
										<img
											src="../assets/media/svg/card-logos/american-express.svg"
											alt=""
											class="h-25px"
										/>
									</div>
									<!--end::Card logos-->
								</div>
								<!--end::Input wrapper-->
								<div
									class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
								></div>
							</div>
							<!--end::Input group-->

							<!--begin::Input group-->
							<div
								class="row mb-10"
								data-select2-id="select2-data-345-k61a"
							>
								<!--begin::Col-->
								<div
									class="col-md-8 fv-row"
									data-select2-id="select2-data-344-xvb5"
								>
									<!--begin::Label-->
									<label
										class="required fs-6 fw-semibold form-label mb-2"
										>Expiration Date</label
									>
									<!--end::Label-->

									<!--begin::Row-->
									<div
										class="row fv-row fv-plugins-icon-container fv-plugins-bootstrap5-row-valid"
									>
										<!--begin::Col-->
										<div class="col-6">
											<select
												name="card_expiry_month"
												class="form-select form-select-solid select2-hidden-accessible"
												data-control="select2"
												data-hide-search="true"
												data-placeholder="Month"
												data-select2-id="select2-data-4-o1w3"
												tabindex="-1"
												aria-hidden="true"
												data-kt-initialized="1"
											>
												<option
													data-select2-id="select2-data-6-dfb3"
												></option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
												<option value="6">6</option>
												<option value="7">7</option>
												<option value="8">8</option>
												<option value="9">9</option>
												<option value="10">10</option>
												<option value="11">11</option>
												<option value="12">
													12
												</option></select
											><span
												class="select2 select2-container select2-container--bootstrap5"
												dir="ltr"
												data-select2-id="select2-data-5-ro2i"
												style="width: 100%"
												><span class="selection"
													><span
														class="select2-selection select2-selection--single form-select form-select-solid"
														role="combobox"
														aria-haspopup="true"
														aria-expanded="false"
														tabindex="0"
														aria-disabled="false"
														aria-labelledby="select2-card_expiry_month-lz-container"
														aria-controls="select2-card_expiry_month-lz-container"
														><span
															class="select2-selection__rendered"
															id="select2-card_expiry_month-lz-container"
															role="textbox"
															aria-readonly="true"
															title="Month"
															><span
																class="select2-selection__placeholder"
																>Month</span
															></span
														><span
															class="select2-selection__arrow"
															role="presentation"
															><b
																role="presentation"
															></b></span></span></span
												><span
													class="dropdown-wrapper"
													aria-hidden="true"
												></span
											></span>
											<div
												class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
											></div>
										</div>
										<!--end::Col-->

										<!--begin::Col-->
										<div
											class="col-6"
											data-select2-id="select2-data-343-x9q5"
										>
											<select
												name="card_expiry_year"
												class="form-select form-select-solid select2-hidden-accessible"
												data-control="select2"
												data-hide-search="true"
												data-placeholder="Year"
												data-select2-id="select2-data-7-fwi1"
												tabindex="-1"
												aria-hidden="true"
												data-kt-initialized="1"
											>
												<option
													data-select2-id="select2-data-9-ng6d"
												></option>
												<option
													value="2023"
													data-select2-id="select2-data-347-e80f"
												>
													2023
												</option>
												<option
													value="2024"
													data-select2-id="select2-data-348-znwn"
												>
													2024
												</option>
												<option
													value="2025"
													data-select2-id="select2-data-349-k521"
												>
													2025
												</option>
												<option
													value="2026"
													data-select2-id="select2-data-350-6qa9"
												>
													2026
												</option>
												<option
													value="2027"
													data-select2-id="select2-data-351-d079"
												>
													2027
												</option>
												<option
													value="2028"
													data-select2-id="select2-data-352-erkm"
												>
													2028
												</option>
												<option
													value="2029"
													data-select2-id="select2-data-353-t04d"
												>
													2029
												</option>
												<option
													value="2030"
													data-select2-id="select2-data-354-4kfr"
												>
													2030
												</option>
												<option
													value="2031"
													data-select2-id="select2-data-355-nvwo"
												>
													2031
												</option>
												<option
													value="2032"
													data-select2-id="select2-data-356-8x80"
												>
													2032
												</option>
												<option
													value="2033"
													data-select2-id="select2-data-357-vqk2"
												>
													2033
												</option></select
											><span
												class="select2 select2-container select2-container--bootstrap5 select2-container--above"
												dir="ltr"
												data-select2-id="select2-data-8-j0rj"
												style="width: 100%"
												><span class="selection"
													><span
														class="select2-selection select2-selection--single form-select form-select-solid"
														role="combobox"
														aria-haspopup="true"
														aria-expanded="false"
														tabindex="0"
														aria-disabled="false"
														aria-labelledby="select2-card_expiry_year-y5-container"
														aria-controls="select2-card_expiry_year-y5-container"
														><span
															class="select2-selection__rendered"
															id="select2-card_expiry_year-y5-container"
															role="textbox"
															aria-readonly="true"
															title="2027"
															>2027</span
														><span
															class="select2-selection__arrow"
															role="presentation"
															><b
																role="presentation"
															></b></span></span></span
												><span
													class="dropdown-wrapper"
													aria-hidden="true"
												></span
											></span>
											<div
												class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
											></div>
										</div>
										<!--end::Col-->
									</div>
									<!--end::Row-->
								</div>
								<!--end::Col-->

								<!--begin::Col-->
								<div
									class="col-md-4 fv-row fv-plugins-icon-container"
								>
									<!--begin::Label-->
									<label
										class="d-flex align-items-center fs-6 fw-semibold form-label mb-2"
									>
										<span class="required">CVV</span>

										<span
											class="ms-1"
											data-bs-toggle="tooltip"
											aria-label="Enter a card CVV code"
											data-bs-original-title="Enter a card CVV code"
											data-kt-initialized="1"
										>
											<i
												class="ki-outline ki-information-5 text-gray-500 fs-6"
											></i
										></span>
									</label>
									<!--end::Label-->

									<!--begin::Input wrapper-->
									<div class="position-relative">
										<!--begin::Input-->
										<input
											type="text"
											class="form-control form-control-solid"
											minlength="3"
											maxlength="4"
											placeholder="CVV"
											name="card_cvv"
										/>
										<!--end::Input-->

										<!--begin::CVV icon-->
										<div
											class="position-absolute translate-middle-y top-50 end-0 me-3"
										>
											<i
												class="ki-outline ki-credit-cart fs-2hx"
											></i>
										</div>
										<!--end::CVV icon-->
									</div>
									<!--end::Input wrapper-->
									<div
										class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
									></div>
								</div>
								<!--end::Col-->
							</div>
							<!--end::Input group-->

							<!--begin::Input group-->
							<div class="d-flex flex-stack">
								<!--begin::Label-->
								<div class="me-5">
									<label class="fs-6 fw-semibold form-label"
										>Save Card for further billing?</label
									>
									<div class="fs-7 fw-semibold text-muted">
										If you need more info, please check
										budget planning
									</div>
								</div>
								<!--end::Label-->

								<!--begin::Switch-->
								<label
									class="form-check form-switch form-check-custom form-check-solid"
								>
									<input
										class="form-check-input"
										type="checkbox"
										value="1"
										checked
									/>
									<span
										class="form-check-label fw-semibold text-muted"
									>
										Save Card
									</span>
								</label>
								<!--end::Switch-->
							</div>
							<!--end::Input group-->

							<!--begin::Actions-->
							<div class="text-center pt-15">
								<button
									type="reset"
									id="kt_modal_new_card_cancel"
									class="btn btn-light me-3"
								>
									Discard
								</button>

								<button
									type="submit"
									id="kt_modal_new_card_submit"
									class="btn btn-primary"
								>
									<span class="indicator-label">
										Submit
									</span>
									<span class="indicator-progress">
										Please wait...
										<span
											class="spinner-border spinner-border-sm align-middle ms-2"
										></span>
									</span>
								</button>
							</div>
							<!--end::Actions-->
						</form>
					</div>
					<!--end::Modal body-->
				</div>
				<!--end::Modal content-->
			</div>
			<!--end::Modal dialog-->
		</div>
		<!--end::Modal - Upgrade plan-->

		<!--end::Modals-->
	</div>
</template>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Truculenta:opsz,wght@12..72,800&display=swap");
	.zipay-logo {
		font-family: "Truculenta", sans-serif;
		color: #2178f3;
	}
	.zipay-logo-dark {
		color: #fff !important;
	}

	@media (max-width: 765px) {
		.mobile-aside {
			padding-bottom: 60px !important;
		}
	}

	/* Remove up and down arrows (spinners) from number input */
	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		appearance: none;
		margin: 0;
	}
</style>
