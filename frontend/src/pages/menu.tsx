import React, { Component, useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import Top_window from "components/Top_window";
import Timeline_box from "components/Timeline_box";

import axios from 'axios';
// const cheerio = require("cheerio");


export default function PageMenu() {
	const [menu, setMenu] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get('http://localhost:3030/api/menu/jaguska')
			.then(function (response: any) {
				console.log(response.data);
				setMenu(response.data);
				setLoading(false);
			})
			.catch(function (error : any) {
				console.log(error);
				setLoading(false);
			});
	}, [])

	return (
		<div id="hohoho">
			{loading ? (
				<p>Loading...</p>
			) : menu ? (
				<div>
					<p>{menu}</p>
				</div>
			) : (
				<p>No data available.</p>
			)}
		</div>
	);
}
