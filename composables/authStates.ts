import { AuthToken } from "../utils/interfaces/AuthToken";

export const useAuth = () => {
	const userData = useState<AuthToken | null>("user", () => null);
	const authenticated = useState<boolean>("isAuthenticated", () => false);

	const login = (user: AuthToken) => {
		const userAuth = useCookie<AuthToken>("auth", {
			maxAge: 60 * 60 * 24,
		});
		userAuth.value = user;
		userData.value = user;
		authenticated.value = true;
		// await storage().remember(user);
		if (user.user.userType === "admin") {
			navigateTo("/admin");
		} else navigateTo("/app");
	};

	const logout = () => {
		userData.value = null;
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
		userData.value = auth.value;
		return true;
	};

	return {
		isAuthenticated,
		userData,
		logout,
		login,
	};
};
