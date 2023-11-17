import React, { useState } from 'react';
import Student from '../../common/images/registration-student.png';
import '../../styles/registrationform-student.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegistrationFormStudent = () => {
	const [inputs, setInputs] = useState({
		username: '',
		name: '',
		lastname: '',
		email: '',
		password: '',
		dateofbirth: '',
		address: '',
	});

	const [err, setErr] = useState(null);
	const [conf, setConf] = useState(false);

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleClick = async (e) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:8800/api/auth/register', inputs);
			setConf('Student successfully registerred!, Log in now!, Click here...');
		} catch (err) {
			setErr(err.response.data);
		}
	};

	const style = {
		color: 'red',
	};
	return (
		<div className='registration-trainer'>
			<div className='heading'>Registration</div>
			<div className='subtext'>Student</div>
			<div className='container2'>
				<img src={Student} alt='trainer' />
				<form>
					<label>Username</label>
					<input
						type='text'
						placeholder='username'
						name='username'
						onChange={handleChange}
					/>
					<label>First name</label>
					<input
						type='text'
						placeholder='input text'
						name='name'
						onChange={handleChange}
					/>
					<label>Last name</label>
					<input
						type='text'
						placeholder='Input text'
						name='lastname'
						onChange={handleChange}
					/>
					<label>Email</label>
					<input
						type='text'
						placeholder='Input text'
						name='email'
						onChange={handleChange}
					/>
					<label>Password</label>
					<input
						type='password'
						placeholder='password'
						name='password'
						onChange={handleChange}
					/>
					<label>Date of birth (optional)</label>
					<input
						type='text'
						placeholder='Input text'
						name='dateofbirth'
						onChange={handleChange}
					/>
					<label>Address (optional)</label>
					<input
						type='text'
						placeholder='Input text'
						name='address'
						onChange={handleChange}
					/>
					<label style={style}>{err && err}</label>
					<Link to='/login'>{conf}</Link>
					<button onClick={handleClick}>Submit</button>
				</form>
			</div>
		</div>
	);
};

export default RegistrationFormStudent;
