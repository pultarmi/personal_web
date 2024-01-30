import React, { useState, useEffect, useRef, useCallback } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Link } from "react-scroll";
import MenuItem from '@mui/material/MenuItem';

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

		// cleanup function
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [controlNavbar, minTop]);

	const handleClick = itemName => event => {
		event.preventDefault();
		let target = document.getElementById(itemName);
		target!.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<div style={{top: `${top}em`}} className={"menubar"} id="menubar" ref={ref_menubar}>
			<nav className={"nav"}>
				<ul className="nav__menu">
					<li className="nav__menu-item"><a onClick={handleClick("contact-div")}>Contact</a></li>
					<li className="nav__menu-item"><a>Services</a></li>
					<li className="nav__menu-item"><a onClick={handleClick("resume-div")}>Resume</a></li>
					<li className="nav__menu-item"><a>Examples</a>
						<ul className="nav__submenu">
							<li className="nav__submenu-item"><a>Image registration</a></li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	);
}