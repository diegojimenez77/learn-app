import Students from '../../common/images/students.png';
import OurTeam from '../../common/images/ourTeam.png';
import '../../styles/aboutus.scss';

const About = () => {
	return (
		<div className='aboutus-content'>
			<h1>About Us</h1>
			<p>
				Welcome to the 'About Us' section of Learn Platform, where we aim to
				provide you with deeper understanding of out philosophy, values, and
				mission. Established in 2023, Learn Platform was born out of a passion
				for learning and a belief in the power of knowledge to transform lives.
			</p>
			<img className='students' src={Students} alt='' />
			<img className='ourTeam' src={OurTeam} alt='' />
		</div>
	);
};

export default About;
