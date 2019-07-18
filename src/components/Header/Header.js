import React from 'react';
import Logo from '../Logo/Logo';
import classes from './Header.module.css';
import Notification from '../Notification/Notification';
import { withRouter, Link } from 'react-router-dom';

const Header = (props) => {

	let notification;
	
	const returnNotification = () => {
		if (props.match.url === "/unscheduledtask") {
			notification = null
		} else if (props.match.url === "/pm") {
			notification = <Notification user="pm" />
		} else if (props.match.url === "/client") {
			notification = <Notification user="client" />
		} 
		return notification;
	} 
		

	return (
		<header className={classes.Header}>
			<Logo />
			<Link to="/unscheduledtasks">
			{returnNotification()}
			</Link>
		</header>
		);
}

export default withRouter(Header);