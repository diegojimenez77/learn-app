import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/login.scss';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { AuthContext } from '../../context/authContext';

const Login = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);

	const [inputs, setInputs] = useState({
		username: '',
		password: '',
	});

	const [err, setErr] = useState(null);

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const { login } = useContext(AuthContext);

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await login(inputs);
		} catch (err) {
			setErr(err.response.data);
		}

		navigate('/my-account/login-home');
	};

	return (
		<div className='login'>
			<div className='heading'>Sign in</div>
			<div className='subtext'>Welcome back</div>
			<form>
				<label htmlFor=''>User name</label>
				<div className='input-container-user'>
					<div className='user-icon'>
						<PermIdentityOutlinedIcon />
					</div>
					<input
						type='text'
						placeholder='Enter username'
						name='username'
						onChange={handleChange}
					/>
				</div>
				<label htmlFor=''>Password</label>
				<div className='input-container-password'>
					<div className='password-icon'>
						<LockOutlinedIcon />
					</div>
					<input
						type='password'
						placeholder='Enter password'
						name='password'
						onChange={handleChange}
					/>
					<div className='visibility-icon'>
						<VisibilityOffOutlinedIcon />
					</div>
				</div>
				{err && err}
				<button onClick={handleLogin}>Sign in</button>
			</form>
			<span>or</span>
			<span>Don't have an account? {<Link to={'/joinus'}>Sign up</Link>}</span>
		</div>
	);
};

export default Login;
