import {
	SET_AMOUNT,
	SET_CREDIT_ACCOUNT,
	GET_AMOUNT,
	SET_DEBIT_ACCOUNT,
} from "./actionTypes";

export const setAmount = content => ({
	type: SET_AMOUNT,
	payload: {
		amount: content
	}
});

export const getAmount = () => ({
	type: GET_AMOUNT
});
// Debit Account
export const setDebitAccount = account => ({
	type: SET_DEBIT_ACCOUNT,
	payload: {
		account: account
	}
});


export const setCreditAccount = account => ({
	type: SET_CREDIT_ACCOUNT,
	payload: {
		account: account
	}
});
