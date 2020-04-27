import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import classes from './FormReceipt.module.scss';

class FormReceipt extends Component {

    componentDidMount() {
        if (!this.props.loggedIn) {
            this.props.history.push("/form");
        }
    }
    render() {
        return (
            <div className={classes.section}>
                <h1 className={classes.formReceipt}>Form Receipt</h1>
                <p className={classes.formReceipt}>{'Debit Account Number: ' + this.props.debits?.beneficiaryName}</p>
                <p className={classes.formReceipt}>{'Credit Account Number: ' + this.props.credits?.beneficiaryName}</p>
                <p className={classes.formReceipt}>{'Transfer Amount: ' + this.props.amt}</p>
            </div>
        )
    }
}
const mapStateToProps = (store) => ({
    amt: store.form.amount.value,
    debits: store.form.debitAccount.value,
    credits: store.form.creditAccount.value,
    loggedIn: store.form.loggedIn
});
export default connect(mapStateToProps)(withRouter(FormReceipt));