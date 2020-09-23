import React, { Component } from "react";

export default class Foo extends Component {
	UNSAFE_componentWillReceiveProps(nextProps) {
		console.log(this.props.renderText === nextProps.renderText);
	}
	render() {
		return <div>{this.props.renderText()}</div>;
	}
}
