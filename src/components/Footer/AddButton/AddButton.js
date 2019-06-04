import React from 'react';
import classes from './AddButton.module.css';
import addButton from '../../../assets/addButton.svg';

const AddButton = () => (
	<div className={classes.AddButton}>
		<img src={addButton} alt="addButton" />
	</div>
	);

export default AddButton;