import React from 'react';
import classes from './DayDate.module.css';


const DayDate = (props) => {
	
	const generateDayClasses = () => {
		let colStart, colEnd;
		switch (props.className){
			case "Monday":
				colStart = "Mon0900";
				colEnd = "Mon1700";
				break;
			case "Tuesday":
				colStart = "Tues0900";
				colEnd = "Tue1700";
				break;
			case "Wednesday":
				colStart = "Wed0900";
				colEnd = "Wed1700";
				break;
			case "Thursday":
				colStart = "Thurs0900";
				colEnd = "Thurs1700";
				break;
			case "Friday":
				colStart = "Fri0900";
				colEnd = "Fri1700";
				break;
			default:
				colStart = "Mon0900";
				colEnd = "Mon1700";

		}
		let leftBorder;
		if (props.className === "Monday"){
			leftBorder = "1px var(--dark-grey) solid"
		}
		const styles = {
			gridColumnStart: colStart,
			gridColumnEnd: colEnd,
			borderLeft: leftBorder
		}
		return styles;
	};

	return (
	<div className={`${classes.Date} ${classes.Weekday}`} style={generateDayClasses()}>
		{props.children}
	</div>
	)

}
export default DayDate;