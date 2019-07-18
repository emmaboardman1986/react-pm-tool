import React, { useEffect } from "react";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import UnscheduledTaskList from "../../components/UnscheduledTaskList/UnscheduledTaskList";
import Modal from "../../components/UI/Modal/Modal";
import Scheduler from "../../containers/Scheduler/Scheduler";

const UnscheduledTasks = props => {
  useEffect(() => {
    props.onFetchUnscheduledTasks();
  }, []);

  return (
    <div>
      <Modal
        show={props.showSchedulingComponent}
        modalClosed={props.onHideSchedulingComponent}
        role="taskScheduling"
      >
        <Scheduler />
      </Modal>
      {props.unscheduledTasks.length >= 1 ? (
        <UnscheduledTaskList unscheduledTasks={props.unscheduledTasks} />
      ) : (
        <p style={{ marginTop: '10vh', textAlign: 'center'}}>No Unscheduled Task</p>
      )}
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    unscheduledTasks: state.taskReducer.unscheduledTasks,
    showSchedulingComponent: state.taskReducer.showSchedulingComponent
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    onFetchUnscheduledTasks: () => dispatch(actions.fetchUnscheduledTasks()),
    onHideSchedulingComponent: () => dispatch(actions.hideSchedulingComponent())
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(UnscheduledTasks);
