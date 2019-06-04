import React from 'react';
import classes from './AddTask.module.css';

const AddTask = () => (
	<React.Fragment>
	<div className={classes.AddTask}>
	<h2>Add New Task</h2>

	<form>
		<ul className={classes.FormWrapper}>
			<li className={classes.FormRow}>
				<label htmlFor="projectId">Project</label>
					<select>
						<option value="projnoselection"></option>
						<option value="proj1">Proj1</option>
						<option value="proj2">Proj2</option>
						<option value="proj3">Proj3</option>
					</select>
			</li>
			<li className={classes.FormRow}>
				<label htmlFor="taskTitle">Task Title</label>
				<input type="text" id="taskTitle" />
			</li>
			<li className={classes.FormRow}>
				<label htmlFor="taskArea">Affected area</label>
				<input type="text" id="taskArea" />
			</li>
			<li className={classes.FormRowTextArea}>
				<label htmlFor="taskError">Erroneous behaviour</label>
				<textarea />
			</li>
				<li className={classes.FormRowTextArea}>
				<label htmlFor="taskNormal">Expected behaviour</label>
				<textarea />
			</li>
			<li className={classes.FormRow}>
				<label htmlFor="taskImpact">Impact on business</label>
				<input type="text" id="taskImpact" />
			</li>
			<li className={classes.FormRow}>
				<label htmlFor="taskProblemSince">Time noticed</label>
				<input type="text" id="taskProblemSince" />
			</li>
			<li className={classes.FormRow}>
				<label htmlFor="taskRecentChanges">Recent Changes</label>
				<input type="text" id="taskRecentChanges" />
			</li>
				<li className={classes.FormRow}>
				<label htmlFor="resourceId">Resource</label>
					<select>
						<option value="resourcenoselection"></option>
						<option value="res1">Bernard</option>
						<option value="res2">Dolores</option>
						<option value="res3">Teddy</option>
					</select>
			</li>
			<li className={classes.FormRow}>
				<label htmlFor="taskEstimate">Estimate</label>
				<input type="text" id="taskEstimate" />
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

export default AddTask;