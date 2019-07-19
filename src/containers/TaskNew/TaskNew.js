import React, { useEffect } from "react";
import TaskAdd from "../../components/Task/TaskAdd/TaskAdd";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { withRouter } from "react-router-dom";

const NewTask = props => {
  useEffect((props) => {
    props.onFetchTaskOptions();
  }, []);

  const isPM = props.match.url === "/pm" ? true : false;
  let clientProjectList = props.projectList.reduce(
    (clientSpecificProjects, project) => {
      if (project.clientName === "Ford") {
        clientSpecificProjects.push(project);
      }
      return clientSpecificProjects;
      
    }, []
  );

  return (
    <React.Fragment>
      <TaskAdd
        projectList={isPM ? props.projectList : clientProjectList}
        resourceList={props.resourceList}
        closeModal={props.onToggleTaskNew}
        user={isPM ? "pm" : "client"}
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
