import React, { useState, useEffect } from 'react';
import classes from './TaskAdd.module.css';
import axios from 'axios';

const AddTask = (props) => {

	const [formInput, setFormInput] = useState({
		projectId: '',
		taskTitle: '',
		taskAffectedArea: '',
		taskErroneousBehaviour: '',
		taskExpectedBehaviour: '',
		taskImpact: '',
		taskTimeNoticed: '',
		taskEstimate: '',
		taskStartTime: props.availableTimes.startTime,
		taskEndTime: props.availableTimes.endTime,
		taskResource: '',
		taskRecentChanges: ''
	})

	useEffect(() => {
		setFormInput({
			...formInput,
			taskStartTime: props.availableTimes.startTime,
			taskEndTime: props.availableTimes.endTime
		});
	}, [props.availableTimes]);

	// const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const handleInputChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		setFormInput({
			...formInput,
			[name]: value
		});

		console.log(formInput);
	}

	let projectList = props.projectList;
	const generatedProjectOptions = projectList.map((project) =>
		<option
			key={project.projectId}
			id={project.projectId}
			value={project.projectId}
			name="projectId"
		>
			{project.clientName + ": " + project.projectName}
		</option>
	);

	const impactOptions = ["Low", "Medium", "High"];
	const generatedImpactOptions = impactOptions.map((taskImpact) =>
		<option id={taskImpact} key={taskImpact} value={taskImpact}>{taskImpact}</option>
	)

	let resourceOptions = props.resourceList;
	const generatedResourceOptions = resourceOptions.map((resource) =>
		<option id={resource.resourceId} value={resource.resourceId}>{resource.resourceName}</option>
	)

	const generateTimeSlots = (availableTimes) => {
		console.log("DO I RUN");
		if (availableTimes.endTime === '') {
			return <p>Requires resource and estimate input</p>
		} else {
			return (
				<div className={classes.Timeslots}>
					<input
						className={classes.TimeSlots}
						readOnly
						value={availableTimes.startTime}
						placeholder={availableTimes.startTime}
					/> -
				<input
						className={classes.TimeSlots}
						readOnly
						value={availableTimes.endTime}
						placeholder={availableTimes.endTime}
					/>
				</div>
			);
		}
	}


	const handleSubmit = (event) => {
		console.log("inside submit: " + formInput);
		event.preventDefault()
		axios
			.post("http://40414669.wdd.napier.ac.uk/inc/postNewTask.php", formInput)
			.then(response => {
				console.log(response);
				props.closeModal();
			})
			.catch(error => console.log(error));
	}


	return (
		<React.Fragment>
			<div className={classes.AddTask}>
				<h2>Add New Task</h2>

				<form onSubmit={handleSubmit}>
					<ul className={classes.FormWrapper}>
						<li className={classes.FormRow}>
							<label htmlFor="projectId">Project</label>
							<select
								name="projectId"
								onChange={handleInputChange}
								value={formInput.projectId}
								required>
								{generatedProjectOptions}
							</select>
						</li>
						<li className={classes.FormRow}>
							<label htmlFor="taskTitle">Task Title</label>
							<input
								type="text"
								id="taskTitle"
								name="taskTitle"
								onBlur={handleInputChange}
								required
							/>
						</li>
						<li className={classes.FormRow}>
							<label htmlFor="taskArea">Affected area</label>
							<input
								type="text"
								id="taskArea"
								name="taskAffectedArea"
								onBlur={handleInputChange}
								required />
						</li>
						<li className={classes.FormRowTextArea}>
							<label htmlFor="taskError">Erroneous behaviour</label>
							<textarea name="taskErroneousBehaviour" onBlur={handleInputChange} required />
						</li>
						<li className={classes.FormRowTextArea}>
							<label htmlFor="taskNormal">Expected behaviour</label>
							<textarea name="taskExpectedBehaviour" onBlur={handleInputChange} required />
						</li>
						<li className={classes.FormRow}>
							<label htmlFor="taskImpact">Impact on business</label>
							<select
								name="taskImpact"
								onChange={handleInputChange}
								value={formInput.taskImpact}
								required>
								{generatedImpactOptions}
							</select>
						</li>
						<li className={classes.FormRow}>
							<label htmlFor="taskProblemSince">Time noticed</label>
							<input
								type="text"
								id="taskProblemSince"
								name="taskTimeNoticed"
								onBlur={handleInputChange}
								required />
						</li>
						<li className={classes.FormRow}>
							<label htmlFor="taskRecentChanges">Recent Changes</label>
							<input
								type="text"
								id="taskRecentChanges"
								name="taskRecentChanges"
							/>
						</li>
						<li className={classes.FormRow}>
							<label htmlFor="resourceId">Resource</label>
							<select
								name="taskResource"
								onChange={handleInputChange}
								value={formInput.resourceId}
								required>
								{generatedResourceOptions}
							</select>
						</li>
						<li className={classes.FormRow}>
							<label htmlFor="taskEstimate">Estimate</label>
							<input
								type="text"
								id="taskEstimate"
								name="taskEstimate"
								onChange={handleInputChange}
								onBlur={() => { props.handleSchedulePlacement({ resourceId: formInput.taskResource, taskEstimate: formInput.taskEstimate }) }}
								required />
						</li>
						<li className={classes.FormRow}>
							<label htmlFor="taskSchedule">First Available Time Slot</label>
							{generateTimeSlots(props.availableTimes)}
						</li>
					</ul>
					<button type="submit" className={classes.AddTaskBtn}>Add Task</button>
					<p className={classes.CancelBtn} onClick={props.closeModal}>Cancel</p>
				</form>

			</div>
		</React.Fragment>

	);

}
export default AddTask;