import React, { useRef, useEffect } from 'react';

interface FadeInProps {
	children: React.ReactNode;
}

function FadeIn(props: FadeInProps) {
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					// Add the "is-visible" class when the component is in view
					if (entry.isIntersecting && ref.current) {
						ref.current.classList.add('is-visible');
					}
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
		<div ref={ref} className="fade-in">
			{props.children}
		</div>
	);
}

export default FadeIn;
