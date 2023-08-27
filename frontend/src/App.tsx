import React, {Component} from "react";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import './App.css';
import './assets/Timeline_box.css';
import './assets/Top_window.css';
import './assets/Timeline_window.css';
import MainPage from "pages/MainPage";
import UserPage from "pages/project1";
import PageMenu from "pages/menu";
import Project_Test from "pages/project1";
import alignment from "pages/Alignment";
import DragDrop from "pages/Alignment";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainPage />,
		// children: [
		// 	{
		// 		path: "contacts/:contactId",
		// 		element: <UserPage />,
		// 	},
		// ],
	},
	{
		path: "/project/:projectName",
		element: <Project_Test />,
	},
	{
		path: "/menu",
		element: <PageMenu />,
	},
	{
		path: "/alignment",
		element: <DragDrop />,
	},
]);

export default class App extends Component {
	render() {
		return (
			<RouterProvider router={router} />
		);
	}
}
