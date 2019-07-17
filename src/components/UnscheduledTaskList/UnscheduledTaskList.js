import React from "react";
import Task from '../../components/Task/Task'
import classes from './UnscheduledTaskList.module.css'

const UnscheduledTaskList = props => {

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
      zIndex: 2
    };
    var t1 = performance.now();
    console.log(
      "Call to generateTaskClasses took " + (t1 - t0) + " milliseconds."
    );
    return dynamicStyles;
  };

 
  // const returnTasks = () => {
  //   let tasks = props.unscheduledTasks.map(task => {
  //     return (
  //       <Task
  //         key={task.taskId}
  //         style={generateTaskClasses(task)}
  //         taskClicked={() => {
  //           // props.taskClicked(task);
  //           props.onShowTaskDetail(task);
  //         }}
  //       >
  //         <p className={classes.ClientName}>
  //           {task.taskEstimate > 3
  //             ? task.clientName
  //             : task.clientName.substring(0, 2) + ".."}
  //         </p>
  //         <p className={classes.Title}>
  //           {task.taskEstimate > 3 ? task.taskTitle : "( ... )"}
  //         </p>
  //       </Task>
  //     );
  //   });
  //   return tasks;
  // };

  return (
    <div>
      <h1>UnscheduledTasks</h1>
      {/* {props.unscheduledTasks ? returnTasks() : null} */}
    </div>
  );
};

export default UnscheduledTaskList