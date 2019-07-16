import React, {useState, useEffect} from 'react';
import Resource from '../../components/Resource/Resource';
import classes from './Resources.module.css';
import { RepositoryFactory } from "../../utils/RepositoryFactory";
import axios from "axios";
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { tsPropertySignature } from '@babel/types';
const ResourceRepository = RepositoryFactory.get("resources");
const TaskRepository = RepositoryFactory.get("tasks");


const Resources = (props) => {
	
	useEffect(() => {
		props.onFetchTasks();
	}, [])

	let resourcesComponents = null
	
	// props.resourceList.map(resource => {
	// 	return (<Resource 
	// 				key={resource.resourceId} 
	// 				name={resource.resourceName} 
	// 				job={resource.resourceJobTitle} 
	// 				tasks={resource.tasks}
	// 				taskClicked={props.taskClicked}
	// 				 />);	
	// })

    return (
		<div className={classes.Resources}>
		{resourcesComponents}
		</div>
	);

};

const mapStateToProps = state => {
	return {
		resourceList: state.taskReducer.tasks
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchTasks: () => dispatch(actions.fetchTasks())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Resources);