import React from 'react';
import Logo from '../Logo/Logo';
import classes from './Header.module.css';
import Notification from '../Notification/Notification';
import { withRouter } from 'react-router-dom';

const Header = (props) => {

	return (
		<header className={classes.Header}>
			<Logo />
			{props.match.url === "/pm" ? <Notification user="pm" /> : <Notification user="client" />}
		</header>
		);
}

export default withRouter(Header);