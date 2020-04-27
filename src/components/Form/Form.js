import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from 'store/actions/actions';
import AutoComplete from 'UI/AutoComplete/AutoComplete';
import axios from 'axios';
import classes from './Form.module.scss';
import { TextField, withStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

const StyledTextField = withStyles({
	root: {
		width: '100%'
	},
})(TextField);

class Form extends Component {

	state = {
		debits: [],
		credits: [],
		loaded: false,
		loading: false
	};

	componentDidMount() {
		this.props.setLoggedIn(true);
		this.setState({ ...this.state, loading: true });
		this.getAccounts();
	}

	async getAccounts() {

		try {
			const [debits, credits] = await Promise.all([
				axios.get('http://localhost:9000/debitaccounts'),
				axios.get('http://localhost:9000/creditaccounts')
			]);

			setTimeout(() => {
				this.setState({
					...this.state,
					debits: debits.data.data,
					credits: credits.data.data,
					loading: false,
					loaded: true
				});
			}, 3000);

		} catch (error) {
			this.props.history.push("/error");
		}
	}

	handleInputChange(amount) {
		const amountState = { value: Number(amount) };
		amountState.valid = false;
		if (amount > 10 && amount <= 2000) {
			amountState.valid = true;
		}
		this.props.setAmount({ ...amountState });
		this.checkFormValidity();
	}

	handleDebitAccountChange(debit = {}) {
		const debitsState = { value: { ...debit }, valid: false };
		if (debit.beneficiaryName !== this.props.credits?.value?.beneficiaryName) {
			debitsState.valid = true;
		}
		this.props.setDebitAccount({ ...debitsState });
		this.checkFormValidity();
	}

	handleCreditAccountChange(credit = {}) {
		const creditsState = { value: { ...credit }, valid: false };
		if (credit.beneficiaryName !== this.props.debits?.value?.beneficiaryName) {
			creditsState.valid = true;
		}
		this.props.setCreditAccount({ ...creditsState });
		this.checkFormValidity();
	}

	checkFormValidity() {
		setTimeout(() => {
			let isValid = this.props.amt.valid && this.props.debits.valid && this.props.credits.valid;
			this.props.setFormValidity(isValid);
		}, 0);
	}

	handleFormSubmit(event) {
		event.preventDefault();
		this.props.history.push("/receipt");
	}

	render() {
		let debitAccount = null, creditAccount = null;

		if (this.state.debits.length > 0) {
			debitAccount = (
				<div className={classes.formControl}>
					<AutoComplete options={this.state.debits}
						label="Select Debit Account"
						onChange={(e) => this.handleDebitAccountChange(e)} />
				</div>
			);
		}
		if (this.state.credits.length > 0) {
			creditAccount = (
				<div className={classes.formControl}>
					<AutoComplete options={this.state.debits}
						label="Select Credit Account"
						onChange={(e) => this.handleCreditAccountChange(e)} />
				</div>
			);
		}

		return (
			<form className={classes.form} onSubmit={(event) => this.handleFormSubmit(event)}>
				{this.state.loading && <LinearProgress/>}
				{debitAccount}
				{creditAccount}
				{!this.state.loading && <div className={classes.formControl}>
					<StyledTextField type="number" value={this.props.amt.value} onChange={(e) => this.handleInputChange(e.target.value)} id="outlined-basic" label="Transfer Amount" variant="outlined" />
				</div>}
				<div className={classes.formControl}>
					<Button className={classes.button} disabled={!this.props.isFormValid} type="submit" variant="contained" color="primary">
						Submit Transfer
					</Button>
				</div>

			</form>
		);
	}
}

const mapStateToProps = (store) => ({
	amt: store.form.amount,
	debits: store.form.debitAccount,
	credits: store.form.creditAccount,
	isFormValid: store.form.valid
});

const mapDispatchToProps = dispatch => {
	return {
		setAmount: amount => dispatch(actions.setAmount(amount)),
		setDebitAccount: account => dispatch(actions.setDebitAccount(account)),
		setCreditAccount: account => dispatch(actions.setCreditAccount(account)),
		setFormValidity: isValid => dispatch(actions.setFormValid(isValid)),
		setLoggedIn: loggedIn => dispatch(actions.setLoggedIn(loggedIn)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Form));
