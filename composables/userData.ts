import { Account, AccountStatus } from "../utils/interfaces/Account";
import { IUser } from "../utils/interfaces/IUser";


export const userData = () => {
	const initAcc: Account = {
		id: "",
		userId: "",
		currencyId: "",
		amount: 0,
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
	};

	const data = useState<IUser>("userData", () => initUser);
	const account = useState<Account>("userAccount", () => initAcc);

	return {
		account,
		data,
	};
};
