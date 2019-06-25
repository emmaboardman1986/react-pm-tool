import React, {useState, useEffect} from 'react';
import Resource from '../../components/Resource/Resource';
import classes from './Resources.module.css';
import { RepositoryFactory } from "../../utils/RepositoryFactory";
import axios from "axios";
const ResourceRepository = RepositoryFactory.get("resources");
const TaskRepository = RepositoryFactory.get("tasks");


const Resources = () => {
	
	const [resourceList, setResourceList] = useState([]);

	useEffect(() => {
		axios.get('http://40414669.wdd.napier.ac.uk/inc/readTaskDetails.php')
		.then(result => {
		console.log(result);
		setResourceList(result.data);
		});
		return () => {
			setResourceList([]);
		}
	}, []);

	let resourcesComponents = resourceList.map(resource => {
		return (<Resource key={resource.resourceId} name={resource.resourceName} job={resource.resourceJobTitle} tasks={resource.tasks} />);	

	})

    return (
		<div className={classes.Resources}>
		{resourcesComponents}
		</div>
	);

};

export default Resources;