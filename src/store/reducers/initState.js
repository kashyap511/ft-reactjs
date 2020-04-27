export const initialState = {
    amount: {
        value: '',
        valid: false
    },
    debitAccount: {
        value: null,
        valid: false
    },
    creditAccount: {
        value: null,
        valid: false
    },
    transactionDate: new Date().toISOString(),
    valid: false,
    loggedIn: false
};