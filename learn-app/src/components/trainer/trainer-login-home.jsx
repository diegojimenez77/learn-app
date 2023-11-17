import { useContext } from 'react';
import Box from '../../common/images/student-home.png';
import '../../styles/trainer-login-home.scss';
import { AuthContext } from '../../context/authContext';

const TrainerLoginHome = () => {
	const { currentUser } = useContext(AuthContext);

	return (
		<div className='container'>
			<h1>Hi, {currentUser.name}</h1>
			<p>
				Welcome to Learn Platform - where every day is a day to learn. Dive into
				the vast ocean of knowledge and empower yourself with the tools for a
				successful tomorrow. Happy learning!
			</p>
			<h1>What's new?</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
				accusamus magni placeat in! Odit rem itaque illo beatae nesciunt
				perspiciatis!
			</p>
			<img src={Box} alt='list of boxes' className='responsive-image' />
		</div>
	);
};

export default TrainerLoginHome;
