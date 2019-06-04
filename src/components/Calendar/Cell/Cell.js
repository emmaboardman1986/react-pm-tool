import React from 'react';
import classes from './Cell.module.css';

const Cell = (props) => (
	<div className={classes.Cell}>
		{props.children}
	</div>
	);

export default Cell;