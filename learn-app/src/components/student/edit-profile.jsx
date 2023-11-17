import '../../styles/edit-profile.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const EditProfile = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<div className='container'>
			<h1>My Account</h1>
			<div className='data'>
				<h3>Edit Profile</h3>
				<p>Profile photo</p>
				<div className='image-side'>
					<img src={currentUser.profilePic} alt='' />
					<div className='side'>
						<h5>Upload your photo</h5>
						<p>Your photo should be in PNG of JPG fromat</p>
						<div className='buttons'>
							<button>Change Imgae</button>
							<button>Remove</button>
						</div>
					</div>
				</div>
				<div className='form'>
					<form action=''>
						<label htmlFor=''>First name</label>
						<br></br>
						<input type='text' placeholder={currentUser.name} />
						<br></br>
						<label htmlFor=''>Last name</label>
						<br></br>
						<input type='text' placeholder={currentUser.lastname} />
						<br></br>
						<label htmlFor=''>User name</label>
						<br></br>
						<input type='text' placeholder={currentUser.username} />
						<br></br>
						<label htmlFor=''>Date of birth</label>
						<br></br>
						<input type='text' placeholder={currentUser.dateofbirth} />
						<br></br>
						<label htmlFor=''>Address</label>
						<br></br>
						<input type='text' placeholder={currentUser.adress} />
						<br></br>
						<label htmlFor=''>Email</label>
						<br></br>
						<input type='text' placeholder={currentUser.email} />
						<br></br>
						<label htmlFor=''>Active</label>
						<input id='' type='checkbox' />
					</form>
					<div className='but2'>
						<button>
							<Link
								to='/my-account/student-profile'
								style={{ textDecoration: 'none', color: 'inherit' }}
							>
								Cancel
							</Link>
						</button>
						<button>
							<Link
								to='/my-account/student-profile'
								style={{ textDecoration: 'none', color: 'inherit' }}
							>
								Save changes
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditProfile;
