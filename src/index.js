import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import stores from "./store";
// eslint-disable-next-line
import { configure } from "mobx";
import { Provider } from "mobx-react";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<Provider {...stores}>
		<Router />
	</Provider>,
	document.getElementById("root")
);

/* 严格模式的设置
添加此配置后操作数据源的唯一操作就是通过action，不添加可在页面直接修改props store中的数据：this.props.homeStore.homeNum = 33 */
// configure({
// 	enforceActions: 'never',
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
