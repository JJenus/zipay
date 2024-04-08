import { Beneficiary } from "./Beneficiary";

export interface Transaction  {
value: Transaction | Ref<Transaction>;
	id: string | null | undefined,
	senderId: string,
	receiverId: string | undefined,
	amount: number,
	type: TransactionTypes,
	notes: string | undefined,
	beneficiary: Beneficiary,
	transactionId: string | null | undefined
}

export enum TransactionTypes {
	DEBIT = "debit",
	CREDIT = "credit",
	WITHDRAWAL = "withdrawal",
	SEND = "send"
}