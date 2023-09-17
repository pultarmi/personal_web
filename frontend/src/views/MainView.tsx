import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";

import TopWindow from 'components/TopWindow';
import TimelineBox from "components/TimelineBox";

import styles from '../styles/TimelineWindow.module.css';


export default function MainView() {
	return (
		<div>
			<TopWindow/>

			<div className={styles.TimelineWindow} id="my-other-component">
				<hr width="5" size="800" style={{ position: 'absolute', zIndex: '0 !important', left: '50vw'}}></hr>
				<TimelineBox topic="Quantasoft">
					● Building real-time video analytics software capable of accomplishing crucial security tasks using optimized biometrics and detection models.
				</TimelineBox>
				<TimelineBox topic="Center for Machine Perception">
					● Proposed a new local feature descriptor that improves matching scores on all standard benchmarks. <br/>
					● Introduced an effective method for dataset reduction - showed that reducing the size 10 times improves results. <br/>
					● Developed a method allowing training of a descriptor on big data (10TB AMOS dataset), improving results on a standard benchmark. <br/>
					● Introduced a new benchmark for testing of robustness of a descriptor to illumination changes. <br/>
					● Presented a method for compression of network outputs that also improves performance. <br/>
				</TimelineBox>
				<TimelineBox topic="Tampere University">
					● Improved the HardNet local feature descriptor by introducing a new deep convolutional architecture. <br/>
				</TimelineBox>
				<TimelineBox topic="Blindspot Solutions">
					● Developed a machine learning component of a website that highlights promising startups. Wrote the backend and part of the frontend. <br/>
				</TimelineBox>
			</div>
		</div>
	);
}
