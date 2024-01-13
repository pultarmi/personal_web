import React, {useRef, useEffect} from 'react';
import { Link } from "react-router-dom";

import styles from "../styles/TimelineBox.module.scss";

interface FadeInProps {
	children: React.ReactNode;
	topic: string;
	leftAlign?: boolean;
}

export default function TimelineBox(props: FadeInProps) {
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting && ref.current) {
					ref.current.classList.add('is-visible');
				} else {
					ref.current?.classList.remove('is-visible');
				}
			});
		});

		if (ref.current != null) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current != null) {
				observer.unobserve(ref.current);
			}
		};
	}, []);

	return (
		// <Link to="/react" style={{ textDecoration: 'none' }}>
		<div className={styles.TimelineRow}>
			<div ref={ref} className={`${styles.TimelineBox} fade-in ${props.leftAlign ? "leftAlign" : ""}`}>
				<h3>{props.topic}</h3>
				<div>
					{props.children}
				</div>
			</div>
		</div>
		// </Link>
	);
}
