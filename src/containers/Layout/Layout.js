import React from "react";
import Header from "../Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import UnscheduledTasks from "../../containers/UnscheduledTasks/UnscheduledTasks";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/UI/Modal/Modal";
import TaskDetail from "../../components/Task/TaskDetail/TaskDetail";
import TaskNew from "../TaskNew/TaskNew";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { withRouter } from "react-router-dom";

const Layout = props => {
  return (
    <React.Fragment>
      <Modal
        show={props.showTaskNew}
        modalClosed={props.onToggleTaskNewModal}
        role="taskAdd"
      >
        <TaskNew />
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
      {props.match.url === "/" + props.user + "/unscheduledtasks" ? (
        <UnscheduledTasks />
      ) : (
        <Calendar />
      )}
      <Footer clicked={props.onToggleTaskNewModal} />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    projectList: state.taskReducer.projectList,
    resourceList: state.taskReducer.resourceList,
    resourceSchedule: state.resourceReducer.resourceSchedule,
    selectedTask: state.taskReducer.selectedTask,
    showTaskDetail: state.taskReducer.showTaskDetail,
    showTaskNew: state.taskReducer.showTaskNew
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchResourceSchedule: resourceAndEstimate => {
      var t0 = performance.now();
      dispatch(actions.fetchResourceSchedule(resourceAndEstimate))
      var t1 = performance.now();
      console.log(
        "Call to fetchResourceSchedule took " +
          (t1 - t0) +
          " milliseconds.")
    },
    onHandleResourceAvailability: availability =>
      dispatch(actions.handleSchedulePlacement(availability)),
    onCloseTaskDetailModal: () => {
      var t0 = performance.now();
      dispatch(actions.hideTaskDetails())
      var t1 = performance.now();
      console.log(
        "Call to hideTaskDetails took " +
          (t1 - t0) +
          " milliseconds.")
    },
    onToggleTaskNewModal: () => {
      var t0 = performance.now();
       dispatch(actions.toggleTaskNew());
      var t1 = performance.now();
      console.log(
        "Call to toggleTaskNew took " +
          (t1 - t0) +
          " milliseconds.")
    }
      
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Layout));
