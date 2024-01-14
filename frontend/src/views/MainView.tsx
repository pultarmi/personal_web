import React, { Component } from "react";

import WindowContact from 'components/WindowContact';
import WindowResume from "components/WindowResume";

export default function MainView() {
	return (
		<div>
			<WindowContact/>
			<WindowResume/>
		</div>
	);
}
