import React from "react";
import { withRouter } from "react-router-dom";
import pmNotification from "../../assets/notification.svg";
import clientSchedulePending from "../../assets/schedulePending.svg";
import clientScheduleComplete from "../../assets/scheduleComplete.svg";
import classes from "./Notification.module.css";

const Notification = props => (
  <div className={classes.Notification}>
    {props.user == "pm" ? (
      <img
        src={pmNotification}
        alt="pm notification"
        className={classes.PMNotification}
      />
    ) : (
        <img
        src={clientSchedulePending}
        alt="client notification"
        className={classes.ClientNotification}
      />
    )}
  </div>
);

export default Notification;
