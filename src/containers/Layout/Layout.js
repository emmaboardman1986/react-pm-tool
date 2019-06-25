import React from 'react';
import Header from '../../components/Header/Header';
import Calendar from '../../components/Calendar/Calendar';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/UI/Modal/Modal';
import AddTask from '../../components/Task/AddTask/AddTask';

const Layout = () => {

	return (
		<React.Fragment>
			<Modal 
				show={false} 
				modalClosed={false}>
				<AddTask />
			</Modal>
			<Header />
			<Calendar />
			<Footer />
		</React.Fragment>
		);

}

export default Layout;