import React from 'react';
import classes from './Task.module.css';

const Task = (props) => (

	<div style={props.style} className={classes.Task}>
	<p className={classes.Title}>{props.title}</p>
	</div>
);

export default Task;