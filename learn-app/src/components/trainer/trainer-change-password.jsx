import '../../styles/change-password.scss';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const TrainerChangePassword = () => {
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
					<button>Cancel</button>
					<button>Change Password</button>
				</form>
			</div>
		</div>
	);
};

export default TrainerChangePassword;
