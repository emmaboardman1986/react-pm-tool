import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Calendar from '../../components/Calendar/Calendar';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/UI/Modal/Modal';
import TaskAdd from '../../components/Task/TaskAdd/TaskAdd';
import Task from '../../components/Task/Task';

const Layout = () => {

	const [showTaskAdd, setTaskAdd] = useState(false);

	const handleTaskAdd = () => {
		console.log("initial state: " + !showTaskAdd + showTaskAdd)
		let toggle = !showTaskAdd;
		setTaskAdd(toggle);
		return null;
	}

	return (
		<React.Fragment>
			<Modal 
				show={showTaskAdd} 
				modalClosed={handleTaskAdd}>
				<TaskAdd />
			</Modal>
			<Header />
			<Calendar />
			<Footer clicked={handleTaskAdd}/>
		</React.Fragment>
		);

}

export default Layout;