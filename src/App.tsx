import React, {Component} from "react";
import logo from './assets/profile.png';
import './App.css';
import FadeIn from './components/timelineBox';
import TopWindow from './components/TopWindow';
// import TopWindow from "./components/navbar";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<TopWindow></TopWindow>
				<FadeIn>
					<h1>Hello World</h1>
				</FadeIn>
			</div>
		);
	}
}
