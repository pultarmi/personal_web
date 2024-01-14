import React, { useState, useEffect, useRef, useCallback } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Link } from "react-scroll";
import MenuItem from '@mui/material/MenuItem';

import "../styles/MenuBar.scss";

const maxTop = 1;

export default function MenuBar() {
	const ref_menubar = useRef<any>(null)
	// const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [top, setTop] = useState<number>(maxTop);
	const [fontsize, setFontsize] = useState(1);
	const [barsize, setBarsize] = useState<number>(0)
	const [minTop, setMinTop] = useState<number>(0)

	// const open = Boolean(anchorEl);
	// const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
	// 	setAnchorEl(event.currentTarget);
	// };
	// const handleClose = () => {
	// 	setAnchorEl(null);
	// };

	// const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		setBarsize(ref_menubar.current!.clientHeight)
	}, [ref_menubar]);

	const controlNavbar = useCallback((lastScrollY: number) => {
		if (window.scrollY > lastScrollY && window.scrollY > barsize) {
			setTop(minTop)
		} else {
			setTop(maxTop)
		}

		setLastScrollY(window.scrollY);
	}, [barsize, minTop]);

	useEffect(() => {
		var htmlElement = document.documentElement;
		setFontsize(parseFloat(window.getComputedStyle(htmlElement).fontSize));
	}, [barsize]);

	useEffect(() => {
		setMinTop(- barsize / fontsize)
	}, [fontsize, barsize]);

	useEffect(() => {
		window.addEventListener('scroll', () => controlNavbar(lastScrollY));

		// cleanup function
		return () => {
			window.removeEventListener('scroll', () => controlNavbar(lastScrollY));
		};
	}, [controlNavbar, lastScrollY]);

	return (
		<nav className={"nav"} style={{top: `${top}em`}} id="menubar" ref={ref_menubar}>
			<ul className="nav__menu">
				<li className="nav__menu-item"><a>Contact</a></li>
				<li className="nav__menu-item"><a>Resume</a></li>
				<li className="nav__menu-item"><a>Services</a></li>
				<li className="nav__menu-item"><a>Examples</a>
					<ul className="nav__submenu">
						<li className="nav__submenu-item"><a>Image registration</a></li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}