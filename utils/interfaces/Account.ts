export type Account = {
	id: string;
	userId: string;
	currencyId: string;
	amount: number | null;
	status: AccountStatus;
};

export enum AccountStatus {
	ACTIVE = "active",
	CLOSED = "closed",
	FROZEN = "frozen",
}
