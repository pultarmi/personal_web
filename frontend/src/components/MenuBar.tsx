import React, { useState, useEffect, useRef, useCallback } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Link } from "react-scroll";
import MenuItem from '@mui/material/MenuItem';

import "../styles/MenuBar.scss";

const maxTop = 1;

export default function MenuBar() {
	const ref_menubar = useRef(null)
	// const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [top, setTop] = useState<number>(maxTop);
	const [fontsize, setFontsize] = useState(1);
	const [barsize, setBarsize] = useState<number>(0)
	const [positionMode, setPositionMode] = useState<string>("absolute")
	const [minTop, setMinTop] = useState<number>(0)

	const [absmode, setAbsmode] = useState<boolean>(true)

	// const open = Boolean(anchorEl);
	// const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
	// 	setAnchorEl(event.currentTarget);
	// };
	// const handleClose = () => {
	// 	setAnchorEl(null);
	// };

	// const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	// const controlNavbar = useCallback(() => {
	// 	const diff_ = window.scrollY - lastScrollY
	// 	if((diff_ >= 0 && top === minTop) || (diff_ <= 0 && top === maxTop)){
	// 		return
	// 	}
	// 	if(Math.abs(diff_) / fontsize < 0.1){
	// 		return;
	// 	}
	// 	const diff = (window.scrollY - lastScrollY) / fontsize;
	//
	// 	if (window.scrollY > lastScrollY) {
	// 		setTop(Math.max(minTop, top - diff));
	// 	} else {
	// 		setTop(Math.min(maxTop, top - diff));
	// 	}
	//
	// 	setLastScrollY(window.scrollY);
	// }, [top, minTop, lastScrollY, fontsize]);

	useEffect(() => {
		setBarsize(ref_menubar.current!.clientHeight)
	}, [ref_menubar]);

	const controlNavbar = () => {
		// if(window.scrollY < barsize){
		// 	setAbsmode(true)
		// 	setTop(maxTop)
		// 	return
		// } else{
		// 	setAbsmode(false)
		// }

		// if(window.scrollY >= barsize && lastScrollY < barsize){
		// 	setTop(minTop)
		// }
		// else if(window.scrollY <= barsize && lastScrollY > barsize){
		// 	setTop(minTop)
		// }

		if (window.scrollY > lastScrollY && window.scrollY > barsize) {
			setTop(minTop)
		} else {
			// console.log(`AAAAAA`)
			setTop(maxTop)
		}

		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		var htmlElement = document.documentElement;
		setFontsize(parseFloat(window.getComputedStyle(htmlElement).fontSize));
	}, [barsize]);

	useEffect(() => {
		setMinTop(- barsize / fontsize)
	}, [fontsize, barsize]);

	useEffect(() => {
		window.addEventListener('scroll', () => controlNavbar());

		// cleanup function
		return () => {
			window.removeEventListener('scroll', () => controlNavbar());
		};
	}, [lastScrollY]);

	return (
		// <nav className={"nav " + (absmode ? 'nav_abs' : 'nav_fix')} style={{top: `${top}em`, position: `${positionMode}`}} id="menubar" ref={ref_menubar}>
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