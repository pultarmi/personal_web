import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";

import '../styles/TopWindow.module.css';
import TopWindow from 'components/TopWindow';
import TimelineBox from "components/TimelineBox";
import MenuButton from "components/MenuButton";


export default function MainPage() {
		return (
			<div className="App">
				<MenuButton/>

				<TopWindow/>
				<div className="Timeline_window" id="my-other-component">
					<TimelineBox topic="My poject 1" leftAlign={true}>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Mauris tincidunt sem sed arcu. Quisque porta. Praesent dapibus. Suspendisse sagittis ultrices augue. Fusce suscipit libero eget elit. Nulla est. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Nullam dapibus fermentum ipsum. In dapibus augue non sapien. Duis viverra diam non justo. Duis risus. Cras elementum. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Vivamus ac leo pretium faucibus. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Fusce tellus. Fusce wisi. Aliquam id dolor.
					</TimelineBox>
					<TimelineBox topic="My poject 2">
						Nullam at arcu a est sollicitudin euismod. Etiam commodo dui eget wisi. In enim a arcu imperdiet malesuada. Pellentesque pretium lectus id turpis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Mauris metus. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Nulla non arcu lacinia neque faucibus fringilla.
					</TimelineBox>
					<TimelineBox topic="My poject 3" leftAlign={true}>
						Nullam at arcu a est sollicitudin euismod. Etiam commodo dui eget wisi. In enim a arcu imperdiet malesuada. Pellentesque pretium lectus id turpis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Mauris metus. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Nulla non arcu lacinia neque faucibus fringilla.
					</TimelineBox>
					<TimelineBox topic="My poject 4" leftAlign={false}>
						Nullam at arcu a est sollicitudin euismod. Etiam commodo dui eget wisi. In enim a arcu imperdiet malesuada. Pellentesque pretium lectus id turpis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Mauris metus. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Nulla non arcu lacinia neque faucibus fringilla.
					</TimelineBox>
				</div>
			</div>
		);
}
