import React from 'react';
import classes from './Hour.module.css';

const Hour = (props) => (
	<div className={classes.Hour}>
		{props.children}
	</div>
	);

export default Hour;