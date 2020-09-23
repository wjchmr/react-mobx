import React, { useState } from "react";
import { ImagePicker } from "antd-mobile";

export default function Upload() {

    const [imgList, setImageList] = useState([])
	handleChange = (files, operationType, index) => {
		setImageList(files)
		console.log(files);
		if (operationType === "add") {
			const lastfile = files[files.length - 1];
			const file = lastfile.file;
			console.log(window.URL.createObjectURL(file));
			this.setState({
				url: window.URL.createObjectURL(file),
			});
			let reader = new FileReader();
			reader.readAsArrayBuffer(file);
			let blob = null;
			reader.onload = (e) => {
				if (typeof e.target.result === "object") {
					blob = new Blob([e.target.result]);
				} else {
					blob = e.target.result;
				}
				console.log(blob, Object.prototype.toString.call(blob));
			};
		}
	};

	return (
		<ImagePicker
			files={imgList}
			onChange={handleChange}
			selectable={imgList.length < 5}
			multiple={false}
		/>
	);
}
