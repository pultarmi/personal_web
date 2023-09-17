import React, {Component} from "react";
import { createBrowserRouter } from 'react-router-dom';

import MainPage from "./views/MainPage";
import PageMenu from "./views/FoodMenu";
import Project_Test from "./views/project1";
import alignment from "./views/Alignment";
import DragDrop from "./views/Alignment";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <MainPage/>,
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