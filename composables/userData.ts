import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Account, AccountStatus } from "../utils/interfaces/Account";
import { IUser } from "../utils/interfaces/IUser";
import {
	INotification,
	NotificationStatus,
} from "../utils/interfaces/Notification";

export const userData = () => {
	const initAcc: Account = {
		id: "",
		userId: "",
		currencyId: "",
		amount: null,
		status: AccountStatus.ACTIVE,
	};

	const initUser: IUser = {
		id: "",
		name: "",
		email: "",
		imgUrl: "/assets/media/svg/avatars/blank.svg",
		phone: "",
		address: "",
		city: "",
		country: "",
		dob: "",
		verified: false,
		emailVerified: false,
		account: {
			id: "",
			userId: "",
			currencyId: "",
			amount: 0,
			status: AccountStatus.ACTIVE,
		},
		userType: "",
		createdAt: "",
	};

	const notifications = useState<INotification[]>("notifications", () => []);
	const newNotification = useState<boolean>("new-notifications", () => false);
	const data = useState<IUser>("userData", () => initUser);
	const account = useState<Account>("userAccount", () => initAcc);
	const users = useState<IUser[]>("users", () => []);
	const active = useState<IUser | null>("active-user");

	const getUsers = () => {
		if (!useAuth().userData.value?.user) {
			navigateTo("/sign-in");
		}
		const axiosConfig: AxiosRequestConfig = {
			method: "get",
			url: `${useRuntimeConfig().public.BE_API}/users`,
			timeout: 20000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		axios
			.request(axiosConfig)
			.then((response: AxiosResponse<IUser[], any>) => {
				users.value = response.data
					.filter((e) => {
						return e.userType !== "admin";
					})
					.sort(
						(a, b) =>
							new Date(b.createdAt).getTime() -
							new Date(a.createdAt).getTime()
					);
				// console.log(users.value);
			})
			.catch((error) => {
				// console.log(error);
				const data = error.response.data;
				if (
					data.message.includes("Access denied") ||
					error.response.status === 401
				) {
					// console.log("Access denied");
				}
			});
	};

	const fetchBalance = () => {
		const axiosConfig = {
			method: "get",
			url: `${useRuntimeConfig().public.BE_API}/account/${data.value.id}`,
			timeout: 15000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		axios
			.request(axiosConfig)
			.then((response) => {
				const data = response.data;
				account.value = data;
				// console.log(data);
			})
			.catch((error) => {
				// console.log(error);
			});
	};

	const getNotifications = () => {
		const axiosConfig = {
			method: "get",
			url: `${useRuntimeConfig().public.BE_API}/notifications/${
				data.value.id
			}`,
			timeout: 15000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		axios
			.request(axiosConfig)
			.then((response: AxiosResponse<INotification[], any>) => {
				notifications.value = response.data
				.sort(
					(a, b) =>
						new Date(b.createdAt).getTime() -
						new Date(a.createdAt).getTime()
				);;

				notifications.value.forEach((notice) => {
					if (notice.status === NotificationStatus.UNREAD) {
						newNotification.value = true;
					}
				});
				// console.log(data);
			})
			.catch((error) => {
				// console.log(error);
			});
	};

	return {
		account,
		data,
		users,
		active,
		notifications,
		newNotification,
		getUsers,
		fetchBalance,
		getNotifications,
	};
};
