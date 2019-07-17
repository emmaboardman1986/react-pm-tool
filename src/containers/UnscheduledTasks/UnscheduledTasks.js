import React, { useEffect } from "react";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import UnscheduledTaskList from '../../components/UnscheduledTaskList/UnscheduledTaskList';



const UnscheduledTasks = props => {
  useEffect(() => {
    props.onFetchUnscheduledTasks();
  }, []);


  return (
    <div>
      <UnscheduledTaskList unscheduledTasks = {props.unscheduledTasks} />
    </div>
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
)(UnscheduledTasks);
