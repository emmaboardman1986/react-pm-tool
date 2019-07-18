import React, { useState, useEffect } from "react";
import classes from "./Schedule.module.css";
import taskFormClasses from "../../components/Task/TaskAdd/TaskAdd.module.css";
import unscheduledClasses from "../../components/UnscheduledTaskList/UnscheduledTaskList.module.css";
import { Redirect } from "react-router-dom"

const Schedule = props => {
  const [formInput, setFormInput] = useState({
    taskId: props.taskToBeScheduled.taskId,
    taskEstimate: "",
    taskStartTime: props.availableTimes.startTime,
    taskEndTime: props.availableTimes.endTime,
    taskResource: ""
  });

  useEffect(() => {
    setFormInput({
      ...formInput,
      taskId: props.taskToBeScheduled.taskId,
      taskStartTime: props.availableTimes.startTime,
      taskEndTime: props.availableTimes.endTime
    });
  }, [props.availableTimes]);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const generateTimeSlots = availableTimes => {
    if (availableTimes.endTime === "") {
      return <p>Requires resource and estimate input</p>;
    } else {
      return (
        <div className={taskFormClasses.Timeslots} data-cy="timeslots">
          <input
            className={taskFormClasses.TimeSlots}
            readOnly
            value={availableTimes.startTime}
            placeholder={availableTimes.startTime}
          />{" "}
          -
          <input
            className={taskFormClasses.TimeSlots}
            readOnly
            value={availableTimes.endTime}
            placeholder={availableTimes.endTime}
          />
        </div>
      );
    }
  };

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormInput({
      ...formInput,
      [name]: value
    });

    console.log(formInput);
  };

  let resourceOptions = props.resourceList;
  const generatedResourceOptions = resourceOptions.map(resource => (
    <option id={resource.resourceId} value={resource.resourceId}>
      {resource.resourceName}
    </option>
  ));

  let redirect = null; 
  isFormSubmitted ? redirect =  <Redirect to="/pm"/> : redirect = null;

  return (
    <div className={classes.Schedule}>
      <div className={unscheduledClasses.TopRowWrapper}>
        <div className={unscheduledClasses.ClientNameWrapper}>
          <p className={unscheduledClasses.ClientName}>
            {props.taskToBeScheduled.clientName} :{" "}
            {props.taskToBeScheduled.projectTitle}
          </p>
        </div>
        <div className={unscheduledClasses.ImpactWrapper}>
          <p className={unscheduledClasses.TaskImpact}>
            {props.taskToBeScheduled.taskImpact}
          </p>
        </div>
      </div>

      <p className={unscheduledClasses.TaskTitle}>
        " {props.taskToBeScheduled.taskTitle} "
      </p>

      <form
        onSubmit={e => {
          e.preventDefault();
          props.handleScheduleSubmit(formInput);
          setIsFormSubmitted(true);    
        }}
      >
        <div className={taskFormClasses.TopOnDesktop}>
          <li className={taskFormClasses.FormRow}>
            <label htmlFor="resourceId">Resource</label>
            <select
              name="taskResource"
              onChange={handleInputChange}
              id="resourceId"
              value={formInput.resourceId}
              required
            >
              {generatedResourceOptions}
            </select>
          </li>
          <li className={taskFormClasses.FormRow}>
            <label htmlFor="taskEstimate">Estimate</label>
            <input
              type="text"
              id="taskEstimate"
              name="taskEstimate"
              onChange={handleInputChange}
              onBlur={() => {
                props.handleSchedulePlacement({
                  resourceId: formInput.taskResource,
                  taskEstimate: formInput.taskEstimate
                });
              }}
              required
            />
          </li>
          <li className={taskFormClasses.FormRow}>
            <label htmlFor="taskSchedule">First Available Time Slot</label>
            <p class={taskFormClasses.DefaultMessage}>
              {props.availableTimes.endTime
                ? generateTimeSlots(props.availableTimes)
                : "Requires resource and estimate input"}
            </p>
          </li>
        </div>
        <div className={taskFormClasses.BottomOnDesktop}>
          <button
            type="submit"
            data-cy="add-task-submit"
            className={taskFormClasses.AddTaskBtn}
          >
            Schedule Task
          </button>
          <p
            className={taskFormClasses.CancelBtn}
            onClick={props.closeModal}
            data-cy="add-task-cancel"
          >
            Cancel
          </p>
        </div>
      </form>
      {redirect}
    </div>
  );
};

export default Schedule;
