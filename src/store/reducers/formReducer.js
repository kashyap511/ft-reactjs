import { SET_AMOUNT, SET_DEBIT_ACCOUNT, SET_CREDIT_ACCOUNT } from "store/actions/actionTypes";
import { initialState } from "./initState";


export function formReducer(state = initialState, action) {
	const payload = action.payload;

	switch (action.type) {
		case SET_AMOUNT:
			return {
				...state,
				amount: payload.amount
			}
		case SET_DEBIT_ACCOUNT:
			return {
				...state,
				debitAccount: payload.account
			}
		case SET_CREDIT_ACCOUNT:
			return {
				...state,
				creditAccount: payload.account
			}
		default:
			break;
	}
	return state;
}
