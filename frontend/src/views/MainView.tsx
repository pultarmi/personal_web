import React, { Component } from "react";

import WindowContact from 'components/WindowContact';
import WindowServices from "components/WindowServices";
import WindowResume from "components/WindowResume";

export default function MainView() {
	return (
		<div>
			<WindowContact/>
			<WindowServices/>
			<WindowResume/>
		</div>
	);
}
