import { AuthToken } from "../utils/interfaces/AuthToken";

export const useAuth = () => {
	const appUser = userData().data;
	const authData = useState<AuthToken | null>("user", () => null);
	const authenticated = useState<boolean>("isAuthenticated", () => false);

	const login = (auth: AuthToken) => {
		const userAuth = useCookie<AuthToken>("auth", {
			maxAge: 60 * 60 * 24,
		});
		appUser.value = auth.user;
		userAuth.value = auth;
		authData.value = auth;
		authenticated.value = true;
		// await storage().remember(user);
		if (auth.user.userType === "admin") {
			navigateTo("/admin");
		} else navigateTo("/app");
	};

	const logout = () => {
		authData.value = null;
		authenticated.value = false;
		// storage().remove();
		useCookie("auth").value = null;
		navigateTo("/sign-in");
	};

	const isAuthenticated = () => {
		if (authenticated.value) {
			return true;
		}

		const auth = useCookie<AuthToken>("auth");
		// console.log(auth);
		if (auth.value == null || auth.value == undefined) {
			// console.log("Empty")
			return false;
		}

		authenticated.value = true;
		authData.value = auth.value;
		return true;
	};

	return {
		isAuthenticated,
		userData: authData,
		logout,
		login,
	};
};
