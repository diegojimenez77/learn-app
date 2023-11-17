import { Link } from 'react-router-dom';
import Video from '../../common/images/home-video.png';
import Joinus from '../../common/images/join-us.png';
import '../../styles/home.scss';

const Home = () => {
	return (
		<div className='home-content'>
			<h1>Let's start learning</h1>
			<p>
				Welcome to Learn Platform - where every day is a day to learn. Dive into
				the vast ocean of knowledge and empower yourself with the tools for a
				successful tomorrow. Happy learning!
			</p>
			<img className='video' src={Video} alt='video' />
			<Link to={'/joinus'}>
				<img className='join' src={Joinus} alt='pic' />
			</Link>
		</div>
	);
};

export default Home;
