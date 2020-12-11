import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";

export default function Example() {
	const [count, setCount] = useState(0);

	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
        console.log('useEffect')
		// Update the document title using the browser API
		document.title = `You clicked ${count} times`;
    });
    
    console.log('render')
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}
