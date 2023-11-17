import '../../styles/change-password.scss';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';

const ChangePassword = () => {
	return (
		<div className='contain'>
			<h4>Security</h4>
			<LockOutlinedIcon />
			<h5>Change password</h5>
			<div>
				<form action=''>
					<label htmlFor=''>Current password</label>
					<br></br>
					<input type='password' placeholder='Enter current password' />
					<br></br>
					<label htmlFor=''>New password</label>
					<br></br>
					<input type='password' placeholder='Enter new password' />
					<br></br>
					<label htmlFor=''>Confirm new password</label>
					<br></br>
					<input type='password' placeholder='Confirm new password' />
					<br></br>
					<Link
						to='/my-account/student-profile'
						style={{ textDecoration: 'none', color: 'inherit' }}
					>
						<button>Cancel</button>
					</Link>
					<button>Change Password</button>
				</form>
			</div>
		</div>
	);
};

export default ChangePassword;
