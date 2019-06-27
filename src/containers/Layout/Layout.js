import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Calendar from '../../components/Calendar/Calendar';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/UI/Modal/Modal';
import TaskAdd from '../../components/Task/TaskAdd/TaskAdd';
import TaskDetail from '../../components/Task/TaskDetail/TaskDetail';
import Task from '../../components/Task/Task';

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

	const handleTaskAdd = () => {
		console.log("initial state: " + !showTaskAdd + showTaskAdd)
		let toggle = !showTaskAdd;
		setTaskAdd(toggle);
		return null;
	}


	const clickTask = (task) => {
		console.log("clicked in layout: " + task.taskTitle)
		setSelectedTask(task);
		handleTaskDetail()
		console.log(selectedTask);
	}

	const handleTaskDetail = () => {
		let toggle = !showTaskDetail;
		setTaskDetail(toggle);
	}

	return (
		<React.Fragment>
			<Modal
				show={showTaskAdd}
				modalClosed={handleTaskAdd}>
				<TaskAdd />
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