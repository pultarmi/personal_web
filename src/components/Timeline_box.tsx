import React, {useRef, useEffect} from 'react';

interface FadeInProps {
	children: React.ReactNode;
	topic: string;
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
		<div ref={ref} className="Timeline_box fade-in">
			<h1>{props.topic}</h1>
			{props.children}
		</div>
	);
}

export default Timeline_box;
