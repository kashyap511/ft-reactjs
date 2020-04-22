import React, { useEffect, useState } from "react";
import classes from "./FundsTransfer.module.scss";
import Accounts from "./Accounts/Accounts";
import Input from "ui/Input/Input";

const FundsTransfer = (props) => {
  const [orderForm, setOrderForm] = useState({
    debitAccount: {},
    creditAccount: {},
    transferAmount: "",
  });

  useEffect(() => {}, [orderForm]);

  const onDebitAccountChange = (value) => {
    setOrderForm({ ...orderForm, debitAccount: value });
  };
  const onCreditAccountChange = (value) => {
    setOrderForm({ ...orderForm, creditAccount: value });
  };
  const onChangeOfAmount = (value) => {
    setOrderForm({ ...orderForm, transferAmount: value });
  };

  const onSubmit = (event) => {
      console.log(orderForm);
      event.preventDefault();
  }
  return (
    <div className={classes.ftContainer}>
      <form onSubmit={(event) => onSubmit(event)}>
        <div className={classes.formControl}>
          Debit Account
          <Accounts onChange={onDebitAccountChange} account={orderForm.debitAccount} />
        </div>
        <div className={classes.formControl}>
          Credit Account
          <Accounts onChange={onCreditAccountChange}  account={orderForm.creditAccount} />
        </div>
        <div className={classes.formControl}>
          Amount
          <Input
            onChange={onChangeOfAmount}
            amount={orderForm.transferAmount}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FundsTransfer;
