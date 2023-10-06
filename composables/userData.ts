import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Account, AccountStatus } from "../utils/interfaces/Account";
import { IUser } from "../utils/interfaces/IUser";

const appConfig = useRuntimeConfig();

export const userData = () => {
	const userId = useAuth().userData.value?.userId;
	const initAcc: Account = {
		id: "",
		userId: "",
		currencyId: "",
		amount: 0,
		status: AccountStatus.ACTIVE,
	};

	const data = useState<IUser>("userData");
	const account = useState<Account>("userAccount", () => initAcc);

	const getUser = async () => {
		if (!data.value) {
			const config = {
				// ,
			};

			const axiosConfig: AxiosRequestConfig = {
				method: "get",
				url: `${appConfig.public.BE_API}/users/${userId}`,
				timeout: 5000,
				headers: {
					Authorization: "Bearer " + useAuth().userData.value?.token,
				},
			};

			await axios
				.request<IUser>(axiosConfig)
				.then((response: AxiosResponse<IUser, any>) => {
					data.value = response.data;
					console.log(data.value);
				})
				.catch((error) => {
					console.log(error);
					useAuth().logout();
				});

		}
		return data;
	};

	return {
		account,
		getUser,
	};
};
