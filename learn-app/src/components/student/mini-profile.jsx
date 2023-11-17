import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import '../../styles/mini-profile.scss';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const MiniProfile = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);

	const handleLogout = () => {
		localStorage.removeItem('user');
		navigate('/');
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	};

	const defineRotue = () => {
		if (currentUser.role === 'trainer') {
			navigate('/my-account-trainer/trainer-profile');
		} else {
			navigate('/my-account/student-profile');
		}
	};

	return (
		<div className='miniprofile'>
			<div className='item' onClick={defineRotue}>
				<AccountCircleOutlinedIcon />
				My Account
			</div>

			<div className='item'>
				<ModeNightOutlinedIcon />
				Night mode
			</div>

			<div className='sign-out' onClick={handleLogout}>
				<ExitToAppOutlinedIcon />
				Sign out
			</div>
		</div>
	);
};

export default MiniProfile;
