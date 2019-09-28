import React, { useEffect } from "react";
import Resource from "../../components/Resource/Resource";
import classes from "./Resources.module.css";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Resources = props => {

let { tasks } = props;
const isPM = props.match.url === "/pm" ? true : false;

  useEffect(() => {
	if (isPM){
	props.onFetchTasks();
	} else {
		props.onFetchClientTasks()
	}
  }, []);

  let resourcesComponents;

  if (isPM) {
    resourcesComponents = props.resourceList.map(resource => {
      return (
        <Resource
          key={resource.resourceId}
          name={resource.resourceName}
          job={resource.resourceJobTitle}
          tasks={resource.tasks}
        />
      );
    });
  } else {
    resourcesComponents = props.clientResourceList.map(resource => {
		return (
		  <Resource
			key={resource.resourceId}
			job={resource.resourceJobTitle}
			tasks={resource.tasks}
		  />
		);
	  });
  }

  return <div className={classes.Resources}>{resourcesComponents}</div>;
};

const mapStateToProps = state => {
  return {
	resourceList: state.taskReducer.tasks,
  clientResourceList: state.clientReducer.clientResourceList,
  tasks: state.taskReducer.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
	onFetchTasks: () => dispatch(actions.fetchTasks()),
	onFetchClientTasks: () => dispatch(actions.fetchClientResources())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Resources));
