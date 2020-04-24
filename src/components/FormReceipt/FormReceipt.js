import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class FormReceipt extends Component {

    state = {};

    render() {
        debugger;
        return (
            <div>
                Form Receipt
                <p>{'Debit Account Number: ' + this.props.debits?.beneficiaryName}</p>
                <p>{'Credit Account Number: ' + this.props.credits?.beneficiaryName}</p>
                <p>{'Transfer Amount: ' + this.props.amt}</p>
            </div>
        )
    }
}
const mapStateToProps = (store) => ({
    amt: store.form.amount,
    debits: store.form.debitAccount,
    credits: store.form.creditAccount
});
export default connect(mapStateToProps)(withRouter(FormReceipt));