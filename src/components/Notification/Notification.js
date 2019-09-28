import React from "react";
import { withRouter } from "react-router-dom";
import pmSchedulePending from "../../assets/notification.svg";
import pmScheduleComplete from "../../assets/noNewTasks.svg";
import clientSchedulePending from "../../assets/schedulePending.svg";
import clientScheduleComplete from "../../assets/scheduleComplete.svg";
import classes from "./Notification.module.css";

const Notification = props => {
  let notificationIcon;

  if (props.user === "pm" && props.unscheduledTasks === "true"){
    notificationIcon =  <img
    src={pmSchedulePending}
    alt="pm notification for unscheduled tasks"
    className={classes.PMNotification}
  /> 
  } else if (props.user === "pm" && props.unscheduledTasks === "false"){
    notificationIcon =  <img
    src={pmScheduleComplete}
    alt="pm notification for no unscheduled tasks"
    className={classes.PMNotification}
  /> 
  } else if (props.user === "client" && props.unscheduledTasks === "true"){
    notificationIcon =  <img
    src={clientSchedulePending}
    alt="client notification for unscheduled tasks"
    className={classes.ClientNotification}
  /> 
  } else if (props.user === "client" && props.unscheduledTasks === "false"){
    notificationIcon =  <img
    src={clientScheduleComplete}
    alt="pm notification"
    className={classes.ClientNotification}
  /> 
  }
  return(
    <div className={classes.Notification}>
      {notificationIcon}
    </div>
  );
};

export default withRouter(Notification);
