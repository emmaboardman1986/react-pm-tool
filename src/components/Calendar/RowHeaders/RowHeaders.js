import React from 'react';
import Resource from '../../Resource/ResourceName/ResourceName';
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

