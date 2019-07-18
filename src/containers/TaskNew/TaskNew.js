import React, { useEffect } from "react";
import TaskAdd from "../../components/Task/TaskAdd/TaskAdd";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { withRouter } from "react-router-dom";

const NewTask = props => {
  useEffect(() => {
    props.onFetchTaskOptions();
  }, []);


  return (
    <React.Fragment>
      <TaskAdd
        projectList={props.projectList}
        resourceList={props.resourceList}
        closeModal={props.onToggleTaskNew}
      />
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
