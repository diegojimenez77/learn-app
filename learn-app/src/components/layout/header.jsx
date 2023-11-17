import React, { useContext, useState } from 'react';
import '../../styles/header.scss';
import Logo from '../../common/images/learn-logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import MiniProfile from '../student/mini-profile';

const Header = () => {
	const { currentUser } = useContext(AuthContext);
	const [miniProfileOpen, setMiniProfileOpen] = useState(false);

	const ValidateUser = () => {
		if (!currentUser) {
			return (
				<div>
					<Link to='/login'>
						<span>Sign in</span>
					</Link>
					<Link to='/joinus'>
						<button>Join us</button>
					</Link>
				</div>
			);
		}
		return (
			<div
				className='user'
				onClick={() => setMiniProfileOpen(!miniProfileOpen)}
			>
				<span>{currentUser.name}</span>
				<img src={currentUser.profilePic} alt='' />
			</div>
		);
	};

	return (
		<div className='header'>
			<div className='left-items'>
				<Link to='/'>
					<img src={Logo} alt='learn logo' />
				</Link>
				<ul>
					<li>
						<Link to='/blog'>Blog</Link>
					</li>
					<li>
						<Link to='/pricing'>Pricing</Link>
					</li>
					<li>
						<Link to='/aboutus'>About Us</Link>
					</li>
				</ul>
			</div>
			<div className='right-items'>
				{ValidateUser()}
				{miniProfileOpen && <MiniProfile />}
			</div>
		</div>
	);
};

export default Header;
