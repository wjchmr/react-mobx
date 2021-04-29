import React, { useRef } from "react";

let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

function random(number) {
	return Math.floor(Math.random() * number);
}

export default class Canvas extends React.Component {
	constructor(props) {
		super(props);
		this.canvas = React.createRef();
	}

	draw = ctx => {
		ctx.clearRect(0, 0, WIDTH, HEIGHT);
		for (var i = 0; i < 100; i++) {
			ctx.beginPath();
			ctx.fillStyle = "rgba(255,0,0,0.5)";
			ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
			ctx.fill();
		}
	};

	componentDidMount() {
		const { current } = this.canvas;
		current.width = WIDTH;
		current.height = HEIGHT;
		const ctx = current.getContext("2d");
        setInterval(() => {
            this.draw(ctx);
        }, 1000);
		
	}

	render() {
		return <canvas id='canvas' ref={this.canvas}></canvas>;
	}
}
