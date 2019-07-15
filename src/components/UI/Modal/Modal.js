import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

const Modal = (props) => (
	<React.Fragment>
		<Backdrop 
			show={props.show}
			clicked={props.modalClosed} />
		<div 
			className={classes.Modal}
			style={{
				transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
				opacity: props.show ? '1' : '0',
				padding: props.role === "taskDetail" ? '0' : '',
				top: props.role === "taskDetail" ? '10%' : '',
				border: props.role === "taskDetail" ? 'var(--dark-grey) solid 1px;' : ''

			}}>
			{props.children}
		</div>

	</React.Fragment>
	);

export default Modal;

