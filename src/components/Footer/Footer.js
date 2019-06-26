import React, { useState } from 'react';
import AddButton from './AddButton/AddButton';
import classes from './Footer.module.css';


const Footer = (props) => (
	<footer className={classes.Footer}>
		<AddButton clicked={props.clicked}/>
	</footer>

);

export default Footer;


