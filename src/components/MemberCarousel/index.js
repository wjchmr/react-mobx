import * as React from "react";
import names from "./name.json";
import { shuffle } from "lodash";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

import "./style.css";

const sortNames = shuffle(names)
	.slice(0, 20)
	.map((it, i) => ({ name: it, icon: i % 20 }));

export default class GroupCarousel extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			data: sortNames,
			show: false,
		};
	}

	componentDidMount() {
		new Swiper(".member-carousel", {
			direction: "vertical",
			loop: true, // 循环模式选项
			speed: 1000,
            autoplay:true,
            delay:5000,//自动切换的时间间隔，单位ms,默认：3000
			on: {
				tap: function (swiper, event) {
					console.log("taptaptaptaptap");
				},
			},
		});
	}

	render() {
		const { data = [] } = this.state;
		return (
			<div className='swiper-container member-carousel'>
				<div className='swiper-wrapper'>
					{data.map((it, i) => (
						<div className='swiper-slide item' key={i}>
							<div className={"icon icon" + (it.icon + 1)}></div>
							<div className='name'>{it.name}**下单购买</div>
						</div>
					))}
				</div>
			</div>
			// <Carousel className='groupon-carousel' vertical dots={false} autoplay infinite>
			// 	{data.map((it, i) => (
			// 		<div key={i} className='item'>
			// 			<div className={"icon icon" + (it.icon + 1)}></div>
			// 			<div className='name'>{it.name}**下单购买</div>
			// 		</div>
			// 	))}
			// </Carousel>
		);
	}
}
