import React from 'react';
import classes from './Task.module.css';

const Task = (props) => (

	<div style={props.style} className={classes.Task}>
	{props.children}
	</div>
);

export default Task;