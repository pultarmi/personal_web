import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";

import '../styles/TopWindow.module.css';
import TopWindow from 'components/TopWindow';
import TimelineBox from "components/TimelineBox";
import MenuBar from "components/MenuBar";


export default function MainLayout() {
	return (
		<div className="App">
			<MenuBar/>

			<Outlet/>
		</div>
	);
}
