import React from 'react';
import classes from './AddButton.module.css';
import addButton from '../../../assets/addButton.svg';

const AddButton = (props) => (
	<div className={classes.AddButton}>
		<img src={addButton} alt="addButton" onClick={props.clicked} data-cy="add-task-button" />
	</div>
	);

export default AddButton;


