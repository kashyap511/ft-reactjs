import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Form from "components/Form/Form";
import FormReceipt from "components/FormReceipt/FormReceipt";
class Routes extends Component {
	state = {};

	render() {
		return <Switch>
			<Route path="/" exact component={Form} />
			<Route path="/receipt" component={FormReceipt} />
			<Route component={Error} />
		</Switch>;
	}
}
export default Routes;
