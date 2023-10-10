import { AuthToken } from "utils/interfaces/AuthToken";

export default defineNuxtRouteMiddleware((to, from) => {
	// if (to.params.id === "1") {
	// 	return abortNavigation();
	// }
	// In a real app you would probably not redirect every route to `/`
	// however it is important to check `to.path` before redirecting or you
	// might get an infinite redirect loop
	if (!useAuth().isAuthenticated()) {
		// const user = useAuth().userData.value.
		return navigateTo("/sign-in");
	}
});
