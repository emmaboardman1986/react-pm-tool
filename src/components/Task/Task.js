import React from "react";
import classes from "./Task.module.css";

const Task = props => {

	const generateTaskClasses = task => {
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
		let dynamicStyles = {
		  backgroundColor: color,
		};
		return dynamicStyles;
	  };

  return (<div
	style={{...props.style, ...generateTaskClasses(props.taskInformation)}}
    className={classes.Task}
    onClick={props.taskClicked}
	data-cy="task"
  >
    {props.children}
  </div>
);

}

export default Task;
