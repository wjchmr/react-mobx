import React, { Component } from "react";
import Timer from '../components/Timer'

// observer:将你的组件变成响应式组件。就是数据改变时候可以出发重新的渲染。
// inject(homeStore):和redux的connect作用一样,将数据注册到组件。
// homeStore其实就是store/index中 new出来的实例名称

// @inject("homeStore")
class Home extends Component {

	render() {
		return (
			<div>
				{/* <h1>首页数据源的number为:{this.props.homeStore.homeNum}</h1> */}
				<Timer/>
			</div>
		);
	}
}
export default Home;
