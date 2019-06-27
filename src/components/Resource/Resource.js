import React from 'react';
import ResourceName from './ResourceName/ResourceName';
import WeeklyGrid from '../Calendar/WeeklyGrid/WeeklyGrid';

import classes from './Resource.module.css';

const Resource = (props) => {

		return (
			<div className={classes.Resource}>
				<div><ResourceName name={props.name} job={props.job}/></div>
				<WeeklyGrid 
					tasks={props.tasks} 
					isDateShown={false} 
					taskClicked={props.taskClicked} />
			</div>
			);

	
	};

export default Resource;