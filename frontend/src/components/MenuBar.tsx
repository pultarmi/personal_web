import React, { useState, useEffect, useRef, useCallback } from 'react';

import "../styles/MenuBar.scss";

const maxTop = 0;

export default function MenuBar() {
	const ref_menubar = useRef<any>(null)
	const [top, setTop] = useState<number>(maxTop);
	const [fontsize, setFontsize] = useState(1);
	const [barsize, setBarsize] = useState<number>(0)
	const [minTop, setMinTop] = useState<number>(0)

	const lastScrollY = useRef(0);

	useEffect(() => {
		setBarsize(ref_menubar.current!.clientHeight)
	}, [ref_menubar]);

	const controlNavbar = useCallback((lastScrollY: any) => {
		if (window.scrollY > lastScrollY.current && window.scrollY > barsize) {
			setTop(minTop)
		} else {
			setTop(maxTop)
		}

		lastScrollY.current = window.scrollY;
	}, [barsize, minTop]);

	useEffect(() => {
		var htmlElement = document.documentElement;
		setFontsize(parseFloat(window.getComputedStyle(htmlElement).fontSize));
	}, [barsize]);

	useEffect(() => {
		setMinTop(- barsize / fontsize)
	}, [fontsize, barsize]);

	useEffect(() => {
		console.log(lastScrollY)
		const handleScroll = () => {
			controlNavbar(lastScrollY);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [controlNavbar, minTop]);

	const handleClick = (itemName: string) => (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		let target = document.getElementById(itemName);
		target!.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<div style={{top: `${top}em`}} className={"menubar"} id="menubar" ref={ref_menubar}>
			<nav className={"nav"}>
				<ul className="nav__menu">
					<li className="nav__menu-item"><a onClick={handleClick("contact-div")}>Contact</a></li>
					<li className="nav__menu-item"><a onClick={handleClick("services-div")}>Services</a></li>
					<li className="nav__menu-item"><a onClick={handleClick("resume-div")}>Resume</a></li>
					<li className="nav__menu-item"><a onClick={handleClick("examples-div")}>Examples</a>
						<ul className="nav__submenu">
							<li className="nav__submenu-item"><a>Image registration</a></li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	);
}