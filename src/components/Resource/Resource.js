import React from 'react';
import ResourceName from './ResourceName/ResourceName';
import DayDate from '../Calendar/DayDate/DayDate';
import Hours from '../Calendar/Hours/Hours';
import WeeklyGrid from '../../containers/WeeklyGrid/WeeklyGrid';

import classes from './Resource.module.css';

const Resource = (props) => {

		return (
			<div className={classes.Resource}>
				<div><ResourceName name={props.name} job={props.job}/></div>
				<WeeklyGrid tasks={props.tasks} isDateShown={true} />
			</div>
			);

	
	};

export default Resource;