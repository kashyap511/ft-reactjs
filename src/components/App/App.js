import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import classes from "./App.module.scss";
import Routes from "components/Routes/Routes";
import AppBar from 'components/AppBar/AppBar';
class App extends Component {

	render() {
		return (
			<Router>
				<div className={classes.main}>
					<AppBar/>
					<Routes />
				</div>
			</Router>
		);
	}
}


export default App;
