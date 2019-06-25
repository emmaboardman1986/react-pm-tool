import React from 'react';
import DayDate from './DayDate/DayDate';
import Hours from './Hours/Hours';
import Resource from '../Resources/Resource/ResourceName/ResourceName';
import classes from './RowHeaders.module.css';
import WeeklyGrid from '../WeeklyGrid/WeeklyGrid';

const RowHeaders = () => (
	<React.Fragment>
		<div className={classes.RowHeaders}>
			<div><Resource name={""}/></div>
			<WeeklyGrid isDateShown={true}>
			</WeeklyGrid>
		</div>
	</React.Fragment>
	);

export default RowHeaders;

