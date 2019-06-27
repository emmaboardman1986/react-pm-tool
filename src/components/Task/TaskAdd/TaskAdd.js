import React, { useState } from 'react';
import classes from './TaskAdd.module.css';

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
		taskStartTime: '',
		taskEndTime: '',
		resourceId: ''
	})

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

	const handleSchedulePlacement = (scheduleObj) => {
		console.log(scheduleObj);
	}

	let projectList = props.projectList;
	const generatedProjectOptions = projectList.map((project) => 
			<option 
				key={project.projectId}
				id={project.projectId} 
				value={project.projectId}
				name="projectId" 
			>
				{ project.clientName + ": " + project.projectName }
				</option>
		);

	const impactOptions = ["Low", "Medium", "High"];
	const generatedImpactOptions = impactOptions.map((taskImpact) =>
		<option id={taskImpact} key={taskImpact} value={taskImpact}>{taskImpact}</option>
	)

	const resourceOptions = props.resourceList;
	const generatedResourceOptions = resourceOptions.map((resource) =>
		<option id={resource.resourceId} value={resource.resourceId}>{resource.resourceName}</option>
	)

	return (
	<React.Fragment>
	<div className={classes.AddTask}>
	<h2>Add New Task</h2>

	<form>
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
					required/>
			</li>
			<li className={classes.FormRowTextArea}>
				<label htmlFor="taskError">Erroneous behaviour</label>
				<textarea name="taskErroneousBehaviour" onBlur={handleInputChange} required/>
			</li>
				<li className={classes.FormRowTextArea}>
				<label htmlFor="taskNormal">Expected behaviour</label>
				<textarea name="taskExpectedBehaviour" onBlur={handleInputChange} required/>
			</li>
			<li className={classes.FormRow}>
				<label htmlFor="taskImpact">Impact on business</label>
				<select 
					name="taskimpact" 
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
					required/>
			</li>
			<li className={classes.FormRow}>
				<label htmlFor="taskRecentChanges">Recent Changes</label>
				<input type="text" id="taskRecentChanges" name="taskTimeNoticed"/>
			</li>
				<li className={classes.FormRow}>
				<label htmlFor="resourceId">Resource</label>
					<select 
						name="resourceId" 
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
					onBlur={() => {props.handleSchedulePlacement({resourceId: formInput.resourceId, taskEstimate: formInput.taskEstimate})}}
					required/>
			</li>
			<li className={classes.FormRow}>
				<label htmlFor="taskSchedule">Schedule Time Slot</label>
					<select>
						<option value="timenoselection"></option>
						<option value="Mon9000Mon1200">Monday 1st June 09:00 - 12:00</option>
						<option value="Wed1400Wed1700">Wednesday 3rd June 14:00 - 17:00</option>
						<option value="Thurs9000Thurs1200">Thursday 4th June 09:00 - 12:00</option>
					</select>
			</li>
		</ul>
	</form>
		<button className={classes.AddTaskBtn}>Add Task</button>
		<p className={classes.CancelBtn}>Cancel</p>
    </div>
	</React.Fragment>

	);

}
export default AddTask;