import React, { useEffect } from "react";
import TaskAdd from "../../components/Task/TaskAdd/TaskAdd";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { withRouter } from "react-router-dom";
import Scheduler from "../Scheduler/Scheduler";

const NewTask = props => {
  useEffect(() => {
    props.onFetchTaskOptions();
  }, []);

  const isPM = props.match.url === "/pm" ? true : false;

  let scheduler;

  if (isPM) {
    scheduler = <Scheduler />;
  } else {
    scheduler = "No schedule for you";
  }

  return (
    <React.Fragment>
      <TaskAdd
        projectList={props.projectList}
        resourceList={props.resourceList}
        closeModal={props.onToggleTaskNew}
      />
      {scheduler}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    projectList: state.taskReducer.projectList,
    resourceList: state.taskReducer.resourceList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchTaskOptions: () => dispatch(actions.fetchTaskOptions()),
    onToggleTaskNew: () => dispatch(actions.toggleTaskNew())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewTask));
