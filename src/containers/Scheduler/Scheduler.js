import React, { useEffect } from "react";
import Schedule from "../../components/Schedule/Schedule";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const Scheduler = props => {
  useEffect(() => {
    props.onFetchTaskOptions();
  }, []);

  let { resourceSchedule, resourceAndEstimate } = props;

  useEffect(() => {
    props.onHandleSchedulePlacement(resourceAndEstimate, resourceSchedule);
  }, [resourceSchedule, resourceAndEstimate]);

  return (
    <Schedule
      taskToBeScheduled={props.taskToBeScheduled}
      resourceList={props.resourceList}
      handleSchedulePlacement={props.onFetchResourceSchedule}
      availableTimes={props.availableTimes}
      handleScheduleSubmit={props.onHandleScheduleSubmit}
    />
  );
};

const mapStateToProps = state => {
  return {
    taskToBeScheduled: state.taskReducer.taskToBeScheduled,
    resourceList: state.taskReducer.resourceList,
    resourceAndEstimate: state.resourceReducer.resourceAndEstimate,
    resourceSchedule: state.resourceReducer.resourceSchedule,
    availableTimes: state.resourceReducer.availability
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchTaskOptions: () => dispatch(actions.fetchTaskOptions()),
    onFetchResourceSchedule: resourceAndEstimate => {
      var t0 = performance.now();
      dispatch(actions.fetchResourceSchedule(resourceAndEstimate));
      var t1 = performance.now();
      console.log(
        "Call to fetchResourceSchedule took " +
          (t1 - t0) +
          " milliseconds."
      );
    },
    onHandleSchedulePlacement: (resourceAndEstimate, resourceSchedule) =>
      dispatch(
        actions.handleSchedulePlacement(resourceAndEstimate, resourceSchedule)
      ),
    onHandleScheduleSubmit: formInput =>
      dispatch(actions.handleScheduleSubmit(formInput))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scheduler);
