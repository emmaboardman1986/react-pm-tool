import React from 'react';

import classes from './ResourceName.module.css';

const ResourceName = (props) => (

	<div className={classes.ResourceName}>
		<h4>{props.name}</h4>
		<p>{props.job}</p>
	</div>
	

	);

export default ResourceName;