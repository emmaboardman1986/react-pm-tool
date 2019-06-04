import React from 'react';
import ResourceName from './ResourceName/ResourceName';
import Cell from '../../Cell/Cell';
import DayDate from '../../RowHeaders/DayDate/DayDate';
import Hours from '../../RowHeaders/Hours/Hours';
import WeeklyGrid from '../../WeeklyGrid/WeeklyGrid';

import classes from './Resource.module.css';

const Resource = (props) => {

		return (
			<div className={classes.Resource}>
				<Cell><ResourceName name={props.name} job={props.job}/></Cell>
				<WeeklyGrid tasks={props.tasks}>
				   <div className={classes.DaysWrapper}>
							<div className={classes.DayWrapper}><DayDate /><Hours /></div>
							<div className={classes.DayWrapper}><DayDate /><Hours /></div>
							<div className={classes.DayWrapper}><DayDate /><Hours /></div>
							<div className={classes.DayWrapper}><DayDate /><Hours /></div>
							<div className={classes.DayWrapper}><DayDate /><Hours /></div>
					</div>
				</WeeklyGrid>


			</div>
			);

	
	};

export default Resource;