import { AuthToken } from "utils/interfaces/AuthToken";

export const useAuth = () => {
	const userData = useState<AuthToken | null>("user", () => null);
	const isAuthenticated = useState<boolean>("isAuthenticated", () => false);
	const login = (user: AuthToken) => {
		userData.value = user;
		isAuthenticated.value = true;
		setTimeout(() => {
			navigateTo("/app");
		}, 3000);
	};

	const logout = () => {
		userData.value = null;
		isAuthenticated.value = false;
	};

	return {
		isAuthenticated,
		userData,
		logout,
		login,
	};
};
