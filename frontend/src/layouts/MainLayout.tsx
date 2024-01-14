import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";

import '../styles/WindowContact.module.scss';
import WindowContact from 'components/WindowContact';
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
