import '../../styles/my-accout.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const TrainerMyAccount = () => {
	const { currentUser } = useContext(AuthContext);

	return (
		<div>
			<div className='profile-container'>
				<h1>My Account</h1>
				<div className='container'>
					<div className='data'>
						<h3>My profile</h3>
						<img src={currentUser.profilePic} alt='' />
						<label htmlFor=''>Status: </label>
						<span>Active</span>
						<br></br>
						<label htmlFor=''>First Name</label>
						<br></br>
						<span>{currentUser.name}</span>
						<br></br>
						<label htmlFor=''>Last Name</label>
						<br></br>
						<span>{currentUser.lastname}</span>
						<br></br>
						<label htmlFor=''>User Name</label>
						<br></br>
						<span>{currentUser.username}</span>
						<br></br>
						<label htmlFor=''>Address</label>
						<br></br>
						<span>{currentUser.adress}</span>
						<br></br>
						<label htmlFor=''>Email</label>
						<br></br>
						<span>{currentUser.email}</span>
						<br></br>
					</div>
					<div className='my-trainers'>
						<div className='head'>
							<h3>My Students</h3>
						</div>
						<table>
							<thead>
								<tr>
									<th className='table-names'>NAME</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className='table-names'>Elizabeth Lopez</td>
									<td>Active</td>
								</tr>
								<tr>
									<td className='table-names'>Matthew Martinez</td>
									<td>Active</td>
								</tr>
								<tr>
									<td className='table-names'>Elizabeth Hall</td>
									<td>Not Active</td>
								</tr>
								<tr>
									<td className='table-names'>Maria White</td>
									<td>Not Active</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div className='buttons'>
					<div className='buttons-left'>
						<button id='edit'>
							<Link
								to={`/my-account-trainer/edit-profile/${currentUser.id}`}
								style={{ textDecoration: 'none', color: 'inherit' }}
							>
								Edit Profile
							</Link>
						</button>
						<button id='change'>
							<Link
								to='/my-account-trainer/change-password'
								style={{ textDecoration: 'none', color: 'inherit' }}
							>
								Change Password
							</Link>
						</button>
					</div>
					<div className='buttons-right'>
						<button>Delete Profile</button>
					</div>
				</div>
				<div className='my-trainings'>
					<h1>My Trainings</h1>
					<p>
						The training Section is interactive, allowing you to engage with
						triners add fellow learners, participate in quizzes, and track your
						progress. All our courses are flexible and adaptable to your
						schedule and learning speed.
					</p>
					<button>
						<Link
							to='/my-account-trainer/add-trainings'
							style={{ textDecoration: 'none', color: 'inherit' }}
						>
							View Trainings
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default TrainerMyAccount;
