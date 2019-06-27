import React from 'react';
import Task from '../../Task/Task';
import DayDate from "../DayDate/DayDate";
import classes from './WeeklyGrid.module.css';

const WeeklyGrid = (props) =>  {

	const getCurrentDate = () => {
		return new Date();
	}
	const getMonday = () => {
		let currentDate = getCurrentDate(),
			currentDay = currentDate.getDay(),
			diff = currentDate.getDate() - currentDay + (currentDay === 0 ? -6 : 1),
			monday = new Date(currentDate.setDate(diff));
		return monday;
	}
	const getWeeklyArray = () => {
		let monday = getMonday(),
			currentWeek = [];
		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];

		const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
		for (var i = 0; i < 5; i++) {
			let tempDate = new Date();
			tempDate.setDate(monday.getDate() + i);

			let dateString =
				weekDays[i] +
				" " +
				tempDate.getDate() +
				getDateOrdinal(tempDate.getDate()) +
				" " +
				months[tempDate.getMonth()];
			currentWeek.push(dateString);
		}
		return currentWeek;
	}

	const getDateOrdinal = (dayOfMonth) => {
	if (dayOfMonth > 3 && dayOfMonth < 21) return "th";
	switch (dayOfMonth % 10) {
		case 1:
			return "st";
		case 2:
			return "nd";
		case 3:
			return "rd";
		default:
			return "th";
	}
}

const returnCurrentWeek = () => {
	const daysOfWeek = getWeeklyArray().map(day => {
		const dayClass = day.replace(/ .*/,'') ;
		return <DayDate key={day} className={dayClass}><p>{props.isDateShown ? day : '' }</p></DayDate>
	})
	return daysOfWeek;
}

const generateTaskClasses = (task) => {
	let color;
	switch (task.clientName) {
	  case "Delos":
		color = "#C6F400";
		break;
	  case "Shogun World":
		color = "#F48A18";
		break;
	  case "Ford":
		color = "#B087FF";
		break;
	  case "Logan":
		color = "#1DA4C1";
		break;
	  default:
		color = "#1DA4C1";
		break;
	}
	let marginRight;
	task.taskEndTime.includes(1700)
	  ? (marginRight = "5px")
	  : (marginRight = "0");
	let dynamicStyles = {
	  backgroundColor: color,
	  gridColumnStart: task.taskStartTime,
	  gridRowStart: "row1-start",
	  gridRowEnd: "row1-end",
	  gridColumnEnd: task.taskEndTime,
	  marginRight: marginRight,
	  zIndex: 2,
	};
	return dynamicStyles;
  }

const returnTasks = () => {
	const tasksArray = Object.values(props.tasks);
	let tasks = tasksArray.map(task => {
		return (
		<Task 
			key={task.taskId} 
			style={generateTaskClasses(task)}
			taskClicked={() => {props.taskClicked(task)}}>
			<p className={classes.ClientName}>{task.clientName}</p>
			<p className={classes.Title}>{task.taskTitle}</p>
		</Task>)
	});
	return tasks;
}



return (
		<div className={classes.WeeklyGrid}>
			{returnCurrentWeek()}
			{props.tasks ? returnTasks() : null}
		</div>

	);

}


export default WeeklyGrid;