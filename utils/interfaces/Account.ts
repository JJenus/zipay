export type Account = {
	id: string,
	userId: string,
	currencyId: string,
	amount: number,
	status: AccountStatus,
};

export enum AccountStatus {
	ACTIVE = "active",
	CLOSED = "closed",
	FROZEN = "frozen",
}

