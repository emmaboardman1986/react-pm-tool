import React from 'react';
// import classes from './Auth.module.css'
import { Link } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import classes from './Auth.module.css';


const Auth = () => {


	return (
        <div className={classes.Auth}>
		<h1><Link to="/pm"><Button type="button" data-cy="pm-auth">PM</Button></Link></h1>
		<h1><Link to="/client"><Button type="button" data-cy="pm-client">Client</Button></Link></h1>
        </div>
        
		);
}

export default Auth;