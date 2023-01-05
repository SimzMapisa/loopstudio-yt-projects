import React from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import logo from '../../public/images/logo.svg';
import menuIcon from '../../public/images/icon-hamburger.svg';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Image src={logo} alt='next logo' />
				</div>
				<div className={styles.menu}>
					<Image src={menuIcon} alt='menu icon' />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
