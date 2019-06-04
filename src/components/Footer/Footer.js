import React from 'react';
import AddButton from './AddButton/AddButton';
import classes from './Footer.module.css';


const Footer = () => (
	<footer className={classes.Footer}>
		<AddButton />
	</footer>
);

export default Footer;

