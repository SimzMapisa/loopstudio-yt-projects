import React from 'react';
import Navbar from './nav/Navbar';

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
			<h3>footer</h3>
		</div>
	);
};

export default Layout;
