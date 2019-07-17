import React from 'react';
// import classes from './Auth.module.css'
import { Link } from 'react-router-dom'


const Auth = () => {


	return (
        <div>
		<h1><Link to="/pm">PM</Link></h1>
		<h1><Link to="/client">Client</Link></h1>
        </div>
        
		);
}

export default Auth;