import { AuthToken } from "../utils/interfaces/AuthToken";

export const useAuth = () => {
	const userData = useState<AuthToken | null>("user", () => null);
	const authenticated = useState<boolean>("isAuthenticated", () => false);

	const login = async (user: AuthToken) => {
		userData.value = user;
		authenticated.value = true;
		await storage().remember(user);
		setTimeout(() => {
			navigateTo("/app");
		}, 3000);
	};

	const logout = () => {
		userData.value = null;
		authenticated.value = false;
		storage().remove();
		navigateTo("/sign-in");
	};

	const isAuthenticated = async () => {
		if (authenticated.value) {
			return true;
		}

		const auth = await storage().getAuth();
		if (auth == false) {
			return false;
		}

		authenticated.value = true;
		userData.value = auth;

		return true;
	};

	return {
		isAuthenticated,
		userData,
		logout,
		login,
	};
};
