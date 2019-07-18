import React from "react";
import Task from '../../components/Task/Task'
import classes from './UnscheduledTaskList.module.css'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

const UnscheduledTaskList = props => {

  const inlineStyles = {
     height: '100%',
     width: '100%'
  }

  const returnTasks = () => {
    let tasks = props.unscheduledTasks.map(task => {
      return (
        <div className={classes.UnscheduledTaskList}>
        <Task
          key={task.taskId}
          taskInformation={task}
          style={inlineStyles}
          taskClicked={() => {
          props.onShowSchedulingComponent(task);
          }}
        >
          <p className={classes.ClientName}>
            {task.clientName} :  {task.projectTitle}
            <span className={classes.TaskImpact}>{task.taskImpact}</span>
          </p>
          <p className={classes.TaskTitle}>
            " {task.taskTitle} "
            </p>
           <p className={classes.TaskLabel}>Affected Area</p><p className={classes.TaskInformation}>{task.taskAffectedArea}</p>
           <p className={classes.TaskLabel}>Erroneous Behaviour</p><p className={classes.TaskInformation}>{task.taskErroneousBehaviour}</p>
           <p className={classes.TaskLabel}>Expected Behaviour</p><p className={classes.TaskInformation}>{task.taskExpectedBehaviour}</p>
        
        </Task>
        </div>
      );
    });
    return tasks;
  };

  return (
    <div>
      <h1>UnscheduledTasks</h1>
      {props.unscheduledTasks ? returnTasks() : "No unscheduled Tasks"}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onShowSchedulingComponent: () => dispatch(actions.showSchedulingComponent())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UnscheduledTaskList);