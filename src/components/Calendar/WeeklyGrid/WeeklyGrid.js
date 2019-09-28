import React from "react";
import Task from "../../Task/Task";
import DayDate from "../DayDate/DayDate";
import classes from "./WeeklyGrid.module.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

const WeeklyGrid = props => {
  const getCurrentDate = () => {
    return new Date();
  };
  const getMonday = () => {
    let currentDate = getCurrentDate(),
      currentDay = currentDate.getDay(),
      diff = currentDate.getDate() - currentDay + (currentDay === 0 ? -6 : 1),
      monday = new Date(currentDate.setDate(diff));
    return monday;
  };
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
  };

  const getDateOrdinal = dayOfMonth => {
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
  };

  const returnCurrentWeek = () => {
    const daysOfWeek = getWeeklyArray().map(day => {
      const dayClass = day.replace(/ .*/, "");
      return (
        <DayDate key={day} className={dayClass}>
          <p>{props.isDateShown ? day : ""}</p>
        </DayDate>
      );
    });
    return daysOfWeek;
  };

  const generateTaskClasses = task => {
    let marginRight;
    task.taskEndTime.includes(1700)
      ? (marginRight = "5px")
      : (marginRight = "0");
    let dynamicStyles = {
      gridColumnStart: task.taskStartTime,
      gridRowStart: "row1-start",
      gridRowEnd: "row1-end",
      gridColumnEnd: task.taskEndTime,
      marginRight: marginRight,
      zIndex: 2
    };
    return dynamicStyles;
  };

  const returnTasks = () => {
    const tasksArray = Object.values(props.tasks);
    let tasks = tasksArray.map(task => {
      return (
        <Task
          key={task.taskId}
          style={generateTaskClasses(task)}
          taskInformation={task}
          taskClicked={() => {
            props.onShowTaskDetail(task);
          }}
        >
          <p className={classes.ClientName}>
            {task.taskEstimate > 3
              ? task.clientName
              : task.clientName.substring(0, 2) + ".."}
          </p>
          <p className={classes.Title}>
            {task.taskEstimate > 3 ? task.taskTitle : "( ... )"}
          </p>
        </Task>
      );
    });
    return tasks;
  };

  return (
    <div className={classes.WeeklyGrid}>
      {returnCurrentWeek()}
      {props.tasks ? returnTasks() : null}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onShowTaskDetail: task => {
      var t0 = performance.now();
      dispatch(actions.showTaskDetails(task))
      var t1 = performance.now();
    console.log(
      "Call to showTaskDetails took " +
        (t1 - t0) +
        " milliseconds."
    );
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(WeeklyGrid);
