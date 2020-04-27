import { SET_AMOUNT, SET_DEBIT_ACCOUNT, SET_CREDIT_ACCOUNT, SET_FORM_VALID, SET_LOGGED_IN } from "store/actions/actionTypes";
import { initialState } from "./initState";


export function formReducer(state = initialState, action) {
	const payload = action.payload;

	switch (action.type) {
		case SET_AMOUNT:
			return {
				...state,
				amount: { ...payload.amount }
			}
		case SET_DEBIT_ACCOUNT:
			return {
				...state,
				debitAccount: { ...payload.account },

			}
		case SET_CREDIT_ACCOUNT:
			return {
				...state,
				creditAccount: { ...payload.account }
			}
		case SET_FORM_VALID:
			return {
				...state,
				valid: payload.isValid
			}
		case SET_LOGGED_IN:
			return {
				...state,
				loggedIn: payload.loggedIn
			}
		default:
			break;
	}
	return state;
}
