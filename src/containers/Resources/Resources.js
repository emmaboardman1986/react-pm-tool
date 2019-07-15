import React, {useState, useEffect} from 'react';
import Resource from '../../components/Resource/Resource';
import classes from './Resources.module.css';
import { RepositoryFactory } from "../../utils/RepositoryFactory";
import axios from "axios";
import { tsPropertySignature } from '@babel/types';
const ResourceRepository = RepositoryFactory.get("resources");
const TaskRepository = RepositoryFactory.get("tasks");


const Resources = (props) => {
	
	const [resourceList, setResourceList] = useState([]);

	useEffect(() => {
		var t0 = performance.now();
		axios.get('http://40414669.wdd.napier.ac.uk/inc/readTaskDetails.php')
		.then(result => {
		console.log(result);
		setResourceList(result.data);
		});
		var t1 = performance.now();
		console.log(
		  "Call to useEffect for readTaskDetails took " + (t1 - t0) + " milliseconds."
		);
		return () => {
			setResourceList([]);
		}
		
	}, []);


	let resourcesComponents = resourceList.map(resource => {
		return (<Resource 
					key={resource.resourceId} 
					name={resource.resourceName} 
					job={resource.resourceJobTitle} 
					tasks={resource.tasks}
					taskClicked={props.taskClicked}
					 />);	
	})

    return (
		<div className={classes.Resources}>
		{resourcesComponents}
		</div>
	);

};

export default Resources;