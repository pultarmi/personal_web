import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import axios from "axios";

const fileTypes = ["JPG", "PNG", "GIF"];

class Alignment extends React.Component<{}, {selectedFile: string | null | Blob}> {
	constructor(props: {} | Readonly<{}>) {
		super(props);
		this.state = {
			selectedFile: null
		};
	}

	onChangeHandler = (event: { target: { files: FileList | null; }; }) => {
		if(event.target.files != null)
		this.setState({
			selectedFile: event.target.files[0]
		});
	};

	onClickHandler = () => {
		const data = new FormData();
		if(this.state.selectedFile != null)
			data.append("file", this.state.selectedFile);
		axios
			.post("/api/upload", data)
			.then(res => {
				console.log(res.statusText);
			})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		return (
			<div>
				<input type="file" onChange={this.onChangeHandler} className={""}/>
				<button onClick={this.onClickHandler}>Upload</button>
			</div>
		);
	}
}


export default Alignment;