import React, { useEffect } from "react";
// import classes from "./Accounts.module.scss";
import Autocomplete from "ui/Autocomplete/Autocomplete";
import { ACCOUNTS } from "assets/accounts";

const Accounts = (props) => {
  useEffect(() => {}, []);

  return (
    <div>
      <Autocomplete onChange={props.onChange} options={ACCOUNTS.data} />
    </div>
  );
};

export default Accounts;
