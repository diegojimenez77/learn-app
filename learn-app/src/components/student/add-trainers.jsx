import '../../styles/add-trainer.scss';

const AddTrainer = () => {
	return (
		<div className='container'>
			<h1>Add trainer</h1>
			<p>Please select trainers for adding them into your trainers list.</p>
			<p>* - There is no posibility to remove the trainer.</p>
			<div className='trainers-detail'>
				<div className='all-trainers'>
					<h3>All Trainers</h3>
					<div className='table'>
						<tr>
							<th></th>
							<th>NAME</th>
							<th>SPECIALIZATION</th>
						</tr>
						<tr>
							<td>
								<input type='checkbox' />
							</td>
							<td className='table-names'>Elizabeth Watson</td>
							<td>Go Lang</td>
						</tr>
						<tr>
							<td>
								<input type='checkbox' />
							</td>
							<td className='table-names'>Elizabeth Allen</td>
							<td>Rust</td>
						</tr>
						<tr>
							<td>
								<input type='checkbox' />
							</td>
							<td className='table-names'>Caleb Jones</td>
							<td>Python</td>
						</tr>
						<tr>
							<td>
								<input type='checkbox' />
							</td>
							<td className='table-names'>Javier Ortiz</td>
							<td>HTML</td>
						</tr>
						<tr>
							<td>
								<input type='checkbox' />
							</td>
							<td className='table-names'>Brandon Taylor</td>
							<td>CSS</td>
						</tr>
						<button>Add</button>
					</div>
				</div>
				<div className='my-trainers'>
					<h3>My Trainers</h3>
					<div>
						<tr>
							<th>NAME</th>
							<th>SPECIALIZATION</th>
						</tr>
						<tr>
							<td className='table-names'>Elizabeth Lopez</td>
							<td>PHP</td>
						</tr>
						<tr>
							<td className='table-names'>Matthew Martinez</td>
							<td>JavaScript</td>
						</tr>
						<tr>
							<td className='table-names'>Elizabeth Hall</td>
							<td>Algorithms</td>
						</tr>
						<tr>
							<td className='table-names'>Maria White</td>
							<td>Java</td>
						</tr>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddTrainer;
