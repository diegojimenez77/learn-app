import '../../styles/add-trainings.scss';
import { Link } from 'react-router-dom';

const TrainerAddTrainings = () => {
	return (
		<>
			<div className='container'>
				<h1>Trainings</h1>
				<div className='upper-part'>
					<div className='add-training'>
						<h3>Search Training</h3>
						<form action=''>
							<label htmlFor=''>Trainer name</label>
							<br></br>
							<input type='text' placeholder='First name' />
							<br></br>
							<label htmlFor=''>Specialization</label>
							<br></br>
							<input type='text' placeholder='Technology' />
							<br></br>
						</form>
						<button>Search</button>
					</div>
					<div className='date-picker'>
						<form action=''>
							<label htmlFor=''>From</label>
							<input type='date' />
							<label htmlFor=''>To</label>
							<input type='date' />
						</form>
					</div>
				</div>
			</div>
			<div className='passed-trainings'>
				<h3>Results</h3>
				<table>
					<th>DATE</th>
					<th>TRAINING NAME</th>
					<th>TYPE</th>
					<th>TRAINER NAME</th>
					<th>DURATION</th>

					<tr>
						<td>12.03.2023</td>
						<td>JavaScript Course 1</td>
						<td>Webinar</td>
						<td>Matthew Martinez</td>
						<td>15d</td>
					</tr>
					<tr>
						<td>12.03.2023</td>
						<td>JS Course 2</td>
						<td>Webinar</td>
						<td>Matthew Martinez</td>
						<td>10d</td>
					</tr>
					<tr>
						<td>12.03.2023</td>
						<td>Java</td>
						<td>Webinar</td>
						<td>Maria White</td>
						<td>2d</td>
					</tr>
				</table>
			</div>
		</>
	);
};

export default TrainerAddTrainings;
