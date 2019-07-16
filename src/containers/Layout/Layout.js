import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/UI/Modal/Modal";
import TaskAdd from "../../components/Task/TaskAdd/TaskAdd";
import TaskDetail from "../../components/Task/TaskDetail/TaskDetail";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const Layout = props => {
  const [showTaskAdd, setTaskAdd] = useState(false);

  useEffect(() => {
    props.onFetchTaskOptions();
  }, []);

  useEffect(() => {
    handleSchedulePlacement(resourceAndEstimate);
    console.log(resourceAndEstimate);
  }, [props.resourceSchedule, resourceAndEstimate]);

  const handleTaskAdd = () => {
    setTaskAdd(!showTaskAdd);
  };

  const handleSchedulePlacement = resourceAndEstimate => {
    var t0 = performance.now();
    console.log("resource schedule: " + props.resourceSchedule);
    const weeklyAvailability = Array(45).fill(true);
    const weeklyTimeSlots = [
      "Mon0900",
      "Mon1000",
      "Mon1100",
      "Mon1200",
      "Mon1300",
      "Mon1400",
      "Mon1500",
      "Mon1600",
      "Mon1700",
      "Tues0900",
      "Tues1000",
      "Tues1100",
      "Tues1200",
      "Tues1300",
      "Tues1400",
      "Tues1500",
      "Tues1600",
      "Tues1700",
      "Wed0900",
      "Wed1000",
      "Wed1100",
      "Wed1200",
      "Wed1300",
      "Wed1400",
      "Wed1500",
      "Wed1600",
      "Wed1700",
      "Thurs0900",
      "Thurs1000",
      "Thurs1100",
      "Thurs1200",
      "Thurs1300",
      "Thurs1400",
      "Thurs1500",
      "Thurs1600",
      "Thurs1700",
      "Fri0900",
      "Fri1000",
      "Fri1100",
      "Fri1200",
      "Fri1300",
      "Fri1400",
      "Fri1500",
      "Fri1600",
      "Fri1700"
    ];
    if (props.resourceSchedule.length > 0) {
      for (let n = 0; n < props.resourceSchedule.length; n++) {
        const startTime = props.resourceSchedule[n].taskStartTime;
        const estimatedTime = props.resourceSchedule[n].taskEstimate;
        for (let i = 0; i < weeklyTimeSlots.length; i++) {
          if (weeklyTimeSlots[i] == startTime) {
            for (let j = 0; j < estimatedTime; j++) {
              weeklyAvailability[i + j] = false;
            }
          }
        }
      }
    }
    console.log(weeklyAvailability);
    const estimateArray = Array(resourceAndEstimate.taskEstimate).fill(true);
    let indexOfFirstAvailability = findAvailability(
      weeklyAvailability,
      estimateArray
    );
    const endTime =
      parseInt(indexOfFirstAvailability) +
      parseInt(resourceAndEstimate.taskEstimate);
    props.onHandleResourceAvailability({
      startTime: weeklyTimeSlots[indexOfFirstAvailability],
      endTime: weeklyTimeSlots[endTime]
    });
    var t1 = performance.now();
    console.log(
      "Call to handleSchedulePlacement took " + (t1 - t0) + " milliseconds."
    );
  };

  const findAvailability = (arr, subarr) => {
    var t0 = performance.now();
    for (var i = 0; i < 1 + (arr.length - subarr.length); i++) {
      var j = 0;
      for (; j < subarr.length; j++) if (arr[i + j] !== subarr[j]) break;
      if (j == subarr.length) return i;
    }
    var t1 = performance.now();
    console.log(
      "Call to findAvailability took " + (t1 - t0) + " milliseconds."
    );
    return -1;
  };

  return (
    <React.Fragment>
      <Modal show={showTaskAdd} modalClosed={handleTaskAdd} role="taskAdd">
        <TaskAdd
          projectList={props.projectList}
          resourceList={props.resourceList}
          handleSchedulePlacement={props.onFetchResourceSchedule}
          availableTimes={props.availability}
          closeModal={handleTaskAdd}
        />
      </Modal>
      <Modal
        show={props.showTaskDetail}
        modalClosed={props.onCloseTaskDetailModal}
        role="taskDetail"
      >
        <TaskDetail
          taskTitle={props.selectedTask.taskTitle}
          taskClientName={props.selectedTask.clientName}
          taskImpact={props.selectedTask.taskImpact}
          taskProject={props.selectedTask.taskProjectTitle}
          taskError={props.selectedTask.taskErroneousBehaviour}
          taskStartTime={props.selectedTask.taskStartTime}
          taskEndTime={props.selectedTask.taskEndTime}
          closeModal={props.onCloseTaskDetailModal}
        />
      </Modal>
      <Header />
      <Calendar />
      <Footer clicked={handleTaskAdd} />
    </React.Fragment>
  );
};

const resourceAndEstimate = {
  resourceId: 1,
  taskEstimate: 4
};

const mapStateToProps = state => {
  return {
    projectList: state.taskReducer.projectList,
    resourceList: state.taskReducer.resourceList,
    resourceSchedule: state.resourceReducer.resourceSchedule,
    selectedTask: state.taskReducer.selectedTask,
    showTaskDetail: state.taskReducer.showTaskDetail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchTaskOptions: () => dispatch(actions.fetchTaskOptions()),
    onFetchResourceSchedule: resourceAndEstimate =>
      dispatch(actions.fetchResourceSchedule(resourceAndEstimate)),
    onHandleResourceAvailability: availability =>
      dispatch(actions.handleSchedulePlacement(availability)),
    onCloseTaskDetailModal: () => dispatch(actions.hideTaskDetails())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
