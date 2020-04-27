import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Form from "components/Form/Form";
import FormReceipt from "components/FormReceipt/FormReceipt";
import CovidData from "components/CovidData/CovidData";
import Error from 'components/Error/Error';
import NotFound from "components/NotFound/NotFound";
import * as ROUTES from "assets/constants/routes";

class Routes extends Component {
	state = {};

	render() {
		return <Switch>
			<Route path="/" exact component={CovidData} />
			<Route path={ROUTES.TRANSFER} exact component={Form} />
			<Route path={ROUTES.TRANSFER_CONFIRMATION} component={FormReceipt} />
			<Route path={ROUTES.ERROR_PAGE} component={Error} />
			<Route component={NotFound} />
		</Switch>;
	}
}
export default Routes;
