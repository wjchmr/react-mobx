// eslint-disable-next-line
import { computed, observable, remove, toJS, values, transaction } from "mobx";
import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@observer
class CollectionAPI extends Component {
	@observable
	list = {
		age: 20,
		count: 30,
		size: 2,
	};

	@observable
	price = 2;

	@computed
	get sum() {
		return values(this.list).join(",");
	}

	componentDidMount() {
		this.list.age = 25;
		this.price = 3;
		remove(this.list, "age");
	}

	render() {
		console.log("render");
		return (
			<div>
				{values(this.list).map((el) => {
					return <p key={el}>{el}</p>;
				})}
				{this.sum}
			</div>
		);
	}
}

export default CollectionAPI;
