import '../../styles/add-passed-training.scss';
import { Link } from 'react-router-dom';

const AddPassedTraining = () => {
	return (
		<div className='container1'>
			<h1>Add passed training</h1>
			<div className='form'>
				<h3>Training</h3>
				<form action=''>
					<div className='left'>
						<label htmlFor=''>Name</label>
						<input type='text' placeholder='Enter item name' />
						<label htmlFor=''>Training start date</label>
						<input type='date' placeholder='13 Feb 2023' />
						<label htmlFor=''>Duration</label>
						<input type='text' placeholder='Enter duration' />
						<label htmlFor=''>Type</label>
						<select name='' id=''>
							<option value=''>HTML</option>
							<option value=''>CSS</option>
							<option value=''>JavaScript</option>
						</select>
						<label htmlFor=''>Description</label>
						<input type='text-box' placeholder='Enter item description' />
					</div>
					<div className='right'>
						<label htmlFor=''>Add trainers</label>
						<select name='' id=''>
							<option value=''>John Doe</option>
							<option value=''>Jerome Alero</option>
							<option value=''>J Crow</option>
							<option value=''>Anna Smith</option>
						</select>
					</div>
					<Link
						to='/my-account/add-trainings'
						style={{ textDecoration: 'none', color: 'inherit' }}
					>
						<button>Cancel</button>
					</Link>
					<button>Add</button>
				</form>
			</div>
		</div>
	);
};

export default AddPassedTraining;
