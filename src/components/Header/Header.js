import React from 'react';
import Logo from '../Logo/Logo';
import classes from './Header.module.css';
import Notification from '../Notification/Notification';
import { withRouter, Link } from 'react-router-dom';

const Header = (props) => {

	return (
		<header className={classes.Header}>
			<Logo />
			<Link to="/unscheduledtasks">
			{props.match.url === "/pm" ? <Notification user="pm" /> : <Notification user="client" />}
			</Link>
		</header>
		);
}

export default withRouter(Header);