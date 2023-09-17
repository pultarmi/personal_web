import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';

import TopWindow from "components/TopWindow";
import TimelineBox from "components/TimelineBox";


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
