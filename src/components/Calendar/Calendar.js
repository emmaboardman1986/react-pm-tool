import React from 'react';
import RowHeaders from './RowHeaders/RowHeaders';
import Resources from '../../containers/Resources/Resources';
import classes from './Calendar.module.css';

const Calendar = () => (

	<div className={classes.ScrollingWrapper}>
		<div className={classes.Wrapper}>
			<RowHeaders />
			<Resources />
		</div>
	
	</div>
);

export default Calendar;