import React from 'react';
import classes from './AddButton.module.css';
import addButton from '../../../assets/addButton.svg';

const AddButton = (props) => (
	<div className={classes.AddButton}>
		<img src={addButton} alt="addButton" onClick={props.clicked} />
	</div>
	);

export default AddButton;


