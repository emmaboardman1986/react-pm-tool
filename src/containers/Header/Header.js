import React, { useEffect } from "react";
import Logo from "../../components/Logo/Logo";
import classes from "./Header.module.css";
import Notification from "../../components/Notification/Notification";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const Header = props => {
  let { unscheduledTasks } = props;

  useEffect(() => {
    props.onFetchUnscheduledTasks();
  }, []);

  let notification;

  const returnNotification = () => {
    if (props.match.url === "/unscheduledtask") {
      notification = null;
    } else if (
      props.match.url === "/pm" &&
      props.unscheduledTasks.length >= 1
    ) {
      notification = <Notification user="pm" unscheduledTasks="true" />;
    } else if (
      props.match.url === "/pm" &&
      props.unscheduledTasks.length <= 0
    ) {
      notification = <Notification user="pm" unscheduledTasks="false" />;
    } else if (
      props.match.url === "/client" &&
      props.unscheduledTasks.length >= 1
    ) {
      notification = <Notification user="client" unscheduledTasks="true" />;
    } else if (
      props.match.url === "/client" &&
      props.unscheduledTasks.length <= 0
    ) {
      notification = <Notification user="client" unscheduledTasks="false" />;
    }
    return notification;
  };

  return (
    <header className={classes.Header}>
      <Link to="/pm">
        <Logo />
      </Link>
      <Link
        to={{
          pathname: props.match.url + "/unscheduledtasks"
        }}
      >
        {returnNotification()}
      </Link>
    </header>
  );
};

const mapStatetoProps = state => {
  return {
    unscheduledTasks: state.taskReducer.unscheduledTasks
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    onFetchUnscheduledTasks: () => dispatch(actions.fetchUnscheduledTasks())
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(withRouter(Header));
