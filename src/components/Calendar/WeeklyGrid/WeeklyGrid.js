import React, { Component } from 'react';
import Task from '../Task/Task';
import classes from './WeeklyGrid.module.css';
import DayDate from '../RowHeaders/DayDate/DayDate';
import Hours from '../RowHeaders/Hours/Hours';



class WeeklyGrid extends Component {
	

	returnTasks () {
		const tasksArray = Object.values(this.props.tasks);
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
		
		// );


	render() {
		return (
			<div className={classes.WeeklyGrid}>
				{this.props.children}
				{this.props.tasks ? this.returnTasks() : null}
			</div>

		);
	}

}
	

export default WeeklyGrid;