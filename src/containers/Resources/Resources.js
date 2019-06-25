import React from 'react';
import Resource from './Resource/Resource';
import classes from './Resources.module.css';

const Resources = () => {


	const resourcesRaw = {

		RId01: {
			name: "Bernard",
			jobTitle: "Back End Developer",
			assignedTasks: {
				task01: {
					title: "BRct",
					description: "Build React MVP",
					startDayTime: "Mon0900",
					endDayTime: "Mon1300",
					color: "#C6F400"
				},
				task02: {
					title: "BVue",
					description: "Build Vue MVP",
					startDayTime: "Mon1300",
					endDayTime: "Mon1700",
					color: "#1DA4C1"
				},
				task03: {
					title: "BAng",
					description: "Build Angular MVP",
					startDayTime: "Tues0900",
					endDayTime: "Tues1700",
					color: "#B087FF"
				}
			}
		},
		RId02: {
			name: "Dolores",
			jobTitle: "Graphic Designer",
			assignedTasks: {
				task01: {
					title: "DRct",
					description: "Build React MVP",
					startDayTime: "Mon0900",
					endDayTime: "Mon1200",
					color: "#F48A18"
				},
				task02: {
					title: "DVue",
					description: "Build Vue MVP",
					startDayTime: "Mon1200",
					endDayTime: "Mon1700",
					color: "#C6F400"
				},
				task03: {
					title: "DAng",
					description: "Build Angular MVP",
					startDayTime: "Tues0900",
					endDayTime: "Tues1100",
					color: "#B087FF"
				},
				task04: {
					title: "DRct",
					description: "Build React MVP",
					startDayTime: "Tues1100",
					endDayTime: "Tues1700",
					color: "#F48A18"
				}

			}
		},
		RId03: {
			name: "Teddy",
			jobTitle: "Front End Developer",
			assignedTasks: {
				task01: {
					title: "TRct",
					description: "Build React MVP",
					startDayTime: "Mon0900",
					endDayTime: "Mon1400",
					color: "#B087FF"
				},
				task02: {
					title: "TVue",
					description: "Build Vue MVP",
					startDayTime: "Mon1400",
					endDayTime: "Mon1700",
					color: "#F48A18"
				},
				task03: {
					title: "TAng",
					description: "Build Angular MVP",
					startDayTime: "Tues0900",
					endDayTime: "Tues1100",
					color: "#1DA4C1"
				}
			}
		}


	};

	const resourcesArray = Object.values(resourcesRaw);

	let resourcesComponents = resourcesArray.map(resource => {
		return (<Resource key={resource.name} name={resource.name} job={resource.jobTitle} tasks={resource.assignedTasks} />);	

	})

    return (
		<div className={classes.Resources}>
		{resourcesComponents}
		</div>
	);

};

export default Resources;