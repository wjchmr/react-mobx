import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "../pages/home";
import Demo1 from "../pages/demo1";

class Router extends Component {
	render() {
		return (
			<HashRouter>
				<Route exact path={`/`} component={Home} />
				<Route path={`/demo1`} component={Demo1} />
			</HashRouter>
		);
	}
}
export default Router;
