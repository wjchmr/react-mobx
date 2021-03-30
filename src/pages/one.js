import React, { Component } from "react";
import Scanner from "react-webcam-qr-scanner";

const MyAwesomeComponent = (props) => {
	const handleDecode = (result) => {
		console.log(result);
	};

	const handleScannerLoad = (mode) => {
		console.log(mode);
	};

	return (
		<div>
			<p>aaaa</p>
			<Scanner
				className='some-classname'
				onDecode={handleDecode}
				onScannerLoad={handleScannerLoad}
				constraints={{
					audio: false,
					video: {
						facingMode: "environment",
					},
				}}
				captureSize={{ width: 640, height: 360 }}
			/>
		</div>
	);
};

export default MyAwesomeComponent;
