import React from "react";

export default function Example(props) {
	const { count } = props;
	const handleClick = () => {
		setTimeout(() => {
			alert(count);
		}, 3000);
	};
	return (
		<div>
			<p>{count}</p>
			<button onClick={handleClick}>Alert Count</button>
		</div>
	);
}
