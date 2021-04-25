import { observer } from "mobx-react";
import React, { Component } from "react";

import "./index.css";

/* 
observer:将你的组件变成响应式组件。就是数据改变时候可以出发重新的渲染。
inject(homeStore):和redux的connect作用一样,将数据注册到组件。
homeStore其实就是store/index中 new出来的实例名称 */

// @inject("homeStore")
@observer
class Home extends Component {
	render() {
		return (
			<div className='content'>
				<p className='main'>
					代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，而显示在屏幕上的位图也是一种数据，
					当然必要的时候我们也可以把函数视作数据。我们可以得到一个数据到界面的映射关系，就像React提倡的那样：代码是在操作数据，
					把一种形式的数据编程另一种形式。抽象的数据是一种数据，而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。
					我们可以得到一个数据到界面的映射关系，就像React提倡的那样：代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，
					而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。我们可以得到一个数据到界面的映射关系，就像React提倡的那样
					：代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。
					我们可以得到一个数据到界面的映射关系，就像React提倡的那样：代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，
					而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。我们可以得到一个数据到界面的映射关系，就像React提倡的那样：
					代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。
					我们可以得到一个数据到界面的映射关系，就像React提倡的那样：代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，
					而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。我们可以得到一个数据到界面的映射关系，就像React提倡的那样：
					代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，而显示在屏幕上的位图也是一种数据，
					当然必要的时候我们也可以把函数视作数据。我们可以得到一个数据到界面的映射关系，就像React提倡的那样：代码是在操作数据，
					把一种形式的数据编程另一种形式。抽象的数据是一种数据，而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。
					我们可以得到一个数据到界面的映射关系，就像React提倡的那样：代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，
					而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。我们可以得到一个数据到界面的映射关系，就像React提倡的那样
					：代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。
					我们可以得到一个数据到界面的映射关系，就像React提倡的那样：代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，
					而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。我们可以得到一个数据到界面的映射关系，就像React提倡的那样：
					代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。
					我们可以得到一个数据到界面的映射关系，就像React提倡的那样：代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，
					而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。我们可以得到一个数据到界面的映射关系，就像React提倡的那样：
					代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，而显示在屏幕上的位图也是一种数据，
					当然必要的时候我们也可以把函数视作数据。我们可以得到一个数据到界面的映射关系，就像React提倡的那样：代码是在操作数据，
					把一种形式的数据编程另一种形式。抽象的数据是一种数据，而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。
					我们可以得到一个数据到界面的映射关系，就像React提倡的那样：代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，
					而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。我们可以得到一个数据到界面的映射关系，就像React提倡的那样
					：代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。
					我们可以得到一个数据到界面的映射关系，就像React提倡的那样：代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，
					而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。我们可以得到一个数据到界面的映射关系，就像React提倡的那样：
					代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。
					我们可以得到一个数据到界面的映射关系，就像React提倡的那样：代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，
					而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。我们可以得到一个数据到界面的映射关系，就像React提倡的那样：
					代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，而显示在屏幕上的位图也是一种数据，
					当然必要的时候我们也可以把函数视作数据。我们可以得到一个数据到界面的映射关系，就像React提倡的那样：代码是在操作数据，
					把一种形式的数据编程另一种形式。抽象的数据是一种数据，而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。
					我们可以得到一个数据到界面的映射关系，就像React提倡的那样：代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，
					而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。我们可以得到一个数据到界面的映射关系，就像React提倡的那样
					：代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。
					我们可以得到一个数据到界面的映射关系，就像React提倡的那样：代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，
					而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。我们可以得到一个数据到界面的映射关系，就像React提倡的那样：
					代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。
					我们可以得到一个数据到界面的映射关系，就像React提倡的那样：代码是在操作数据，把一种形式的数据编程另一种形式。抽象的数据是一种数据，
					而显示在屏幕上的位图也是一种数据，当然必要的时候我们也可以把函数视作数据。我们可以得到一个数据到界面的映射关系，就像React提倡的那样：
				</p>
				<div className='page-bottom'>
					定位
				</div>
			</div>
		);
	}
}
export default Home;