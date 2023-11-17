import JTrainer from '../../common/images/register-trainer.png';
import JStudent from '../../common/images/register-student.png';
import '../../styles/joinus.scss';
import { Link } from 'react-router-dom';

const Joinus = () => {
	return (
		<div>
			<div className='container-joinus'>
				<h1>Join Us</h1>
				<div className='container'>
					<div className='joinus-text'>
						<h2>Register as a Trainer</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
							maiores aliquid dolores iste, quia excepturi. Voluptatum optio, ab
							tenetur commodi voluptates facere magnam provident sed, ipsa quam
							at possimus ea.
						</p>
						<Link
							to='/registration-trainer'
							style={{ textDecoration: 'none', color: 'inherit' }}
						>
							<button>Join Us</button>
						</Link>
					</div>
					<img src={JTrainer} alt='' />
				</div>
				<div className='container'>
					<div className='joinus-text'>
						<h2>Register as a Student</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
							maiores aliquid dolores iste, quia excepturi. Voluptatum optio, ab
							tenetur commodi voluptates facere magnam provident sed, ipsa quam
							at possimus ea.
						</p>
						<Link
							to='/registration-student'
							style={{ textDecoration: 'none', color: 'inherit' }}
						>
							<button>Join Us</button>
						</Link>
					</div>
					<img src={JStudent} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Joinus;
