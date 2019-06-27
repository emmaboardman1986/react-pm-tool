import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Calendar from '../../components/Calendar/Calendar';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/UI/Modal/Modal';
import TaskAdd from '../../components/Task/TaskAdd/TaskAdd';
import TaskDetail from '../../components/Task/TaskDetail/TaskDetail';
import axios from 'axios';

const Layout = () => {

	const [showTaskAdd, setTaskAdd] = useState(false);
	const [showTaskDetail, setTaskDetail] = useState(false);
	const [selectedTask, setSelectedTask] = useState({
		"taskId": "0",
		"taskTitle": "No task was selected, please exit the screen and click a task",
		"taskAffectedArea": "n/a",
		"taskErroneousBehaviour": "n/a",
		"taskExpectedBehaviour": "n/a",
		"taskImpact": "n/a",
		"taskStartTime": "n/a",
		"taskEndTime": "n/a",
		"taskEstimate": "n/a",
		"projectTitle": "n/a",
		"clientName": "n/a"
	}
	);
	const [projectList, setProjectList] = useState([]);
	const [resourceList, setResourceList] = useState([]);
	const [resourceSchedule, setResourceSchedule] = useState("resourceSchedule");
	const [availability, setAvailability] = useState("availability");
	const [resourceAndEstimate, setResourceAndEstimate] = useState("r and e");

	useEffect(() => {
		axios.get('http://40414669.wdd.napier.ac.uk/inc/readAddTaskOptions.php')
		.then(result => {
		setProjectList(result.data["clientProjects"]);
		setResourceList(result.data["resources"]);
		handleTaskPresets(result.data["clientProjects"]);
		});
	}, []);

	useEffect(()=> {
		handleSchedulePlacement(resourceAndEstimate);
		console.log(resourceAndEstimate);
	}, [resourceSchedule, resourceAndEstimate]);

	const handleTaskAdd = () => {
		let toggle = !showTaskAdd;
		setTaskAdd(toggle);
		return null;
	}

	const clickTask = (task) => {
		setSelectedTask(task);
		handleTaskDetail()
	}

	const handleTaskDetail = () => {
		let toggle = !showTaskDetail;
		setTaskDetail(toggle);
	}

	const handleTaskPresets = (projectList) => {
		let projectsArray = projectList.reduce(function(
			formPresetsArray,
			clientObj
		  ) {
			  console.log("client object:" + clientObj.clientName);
			for (let j = 0; j < clientObj.projects.length; j++) {
			  let clientObject = {
				clientName: clientObj.clientName,
				projectName: clientObj.projects[j].projectTitle,
				projectId: clientObj.projects[j].projectId
			  };
			  formPresetsArray.push(clientObject);
			}
			return formPresetsArray;
		  },
		  []);
		  setProjectList(projectsArray);
	}

	const fetchResourceSchedule =(resourceAndEstimate) =>{
		let url = "http://40414669.wdd.napier.ac.uk/inc/readResourceSchedule.php/?id=" + resourceAndEstimate.resourceId; 
		axios.get(url)
		.then(result => {
		setResourceSchedule(result.data);
		setResourceAndEstimate(resourceAndEstimate);
		});
	}

	const handleSchedulePlacement = (resourceAndEstimate) => {
	console.log("resource schedule: " + resourceSchedule);
	 const weeklyAvailability = Array(45).fill(true);
      const weeklyTimeSlots = [
        "Mon0900",
        "Mon1000",
        "Mon1100",
        "Mon1200",
        "Mon1300",
        "Mon1400",
        "Mon1500",
        "Mon1600",
        "Mon1700",
        "Tues0900",
        "Tues1000",
        "Tues1100",
        "Tues1200",
        "Tues1300",
        "Tues1400",
        "Tues1500",
        "Tues1600",
        "Tues1700",
        "Wed0900",
        "Wed1000",
        "Wed1100",
        "Wed1200",
        "Wed1300",
        "Wed1400",
        "Wed1500",
        "Wed1600",
        "Wed1700",
        "Thurs0900",
        "Thurs1000",
        "Thurs1100",
        "Thurs1200",
        "Thurs1300",
        "Thurs1400",
        "Thurs1500",
        "Thurs1600",
        "Thurs1700",
        "Fri0900",
        "Fri1000",
        "Fri1100",
        "Fri1200",
        "Fri1300",
        "Fri1400",
        "Fri1500",
        "Fri1600",
        "Fri1700"
      ];
      if (resourceSchedule.length > 0) {
        for (let n = 0; n < resourceSchedule.length; n++) {
          const startTime = resourceSchedule[n].taskStartTime;
          const estimatedTime = resourceSchedule[n].taskEstimate;
          for (let i = 0; i < weeklyTimeSlots.length; i++) {
            if (weeklyTimeSlots[i] == startTime) {
              for (let j = 0; j < estimatedTime; j++) {
                weeklyAvailability[i + j] = false;
              }
            }
          }
        }
      }
      console.log(weeklyAvailability);
      const estimateArray = Array(resourceAndEstimate.taskEstimate).fill(true);
      let indexOfFirstAvailability = findAvailability(
        weeklyAvailability,
        estimateArray
	  );
	  console.log("iofa: " + indexOfFirstAvailability);
	  console.log("rte: " + resourceAndEstimate.taskEstimate);
      const endTime =
        parseInt(indexOfFirstAvailability) +
		parseInt(resourceAndEstimate.taskEstimate);
		console.log(endTime);
	  setAvailability({
		  startTime: weeklyTimeSlots[indexOfFirstAvailability],
		  endTime: weeklyTimeSlots[endTime]
	  })
	  console.log(weeklyTimeSlots[endTime]);
	}

	const findAvailability = (arr, subarr) => {
		for (var i = 0; i < 1 + (arr.length - subarr.length); i++) {
			var j = 0;
			for (; j < subarr.length; j++) if (arr[i + j] !== subarr[j]) break;
			if (j == subarr.length) return i;
		  }
		  return -1;
	}

	return (
		<React.Fragment>
			<Modal
				show={showTaskAdd}
				modalClosed={handleTaskAdd}
				>
				<TaskAdd
					projectList={projectList}
					resourceList={resourceList}
					handleSchedulePlacement={fetchResourceSchedule}
					availableTimes={availability}/>
			</Modal>
			<Modal
				show={showTaskDetail}
				modalClosed={handleTaskDetail}
			>
				<TaskDetail
					taskTitle={selectedTask.taskTitle}
					taskClientName={selectedTask.clientName}
					taskImpact={selectedTask.taskImpact}
					taskProject={selectedTask.taskProjectTitle}
					taskError={selectedTask.taskErroneousBehaviour}
					taskStartTime={selectedTask.taskStartTime}
					taskEndTime={selectedTask.taskEndTime} />
			</Modal>
			<Header />
			<Calendar taskClicked={clickTask} />
			<Footer clicked={handleTaskAdd} />
		</React.Fragment>
	);

}

export default Layout;