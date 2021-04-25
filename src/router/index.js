import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "../pages/home";
import One from "../pages/one";

class Router extends Component {
	render() {
		return (
			<HashRouter>
				{/* <> */}
					<Route exact path={`/`} component={Home} />
					<Route path={`/one`} component={One} />
				{/* </> */}
			</HashRouter>
		);
	}
}
export default Router;
