import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Link } from "react-scroll";
import MenuItem from '@mui/material/MenuItem';

import styles from "../styles/MenuButton.module.css";

export default function MenuButton() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={styles.MenuButton}>
			<Button
				id="basic-button"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				Menu
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem >
					<Link  to="my-other-component" smooth={true} duration={500} spy={true} onClick={handleClose}>Curriculum Vitaa</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					Tools
				</MenuItem>
			</Menu>
		</div>
	);
}