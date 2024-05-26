import React from "react";
import { createBrowserRouter } from 'react-router-dom';

import MainView from "./views/MainView";
import PageMenu from "./views/FoodMenu";
import Project_Test from "./views/project1";
// import alignment from "./views/Alignment";
import DragDrop from "./views/Alignment";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <MainView/>,
			},
			{
				path: "/alignment",
				element: <DragDrop />,
			},
			{
				path: "/project/:projectName",
				element: <Project_Test />,
			},
		]
	},
	{
		path: "/menu",
		element: <PageMenu />,
	},
]);

export default router;