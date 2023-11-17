import React, { useState } from 'react';
import Trainer from '../../common/images/registration-trainer.png';
import '../../styles/registrationform-trainer.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegistrationFormTrainer = () => {
	const [inputs, setInputs] = useState({
		username: '',
		name: '',
		lastname: '',
		email: '',
		password: '',
		specialization: '',
	});
	const [err, setErr] = useState(false);
	const [conf, setConf] = useState();

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleClick = async (e) => {
		e.preventDefault();
		try {
			await axios.post(
				'http://localhost:8800/api/auth/register-trainer',
				inputs
			);
			setConf('Trainer successfully registerred!, Log in now!, Click here...');
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
			<div className='subtext'>Trainer</div>
			<div className='container3'>
				<img src={Trainer} alt='trainer' />
				<form>
					<label>Username</label>
					<input
						type='text'
						placeholder='usernamet'
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
						placeholder='Input text'
						name='password'
						onChange={handleChange}
					/>
					<label>Specialization</label>
					<select name='specialization' onChange={handleChange} required>
						<option value=''>--Select one--</option>
						<option value='Algorithms'>Algorithms</option>
						<option value='CSS'>CSS</option>
						<option value='Go-lang'>Go Lang</option>
						<option value='HTML'>HTML</option>
						<option value='Java'>Java</option>
						<option value='JavaScript'>JavaScript</option>
						<option value='PHP'>PHP</option>
						<option value='Python'>Python</option>
						<option value='Rust'>Rust</option>
					</select>
					<label style={style}>{err && err}</label>
					<Link to='/login'>{conf}</Link>
					<button onClick={handleClick}>Submit</button>
				</form>
			</div>
		</div>
	);
};

export default RegistrationFormTrainer;
