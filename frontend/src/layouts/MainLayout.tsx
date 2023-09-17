import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";

import '../styles/TopWindow.module.css';
import TopWindow from 'components/TopWindow';
import TimelineBox from "components/TimelineBox";
import MenuButton from "components/MenuButton";


export default function MainLayout() {
	return (
		<div className="App">
			<MenuButton/>

			<Outlet/>
		</div>
	);
}
