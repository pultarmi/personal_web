import React, { useState, useEffect, useRef, useCallback } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Link } from "react-scroll";
import MenuItem from '@mui/material/MenuItem';

import "../styles/MenuBar.scss";

export default function MenuBar() {
	// const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [top, setTop] = useState<number>(30);
	// const bodyRef = useRef(null);
	const [fontsize, setFontsize] = useState(1);

	// const open = Boolean(anchorEl);
	// const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
	// 	setAnchorEl(event.currentTarget);
	// };
	// const handleClose = () => {
	// 	setAnchorEl(null);
	// };

	const maxTop = 2;
	const minTop = -4;

	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = useCallback(() => {
		if(Math.abs(window.scrollY - lastScrollY) / fontsize < 0.1){
			return;
		}
		const diff = (window.scrollY - lastScrollY) / fontsize;
		console.log(`diff ${diff}`)

		if (window.scrollY > lastScrollY) {
			setTop(Math.max(minTop, top - diff));
		} else {
			setTop(Math.min(maxTop, top - diff));
		}

		setLastScrollY(window.scrollY);
	}, [top, minTop, lastScrollY, fontsize]);

	useEffect(() => {
			var htmlElement = document.documentElement;
			setFontsize(parseFloat(window.getComputedStyle(htmlElement).fontSize));
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', () => controlNavbar());

		// cleanup function
		return () => {
			window.removeEventListener('scroll', () => controlNavbar());
		};
	}, [controlNavbar, lastScrollY]);

	return (
		<nav className={`nav ${show && 'hidden_menu'}`} style={{top: `${top}em`}}>
			<ul className="nav__menu">
				<li className="nav__menu-item"><a>Home</a></li>
				<li className="nav__menu-item"><a>Services</a>
					<ul className="nav__submenu">
						<li className="nav__submenu-item"><a>Web Design</a></li>
						<li className="nav__submenu-item"><a>Web Development</a></li>
						<li className="nav__submenu-item"><a>Web Hosting</a></li>
					</ul>
				</li>
				<li className="nav__menu-item"><a>About</a>
					<ul className="nav__submenu">
						<li className="nav__submenu-item"><a>Our Company</a></li>
						<li className="nav__submenu-item"><a>Our Team</a></li>
						<li className="nav__submenu-item"><a>Our Reach</a></li>
					</ul>
				</li>
				<li className="nav__menu-item"><a>Blog</a></li>
				<li className="nav__menu-item"><a>Contact</a></li>
			</ul>
		</nav>
	);
}