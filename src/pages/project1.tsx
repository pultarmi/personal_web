import React from 'react';
import { useParams } from 'react-router-dom';

export default function Project_Test() {
	let { id } = useParams();
	return (
		<>
			<h1>Hello there user {id}</h1>
			<p>This is your awesome User Profile page</p>
		</>
	);
}