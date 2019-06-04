import React from 'react';
import Cell from '../Cell/Cell'
import DayDate from './DayDate/DayDate';
import Hours from './Hours/Hours';
import Resource from '../Resources/Resource/ResourceName/ResourceName';
import classes from './RowHeaders.module.css';
import WeeklyGrid from '../WeeklyGrid/WeeklyGrid';

const RowHeaders = () => (
	<React.Fragment>
		<div className={classes.RowHeaders}>
			<Cell><Resource name={""}/></Cell>
			<WeeklyGrid>
			    <div className={classes.DaysWrapper}>
					<div className={classes.DayWrapper}><DayDate /><Hours /></div>
					<div className={classes.DayWrapper}><DayDate /><Hours /></div>
					<div className={classes.DayWrapper}><DayDate /><Hours /></div>
					<div className={classes.DayWrapper}><DayDate /><Hours /></div>
					<div className={classes.DayWrapper}><DayDate /><Hours /></div>
				</div>
			</WeeklyGrid>
		</div>
	</React.Fragment>
	);

export default RowHeaders;

