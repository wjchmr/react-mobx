// eslint-disable-next-line
import { computed, observable, remove, toJS, values, transaction } from "mobx";
import React, { Component } from "react";
import { observer } from "mobx-react";

import './style.css'
@observer
class CollectionAPI extends Component {
	@observable
	list = {
		age: 20,
		count: 30,
		size: 2,
	};

	@observable price = 2;

	@observable array = [1, 2, 3];

	@computed get sum() {
		return values(this.list).join(",");
	}

	componentDidMount() {
		this.list.age = 25;
		this.price = 3;
		remove(this.list, "age");
		remove(this.array, "1");
		let obj = document.getElementsByClassName("box")[0];
		let node = document.createElement("div");
		node.setAttribute('class','newbox')
		node.innerHTML = "<h4>123</h4>";
		obj.parentNode.insertBefore(node,obj);
		obj.classList.add('box','act1','act2')

		console.log(window.getComputedStyle(obj,':after').content)
	}

	render() {
		console.log("render");
		return (
			<div className='box'>
				{/* {values(this.list).map((el) => {
					return <p key={el}>{el}</p>;
				})} */}
			</div>
		);
	}
}

export default CollectionAPI;
