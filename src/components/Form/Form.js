import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setAmount, setDebitAccount, setCreditAccount } from 'store/actions/actions';
import Select from 'UI/Select/Select';
import axios from 'axios';

class Form extends Component {

	state = {
		debits: [],
		credits: []
	}

	componentDidMount() {
		axios.get('http://localhost:9000/debitaccounts')
			.then((response) => this.setState({...this.state, debits: response.data.data}));
		axios.get('http://localhost:9000/creditaccounts')
			.then((response) => this.setState({...this.state, credits: response.data.data}));
	}

	handleInputChange(amount) {
		this.props.setAmount(Number(amount));
	}

	handleDebitAccountChange(value) {
		this.props.setDebitAccount({ ...value });
	}

	handleCreditAccountChange(value) {
		this.props.setCreditAccount({ ...value });
	}

	handleFormSubmit(event) {
		event.preventDefault();
		this.props.history.push("/receipt");
	}

	render() {
		let debitAccount = null, creditAccount = null;
		if (this.state.debits.length > 0) {
			debitAccount = (
				<div>
					<h6>Select Debit Account</h6>
					<Select options={this.state.debits} onChange={(e) => this.handleDebitAccountChange(e)} />
				</div>
			);
		}
		if (this.state.credits.length > 0) {
			creditAccount = (
				<div>
					<h6>Select Credit Account</h6>
					<Select options={this.state.credits} onChange={(e) => this.handleCreditAccountChange(e)} />
				</div>
			);
		}

		return (
			<form onSubmit={(event) => this.handleFormSubmit(event)}>
				{debitAccount}
				{creditAccount}
				Enter amount
				<input
					type="number"
					value={this.props.amt}
					onChange={(e) => this.handleInputChange(e.target.value)}
				/>
				<button>Submit</button>
			</form>
		);
	}
}

const mapStateToProps = (store) => ({
	amt: store.form.amount,
	debits: store.form.debitAccount,
	credits: store.form.creditAccount
});

const mapDispatchToProps = dispatch => {
	return {
		setAmount: amount => dispatch(setAmount(amount)),
		setDebitAccount: account => dispatch(setDebitAccount(account)),
		setCreditAccount: account => dispatch(setCreditAccount(account))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Form));
