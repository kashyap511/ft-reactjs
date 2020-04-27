import {
	SET_AMOUNT,
	SET_CREDIT_ACCOUNT,
	GET_AMOUNT,
	SET_DEBIT_ACCOUNT,
	SET_FORM_VALID,
	SET_LOGGED_IN
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

export const setFormValid = isValid => ({
	type: SET_FORM_VALID,
	payload: {
		isValid
	}
});

export const setLoggedIn = loggedIn => ({
	type: SET_LOGGED_IN,
	payload: {
		loggedIn
	}
});