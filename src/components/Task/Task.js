import React from "react";
import classes from "./Task.module.css";

const Task = props => {

	const generateTaskClasses = task => {
		var t0 = performance.now();
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
		var t1 = performance.now();
		console.log(
		  "Call to generateTaskClasses took " + (t1 - t0) + " milliseconds."
		);
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
