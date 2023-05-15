import React, {useRef, useEffect} from 'react';
import { Link } from "react-scroll";

interface FadeInProps {
	children: React.ReactNode;
	topic: string;
	leftAlign?: boolean;
}

function Timeline_box(props: FadeInProps) {
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
		<Link to="/react">
		<div ref={ref} className={`Timeline_box fade-in ${props.leftAlign ? "leftAlign" : ""}`}>
			<h1>{props.topic}</h1>
			{props.children}
		</div>
		</Link>
	);
}

export default Timeline_box;
