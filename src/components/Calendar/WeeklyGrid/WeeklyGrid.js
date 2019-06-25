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
			diff = currentDate.getDate() - currentDay + (currentDay == 0 ? -6 : 1),
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
		console.log(dayClass)
		return <DayDate key={day} className={dayClass}><p>{props.isDateShown ? day : '' }</p></DayDate>
	})
	return daysOfWeek;
}

const returnTasks = () => {
	const tasksArray = Object.values(props.tasks);
	console.log(tasksArray);
	let tasks = tasksArray.map(task => {
		let taskStyle = {
			backgroundColor: task.color,
			gridColumnStart: task.startDayTime,
			gridColumnEnd: task.endDayTime
		}
		const title = task.title;
		console.log(title);
		return <Task key={task.title} title={task.title} style={taskStyle} />;
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